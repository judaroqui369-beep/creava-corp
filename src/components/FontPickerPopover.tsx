import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Loader2, 
  Check, 
  Plus, 
  Minus, 
  Bold, 
  Italic, 
  Underline, 
  Type, 
  X,
  Sparkles,
  Palette
} from 'lucide-react';
import { CanvasElement, CustomFont } from '../types';
import { AVAILABLE_FONTS } from '../data/elements';
import { POPULAR_GOOGLE_FONTS, installGoogleFont } from '../utils/fontManager';

interface FontPickerPopoverProps {
  element: CanvasElement;
  customFonts: CustomFont[];
  onUpdateElement: (updates: Partial<CanvasElement>) => void;
  onOpenFontImporter?: () => void;
  onFontsUpdated?: (fonts: CustomFont[]) => void;
  onClose?: () => void;
}

export const FontPickerPopover: React.FC<FontPickerPopoverProps> = ({
  element,
  customFonts,
  onUpdateElement,
  onOpenFontImporter,
  onFontsUpdated,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryTab, setCategoryTab] = useState<'todas' | 'google' | 'importadas' | 'sans' | 'serif' | 'script'>('todas');
  const [loadingGoogleFont, setLoadingGoogleFont] = useState<string | null>(null);
  const [newTextDraft, setNewTextDraft] = useState('');

  const isShapeOrGraphic = element.type !== 'text';
  const hasContent = Boolean(element.content && element.content.trim().length > 0);

  // Grouped or filtered fonts
  const filterBySearch = (name: string, family: string) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return name.toLowerCase().includes(q) || family.toLowerCase().includes(q);
  };

  const handleSelectFont = (fontFamily: string) => {
    const updates: Partial<CanvasElement> = { fontFamily };
    // If shape doesn't have text yet, add a friendly default or keep it ready
    if (isShapeOrGraphic && !hasContent) {
      updates.content = 'Texto';
      updates.fontSize = element.fontSize || 20;
      updates.color = element.color || '#FFFFFF';
    }
    onUpdateElement(updates);
  };

  const handleAddTextToShape = (text: string) => {
    onUpdateElement({
      content: text || 'Texto en forma',
      fontSize: element.fontSize || 20,
      fontFamily: element.fontFamily || 'Inter, sans-serif',
      color: element.color || '#FFFFFF',
      textAlign: 'center'
    });
  };

  return (
    <div 
      className="bg-white dark:bg-[#181c28] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-80 sm:w-88 z-50 text-slate-800 dark:text-slate-100 select-none transition-colors flex flex-col max-h-[460px] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Popover Header */}
      <div className="p-3.5 pb-2 border-b border-slate-100 dark:border-slate-800 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 flex items-center justify-center">
              <Type className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">
                {isShapeOrGraphic ? 'Tipografía para forma' : 'Tipos de letra'}
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                {AVAILABLE_FONTS.length + POPULAR_GOOGLE_FONTS.length + customFonts.length} fuentes disponibles
              </span>
            </div>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar o escribir fuente..."
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-8 pr-7 py-1.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#7d2ae8] transition-all"
            autoFocus
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex gap-1 overflow-x-auto text-[10px] scrollbar-none pb-0.5">
          {[
            { id: 'todas', label: 'Todas' },
            { id: 'google', label: 'Google Fonts' },
            { id: 'importadas', label: `Mis Fuentes (${customFonts.length})` },
            { id: 'sans', label: 'Modernas' },
            { id: 'serif', label: 'Elegantes' },
            { id: 'script', label: 'Manuscritas' },
          ].map((tab) => (
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

      {/* Quick Text in Shape Action Banner */}
      {isShapeOrGraphic && !hasContent && (
        <div className="p-3 bg-purple-50/80 dark:bg-purple-950/30 border-b border-purple-100 dark:border-purple-900/40">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-800 dark:text-purple-300 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Añadir texto a esta forma</span>
          </div>
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={newTextDraft}
              onChange={(e) => setNewTextDraft(e.target.value)}
              placeholder="Ej. Oferta, Título, Info..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddTextToShape(newTextDraft || 'Texto');
              }}
              className="flex-1 bg-white dark:bg-[#151822] border border-purple-200 dark:border-purple-800 rounded-lg px-2.5 py-1 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#7d2ae8]"
            />
            <button
              onClick={() => handleAddTextToShape(newTextDraft || 'Texto')}
              className="px-2.5 py-1 bg-[#7d2ae8] hover:bg-[#6820c7] text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 shadow-2xs"
            >
              <Plus className="w-3 h-3" />
              <span>Añadir</span>
            </button>
          </div>
        </div>
      )}

      {/* Quick Typographic Controls (Size, Bold, Italic, Color) */}
      {(hasContent || !isShapeOrGraphic) && (
        <div className="px-3.5 py-2 bg-slate-50 dark:bg-[#151822] border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          {/* Size Controls */}
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
            <button
              onClick={() => onUpdateElement({ fontSize: Math.max(8, (element.fontSize || 20) - 2) })}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              title="Reducir tamaño"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-xs font-bold font-mono">
              {element.fontSize || 20}
            </span>
            <button
              onClick={() => onUpdateElement({ fontSize: Math.min(200, (element.fontSize || 20) + 2) })}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              title="Aumentar tamaño"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Bold, Italic, Underline */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onUpdateElement({ bold: !element.bold })}
              className={`p-1 rounded-md transition-colors ${
                element.bold 
                  ? 'bg-purple-100 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300' 
                  : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
              title="Negrita"
            >
              <Bold className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onUpdateElement({ italic: !element.italic })}
              className={`p-1 rounded-md transition-colors ${
                element.italic 
                  ? 'bg-purple-100 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300' 
                  : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
              title="Cursiva"
            >
              <Italic className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onUpdateElement({ underline: !element.underline })}
              className={`p-1 rounded-md transition-colors ${
                element.underline 
                  ? 'bg-purple-100 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300' 
                  : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
              title="Subrayado"
            >
              <Underline className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Text Color */}
          <div className="flex items-center gap-1">
            <label 
              className="w-5 h-5 rounded-md border border-slate-300 dark:border-slate-600 shadow-2xs flex items-center justify-center cursor-pointer relative overflow-hidden"
              style={{ backgroundColor: element.color || '#000000' }}
              title="Color de texto"
            >
              <input
                type="color"
                value={element.color?.startsWith('#') ? element.color : '#000000'}
                onChange={(e) => onUpdateElement({ color: e.target.value })}
                className="opacity-0 absolute inset-0 cursor-pointer"
              />
            </label>
          </div>
        </div>
      )}

      {/* Font Explorer Button */}
      <div className="p-2 border-b border-slate-100 dark:border-slate-800">
        <button
          onClick={() => {
            onClose?.();
            onOpenFontImporter?.();
          }}
          className="w-full px-3 py-1.5 rounded-xl text-left flex items-center justify-center gap-2 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 font-bold text-xs shadow-2xs transition-all cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Explorar Catálogo Google Fonts</span>
        </button>
      </div>

      {/* Dynamic Google Font Loader Prompt if user searches any custom font */}
      {searchQuery.trim().length > 1 && (
        <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 bg-purple-50/60 dark:bg-purple-950/30">
          <button
            disabled={loadingGoogleFont !== null}
            onClick={async () => {
              const query = searchQuery.trim();
              setLoadingGoogleFont(query);
              try {
                const installed = await installGoogleFont(query);
                if (installed) {
                  if (onFontsUpdated) {
                    const current = customFonts.filter(f => f.id !== installed.id);
                    onFontsUpdated([installed, ...current]);
                  }
                  handleSelectFont(installed.family);
                }
              } finally {
                setLoadingGoogleFont(null);
              }
            }}
            className="w-full text-left flex items-center justify-between text-xs text-[#7d2ae8] dark:text-purple-300 font-bold hover:underline"
          >
            <div className="flex items-center gap-1.5">
              {loadingGoogleFont ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Plus className="w-3.5 h-3.5" />
              )}
              <span>Instalar "{searchQuery.trim()}" desde Google Fonts</span>
            </div>
            <span className="text-[10px] bg-purple-100 dark:bg-purple-900/50 px-1.5 py-0.5 rounded text-purple-700 dark:text-purple-300">
              Web
            </span>
          </button>
        </div>
      )}

      {/* Fonts List (Scrollable) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar divide-y divide-slate-100 dark:divide-slate-800/60">
        {/* Custom / Uploaded Fonts */}
        {(categoryTab === 'todas' || categoryTab === 'importadas') && customFonts.length > 0 && (
          <div className="py-1">
            <div className="px-3 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Mis Fuentes ({customFonts.length})
            </div>
            {customFonts
              .filter(f => filterBySearch(f.name, f.family))
              .map((font) => {
                const isSelected = element.fontFamily === font.family;
                return (
                  <button
                    key={font.id}
                    onClick={() => handleSelectFont(font.family)}
                    className={`w-full px-3.5 py-2 text-left flex items-center justify-between hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors group cursor-pointer ${
                      isSelected ? 'bg-purple-50/80 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300 font-bold' : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div style={{ fontFamily: font.family }} className="text-base truncate">
                        {font.name}
                      </div>
                      <div className="text-[10px] text-slate-400">{font.source || 'Local'}</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#7d2ae8] dark:text-purple-300 flex-shrink-0" />}
                  </button>
                );
              })}
          </div>
        )}

        {/* Popular Google Fonts Section */}
        {(categoryTab === 'todas' || categoryTab === 'google' || categoryTab === 'sans' || categoryTab === 'serif' || categoryTab === 'script') && (
          <div className="py-1">
            <div className="px-3 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>Google Fonts populares</span>
              <span className="text-[9px] font-normal text-purple-600 dark:text-purple-400">Listas para usar</span>
            </div>
            {POPULAR_GOOGLE_FONTS
              .filter(f => filterBySearch(f.name, f.cssFamily))
              .filter(f => {
                if (categoryTab === 'sans') return f.category === 'Moderna' || f.category === 'Display';
                if (categoryTab === 'serif') return f.category === 'Elegante';
                if (categoryTab === 'script') return f.category === 'Manuscrita';
                return true;
              })
              .map((gf) => {
                const isSelected = element.fontFamily?.includes(gf.name);
                return (
                  <button
                    key={gf.name}
                    onClick={async () => {
                      try {
                        const installed = await installGoogleFont(gf.name);
                        if (installed && onFontsUpdated) {
                          const current = customFonts.filter(f => f.id !== installed.id);
                          onFontsUpdated([installed, ...current]);
                        }
                        handleSelectFont(gf.cssFamily);
                      } catch (err) {
                        handleSelectFont(gf.cssFamily);
                      }
                    }}
                    className={`w-full px-3.5 py-2 text-left flex items-center justify-between hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors group cursor-pointer ${
                      isSelected ? 'bg-purple-50/80 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300 font-bold' : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div style={{ fontFamily: gf.cssFamily }} className="text-base truncate">
                        {gf.name}
                      </div>
                      <div className="text-[10px] text-slate-400">{gf.category}</div>
                    </div>
                    {isSelected ? (
                      <Check className="w-4 h-4 text-[#7d2ae8] dark:text-purple-300 flex-shrink-0" />
                    ) : (
                      <span className="text-[10px] text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Usar
                      </span>
                    )}
                  </button>
                );
              })}
          </div>
        )}

        {/* Standard / System Fonts */}
        {(categoryTab === 'todas' || categoryTab === 'sans') && (
          <div className="py-1">
            <div className="px-3 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Fuentes del sistema
            </div>
            {AVAILABLE_FONTS
              .filter(f => filterBySearch(f.name, f.family))
              .map((font) => {
                const isSelected = element.fontFamily === font.family;
                return (
                  <button
                    key={font.name}
                    onClick={() => handleSelectFont(font.family)}
                    className={`w-full px-3.5 py-2 text-left flex items-center justify-between hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors cursor-pointer ${
                      isSelected ? 'bg-purple-50/80 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300 font-bold' : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div style={{ fontFamily: font.family }} className="text-base truncate">
                        {font.name}
                      </div>
                      <div className="text-[10px] text-slate-400">{font.category}</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#7d2ae8] dark:text-purple-300 flex-shrink-0" />}
                  </button>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
