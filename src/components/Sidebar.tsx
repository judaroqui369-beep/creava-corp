import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutTemplate, 
  Shapes, 
  Type, 
  UploadCloud, 
  Sparkles, 
  Layers, 
  Palette, 
  Search, 
  Plus, 
  Square, 
  Circle, 
  Triangle, 
  Star, 
  Heart, 
  ArrowRight, 
  Award, 
  MessageSquare,
  Image as ImageIcon,
  Check,
  Wand2,
  Trash2,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  ChevronRight,
  RefreshCw,
  Sliders,
  ChevronLeft,
  Music,
  Folder,
  Download,
  BookmarkPlus,
  FileCode,
  AlertCircle,
  CheckCircle2,
  Globe,
  FileDown
} from 'lucide-react';
import { 
  ActiveSidebarTab, 
  CanvasElement, 
  CanvasPage, 
  ShapeType,
  TextEffect,
  CustomFont,
  ContextualSidebarPanel
} from '../types';
import { 
  PRESET_SIZES, 
  AVAILABLE_FONTS, 
  SHAPE_ITEMS, 
  TYPOGRAPHY_PRESETS, 
  STOCK_PHOTOS, 
  CANVA_GRADIENTS, 
  COLOR_PALETTES, 
  STICKER_ITEMS 
} from '../data/elements';
import { DESIGN_TEMPLATES, TemplateItem } from '../data/templates';
import { 
  getCustomTemplates, 
  saveCustomTemplate, 
  removeCustomTemplate, 
  createCustomTemplateFromPage, 
  parseTemplateJsonFile, 
  parseAnyFileAsTemplate,
  downloadTemplateAsJson,
  EVENT_CUSTOM_TEMPLATES_CHANGED
} from '../utils/templateManager';
import { 
  POPULAR_GOOGLE_FONTS, 
  loadGoogleFontToDom, 
  installGoogleFont 
} from '../utils/fontManager';
import { LayersPanel } from './LayersPanel';
import { MusicPanel } from './MusicPanel';
import { ResourcesPanel } from './ResourcesPanel';
import { ElementsPanel } from './ElementsPanel';
import { SidebarColorPanel } from './SidebarColorPanel';
import { SidebarFontPanel } from './SidebarFontPanel';
import { SidebarEffectsPanel } from './SidebarEffectsPanel';

