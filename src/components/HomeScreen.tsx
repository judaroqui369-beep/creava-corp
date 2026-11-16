import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Plus, 
  LayoutTemplate, 
  Sparkles, 
  FolderGit2, 
  Music, 
  Image as ImageIcon, 
  Clock, 
  Trash2, 
  Copy, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  FileText, 
  Square, 
  Award, 
  Layout, 
  Wand2, 
  ChevronRight, 
  ChevronLeft,
  Crown, 
  ArrowRight,
  Sliders,
  Settings,
  Bell,
  HelpCircle,
  MoreVertical,
  Maximize2,
  Type,
  Globe,
  PenTool,
  Video,
  Printer,
  Megaphone,
  ShoppingBag,
  Laptop,
  Share2,
  UploadCloud,
  RefreshCw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { DesignDocument, CanvasPage, UserProfile } from '../types';
import { DESIGN_TEMPLATES, TemplateItem } from '../data/templates';
import { PRESET_SIZES } from '../data/elements';
import { 
  getCustomTemplates, 
  saveCustomTemplate, 
  parseAnyFileAsTemplate, 
  EVENT_CUSTOM_TEMPLATES_CHANGED 
} from '../utils/templateManager';
import { AuthDropdown } from './AuthDropdown';
import { getUserProfile } from '../utils/authManager';
import { SettingsModal } from './SettingsModal';
import { 
  auth,
  subscribeToUserDesigns, 
  deleteUserDesignFromFirestore, 
  clearAllUserDesignsFromFirestore,
  saveUserDesignToFirestore
} from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export interface SavedProjectSummary {
  id: string;
  title: string;
  width: number;
  height: number;
  pageCount: number;
  previewBg: string;
  updatedAt: number;
  document: DesignDocument;
}

interface HomeScreenProps {
  currentDocument: DesignDocument;
  onOpenProject: (doc: DesignDocument) => void;
  onNewDesignFromPreset: (width: number, height: number, name: string) => void;
  onApplyTemplate: (template: TemplateItem) => void;
  onContinueEditing: () => void;
  onOpenFontImporter?: () => void;
}

