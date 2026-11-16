import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Globe, 
  UploadCloud, 
  Loader2, 
  Check, 
  Minus, 
  Plus, 
  Bold, 
  Italic, 
  Underline,
  Sparkles
} from 'lucide-react';
import { CanvasElement, CustomFont } from '../types';
import { AVAILABLE_FONTS } from '../data/elements';
import { 
  POPULAR_GOOGLE_FONTS, 
  loadGoogleFontToDom, 
  installGoogleFont 
} from '../utils/fontManager';

interface SidebarFontPanelProps {
  element: CanvasElement | null;
  customFonts?: CustomFont[];
  onUpdateElement: (updates: Partial<CanvasElement>) => void;
  onOpenFontImporter?: () => void;
  onFontsUpdated?: (fonts: CustomFont[]) => void;
  onClose: () => void;
}

export const SidebarFontPanel: React.FC<SidebarFontPanelProps> = ({
  element,
  customFonts = [],
  onUpdateElement,
  onOpenFontImporter,
  onFontsUpdated,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryTab, setCategoryTab] = useState<'todas' | 'google' | 'importadas' | 'sans' | 'serif' | 'script'>('todas');
  const [loadingFont, setLoadingFont] = useState<string | null>(null);

  const currentFontFamily = element?.fontFamily || 'Inter, sans-serif';
  const currentFontSize = element?.fontSize || 24;
  const [fontSizeInput, setFontSizeInput] = useState<string>(String(currentFontSize));

  useEffect(() => {
    if (element?.fontSize) {
      setFontSizeInput(String(element.fontSize));
    }
  }, [element?.fontSize, element?.id]);

  const handleApplyFontSize = (size: number) => {
    const clamped = Math.max(6, Math.min(350, Math.round(size)));
    setFontSizeInput(String(clamped));
    if (element) {
      const minHeight = Math.round(clamped * 1.35);
      onUpdateElement({
        fontSize: clamped,
        height: Math.max(element.height, minHeight),
      });
    }
  };

  const handleApplyFont = async (fontFamily: string, fontName?: string) => {
    if (!element) return;
    try {
      if (fontName) {
        setLoadingFont(fontName);
        await loadGoogleFontToDom(fontName);
      }
      onUpdateElement({ fontFamily });
    } catch (err) {
      onUpdateElement({ fontFamily });
    } finally {
      setLoadingFont(null);
    }
  };

  const handleInstallAndApplyCustom = async (name: string) => {
    if (!element) return;
    setLoadingFont(name);
    try {
      const installed = await installGoogleFont(name);
      if (installed && onFontsUpdated) {
        const current = customFonts.filter(f => f.id !== installed.id);
        onFontsUpdated([installed, ...current]);
      }
      onUpdateElement({ fontFamily: installed ? installed.family : `'${name}', sans-serif` });
    } catch (err) {
      await loadGoogleFontToDom(name);
      onUpdateElement({ fontFamily: `'${name}', sans-serif` });
    } finally {
      setLoadingFont(null);
      setSearchQuery('');
    }
  };

  // Filter helper
  const filterBySearch = (name: string, family?: string) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return name.toLowerCase().includes(q) || (family ? family.toLowerCase().includes(q) : false);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#161922] text-slate-800 dark:text-slate-100 select-none animate-in slide-in-from-left duration-200 min-h-0">
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#161922] flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-md bg-[#7d2ae8]/10 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300 font-bold text-xs flex items-center justify-center">
            Aa
          </span>
          <span className="font-bold text-[#0e1318] dark:text-white text-sm">
            Tipos de letra
          </span>
        </div>

        {/* The prominent "X" close button requested by the user */}
        <button
          id="btn-close-font-panel"
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title="Cerrar y volver a la barra lateral"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Text Formatting Toolbar (Size, Bold, Italic, Underline) */}
      {element && (
        <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-between flex-shrink-0">
          {/* Size Stepper */}
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-2xs">
            <button
              id="btn-sidebar-decrease-font-size"
              onClick={() => handleApplyFontSize(currentFontSize - 2)}
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              title="Reducir tamaño"
            >
              <Minus className="w-3 h-3" />
            </button>
            <input
              id="input-sidebar-font-size"
              type="text"
              inputMode="numeric"
              value={fontSizeInput}
              onChange={(e) => {
                const val = e.target.value;
                setFontSizeInput(val);
                const parsed = parseInt(val, 10);
                if (!isNaN(parsed) && parsed >= 6 && parsed <= 350) {
                  onUpdateElement({
                    fontSize: parsed,
                    height: Math.max(element.height, Math.round(parsed * 1.35)),
                  });
                }
              }}
              onBlur={() => {
                const parsed = parseInt(fontSizeInput, 10);
                if (isNaN(parsed) || parsed < 6) {
                  handleApplyFontSize(currentFontSize);
                } else {
                  handleApplyFontSize(parsed);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const parsed = parseInt(fontSizeInput, 10);
                  if (!isNaN(parsed)) handleApplyFontSize(parsed);
                  (e.target as HTMLInputElement).blur();
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  const step = e.shiftKey ? 10 : 2;
                  handleApplyFontSize(currentFontSize + step);
                } else if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  const step = e.shiftKey ? 10 : 2;
                  handleApplyFontSize(currentFontSize - step);
                }
              }}
              className="w-10 text-center text-xs font-bold bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-900"
              title="Tamaño de fuente"
            />
            <button
              id="btn-sidebar-increase-font-size"
              onClick={() => handleApplyFontSize(currentFontSize + 2)}
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              title="Aumentar tamaño"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Bold, Italic, Underline */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onUpdateElement({ bold: !element.bold })}
              className={`p-1.5 rounded-lg border text-xs font-bold transition-colors ${
                element.bold
                  ? 'bg-purple-100 dark:bg-purple-950/80 border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title="Negrita"
            >
              <Bold className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onUpdateElement({ italic: !element.italic })}
              className={`p-1.5 rounded-lg border text-xs font-bold transition-colors ${
                element.italic
                  ? 'bg-purple-100 dark:bg-purple-950/80 border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title="Cursiva"
            >
              <Italic className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onUpdateElement({ underline: !element.underline })}
              className={`p-1.5 rounded-lg border text-xs font-bold transition-colors ${
                element.underline
                  ? 'bg-purple-100 dark:bg-purple-950/80 border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title="Subrayado"
            >
              <Underline className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-800 flex-shrink-0 space-y-2">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar fuentes o estilos..."
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#7d2ae8] focus:bg-white dark:focus:bg-slate-800 transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none text-[11px]">
          {[
            { id: 'todas', label: 'Todas' },
            { id: 'google', label: 'Google Fonts' },
            { id: 'importadas', label: `Mis fuentes (${customFonts.length})` },
            { id: 'sans', label: 'Moderna' },
            { id: 'serif', label: 'Elegante' },
            { id: 'script', label: 'Manuscrita' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setCategoryTab(tab.id as any)}
              className={`px-2.5 py-1 rounded-full font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                categoryTab === tab.id
                  ? 'bg-[#7d2ae8] text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog & Import CTA Banner */}
      <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-800 flex-shrink-0">
        <button
          onClick={() => onOpenFontImporter?.()}
          className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Explorar Catálogo Google Fonts / Subir Fuente</span>
        </button>
      </div>

      {/* Dynamic Google Font Instant Download prompt if user is typing a custom search */}
      {searchQuery.trim().length > 1 && (
        <div className="px-4 py-2 bg-purple-50 dark:bg-purple-950/40 border-b border-purple-100 dark:border-purple-900/40 flex-shrink-0">
          <button
            disabled={loadingFont !== null}
            onClick={() => handleInstallAndApplyCustom(searchQuery.trim())}
            className="w-full py-1.5 px-2.5 rounded-lg bg-white dark:bg-purple-900/60 border border-purple-200 dark:border-purple-700/60 text-[#7d2ae8] dark:text-purple-300 hover:bg-purple-100 font-bold text-xs flex items-center justify-between transition-colors shadow-2xs"
          >
            <div className="flex items-center gap-1.5 truncate">
              {loadingFont ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#7d2ae8]" />
              ) : (
                <Sparkles className="w-3.5 h-3.5 text-[#7d2ae8]" />
              )}
              <span className="truncate">Cargar "{searchQuery}" de Google Fonts</span>
            </div>
            <span className="text-[10px] bg-[#7d2ae8] text-white px-2 py-0.5 rounded-md font-extrabold">
              Aplicar
            </span>
          </button>
        </div>
      )}

      {/* Scrollable Font List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-3 custom-scrollbar min-h-0">
        {/* Section: Custom / Imported Fonts */}
        {(categoryTab === 'todas' || categoryTab === 'importadas') && customFonts.length > 0 && (
          <div>
            <div className="px-3 py-1.5 text-[10px] font-bold text-[#7d2ae8] dark:text-purple-400 uppercase tracking-wider flex items-center justify-between">
              <span>Tus fuentes importadas</span>
              <span className="bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-1.5 py-0.2 rounded-full text-[9px] font-bold">
                {customFonts.length}
              </span>
            </div>
            <div className="space-y-0.5">
              {customFonts
                .filter(f => filterBySearch(f.name, f.family))
                .map(font => {
                  const isSelected = currentFontFamily.includes(font.family) || currentFontFamily.includes(font.name);
                  return (
                    <button
                      key={font.id}
                      onClick={() => handleApplyFont(font.family)}
                      className={`w-full px-3 py-2 rounded-xl text-left flex items-center justify-between transition-colors group cursor-pointer ${
                        isSelected
                          ? 'bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 font-bold border border-purple-200 dark:border-purple-800/60'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <div className="flex flex-col min-w-0 pr-2">
                        <span style={{ fontFamily: font.family }} className="text-base truncate">
                          {font.name}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {font.sourceType === 'file' ? 'Archivo local' : 'Google Fonts'}
                        </span>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#7d2ae8] dark:text-purple-300 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        {/* Section: Google Fonts Populares */}
        {(categoryTab === 'todas' || categoryTab === 'google' || categoryTab === 'sans' || categoryTab === 'serif' || categoryTab === 'script') && (
          <div>
            <div className="px-3 py-1.5 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center justify-between">
              <span>Google Fonts Populares</span>
              <Globe className="w-3.5 h-3.5" />
            </div>
            <div className="space-y-0.5">
              {POPULAR_GOOGLE_FONTS
                .filter(f => filterBySearch(f.name, f.cssFamily))
                .filter(f => {
                  if (categoryTab === 'sans') return f.category === 'Moderna' || f.category === 'Display';
                  if (categoryTab === 'serif') return f.category === 'Elegante';
                  if (categoryTab === 'script') return f.category === 'Manuscrita';
                  return true;
                })
                .map(gf => {
                  const isSelected = currentFontFamily.includes(gf.name);
                  const isLoading = loadingFont === gf.name;
                  return (
                    <button
                      key={gf.name}
                      onClick={async () => {
                        try {
                          setLoadingFont(gf.name);
                          await loadGoogleFontToDom(gf.name);
                          if (onFontsUpdated && !customFonts.some(cf => cf.name.toLowerCase() === gf.name.toLowerCase())) {
                            const installed = await installGoogleFont(gf.name, gf.category);
                            if (installed) {
                              onFontsUpdated([installed, ...customFonts]);
                            }
                          }
                          onUpdateElement({ fontFamily: gf.cssFamily });
                        } catch (err) {
                          onUpdateElement({ fontFamily: gf.cssFamily });
                        } finally {
                          setLoadingFont(null);
                        }
                      }}
                      className={`w-full px-3 py-2 rounded-xl text-left flex items-center justify-between transition-colors group cursor-pointer ${
                        isSelected
                          ? 'bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 font-bold border border-purple-200 dark:border-purple-800/60'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <div className="flex flex-col min-w-0 pr-2">
                        <span style={{ fontFamily: gf.cssFamily }} className="text-base truncate">
                          {gf.name}
                        </span>
                        <span className="text-[10px] text-slate-400">{gf.category}</span>
                      </div>
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 text-[#7d2ae8] animate-spin flex-shrink-0" />
                      ) : isSelected ? (
                        <Check className="w-4 h-4 text-[#7d2ae8] dark:text-purple-300 flex-shrink-0" />
                      ) : null}
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        {/* Section: Standard / Built-in Fonts */}
        {categoryTab === 'todas' && (
          <div>
            <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Fuentes predeterminadas
            </div>
            <div className="space-y-0.5">
              {AVAILABLE_FONTS
                .filter(f => filterBySearch(f.name, f.family))
                .map(font => {
                  const isSelected = currentFontFamily === font.family;
                  return (
                    <button
                      key={font.name}
                      onClick={() => handleApplyFont(font.family)}
                      className={`w-full px-3 py-2 rounded-xl text-left flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 font-bold border border-purple-200 dark:border-purple-800/60'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <div className="flex flex-col min-w-0 pr-2">
                        <span style={{ fontFamily: font.family }} className="text-base truncate">
                          {font.name}
                        </span>
                        <span className="text-[10px] text-slate-400">{font.category}</span>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#7d2ae8] dark:text-purple-300 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
