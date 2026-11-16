/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  DesignDocument, 
  CanvasElement, 
  CanvasPage, 
  ActiveSidebarTab,
  CustomFont,
  ContextualSidebarPanel,
  UserProfile
} from './types';
import { DESIGN_TEMPLATES, TemplateItem } from './data/templates';
import { Header } from './components/Header';
import { PropertyToolbar } from './components/PropertyToolbar';
import { Sidebar } from './components/Sidebar';
import { CanvasArea } from './components/CanvasArea';
import { FooterBar } from './components/FooterBar';
import { ResizeModal } from './components/ResizeModal';
import { PresentationModal } from './components/PresentationModal';
import { ImageEditorModal } from './components/ImageEditorModal';
import { FontImportModal } from './components/FontImportModal';
import { HomeScreen, SavedProjectSummary } from './components/HomeScreen';
import { initializeCustomFonts } from './utils/fontManager';
import { getUserProfile, initAuthListener } from './utils/authManager';
import { saveUserDesignToFirestore } from './services/firebase';
import { 
  exportArtboardToPng, 
  exportArtboardToJpeg, 
  exportArtboardToSvg, 
  exportProjectToJson, 
  printArtboard 
} from './utils/exportUtils';

const INITIAL_DOCUMENT: DesignDocument = {
  id: 'doc-1',
  title: 'Diseño sin título - Post de Instagram',
  width: 1080,
  height: 1080,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  pages: [
    { ...DESIGN_TEMPLATES[0].page }
  ]
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'editor'>('home');
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => getUserProfile());

  const [doc, setDoc] = useState<DesignDocument>(() => {
    const profile = getUserProfile();
    if (profile.isLoggedIn && profile.id && profile.id !== 'guest') {
      try {
        const saved = localStorage.getItem(`creava_saved_document_${profile.id}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.pages && parsed.pages.length > 0) {
            return parsed;
          }
        }
      } catch (e) {
        console.warn('LocalStorage load failed:', e);
      }
    }
    return INITIAL_DOCUMENT;
  });

  // Listen for login / logout / user switches to ensure user isolation:
  // - If logging out: clear local document and active views
  // - If switching accounts: switch document to that account's document or fresh INITIAL_DOCUMENT
  useEffect(() => {
    const handleUserSwitch = (newUser: UserProfile) => {
      setCurrentUser(newUser);

      if (!newUser.isLoggedIn || !newUser.id || newUser.id === 'guest') {
        // User logged out: clear current document to blank initial document
        setDoc(INITIAL_DOCUMENT);
        setCurrentPageIndex(0);
        setSelectedElementId(null);
        setPast([]);
        setFuture([]);
      } else {
        // User logged in: load their specific cached document or default
        try {
          const userSaved = localStorage.getItem(`creava_saved_document_${newUser.id}`);
          if (userSaved) {
            const parsed = JSON.parse(userSaved);
            if (parsed && parsed.pages && parsed.pages.length > 0) {
              setDoc(parsed);
              setCurrentPageIndex(0);
              setSelectedElementId(null);
              setPast([]);
              setFuture([]);
              return;
            }
          }
        } catch (err) {
          console.warn(err);
        }
        setDoc(INITIAL_DOCUMENT);
        setCurrentPageIndex(0);
        setSelectedElementId(null);
        setPast([]);
        setFuture([]);
      }
    };

    const handleAuthChange = (e: Event) => {
      const customEvent = e as CustomEvent<UserProfile>;
      if (customEvent.detail) {
        handleUserSwitch(customEvent.detail);
      }
    };

    window.addEventListener('creava_auth_changed', handleAuthChange);
    // Initialize Firebase onAuthStateChanged listener
    const unsubFirebase = initAuthListener((user) => {
      handleUserSwitch(user);
    });

    return () => {
      window.removeEventListener('creava_auth_changed', handleAuthChange);
      unsubFirebase();
    };
  }, []);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);

  // Undo / Redo history
  const [past, setPast] = useState<DesignDocument[]>([]);
  const [future, setFuture] = useState<DesignDocument[]>([]);

  // UI Panels state
  const [activeSidebarTab, setActiveSidebarTab] = useState<ActiveSidebarTab>('templates');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [isResizeModalOpen, setIsResizeModalOpen] = useState(false);
  const [isPresentationModalOpen, setIsPresentationModalOpen] = useState(false);
  const [isImageEditorOpen, setIsImageEditorOpen] = useState(false);
  const [isFontModalOpen, setIsFontModalOpen] = useState(false);
  const [customFonts, setCustomFonts] = useState<CustomFont[]>([]);
  const [zoom, setZoom] = useState(0.55);

  // Contextual sidebar replacement (Canva behavior)
  const [contextualSidebarPanel, setContextualSidebarPanel] = useState<ContextualSidebarPanel>(null);
  const [savedSidebarTab, setSavedSidebarTab] = useState<ActiveSidebarTab>('templates');
  const [wasSidebarOpenBeforeContext, setWasSidebarOpenBeforeContext] = useState<boolean>(true);

  const handleOpenContextualPanel = (panel: ContextualSidebarPanel) => {
    if (contextualSidebarPanel === panel) {
      handleCloseContextualPanel();
      return;
    }
    if (!contextualSidebarPanel) {
      setSavedSidebarTab(activeSidebarTab);
      setWasSidebarOpenBeforeContext(isSidebarOpen);
    }
    setContextualSidebarPanel(panel);
    setIsSidebarOpen(true);
  };

  const handleCloseContextualPanel = () => {
    setContextualSidebarPanel(null);
    setActiveSidebarTab(savedSidebarTab);
    if (!wasSidebarOpenBeforeContext) {
      setIsSidebarOpen(false);
    }
  };

  const artboardRef = useRef<HTMLDivElement | null>(null);

  // Initialize and load saved custom fonts into DOM
  useEffect(() => {
    const loaded = initializeCustomFonts();
    setCustomFonts(loaded);
  }, []);

  const currentPage = doc.pages[currentPageIndex] || doc.pages[0];
  const selectedElement = currentPage.elements.find(el => el.id === selectedElementId) || null;

  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving'>('saved');

  // Immediately persist document to Firestore (if logged in) and user-isolated LocalStorage
  const saveDocumentImmediately = useCallback((targetDoc: DesignDocument) => {
    const user = getUserProfile();

    const currentSummary: SavedProjectSummary = {
      id: targetDoc.id,
      title: targetDoc.title || 'Diseño sin título',
      width: targetDoc.width,
      height: targetDoc.height,
      pageCount: targetDoc.pages.length,
      previewBg: targetDoc.pages[0]?.background?.value || '#ffffff',
      updatedAt: Date.now(),
      document: targetDoc,
    };

    // If user is logged in, save directly to Firebase Firestore
    if (user.isLoggedIn && user.id && user.id !== 'guest') {
      try {
        localStorage.setItem(`creava_saved_document_${user.id}`, JSON.stringify(targetDoc));

        const userKey = `creava_saved_projects_${user.id}`;
        const existing = localStorage.getItem(userKey);
        let projects: SavedProjectSummary[] = [];
        if (existing) {
          try {
            const parsed = JSON.parse(existing);
            if (Array.isArray(parsed)) projects = parsed;
          } catch {
            projects = [];
          }
        }

        const idx = projects.findIndex(p => p.id === targetDoc.id);
        if (idx >= 0) {
          projects[idx] = currentSummary;
        } else {
          projects = [currentSummary, ...projects.filter(p => p.id !== targetDoc.id).slice(0, 49)];
        }

        localStorage.setItem(userKey, JSON.stringify(projects));
        window.dispatchEvent(new CustomEvent('creava_project_saved', { detail: currentSummary }));

        // Async save to Firestore
        saveUserDesignToFirestore(user.id, targetDoc).catch((err) => {
          console.warn('Background Firestore save error:', err);
        });
        setSaveStatus('saved');
      } catch (e) {
        console.warn('Save error:', e);
      }
    } else {
      // Guest user session: save only to temporary guest document
      try {
        localStorage.setItem('creava_saved_document_guest', JSON.stringify(targetDoc));
        setSaveStatus('saved');
      } catch (e) {
        console.warn(e);
      }
    }
  }, []);

  // Auto-save Document to LocalStorage and update recent projects whenever doc changes
  useEffect(() => {
    if (currentView !== 'editor') return;

    setSaveStatus('saving');
    const timer = setTimeout(() => {
      saveDocumentImmediately(doc);
    }, 600);

    return () => clearTimeout(timer);
  }, [doc, currentView, saveDocumentImmediately]);

  // Ensure work is instantly saved if user closes or refreshes tab
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (currentView === 'editor') {
        saveDocumentImmediately(doc);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentView, doc, saveDocumentImmediately]);

  // Extract all distinct colors used in the current page
  const documentColors = Array.from(new Set([
    currentPage.background.value,
    ...currentPage.elements.map(el => el.color || el.fillColor || el.strokeColor || '')
  ])).filter(Boolean);

  // Auto-fit zoom to window size on load
  const fitToScreen = useCallback(() => {
    // Available workspace dimensions
    const sidebarWidth = isSidebarOpen ? 72 + 320 : 72;
    const availableWidth = window.innerWidth - sidebarWidth - 100;
    const availableHeight = window.innerHeight - 56 - 44 - 40 - 80;

    const scaleX = availableWidth / doc.width;
    const scaleY = availableHeight / doc.height;
    const calculatedScale = Math.min(scaleX, scaleY, 0.9);
    setZoom(Math.max(0.2, Math.round(calculatedScale * 100) / 100));
  }, [doc.width, doc.height, isSidebarOpen]);

  useEffect(() => {
    fitToScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc.width, doc.height]);

  // History Helper: Commit changes with undo tracking
  const updateDocumentWithHistory = useCallback((newDoc: DesignDocument) => {
    setPast(prev => [...prev.slice(-30), doc]);
    setFuture([]);
    setDoc(newDoc);
  }, [doc]);

  // Undo
  const handleUndo = useCallback(() => {
    if (past.length === 0) return;
    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);

    setFuture(prev => [doc, ...prev]);
    setPast(newPast);
    setDoc(previous);
  }, [past, doc]);

  // Redo
  const handleRedo = useCallback(() => {
    if (future.length === 0) return;
    const next = future[0];
    const newFuture = future.slice(1);

    setPast(prev => [...prev, doc]);
    setFuture(newFuture);
    setDoc(next);
  }, [future, doc]);

  // Update element properties
  const handleUpdateElement = (id: string, updates: Partial<CanvasElement>) => {
    const updatedPages = doc.pages.map((p, pIdx) => {
      if (pIdx !== currentPageIndex) return p;
      return {
        ...p,
        elements: p.elements.map(el => {
          if (el.id !== id) return el;
          const updated = { ...el, ...updates };
          // If any field in updates was explicitly set to undefined, delete it cleanly
          for (const key of Object.keys(updates) as Array<keyof CanvasElement>) {
            if (updates[key] === undefined) {
              delete updated[key];
            }
          }
          return updated;
        })
      };
    });

    setDoc({
      ...doc,
      pages: updatedPages,
      updatedAt: Date.now()
    });
  };

  const lastAddElCallRef = useRef<{ time: number; type: string; name?: string }>({ time: 0, type: '' });

  // Add new element to page
  const handleAddElement = (newElData: Omit<CanvasElement, 'id' | 'zIndex'>) => {
    const now = Date.now();
    if (
      now - lastAddElCallRef.current.time < 200 &&
      lastAddElCallRef.current.type === newElData.type &&
      lastAddElCallRef.current.name === newElData.name
    ) {
      return; // prevent duplicate instant additions
    }
    lastAddElCallRef.current = { time: now, type: newElData.type, name: newElData.name };

    const maxZ = currentPage.elements.reduce((max, el) => Math.max(max, el.zIndex), 0);
    const newEl: CanvasElement = {
      ...newElData,
      id: `el-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      zIndex: maxZ + 1,
    };

    const updatedPages = doc.pages.map((p, pIdx) => {
      if (pIdx !== currentPageIndex) return p;
      return {
        ...p,
        elements: [...p.elements, newEl]
      };
    });

    updateDocumentWithHistory({
      ...doc,
      pages: updatedPages,
      updatedAt: Date.now()
    });

    setSelectedElementId(newEl.id);
  };

  // Duplicate selected element
  const handleDuplicateElement = () => {
    if (!selectedElement) return;
    const maxZ = currentPage.elements.reduce((max, el) => Math.max(max, el.zIndex), 0);
    const dup: CanvasElement = {
      ...selectedElement,
      id: `el-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      x: selectedElement.x + 24,
      y: selectedElement.y + 24,
      zIndex: maxZ + 1,
    };

    const updatedPages = doc.pages.map((p, pIdx) => {
      if (pIdx !== currentPageIndex) return p;
      return {
        ...p,
        elements: [...p.elements, dup]
      };
    });

    updateDocumentWithHistory({
      ...doc,
      pages: updatedPages,
      updatedAt: Date.now()
    });

    setSelectedElementId(dup.id);
  };

  // Delete element
  const handleDeleteElement = () => {
    if (!selectedElementId) return;
    handleDeleteElementById(selectedElementId);
  };

  const handleDeleteElementById = (id: string) => {
    const updatedPages = doc.pages.map((p, pIdx) => {
      if (pIdx !== currentPageIndex) return p;
      return {
        ...p,
        elements: p.elements.filter(el => el.id !== id)
      };
    });

    updateDocumentWithHistory({
      ...doc,
      pages: updatedPages,
      updatedAt: Date.now()
    });

    if (selectedElementId === id) {
      setSelectedElementId(null);
    }
  };

  // Update Canvas Background
  const handleUpdateBackground = (bg: { type: 'color' | 'gradient' | 'image'; value: string }) => {
    const updatedPages = doc.pages.map((p, pIdx) => {
      if (pIdx !== currentPageIndex) return p;
      return {
        ...p,
        background: bg
      };
    });

    updateDocumentWithHistory({
      ...doc,
      pages: updatedPages,
      updatedAt: Date.now()
    });
  };

  // Apply Template
  const handleApplyTemplate = (template: TemplateItem) => {
    const newPage: CanvasPage = {
      ...template.page,
      id: `page-${Date.now()}`
    };

    const updatedPages = [...doc.pages];
    updatedPages[currentPageIndex] = newPage;

    updateDocumentWithHistory({
      ...doc,
      width: template.width,
      height: template.height,
      pages: updatedPages,
      updatedAt: Date.now()
    });

    setSelectedElementId(null);
  };

  const handleApplyTemplateAsNewPage = (template: TemplateItem) => {
    const newPage: CanvasPage = {
      ...template.page,
      id: `page-${Date.now()}`
    };

    updateDocumentWithHistory({
      ...doc,
      pages: [...doc.pages, newPage],
      updatedAt: Date.now()
    });

    setCurrentPageIndex(doc.pages.length);
    setSelectedElementId(null);
  };

  // Layer Reordering
  const handleBringForward = () => {
    if (!selectedElement) return;
    const sorted = [...currentPage.elements].sort((a, b) => a.zIndex - b.zIndex);
    const index = sorted.findIndex(el => el.id === selectedElement.id);
    if (index < sorted.length - 1) {
      const temp = sorted[index].zIndex;
      sorted[index].zIndex = sorted[index + 1].zIndex;
      sorted[index + 1].zIndex = temp;
      updateDocumentWithHistory({
        ...doc,
        pages: doc.pages.map((p, i) => i === currentPageIndex ? { ...p, elements: sorted } : p)
      });
    }
  };

  const handleSendBackward = () => {
    if (!selectedElement) return;
    const sorted = [...currentPage.elements].sort((a, b) => a.zIndex - b.zIndex);
    const index = sorted.findIndex(el => el.id === selectedElement.id);
    if (index > 0) {
      const temp = sorted[index].zIndex;
      sorted[index].zIndex = sorted[index - 1].zIndex;
      sorted[index - 1].zIndex = temp;
      updateDocumentWithHistory({
        ...doc,
        pages: doc.pages.map((p, i) => i === currentPageIndex ? { ...p, elements: sorted } : p)
      });
    }
  };

  const handleBringToFront = () => {
    if (!selectedElement) return;
    const maxZ = currentPage.elements.reduce((max, el) => Math.max(max, el.zIndex), 0);
    handleUpdateElement(selectedElement.id, { zIndex: maxZ + 1 });
  };

  const handleSendToBack = () => {
    if (!selectedElement) return;
    const minZ = currentPage.elements.reduce((min, el) => Math.min(min, el.zIndex), 0);
    handleUpdateElement(selectedElement.id, { zIndex: Math.max(0, minZ - 1) });
  };

  // Page Management
  const handleAddPage = () => {
    const newPage: CanvasPage = {
      id: `page-${Date.now()}`,
      title: `Página ${doc.pages.length + 1}`,
      background: { type: 'color', value: '#FFFFFF' },
      elements: []
    };

    updateDocumentWithHistory({
      ...doc,
      pages: [...doc.pages, newPage]
    });
    setCurrentPageIndex(doc.pages.length);
    setSelectedElementId(null);
  };

  const handleDuplicatePage = (indexToDup: number = currentPageIndex) => {
    const sourcePage = doc.pages[indexToDup];
    if (!sourcePage) return;

    const duplicatedPage: CanvasPage = {
      ...sourcePage,
      id: `page-${Date.now()}`,
      title: `${sourcePage.title} (Copia)`,
      elements: sourcePage.elements.map(el => ({
        ...el,
        id: `el-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
      }))
    };

    const newPages = [...doc.pages];
    newPages.splice(indexToDup + 1, 0, duplicatedPage);

    updateDocumentWithHistory({
      ...doc,
      pages: newPages
    });
    setCurrentPageIndex(indexToDup + 1);
  };

  const handleDeletePage = (indexToDel: number = currentPageIndex) => {
    if (doc.pages.length <= 1) return;
    const newPages = doc.pages.filter((_, i) => i !== indexToDel);
    updateDocumentWithHistory({
      ...doc,
      pages: newPages
    });
    setCurrentPageIndex(Math.max(0, indexToDel - 1));
  };

  // Page Audio Track
  const handleUpdatePageAudio = (trackId: string | undefined) => {
    const updatedPages = doc.pages.map((p, i) =>
      i === currentPageIndex ? { ...p, audioTrackId: trackId } : p
    );
    updateDocumentWithHistory({ ...doc, pages: updatedPages });
  };

  // Paste image handler (supports pasting directly into selected or first empty frame, or on Ctrl+V)
  const handlePasteImageToFrame = (dataUrl: string) => {
    // 1. If currently selected element is a frame, put it there
    if (selectedElement && selectedElement.type === 'frame') {
      handleUpdateElement(selectedElement.id, { src: dataUrl });
      return true;
    }

    // 2. Otherwise look for an empty frame on current page
    const emptyFrame = currentPage.elements.find(el => el.type === 'frame' && !el.src);
    if (emptyFrame) {
      handleUpdateElement(emptyFrame.id, { src: dataUrl });
      setSelectedElementId(emptyFrame.id);
      return true;
    }

    // 3. If any frame exists on the page, fill it
    const anyFrame = currentPage.elements.find(el => el.type === 'frame');
    if (anyFrame) {
      handleUpdateElement(anyFrame.id, { src: dataUrl });
      setSelectedElementId(anyFrame.id);
      return true;
    }

    // 4. If no frame exists on page, add as a normal image element
    handleAddElement({
      type: 'image',
      src: dataUrl,
      x: Math.round(doc.width / 2 - 160),
      y: Math.round(doc.height / 2 - 120),
      width: 320,
      height: 240,
      rotation: 0,
      opacity: 1,
    });
    return true;
  };

  // Global Paste Event (Ctrl+V with clipboard image or files)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      // Don't intercept paste if typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      const clipboardData = e.clipboardData;
      if (!clipboardData) return;

      // Check items for image file
      const items = Array.from(clipboardData.items || []);
      const imageItem = items.find(item => item.type.startsWith('image/'));

      if (imageItem) {
        const file = imageItem.getAsFile();
        if (file) {
          e.preventDefault();
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result) {
              handlePasteImageToFrame(reader.result as string);
            }
          };
          reader.readAsDataURL(file);
          return;
        }
      }

      // Check files for an image
      const files = Array.from(clipboardData.files || []);
      const imageFile = files.find(f => f.type.startsWith('image/'));
      if (imageFile) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            handlePasteImageToFrame(reader.result as string);
          }
        };
        reader.readAsDataURL(imageFile);
        return;
      }

      // Check plain text/HTML for image URL or data URL
      const text = clipboardData.getData('text/plain')?.trim();
      if (text && (text.startsWith('data:image/') || /^https?:\/\/.*\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(text))) {
        e.preventDefault();
        handlePasteImageToFrame(text);
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [currentPage.elements, selectedElement, doc.width, doc.height]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      // Direct fallback for Ctrl+V / Cmd+V via Navigator Clipboard API (if clipboard paste event doesn't fire)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'v') {
        try {
          if (navigator.clipboard && navigator.clipboard.read) {
            const clipboardItems = await navigator.clipboard.read();
            for (const item of clipboardItems) {
              const imageType = item.types.find(t => t.startsWith('image/'));
              if (imageType) {
                e.preventDefault();
                const blob = await item.getType(imageType);
                const reader = new FileReader();
                reader.onload = () => {
                  if (reader.result) {
                    handlePasteImageToFrame(reader.result as string);
                  }
                };
                reader.readAsDataURL(blob);
                return;
              }
            }
          }
        } catch {
          // If navigator.clipboard.read is restricted or denied, the window 'paste' event listener handles it seamlessly
        }
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        if (e.shiftKey) {
          e.preventDefault();
          handleRedo();
        } else {
          e.preventDefault();
          handleUndo();
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        handleRedo();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        handleDuplicateElement();
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        handleDeleteElement();
      } else if (e.key === 'Escape') {
        setSelectedElementId(null);
      } else if (selectedElement && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 1;
        let dx = 0;
        let dy = 0;
        if (e.key === 'ArrowUp') dy = -step;
        if (e.key === 'ArrowDown') dy = step;
        if (e.key === 'ArrowLeft') dx = -step;
        if (e.key === 'ArrowRight') dx = step;
        handleUpdateElement(selectedElement.id, {
          x: selectedElement.x + dx,
          y: selectedElement.y + dy,
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo, selectedElement, selectedElementId, currentPage.elements, doc.width, doc.height]);

  // Exports
  const handleExportPng = async () => {
    if (!artboardRef.current) return;
    const safeTitle = doc.title.toLowerCase().replace(/\s+/g, '-');
    await exportArtboardToPng(artboardRef.current, `${safeTitle}.png`);
  };

  const handleExportJpeg = async () => {
    if (!artboardRef.current) return;
    const safeTitle = doc.title.toLowerCase().replace(/\s+/g, '-');
    await exportArtboardToJpeg(artboardRef.current, `${safeTitle}.jpg`);
  };

  const handleExportSvg = async () => {
    if (!artboardRef.current) return;
    const safeTitle = doc.title.toLowerCase().replace(/\s+/g, '-');
    await exportArtboardToSvg(artboardRef.current, `${safeTitle}.svg`);
  };

  const handlePrint = () => {
    if (!artboardRef.current) return;
    printArtboard(artboardRef.current);
  };

  const handleOpenProject = (projectDoc: DesignDocument) => {
    setDoc(projectDoc);
    setCurrentPageIndex(0);
    setSelectedElementId(null);
    setPast([]);
    setFuture([]);
    setCurrentView('editor');
  };

  const handleNewDesignFromPreset = (width: number, height: number, name: string) => {
    const newDoc: DesignDocument = {
      id: `doc-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      title: `${name} sin título`,
      width,
      height,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      pages: [
        {
          id: `page-${Date.now()}`,
          title: 'Página 1',
          background: { type: 'color', value: '#FFFFFF' },
          elements: [],
        }
      ]
    };
    setDoc(newDoc);
    setCurrentPageIndex(0);
    setSelectedElementId(null);
    setPast([]);
    setFuture([]);
    setCurrentView('editor');
  };

  const handleApplyTemplateFromHome = (template: TemplateItem) => {
    const newDoc: DesignDocument = {
      id: `doc-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      title: `${template.name} - Copia`,
      width: template.width,
      height: template.height,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      pages: [
        { ...JSON.parse(JSON.stringify(template.page)) }
      ]
    };
    setDoc(newDoc);
    setCurrentPageIndex(0);
    setSelectedElementId(null);
    setPast([]);
    setFuture([]);
    setCurrentView('editor');
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && parsed.pages && parsed.width) {
            updateDocumentWithHistory(parsed);
          }
        } catch (err) {
          console.error('Error al importar archivo Creava:', err);
        }
      };
      reader.readAsText(file);
    }
  };

  if (currentView === 'home') {
    return (
      <>
        <HomeScreen
          currentDocument={doc}
          onOpenProject={handleOpenProject}
          onNewDesignFromPreset={handleNewDesignFromPreset}
          onApplyTemplate={handleApplyTemplateFromHome}
          onContinueEditing={() => setCurrentView('editor')}
          onOpenFontImporter={() => setIsFontModalOpen(true)}
        />
        {isFontModalOpen && (
          <FontImportModal
            isOpen={isFontModalOpen}
            onClose={() => setIsFontModalOpen(false)}
            customFonts={customFonts}
            onFontsUpdated={(updated) => setCustomFonts(updated)}
          />
        )}
      </>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#f4f7fb] dark:bg-[#0c0e14] text-[#0e1318] dark:text-slate-100 antialiased font-sans select-none transition-colors">
      {/* 1. Header (Logo, title, resize, undo/redo, share, present, home) */}
      <Header
        document={doc}
        saveStatus={saveStatus}
        onUpdateTitle={(newTitle) => setDoc({ ...doc, title: newTitle })}
        canUndo={past.length > 0}
        canRedo={future.length > 0}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onOpenResize={() => setIsResizeModalOpen(true)}
        onOpenPresentation={() => setIsPresentationModalOpen(true)}
        onExportPng={handleExportPng}
        onExportJpeg={handleExportJpeg}
        onExportSvg={handleExportSvg}
        onExportJson={() => exportProjectToJson(doc)}
        onImportJson={handleImportJson}
        onPrint={handlePrint}
        onGoHome={() => {
          saveDocumentImmediately(doc);
          setCurrentView('home');
        }}
        onOpenFontImporter={() => setIsFontModalOpen(true)}
        onNewDesign={() => {
          handleNewDesignFromPreset(1080, 1080, 'Nuevo Diseño');
        }}
      />

      {/* 2. Dynamic Contextual Property Toolbar */}
      <PropertyToolbar
        selectedElement={selectedElement}
        canvasBackground={currentPage.background}
        documentWidth={doc.width}
        documentHeight={doc.height}
        documentColors={documentColors}
        customFonts={customFonts}
        onOpenFontImporter={() => setIsFontModalOpen(true)}
        onUpdateElement={(updates) => selectedElement && handleUpdateElement(selectedElement.id, updates)}
        onUpdateBackground={handleUpdateBackground}
        onDuplicateElement={handleDuplicateElement}
        onDeleteElement={handleDeleteElement}
        onBringForward={handleBringForward}
        onSendBackward={handleSendBackward}
        onBringToFront={handleBringToFront}
        onSendToBack={handleSendToBack}
        onOpenImageEditor={() => setIsImageEditorOpen(true)}
        activeContextualPanel={contextualSidebarPanel}
        onOpenContextualPanel={handleOpenContextualPanel}
      />

      {/* 3. Main Workspace Area (Sidebar + Canvas) */}
      <div className="flex flex-1 overflow-hidden relative min-h-0">
        <Sidebar
          activeTab={activeSidebarTab}
          onTabChange={(tab) => {
            setContextualSidebarPanel(null);
            setActiveSidebarTab(tab);
          }}
          isOpen={isSidebarOpen}
          onToggleOpen={() => {
            if (contextualSidebarPanel) {
              handleCloseContextualPanel();
            } else {
              setIsSidebarOpen(!isSidebarOpen);
            }
          }}
          currentPage={currentPage}
          selectedElementId={selectedElementId}
          onSelectElement={setSelectedElementId}
          onAddElement={handleAddElement}
          onApplyTemplate={handleApplyTemplate}
          onApplyTemplateAsNewPage={handleApplyTemplateAsNewPage}
          onUpdateBackground={handleUpdateBackground}
          onUpdateElement={handleUpdateElement}
          onDeleteElementById={handleDeleteElementById}
          onReorderElements={(newElements) => {
            const updatedPages = doc.pages.map((p, i) => i === currentPageIndex ? { ...p, elements: newElements } : p);
            updateDocumentWithHistory({ ...doc, pages: updatedPages });
          }}
          currentAudioTrackId={currentPage.audioTrackId}
          onSetAudioTrack={handleUpdatePageAudio}
          customFonts={customFonts}
          onFontsUpdated={setCustomFonts}
          onOpenFontImporter={() => setIsFontModalOpen(true)}
          documentWidth={doc.width}
          documentHeight={doc.height}
          contextualPanel={contextualSidebarPanel}
          onCloseContextualPanel={handleCloseContextualPanel}
          documentColors={documentColors}
          selectedElement={selectedElement}
        />

        <CanvasArea
          document={doc}
          currentPageIndex={currentPageIndex}
          selectedElementId={selectedElementId}
          zoom={zoom}
          isGridView={isGridView}
          onSelectElement={setSelectedElementId}
          onUpdateElement={(id, updates) => handleUpdateElement(id, updates)}
          onPageChange={setCurrentPageIndex}
          onAddPage={handleAddPage}
          onDuplicatePage={handleDuplicatePage}
          onDeletePage={handleDeletePage}
          artboardRef={artboardRef}
        />
      </div>

      {/* 4. Bottom Footer Bar (Page controls, grid view, zoom) */}
      <FooterBar
        currentPageIndex={currentPageIndex}
        totalPages={doc.pages.length}
        onPageChange={setCurrentPageIndex}
        onAddPage={handleAddPage}
        onDuplicatePage={() => handleDuplicatePage()}
        onDeletePage={() => handleDeletePage()}
        zoom={zoom}
        onZoomChange={setZoom}
        onFitToScreen={fitToScreen}
        isGridView={isGridView}
        onToggleGridView={() => setIsGridView(!isGridView)}
        onOpenPresentation={() => setIsPresentationModalOpen(true)}
      />

      {/* 5. Modals */}
      {isResizeModalOpen && (
        <ResizeModal
          currentWidth={doc.width}
          currentHeight={doc.height}
          onResize={(newW, newH) => {
            updateDocumentWithHistory({
              ...doc,
              width: newW,
              height: newH,
            });
          }}
          onClose={() => setIsResizeModalOpen(false)}
        />
      )}

      {isPresentationModalOpen && (
        <PresentationModal
          document={doc}
          initialPageIndex={currentPageIndex}
          onClose={() => setIsPresentationModalOpen(false)}
        />
      )}

      {/* Image Editor & Cropper Modal */}
      {isImageEditorOpen && selectedElement && selectedElement.type === 'image' && (
        <ImageEditorModal
          element={selectedElement}
          isOpen={isImageEditorOpen}
          onClose={() => setIsImageEditorOpen(false)}
          onSave={(updates) => {
            handleUpdateElement(selectedElement.id, updates);
            setIsImageEditorOpen(false);
          }}
          onApplyChanges={(updates) => {
            handleUpdateElement(selectedElement.id, updates);
            setIsImageEditorOpen(false);
          }}
        />
      )}

      {/* Font Importer Modal */}
      {isFontModalOpen && (
        <FontImportModal
          isOpen={isFontModalOpen}
          onClose={() => setIsFontModalOpen(false)}
          customFonts={customFonts}
          onFontsUpdated={(updated) => setCustomFonts(updated)}
          onApplyFontToSelected={(fontFamily) => {
            if (selectedElementId) {
              handleUpdateElement(selectedElementId, { fontFamily });
            }
          }}
        />
      )}
    </div>
  );
}
