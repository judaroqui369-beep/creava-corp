import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Sun, 
  Sliders, 
  RotateCcw,
  Layers,
  Palette
} from 'lucide-react';
import { CanvasElement, TextEffect } from '../types';

interface SidebarEffectsPanelProps {
  element: CanvasElement | null;
  onUpdateElement: (updates: Partial<CanvasElement>) => void;
  onClose: () => void;
}

export const SidebarEffectsPanel: React.FC<SidebarEffectsPanelProps> = ({
  element,
  onUpdateElement,
  onClose,
}) => {
  const isText = element?.type === 'text';
  const [activeGraphicTab, setActiveGraphicTab] = useState<'shadow' | 'blur' | 'filter'>('shadow');

  // Shadow parameters
  const currentShadow = element?.shadowEffect || 'none';
  const shadowColor = element?.shadowColor || '#000000';
  const shadowBlur = element?.shadowBlur ?? 10;
  const shadowOffsetX = element?.shadowOffsetX ?? 6;
  const shadowOffsetY = element?.shadowOffsetY ?? 6;
  const shadowOpacity = element?.shadowOpacity ?? 0.4;
  const graphicBlur = element?.graphicBlur ?? 0;
  const duotoneFilter = element?.duotoneFilter || 'none';

  // Text effect parameters
  const textEffect = element?.effect || 'none';
  const textEffectColor = element?.effectColor || '#7d2ae8';

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#161922] text-slate-800 dark:text-slate-100 select-none animate-in slide-in-from-left duration-200 min-h-0">
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#161922] flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-[#7d2ae8]/10 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-[#0e1318] dark:text-white text-sm">
            Efectos
          </span>
        </div>

        {/* The prominent "X" close button requested by the user */}
        <button
          id="btn-close-effects-panel"
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title="Cerrar y volver a la barra lateral"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* TEXT EFFECTS VIEW */}
      {isText ? (
        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar min-h-0">
          {/* Text Style Cards */}
          <div>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
              Estilo de texto
            </span>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'none', label: 'Ninguno', preview: 'Aa', desc: 'Sin efectos' },
                { id: 'shadow', label: 'Sombra', preview: 'Aa', previewStyle: { textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }, desc: 'Sombra suave' },
                { id: 'lift', label: 'Flotante', preview: 'Aa', previewStyle: { textShadow: '0 6px 12px rgba(0,0,0,0.35)' }, desc: 'Elevado del lienzo' },
                { id: 'hollow', label: 'Sin relleno', preview: 'Aa', previewStyle: { WebkitTextStroke: '1px #7d2ae8', color: 'transparent' }, desc: 'Solo contorno' },
                { id: 'neon', label: 'Neón', preview: 'Aa', previewStyle: { textShadow: '0 0 10px #7d2ae8, 0 0 20px #7d2ae8' }, desc: 'Resplandor brillante' },
                { id: 'background', label: 'Fondo', preview: 'Aa', previewBg: '#7d2ae8', desc: 'Caja resaltada' },
              ].map((style) => {
                const isSelected = textEffect === style.id;
                return (
                  <button
                    key={style.id}
                    onClick={() => onUpdateElement({ effect: style.id as TextEffect })}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300 ring-2 ring-[#7d2ae8]/30 shadow-2xs'
                        : 'border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div 
                      className={`w-12 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                        style.previewBg ? 'text-white' : ''
                      }`}
                      style={{ 
                        backgroundColor: style.previewBg,
                        ...(style.previewStyle || {})
                      }}
                    >
                      {style.preview}
                    </div>
                    <span className="text-xs font-bold text-center">{style.label}</span>
                    <span className="text-[10px] text-slate-400 text-center leading-tight">{style.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Effect Fine-Tuning Controls */}
          {textEffect !== 'none' && (
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                  Ajustes de {textEffect === 'neon' ? 'Neón' : textEffect === 'shadow' ? 'Sombra' : 'Efecto'}
                </span>
                <button
                  onClick={() => onUpdateElement({ effect: 'none' })}
                  className="text-[11px] text-red-500 hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restablecer</span>
                </button>
              </div>

              {/* Color of glow or shadow */}
              <div>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1.5">
                  Color del efecto
                </span>
                <div className="flex gap-2">
                  {['#7d2ae8', '#00c4cc', '#ff007f', '#ffb800', '#00ff66', '#ff3b30', '#000000'].map(c => (
                    <button
                      key={c}
                      onClick={() => onUpdateElement({ effectColor: c })}
                      className={`w-7 h-7 rounded-xl border border-black/10 dark:border-white/10 transition-transform hover:scale-110 cursor-pointer ${
                        textEffectColor.toLowerCase() === c.toLowerCase() ? 'ring-2 ring-offset-1 ring-[#7d2ae8]' : ''
                      }`}
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* GRAPHIC / SHAPE / STICKER / VECTOR EFFECTS VIEW */
        <div className="flex flex-col h-full overflow-hidden min-h-0">
          {/* Sub-tabs for Graphic: Sombras vs Desenfoque vs Filtros */}
          <div className="px-4 pt-3 pb-2 border-b border-gray-100 dark:border-slate-800 flex-shrink-0">
            <div className="flex bg-slate-100 dark:bg-slate-800/90 p-1 rounded-xl gap-1">
              <button
                onClick={() => setActiveGraphicTab('shadow')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeGraphicTab === 'shadow'
                    ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>Sombras</span>
              </button>
              <button
                onClick={() => setActiveGraphicTab('blur')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeGraphicTab === 'blur'
                    ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>Desenfoque</span>
              </button>
              <button
                onClick={() => setActiveGraphicTab('filter')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeGraphicTab === 'filter'
                    ? 'bg-white dark:bg-[#1f2433] text-[#7d2ae8] dark:text-purple-300 shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>Filtros</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar min-h-0">
            {/* 1. SOMBRAS TAB */}
            {activeGraphicTab === 'shadow' && (
              <>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
                    Estilos de sombra
                  </span>

                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'none', label: 'Ninguno', desc: 'Sin sombra', icon: '◻️' },
                      { id: 'drop', label: 'Sombra paralela', desc: 'Efecto flotante natural', icon: '🪟' },
                      { id: 'lift', label: 'Flotante / Elevada', desc: 'Profundidad alta', icon: '☁️' },
                      { id: 'glow', label: 'Resplandor / Neón', desc: 'Aura luminosa', icon: '✨' },
                      { id: 'outline', label: 'Contorno silueta', desc: 'Trazo perimetral', icon: '⭕' },
                    ].map((shadow) => {
                      const isSelected = currentShadow === shadow.id;
                      return (
                        <button
                          key={shadow.id}
                          onClick={() => {
                            if (shadow.id === 'none') {
                              onUpdateElement({ shadowEffect: 'none' });
                            } else {
                              onUpdateElement({ 
                                shadowEffect: shadow.id as any,
                                shadowColor: shadow.id === 'glow' ? '#7d2ae8' : '#000000',
                                shadowBlur: shadow.id === 'lift' ? 18 : 8,
                                shadowOffsetY: shadow.id === 'lift' ? 10 : 4,
                              });
                            }
                          }}
                          className={`p-3 rounded-xl border text-left flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300 ring-2 ring-[#7d2ae8]/30 shadow-2xs'
                              : 'border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-200'
                          }`}
                        >
                          <span className="text-2xl">{shadow.icon}</span>
                          <span className="text-xs font-bold text-center">{shadow.label}</span>
                          <span className="text-[10px] text-slate-400 text-center leading-tight">{shadow.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Shadow Sliders & Color */}
                {currentShadow !== 'none' && (
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                        Ajustar sombra
                      </span>
                      <button
                        onClick={() => onUpdateElement({ shadowEffect: 'none' })}
                        className="text-[11px] text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Quitar</span>
                      </button>
                    </div>

                    {/* Desplazamiento Y */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-medium mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Desplazamiento</span>
                        <span className="font-bold text-[#7d2ae8] dark:text-purple-300">{shadowOffsetY}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="40"
                        value={shadowOffsetY}
                        onChange={(e) => onUpdateElement({ 
                          shadowOffsetY: parseInt(e.target.value),
                          shadowOffsetX: parseInt(e.target.value) * 0.7 
                        })}
                        className="w-full accent-[#7d2ae8] cursor-pointer"
                      />
                    </div>

                    {/* Desenfoque */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-medium mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Desenfoque</span>
                        <span className="font-bold text-[#7d2ae8] dark:text-purple-300">{shadowBlur}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={shadowBlur}
                        onChange={(e) => onUpdateElement({ shadowBlur: parseInt(e.target.value) })}
                        className="w-full accent-[#7d2ae8] cursor-pointer"
                      />
                    </div>

                    {/* Transparencia / Opacidad */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-medium mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Transparencia</span>
                        <span className="font-bold text-[#7d2ae8] dark:text-purple-300">
                          {Math.round(shadowOpacity * 100)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="100"
                        value={Math.round(shadowOpacity * 100)}
                        onChange={(e) => onUpdateElement({ shadowOpacity: parseInt(e.target.value) / 100 })}
                        className="w-full accent-[#7d2ae8] cursor-pointer"
                      />
                    </div>

                    {/* Color de la sombra */}
                    <div>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1.5">
                        Color de la sombra
                      </span>
                      <div className="flex gap-2">
                        {['#000000', '#7d2ae8', '#00c4cc', '#ff007f', '#ff9800', '#2196f3'].map(c => (
                          <button
                            key={c}
                            onClick={() => onUpdateElement({ shadowColor: c })}
                            className={`w-7 h-7 rounded-xl border border-black/10 dark:border-white/10 transition-transform hover:scale-110 cursor-pointer ${
                              shadowColor.toLowerCase() === c.toLowerCase() ? 'ring-2 ring-offset-1 ring-[#7d2ae8]' : ''
                            }`}
                            style={{ backgroundColor: c }}
                            title={c}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* 2. DESENFOQUE TAB */}
            {activeGraphicTab === 'blur' && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    Desenfoque del elemento
                  </span>
                  {graphicBlur > 0 && (
                    <button
                      onClick={() => onUpdateElement({ graphicBlur: 0 })}
                      className="text-[11px] text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Restablecer</span>
                    </button>
                  )}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Desenfoca suavemente los bordes y el contenido del gráfico para dar efecto de profundidad o fondo suave estilo Canva.
                </p>

                <div>
                  <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                    <span className="text-slate-600 dark:text-slate-300">Intensidad de desenfoque</span>
                    <span className="font-bold text-[#7d2ae8] dark:text-purple-300">{graphicBlur}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={graphicBlur}
                    onChange={(e) => onUpdateElement({ graphicBlur: parseInt(e.target.value) })}
                    className="w-full accent-[#7d2ae8] cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* 3. FILTROS Y DUOTONO TAB */}
            {activeGraphicTab === 'filter' && (
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Filtros y duotono
                  </span>
                  {duotoneFilter !== 'none' && (
                    <button
                      onClick={() => onUpdateElement({ duotoneFilter: 'none' })}
                      className="text-[11px] text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Quitar</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'none', label: 'Original', gradient: 'linear-gradient(135deg, #ddd, #999)' },
                    { id: 'warm', label: 'Cálido', gradient: 'linear-gradient(135deg, #ff9a9e, #fecfef)' },
                    { id: 'cool', label: 'Frío / Océano', gradient: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)' },
                    { id: 'vintage', label: 'Vintage Sepia', gradient: 'linear-gradient(135deg, #d4a373, #faedcd)' },
                    { id: 'mono', label: 'Monocromo', gradient: 'linear-gradient(135deg, #2b2d42, #8d99ae)' },
                    { id: 'cyberpunk', label: 'Neón Cyberpunk', gradient: 'linear-gradient(135deg, #ff007f, #00c4cc)' },
                    { id: 'emerald', label: 'Esmeralda', gradient: 'linear-gradient(135deg, #0ba360, #3cba92)' },
                    { id: 'sunset', label: 'Atardecer', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
                  ].map((flt) => {
                    const isSelected = duotoneFilter === flt.id;
                    return (
                      <button
                        key={flt.id}
                        onClick={() => onUpdateElement({ duotoneFilter: flt.id })}
                        className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/50 text-[#7d2ae8] dark:text-purple-300 ring-2 ring-[#7d2ae8]/30 shadow-2xs'
                            : 'border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        <div 
                          className="w-7 h-7 rounded-lg shadow-inner flex-shrink-0"
                          style={{ background: flt.gradient }}
                        />
                        <span className="text-xs font-bold truncate">{flt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
