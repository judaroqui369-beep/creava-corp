import React, { useState, useRef, useEffect } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Copy, 
  Trash2, 
  Lock, 
  Unlock, 
  BringToFront, 
  SendToBack, 
  ArrowUp, 
  ArrowDown, 
  FlipHorizontal, 
  FlipVertical, 
  Sliders, 
  Type, 
  Palette, 
  Square, 
  Layers,
  Sparkles,
  ChevronDown,
  Plus,
  Minus,
  Maximize2,
  Crop,
  Check,
  Upload,
  RefreshCw
} from 'lucide-react';
import { CanvasElement, TextEffect, CustomFont, ContextualSidebarPanel } from '../types';
import { AVAILABLE_FONTS } from '../data/elements';
import { ColorPickerPopover } from './ColorPickerPopover';
import { FontPickerPopover } from './FontPickerPopover';
import { EffectsPopover } from './EffectsPopover';

interface PropertyToolbarProps {
  selectedElement: CanvasElement | null;
  canvasBackground: { type: 'color' | 'gradient' | 'image'; value: string };
  documentWidth: number;
  documentHeight: number;
  documentColors: string[];
  customFonts?: CustomFont[];
  onOpenFontImporter?: () => void;
  onFontsUpdated?: (fonts: CustomFont[]) => void;
  onUpdateElement: (updates: Partial<CanvasElement>) => void;
  onUpdateBackground: (bg: { type: 'color' | 'gradient' | 'image'; value: string }) => void;
  onDuplicateElement: () => void;
  onDeleteElement: () => void;
  onBringForward: () => void;
  onSendBackward: () => void;
  onBringToFront: () => void;
  onSendToBack: () => void;
  onOpenImageEditor?: () => void;
  activeContextualPanel?: ContextualSidebarPanel;
  onOpenContextualPanel?: (panel: ContextualSidebarPanel) => void;
}

