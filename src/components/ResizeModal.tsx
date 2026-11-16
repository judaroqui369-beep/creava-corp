import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { PRESET_SIZES } from '../data/elements';

interface ResizeModalProps {
  currentWidth: number;
  currentHeight: number;
  onResize: (newWidth: number, newHeight: number) => void;
  onClose: () => void;
}

export const ResizeModal: React.FC<ResizeModalProps> = ({
  currentWidth,
  currentHeight,
  onResize,
  onClose
}) => {
  const [width, setWidth] = useState(currentWidth);
  const [height, setHeight] = useState(currentHeight);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const handleApplyPreset = (preset: typeof PRESET_SIZES[0]) => {
    setSelectedPreset(preset.id);
    setWidth(preset.width);
    setHeight(preset.height);
  };

  const handleConfirm = () => {
    if (width > 50 && height > 50) {
      onResize(width, height);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7d2ae8] to-[#00c4cc] flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-[#0e1318] text-lg">Redimensionar diseño</h3>
              <p className="text-xs text-gray-500">Adapta tu lienzo a cualquier red social o formato</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Custom dimensions */}
          <div className="mb-6">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
              Tamaño personalizado (px)
            </label>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <span className="text-xs text-gray-400 block mb-1">Ancho</span>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Math.max(100, parseInt(e.target.value) || 100))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#7d2ae8] focus:ring-1 focus:ring-[#7d2ae8]"
                />
              </div>
              <span className="text-gray-400 font-bold mt-5">×</span>
              <div className="flex-1">
                <span className="text-xs text-gray-400 block mb-1">Alto</span>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Math.max(100, parseInt(e.target.value) || 100))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#7d2ae8] focus:ring-1 focus:ring-[#7d2ae8]"
                />
              </div>
            </div>
          </div>

          {/* Presets list */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
              Formatos populares
            </label>
            <div className="grid grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
              {PRESET_SIZES.map((preset) => {
                const isSelected = width === preset.width && height === preset.height;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleApplyPreset(preset)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#7d2ae8] bg-purple-50/70 ring-1 ring-[#7d2ae8]'
                        : 'border-gray-200 hover:border-[#7d2ae8]/50 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-gray-900 truncate">
                        {preset.name}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-[#7d2ae8] flex-shrink-0" />}
                    </div>
                    <span className="text-[11px] text-gray-500 font-mono">
                      {preset.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-200/60 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#7d2ae8] hover:bg-[#6a24c5] rounded-lg shadow-xs hover:shadow-sm transition-all flex items-center gap-2"
          >
            Redimensionar
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
