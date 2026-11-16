import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Plus, 
  Check, 
  Pipette, 
  Sparkles,
  Sliders
} from 'lucide-react';
import { CanvasElement } from '../types';
import { COLOR_PALETTES, CANVA_GRADIENTS } from '../data/elements';

interface SidebarColorPanelProps {
  element: CanvasElement | null;
  onUpdateElement: (updates: Partial<CanvasElement>) => void;
  documentColors: string[];
  onClose: () => void;
}

export const SidebarColorPanel: React.FC<SidebarColorPanelProps> = ({
  element,
  onUpdateElement,
  documentColors = [],
  onClose,
}) => {
  const isText = element?.type === 'text';
  const hasStroke = element?.type === 'shape' || element?.type === 'vector' || element?.type === 'sticker' || Boolean(element?.svgPath);

  // Tab for fill vs stroke color if shape/vector
  const [colorTarget, setColorTarget] = useState<'fill' | 'stroke'>(
    isText ? 'fill' : 'fill'
  );

  const [colorTypeTab, setColorTypeTab] = useState<'solid' | 'gradient'>('solid');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Current active color depending on target
  const currentColor = isText 
    ? (element?.color || '#000000')
    : (colorTarget === 'stroke' ? (element?.strokeColor || '#000000') : (element?.fillColor || '#7d2ae8'));

  const [customHex, setCustomHex] = useState(
    currentColor.startsWith('#') ? currentColor : '#7d2ae8'
  );

  const applyColor = (color: string) => {
    if (!element) return;
    if (isText) {
      onUpdateElement({ color });
    } else if (colorTarget === 'stroke') {
      onUpdateElement({ 
        strokeColor: color,
        strokeWidth: (element.strokeWidth && element.strokeWidth > 0) ? element.strokeWidth : 2 
      });
    } else {
      onUpdateElement({ fillColor: color });
    }
  };

  // Filtered gradients and palettes
  const filteredGradients = CANVA_GRADIENTS.filter(g => 
    !searchQuery || g.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const uniqueDocColors = Array.from(new Set(documentColors.filter(c => c && !c.includes('gradient'))));

  // Native EyeDropper API support
  const handleEyeDropper = async () => {
    if (typeof window !== 'undefined' && 'EyeDropper' in window) {
      try {
        const eyeDropper = new (window as any).EyeDropper();
        const result = await eyeDropper.open();
        if (result?.sRGBHex) {
          setCustomHex(result.sRGBHex);
          applyColor(result.sRGBHex);
        }
      } catch (e) {
        // User cancelled eyedropper
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#161922] text-slate-800 dark:text-slate-100 select-none animate-in slide-in-from-left duration-200 min-h-0">
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#161922] flex-shrink-0">
        <div className="flex items-center gap-2">
          <div 
            className="w-5 h-5 rounded-md border border-slate-300 dark:border-slate-600 shadow-2xs"
            style={{
              background: currentColor.includes('gradient') ? currentColor : undefined,
              backgroundColor: !currentColor.includes('gradient') ? currentColor : undefined,
            }}
          />
          <span className="font-bold text-[#0e1318] dark:text-white text-sm">
            {isText ? 'Color del texto' : colorTarget === 'stroke' ? 'Color del borde' : 'Color del elemento'}
          </span>
        </div>

        {/* The prominent "X" close button requested by the user */}
        <button
          id="btn-close-color-panel"
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Cerrar y volver a la barra lateral"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Target Selector: Relleno vs Borde (for shapes/graphics) */}
      {hasStroke && !isText && (
        <div className="px-4 pt-3 pb-1 flex-shrink-0">
          <div className="flex bg-slate-100 dark:bg-slate-800/90 p-1 rounded-xl gap-1">
            <button
              onClick={() => setColorTarget('fill')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                colorTarget === 'fill'
                  ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div 
                className="w-3 h-3 rounded-xs border border-slate-400"
                style={{ backgroundColor: element?.fillColor || '#7d2ae8' }}
              />
              <span>Relleno</span>
            </button>
            <button
              onClick={() => setColorTarget('stroke')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                colorTarget === 'stroke'
                  ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div 
                className="w-3 h-3 rounded-xs border-2"
                style={{ borderColor: element?.strokeColor || '#000000' }}
              />
              <span>Borde</span>
            </button>
          </div>
        </div>
      )}

      {/* Solid vs Gradient Tab (for fill / graphics) */}
      {colorTarget === 'fill' && (
        <div className="px-4 pt-2 pb-1 flex-shrink-0">
          <div className="flex gap-1 border-b border-gray-200 dark:border-slate-800 pb-2">
            <button
              onClick={() => setColorTypeTab('solid')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                colorTypeTab === 'solid'
                  ? 'bg-[#7d2ae8] text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Sólido
            </button>
            <button
              onClick={() => setColorTypeTab('gradient')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                colorTypeTab === 'gradient'
                  ? 'bg-[#7d2ae8] text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Degradado</span>
            </button>
          </div>
        </div>
      )}

      {/* Search and Custom Hex Input */}
      <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-800 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.startsWith('#') && (e.target.value.length === 4 || e.target.value.length === 7)) {
                  setCustomHex(e.target.value);
                  applyColor(e.target.value);
                }
              }}
              placeholder="Buscar color o #HEX..."
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#7d2ae8] focus:bg-white dark:focus:bg-slate-800 transition-all"
            />
          </div>

          {/* Color preview & native picker */}
          <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-600 shadow-2xs flex-shrink-0 cursor-pointer group">
            <input
              type="color"
              value={customHex.startsWith('#') ? customHex : '#7d2ae8'}
              onChange={(e) => {
                setCustomHex(e.target.value);
                applyColor(e.target.value);
              }}
              className="absolute -top-4 -left-4 w-16 h-16 cursor-pointer opacity-0"
              title="Selector de color personalizado"
            />
            <div 
              className="w-full h-full"
              style={{ backgroundColor: customHex.startsWith('#') ? customHex : '#7d2ae8' }}
            />
          </div>

          {/* Pipette / Eyedropper button if supported */}
          {typeof window !== 'undefined' && 'EyeDropper' in window && (
            <button
              onClick={handleEyeDropper}
              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
              title="Cuentagotas (extraer color de la pantalla)"
            >
              <Pipette className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Color Swatches List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 custom-scrollbar min-h-0">
        {colorTypeTab === 'solid' ? (
          <>
            {/* Section: Colores del Documento */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Colores del documento
                </span>
                <span className="text-[10px] text-slate-400">
                  {uniqueDocColors.length} colores
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {/* Add Custom Color Tile */}
                <div className="relative aspect-square rounded-xl border border-dashed border-slate-300 dark:border-slate-600 hover:border-[#7d2ae8] flex items-center justify-center cursor-pointer group overflow-hidden bg-slate-50 dark:bg-slate-800/40">
                  <input
                    type="color"
                    value={customHex.startsWith('#') ? customHex : '#7d2ae8'}
                    onChange={(e) => {
                      setCustomHex(e.target.value);
                      applyColor(e.target.value);
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    title="Nuevo color personalizado"
                  />
                  <Plus className="w-4 h-4 text-slate-400 group-hover:text-[#7d2ae8] transition-colors" />
                </div>

                {uniqueDocColors.map((color, idx) => {
                  const isSelected = currentColor.toLowerCase() === color.toLowerCase();
                  return (
                    <button
                      key={`doc-${color}-${idx}`}
                      onClick={() => {
                        setCustomHex(color);
                        applyColor(color);
                      }}
                      className={`relative aspect-square rounded-xl border border-black/10 dark:border-white/10 shadow-2xs transition-all hover:scale-110 cursor-pointer flex items-center justify-center ${
                        isSelected ? 'ring-2 ring-offset-2 ring-[#7d2ae8]' : ''
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    >
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section: Colores Predeterminados de Canva */}
            <div>
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                Colores predeterminados
              </span>
              <div className="grid grid-cols-6 gap-2">
                {[
                  '#000000', '#545454', '#737373', '#A6A6A6', '#D9D9D9', '#FFFFFF',
                  '#FF0000', '#FF5722', '#FF9800', '#FFEB3B', '#4CAF50', '#009688',
                  '#00BCD4', '#03A9F4', '#2196F3', '#3F51B5', '#673AB7', '#9C27B0',
                  '#E91E63', '#795548', '#607D8B', '#7D2AE8', '#00C4CC', '#FF007F'
                ].map((color) => {
                  const isSelected = currentColor.toLowerCase() === color.toLowerCase();
                  return (
                    <button
                      key={`def-${color}`}
                      onClick={() => {
                        setCustomHex(color);
                        applyColor(color);
                      }}
                      className={`relative aspect-square rounded-xl border border-black/10 dark:border-white/10 shadow-2xs transition-all hover:scale-110 cursor-pointer flex items-center justify-center ${
                        isSelected ? 'ring-2 ring-offset-2 ring-[#7d2ae8]' : ''
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    >
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section: Paletas de Colores de Marca y Temáticas */}
            <div>
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                Paletas temáticas
              </span>
              <div className="space-y-2.5">
                {COLOR_PALETTES.map((palette) => (
                  <div 
                    key={palette.name} 
                    className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1.5 flex items-center justify-between">
                      <span>{palette.name}</span>
                    </div>
                    <div className="flex gap-1.5 h-8">
                      {palette.colors.map((col) => {
                        const isSelected = currentColor.toLowerCase() === col.toLowerCase();
                        return (
                          <button
                            key={col}
                            onClick={() => {
                              setCustomHex(col);
                              applyColor(col);
                            }}
                            className={`flex-1 rounded-lg border border-black/5 dark:border-white/5 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center ${
                              isSelected ? 'ring-2 ring-offset-1 ring-[#7d2ae8]' : ''
                            }`}
                            style={{ backgroundColor: col }}
                            title={col}
                          >
                            {isSelected && (
                              <Check className="w-3 h-3 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Degradados Section */
          <div>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
              Degradados de Canva
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {filteredGradients.map((grad) => {
                const isSelected = currentColor === grad.value;
                return (
                  <button
                    key={grad.name}
                    onClick={() => applyColor(grad.value)}
                    className={`h-16 rounded-xl border border-black/10 dark:border-white/10 p-2 text-left flex flex-col justify-end shadow-2xs transition-all hover:scale-[1.02] cursor-pointer relative overflow-hidden group ${
                      isSelected ? 'ring-2 ring-offset-2 ring-[#7d2ae8]' : ''
                    }`}
                    style={{ background: grad.value }}
                  >
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] z-10 truncate">
                      {grad.name}
                    </span>
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 text-[#7d2ae8] flex items-center justify-center shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
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