// Canva-style functions carousel at the top
export const CANVA_FUNCTION_TABS = [
  { id: 'para-ti', name: 'Para ti', icon: Sparkles, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50 dark:text-amber-300' },
  { id: 'paginas-web', name: 'Páginas web', icon: Globe, badge: 'NUEVO', color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-300' },
  { id: 'documentos', name: 'Documentos', icon: FileText, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/50 dark:text-blue-300' },
  { id: 'pizarras', name: 'Pizarras online', icon: PenTool, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/50 dark:text-purple-300' },
  { id: 'presentaciones', name: 'Presentaciones', icon: Monitor, color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/50 dark:text-orange-300' },
  { id: 'redes-sociales', name: 'Redes sociales', icon: Share2, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/50 dark:text-pink-300' },
  { id: 'videos', name: 'Vídeos', icon: Video, color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/50 dark:text-rose-300' },
  { id: 'impresiones', name: 'Impresiones', icon: Printer, color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/50 dark:text-teal-300' },
  { id: 'marketing', name: 'Marketing', icon: Megaphone, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 dark:text-indigo-300' },
];

export const WEB_PAGE_PRESETS = [
  { id: 'web-desktop', name: 'Sitio Web Completo', width: 1440, height: 900, icon: Globe, desc: '1440 × 900 px (Desktop)', badge: 'Popular', color: 'from-emerald-500 to-teal-600' },
  { id: 'web-landing', name: 'Landing Page de Producto', width: 1200, height: 2400, icon: Laptop, desc: '1200 × 2400 px (Scroll Largo)', badge: 'Conversión', color: 'from-blue-600 to-indigo-600' },
  { id: 'web-portfolio', name: 'Portafolio Web / CV', width: 1366, height: 768, icon: Layout, desc: '1366 × 768 px (Diseño)', color: 'from-purple-600 to-violet-600' },
  { id: 'web-linktree', name: 'Bio Link Móvil (Linktree)', width: 1080, height: 1920, icon: Smartphone, desc: '1080 × 1920 px (Mobile 9:16)', badge: 'Viral', color: 'from-violet-600 to-pink-600' },
  { id: 'web-ecommerce', name: 'Tienda Online E-Commerce', width: 1440, height: 1080, icon: ShoppingBag, desc: '1440 × 1080 px (Catálogo)', color: 'from-amber-500 to-rose-500' },
  { id: 'web-header', name: 'Cabecera / Banner Web', width: 1920, height: 500, icon: LayoutTemplate, desc: '1920 × 500 px (Hero Header)', color: 'from-cyan-500 to-blue-600' },
];

const FORMAT_PRESETS = [
  { id: 'web-standard', name: 'Página Web', width: 1440, height: 900, icon: Globe, desc: '1440 × 900 px (Desktop)', color: 'from-emerald-500 to-teal-500', isNew: true },
  { id: 'insta-post', name: 'Post de Instagram', width: 1080, height: 1080, icon: Square, desc: '1080 × 1080 px', color: 'from-pink-500 to-rose-500' },
  { id: 'presentation', name: 'Presentación', width: 1920, height: 1080, icon: Monitor, desc: '1920 × 1080 px (16:9)', color: 'from-amber-500 to-orange-500' },
  { id: 'doc-a4', name: 'Documento (A4)', width: 800, height: 1130, icon: FileText, desc: '210 × 297 mm', color: 'from-blue-500 to-indigo-500' },
  { id: 'insta-story', name: 'Historia / Reel', width: 1080, height: 1920, icon: Smartphone, desc: '1080 × 1920 px (9:16)', color: 'from-purple-500 to-pink-500' },
  { id: 'poster', name: 'Póster / Flyer', width: 1200, height: 1600, icon: Layout, desc: '1200 × 1600 px', color: 'from-emerald-500 to-teal-500' },
  { id: 'banner', name: 'Banner Web / Facebook', width: 1200, height: 630, icon: LayoutTemplate, desc: '1200 × 630 px', color: 'from-cyan-500 to-blue-600' },
  { id: 'logo', name: 'Logotipo de Marca', width: 800, height: 800, icon: Award, desc: '800 × 800 px', color: 'from-violet-600 to-purple-700' },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  currentDocument,
  onOpenProject,
  onNewDesignFromPreset,
  onApplyTemplate,
  onContinueEditing,
  onOpenFontImporter,
}) => {
  const [activeTab, setActiveTab] = useState<'inicio' | 'proyectos' | 'plantillas' | 'magic' | 'musica' | 'recursos'>('inicio');
  const [selectedFunctionTab, setSelectedFunctionTab] = useState<string>('para-ti');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplateCat, setSelectedTemplateCat] = useState<string>('Todas');
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [customWidth, setCustomWidth] = useState(1080);
  const [customHeight, setCustomHeight] = useState(1080);
  const [showCustomSizeModal, setShowCustomSizeModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const functionCarouselRef = useRef<HTMLDivElement>(null);
  const formatPresetsRef = useRef<HTMLDivElement>(null);

  const scrollFunctionCarousel = (direction: 'left' | 'right') => {
    if (functionCarouselRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      functionCarouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollFormatPresets = (direction: 'left' | 'right') => {
    if (formatPresetsRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      formatPresetsRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Active user profile
  const [userProfile, setUserProfile] = useState<UserProfile>(() => getUserProfile());

  useEffect(() => {
    const handleAuthChange = (e: Event) => {
      const customEvent = e as CustomEvent<UserProfile>;
      if (customEvent.detail) {
        setUserProfile(customEvent.detail);
      }
    };
    window.addEventListener('creava_auth_changed', handleAuthChange);
    return () => window.removeEventListener('creava_auth_changed', handleAuthChange);
  }, []);

  // Load saved projects list for current user
  const [savedProjects, setSavedProjects] = useState<SavedProjectSummary[]>(() => {
    const profile = getUserProfile();
    if (!profile.isLoggedIn || !profile.id || profile.id === 'guest') {
      return [];
    }
    try {
      const stored = localStorage.getItem(`creava_saved_projects_${profile.id}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Could not read saved projects:', e);
    }
    return [];
  });

  // When user logs in, logs out, or switches account:
  // 1. If guest or logged out: clear screen designs immediately.
  // 2. If user is logged in: subscribe in real-time to their private Firestore collection /users/{userId}/designs.
  useEffect(() => {
    if (!userProfile.isLoggedIn || !userProfile.id || userProfile.id === 'guest') {
      setSavedProjects([]);
      return;
    }

    // Try loading immediately from cached user storage for instant display
    try {
      const cached = localStorage.getItem(`creava_saved_projects_${userProfile.id}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) setSavedProjects(parsed);
      }
    } catch (e) {
      console.warn(e);
    }

    let unsubFirestore: (() => void) | null = null;

    const attachFirestoreListener = () => {
      if (auth.currentUser && auth.currentUser.uid === userProfile.id && !unsubFirestore) {
        unsubFirestore = subscribeToUserDesigns(userProfile.id, (firestoreProjects) => {
          setSavedProjects(firestoreProjects);
          try {
            localStorage.setItem(`creava_saved_projects_${userProfile.id}`, JSON.stringify(firestoreProjects));
          } catch (e) {
            console.warn(e);
          }
        });
      }
    };

    // Attach immediately if auth is already established
    attachFirestoreListener();

    // Listen to Firebase Auth state in case session is being restored asynchronously
    const unsubAuth = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser && fbUser.uid === userProfile.id) {
        attachFirestoreListener();
      }
    });

    return () => {
      if (unsubFirestore) unsubFirestore();
      unsubAuth();
    };
  }, [userProfile.id, userProfile.isLoggedIn]);

  // Keep saved projects synchronized in real time with editor auto-saves
  useEffect(() => {
    const handleProjectSaved = (e: Event) => {
      const customEvent = e as CustomEvent<SavedProjectSummary>;
      if (customEvent.detail && userProfile.isLoggedIn && userProfile.id && userProfile.id !== 'guest') {
        setSavedProjects(prev => {
          const idx = prev.findIndex(p => p.id === customEvent.detail.id);
          let nextList: SavedProjectSummary[];
          if (idx >= 0) {
            nextList = [...prev];
            nextList[idx] = customEvent.detail;
          } else {
            nextList = [customEvent.detail, ...prev];
          }
          try {
            localStorage.setItem(`creava_saved_projects_${userProfile.id}`, JSON.stringify(nextList));
          } catch (err) {
            console.warn(err);
          }
          return nextList;
        });
      }
    };

    window.addEventListener('creava_project_saved', handleProjectSaved);
    return () => {
      window.removeEventListener('creava_project_saved', handleProjectSaved);
    };
  }, [userProfile.id, userProfile.isLoggedIn]);

  const handleDeleteProject = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = savedProjects.filter(p => p.id !== id);
    setSavedProjects(updated);
    
    if (userProfile.isLoggedIn && userProfile.id && userProfile.id !== 'guest') {
      try {
        localStorage.setItem(`creava_saved_projects_${userProfile.id}`, JSON.stringify(updated));
        await deleteUserDesignFromFirestore(userProfile.id, id);
      } catch (err) {
        console.warn('Error deleting design from Firestore:', err);
      }
    }
  };

  const handleClearAllProjects = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const designIds = savedProjects.map(p => p.id);
    setSavedProjects([]);
    
    if (userProfile.isLoggedIn && userProfile.id && userProfile.id !== 'guest') {
      try {
        localStorage.removeItem(`creava_saved_projects_${userProfile.id}`);
        localStorage.removeItem(`creava_saved_document_${userProfile.id}`);
        await clearAllUserDesignsFromFirestore(userProfile.id, designIds);
      } catch (err) {
        console.warn('Error clearing designs in Firestore:', err);
      }
    }
  };

  const handleDuplicateProject = async (e: React.MouseEvent, proj: SavedProjectSummary) => {
    e.stopPropagation();
    const duplicateDoc: DesignDocument = {
      ...proj.document,
      id: `doc-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      title: `${proj.title} (Copia)`,
      updatedAt: Date.now(),
    };
    const newSummary: SavedProjectSummary = {
      id: duplicateDoc.id,
      title: duplicateDoc.title,
      width: duplicateDoc.width,
      height: duplicateDoc.height,
      pageCount: duplicateDoc.pages.length,
      previewBg: duplicateDoc.pages[0]?.background?.value || '#ffffff',
      updatedAt: Date.now(),
      document: duplicateDoc,
    };
    const updated = [newSummary, ...savedProjects];
    setSavedProjects(updated);
    
    if (userProfile.isLoggedIn && userProfile.id && userProfile.id !== 'guest') {
      try {
        localStorage.setItem(`creava_saved_projects_${userProfile.id}`, JSON.stringify(updated));
        await saveUserDesignToFirestore(userProfile.id, duplicateDoc);
      } catch (err) {
        console.warn('Error saving duplicate to Firestore:', err);
      }
    }
  };

  const handleCreateCustom = () => {
    if (customWidth > 100 && customHeight > 100) {
      onNewDesignFromPreset(customWidth, customHeight, `Diseño ${customWidth}x${customHeight}`);
      setShowCustomSizeModal(false);
    }
  };

  const [customTemplates, setCustomTemplates] = useState<TemplateItem[]>(() => getCustomTemplates());
  const homeTemplateFileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadingTemplateHome, setIsUploadingTemplateHome] = useState(false);
  const [homeTemplateMessage, setHomeTemplateMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Synchronize templates when updated anywhere in the app
  useEffect(() => {
    const handleSync = () => {
      setCustomTemplates(getCustomTemplates());
    };
    window.addEventListener(EVENT_CUSTOM_TEMPLATES_CHANGED, handleSync);
    return () => window.removeEventListener(EVENT_CUSTOM_TEMPLATES_CHANGED, handleSync);
  }, []);

  const handleProcessHomeTemplateFile = async (file: File) => {
    try {
      setIsUploadingTemplateHome(true);
      const parsed = await parseAnyFileAsTemplate(file);
      const updated = saveCustomTemplate(parsed);
      setCustomTemplates(updated);
      setSelectedTemplateCat('Mis Plantillas');
      setHomeTemplateMessage({
        type: 'success',
        text: `¡Archivo "${file.name}" convertido con éxito en la plantilla "${parsed.name}"!`
      });
      setTimeout(() => setHomeTemplateMessage(null), 5000);
    } catch (err: any) {
      setHomeTemplateMessage({
        type: 'error',
        text: err?.message || 'Error al procesar el archivo como plantilla.'
      });
      setTimeout(() => setHomeTemplateMessage(null), 6000);
    } finally {
      setIsUploadingTemplateHome(false);
      if (homeTemplateFileInputRef.current) {
        homeTemplateFileInputRef.current.value = '';
      }
    }
  };

  const handleHomeTemplateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessHomeTemplateFile(file);
    }
  };

  // Filter templates (including custom user uploaded templates)
  const allAvailableTemplates = [...customTemplates, ...DESIGN_TEMPLATES];
  const filteredTemplates = allAvailableTemplates.filter(tpl => {
    const matchesSearch = tpl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tpl.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tpl.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedTemplateCat === 'Todas' || tpl.category === selectedTemplateCat;
    return matchesSearch && matchesCat;
  });

  // Filter recent projects
  const filteredProjects = savedProjects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-screen bg-[#f8f9fa] dark:bg-[#0d1017] text-slate-800 dark:text-slate-100 overflow-hidden font-sans select-none">
      {/* 1. LEFT CANVA-STYLE NAVIGATION SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-[#151822] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between flex-shrink-0 z-20 shadow-2xs">
        <div>
          {/* Top Brand Logo */}
          <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/80">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00c4cc] to-[#7d2ae8] flex items-center justify-center shadow-xs">
              <div className="w-4 h-4 bg-white rounded-xs rotate-45 flex items-center justify-center">
                <span className="font-extrabold text-[#7d2ae8] text-[10px] -rotate-45">C</span>
              </div>
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-[#7d2ae8]">
                creava
              </span>
              <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded-full">
                Studio
              </span>
            </div>
          </div>

          {/* User Workspace Info Pill */}
          <div className="p-3.5 mx-3 mt-3 bg-slate-50 dark:bg-[#1c202d] border border-slate-200/80 dark:border-slate-700/60 rounded-2xl flex items-center justify-between transition-colors">
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-tr ${
                  userProfile.isLoggedIn
                    ? userProfile.avatarColor || 'from-purple-600 to-indigo-600'
                    : 'from-purple-600 to-indigo-600'
                } text-white font-bold text-xs flex items-center justify-center shadow-2xs flex-shrink-0`}
              >
                {userProfile.initials}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs text-slate-900 dark:text-slate-100 truncate">{userProfile.name}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
                  {userProfile.isLoggedIn ? `Espacio Personal • ${userProfile.plan}` : 'Sesión de Invitado'}
                </div>
              </div>
            </div>
            {userProfile.isLoggedIn && userProfile.plan === 'Pro' ? (
              <Crown className="w-4 h-4 text-amber-500 flex-shrink-0" />
            ) : (
              <span className="text-[9px] font-bold text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded-md flex-shrink-0">
                {userProfile.isLoggedIn ? userProfile.plan : 'Free'}
              </span>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            <button
              id="nav-home-inicio"
              onClick={() => setActiveTab('inicio')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'inicio'
                  ? 'bg-purple-50 text-purple-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Layout className="w-4 h-4 text-purple-600" />
              <span>Inicio</span>
            </button>

            <button
              id="nav-home-proyectos"
              onClick={() => setActiveTab('proyectos')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'proyectos'
                  ? 'bg-purple-50 text-purple-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <FolderGit2 className="w-4 h-4 text-indigo-600" />
              <span>Tus Proyectos</span>
              <span className="ml-auto text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-bold">
                {savedProjects.length}
              </span>
            </button>

            <button
              id="nav-home-plantillas"
              onClick={() => setActiveTab('plantillas')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'plantillas'
                  ? 'bg-purple-50 text-purple-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <LayoutTemplate className="w-4 h-4 text-pink-600" />
              <span>Plantillas</span>
              <span className="ml-auto text-[10px] bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded-full font-bold">
                {DESIGN_TEMPLATES.length}
              </span>
            </button>

            <button
              id="nav-home-magic"
              onClick={() => setActiveTab('magic')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'magic'
                  ? 'bg-purple-50 text-purple-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Wand2 className="w-4 h-4 text-purple-600" />
              <span>Magic Studio IA</span>
              <span className="ml-auto text-[9px] bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                Nuevo
              </span>
            </button>

            <button
              id="nav-home-musica"
              onClick={() => setActiveTab('musica')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'musica'
                  ? 'bg-purple-50 text-purple-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Music className="w-4 h-4 text-cyan-600" />
              <span>50 Pistas de Audio IA</span>
            </button>

            <button
              id="nav-home-recursos"
              onClick={() => setActiveTab('recursos')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'recursos'
                  ? 'bg-purple-50 text-purple-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-emerald-600" />
              <span>Fotos & Recursos</span>
            </button>

            <button
              id="nav-home-fonts"
              onClick={onOpenFontImporter}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-slate-600 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-700 dark:hover:text-purple-300 group cursor-pointer"
            >
              <Type className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Importar Tipografías</span>
              <span className="ml-auto text-[9px] bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded-full font-bold">
                TTF/OTF
              </span>
            </button>

            {/* Configuración & Modo Oscuro */}
            <button
              id="nav-home-configuracion"
              onClick={() => setShowSettingsModal(true)}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-slate-600 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-700 dark:hover:text-purple-300 group cursor-pointer"
            >
              <Settings className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:rotate-45 transition-transform" />
              <span>Configuración</span>
              <span className="ml-auto text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-full font-bold">
                Modo Oscuro
              </span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer: Upgrade to Pro Promo */}
        <div className="p-4 m-3 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 rounded-2xl text-white shadow-md relative overflow-hidden">
          <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-white/10 rounded-full blur-xs pointer-events-none"></div>
          <div className="flex items-center gap-1.5 mb-1 text-amber-300">
            <Crown className="w-4 h-4" />
            <span className="text-[11px] font-extrabold uppercase tracking-wide">Creava Pro Ilimitado</span>
          </div>
          <p className="text-[11px] text-purple-100 leading-relaxed mb-3">
            Accede a millones de recursos, Magic Studio IA y exportación ultra HD en 4K.
          </p>
          <button
            onClick={() => onContinueEditing()}
            className="w-full py-1.5 bg-white text-purple-800 rounded-lg text-xs font-bold hover:bg-purple-50 transition-all shadow-xs"
          >
            Abrir Editor
          </button>
        </div>
      </aside>

      {/* 2. MAIN DASHBOARD CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 bg-white dark:bg-[#151822] border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between z-10">
          {/* Central Search Bar (Iconic Canva style) */}
          <div className="flex-1 max-w-2xl relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="¿Qué vas a diseñar hoy? Busca en tus proyectos, plantillas de Instagram, presentaciones..."
              className="w-full bg-slate-100 dark:bg-[#1c202d] hover:bg-slate-50 dark:hover:bg-[#232839] focus:bg-white dark:focus:bg-[#1c202d] border border-transparent focus:border-purple-600 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none transition-all shadow-2xs"
            />
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 ml-4">
            {/* Direct Open Editor Button */}
            <button
              id="btn-home-continue-editing"
              onClick={() => onContinueEditing()}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/40 rounded-xl transition-all"
            >
              <span>Ir al editor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* "+ Crear un diseño" Canva-style Dropdown Button */}
            <div className="relative">
              <button
                id="btn-home-create-design"
                onClick={() => setShowCreateMenu(!showCreateMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white text-xs font-bold shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Crear un diseño</span>
              </button>

              {showCreateMenu && (
                <div 
                  className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-[#161922] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs text-slate-700 dark:text-slate-200 animate-in fade-in zoom-in-95 duration-100"
                  onClick={() => setShowCreateMenu(false)}
                >
                  <div className="px-3 py-2 text-[10px] font-bold uppercase text-slate-400 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span>Formatos populares</span>
                    <Sliders className="w-3 h-3" />
                  </div>

                  {FORMAT_PRESETS.map((p) => {
                    const IconComp = p.icon;
                    return (
                      <button
                        key={p.id}
                        onClick={() => {
                          onNewDesignFromPreset(p.width, p.height, p.name);
                          setShowCreateMenu(false);
                        }}
                        className="w-full px-3 py-2 flex items-center gap-3 hover:bg-purple-50 dark:hover:bg-purple-950/40 rounded-xl text-left transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 text-slate-600 dark:text-slate-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 flex items-center justify-center transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-purple-700 dark:group-hover:text-purple-300 flex items-center gap-1.5">
                            <span className="truncate">{p.name}</span>
                            {'isNew' in p && p.isNew && (
                              <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-emerald-500 text-white font-bold">NUEVO</span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400">{p.desc}</div>
                        </div>
                      </button>
                    );
                  })}

                  {/* Quick Web Pages presets inside create menu */}
                  <div className="pt-1.5 mt-1.5 border-t border-slate-100 dark:border-slate-800">
                    <div className="px-3 py-1 text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      <span>Páginas Web</span>
                    </div>
                    {WEB_PAGE_PRESETS.slice(1, 4).map((wp) => {
                      const WebIcon = wp.icon;
                      return (
                        <button
                          key={wp.id}
                          onClick={() => {
                            onNewDesignFromPreset(wp.width, wp.height, wp.name);
                            setShowCreateMenu(false);
                          }}
                          className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-xl text-left transition-colors group"
                        >
                          <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                            <WebIcon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-[11px] text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate">
                              {wp.name}
                            </div>
                            <div className="text-[9px] text-slate-400">{wp.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-1.5 mt-1.5 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => {
                        setShowCustomSizeModal(true);
                        setShowCreateMenu(false);
                      }}
                      className="w-full px-3 py-2 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-left font-bold text-purple-700 dark:text-purple-400"
                    >
                      <Maximize2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span>Tamaño personalizado...</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Utility Icons */}
            <button 
              id="btn-home-settings"
              onClick={() => setShowSettingsModal(true)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              title="Configuración y Modo Oscuro"
            >
              <Settings className="w-4 h-4" />
            </button>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-0.5"></div>

            {/* User Session Dropdown */}
            <AuthDropdown
              align="right"
              showLabel={true}
              onOpenFontImporter={onOpenFontImporter}
              onNavigateToTab={setActiveTab}
            />
          </div>
        </header>

        {/* Main Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 custom-scrollbar">
          {/* A. CANVA FUNCTIONS CAROUSEL & HERO SECTION */}
          {activeTab === 'inicio' && (
            <div className="space-y-4">
              {/* 1. Canva-style Function Selector Carousel */}
              <div className="bg-white dark:bg-[#151822] p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center justify-between px-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#7d2ae8]" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      ¿Qué quieres diseñar?
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => scrollFunctionCarousel('left')}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Anteriores categorías"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => scrollFunctionCarousel('right')}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Siguientes categorías"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Horizontal Function Carousel Tabs */}
                <div 
                  ref={functionCarouselRef}
                  className="flex items-center gap-2 overflow-x-auto pb-1 scroll-smooth scrollbar-none"
                >
                  {CANVA_FUNCTION_TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isSelected = selectedFunctionTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        id={`carousel-func-${tab.id}`}
                        onClick={() => setSelectedFunctionTab(tab.id)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                          isSelected
                            ? 'bg-[#7d2ae8] text-white shadow-xs scale-100'
                            : 'bg-slate-100 dark:bg-[#1f2433] text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:text-[#7d2ae8] dark:hover:text-purple-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${isSelected ? 'text-white' : tab.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{tab.name}</span>
                        {tab.badge && (
                          <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                            isSelected ? 'bg-amber-300 text-slate-900' : 'bg-emerald-500 text-white'
                          }`}>
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Hero Banner & Format Options Row (Without shrinking options) */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#7d2ae8] via-[#5c2ae8] to-[#00c4cc] p-6 sm:p-8 text-white shadow-md">
                <div className="relative z-10 max-w-3xl space-y-2 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-bold tracking-wide text-purple-100">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>
                      {selectedFunctionTab === 'paginas-web' 
                        ? 'Nuevo Creador de Páginas Web & Landing Pages' 
                        : 'Estudio Creativo Todo-en-Uno'}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {selectedFunctionTab === 'paginas-web' 
                      ? 'Crea tu sitio web o página de aterrizaje' 
                      : '¿Qué vas a diseñar hoy?'}
                  </h1>
                  <p className="text-xs sm:text-sm text-purple-100 max-w-xl leading-relaxed">
                    {selectedFunctionTab === 'paginas-web'
                      ? 'Diseña páginas web profesionales, portafolios interactivos, tiendas online y páginas bio para móviles listas para publicar.'
                      : 'Crea impresionantes publicaciones para redes sociales, sitios web, presentaciones ejecutivas y banners con inteligencia artificial.'}
                  </p>
                </div>

                {/* Formats Container with Scroll Navigation without shrinking options */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 text-purple-100 text-xs font-semibold">
                    <span>
                      {selectedFunctionTab === 'paginas-web' 
                        ? 'Formatos de Páginas Web' 
                        : 'Formatos populares'}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => scrollFormatPresets('left')}
                        className="p-1 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                        title="Ver anteriores"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => scrollFormatPresets('right')}
                        className="p-1 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                        title="Ver más opciones"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={formatPresetsRef}
                    className="flex items-stretch gap-3 overflow-x-auto pb-2 scroll-smooth scrollbar-none"
                  >
                    {(selectedFunctionTab === 'paginas-web' ? WEB_PAGE_PRESETS : FORMAT_PRESETS).map((item) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={item.id}
                          id={`hero-preset-${item.id}`}
                          onClick={() => onNewDesignFromPreset(item.width, item.height, item.name)}
                          className="min-w-[150px] md:min-w-[160px] max-w-[170px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex flex-col items-center text-center transition-all hover:scale-105 active:scale-95 group shadow-xs flex-shrink-0 cursor-pointer"
                        >
                          <div className="w-11 h-11 rounded-xl bg-white text-[#7d2ae8] flex items-center justify-center mb-2.5 shadow-xs group-hover:bg-amber-300 group-hover:text-slate-900 transition-colors">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold text-white group-hover:text-amber-200 line-clamp-1 w-full">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-purple-200 mt-0.5">
                            {item.width} × {item.height}
                          </span>
                          {'badge' in item && item.badge && (
                            <span className="mt-2 px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[9px] font-black uppercase">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* B. TUS DISEÑOS RECIENTES (Recent Projects) */}
          {(activeTab === 'inicio' || activeTab === 'proyectos') && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span>Tus diseños recientes</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Continúa trabajando donde lo dejaste o crea una nueva versión
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {savedProjects.length > 0 && (
                    <button
                      onClick={handleClearAllProjects}
                      className="text-xs font-semibold text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1 transition-colors px-2.5 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"
                      title="Eliminar todos los diseños creados"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Vaciar lista</span>
                    </button>
                  )}
                  <button
                    onClick={() => onNewDesignFromPreset(1080, 1080, 'Nuevo Diseño')}
                    className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Nuevo diseño</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* 1. Quick "+ Crear en blanco" card */}
                <div
                  onClick={() => onNewDesignFromPreset(1080, 1080, 'Diseño en blanco')}
                  className="aspect-4/3 rounded-2xl border-2 border-dashed border-purple-300 dark:border-purple-800/80 hover:border-purple-600 dark:hover:border-purple-500 bg-purple-50/40 dark:bg-purple-950/20 hover:bg-purple-50 dark:hover:bg-purple-950/40 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-[1.02] p-4 text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-2xs border border-purple-200 dark:border-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all mb-2">
                    <Plus className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                    Crear en blanco
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Lienzo limpio de 1080×1080 px
                  </span>
                </div>

                {/* 2. User's saved projects cards */}
                {filteredProjects.map((proj) => {
                  return (
                    <div
                      key={proj.id}
                      onClick={() => onOpenProject(proj.document)}
                      className="group bg-white dark:bg-[#161922] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                    >
                      {/* Project Visual Artboard Preview */}
                      <div 
                        style={{ backgroundColor: proj.previewBg }}
                        className="aspect-4/3 w-full border-b border-slate-100 relative overflow-hidden flex items-center justify-center p-4"
                      >
                        <div className="w-3/4 h-3/4 bg-white/90 rounded-xl shadow-xs border border-slate-200/60 p-3 flex flex-col justify-between group-hover:scale-105 transition-transform duration-300">
                          <div className="space-y-1">
                            <div className="w-8 h-1.5 bg-purple-600 rounded-full"></div>
                            <div className="text-[11px] font-bold text-slate-800 truncate">
                              {proj.title}
                            </div>
                            <div className="w-full h-1 bg-slate-100 rounded-full"></div>
                          </div>
                          <div className="flex items-center justify-between text-[9px] text-slate-400">
                            <span>{proj.pageCount} {proj.pageCount === 1 ? 'pág' : 'págs'}</span>
                            <span className="font-semibold text-purple-600">{proj.width}×{proj.height}</span>
                          </div>
                        </div>

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                          <button className="px-4 py-2 rounded-xl bg-white text-purple-700 font-bold text-xs shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform">
                            <span>Abrir en el editor</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Project Info & Quick Actions */}
                      <div className="p-3.5 flex items-center justify-between">
                        <div className="min-w-0 flex-1 pr-2">
                          <h3 className="font-bold text-xs text-slate-800 truncate group-hover:text-purple-600">
                            {proj.title}
                          </h3>
                          <span className="text-[10px] text-slate-400">
                            {new Date(proj.updatedAt).toLocaleDateString()}
                          </span>
                        </div>

                        {/* Actions (Duplicate / Delete) */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => handleDuplicateProject(e, proj)}
                            className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-slate-100 rounded-lg transition-colors"
                            title="Duplicar proyecto"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => handleDeleteProject(e, proj.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                            title="Eliminar diseño"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Empty State Banner when no designs or logged out */}
                {filteredProjects.length === 0 && (
                  <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center justify-center py-10 px-6 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-white/60 dark:bg-[#151822]/60 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {userProfile.isLoggedIn ? 'No tienes diseños guardados en esta cuenta' : 'Inicia sesión para ver tus diseños en la nube'}
                    </h3>
                    <p className="text-xs text-slate-500 max-w-sm">
                      {userProfile.isLoggedIn 
                        ? 'Crea un nuevo diseño o personaliza una plantilla y se guardará automáticamente en tu cuenta de Firebase.'
                        : 'Al iniciar sesión, todos tus diseños se sincronizan con Firebase para que estén disponibles cada vez que entres con tu cuenta.'
                      }
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* C. PLANTILLAS RECOMENDADAS (Template Showcase) */}
          {(activeTab === 'inicio' || activeTab === 'plantillas') && (
            <section className="space-y-4 pt-2">
              {/* Hidden File Input for Any Template File */}
              <input
                type="file"
                ref={homeTemplateFileInputRef}
                onChange={handleHomeTemplateUpload}
                className="hidden"
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <LayoutTemplate className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    <span>Plantillas recomendadas para ti</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Diseños listos para usar o sube cualquier archivo para transformarlo en una plantilla
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id="btn-upload-template-home"
                    onClick={() => homeTemplateFileInputRef.current?.click()}
                    disabled={isUploadingTemplateHome}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-50 flex-shrink-0"
                    title="Sube archivos de cualquier tipo (imágenes, PDF, JSON, DOCX, TXT, etc.) como plantillas"
                  >
                    {isUploadingTemplateHome ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <UploadCloud className="w-3.5 h-3.5" />
                    )}
                    <span>{isUploadingTemplateHome ? 'Procesando archivo...' : 'Subir archivo como plantilla'}</span>
                  </button>
                </div>
              </div>

              {/* Feedback Toast */}
              {homeTemplateMessage && (
                <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  homeTemplateMessage.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                }`}>
                  {homeTemplateMessage.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  )}
                  <span className="font-medium">{homeTemplateMessage.text}</span>
                </div>
              )}

              {/* Category Pills */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {['Todas', 'Páginas web', 'Mis Plantillas', 'Versátiles', 'Oferta de Verano', 'Instagram', 'Marketing', 'Presentaciones', 'Negocios'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedTemplateCat(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedTemplateCat === cat
                        ? 'bg-pink-600 text-white shadow-2xs'
                        : 'bg-slate-100 dark:bg-[#1c202d] hover:bg-slate-200 dark:hover:bg-[#252b3c] text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Template Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* 1. Quick "+ Subir plantilla" card */}
                <div
                  onClick={() => homeTemplateFileInputRef.current?.click()}
                  className="aspect-square rounded-2xl border-2 border-dashed border-pink-300 dark:border-pink-800/80 hover:border-pink-600 dark:hover:border-pink-500 bg-pink-50/40 dark:bg-pink-950/20 hover:bg-pink-50 dark:hover:bg-pink-950/40 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-[1.02] p-4 text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-2xs border border-pink-200 dark:border-pink-900 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-all mb-2">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-pink-700 dark:group-hover:text-pink-300">
                    Subir cualquier archivo
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 max-w-[170px] leading-tight">
                    Imágenes, PDF, JSON, DOCX, TXT, etc.
                  </span>
                </div>
                {filteredTemplates.map((tpl) => (
                  <div
                    key={tpl.id}
                    id={`home-template-${tpl.id}`}
                    onClick={() => onApplyTemplate(tpl)}
                    className="group bg-white dark:bg-[#161922] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-pink-500 dark:hover:border-pink-500 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-square relative overflow-hidden bg-slate-100">
                      <img
                        src={tpl.thumbnailUrl}
                        alt={tpl.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white">
                        {tpl.width}×{tpl.height}
                      </div>

                      {/* Hover Action */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <button className="w-full py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-transform">
                          <span>Personalizar esta plantilla</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Template Details */}
                    <div className="p-3.5 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-pink-600">
                          {tpl.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-xs text-slate-800 truncate group-hover:text-pink-600">
                        {tpl.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {tpl.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* D. MAGIC STUDIO IA & HERRAMIENTAS DESTACADAS */}
          {(activeTab === 'inicio' || activeTab === 'magic') && (
            <section className="space-y-4 pt-2">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  <span>Creava Magic Studio IA</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Potencia tus creaciones con herramientas de inteligencia artificial y generación en tiempo real
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. AI Text Copywriter */}
                <div
                  onClick={() => onContinueEditing()}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-purple-700 mb-1">
                    Texto Mágico & Copies
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Genera títulos atractivos, descripciones de producto y llamadas a la acción con Gemini.
                  </p>
                </div>

                {/* 2. Web Audio Procedural Synth */}
                <div
                  onClick={() => onContinueEditing()}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Music className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-cyan-700 mb-1">
                    50 Pistas de Audio IA
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sintetizador procedural en tiempo real con pistas Lo-Fi, Cinematic, Pop y Ambient para tus diapositivas.
                  </p>
                </div>

                {/* 3. Photo Filters & Studio */}
                <div
                  onClick={() => onContinueEditing()}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-700 mb-1">
                    Estudio de Fotos & Recorte
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Ajustes de brillo, contraste, saturación, recortador de tercios y 6 filtros fotográficos profesionales.
                  </p>
                </div>

                {/* 4. Vector Graphic Elements */}
                <div
                  onClick={() => onContinueEditing()}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 mb-1">
                    50+ Formas Vectoriales SVG
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Iconos de redes, flechas, sellos de oferta y formas abstractas con colores y trazos personalizables.
                  </p>
                </div>

                {/* 5. Custom Font Importer */}
                <div
                  id="home-tool-import-fonts"
                  onClick={() => onOpenFontImporter ? onOpenFontImporter() : onContinueEditing()}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#7d2ae8] hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7d2ae8] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Type className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#7d2ae8] mb-1">
                    Importar Tipografías
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sube fuentes en formato .ttf, .otf o woff y añade tipografías de Google Fonts a tus diseños.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* 3. CUSTOM SIZE MODAL */}
      {showCustomSizeModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 space-y-4 border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-base">Tamaño personalizado</h3>
              <button 
                onClick={() => setShowCustomSizeModal(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Introduce las dimensiones en píxeles para tu nuevo diseño
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-600 block mb-1">Ancho (px)</label>
                <input
                  type="number"
                  value={customWidth}
                  onChange={(e) => setCustomWidth(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-600"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-600 block mb-1">Alto (px)</label>
                <input
                  type="number"
                  value={customHeight}
                  onChange={(e) => setCustomHeight(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-600"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowCustomSizeModal(false)}
                className="flex-1 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateCustom}
                className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-xs"
              >
                Crear nuevo diseño
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal (Theme / Dark Mode & Preferences) */}
      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />
    </div>
  );
};
