import React, { useState, useRef, useEffect } from 'react';
import { 
  Type, 
  UploadCloud, 
  Search, 
  Sparkles, 
  Trash2, 
  Check, 
  Plus, 
  Globe, 
  FileText, 
  FolderPlus, 
  ExternalLink, 
  AlertCircle,
  X,
  Eye,
  Sliders,
  Play
} from 'lucide-react';
import { CustomFont } from '../types';
import { 
  POPULAR_GOOGLE_FONTS, 
  GoogleFontPreset, 
  loadGoogleFontToDom, 
  injectFontFileToDom, 
  saveCustomFontToStorage, 
  removeCustomFontFromStorage, 
  readFileAsDataURL,
  loadFontFromExternalUrl
} from '../utils/fontManager';

interface FontImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  customFonts: CustomFont[];
  onFontsUpdated: (fonts: CustomFont[]) => void;
  onApplyFontToSelected?: (fontFamily: string) => void;
}

export const FontImportModal: React.FC<FontImportModalProps> = ({
  isOpen,
  onClose,
  customFonts,
  onFontsUpdated,
  onApplyFontToSelected,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'google' | 'url' | 'manage'>('upload');
  
  // File upload state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fontNameInput, setFontNameInput] = useState('');
  const [fontCategory, setFontCategory] = useState('Moderna');
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [previewText, setPreviewText] = useState('Creava Studio - Tipografía Creativa 2026');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);

  // Google Fonts tab state
  const [googleSearch, setGoogleSearch] = useState('');
  const [customGoogleFontQuery, setCustomGoogleFontQuery] = useState('');
  const [customGoogleFontLoading, setCustomGoogleFontLoading] = useState(false);
  const [customGoogleFontPreview, setCustomGoogleFontPreview] = useState<string | null>(null);
  const [selectedGoogleCategory, setSelectedGoogleCategory] = useState<string>('Todas');

  // URL tab state
  const [urlFontName, setUrlFontName] = useState('');
  const [urlHref, setUrlHref] = useState('');
  const [urlError, setUrlError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Preload top google fonts into DOM for fast previews in modal
  useEffect(() => {
    if (isOpen) {
      POPULAR_GOOGLE_FONTS.slice(0, 12).forEach((f) => {
        loadGoogleFontToDom(f.name);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle local file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setUploadSuccess(null);

    const validExtensions = ['.ttf', '.otf', '.woff', '.woff2'];
    const fileNameLower = file.name.toLowerCase();
    const isValid = validExtensions.some(ext => fileNameLower.endsWith(ext));

    if (!isValid) {
      setUploadError('Por favor selecciona un archivo de fuente válido (.ttf, .otf, .woff o .woff2)');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setUploadError('El archivo es demasiado grande (máximo 15 MB)');
      return;
    }

    try {
      setIsUploading(true);
      const dataUrl = await readFileAsDataURL(file);
      setUploadedFile(file);
      setPreviewDataUrl(dataUrl);

      // Auto-extract clean font name from filename
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setFontNameInput(cleanName);

      // Dynamically load preview font
      const tempFont: CustomFont = {
        id: 'temp-preview-font',
        name: cleanName,
        family: `'${cleanName}'`,
        category: fontCategory,
        sourceType: 'file',
        dataUrl,
        createdAt: Date.now(),
      };
      await injectFontFileToDom(tempFont);
      setIsUploading(false);
    } catch (err) {
      console.error(err);
      setUploadError('Error al leer el archivo de fuente');
      setIsUploading(false);
    }
  };

  // Save uploaded font
  const handleSaveUploadedFont = async () => {
    if (!uploadedFile || !previewDataUrl || !fontNameInput.trim()) {
      setUploadError('Introduce un nombre para la fuente');
      return;
    }

    const trimmedName = fontNameInput.trim();
    const fontId = `font-file-${Date.now()}`;
    const newFont: CustomFont = {
      id: fontId,
      name: trimmedName,
      family: `'${trimmedName}', sans-serif`,
      category: fontCategory,
      sourceType: 'file',
      dataUrl: previewDataUrl,
      createdAt: Date.now(),
    };

    await injectFontFileToDom(newFont);
    const updated = saveCustomFontToStorage(newFont);
    onFontsUpdated(updated);

    setUploadSuccess(`¡La fuente "${trimmedName}" fue importada con éxito!`);
    setUploadedFile(null);
    setPreviewDataUrl(null);
    setFontNameInput('');

    if (onApplyFontToSelected) {
      onApplyFontToSelected(newFont.family);
    }
  };

  // Import a Google Font preset
  const handleImportGooglePreset = async (preset: GoogleFontPreset) => {
    const isAlreadyInstalled = customFonts.some(f => f.name.toLowerCase() === preset.name.toLowerCase());
    if (isAlreadyInstalled) return;

    await loadGoogleFontToDom(preset.name);

    const newFont: CustomFont = {
      id: `font-gf-${Date.now()}-${preset.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: preset.name,
      family: preset.cssFamily,
      category: preset.category,
      sourceType: 'google',
      googleFontFamily: preset.name,
      createdAt: Date.now(),
    };

    const updated = saveCustomFontToStorage(newFont);
    onFontsUpdated(updated);

    if (onApplyFontToSelected) {
      onApplyFontToSelected(newFont.family);
    }
  };

  // Test and import custom Google Font by name
  const handleTestAndImportGoogleFont = async () => {
    if (!customGoogleFontQuery.trim()) return;
    const name = customGoogleFontQuery.trim();

    setCustomGoogleFontLoading(true);
    setCustomGoogleFontPreview(null);

    const success = await loadGoogleFontToDom(name);
    setCustomGoogleFontLoading(false);

    if (success) {
      setCustomGoogleFontPreview(name);
      const newFont: CustomFont = {
        id: `font-gf-${Date.now()}-${name.toLowerCase().replace(/\s+/g, '-')}`,
        name: name,
        family: `'${name}', sans-serif`,
        category: 'Google Fonts',
        sourceType: 'google',
        googleFontFamily: name,
        createdAt: Date.now(),
      };

      const updated = saveCustomFontToStorage(newFont);
      onFontsUpdated(updated);

      if (onApplyFontToSelected) {
        onApplyFontToSelected(newFont.family);
      }
      setCustomGoogleFontQuery('');
    } else {
      alert(`No se pudo encontrar o cargar "${name}". Verifica la ortografía exacta en fonts.google.com`);
    }
  };

  // Import font from URL
  const handleImportFromUrl = () => {
    setUrlError(null);
    if (!urlFontName.trim() || !urlHref.trim()) {
      setUrlError('Debes completar el nombre y la URL del enlace');
      return;
    }

    let cleanUrl = urlHref.trim();
    // Support @import url("...") or <link href="..." />
    const urlMatch = cleanUrl.match(/https?:\/\/[^\s"')]+/);
    if (urlMatch) {
      cleanUrl = urlMatch[0];
    }

    const trimmedName = urlFontName.trim();
    loadFontFromExternalUrl(trimmedName, cleanUrl);

    const newFont: CustomFont = {
      id: `font-url-${Date.now()}`,
      name: trimmedName,
      family: `'${trimmedName}', sans-serif`,
      category: 'Enlace Web',
      sourceType: 'url',
      url: cleanUrl,
      createdAt: Date.now(),
    };

    const updated = saveCustomFontToStorage(newFont);
    onFontsUpdated(updated);

    if (onApplyFontToSelected) {
      onApplyFontToSelected(newFont.family);
    }

    setUrlFontName('');
    setUrlHref('');
    setActiveTab('manage');
  };

  // Delete an imported font
  const handleDeleteFont = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = removeCustomFontFromStorage(id);
    onFontsUpdated(updated);
  };

  // Filtered Google Presets
  const filteredPresets = POPULAR_GOOGLE_FONTS.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(googleSearch.toLowerCase()) ||
                          p.category.toLowerCase().includes(googleSearch.toLowerCase());
    const matchesCat = selectedGoogleCategory === 'Todas' || p.category === selectedGoogleCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-purple-50/50 via-white to-indigo-50/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00c4cc] to-[#7d2ae8] flex items-center justify-center text-white shadow-xs">
              <Type className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                  Importar Tipografías & Fuentes
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                  Creava Pro
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Añade tus fuentes locales (.ttf, .otf, .woff) o explora el catálogo de Google Fonts
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="px-6 border-b border-slate-200 flex gap-2 bg-slate-50/70">
          <button
            id="tab-font-upload"
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'upload'
                ? 'border-[#7d2ae8] text-[#7d2ae8] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <UploadCloud className="w-4 h-4" />
            <span>Subir Archivo (.ttf, .otf)</span>
          </button>

          <button
            id="tab-font-google"
            onClick={() => setActiveTab('google')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'google'
                ? 'border-[#7d2ae8] text-[#7d2ae8] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Catálogo Google Fonts</span>
          </button>

          <button
            id="tab-font-url"
            onClick={() => setActiveTab('url')}
            className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'url'
                ? 'border-[#7d2ae8] text-[#7d2ae8] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Enlace Web / CSS</span>
          </button>

          <button
            id="tab-font-manage"
            onClick={() => setActiveTab('manage')}
            className={`ml-auto px-4 py-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'manage'
                ? 'border-[#7d2ae8] text-[#7d2ae8] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FolderPlus className="w-4 h-4" />
            <span>Tus Fuentes</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-700 font-extrabold">
              {customFonts.length}
            </span>
          </button>
        </div>

        {/* 3. Tab Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-slate-50/30">
          {/* TAB 1: UPLOAD LOCAL FILE */}
          {activeTab === 'upload' && (
            <div className="space-y-6">
              {/* Drag & Drop Card */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center group ${
                  uploadedFile 
                    ? 'border-purple-500 bg-purple-50/50' 
                    : 'border-slate-300 hover:border-purple-600 bg-white hover:bg-purple-50/30'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".ttf,.otf,.woff,.woff2,font/ttf,font/otf,font/woff,font/woff2"
                  className="hidden"
                />

                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
                  <UploadCloud className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-slate-800 group-hover:text-purple-700">
                    {uploadedFile ? uploadedFile.name : 'Haz clic para subir o arrastra tu archivo aquí'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Formatos compatibles: <strong className="text-slate-600">TTF, OTF, WOFF, WOFF2</strong> (Máximo 15 MB)
                  </p>
                </div>
              </div>

              {/* Status messages */}
              {uploadError && (
                <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}

              {uploadSuccess && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>{uploadSuccess}</span>
                </div>
              )}

              {/* Configure and Preview Form when file is uploaded */}
              {uploadedFile && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Nombre de la fuente
                      </label>
                      <input
                        type="text"
                        value={fontNameInput}
                        onChange={(e) => setFontNameInput(e.target.value)}
                        placeholder="Ej: Mi Tipografía Personalizada"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Categoría de estilo
                      </label>
                      <select
                        value={fontCategory}
                        onChange={(e) => setFontCategory(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                      >
                        <option value="Moderna">Moderna (Sans-Serif)</option>
                        <option value="Elegante">Elegante (Serif)</option>
                        <option value="Manuscrita">Manuscrita / Caligrafía</option>
                        <option value="Display">Display / Titular</option>
                        <option value="Retro">Retro / Vintage</option>
                        <option value="Sci-Fi">Sci-Fi / Futurista</option>
                      </select>
                    </div>
                  </div>

                  {/* Live Interactive Preview Box */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                      <span>Vista previa en tiempo real</span>
                      <span className="text-[11px] text-purple-600 font-medium">Renderizado directo</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                      <input
                        type="text"
                        value={previewText}
                        onChange={(e) => setPreviewText(e.target.value)}
                        style={{ fontFamily: fontNameInput ? `'${fontNameInput}', sans-serif` : 'inherit' }}
                        className="w-full bg-transparent text-2xl text-slate-900 font-medium focus:outline-none border-b border-transparent focus:border-purple-300 pb-1"
                      />
                      <p 
                        style={{ fontFamily: fontNameInput ? `'${fontNameInput}', sans-serif` : 'inherit' }}
                        className="text-sm text-slate-500 mt-2"
                      >
                        El veloz murciélago hindú comía feliz cardillo y kiwi. 0123456789 &%$#
                      </p>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => {
                        setUploadedFile(null);
                        setPreviewDataUrl(null);
                      }}
                      className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      id="btn-save-uploaded-font"
                      onClick={handleSaveUploadedFont}
                      disabled={isUploading || !fontNameInput.trim()}
                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Guardar e instalar fuente</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: GOOGLE FONTS CATALOG */}
          {activeTab === 'google' && (
            <div className="space-y-6">
              {/* Custom Google Font Search & Fetch Bar */}
              <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 p-5 rounded-3xl text-white shadow-md">
                <div className="max-w-xl space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-amber-300">
                    <Sparkles className="w-3 h-3" />
                    <span>Más de 1,500 familias en Google Fonts</span>
                  </div>
                  <h3 className="font-extrabold text-sm md:text-base">
                    ¿Buscas una fuente específica de Google Fonts?
                  </h3>
                  <p className="text-xs text-purple-200">
                    Escribe el nombre exacto de la fuente (ej: <em>Bungee, Dancing Script, Permanent Marker, Abril Fatface, Righteous</em>) para instalarla al instante.
                  </p>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={customGoogleFontQuery}
                      onChange={(e) => setCustomGoogleFontQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleTestAndImportGoogleFont()}
                      placeholder="Nombre exacto en Google Fonts..."
                      className="w-full bg-white text-slate-900 rounded-xl pl-9 pr-4 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-300"
                    />
                  </div>
                  <button
                    onClick={handleTestAndImportGoogleFont}
                    disabled={customGoogleFontLoading || !customGoogleFontQuery.trim()}
                    className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs rounded-xl transition-all shadow-xs flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {customGoogleFontLoading ? (
                      <span>Cargando...</span>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Instalar fuente</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Catalog Filter Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Search in presets */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={googleSearch}
                    onChange={(e) => setGoogleSearch(e.target.value)}
                    placeholder="Filtrar catálogo rápido..."
                    className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-600"
                  />
                </div>

                {/* Category filter pills */}
                <div className="flex gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
                  {['Todas', 'Display', 'Manuscrita', 'Elegante', 'Moderna', 'Retro', 'Sci-Fi'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedGoogleCategory(cat)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                        selectedGoogleCategory === cat
                          ? 'bg-purple-600 text-white shadow-2xs'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Curated Google Fonts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredPresets.map((preset) => {
                  const isInstalled = customFonts.some(f => f.name.toLowerCase() === preset.name.toLowerCase());

                  return (
                    <div
                      key={preset.name}
                      className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-800">
                            {preset.name}
                          </span>
                          <span className="text-[10px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                            {preset.category}
                          </span>
                        </div>

                        {/* Live Font Sample */}
                        <div 
                          style={{ fontFamily: preset.cssFamily }}
                          className="text-lg text-slate-900 py-2 border-b border-slate-100 min-h-[44px] flex items-center leading-tight truncate"
                        >
                          {preset.sampleText}
                        </div>
                      </div>

                      <div className="pt-3 mt-1 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">Google Fonts</span>
                        {isInstalled ? (
                          <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg">
                            <Check className="w-3.5 h-3.5" />
                            <span>Instalada</span>
                          </span>
                        ) : (
                          <button
                            onClick={() => handleImportGooglePreset(preset)}
                            className="text-[11px] font-bold text-purple-700 bg-purple-50 hover:bg-purple-600 hover:text-white px-3 py-1 rounded-lg transition-all flex items-center gap-1"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Instalar</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: IMPORT VIA WEB URL OR @IMPORT */}
          {activeTab === 'url' && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-5 max-w-xl mx-auto shadow-2xs">
              <div>
                <h3 className="font-bold text-sm text-slate-800 mb-1">
                  Importar mediante URL o CSS @import
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pega un enlace de Google Fonts o cualquier hoja de estilo de tipografía web externa.
                </p>
              </div>

              {urlError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{urlError}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Nombre para identificar la fuente
                  </label>
                  <input
                    type="text"
                    value={urlFontName}
                    onChange={(e) => setUrlFontName(e.target.value)}
                    placeholder="Ej: Custom Sans Pro"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    URL de la hoja de estilos (.css) o archivo web
                  </label>
                  <textarea
                    rows={3}
                    value={urlHref}
                    onChange={(e) => setUrlHref(e.target.value)}
                    placeholder="https://fonts.googleapis.com/css2?family=... o @import url('...')"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-purple-600 focus:bg-white"
                  />
                </div>

                <button
                  onClick={handleImportFromUrl}
                  className="w-full py-2.5 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Vincular e Importar</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: MANAGE USER'S IMPORTED FONTS */}
          {activeTab === 'manage' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-800">
                    Fuentes instaladas en tu biblioteca ({customFonts.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Estas fuentes están disponibles en el menú de texto y se guardan automáticamente en tu navegador
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('upload')}
                  className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Añadir otra fuente</span>
                </button>
              </div>

              {customFonts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 mx-auto flex items-center justify-center">
                    <Type className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-700 text-sm">Aún no has importado fuentes personalizadas</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Sube archivos de fuentes desde tu ordenador (.ttf o .otf) o selecciona del catálogo de Google Fonts.
                  </p>
                  <button
                    onClick={() => setActiveTab('upload')}
                    className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-purple-700"
                  >
                    Subir mi primera fuente
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  {customFonts.map((font) => (
                    <div
                      key={font.id}
                      className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-purple-300 flex items-center justify-between transition-all group"
                    >
                      <div className="space-y-1 min-w-0 flex-1 pr-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-800 truncate">
                            {font.name}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            {font.sourceType === 'file' ? 'Archivo Local' : font.sourceType === 'google' ? 'Google Font' : 'Enlace Web'}
                          </span>
                        </div>
                        <div 
                          style={{ fontFamily: font.family }}
                          className="text-lg text-slate-800 truncate"
                        >
                          Aa Bb Cc Gg 123 • Creava Studio
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {onApplyFontToSelected && (
                          <button
                            onClick={() => {
                              onApplyFontToSelected(font.family);
                              onClose();
                            }}
                            className="px-3 py-1.5 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 font-bold text-xs rounded-xl transition-all"
                            title="Aplicar al elemento seleccionado"
                          >
                            Usar en lienzo
                          </button>
                        )}
                        <button
                          onClick={(e) => handleDeleteFont(font.id, e)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                          title="Eliminar fuente de la biblioteca"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 4. Modal Footer */}
        <div className="px-6 py-3 bg-slate-100/80 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#7d2ae8]" />
            <span>Las fuentes importadas se guardan automáticamente para tus futuros proyectos.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors shadow-2xs"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
