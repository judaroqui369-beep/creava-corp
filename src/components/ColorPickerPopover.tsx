import React, { useState } from 'react';
import { Check, Plus, Palette, X } from 'lucide-react';
import { COLOR_PALETTES, CANVA_GRADIENTS } from '../data/elements';

interface ColorPickerPopoverProps {
  currentColor: string;
  onChange: (color: string) => void;
  onClose?: () => void;
  documentColors?: string[];
  supportsGradient?: boolean;
  title?: string;
}

export const ColorPickerPopover: React.FC<ColorPickerPopoverProps> = ({
  currentColor,
  onChange,
  onClose,
  documentColors = [],
  supportsGradient = true,
  title = 'Color'
}) => {
  const [activeTab, setActiveTab] = useState<'solid' | 'gradient'>(
    currentColor.includes('gradient') ? 'gradient' : 'solid'
  );
  const [customHex, setCustomHex] = useState(
    currentColor.startsWith('#') ? currentColor : '#7d2ae8'
  );

  const uniqueDocColors = Array.from(new Set(documentColors.filter(c => c && !c.includes('gradient'))));

  return (
    <div 
      className="bg-white dark:bg-[#181c28] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 w-72 sm:w-80 z-50 text-slate-800 dark:text-slate-100 select-none transition-colors animate-in fade-in zoom-in-95 duration-150"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div 
            className="w-5 h-5 rounded-md border border-slate-300 dark:border-slate-600 shadow-2xs"
            style={{ 
              background: currentColor.includes('gradient') ? currentColor : undefined,
              backgroundColor: !currentColor.includes('gradient') ? currentColor : undefined 
            }}
          />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
            {title}
          </span>
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

      {/* Tabs: Sólido vs Degradado */}
      {supportsGradient && (
        <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl mb-3 gap-1">
          <button
            onClick={() => setActiveTab('solid')}
            className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'solid' 
                ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs font-bold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Sólido
          </button>
          <button
            onClick={() => setActiveTab('gradient')}
            className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'gradient' 
                ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs font-bold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Degradado
          </button>
        </div>
      )}

      {activeTab === 'solid' ? (
        <div className="space-y-3 max-h-[380px] overflow-y-auto custom-scrollbar pr-0.5">
          {/* Custom Hex & Native Color Input */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-600 shadow-inner flex-shrink-0 cursor-pointer">
              <input
                type="color"
                value={customHex.startsWith('#') ? customHex : '#7d2ae8'}
                onChange={(e) => {
                  setCustomHex(e.target.value);
                  onChange(e.target.value);
                }}
                className="absolute -top-3 -left-3 w-14 h-14 cursor-pointer"
              />
            </div>
            <div className="flex-1 flex items-center border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800/80 text-xs font-mono">
              <span className="text-slate-400 mr-1 font-semibold">HEX</span>
              <input
                type="text"
                value={customHex}
                onChange={(e) => {
                  setCustomHex(e.target.value);
                  if (/^#[0-9A-F]{6}$/i.test(e.target.value) || /^#[0-9A-F]{3}$/i.test(e.target.value)) {
                    onChange(e.target.value);
                  }
                }}
                className="w-full bg-transparent focus:outline-none text-slate-800 dark:text-slate-100 font-semibold"
                placeholder="#7d2ae8"
              />
            </div>
          </div>

          {/* Document Colors if available */}
          <div className="pt-1">
            <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Colores del diseño</span>
              <span className="text-[10px] lowercase text-slate-400">{uniqueDocColors.length} colores</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* Plus Button for adding current color */}
              <label 
                className="w-6 h-6 rounded-lg border border-dashed border-slate-400 dark:border-slate-600 shadow-xs flex items-center justify-center cursor-pointer hover:border-[#7d2ae8] hover:text-[#7d2ae8] text-slate-400 transition-colors relative overflow-hidden"
                title="Añadir nuevo color"
              >
                <input
                  type="color"
                  value={customHex.startsWith('#') ? customHex : '#7d2ae8'}
                  onChange={(e) => {
                    setCustomHex(e.target.value);
                    onChange(e.target.value);
                  }}
                  className="opacity-0 absolute inset-0 cursor-pointer"
                />
                <Plus className="w-3.5 h-3.5" />
              </label>

              {uniqueDocColors.map((color, idx) => (
                <button
                  key={`doc-${idx}`}
                  onClick={() => {
                    setCustomHex(color);
                    onChange(color);
                  }}
                  style={{ backgroundColor: color }}
                  className="w-6 h-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xs relative flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                  title={color}
                >
                  {currentColor.toLowerCase() === color.toLowerCase() && (
                    <Check className="w-3.5 h-3.5 text-white drop-shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Standard Canva Palettes */}
          {COLOR_PALETTES.map((palette) => (
            <div key={palette.name} className="pt-1">
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {palette.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {palette.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setCustomHex(color);
                      onChange(color);
                    }}
                    style={{ backgroundColor: color }}
                    className="w-6 h-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xs relative flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                    title={color}
                  >
                    {currentColor.toLowerCase() === color.toLowerCase() && (
                      <Check className="w-3.5 h-3.5 text-white drop-shadow-md" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Gradients tab */
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto custom-scrollbar pr-1">
          {CANVA_GRADIENTS.map((grad) => (
            <button
              key={grad.name}
              onClick={() => onChange(grad.value)}
              style={{ background: grad.value }}
              className="h-12 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col justify-end p-2 text-left relative transition-transform hover:scale-105 cursor-pointer group"
            >
              <span className="text-[10px] font-bold text-white drop-shadow-sm truncate">
                {grad.name}
              </span>
              {currentColor === grad.value && (
                <div className="absolute top-1.5 right-1.5 bg-white rounded-full p-0.5 shadow-sm">
                  <Check className="w-3 h-3 text-[#7d2ae8]" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