export const PropertyToolbar: React.FC<PropertyToolbarProps> = ({
  selectedElement,
  canvasBackground,
  documentWidth,
  documentHeight,
  documentColors,
  customFonts = [],
  onOpenFontImporter,
  onFontsUpdated,
  onUpdateElement,
  onUpdateBackground,
  onDuplicateElement,
  onDeleteElement,
  onBringForward,
  onSendBackward,
  onBringToFront,
  onSendToBack,
  onOpenImageEditor,
  activeContextualPanel,
  onOpenContextualPanel,
}) => {
  const [showColorPicker, setShowColorPicker] = useState<'fill' | 'stroke' | 'background' | 'effect' | null>(null);
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [showFontSizeMenu, setShowFontSizeMenu] = useState(false);
  const [showSpacingMenu, setShowSpacingMenu] = useState(false);
  const [showEffectsMenu, setShowEffectsMenu] = useState(false);
  const [showFiltersMenu, setShowFiltersMenu] = useState(false);
  const [showPositionMenu, setShowPositionMenu] = useState(false);
  const frameFileInputRef = useRef<HTMLInputElement>(null);

  const handleFrameUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onUpdateElement({ src: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
    if (frameFileInputRef.current) {
      frameFileInputRef.current.value = '';
    }
  };

  const PRESET_FONT_SIZES = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 56, 64, 72, 80, 96, 120, 144];
  const [fontSizeInput, setFontSizeInput] = useState<string>(String(selectedElement?.fontSize || 24));

  useEffect(() => {
    if (selectedElement?.fontSize) {
      setFontSizeInput(String(selectedElement.fontSize));
    }
  }, [selectedElement?.fontSize, selectedElement?.id]);

  const handleApplyFontSize = (size: number) => {
    const clamped = Math.max(6, Math.min(350, Math.round(size)));
    setFontSizeInput(String(clamped));
    if (selectedElement) {
      const minHeight = Math.round(clamped * 1.35);
      onUpdateElement({
        fontSize: clamped,
        height: Math.max(selectedElement.height, minHeight),
      });
    }
  };

  // Close menus on outside click
  const toolbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) {
        setShowColorPicker(null);
        setShowFontMenu(false);
        setShowFontSizeMenu(false);
        setShowSpacingMenu(false);
        setShowEffectsMenu(false);
        setShowFiltersMenu(false);
        setShowPositionMenu(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // When no element is selected -> Canvas background controls
  if (!selectedElement) {
    return (
      <div 
        ref={toolbarRef} 
        className="h-11 bg-white dark:bg-[#151822] border-b border-gray-200 dark:border-slate-800 px-4 flex items-center justify-between text-xs text-gray-700 dark:text-slate-200 shadow-2xs select-none relative z-20 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider text-[11px]">Lienzo:</span>
          
          {/* Background color button */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(showColorPicker === 'background' ? null : 'background')}
              className="flex items-center gap-2 px-2.5 py-1 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-[#7d2ae8] dark:hover:border-purple-400 bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 transition-all"
            >
              <div 
                className="w-4 h-4 rounded-full border border-gray-300 dark:border-slate-600 shadow-2xs" 
                style={{ background: canvasBackground.value }}
              />
              <span className="font-medium text-gray-700 dark:text-slate-200">Fondo de página</span>
            </button>

            {showColorPicker === 'background' && (
              <div className="absolute top-full left-0 mt-2 z-50">
                <ColorPickerPopover
                  currentColor={canvasBackground.value}
                  onChange={(color) => {
                    const isGrad = color.includes('gradient');
                    onUpdateBackground({ type: isGrad ? 'gradient' : 'color', value: color });
                  }}
                  documentColors={documentColors}
                  supportsGradient={true}
                />
              </div>
            )}
          </div>

          <div className="h-4 w-px bg-gray-200 dark:bg-slate-800"></div>

          <span className="text-gray-500 dark:text-slate-400 font-mono text-[11px]">
            {documentWidth} × {documentHeight} px
          </span>
        </div>

        <div className="text-[11px] text-gray-400 dark:text-slate-500 italic hidden sm:inline">
          Selecciona un elemento para ver sus opciones
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={toolbarRef} 
      className="h-11 bg-white dark:bg-[#151822] border-b border-gray-200 dark:border-slate-800 px-3 md:px-4 flex items-center justify-between text-xs text-gray-700 dark:text-slate-200 shadow-2xs select-none relative z-20 overflow-x-auto transition-colors"
    >
      <div className="flex items-center gap-1.5 md:gap-2">
        {/* TEXT SPECIFIC CONTROLS */}
        {selectedElement.type === 'text' && (
          <>
            {/* Font Family Selector Popover */}
            <div className="relative">
              <button
                id="btn-text-font"
                onClick={() => {
                  if (onOpenContextualPanel) {
                    onOpenContextualPanel('fonts');
                    setShowColorPicker(null);
                    setShowEffectsMenu(false);
                    setShowFontMenu(false);
                  } else {
                    setShowFontMenu(!showFontMenu);
                    setShowColorPicker(null);
                    setShowEffectsMenu(false);
                  }
                }}
                className={`flex items-center justify-between gap-1 w-32 md:w-36 px-2.5 py-1 rounded-lg border font-medium truncate transition-all cursor-pointer ${
                  activeContextualPanel === 'fonts'
                    ? 'border-[#7d2ae8] ring-2 ring-[#7d2ae8]/30 bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 font-bold'
                    : 'border-gray-200 dark:border-slate-700 hover:border-[#7d2ae8] bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-100'
                }`}
                title="Tipos de letra"
              >
                <span className="truncate" style={{ fontFamily: selectedElement.fontFamily }}>
                  {customFonts.find(f => f.family === selectedElement.fontFamily)?.name ||
                   AVAILABLE_FONTS.find(f => f.family === selectedElement.fontFamily)?.name || 
                   selectedElement.fontFamily?.replace(/['"]/g, '').split(',')[0] || 
                   'Fuente'}
                </span>
                <ChevronDown className="w-3 h-3 text-gray-400 flex-shrink-0" />
              </button>

              {!onOpenContextualPanel && showFontMenu && (
                <div className="absolute top-full left-0 mt-1.5 z-50">
                  <FontPickerPopover
                    element={selectedElement}
                    customFonts={customFonts}
                    onUpdateElement={onUpdateElement}
                    onOpenFontImporter={onOpenFontImporter}
                    onFontsUpdated={onFontsUpdated}
                    onClose={() => setShowFontMenu(false)}
                  />
                </div>
              )}
            </div>

            {/* Font Size Stepper & Presets Menu */}
            <div className="relative flex items-center">
              <div className="flex items-center border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-200 shadow-2xs">
                <button
                  id="btn-decrease-font-size"
                  onClick={() => handleApplyFontSize((selectedElement.fontSize || 24) - 2)}
                  className="p-1.5 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-600 dark:text-slate-300 cursor-pointer"
                  title="Reducir tamaño (Ctrl + -)"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <div className="relative">
                  <input
                    id="input-font-size"
                    type="text"
                    inputMode="numeric"
                    value={fontSizeInput}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFontSizeInput(val);
                      const parsed = parseInt(val, 10);
                      if (!isNaN(parsed) && parsed >= 6 && parsed <= 350) {
                        const minHeight = Math.round(parsed * 1.35);
                        onUpdateElement({
                          fontSize: parsed,
                          height: Math.max(selectedElement.height, minHeight),
                        });
                      }
                    }}
                    onBlur={() => {
                      const parsed = parseInt(fontSizeInput, 10);
                      if (isNaN(parsed) || parsed < 6) {
                        handleApplyFontSize(selectedElement.fontSize || 24);
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
                        handleApplyFontSize((selectedElement.fontSize || 24) + step);
                      } else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const step = e.shiftKey ? 10 : 2;
                        handleApplyFontSize((selectedElement.fontSize || 24) - step);
                      }
                    }}
                    className="w-10 text-center text-xs font-semibold bg-transparent text-gray-800 dark:text-slate-100 focus:outline-none focus:bg-white dark:focus:bg-slate-900"
                    title="Tamaño de fuente (escribe un número o usa las flechas)"
                  />
                </div>
                <button
                  id="btn-increase-font-size"
                  onClick={() => handleApplyFontSize((selectedElement.fontSize || 24) + 2)}
                  className="p-1.5 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-gray-600 dark:text-slate-300 cursor-pointer"
                  title="Aumentar tamaño (Ctrl + +)"
                >
                  <Plus className="w-3 h-3" />
                </button>
                <button
                  id="btn-font-size-presets"
                  onClick={() => setShowFontSizeMenu(!showFontSizeMenu)}
                  className="px-1 py-1.5 border-l border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-500 dark:text-slate-400 cursor-pointer"
                  title="Seleccionar tamaño rápido"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {showFontSizeMenu && (
                <div className="absolute top-full left-0 mt-1 w-28 max-h-48 overflow-y-auto bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-xl z-50 py-1 text-xs">
                  {PRESET_FONT_SIZES.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => {
                        handleApplyFontSize(sz);
                        setShowFontSizeMenu(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between cursor-pointer ${
                        (selectedElement.fontSize || 24) === sz ? 'font-bold text-[#7d2ae8] dark:text-purple-400 bg-purple-50/50 dark:bg-purple-950/40' : 'text-gray-700 dark:text-slate-200'
                      }`}
                    >
                      <span>{sz} px</span>
                      {(selectedElement.fontSize || 24) === sz && <Check className="w-3 h-3 text-[#7d2ae8] dark:text-purple-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Text Color Picker */}
            <div className="relative">
              <button
                id="btn-text-color"
                onClick={() => {
                  if (onOpenContextualPanel) {
                    onOpenContextualPanel('color');
                    setShowColorPicker(null);
                    setShowFontMenu(false);
                    setShowEffectsMenu(false);
                  } else {
                    setShowColorPicker(showColorPicker === 'fill' ? null : 'fill');
                  }
                }}
                className={`flex items-center gap-1 p-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeContextualPanel === 'color'
                    ? 'border-[#7d2ae8] ring-2 ring-[#7d2ae8]/30 bg-purple-50 dark:bg-purple-950/60'
                    : 'border-gray-200 dark:border-slate-700 hover:border-[#7d2ae8] bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
                title="Color del texto"
              >
                <span className="font-extrabold text-sm px-0.5" style={{ color: selectedElement.color || '#000000' }}>
                  A
                </span>
                <div 
                  className="w-3 h-1 rounded-xs" 
                  style={{ backgroundColor: selectedElement.color || '#000000' }} 
                />
              </button>

              {!onOpenContextualPanel && showColorPicker === 'fill' && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <ColorPickerPopover
                    currentColor={selectedElement.color || '#000000'}
                    onChange={(color) => onUpdateElement({ color })}
                    documentColors={documentColors}
                    supportsGradient={true}
                    onClose={() => setShowColorPicker(null)}
                  />
                </div>
              )}
            </div>

            <div className="h-4 w-px bg-gray-200 mx-0.5"></div>

            {/* Bold, Italic, Underline */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => onUpdateElement({ bold: !selectedElement.bold })}
                className={`p-1.5 rounded-md transition-colors ${
                  selectedElement.bold ? 'bg-purple-50 text-[#7d2ae8]' : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Negrita"
              >
                <Bold className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onUpdateElement({ italic: !selectedElement.italic })}
                className={`p-1.5 rounded-md transition-colors ${
                  selectedElement.italic ? 'bg-purple-50 text-[#7d2ae8]' : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Cursiva"
              >
                <Italic className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onUpdateElement({ underline: !selectedElement.underline })}
                className={`p-1.5 rounded-md transition-colors ${
                  selectedElement.underline ? 'bg-purple-50 text-[#7d2ae8]' : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Subrayado"
              >
                <Underline className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Alignment */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => {
                  const aligns: ('left' | 'center' | 'right')[] = ['left', 'center', 'right'];
                  const nextAlign = aligns[(aligns.indexOf(selectedElement.textAlign || 'left') + 1) % aligns.length];
                  onUpdateElement({ textAlign: nextAlign });
                }}
                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
                title={`Alineación: ${selectedElement.textAlign || 'izquierda'}`}
              >
                {selectedElement.textAlign === 'center' ? (
                  <AlignCenter className="w-3.5 h-3.5" />
                ) : selectedElement.textAlign === 'right' ? (
                  <AlignRight className="w-3.5 h-3.5" />
                ) : (
                  <AlignLeft className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Effects Popover */}
            <div className="relative">
              <button
                id="btn-text-effects"
                onClick={() => {
                  if (onOpenContextualPanel) {
                    onOpenContextualPanel('effects');
                    setShowColorPicker(null);
                    setShowFontMenu(false);
                    setShowEffectsMenu(false);
                  } else {
                    setShowEffectsMenu(!showEffectsMenu);
                    setShowColorPicker(null);
                    setShowFontMenu(false);
                  }
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
                  activeContextualPanel === 'effects'
                    ? 'border-[#7d2ae8] ring-2 ring-[#7d2ae8]/30 bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 font-bold'
                    : selectedElement.effect && selectedElement.effect !== 'none'
                    ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300'
                    : 'border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-300'
                }`}
                title="Efectos de texto estilo Canva"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#7d2ae8] dark:text-purple-400" />
                <span>Efectos</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {!onOpenContextualPanel && showEffectsMenu && (
                <div className="absolute top-full left-0 mt-1.5 z-50">
                  <EffectsPopover
                    element={selectedElement}
                    onUpdateElement={onUpdateElement}
                    onClose={() => setShowEffectsMenu(false)}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {/* SHAPE, VECTOR & GRAPHIC SPECIFIC CONTROLS */}
        {(selectedElement.type === 'shape' || selectedElement.type === 'vector' || selectedElement.type === 'sticker' || !!selectedElement.svgPath) && (
          <>
            {/* Color (Fill Color) Popover */}
            <div className="relative">
              <button
                id="btn-graphic-color"
                onClick={() => {
                  if (onOpenContextualPanel) {
                    onOpenContextualPanel('color');
                    setShowColorPicker(null);
                    setShowFontMenu(false);
                    setShowEffectsMenu(false);
                  } else {
                    setShowColorPicker(showColorPicker === 'fill' ? null : 'fill');
                    setShowFontMenu(false);
                    setShowEffectsMenu(false);
                  }
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  activeContextualPanel === 'color'
                    ? 'border-[#7d2ae8] ring-2 ring-[#7d2ae8]/30 bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 font-bold'
                    : 'border-gray-200 dark:border-slate-700 hover:border-[#7d2ae8] bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
                title="Color del gráfico"
              >
                <div 
                  className="w-4 h-4 rounded-md border border-gray-300 dark:border-slate-600 shadow-2xs" 
                  style={{ 
                    background: (selectedElement.fillColor || '#7d2ae8').includes('gradient') ? (selectedElement.fillColor || '#7d2ae8') : undefined,
                    backgroundColor: !(selectedElement.fillColor || '#7d2ae8').includes('gradient') ? (selectedElement.fillColor || '#7d2ae8') : undefined
                  }} 
                />
                <span className="font-semibold text-[11px] text-gray-700 dark:text-slate-200">Color</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {!onOpenContextualPanel && showColorPicker === 'fill' && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <ColorPickerPopover
                    title="Color del gráfico"
                    currentColor={selectedElement.fillColor || '#7d2ae8'}
                    onChange={(color) => onUpdateElement({ fillColor: color })}
                    documentColors={documentColors}
                    supportsGradient={true}
                    onClose={() => setShowColorPicker(null)}
                  />
                </div>
              )}
            </div>

            {/* Stroke / Border Color Popover */}
            <div className="relative">
              <button
                id="btn-graphic-border"
                onClick={() => {
                  setShowColorPicker(showColorPicker === 'stroke' ? null : 'stroke');
                  setShowFontMenu(false);
                  setShowEffectsMenu(false);
                }}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-[#7d2ae8] bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                title="Borde del elemento"
              >
                <div 
                  className="w-4 h-4 rounded-md border-2" 
                  style={{ borderColor: selectedElement.strokeColor || '#000000' }} 
                />
                <span className="font-medium text-[11px] text-gray-700 dark:text-slate-200">Borde</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {showColorPicker === 'stroke' && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <ColorPickerPopover
                    title="Color del borde"
                    currentColor={selectedElement.strokeColor || '#000000'}
                    onChange={(color) => onUpdateElement({ strokeColor: color })}
                    documentColors={documentColors}
                    supportsGradient={false}
                    onClose={() => setShowColorPicker(null)}
                  />
                </div>
              )}
            </div>

            {/* Stroke Width */}
            <div className="flex items-center gap-1 border border-gray-200 dark:border-slate-700 rounded-lg px-2 py-1 bg-gray-50 dark:bg-slate-800">
              <span className="text-[10px] text-gray-400 dark:text-slate-400">Grosor</span>
              <input
                type="number"
                min="0"
                max="30"
                value={selectedElement.strokeWidth || 0}
                onChange={(e) => onUpdateElement({ strokeWidth: Math.max(0, parseInt(e.target.value) || 0) })}
                className="w-8 text-center text-xs font-semibold focus:outline-none bg-transparent text-slate-800 dark:text-slate-100"
              />
            </div>

            {/* Corner Radius (for rectangle) */}
            {selectedElement.shapeType === 'rectangle' && (
              <div className="flex items-center gap-1 border border-gray-200 dark:border-slate-700 rounded-lg px-2 py-1 bg-gray-50 dark:bg-slate-800">
                <span className="text-[10px] text-gray-400 dark:text-slate-400">Radio</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={selectedElement.borderRadius || 0}
                  onChange={(e) => onUpdateElement({ borderRadius: Math.max(0, parseInt(e.target.value) || 0) })}
                  className="w-8 text-center text-xs font-semibold focus:outline-none bg-transparent text-slate-800 dark:text-slate-100"
                />
              </div>
            )}

            <div className="h-4 w-px bg-gray-200 dark:bg-slate-700 mx-0.5"></div>

            {/* EFECTOS (Effects mini-dropdown like Canva for graphics) */}
            <div className="relative">
              <button
                id="btn-graphic-effects"
                onClick={() => {
                  if (onOpenContextualPanel) {
                    onOpenContextualPanel('effects');
                    setShowColorPicker(null);
                    setShowFontMenu(false);
                    setShowEffectsMenu(false);
                  } else {
                    setShowEffectsMenu(!showEffectsMenu);
                    setShowColorPicker(null);
                    setShowFontMenu(false);
                  }
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
                  activeContextualPanel === 'effects'
                    ? 'border-[#7d2ae8] ring-2 ring-[#7d2ae8]/30 bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 font-bold'
                    : (selectedElement.shadowEffect && selectedElement.shadowEffect !== 'none') || selectedElement.graphicBlur || selectedElement.duotoneFilter
                    ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300'
                    : 'border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200'
                }`}
                title="Efectos de sombras, desenfoque y filtros"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#7d2ae8] dark:text-purple-400" />
                <span>Efectos</span>
                {Boolean((selectedElement.shadowEffect && selectedElement.shadowEffect !== 'none') || selectedElement.graphicBlur || selectedElement.duotoneFilter) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7d2ae8] dark:bg-purple-400" />
                )}
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {!onOpenContextualPanel && showEffectsMenu && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <EffectsPopover
                    element={selectedElement}
                    onUpdateElement={onUpdateElement}
                    onClose={() => setShowEffectsMenu(false)}
                  />
                </div>
              )}
            </div>

            {/* TIPOS DE LETRA (Font mini-dropdown like Canva for graphic/shape text) */}
            <div className="relative">
              <button
                id="btn-graphic-fonts"
                onClick={() => {
                  if (onOpenContextualPanel) {
                    onOpenContextualPanel('fonts');
                    setShowColorPicker(null);
                    setShowFontMenu(false);
                    setShowEffectsMenu(false);
                  } else {
                    setShowFontMenu(!showFontMenu);
                    setShowColorPicker(null);
                    setShowEffectsMenu(false);
                  }
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
                  activeContextualPanel === 'fonts'
                    ? 'border-[#7d2ae8] ring-2 ring-[#7d2ae8]/30 bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300 font-bold'
                    : selectedElement.content
                    ? 'border-[#7d2ae8] bg-purple-50 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-300'
                    : 'border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200'
                }`}
                title="Tipografía y texto en la forma"
              >
                <Type className="w-3.5 h-3.5 text-[#7d2ae8] dark:text-purple-400" />
                <span className="truncate max-w-[90px]">
                  {selectedElement.content 
                    ? (selectedElement.fontFamily?.replace(/['"]/g, '').split(',')[0] || 'Texto')
                    : 'Tipos de letra'}
                </span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {!onOpenContextualPanel && showFontMenu && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <FontPickerPopover
                    element={selectedElement}
                    customFonts={customFonts}
                    onUpdateElement={onUpdateElement}
                    onOpenFontImporter={onOpenFontImporter}
                    onFontsUpdated={onFontsUpdated}
                    onClose={() => setShowFontMenu(false)}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {/* IMAGE SPECIFIC CONTROLS */}
        {selectedElement.type === 'image' && (
          <>
            {/* Open Full Studio / Crop Modal */}
            {onOpenImageEditor && (
              <button
                id="btn-open-image-editor"
                onClick={onOpenImageEditor}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-[11px] shadow-2xs transition-all hover:scale-105"
                title="Abrir editor de imágenes avanzado (filtros, ajustes, recorte, capas)"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Editor Avanzado</span>
              </button>
            )}

            {/* Image Filters Popover */}
            <div className="relative">
              <button
                onClick={() => setShowFiltersMenu(!showFiltersMenu)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-gray-200 hover:border-[#7d2ae8] bg-gray-50 hover:bg-gray-100 transition-colors text-[11px] font-semibold text-gray-700"
              >
                <Sliders className="w-3.5 h-3.5 text-[#7d2ae8]" />
                <span>Ajustar imagen</span>
              </button>

              {showFiltersMenu && (
                <div className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50">
                  <span className="text-xs font-bold text-gray-800 block mb-3">Filtros y Ajustes</span>
                  
                  {/* Brightness */}
                  <div className="mb-2.5">
                    <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                      <span>Brillo</span>
                      <span>{selectedElement.filter?.brightness ?? 100}%</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      value={selectedElement.filter?.brightness ?? 100}
                      onChange={(e) => onUpdateElement({
                        filter: { ...selectedElement.filter, brightness: parseInt(e.target.value) }
                      })}
                      className="w-full accent-[#7d2ae8]"
                    />
                  </div>

                  {/* Contrast */}
                  <div className="mb-2.5">
                    <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                      <span>Contraste</span>
                      <span>{selectedElement.filter?.contrast ?? 100}%</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      value={selectedElement.filter?.contrast ?? 100}
                      onChange={(e) => onUpdateElement({
                        filter: { ...selectedElement.filter, contrast: parseInt(e.target.value) }
                      })}
                      className="w-full accent-[#7d2ae8]"
                    />
                  </div>

                  {/* Saturation */}
                  <div className="mb-2.5">
                    <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                      <span>Saturación</span>
                      <span>{selectedElement.filter?.saturation ?? 100}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={selectedElement.filter?.saturation ?? 100}
                      onChange={(e) => onUpdateElement({
                        filter: { ...selectedElement.filter, saturation: parseInt(e.target.value) }
                      })}
                      className="w-full accent-[#7d2ae8]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Flip Horizontal / Vertical */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => onUpdateElement({ flipH: !selectedElement.flipH })}
                className={`p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-colors ${
                  selectedElement.flipH ? 'bg-purple-50 text-[#7d2ae8]' : ''
                }`}
                title="Voltear horizontalmente"
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onUpdateElement({ flipV: !selectedElement.flipV })}
                className={`p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-colors ${
                  selectedElement.flipV ? 'bg-purple-50 text-[#7d2ae8]' : ''
                }`}
                title="Voltear verticalmente"
              >
                <FlipVertical className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}

        {/* FRAME SPECIFIC CONTROLS (Canva Style Photo Frame) */}
        {selectedElement.type === 'frame' && (
          <>
            <input
              type="file"
              ref={frameFileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFrameUpload}
            />

            {/* Upload or Change Photo */}
            <button
              onClick={() => frameFileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-semibold text-[11px] shadow-2xs transition-all hover:scale-105 cursor-pointer"
              title={selectedElement.src ? "Reemplazar la foto dentro del marco (o pega con Ctrl+V)" : "Cargar una foto o pegar directamente con Ctrl+V"}
            >
              {selectedElement.src ? <RefreshCw className="w-3.5 h-3.5" /> : <Upload className="w-3.5 h-3.5" />}
              <span>{selectedElement.src ? 'Cambiar foto' : 'Poner foto'}</span>
            </button>

            {/* If photo is inside frame: Option to remove photo (revert to Canva placeholder) */}
            {selectedElement.src && (
              <button
                onClick={() => onUpdateElement({ src: undefined })}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-rose-400 hover:bg-rose-50 text-rose-600 dark:text-rose-400 transition-colors text-[11px] font-medium cursor-pointer"
                title="Quitar foto y dejar marco vacío"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Quitar foto</span>
              </button>
            )}

            {/* If photo inside: Image Filters & Adjustments */}
            {selectedElement.src && (
              <div className="relative">
                <button
                  onClick={() => setShowFiltersMenu(!showFiltersMenu)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-gray-200 hover:border-[#7d2ae8] bg-gray-50 hover:bg-gray-100 transition-colors text-[11px] font-semibold text-gray-700 cursor-pointer"
                >
                  <Sliders className="w-3.5 h-3.5 text-sky-600" />
                  <span>Ajustar foto</span>
                </button>

                {showFiltersMenu && (
                  <div className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50">
                    <span className="text-xs font-bold text-gray-800 block mb-3">Ajustes de la foto</span>
                    
                    {/* Brightness */}
                    <div className="mb-2.5">
                      <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                        <span>Brillo</span>
                        <span>{selectedElement.filter?.brightness ?? 100}%</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="150"
                        value={selectedElement.filter?.brightness ?? 100}
                        onChange={(e) => onUpdateElement({
                          filter: { ...selectedElement.filter, brightness: parseInt(e.target.value) }
                        })}
                        className="w-full accent-sky-600"
                      />
                    </div>

                    {/* Contrast */}
                    <div className="mb-2.5">
                      <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                        <span>Contraste</span>
                        <span>{selectedElement.filter?.contrast ?? 100}%</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="150"
                        value={selectedElement.filter?.contrast ?? 100}
                        onChange={(e) => onUpdateElement({
                          filter: { ...selectedElement.filter, contrast: parseInt(e.target.value) }
                        })}
                        className="w-full accent-sky-600"
                      />
                    </div>

                    {/* Saturation */}
                    <div className="mb-2.5">
                      <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                        <span>Saturación</span>
                        <span>{selectedElement.filter?.saturation ?? 100}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={selectedElement.filter?.saturation ?? 100}
                        onChange={(e) => onUpdateElement({
                          filter: { ...selectedElement.filter, saturation: parseInt(e.target.value) }
                        })}
                        className="w-full accent-sky-600"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Frame Stroke / Border color */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowColorPicker(showColorPicker === 'stroke' ? null : 'stroke');
                  setShowFontMenu(false);
                  setShowEffectsMenu(false);
                }}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-[#7d2ae8] bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                title="Color del borde del marco"
              >
                <div 
                  className="w-4 h-4 rounded-md border-2" 
                  style={{ borderColor: selectedElement.strokeColor || '#7d2ae8' }} 
                />
                <span className="font-medium text-[11px] text-gray-700 dark:text-slate-200">Borde</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {showColorPicker === 'stroke' && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <ColorPickerPopover
                    title="Color del borde del marco"
                    currentColor={selectedElement.strokeColor || '#7d2ae8'}
                    onChange={(color) => onUpdateElement({ strokeColor: color })}
                    documentColors={documentColors}
                    supportsGradient={false}
                    onClose={() => setShowColorPicker(null)}
                  />
                </div>
              )}
            </div>

            {/* Frame Stroke Width */}
            <div className="flex items-center gap-1 border border-gray-200 dark:border-slate-700 rounded-lg px-2 py-1 bg-gray-50 dark:bg-slate-800">
              <span className="text-[10px] text-gray-400 dark:text-slate-400">Grosor</span>
              <input
                type="number"
                min="0"
                max="24"
                value={selectedElement.strokeWidth || 0}
                onChange={(e) => onUpdateElement({ strokeWidth: Math.max(0, parseInt(e.target.value) || 0) })}
                className="w-8 text-center text-xs font-semibold focus:outline-none bg-transparent text-slate-800 dark:text-slate-100"
              />
            </div>

            {/* Flip Photo */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => onUpdateElement({ flipH: !selectedElement.flipH })}
                className={`p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-colors ${
                  selectedElement.flipH ? 'bg-sky-50 text-sky-600' : ''
                }`}
                title="Voltear horizontalmente"
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onUpdateElement({ flipV: !selectedElement.flipV })}
                className={`p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-colors ${
                  selectedElement.flipV ? 'bg-sky-50 text-sky-600' : ''
                }`}
                title="Voltear verticalmente"
              >
                <FlipVertical className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}

        <div className="h-4 w-px bg-gray-200 mx-0.5"></div>

        {/* Opacity / Transparency slider */}
        <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-lg border border-gray-200">
          <span className="text-[10px] text-gray-500 font-medium">Opacidad</span>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={selectedElement.opacity}
            onChange={(e) => onUpdateElement({ opacity: parseFloat(e.target.value) })}
            className="w-16 accent-[#7d2ae8]"
          />
          <span className="text-[10px] font-mono text-gray-600 w-7 text-right">
            {Math.round(selectedElement.opacity * 100)}%
          </span>
        </div>

        {/* Position / Layer dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowPositionMenu(!showPositionMenu)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-gray-200 hover:border-[#7d2ae8] bg-gray-50 hover:bg-gray-100 transition-colors text-[11px] font-semibold text-gray-700"
          >
            <Layers className="w-3.5 h-3.5 text-[#7d2ae8]" />
            <span>Posición</span>
          </button>

          {showPositionMenu && (
            <div className="absolute top-full left-0 mt-1.5 w-44 bg-white rounded-xl shadow-xl border border-gray-200 py-1.5 z-50 text-xs">
              <button
                onClick={() => {
                  onBringForward();
                  setShowPositionMenu(false);
                }}
                className="w-full px-3 py-1.5 flex items-center gap-2 hover:bg-purple-50 text-left transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#7d2ae8]" />
                <span>Adelante</span>
              </button>
              <button
                onClick={() => {
                  onBringToFront();
                  setShowPositionMenu(false);
                }}
                className="w-full px-3 py-1.5 flex items-center gap-2 hover:bg-purple-50 text-left transition-colors"
              >
                <BringToFront className="w-3.5 h-3.5 text-[#7d2ae8]" />
                <span>Traer al frente</span>
              </button>
              <div className="h-px bg-gray-100 my-1"></div>
              <button
                onClick={() => {
                  onSendBackward();
                  setShowPositionMenu(false);
                }}
                className="w-full px-3 py-1.5 flex items-center gap-2 hover:bg-purple-50 text-left transition-colors"
              >
                <ArrowDown className="w-3.5 h-3.5 text-gray-600" />
                <span>Atrás</span>
              </button>
              <button
                onClick={() => {
                  onSendToBack();
                  setShowPositionMenu(false);
                }}
                className="w-full px-3 py-1.5 flex items-center gap-2 hover:bg-purple-50 text-left transition-colors"
              >
                <SendToBack className="w-3.5 h-3.5 text-gray-600" />
                <span>Enviar al fondo</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right side element actions: Duplicate, Lock, Delete */}
      <div className="flex items-center gap-1">
        <button
          onClick={onDuplicateElement}
          className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
          title="Duplicar elemento (Ctrl+D)"
        >
          <Copy className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => onUpdateElement({ locked: !selectedElement.locked })}
          className={`p-1.5 rounded-md transition-colors ${
            selectedElement.locked ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100 text-gray-600'
          }`}
          title={selectedElement.locked ? 'Desbloquear' : 'Bloquear'}
        >
          {selectedElement.locked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={onDeleteElement}
          className="p-1.5 rounded-md hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors"
          title="Eliminar (Supr / Backspace)"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
