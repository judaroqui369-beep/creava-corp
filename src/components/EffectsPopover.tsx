import React, { useState } from 'react';
import { 
  Sparkles, 
  Sliders, 
  Sun, 
  Flame, 
  Eye, 
  Check, 
  X, 
  RotateCcw, 
  Layers,
  Circle,
  Square
} from 'lucide-react';
import { CanvasElement, TextEffect } from '../types';

interface EffectsPopoverProps {
  element: CanvasElement;
  onUpdateElement: (updates: Partial<CanvasElement>) => void;
  onClose?: () => void;
}

export const EffectsPopover: React.FC<EffectsPopoverProps> = ({
  element,
  onUpdateElement,
  onClose
}) => {
  const isText = element.type === 'text';
  const isGraphic = !isText; // shape, vector, sticker, image

  const [activeTab, setActiveTab] = useState<'sombras' | 'desenfoque' | 'filtros'>(
    isText ? 'sombras' : 'sombras'
  );

  // Graphic Shadow Presets
  const GRAPHIC_SHADOWS = [
    { id: 'none', label: 'Ninguno', desc: 'Sin sombra' },
    { id: 'drop', label: 'Paralela', desc: 'Sombra suave' },
    { id: 'lift', label: 'Flotante', desc: 'Efecto de elevación' },
    { id: 'glow', label: 'Resplandor', desc: 'Aura luminosa' },
    { id: 'outline', label: 'Silueta', desc: 'Contorno suave' },
    { id: 'neon', label: 'Neón', desc: 'Brillo vibrante' },
  ];

  // Text Effect Presets
  const TEXT_EFFECTS = [
    { id: 'none', label: 'Ninguno' },
    { id: 'shadow', label: 'Sombra' },
    { id: 'lift', label: 'Flotante' },
    { id: 'neon', label: 'Neón' },
    { id: 'background', label: 'Fondo' },
  ];

  // Quick Colors for Shadows and Glows
  const QUICK_SHADOW_COLORS = [
    '#000000',
    '#7d2ae8',
    '#00c4cc',
    '#ff007f',
    '#ffb800',
    '#00ff66',
    '#ffffff'
  ];

  return (
    <div 
      className="bg-white dark:bg-[#181c28] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 w-72 sm:w-80 z-50 text-slate-800 dark:text-slate-100 select-none transition-colors animate-in fade-in zoom-in-95 duration-150"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Popover Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">
              {isText ? 'Efectos de texto' : 'Efectos gráficos'}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              Estilo Canva profesional
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

      {/* GRAPHIC EFFECTS CONTENT */}
      {isGraphic && (
        <>
          {/* Sub-tabs for graphics: Sombras, Desenfoque & Filtros */}
          <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl mb-3 gap-1 text-[11px] font-semibold">
            <button
              onClick={() => setActiveTab('sombras')}
              className={`flex-1 py-1 rounded-lg text-center transition-all ${
                activeTab === 'sombras'
                  ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Sombras
            </button>
            <button
              onClick={() => setActiveTab('desenfoque')}
              className={`flex-1 py-1 rounded-lg text-center transition-all ${
                activeTab === 'desenfoque'
                  ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Desenfoque
            </button>
            <button
              onClick={() => setActiveTab('filtros')}
              className={`flex-1 py-1 rounded-lg text-center transition-all ${
                activeTab === 'filtros'
                  ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Tinte
            </button>
          </div>

          {/* TAB 1: SOMBRAS */}
          {activeTab === 'sombras' && (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {GRAPHIC_SHADOWS.map((item) => {
                  const isSelected = (element.shadowEffect || 'none') === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onUpdateElement({ 
                        shadowEffect: item.id as any,
                        shadowBlur: element.shadowBlur ?? (item.id === 'lift' ? 14 : 8),
                        shadowOffsetX: element.shadowOffsetX ?? 4,
                        shadowOffsetY: element.shadowOffsetY ?? (item.id === 'lift' ? 8 : 4),
                        shadowColor: element.shadowColor || 'rgba(0,0,0,0.38)'
                      })}
                      className={`p-2 rounded-xl border text-center flex flex-col items-center justify-center transition-all group ${
                        isSelected
                          ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/40 text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                          : 'border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {/* Visual Icon / Representation */}
                      <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 mb-1.5 flex items-center justify-center relative overflow-hidden">
                        <div 
                          className={`w-4 h-4 rounded-md bg-[#7d2ae8] ${
                            item.id === 'drop' ? 'shadow-[2px_2px_4px_rgba(0,0,0,0.6)]' :
                            item.id === 'lift' ? 'shadow-[0px_4px_6px_rgba(0,0,0,0.7)]' :
                            item.id === 'glow' ? 'shadow-[0_0_8px_#ffb800]' :
                            item.id === 'outline' ? 'ring-2 ring-purple-400' :
                            item.id === 'neon' ? 'shadow-[0_0_8px_#00c4cc]' : ''
                          }`}
                        />
                      </div>
                      <span className="text-[11px] font-bold block truncate w-full">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sliders when shadow is active */}
              {element.shadowEffect && element.shadowEffect !== 'none' && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                  {/* Blur slider */}
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mb-1">
                      <span>Desenfoque de sombra</span>
                      <span className="font-mono">{element.shadowBlur ?? 8}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={element.shadowBlur ?? 8}
                      onChange={(e) => onUpdateElement({ shadowBlur: parseInt(e.target.value) })}
                      className="w-full accent-[#7d2ae8] cursor-pointer"
                    />
                  </div>

                  {/* Offset slider (if not glow) */}
                  {element.shadowEffect !== 'glow' && element.shadowEffect !== 'outline' && (
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mb-1">
                        <span>Desplazamiento</span>
                        <span className="font-mono">{element.shadowOffsetY ?? 4}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={element.shadowOffsetY ?? 4}
                        onChange={(e) => onUpdateElement({ 
                          shadowOffsetY: parseInt(e.target.value),
                          shadowOffsetX: Math.round(parseInt(e.target.value) * 0.8)
                        })}
                        className="w-full accent-[#7d2ae8] cursor-pointer"
                      />
                    </div>
                  )}

                  {/* Shadow Color */}
                  <div>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 block mb-1.5 font-medium">
                      Color del efecto
                    </span>
                    <div className="flex items-center gap-1.5">
                      {QUICK_SHADOW_COLORS.map((col) => (
                        <button
                          key={col}
                          onClick={() => onUpdateElement({ shadowColor: col })}
                          style={{ backgroundColor: col }}
                          className={`w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 transition-transform hover:scale-110 flex items-center justify-center ${
                            element.shadowColor === col ? 'ring-2 ring-[#7d2ae8] ring-offset-1' : ''
                          }`}
                        >
                          {element.shadowColor === col && (
                            <Check className={`w-2.5 h-2.5 ${col === '#ffffff' ? 'text-black' : 'text-white'}`} />
                          )}
                        </button>
                      ))}
                      {/* Native Color Picker for custom shadow color */}
                      <label className="w-5 h-5 rounded-full border border-dashed border-slate-400 dark:border-slate-600 flex items-center justify-center cursor-pointer hover:border-[#7d2ae8] relative overflow-hidden">
                        <input
                          type="color"
                          value={element.shadowColor?.startsWith('#') ? element.shadowColor : '#000000'}
                          onChange={(e) => onUpdateElement({ shadowColor: e.target.value })}
                          className="opacity-0 absolute inset-0 cursor-pointer"
                        />
                        <span className="text-[9px] font-bold">+</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: DESENFOQUE */}
          {activeTab === 'desenfoque' && (
            <div className="space-y-3 py-1">
              <div>
                <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mb-1">
                  <span>Desenfoque del elemento</span>
                  <span className="font-mono">{element.graphicBlur || 0}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={element.graphicBlur || 0}
                  onChange={(e) => onUpdateElement({ graphicBlur: parseInt(e.target.value) })}
                  className="w-full accent-[#7d2ae8] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Nítido (0px)</span>
                  <span>Efecto bokeh (25px)</span>
                </div>
              </div>

              {element.graphicBlur ? (
                <button
                  onClick={() => onUpdateElement({ graphicBlur: 0 })}
                  className="w-full py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Quitar desenfoque</span>
                </button>
              ) : null}
            </div>
          )}

          {/* TAB 3: TINTE / FILTROS */}
          {activeTab === 'filtros' && (
            <div className="space-y-2 py-1">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                Filtros cromáticos para gráficos
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'none', label: 'Original', desc: 'Colores base' },
                  { id: 'warm', label: 'Cálido', desc: 'Atardecer' },
                  { id: 'cool', label: 'Frío', desc: 'Tonos azules' },
                  { id: 'vintage', label: 'Vintage', desc: 'Estilo retro' },
                  { id: 'mono', label: 'Monocromo', desc: 'Blanco y negro' },
                ].map((tint) => (
                  <button
                    key={tint.id}
                    onClick={() => onUpdateElement({ 
                      duotoneFilter: tint.id === 'none' ? undefined : tint.id 
                    })}
                    className={`p-2 rounded-xl border text-left transition-all ${
                      (element.duotoneFilter || 'none') === tint.id
                        ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/40 text-[#7d2ae8] dark:text-purple-300 font-bold'
                        : 'border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="text-[11px]">{tint.label}</div>
                    <div className="text-[9px] text-slate-400">{tint.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* TEXT EFFECTS CONTENT */}
      {isText && (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {TEXT_EFFECTS.map((eff) => (
              <button
                key={eff.id}
                onClick={() => onUpdateElement({ effect: eff.id as TextEffect })}
                className={`p-2 rounded-xl border text-center text-xs font-semibold transition-all ${
                  (element.effect || 'none') === eff.id
                    ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/40 text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                    : 'border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {eff.label}
              </button>
            ))}
          </div>

          {/* Neon Glow or Effect Color Picker */}
          {element.effect === 'neon' && (
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1.5 font-medium">
                Color del resplandor neón
              </span>
              <div className="flex gap-2">
                {['#7d2ae8', '#00c4cc', '#FF007F', '#FFB800', '#00FF66'].map((col) => (
                  <button
                    key={col}
                    onClick={() => onUpdateElement({ effectColor: col })}
                    style={{ backgroundColor: col }}
                    className={`w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 transition-transform hover:scale-110 flex items-center justify-center ${
                      element.effectColor === col ? 'ring-2 ring-[#7d2ae8] ring-offset-1' : ''
                    }`}
                  >
                    {element.effectColor === col && <Check className="w-3 h-3 text-white drop-shadow-sm" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