interface SidebarProps {
  activeTab: ActiveSidebarTab;
  onTabChange: (tab: ActiveSidebarTab) => void;
  isOpen: boolean;
  onToggleOpen: () => void;
  currentPage: CanvasPage;
  selectedElementId: string | null;
  onSelectElement: (id: string | null) => void;
  onAddElement: (element: Omit<CanvasElement, 'id' | 'zIndex'>) => void;
  onApplyTemplate: (template: TemplateItem) => void;
  onUpdateBackground: (bg: { type: 'color' | 'gradient' | 'image'; value: string }) => void;
  onUpdateElement: (id: string, updates: Partial<CanvasElement>) => void;
  onDeleteElementById: (id: string) => void;
  onReorderElements: (newElements: CanvasElement[]) => void;
  currentAudioTrackId?: string;
  onSetAudioTrack?: (trackId: string | undefined) => void;
  customFonts?: CustomFont[];
  onOpenFontImporter?: () => void;
  documentWidth?: number;
  documentHeight?: number;
  onApplyTemplateAsNewPage?: (template: TemplateItem) => void;
  onFontsUpdated?: (fonts: CustomFont[]) => void;
  contextualPanel?: ContextualSidebarPanel;
  onCloseContextualPanel?: () => void;
  documentColors?: string[];
  selectedElement?: CanvasElement | null;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  isOpen,
  onToggleOpen,
  currentPage,
  selectedElementId,
  onSelectElement,
  onAddElement,
  onApplyTemplate,
  onUpdateBackground,
  onUpdateElement,
  onDeleteElementById,
  onReorderElements,
  currentAudioTrackId,
  onSetAudioTrack,
  customFonts = [],
  onOpenFontImporter,
  documentWidth = 1080,
  documentHeight = 1080,
  onApplyTemplateAsNewPage,
  onFontsUpdated,
  contextualPanel,
  onCloseContextualPanel,
  documentColors = [],
  selectedElement,
}) => {
  const [templateSearch, setTemplateSearch] = useState('');
  const [templateCategory, setTemplateCategory] = useState<string>('Todos');
  const [stockPhotoCategory, setStockPhotoCategory] = useState<string>('Todos');
  const [magicPrompt, setMagicPrompt] = useState('');
  const [isGeneratingMagic, setIsGeneratingMagic] = useState(false);
  const [magicGeneratedText, setMagicGeneratedText] = useState<string | null>(null);

  // Multimedia Library / Custom Templates state
  const [customTemplates, setCustomTemplates] = useState<TemplateItem[]>([]);
  const [mediaSubTab, setMediaSubTab] = useState<'photos' | 'templates'>('templates');
  const [templateUploadMessage, setTemplateUploadMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSavingDesignAsTemplate, setIsSavingDesignAsTemplate] = useState(false);
  const [customTemplateNameInput, setCustomTemplateNameInput] = useState('');
  const [isProcessingTemplate, setIsProcessingTemplate] = useState(false);
  const [isDraggingTemplateFile, setIsDraggingTemplateFile] = useState(false);

  // Google Fonts explorer state in Text tab
  const [gfSearch, setGfSearch] = useState('');
  const [gfCategory, setGfCategory] = useState('Todas');
  const [loadingGfName, setLoadingGfName] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const templateFileInputRef = useRef<HTMLInputElement>(null);

  // Load custom templates on mount and synchronize with external updates
  useEffect(() => {
    setCustomTemplates(getCustomTemplates());
    const handleSync = () => {
      setCustomTemplates(getCustomTemplates());
    };
    window.addEventListener(EVENT_CUSTOM_TEMPLATES_CHANGED, handleSync);
    return () => window.removeEventListener(EVENT_CUSTOM_TEMPLATES_CHANGED, handleSync);
  }, []);

  // Filter templates (combines custom and preset templates)
  const allTemplates = [...customTemplates, ...DESIGN_TEMPLATES];
  const filteredTemplates = allTemplates.filter(tpl => {
    const matchesSearch = tpl.name.toLowerCase().includes(templateSearch.toLowerCase()) ||
                          (tpl.description ? tpl.description.toLowerCase().includes(templateSearch.toLowerCase()) : false);
    if (templateCategory === 'Todos') return matchesSearch;
    if (templateCategory === 'Mis Plantillas') return matchesSearch && tpl.isCustom;
    return matchesSearch && tpl.category === templateCategory;
  });

  // Filter stock photos
  const filteredStockPhotos = stockPhotoCategory === 'Todos' 
    ? STOCK_PHOTOS 
    : STOCK_PHOTOS.filter(photo => photo.category === stockPhotoCategory);

  // Process any uploaded file as a rich template
  const processUploadedFileAsTemplate = async (file: File) => {
    try {
      setIsProcessingTemplate(true);
      const parsed = await parseAnyFileAsTemplate(file);
      const updated = saveCustomTemplate(parsed);
      setCustomTemplates(updated);
      setTemplateCategory('Mis Plantillas');
      setTemplateUploadMessage({
        type: 'success',
        text: `¡Archivo "${file.name}" convertido con éxito en la plantilla "${parsed.name}"!`
      });
      setTimeout(() => setTemplateUploadMessage(null), 5000);
    } catch (err: any) {
      setTemplateUploadMessage({
        type: 'error',
        text: err?.message || 'Error al procesar el archivo como plantilla.'
      });
      setTimeout(() => setTemplateUploadMessage(null), 6000);
    } finally {
      setIsProcessingTemplate(false);
      if (templateFileInputRef.current) {
        templateFileInputRef.current.value = '';
      }
    }
  };

  // Handle local image upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onAddElement({
            type: 'image',
            src: event.target.result as string,
            x: 100,
            y: 100,
            width: 400,
            height: 300,
            rotation: 0,
            opacity: 1,
            borderRadius: 8,
            objectFit: 'cover'
          });
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  // Handle template file upload (any file format)
  const handleTemplateFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processUploadedFileAsTemplate(file);
    }
  };

  // Handle saving the current canvas design as a template
  const handleSaveCurrentAsTemplate = () => {
    const name = customTemplateNameInput.trim() || `Plantilla ${currentPage.title || 'Mi Creación'}`;
    const newTpl = createCustomTemplateFromPage({
      name,
      category: 'Mis Plantillas',
      description: `Plantilla guardada del lienzo con ${currentPage.elements.length} capas`,
      width: documentWidth,
      height: documentHeight,
      page: currentPage,
    });
    const updated = saveCustomTemplate(newTpl);
    setCustomTemplates(updated);
    setIsSavingDesignAsTemplate(false);
    setCustomTemplateNameInput('');
    setTemplateUploadMessage({
      type: 'success',
      text: `¡Diseño guardado como "${name}" en tu biblioteca de plantillas!`
    });
    setTimeout(() => setTemplateUploadMessage(null), 4000);
  };

  // Handle deleting custom template
  const handleDeleteCustomTemplate = (id: string, name: string) => {
    if (window.confirm(`¿Deseas eliminar la plantilla "${name}" de tu biblioteca?`)) {
      const updated = removeCustomTemplate(id);
      setCustomTemplates(updated);
    }
  };

  // Handle selecting Google Font in Text tab
  const handleSelectGoogleFont = async (gfName: string, gfCategoryName: string, cssFamily: string) => {
    setLoadingGfName(gfName);
    try {
      await loadGoogleFontToDom(gfName);
      if (onFontsUpdated && !customFonts.some(f => f.name.toLowerCase() === gfName.toLowerCase())) {
        const installed = await installGoogleFont(gfName, gfCategoryName);
        if (installed) {
          onFontsUpdated([installed, ...customFonts]);
        }
      }

      if (selectedElementId) {
        onUpdateElement(selectedElementId, { fontFamily: cssFamily });
      } else {
        onAddElement({
          type: 'text',
          content: `${gfName} - Tipografía`,
          x: 120,
          y: 220,
          width: 440,
          height: 70,
          rotation: 0,
          opacity: 1,
          fontSize: 36,
          fontFamily: cssFamily,
          color: '#0e1318',
          textAlign: 'center'
        });
      }
    } catch (err) {
      console.warn('Error applying Google Font:', err);
    } finally {
      setLoadingGfName(null);
    }
  };

  // Magic Text / AI Generator
  const handleGenerateMagic = () => {
    if (!magicPrompt.trim()) return;
    setIsGeneratingMagic(true);

    setTimeout(() => {
      const topic = magicPrompt.toLowerCase();
      let headline = '';
      let sub = '';

      if (topic.includes('oferta') || topic.includes('descuento') || topic.includes('rebaja')) {
        headline = '¡GRAN OFERTA RELÁMPAGO 50% OFF!';
        sub = 'Aprovecha solo por 48 horas en nuestra tienda online. Unidades limitadas.';
      } else if (topic.includes('café') || topic.includes('comida') || topic.includes('restaurante')) {
        headline = 'Sabor Artesanal Incomparable';
        sub = 'Disfruta una experiencia culinaria única hecha con ingredientes frescos cada día.';
      } else if (topic.includes('curso') || topic.includes('taller') || topic.includes('workshop')) {
        headline = 'Domina Nuevas Habilidades Hoy';
        sub = 'Aprende paso a paso con los mejores mentores de la industria digital.';
      } else if (topic.includes('moda') || topic.includes('ropa')) {
        headline = 'NUEVA COLECCIÓN ATEMPORAL';
        sub = 'Estilo minimalista, confort prémium y elegancia para cada momento.';
      } else {
        headline = `Descubre lo Mejor de ${magicPrompt.toUpperCase()}`;
        sub = 'Transforma tu día con innovación, calidad y diseño que marca la diferencia.';
      }

      setMagicGeneratedText(`${headline}\n${sub}`);
      setIsGeneratingMagic(false);
    }, 600);
  };

  const navItems = [
    { id: 'templates', label: 'Diseño', icon: LayoutTemplate },
    { id: 'elements', label: 'Elementos', icon: Shapes, badge: '50+' },
    { id: 'text', label: 'Texto', icon: Type },
    { id: 'uploads', label: 'Subidos', icon: UploadCloud },
    { id: 'resources', label: 'Recursos', icon: Folder },
    { id: 'music', label: 'Música IA', icon: Music, badge: '50' },
    { id: 'magic', label: 'Magic IA', icon: Sparkles, badge: 'IA' },
    { id: 'layers', label: 'Capas', icon: Layers },
    { id: 'background', label: 'Fondo', icon: Palette },
  ];

  return (
    <div className="flex h-full z-20 select-none min-h-0">
      {/* 1. Primary Left Navigation Rail (Professional Polish Clean Bar) */}
      <div className="w-[72px] bg-white dark:bg-[#151822] flex flex-col items-center py-3 border-r border-gray-200 dark:border-slate-800 z-20 flex-shrink-0 shadow-2xs transition-colors overflow-y-auto overflow-x-hidden custom-scrollbar min-h-0 h-full">
        <div className="flex flex-col gap-1 w-full px-1.5 pb-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = !contextualPanel && activeTab === item.id && isOpen;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (contextualPanel) {
                    onCloseContextualPanel?.();
                    onTabChange(item.id as ActiveSidebarTab);
                    if (!isOpen) onToggleOpen();
                  } else if (activeTab === item.id && isOpen) {
                    onToggleOpen();
                  } else {
                    onTabChange(item.id as ActiveSidebarTab);
                    if (!isOpen) onToggleOpen();
                  }
                }}
                className={`relative flex flex-col items-center justify-center w-full py-2.5 px-1 rounded-lg transition-all group cursor-pointer ${
                  isActive 
                    ? 'bg-[#7d2ae8]/10 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300' 
                    : 'text-gray-500 dark:text-slate-400 hover:text-[#7d2ae8] dark:hover:text-purple-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.badge && (
                  <span className="absolute top-1.5 right-1.5 bg-gradient-to-r from-[#7d2ae8] to-[#00c4cc] text-white text-[9px] font-extrabold px-1 rounded-full shadow-xs">
                    {item.badge}
                  </span>
                )}
                <Icon className={`w-5 h-5 mb-1 transition-transform group-hover:scale-110 ${isActive ? 'text-[#7d2ae8]' : ''}`} />
                <span className={`text-[10px] font-medium tracking-tight ${isActive ? 'font-bold text-[#7d2ae8] dark:text-purple-300' : 'text-gray-600 dark:text-slate-400'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#7d2ae8] rounded-r-md"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Secondary Sliding Drawer Panel */}
      {isOpen && (
        <div className="w-80 bg-white dark:bg-[#161922] border-r border-gray-200 dark:border-slate-800 flex flex-col h-full z-10 animate-in slide-in-from-left duration-200 shadow-xl flex-shrink-0 text-gray-800 dark:text-slate-100 min-h-0">
          {contextualPanel === 'color' ? (
            <SidebarColorPanel
              element={selectedElement || null}
              onUpdateElement={(updates) => selectedElement && onUpdateElement(selectedElement.id, updates)}
              documentColors={documentColors}
              onClose={onCloseContextualPanel || (() => {})}
            />
          ) : contextualPanel === 'fonts' ? (
            <SidebarFontPanel
              element={selectedElement || null}
              customFonts={customFonts}
              onUpdateElement={(updates) => selectedElement && onUpdateElement(selectedElement.id, updates)}
              onOpenFontImporter={onOpenFontImporter}
              onFontsUpdated={onFontsUpdated}
              onClose={onCloseContextualPanel || (() => {})}
            />
          ) : contextualPanel === 'effects' ? (
            <SidebarEffectsPanel
              element={selectedElement || null}
              onUpdateElement={(updates) => selectedElement && onUpdateElement(selectedElement.id, updates)}
              onClose={onCloseContextualPanel || (() => {})}
            />
          ) : (
            <>
              {/* Header of Drawer */}
              <div className="px-4 py-3.5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#161922] flex-shrink-0">
                <h3 className="font-bold text-[#0e1318] dark:text-white text-sm capitalize">
                  {activeTab === 'templates' && 'Plantillas de diseño'}
                  {activeTab === 'elements' && 'Elementos gráficos (300+)'}
                  {activeTab === 'text' && 'Tipografía y Texto'}
                  {activeTab === 'uploads' && 'Biblioteca Multimedia'}
                  {activeTab === 'resources' && 'Recursos y Stock'}
                  {activeTab === 'music' && 'Música IA (50 Pistas)'}
                  {activeTab === 'magic' && 'Creava Magic Studio'}
                  {activeTab === 'layers' && 'Gestión de Capas'}
                  {activeTab === 'background' && 'Fondo y Color'}
                </h3>
                <button
                  onClick={onToggleOpen}
                  className="text-gray-400 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white p-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Cerrar panel"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Content Body */}
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar min-h-0">
            {/* TAB: TEMPLATES */}
            {activeTab === 'templates' && (
              <div 
                className={`space-y-4 relative transition-colors ${
                  isDraggingTemplateFile ? 'ring-2 ring-[#7d2ae8] ring-dashed rounded-2xl p-2 bg-purple-50/60' : ''
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDraggingTemplateFile(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDraggingTemplateFile(false);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDraggingTemplateFile(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) {
                    processUploadedFileAsTemplate(file);
                  }
                }}
              >
                {/* Hidden File Input for Any Template File */}
                <input
                  type="file"
                  ref={templateFileInputRef}
                  onChange={handleTemplateFileUpload}
                  className="hidden"
                />

                {/* Drag and Drop Overlay */}
                {isDraggingTemplateFile && (
                  <div className="p-4 rounded-xl border-2 border-dashed border-[#7d2ae8] bg-purple-100/90 text-center animate-pulse">
                    <UploadCloud className="w-6 h-6 text-[#7d2ae8] mx-auto mb-1" />
                    <p className="text-xs font-bold text-[#7d2ae8]">Suelta cualquier archivo aquí</p>
                    <p className="text-[10px] text-purple-700">Se convertirá automáticamente en una plantilla editable</p>
                  </div>
                )}

                {/* Upload & Save Template Action Banner */}
                <div className="p-3 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 rounded-2xl border border-purple-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <LayoutTemplate className="w-4 h-4 text-[#7d2ae8]" />
                      <span className="text-xs font-bold text-slate-900">Biblioteca de Plantillas</span>
                    </div>
                    {customTemplates.length > 0 && (
                      <span className="text-[10px] font-bold bg-[#7d2ae8] text-white px-2 py-0.5 rounded-full shadow-2xs">
                        {customTemplates.length} {customTemplates.length === 1 ? 'personalizada' : 'personalizadas'}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                    <button
                      id="btn-upload-template-any"
                      disabled={isProcessingTemplate}
                      onClick={() => templateFileInputRef.current?.click()}
                      className="py-1.5 px-2 bg-white hover:bg-purple-600 hover:text-white border border-purple-200 text-purple-700 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer disabled:opacity-50"
                      title="Sube archivos de cualquier tipo (imágenes, PDF, JSON, DOCX, TXT, etc.) como plantillas"
                    >
                      {isProcessingTemplate ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-purple-600" />
                      ) : (
                        <UploadCloud className="w-3.5 h-3.5" />
                      )}
                      <span>{isProcessingTemplate ? 'Procesando...' : 'Subir archivo'}</span>
                    </button>

                    <button
                      id="btn-save-design-as-template"
                      onClick={() => {
                        setIsSavingDesignAsTemplate(true);
                        setCustomTemplateNameInput(currentPage.title || '');
                      }}
                      className="py-1.5 px-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-200 text-indigo-700 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                    >
                      <BookmarkPlus className="w-3.5 h-3.5" />
                      <span>Guardar diseño</span>
                    </button>
                  </div>

                  <div className="text-[10px] text-slate-500 font-medium px-0.5 pt-0.5">
                    💡 Sube cualquier formato: imágenes, PDF, JSON, Word, TXT, o suéltalo aquí directamente.
                  </div>

                  {/* Inline Save Form */}
                  {isSavingDesignAsTemplate && (
                    <div className="pt-2 border-t border-purple-200/60 space-y-1.5 animate-in fade-in duration-200">
                      <div className="text-[10px] font-bold text-slate-700">Nombre de la nueva plantilla:</div>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={customTemplateNameInput}
                          onChange={(e) => setCustomTemplateNameInput(e.target.value)}
                          placeholder="Mi Plantilla Personalizada..."
                          className="flex-1 bg-white border border-purple-200 rounded-lg px-2.5 py-1 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7d2ae8]"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveCurrentAsTemplate();
                            if (e.key === 'Escape') setIsSavingDesignAsTemplate(false);
                          }}
                        />
                        <button
                          onClick={handleSaveCurrentAsTemplate}
                          className="px-2.5 py-1 bg-[#7d2ae8] text-white rounded-lg text-xs font-bold hover:bg-[#6a24c5] transition-colors"
                        >
                          Guardar
                        </button>
                        <button
                          onClick={() => setIsSavingDesignAsTemplate(false)}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs hover:bg-gray-200 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Feedback Notification Banner */}
                  {templateUploadMessage && (
                    <div className={`p-2 rounded-xl text-xs flex items-center gap-2 ${
                      templateUploadMessage.type === 'success' 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                      {templateUploadMessage.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      )}
                      <span className="text-[11px] font-medium leading-tight">{templateUploadMessage.text}</span>
                    </div>
                  )}
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={templateSearch}
                    onChange={(e) => setTemplateSearch(e.target.value)}
                    placeholder="Buscar plantillas..."
                    className="w-full bg-gray-100 border border-transparent rounded-lg pl-9 pr-3 py-2 text-xs text-[#0e1318] placeholder-gray-400 focus:outline-none focus:border-[#7d2ae8] focus:ring-1 focus:ring-[#7d2ae8] focus:bg-white transition-all"
                  />
                </div>

                {/* Categories */}
                <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-none">
                  {[
                    { id: 'Todos', label: 'Todos' },
                    { id: 'Mis Plantillas', label: `Mis Plantillas (${customTemplates.length})` },
                    { id: 'Instagram', label: 'Instagram' },
                    { id: 'Marketing', label: 'Marketing' },
                    { id: 'Presentaciones', label: 'Presentaciones' },
                    { id: 'Inspiración', label: 'Inspiración' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setTemplateCategory(cat.id)}
                      className={`px-3 py-1 rounded-full whitespace-nowrap font-semibold transition-colors ${
                        templateCategory === cat.id
                          ? 'bg-[#7d2ae8] text-white shadow-xs'
                          : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Empty state for 'Mis Plantillas' */}
                {templateCategory === 'Mis Plantillas' && customTemplates.length === 0 && (
                  <div className="p-6 text-center bg-gray-50 border border-dashed border-gray-200 rounded-2xl space-y-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#7d2ae8] flex items-center justify-center mx-auto shadow-2xs">
                      <BookmarkPlus className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Aún no tienes plantillas guardadas</h4>
                      <p className="text-[11px] text-slate-500 mt-1 max-w-[220px] mx-auto leading-relaxed">
                        Sube un archivo .json o guarda tu diseño actual para reutilizarlo como plantilla.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={() => templateFileInputRef.current?.click()}
                        className="w-full py-2 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                      >
                        <UploadCloud className="w-3.5 h-3.5" />
                        <span>Subir archivo .json</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsSavingDesignAsTemplate(true);
                          setCustomTemplateNameInput(currentPage.title || '');
                        }}
                        className="w-full py-2 bg-white hover:bg-gray-100 text-slate-700 border border-gray-200 font-bold text-xs rounded-xl shadow-2xs transition-all"
                      >
                        Guardar diseño actual
                      </button>
                    </div>
                  </div>
                )}

                {/* Templates Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {filteredTemplates.map(tpl => (
                    <div
                      key={tpl.id}
                      className="group cursor-pointer rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-[#7d2ae8] hover:ring-2 ring-[#7d2ae8] ring-offset-1 transition-all hover:shadow-md flex flex-col justify-between"
                    >
                      <div className="aspect-square relative overflow-hidden bg-gray-100">
                        <img
                          src={tpl.thumbnailUrl}
                          alt={tpl.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        {tpl.isCustom && (
                          <div className="absolute top-1.5 left-1.5 bg-[#7d2ae8] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md shadow-xs">
                            Tu Plantilla
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2 gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onApplyTemplate(tpl);
                            }}
                            className="w-full text-[10px] font-bold text-white bg-[#7d2ae8] hover:bg-[#6a24c5] py-1 px-1.5 rounded-md shadow-2xs transition-colors"
                          >
                            Aplicar al lienzo
                          </button>
                          {onApplyTemplateAsNewPage && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onApplyTemplateAsNewPage(tpl);
                              }}
                              className="w-full text-[9px] font-semibold text-white bg-black/60 hover:bg-black/90 py-0.5 px-1.5 rounded-md transition-colors"
                            >
                              + Añadir como pág.
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="p-2 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-gray-800 truncate group-hover:text-[#7d2ae8] flex-1">
                            {tpl.name}
                          </p>
                          {tpl.isCustom && (
                            <div className="flex items-center gap-1 ml-1 flex-shrink-0">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  downloadTemplateAsJson(tpl);
                                }}
                                title="Descargar archivo JSON"
                                className="p-1 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded"
                              >
                                <Download className="w-3 h-3" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteCustomTemplate(tpl.id, tpl.name);
                                }}
                                title="Eliminar plantilla"
                                className="p-1 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span className="capitalize">{tpl.category}</span>
                          <span>{tpl.width}×{tpl.height}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: ELEMENTS (50+ Vector Elements) */}
            {activeTab === 'elements' && (
              <ElementsPanel onAddElement={onAddElement} />
            )}

            {/* TAB: RESOURCES (25 Curated Stock Photos & Mockups) */}
            {activeTab === 'resources' && (
              <ResourcesPanel onAddElement={onAddElement} />
            )}

            {/* TAB: MUSIC (50 AI Procedural Audio Tracks) */}
            {activeTab === 'music' && (
              <MusicPanel
                currentAudioTrackId={currentPage.audioTrackId}
                onSelectTrackForPage={(trackId) => onSetAudioTrack?.(trackId)}
              />
            )}

            {/* TAB: TEXT */}
            {activeTab === 'text' && (
              <div className="space-y-5">
                {/* Big Add Text Button */}
                <button
                  onClick={() => onAddElement({
                    type: 'text',
                    content: 'Tu texto aquí',
                    x: 150,
                    y: 250,
                    width: 320,
                    height: 60,
                    rotation: 0,
                    opacity: 1,
                    fontSize: 32,
                    fontFamily: "'Poppins', sans-serif",
                    color: '#0e1318',
                    textAlign: 'center'
                  })}
                  className="w-full py-3 px-4 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Añadir un cuadro de texto</span>
                </button>

                {/* Import Custom Fonts Banner / Button */}
                <div className="bg-gradient-to-r from-purple-50 via-indigo-50/70 to-purple-50 p-3.5 rounded-2xl border border-purple-200/80 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-[#7d2ae8] text-white flex items-center justify-center shadow-2xs">
                        <UploadCloud className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-tight">Importar Tipografías</h4>
                        <p className="text-[10px] text-slate-500">Archivos .ttf, .otf o Google Fonts</p>
                      </div>
                    </div>
                    <button
                      id="btn-sidebar-import-fonts"
                      onClick={onOpenFontImporter}
                      className="px-2.5 py-1 bg-white hover:bg-[#7d2ae8] hover:text-white border border-purple-200 text-[#7d2ae8] font-bold text-[11px] rounded-lg transition-all shadow-2xs flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Subir</span>
                    </button>
                  </div>

                  {/* If there are imported custom fonts, display quick chips */}
                  {customFonts && customFonts.length > 0 && (
                    <div className="space-y-1.5 pt-1.5 border-t border-purple-100">
                      <div className="flex items-center justify-between text-[10px] text-purple-800 font-semibold">
                        <span>Tus fuentes importadas:</span>
                        <span className="bg-purple-200/70 text-purple-900 px-1.5 py-0.2 rounded-full text-[9px] font-bold">
                          {customFonts.length}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 max-h-28 overflow-y-auto pr-1">
                        {customFonts.map((font) => (
                          <button
                            key={font.id}
                            onClick={() => onAddElement({
                              type: 'text',
                              content: font.name,
                              x: 120,
                              y: 250,
                              width: 380,
                              height: 70,
                              rotation: 0,
                              opacity: 1,
                              fontSize: 38,
                              fontFamily: font.family,
                              color: '#0e1318',
                              textAlign: 'center'
                            })}
                            className="px-2 py-1 bg-white hover:bg-purple-100 text-slate-800 border border-purple-200 rounded-lg text-xs transition-all shadow-2xs flex items-center gap-1.5 truncate max-w-full group"
                            title={`Añadir texto con fuente "${font.name}"`}
                          >
                            <span style={{ fontFamily: font.family }} className="truncate font-medium">
                              {font.name}
                            </span>
                            <span className="text-[9px] text-[#7d2ae8] font-bold group-hover:scale-110 transition-transform">
                              +
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Google Fonts Direct Explorer */}
                <div className="space-y-2.5 pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#7d2ae8]" />
                      <h4 className="text-xs font-bold text-gray-800">
                        Catálogo Google Fonts
                      </h4>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {POPULAR_GOOGLE_FONTS.length} fuentes
                    </span>
                  </div>

                  {/* Search in Google Fonts */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={gfSearch}
                      onChange={(e) => setGfSearch(e.target.value)}
                      placeholder="Buscar por nombre (e.g., Poppins, Bebas)..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-slate-800 placeholder-gray-400 focus:outline-none focus:border-[#7d2ae8] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Category Pills */}
                  <div className="flex gap-1 overflow-x-auto pb-1 text-[10px] scrollbar-none">
                    {['Todas', 'Moderna', 'Elegante', 'Display', 'Manuscrita', 'Retro', 'Vintage'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setGfCategory(cat)}
                        className={`px-2 py-0.5 rounded-md font-semibold whitespace-nowrap transition-colors ${
                          gfCategory === cat
                            ? 'bg-[#7d2ae8] text-white shadow-2xs'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Google Fonts Quick List */}
                  <div className="max-h-52 overflow-y-auto space-y-1 pr-0.5 custom-scrollbar">
                    {POPULAR_GOOGLE_FONTS
                      .filter(f => {
                        const matchQ = f.name.toLowerCase().includes(gfSearch.toLowerCase());
                        const matchC = gfCategory === 'Todas' || f.category.toLowerCase() === gfCategory.toLowerCase();
                        return matchQ && matchC;
                      })
                      .slice(0, 16)
                      .map((font) => {
                        const isLoading = loadingGfName === font.name;
                        return (
                          <div
                            key={font.name}
                            className="group flex items-center justify-between p-2 rounded-xl bg-gray-50/80 hover:bg-purple-50/40 border border-gray-200/80 hover:border-purple-300 transition-all text-left"
                          >
                            <div className="flex-1 min-w-0 pr-2">
                              <span 
                                style={{ fontFamily: font.cssFamily }} 
                                className="block text-sm font-semibold text-slate-800 truncate"
                              >
                                {font.name}
                              </span>
                              <span className="text-[9px] text-gray-400 capitalize">
                                {font.category}
                              </span>
                            </div>

                            <button
                              disabled={isLoading}
                              onClick={() => handleSelectGoogleFont(font.name, font.category, font.cssFamily)}
                              className="px-2 py-1 bg-white hover:bg-[#7d2ae8] hover:text-white border border-gray-200 hover:border-[#7d2ae8] text-[#7d2ae8] text-[10px] font-bold rounded-lg transition-all shadow-2xs flex-shrink-0 flex items-center gap-1 cursor-pointer"
                              title={`Aplicar fuente ${font.name}`}
                            >
                              {isLoading ? (
                                <RefreshCw className="w-3 h-3 animate-spin" />
                              ) : (
                                <>
                                  <span>{selectedElementId ? 'Aplicar' : '+ Añadir'}</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Default Text Hierarchy (Canva 3 tiers) */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Estilos de texto predeterminados
                  </h4>
                  
                  {/* Heading */}
                  <button
                    onClick={() => onAddElement({
                      type: 'text',
                      content: 'Añadir un título',
                      x: 100,
                      y: 200,
                      width: 500,
                      height: 80,
                      rotation: 0,
                      opacity: 1,
                      fontSize: 52,
                      fontFamily: "'Playfair Display', serif",
                      color: '#0e1318',
                      bold: true,
                      textAlign: 'center'
                    })}
                    className="w-full p-3 rounded-xl bg-gray-50/70 border border-gray-200 hover:border-[#7d2ae8] text-left transition-all hover:bg-purple-50/30"
                  >
                    <span className="font-playfair text-xl font-bold text-[#0e1318] block">
                      Añadir un título
                    </span>
                  </button>

                  {/* Subheading */}
                  <button
                    onClick={() => onAddElement({
                      type: 'text',
                      content: 'Añadir un subtítulo',
                      x: 120,
                      y: 280,
                      width: 440,
                      height: 50,
                      rotation: 0,
                      opacity: 1,
                      fontSize: 28,
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#475569',
                      bold: false,
                      textAlign: 'center'
                    })}
                    className="w-full p-3 rounded-xl bg-gray-50/70 border border-gray-200 hover:border-[#7d2ae8] text-left transition-all hover:bg-purple-50/30"
                  >
                    <span className="font-montserrat text-sm font-semibold text-gray-700 block">
                      Añadir un subtítulo
                    </span>
                  </button>

                  {/* Body text */}
                  <button
                    onClick={() => onAddElement({
                      type: 'text',
                      content: 'Añadir un poco de texto aquí para contar tu historia.',
                      x: 140,
                      y: 350,
                      width: 400,
                      height: 60,
                      rotation: 0,
                      opacity: 1,
                      fontSize: 18,
                      fontFamily: "'Inter', sans-serif",
                      color: '#64748B',
                      textAlign: 'center'
                    })}
                    className="w-full p-3 rounded-xl bg-gray-50/70 border border-gray-200 hover:border-[#7d2ae8] text-left transition-all hover:bg-purple-50/30"
                  >
                    <span className="font-inter text-xs text-gray-500 block">
                      Añadir un poco de texto
                    </span>
                  </button>
                </div>

                {/* Typography Combos */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Combinaciones tipográficas
                  </h4>
                  <div className="space-y-2">
                    {TYPOGRAPHY_PRESETS.map((combo, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onAddElement({
                            type: 'text',
                            content: combo.title,
                            x: 100,
                            y: 200,
                            width: 500,
                            height: combo.titleSize + 20,
                            rotation: 0,
                            opacity: 1,
                            fontSize: combo.titleSize,
                            fontFamily: combo.titleFont,
                            color: combo.titleColor,
                            effect: combo.effect,
                            effectColor: combo.effectColor,
                            textAlign: 'center',
                            bold: true
                          });
                          onAddElement({
                            type: 'text',
                            content: combo.subtitle,
                            x: 120,
                            y: 200 + combo.titleSize + 20,
                            width: 460,
                            height: combo.subSize + 15,
                            rotation: 0,
                            opacity: 1,
                            fontSize: combo.subSize,
                            fontFamily: combo.subFont,
                            color: combo.subColor,
                            textAlign: 'center',
                            letterSpacing: 2
                          });
                        }}
                        className="w-full p-3 rounded-xl bg-white border border-gray-200 hover:border-[#7d2ae8] text-center transition-all group shadow-2xs hover:shadow-xs"
                      >
                        <span 
                          style={{ fontFamily: combo.titleFont, color: combo.titleColor }}
                          className="text-lg font-bold block truncate"
                        >
                          {combo.title}
                        </span>
                        <span 
                          style={{ fontFamily: combo.subFont, color: combo.subColor }}
                          className="text-[11px] block tracking-wider mt-0.5"
                        >
                          {combo.subtitle}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: UPLOADS & MULTIMEDIA LIBRARY */}
            {activeTab === 'uploads' && (
              <div className="space-y-4">
                {/* Hidden Template Input (Any File) */}
                <input
                  type="file"
                  ref={templateFileInputRef}
                  onChange={handleTemplateFileUpload}
                  className="hidden"
                />

                {/* Sub-tabs: Fotos vs Plantillas */}
                <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-xl text-xs font-bold text-gray-600">
                  <button
                    onClick={() => setMediaSubTab('templates')}
                    className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      mediaSubTab === 'templates'
                        ? 'bg-white text-[#7d2ae8] shadow-xs'
                        : 'hover:text-gray-900'
                    }`}
                  >
                    <LayoutTemplate className="w-3.5 h-3.5" />
                    <span>Plantillas ({customTemplates.length})</span>
                  </button>

                  <button
                    onClick={() => setMediaSubTab('photos')}
                    className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      mediaSubTab === 'photos'
                        ? 'bg-white text-[#7d2ae8] shadow-xs'
                        : 'hover:text-gray-900'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Fotos & Archivos</span>
                  </button>
                </div>

                {/* SUBTAB 1: TEMPLATES UPLOADS */}
                {mediaSubTab === 'templates' && (
                  <div 
                    className="space-y-3.5"
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const file = e.dataTransfer.files?.[0];
                      if (file) processUploadedFileAsTemplate(file);
                    }}
                  >
                    {/* Action Card: Upload Template or Save current canvas */}
                    <div className="p-3 bg-gradient-to-br from-purple-50 via-indigo-50/80 to-purple-50 rounded-2xl border border-purple-200/80 shadow-2xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <LayoutTemplate className="w-4 h-4 text-[#7d2ae8]" />
                          <h4 className="text-xs font-bold text-slate-900">
                            Subir Plantillas a la Biblioteca
                          </h4>
                        </div>
                        <span className="text-[10px] text-purple-700 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">
                          Cualquier archivo
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Sube archivos de cualquier tipo (Imágenes, PDF, JSON, DOCX, TXT, etc.) para convertirlos automáticamente en plantillas editables.
                      </p>

                      <div className="flex flex-col gap-1.5 pt-1">
                        <button
                          id="btn-upload-template-json-media"
                          disabled={isProcessingTemplate}
                          onClick={() => templateFileInputRef.current?.click()}
                          className="w-full py-2.5 px-3 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isProcessingTemplate ? (
                            <RefreshCw className="w-4 h-4 animate-spin text-white" />
                          ) : (
                            <UploadCloud className="w-4 h-4" />
                          )}
                          <span>{isProcessingTemplate ? 'Procesando archivo...' : 'Subir cualquier archivo como plantilla'}</span>
                        </button>

                        <button
                          onClick={() => {
                            setIsSavingDesignAsTemplate(true);
                            setCustomTemplateNameInput(currentPage.title || '');
                          }}
                          className="w-full py-2 px-3 bg-white hover:bg-purple-50 text-purple-800 border border-purple-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                        >
                          <BookmarkPlus className="w-3.5 h-3.5" />
                          <span>Guardar lienzo actual como plantilla</span>
                        </button>
                      </div>

                      {/* Inline Form to name template */}
                      {isSavingDesignAsTemplate && (
                        <div className="p-2.5 bg-white rounded-xl border border-purple-200 space-y-2 animate-in fade-in duration-200">
                          <div className="text-[11px] font-bold text-slate-800">
                            Nombre para tu plantilla:
                          </div>
                          <input
                            type="text"
                            value={customTemplateNameInput}
                            onChange={(e) => setCustomTemplateNameInput(e.target.value)}
                            placeholder="Mi diseño increíble..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-[#7d2ae8]"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSaveCurrentAsTemplate();
                              if (e.key === 'Escape') setIsSavingDesignAsTemplate(false);
                            }}
                          />
                          <div className="flex gap-1.5 justify-end">
                            <button
                              onClick={() => setIsSavingDesignAsTemplate(false)}
                              className="px-2.5 py-1 text-xs text-gray-500 hover:text-gray-700 font-semibold"
                            >
                              Cancelar
                            </button>
                            <button
                              onClick={handleSaveCurrentAsTemplate}
                              className="px-3 py-1 bg-[#7d2ae8] text-white text-xs font-bold rounded-lg hover:bg-[#6a24c5] transition-colors"
                            >
                              Guardar
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Feedback message banner */}
                      {templateUploadMessage && (
                        <div className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                          templateUploadMessage.type === 'success' 
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}>
                          {templateUploadMessage.type === 'success' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          )}
                          <span className="text-[11px] font-medium leading-tight">{templateUploadMessage.text}</span>
                        </div>
                      )}
                    </div>

                    {/* Uploaded Templates List */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Tus Plantillas Subidas ({customTemplates.length})
                        </h4>
                      </div>

                      {customTemplates.length === 0 ? (
                        <div className="p-6 text-center bg-gray-50 border border-dashed border-gray-200 rounded-2xl space-y-2">
                          <LayoutTemplate className="w-8 h-8 text-gray-300 mx-auto" />
                          <p className="text-xs font-bold text-slate-700">Sin plantillas subidas todavía</p>
                          <p className="text-[11px] text-gray-400 max-w-[200px] mx-auto leading-relaxed">
                            Sube archivos .json de plantillas o guarda tus creaciones para tenerlas siempre a mano.
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-2.5">
                          {customTemplates.map((tpl) => (
                            <div
                              key={tpl.id}
                              className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-[#7d2ae8] transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
                            >
                              <div className="aspect-square relative bg-gray-100 overflow-hidden">
                                <img
                                  src={tpl.thumbnailUrl}
                                  alt={tpl.name}
                                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-1.5 right-1.5 flex gap-1">
                                  <button
                                    onClick={() => downloadTemplateAsJson(tpl)}
                                    title="Descargar JSON"
                                    className="p-1 bg-white/90 hover:bg-white text-gray-700 hover:text-[#7d2ae8] rounded-md shadow-2xs transition-colors"
                                  >
                                    <Download className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteCustomTemplate(tpl.id, tpl.name)}
                                    title="Eliminar de biblioteca"
                                    className="p-1 bg-white/90 hover:bg-white text-gray-700 hover:text-rose-600 rounded-md shadow-2xs transition-colors"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-1.5 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-1">
                                  <button
                                    onClick={() => onApplyTemplate(tpl)}
                                    className="w-full py-1 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white font-bold text-[10px] rounded shadow-xs transition-colors"
                                  >
                                    Aplicar
                                  </button>
                                </div>
                              </div>
                              <div className="p-2 space-y-0.5">
                                <p className="text-xs font-semibold text-slate-800 truncate" title={tpl.name}>
                                  {tpl.name}
                                </p>
                                <div className="flex items-center justify-between text-[10px] text-gray-400">
                                  <span>{tpl.page?.elements?.length || 0} capas</span>
                                  <span>{tpl.width}×{tpl.height}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SUBTAB 2: PHOTOS & LOCAL FILES */}
                {mediaSubTab === 'photos' && (
                  <div className="space-y-5">
                    {/* Upload Local Image Button */}
                    <div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full py-3 px-4 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all"
                      >
                        <UploadCloud className="w-4 h-4" />
                        <span>Subir imágenes locales</span>
                      </button>
                      <p className="text-[10px] text-gray-400 text-center mt-1.5">
                        Soporta PNG, JPG, WebP o SVG
                      </p>
                    </div>

                    {/* Stock Photos Library */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Fotos de stock Unsplash
                        </h4>
                      </div>

                      {/* Categories */}
                      <div className="flex gap-1.5 overflow-x-auto pb-2 text-[11px] scrollbar-none">
                        {['Todos', 'Negocios', 'Café & Comida', 'Naturaleza', 'Moda & Retrato', 'Tecnología', 'Minimalista'].map(cat => (
                          <button
                            key={cat}
                            onClick={() => setStockPhotoCategory(cat)}
                            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                              stockPhotoCategory === cat
                                ? 'bg-[#7d2ae8] text-white'
                                : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* Stock Photos Grid */}
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {filteredStockPhotos.map((photo, idx) => (
                          <div
                            key={idx}
                            onClick={() => onAddElement({
                              type: 'image',
                              src: photo.url,
                              x: 100,
                              y: 100,
                              width: 400,
                              height: 300,
                              rotation: 0,
                              opacity: 1,
                              borderRadius: 16,
                              objectFit: 'cover'
                            })}
                            className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-gray-200 bg-gray-100 hover:border-[#7d2ae8] hover:ring-2 ring-[#7d2ae8] ring-offset-1 transition-all hover:scale-[1.02] shadow-2xs"
                          >
                            <img
                              src={photo.url}
                              alt={photo.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 text-center">
                              <span className="text-[10px] font-bold text-white bg-[#7d2ae8] px-2 py-1 rounded-md">
                                Insertar foto
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB: MAGIC IA */}
            {activeTab === 'magic' && (
              <div className="space-y-5">
                <div className="p-3.5 bg-gradient-to-tr from-purple-50 via-indigo-50/60 to-cyan-50/50 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#7d2ae8]" />
                    <span className="font-bold text-xs text-[#0e1318]">Redactor Mágico (Magic Write)</span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Escribe sobre tu negocio o tema y la IA generará el copy publicitario perfecto para tu diseño.
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                    ¿Sobre qué es tu diseño?
                  </label>
                  <textarea
                    value={magicPrompt}
                    onChange={(e) => setMagicPrompt(e.target.value)}
                    placeholder="Ej. Promoción de cafetería con 50% de descuento en lattes y postres..."
                    rows={3}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-[#0e1318] placeholder-gray-400 focus:outline-none focus:border-[#7d2ae8] focus:ring-1 focus:ring-[#7d2ae8] focus:bg-white transition-all"
                  />
                  <button
                    onClick={handleGenerateMagic}
                    disabled={isGeneratingMagic || !magicPrompt.trim()}
                    className={`w-full mt-2 py-2.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isGeneratingMagic || !magicPrompt.trim()
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                        : 'bg-gradient-to-r from-[#7d2ae8] to-[#00c4cc] hover:from-[#6a24c5] hover:to-[#00b0b7] text-white shadow-xs'
                    }`}
                  >
                    {isGeneratingMagic ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Generando ideas mágicas...</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-3.5 h-3.5" />
                        <span>Generar con IA</span>
                      </>
                    )}
                  </button>
                </div>

                {magicGeneratedText && (
                  <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-200">
                    <span className="text-[10px] font-bold text-[#7d2ae8] uppercase tracking-wider block mb-1">
                      Sugerencia generada:
                    </span>
                    <p className="text-xs text-gray-800 whitespace-pre-line mb-3 font-medium">
                      {magicGeneratedText}
                    </p>
                    <button
                      onClick={() => {
                        const lines = magicGeneratedText.split('\n');
                        onAddElement({
                          type: 'text',
                          content: lines[0] || 'Texto Mágico',
                          x: 100,
                          y: 200,
                          width: 500,
                          height: 80,
                          rotation: 0,
                          opacity: 1,
                          fontSize: 44,
                          fontFamily: "'Montserrat', sans-serif",
                          color: '#0e1318',
                          bold: true,
                          textAlign: 'center'
                        });
                        if (lines[1]) {
                          onAddElement({
                            type: 'text',
                            content: lines[1],
                            x: 120,
                            y: 300,
                            width: 460,
                            height: 60,
                            rotation: 0,
                            opacity: 1,
                            fontSize: 20,
                            fontFamily: "'Poppins', sans-serif",
                            color: '#475569',
                            textAlign: 'center'
                          });
                        }
                      }}
                      className="w-full py-2 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Insertar en el lienzo</span>
                    </button>
                  </div>
                )}

                {/* Harmonious Palette Magic */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Paletas de Color Armónicas
                  </h4>
                  <div className="space-y-2">
                    {COLOR_PALETTES.map((pal) => (
                      <div
                        key={pal.name}
                        className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200"
                      >
                        <span className="text-[11px] font-semibold text-gray-700 block mb-1.5">
                          {pal.name}
                        </span>
                        <div className="flex rounded-lg overflow-hidden h-7 border border-gray-200">
                          {pal.colors.map((c, i) => (
                            <div
                              key={i}
                              style={{ backgroundColor: c }}
                              className="flex-1 cursor-pointer hover:opacity-90 transition-opacity"
                              title={c}
                              onClick={() => onUpdateBackground({ type: 'color', value: c })}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: LAYERS */}
            {activeTab === 'layers' && (
              <LayersPanel
                currentPage={currentPage}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                onUpdateElement={onUpdateElement}
                onDeleteElementById={onDeleteElementById}
                onReorderElements={onReorderElements}
                onAddElement={onAddElement}
              />
            )}

            {/* TAB: BACKGROUND */}
            {activeTab === 'background' && (
              <div className="space-y-5">
                {/* Solid Colors */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Colores sólidos
                  </h4>
                  <div className="grid grid-cols-6 gap-2">
                    {[
                      '#FFFFFF', '#F8F9FA', '#F3F4F6', '#E5E7EB', '#D1D5DB', '#9CA3AF',
                      '#1E293B', '#0F172A', '#000000', '#7d2ae8', '#00c4cc', '#FF5E3A',
                      '#FFB800', '#10B981', '#3B82F6', '#EC4899', '#6366F1', '#14B8A6'
                    ].map((col) => (
                      <button
                        key={col}
                        onClick={() => onUpdateBackground({ type: 'color', value: col })}
                        style={{ backgroundColor: col }}
                        className="w-9 h-9 rounded-xl border border-gray-200 shadow-2xs relative flex items-center justify-center transition-transform hover:scale-110"
                        title={col}
                      >
                        {currentPage.background.value === col && (
                          <Check className={`w-4 h-4 ${col === '#FFFFFF' || col.startsWith('#F') ? 'text-gray-900' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Canva Gradients */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Degradados estilo Canva
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {CANVA_GRADIENTS.map((grad) => (
                      <button
                        key={grad.name}
                        onClick={() => onUpdateBackground({ type: 'gradient', value: grad.value })}
                        style={{ background: grad.value }}
                        className="h-16 rounded-xl border border-gray-200 shadow-2xs flex items-end p-2 transition-transform hover:scale-105 relative"
                      >
                        <span className="text-[11px] font-semibold text-white drop-shadow-sm truncate">
                          {grad.name}
                        </span>
                        {currentPage.background.value === grad.value && (
                          <div className="absolute top-1.5 right-1.5 bg-white rounded-full p-0.5 shadow-sm">
                            <Check className="w-3.5 h-3.5 text-purple-700" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          </>
        )}
      </div>
    )}
    </div>
  );
};
