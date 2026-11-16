import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Sliders, 
  Wand2, 
  Crop as CropIcon, 
  RotateCw, 
  RotateCcw,
  Upload, 
  Check, 
  Sun,
  Contrast,
  Sparkles,
  Type,
  Shapes,
  Layers,
  Trash2,
  Plus,
  Eye,
  EyeOff,
  Square,
  Circle,
  Triangle,
  Star,
  Heart,
  ArrowRight,
  Award,
  MessageSquare,
  FlipHorizontal,
  FlipVertical,
  Download,
  ZoomIn,
  ZoomOut,
  Palette
} from 'lucide-react';
import { CanvasElement, ShapeType } from '../types';

export interface ImageEditorOverlayLayer {
  id: string;
  type: 'text' | 'shape';
  // Position & Dimensions in percentage (0 to 100) relative to image box
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  // Text specific
  text?: string;
  fontSize?: number; // relative base size (e.g. 18 to 72)
  fontFamily?: string;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  // Shape specific
  shapeType?: ShapeType;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  borderRadius?: number;
}

interface ImageEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  element: CanvasElement | null;
  onSave?: (updatedProps: {
    src?: string;
    filter?: {
      brightness?: number;
      contrast?: number;
      saturation?: number;
      blur?: number;
      grayscale?: number;
      sepia?: number;
      hueRotate?: number;
    };
    width?: number;
    height?: number;
    rotation?: number;
  }) => void;
  onApplyChanges?: (updatedProps: {
    src?: string;
    filter?: {
      brightness?: number;
      contrast?: number;
      saturation?: number;
      blur?: number;
      grayscale?: number;
      sepia?: number;
      hueRotate?: number;
    };
    width?: number;
    height?: number;
    rotation?: number;
  }) => void;
}

type EditorTab = 'adjust' | 'filters' | 'crop' | 'text' | 'shapes' | 'layers';
type AspectRatioType = 'free' | '1:1' | '16:9' | '9:16' | '4:3';

interface PresetFilter {
  id: string;
  name: string;
  filter: {
    brightness: number;
    contrast: number;
    saturation: number;
    blur: number;
    grayscale: number;
    sepia: number;
    hueRotate?: number;
  };
}

const PRESET_FILTERS: PresetFilter[] = [
  {
    id: 'original',
    name: 'Original',
    filter: { brightness: 100, contrast: 100, saturation: 100, blur: 0, grayscale: 0, sepia: 0, hueRotate: 0 }
  },
  {
    id: 'vibrant',
    name: 'Vibrante',
    filter: { brightness: 105, contrast: 115, saturation: 160, blur: 0, grayscale: 0, sepia: 0, hueRotate: 0 }
  },
  {
    id: 'vintage',
    name: 'Vintage',
    filter: { brightness: 105, contrast: 110, saturation: 85, blur: 0, grayscale: 0, sepia: 50, hueRotate: 0 }
  },
  {
    id: 'bw',
    name: 'Blanco y Negro',
    filter: { brightness: 105, contrast: 130, saturation: 0, blur: 0, grayscale: 100, sepia: 0, hueRotate: 0 }
  },
  {
    id: 'warm',
    name: 'Cálido Sunset',
    filter: { brightness: 105, contrast: 105, saturation: 120, blur: 0, grayscale: 0, sepia: 30, hueRotate: 0 }
  },
  {
    id: 'dramatic',
    name: 'Dramático Dark',
    filter: { brightness: 88, contrast: 150, saturation: 125, blur: 0, grayscale: 0, sepia: 10, hueRotate: 0 }
  },
  {
    id: 'cool',
    name: 'Frío / Cyber',
    filter: { brightness: 105, contrast: 110, saturation: 135, blur: 0, grayscale: 0, sepia: 0, hueRotate: 180 }
  },
  {
    id: 'soft',
    name: 'Suave / Glow',
    filter: { brightness: 110, contrast: 95, saturation: 105, blur: 1, grayscale: 0, sepia: 0, hueRotate: 0 }
  }
];

const PRESET_COLORS = [
  '#FFFFFF', '#000000', '#7D2AE8', '#00C4CC', '#FF2A68', 
  '#FFB800', '#22C55E', '#3B82F6', '#F97316', '#64748B'
];

const SHAPE_DEFS: { type: ShapeType; label: string; icon: React.FC<{ className?: string }> }[] = [
  { type: 'rectangle', label: 'Rectángulo', icon: Square },
  { type: 'circle', label: 'Círculo', icon: Circle },
  { type: 'triangle', label: 'Triángulo', icon: Triangle },
  { type: 'star', label: 'Estrella', icon: Star },
  { type: 'heart', label: 'Corazón', icon: Heart },
  { type: 'arrow', label: 'Flecha', icon: ArrowRight },
  { type: 'badge', label: 'Insignia', icon: Award },
  { type: 'speech-bubble', label: 'Burbuja', icon: MessageSquare },
];

export const ImageEditorModal: React.FC<ImageEditorModalProps> = ({
  isOpen,
  onClose,
  element,
  onSave,
  onApplyChanges
}) => {
  if (!isOpen || !element) return null;

  // Active Tab
  const [activeTab, setActiveTab] = useState<EditorTab>('adjust');

  // Base image state
  const [currentSrc, setCurrentSrc] = useState<string>(element.src || '');
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);

  // Filters & Adjustments
  const [selectedFilterId, setSelectedFilterId] = useState<string>('original');
  const [brightness, setBrightness] = useState<number>(element.filter?.brightness ?? 100);
  const [contrast, setContrast] = useState<number>(element.filter?.contrast ?? 100);
  const [saturation, setSaturation] = useState<number>(element.filter?.saturation ?? 100);
  const [blur, setBlur] = useState<number>(element.filter?.blur ?? 0);
  const [grayscale, setGrayscale] = useState<number>(element.filter?.grayscale ?? 0);
  const [sepia, setSepia] = useState<number>(element.filter?.sepia ?? 0);
  const [hueRotate, setHueRotate] = useState<number>(element.filter?.hueRotate ?? 0);

  // Crop State
  const [aspectRatio, setAspectRatio] = useState<AspectRatioType>('free');
  const [cropBox, setCropBox] = useState<{ x: number; y: number; width: number; height: number }>({
    x: 10,
    y: 10,
    width: 80,
    height: 80
  });

  // Overlay Layers (Text and Vector Shapes)
  const [layers, setLayers] = useState<ImageEditorOverlayLayer[]>([]);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);

  // Text / Shape creation drafts
  const [newTextContent, setNewTextContent] = useState('Texto en la imagen');
  const [newTextColor, setNewTextColor] = useState('#FFFFFF');
  const [newTextSize, setNewTextSize] = useState(28);
  const [newTextFont, setNewTextFont] = useState("'Montserrat', sans-serif");
  const [newTextBold, setNewTextBold] = useState(true);

  // Shape creation drafts
  const [newShapeFill, setNewShapeFill] = useState('#7D2AE8');
  const [newShapeStroke, setNewShapeStroke] = useState('#FFFFFF');
  const [newShapeStrokeWidth, setNewShapeStrokeWidth] = useState(0);

  // Zoom preview inside editor
  const [previewZoom, setPreviewZoom] = useState<number>(1);
  const [isProcessingBake, setIsProcessingBake] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Sync state when element opens
  useEffect(() => {
    if (element) {
      setCurrentSrc(element.src || '');
      setBrightness(element.filter?.brightness ?? 100);
      setContrast(element.filter?.contrast ?? 100);
      setSaturation(element.filter?.saturation ?? 100);
      setBlur(element.filter?.blur ?? 0);
      setGrayscale(element.filter?.grayscale ?? 0);
      setSepia(element.filter?.sepia ?? 0);
      setHueRotate(element.filter?.hueRotate ?? 0);
      setRotation(0);
      setFlipH(false);
      setFlipV(false);
      setLayers([]);
      setSelectedLayerId(null);
    }
  }, [element]);

  // Adjust crop box when aspect ratio changes
  useEffect(() => {
    if (aspectRatio === '1:1') {
      setCropBox({ x: 15, y: 15, width: 70, height: 70 });
    } else if (aspectRatio === '16:9') {
      setCropBox({ x: 10, y: 25, width: 80, height: 45 });
    } else if (aspectRatio === '9:16') {
      setCropBox({ x: 25, y: 10, width: 50, height: 80 });
    } else if (aspectRatio === '4:3') {
      setCropBox({ x: 10, y: 20, width: 80, height: 60 });
    } else {
      setCropBox({ x: 10, y: 10, width: 80, height: 80 });
    }
  }, [aspectRatio]);

  const applyPresetFilter = (preset: PresetFilter) => {
    setSelectedFilterId(preset.id);
    setBrightness(preset.filter.brightness);
    setContrast(preset.filter.contrast);
    setSaturation(preset.filter.saturation);
    setBlur(preset.filter.blur);
    setGrayscale(preset.filter.grayscale);
    setSepia(preset.filter.sepia);
    setHueRotate(preset.filter.hueRotate || 0);
  };

  const handleReset = () => {
    setSelectedFilterId('original');
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setBlur(0);
    setGrayscale(0);
    setSepia(0);
    setHueRotate(0);
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setAspectRatio('free');
    setLayers([]);
    setSelectedLayerId(null);
  };

  const handleRotateLeft = () => {
    setRotation(prev => (prev - 90 + 360) % 360);
  };

  const handleRotateRight = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleUploadNewPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setCurrentSrc(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Add a Text Layer
  const handleAddTextLayer = () => {
    const newLayer: ImageEditorOverlayLayer = {
      id: `layer-text-${Date.now()}`,
      type: 'text',
      x: 20,
      y: 35 + (layers.length * 8) % 40,
      width: 60,
      height: 20,
      rotation: 0,
      opacity: 1,
      text: newTextContent || 'Mi Texto Destacado',
      fontSize: newTextSize,
      fontFamily: newTextFont,
      color: newTextColor,
      bold: newTextBold,
      textAlign: 'center'
    };
    setLayers(prev => [...prev, newLayer]);
    setSelectedLayerId(newLayer.id);
  };

  // Add a Shape Layer
  const handleAddShapeLayer = (shapeType: ShapeType) => {
    const newLayer: ImageEditorOverlayLayer = {
      id: `layer-shape-${Date.now()}`,
      type: 'shape',
      shapeType,
      x: 30,
      y: 30 + (layers.length * 8) % 40,
      width: 40,
      height: shapeType === 'arrow' ? 20 : 40,
      rotation: 0,
      opacity: 1,
      fillColor: newShapeFill,
      strokeColor: newShapeStroke,
      strokeWidth: newShapeStrokeWidth,
      borderRadius: shapeType === 'rectangle' ? 12 : 0,
    };
    setLayers(prev => [...prev, newLayer]);
    setSelectedLayerId(newLayer.id);
  };

  const updateSelectedLayer = (updates: Partial<ImageEditorOverlayLayer>) => {
    if (!selectedLayerId) return;
    setLayers(prev => prev.map(l => l.id === selectedLayerId ? { ...l, ...updates } : l));
  };

  const deleteSelectedLayer = () => {
    if (!selectedLayerId) return;
    setLayers(prev => prev.filter(l => l.id !== selectedLayerId));
    setSelectedLayerId(null);
  };

  // Crop the image on an off-screen canvas
  const handleApplyCrop = () => {
    if (!imgRef.current) return;
    const img = imgRef.current;

    const canvas = document.createElement('canvas');
    const naturalW = img.naturalWidth || img.width;
    const naturalH = img.naturalHeight || img.height;

    const sourceX = (cropBox.x / 100) * naturalW;
    const sourceY = (cropBox.y / 100) * naturalH;
    const sourceW = (cropBox.width / 100) * naturalW;
    const sourceH = (cropBox.height / 100) * naturalH;

    canvas.width = Math.max(1, sourceW);
    canvas.height = Math.max(1, sourceH);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(
      img,
      sourceX,
      sourceY,
      sourceW,
      sourceH,
      0,
      0,
      sourceW,
      sourceH
    );

    const croppedDataUrl = canvas.toDataURL('image/png');
    setCurrentSrc(croppedDataUrl);
    setAspectRatio('free');
    setCropBox({ x: 5, y: 5, width: 90, height: 90 });
  };

  // Helper to render shapes into canvas context when baking layers & rotations
  const drawShapeOnCanvas = (
    ctx: CanvasRenderingContext2D, 
    layer: ImageEditorOverlayLayer, 
    destW: number, 
    destH: number
  ) => {
    const lx = (layer.x / 100) * destW;
    const ly = (layer.y / 100) * destH;
    const lw = (layer.width / 100) * destW;
    const lh = (layer.height / 100) * destH;

    ctx.save();
    ctx.translate(lx + lw / 2, ly + lh / 2);
    if (layer.rotation) {
      ctx.rotate((layer.rotation * Math.PI) / 180);
    }
    ctx.globalAlpha = layer.opacity ?? 1;

    const shape = layer.shapeType || 'rectangle';
    ctx.fillStyle = layer.fillColor || '#7D2AE8';
    ctx.strokeStyle = layer.strokeColor || 'transparent';
    ctx.lineWidth = layer.strokeWidth || 0;

    const hw = lw / 2;
    const hh = lh / 2;

    if (shape === 'rectangle') {
      const r = layer.borderRadius || 0;
      ctx.beginPath();
      if (r > 0 && typeof ctx.roundRect === 'function') {
        ctx.roundRect(-hw, -hh, lw, lh, r);
      } else {
        ctx.rect(-hw, -hh, lw, lh);
      }
      ctx.fill();
      if (layer.strokeWidth && layer.strokeWidth > 0) ctx.stroke();
    } else if (shape === 'circle') {
      ctx.beginPath();
      ctx.ellipse(0, 0, hw, hh, 0, 0, Math.PI * 2);
      ctx.fill();
      if (layer.strokeWidth && layer.strokeWidth > 0) ctx.stroke();
    } else if (shape === 'triangle') {
      ctx.beginPath();
      ctx.moveTo(0, -hh);
      ctx.lineTo(hw, hh);
      ctx.lineTo(-hw, hh);
      ctx.closePath();
      ctx.fill();
      if (layer.strokeWidth && layer.strokeWidth > 0) ctx.stroke();
    } else if (shape === 'star') {
      ctx.beginPath();
      const points = 5;
      const step = Math.PI / points;
      for (let i = 0; i < 2 * points; i++) {
        const rad = i % 2 === 0 ? hw : hw * 0.45;
        const a = i * step - Math.PI / 2;
        const px = Math.cos(a) * rad;
        const py = Math.sin(a) * rad;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      if (layer.strokeWidth && layer.strokeWidth > 0) ctx.stroke();
    } else if (shape === 'heart') {
      ctx.beginPath();
      const topCurveHeight = lh * 0.3;
      ctx.moveTo(0, hh);
      ctx.bezierCurveTo(-hw, 0, -hw, -hh, 0, -topCurveHeight);
      ctx.bezierCurveTo(hw, -hh, hw, 0, 0, hh);
      ctx.closePath();
      ctx.fill();
      if (layer.strokeWidth && layer.strokeWidth > 0) ctx.stroke();
    } else if (shape === 'arrow') {
      ctx.beginPath();
      ctx.moveTo(-hw, -hh * 0.4);
      ctx.lineTo(hw * 0.2, -hh * 0.4);
      ctx.lineTo(hw * 0.2, -hh);
      ctx.lineTo(hw, 0);
      ctx.lineTo(hw * 0.2, hh);
      ctx.lineTo(hw * 0.2, hh * 0.4);
      ctx.lineTo(-hw, hh * 0.4);
      ctx.closePath();
      ctx.fill();
      if (layer.strokeWidth && layer.strokeWidth > 0) ctx.stroke();
    } else {
      // General fallback rectangle
      ctx.fillRect(-hw, -hh, lw, lh);
    }

    ctx.restore();
  };

  // Helper to render text into canvas context
  const drawTextOnCanvas = (
    ctx: CanvasRenderingContext2D, 
    layer: ImageEditorOverlayLayer, 
    destW: number, 
    destH: number
  ) => {
    if (!layer.text) return;
    const lx = (layer.x / 100) * destW;
    const ly = (layer.y / 100) * destH;
    const lw = (layer.width / 100) * destW;
    const lh = (layer.height / 100) * destH;

    ctx.save();
    ctx.translate(lx + lw / 2, ly + lh / 2);
    if (layer.rotation) {
      ctx.rotate((layer.rotation * Math.PI) / 180);
    }
    ctx.globalAlpha = layer.opacity ?? 1;

    // Scale font proportional to image resolution
    const baseFontSize = layer.fontSize || 28;
    const scaledFontSize = Math.max(12, Math.round(baseFontSize * (destW / 600)));
    const fontWeight = layer.bold ? 'bold' : 'normal';
    const fontStyle = layer.italic ? 'italic' : 'normal';
    ctx.font = `${fontStyle} ${fontWeight} ${scaledFontSize}px ${layer.fontFamily || 'Montserrat, sans-serif'}`;
    ctx.fillStyle = layer.color || '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Drop shadow for crisp readability
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    ctx.fillText(layer.text, 0, 0, lw * 1.5);
    ctx.restore();
  };

  // Bake rotation, flips, and overlay layers into a clean updated dataUrl or filter payload
  const handleSaveAndClose = async () => {
    setIsProcessingBake(true);

    const hasLayers = layers.length > 0;
    const hasRotationOrFlip = rotation !== 0 || flipH || flipV;

    // If layers were added or rotation/flip applied, bake them into the image dataURL
    if (hasLayers || hasRotationOrFlip) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = currentSrc;

      await new Promise<void>((resolve) => {
        if (img.complete) resolve();
        else img.onload = () => resolve();
      });

      const origW = img.naturalWidth || 800;
      const origH = img.naturalHeight || 600;

      // Swap dimensions if rotated 90 or 270 deg
      const isSwapped = rotation === 90 || rotation === 270;
      const destW = isSwapped ? origH : origW;
      const destH = isSwapped ? origW : origH;

      const canvas = document.createElement('canvas');
      canvas.width = destW;
      canvas.height = destH;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.save();
        ctx.translate(destW / 2, destH / 2);
        if (rotation !== 0) ctx.rotate((rotation * Math.PI) / 180);
        if (flipH || flipV) ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
        ctx.drawImage(img, -origW / 2, -origH / 2, origW, origH);
        ctx.restore();

        // Render Vector and Text Layers
        for (const layer of layers) {
          if (layer.type === 'shape') {
            drawShapeOnCanvas(ctx, layer, destW, destH);
          } else if (layer.type === 'text') {
            drawTextOnCanvas(ctx, layer, destW, destH);
          }
        }

        const bakedDataUrl = canvas.toDataURL('image/png');

        const updates = {
          src: bakedDataUrl,
          filter: {
            brightness,
            contrast,
            saturation,
            blur,
            grayscale,
            sepia,
            hueRotate
          }
        };

        if (typeof onSave === 'function') onSave(updates);
        if (typeof onApplyChanges === 'function') onApplyChanges(updates);
        setIsProcessingBake(false);
        onClose();
        return;
      }
    }

    // Default fast save when no new layers or transforms
    const updates = {
      src: currentSrc,
      filter: {
        brightness,
        contrast,
        saturation,
        blur,
        grayscale,
        sepia,
        hueRotate
      }
    };

    if (typeof onSave === 'function') onSave(updates);
    if (typeof onApplyChanges === 'function') onApplyChanges(updates);
    setIsProcessingBake(false);
    onClose();
  };

  const filterStyleString = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hueRotate}deg)`;
  const selectedLayer = layers.find(l => l.id === selectedLayerId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-3 md:p-6 animate-in fade-in duration-200">
      <div 
        id="image-editor-modal"
        className="bg-white dark:bg-[#151822] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-5xl h-[92vh] max-h-[900px] flex flex-col overflow-hidden text-slate-800 dark:text-slate-100"
      >
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-[#1a1e2b] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-[#7d2ae8] dark:text-purple-300 shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Editor de Imágenes Avanzado
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-[#7d2ae8] dark:text-purple-300">
                  Capas & Formas
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Ajustes básicos, recorte, rotación, filtros preestablecidos y capas de texto y vectores
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Upload New Image */}
            <button
              id="editor-btn-upload"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-2xs cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-[#7d2ae8]" />
              <span className="hidden sm:inline">Subir otra foto</span>
            </button>
            <input 
              ref={fileInputRef} 
              type="file" 
              accept="image/*" 
              onChange={handleUploadNewPhoto} 
              className="hidden" 
            />

            {/* Reset All */}
            <button
              id="editor-btn-reset"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-rose-600 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
              title="Restablecer todo al original"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restablecer</span>
            </button>

            <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

            <button
              id="editor-btn-close"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Cerrar editor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* 1. Preview Stage Area */}
          <div className="flex-1 bg-slate-100/80 dark:bg-[#0c0e14] p-4 md:p-8 flex flex-col items-center justify-center overflow-auto relative select-none">
            {/* Quick Toolbar above Canvas (Rotation, Flip, Zoom) */}
            <div className="mb-3 flex items-center gap-2 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full shadow-2xs z-20">
              <button
                id="btn-rotate-ccw"
                onClick={handleRotateLeft}
                className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md transition-colors flex items-center gap-1 text-[11px] font-semibold"
                title="Girar 90° antihorario"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">-90°</span>
              </button>

              <button
                id="btn-rotate-cw"
                onClick={handleRotateRight}
                className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md transition-colors flex items-center gap-1 text-[11px] font-semibold"
                title="Girar 90° horario"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">+90°</span>
              </button>

              <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-0.5"></div>

              <button
                id="btn-flip-h"
                onClick={() => setFlipH(!flipH)}
                className={`p-1.5 rounded-md transition-colors text-[11px] font-semibold flex items-center gap-1 ${
                  flipH ? 'bg-purple-100 text-[#7d2ae8] dark:bg-purple-950/70 dark:text-purple-300' : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
                title="Volteo horizontal"
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Flip H</span>
              </button>

              <button
                id="btn-flip-v"
                onClick={() => setFlipV(!flipV)}
                className={`p-1.5 rounded-md transition-colors text-[11px] font-semibold flex items-center gap-1 ${
                  flipV ? 'bg-purple-100 text-[#7d2ae8] dark:bg-purple-950/70 dark:text-purple-300' : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
                title="Volteo vertical"
              >
                <FlipVertical className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Flip V</span>
              </button>

              <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-0.5"></div>

              {/* Zoom Controls */}
              <button
                onClick={() => setPreviewZoom(z => Math.max(0.6, z - 0.15))}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 rounded"
                title="Reducir zoom"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 w-10 text-center">
                {Math.round(previewZoom * 100)}%
              </span>
              <button
                onClick={() => setPreviewZoom(z => Math.min(2, z + 0.15))}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 rounded"
                title="Aumentar zoom"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Interactive Image Frame */}
            <div 
              ref={stageRef}
              style={{ transform: `scale(${previewZoom})` }}
              className="relative transition-transform duration-100 max-w-full max-h-[500px] flex items-center justify-center shadow-xl rounded-xl overflow-hidden bg-white/60 dark:bg-slate-900/60 border border-slate-300/80 dark:border-slate-700/80"
              onClick={() => setSelectedLayerId(null)}
            >
              {/* Base Image with filter and rotation */}
              <img
                ref={imgRef}
                src={currentSrc}
                alt="Vista previa"
                crossOrigin="anonymous"
                className="max-h-[440px] max-w-full object-contain pointer-events-none transition-all"
                style={{ 
                  filter: filterStyleString,
                  transform: `rotate(${rotation}deg) ${flipH ? 'scaleX(-1)' : ''} ${flipV ? 'scaleY(-1)' : ''}`
                }}
              />

              {/* Cropping box overlay */}
              {activeTab === 'crop' && (
                <div 
                  className="absolute border-2 border-dashed border-cyan-400 bg-cyan-500/20 shadow-outline pointer-events-none transition-all duration-150"
                  style={{
                    left: `${cropBox.x}%`,
                    top: `${cropBox.y}%`,
                    width: `${cropBox.width}%`,
                    height: `${cropBox.height}%`
                  }}
                >
                  <div className="absolute top-2 left-2 bg-slate-900/85 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Área de recorte ({aspectRatio})
                  </div>
                </div>
              )}

              {/* Active Overlay Layers Rendering */}
              {layers.map((layer) => {
                const isSelected = layer.id === selectedLayerId;
                return (
                  <div
                    key={layer.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLayerId(layer.id);
                      if (layer.type === 'text') setActiveTab('text');
                      if (layer.type === 'shape') setActiveTab('shapes');
                    }}
                    style={{
                      left: `${layer.x}%`,
                      top: `${layer.y}%`,
                      width: `${layer.width}%`,
                      height: `${layer.height}%`,
                      transform: `rotate(${layer.rotation}deg)`,
                      opacity: layer.opacity,
                    }}
                    className={`absolute flex items-center justify-center cursor-move select-none group transition-shadow ${
                      isSelected 
                        ? 'ring-2 ring-[#7d2ae8] ring-offset-1 z-30' 
                        : 'hover:ring-1 hover:ring-purple-400/80 z-20'
                    }`}
                  >
                    {/* TEXT LAYER */}
                    {layer.type === 'text' && (
                      <div
                        style={{
                          fontSize: `${layer.fontSize}px`,
                          fontFamily: layer.fontFamily,
                          color: layer.color,
                          fontWeight: layer.bold ? 700 : 400,
                          fontStyle: layer.italic ? 'italic' : 'normal',
                          textAlign: layer.textAlign || 'center',
                          textShadow: '0 2px 4px rgba(0,0,0,0.6)'
                        }}
                        className="w-full text-center px-1 break-words font-medium"
                      >
                        {layer.text}
                      </div>
                    )}

                    {/* SHAPE LAYER */}
                    {layer.type === 'shape' && (
                      <div className="w-full h-full flex items-center justify-center">
                        {layer.shapeType === 'rectangle' && (
                          <div
                            style={{
                              backgroundColor: layer.fillColor,
                              borderColor: layer.strokeColor,
                              borderWidth: `${layer.strokeWidth || 0}px`,
                              borderRadius: `${layer.borderRadius || 0}px`,
                            }}
                            className="w-full h-full shadow-sm"
                          />
                        )}
                        {layer.shapeType === 'circle' && (
                          <div
                            style={{
                              backgroundColor: layer.fillColor,
                              borderColor: layer.strokeColor,
                              borderWidth: `${layer.strokeWidth || 0}px`,
                            }}
                            className="w-full h-full rounded-full shadow-sm"
                          />
                        )}
                        {layer.shapeType === 'triangle' && (
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                            <polygon
                              points="50,5 95,95 5,95"
                              fill={layer.fillColor || '#7D2AE8'}
                              stroke={layer.strokeColor || 'none'}
                              strokeWidth={layer.strokeWidth || 0}
                            />
                          </svg>
                        )}
                        {layer.shapeType === 'star' && (
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                            <polygon
                              points="50,5 64,35 98,35 70,57 81,91 50,70 19,91 30,57 2,35 36,35"
                              fill={layer.fillColor || '#FFB800'}
                              stroke={layer.strokeColor || 'none'}
                              strokeWidth={layer.strokeWidth || 0}
                            />
                          </svg>
                        )}
                        {layer.shapeType === 'heart' && (
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                            <path
                              d="M50,85 C20,60 5,40 5,25 C5,12 15,5 28,5 C37,5 45,10 50,18 C55,10 63,5 72,5 C85,5 95,12 95,25 C95,40 80,60 50,85 Z"
                              fill={layer.fillColor || '#FF2A68'}
                              stroke={layer.strokeColor || 'none'}
                              strokeWidth={layer.strokeWidth || 0}
                            />
                          </svg>
                        )}
                        {layer.shapeType === 'arrow' && (
                          <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow">
                            <polygon
                              points="0,20 60,20 60,5 100,25 60,45 60,30 0,30"
                              fill={layer.fillColor || '#7D2AE8'}
                              stroke={layer.strokeColor || 'none'}
                              strokeWidth={layer.strokeWidth || 0}
                            />
                          </svg>
                        )}
                        {layer.shapeType === 'badge' && (
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                            <path
                              d="M50,0 L61,11 L77,7 L83,23 L98,28 L97,44 L108,56 L100,70 L103,86 L88,92 L82,107 L66,104 L55,115 L45,115 L34,104 L18,107 L12,92 L-3,86 L0,70 L-8,56 L3,44 L2,28 L17,23 L23,7 L39,11 Z"
                              fill={layer.fillColor || '#00C4CC'}
                              transform="scale(0.85) translate(8, 0)"
                            />
                          </svg>
                        )}
                        {layer.shapeType === 'speech-bubble' && (
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                            <path
                              d="M10,20 Q10,10 20,10 L80,10 Q90,10 90,20 L90,65 Q90,75 80,75 L40,75 L20,95 L25,75 L20,75 Q10,75 10,65 Z"
                              fill={layer.fillColor || '#7D2AE8'}
                              stroke={layer.strokeColor || 'none'}
                              strokeWidth={layer.strokeWidth || 0}
                            />
                          </svg>
                        )}
                      </div>
                    )}

                    {/* Drag Handle Tag when selected */}
                    {isSelected && (
                      <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#7d2ae8] text-white flex items-center justify-center shadow cursor-pointer">
                        <span className="text-[10px] font-bold">✓</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Action when cropping */}
            {activeTab === 'crop' && (
              <div className="mt-4 flex items-center gap-3">
                <button
                  id="btn-apply-crop"
                  onClick={handleApplyCrop}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  Aplicar Recorte a la Imagen
                </button>
              </div>
            )}
          </div>

          {/* 2. Controls & Toolset Sidebar */}
          <div className="w-full md:w-88 bg-white dark:bg-[#161922] border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 flex flex-col flex-shrink-0">
            {/* Functional Category Tabs */}
            <div className="grid grid-cols-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#1a1e2b] text-[11px] font-bold">
              <button
                id="tab-adjust"
                onClick={() => setActiveTab('adjust')}
                className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${
                  activeTab === 'adjust'
                    ? 'border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-400 bg-white dark:bg-[#161922]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Ajustes de brillo, contraste, saturación"
              >
                <Sliders className="w-4 h-4" />
                <span>Ajustes</span>
              </button>

              <button
                id="tab-filters"
                onClick={() => setActiveTab('filters')}
                className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${
                  activeTab === 'filters'
                    ? 'border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-400 bg-white dark:bg-[#161922]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Filtros preestablecidos"
              >
                <Wand2 className="w-4 h-4" />
                <span>Filtros</span>
              </button>

              <button
                id="tab-crop"
                onClick={() => setActiveTab('crop')}
                className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${
                  activeTab === 'crop'
                    ? 'border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-400 bg-white dark:bg-[#161922]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Recorte y proporciones"
              >
                <CropIcon className="w-4 h-4" />
                <span>Recorte</span>
              </button>

              <button
                id="tab-text"
                onClick={() => setActiveTab('text')}
                className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${
                  activeTab === 'text'
                    ? 'border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-400 bg-white dark:bg-[#161922]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Añadir capas de texto"
              >
                <Type className="w-4 h-4" />
                <span>Texto</span>
              </button>

              <button
                id="tab-shapes"
                onClick={() => setActiveTab('shapes')}
                className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${
                  activeTab === 'shapes'
                    ? 'border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-400 bg-white dark:bg-[#161922]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Formas vectoriales"
              >
                <Shapes className="w-4 h-4" />
                <span>Formas</span>
              </button>

              <button
                id="tab-layers"
                onClick={() => setActiveTab('layers')}
                className={`py-3 flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${
                  activeTab === 'layers'
                    ? 'border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-400 bg-white dark:bg-[#161922]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Gestión de capas"
              >
                <Layers className="w-4 h-4" />
                <span>Capas ({layers.length})</span>
              </button>
            </div>

            {/* Tab Contents Panel */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4 custom-scrollbar text-xs">
              {/* TAB 1: AJUSTES BÁSICOS (Brillo, Contraste, Saturación, etc.) */}
              {activeTab === 'adjust' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[10px]">
                      Ajustes Fotográficos Básicos
                    </span>
                    <button
                      onClick={() => {
                        setBrightness(100);
                        setContrast(100);
                        setSaturation(100);
                        setBlur(0);
                        setGrayscale(0);
                        setSepia(0);
                        setHueRotate(0);
                      }}
                      className="text-[10px] text-[#7d2ae8] dark:text-purple-400 font-semibold hover:underline"
                    >
                      Resetear sliders
                    </button>
                  </div>

                  {/* Brillo */}
                  <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <Sun className="w-3.5 h-3.5 text-amber-500" />
                        Brillo
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{brightness}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={brightness}
                      onChange={(e) => {
                        setBrightness(Number(e.target.value));
                        setSelectedFilterId('custom');
                      }}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>

                  {/* Contraste */}
                  <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <Contrast className="w-3.5 h-3.5 text-blue-500" />
                        Contraste
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{contrast}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={contrast}
                      onChange={(e) => {
                        setContrast(Number(e.target.value));
                        setSelectedFilterId('custom');
                      }}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>

                  {/* Saturación */}
                  <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                        Saturación
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{saturation}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={saturation}
                      onChange={(e) => {
                        setSaturation(Number(e.target.value));
                        setSelectedFilterId('custom');
                      }}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>

                  {/* Matiz (Hue Rotate) */}
                  <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <Palette className="w-3.5 h-3.5 text-emerald-500" />
                        Matiz de Color (Hue)
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{hueRotate}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={hueRotate}
                      onChange={(e) => {
                        setHueRotate(Number(e.target.value));
                        setSelectedFilterId('custom');
                      }}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>

                  {/* Escala de Grises */}
                  <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-200">
                      <span>Blanco y Negro (Grayscale)</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{grayscale}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={grayscale}
                      onChange={(e) => {
                        setGrayscale(Number(e.target.value));
                        setSelectedFilterId('custom');
                      }}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>

                  {/* Sepia */}
                  <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-200">
                      <span>Tono Cálido Sepia</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{sepia}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sepia}
                      onChange={(e) => {
                        setSepia(Number(e.target.value));
                        setSelectedFilterId('custom');
                      }}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>

                  {/* Desenfoque */}
                  <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-200">
                      <span>Desenfoque (Blur)</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{blur}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={blur}
                      onChange={(e) => {
                        setBlur(Number(e.target.value));
                        setSelectedFilterId('custom');
                      }}
                      className="w-full accent-purple-600 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: FILTROS PREESTABLECIDOS */}
              {activeTab === 'filters' && (
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Colección de Filtros Cinemáticos
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {PRESET_FILTERS.map((preset) => {
                      const isSelected = selectedFilterId === preset.id;
                      const previewStyle = `brightness(${preset.filter.brightness}%) contrast(${preset.filter.contrast}%) saturate(${preset.filter.saturation}%) grayscale(${preset.filter.grayscale}%) sepia(${preset.filter.sepia}%) hue-rotate(${preset.filter.hueRotate || 0}deg)`;
                      return (
                        <button
                          key={preset.id}
                          id={`preset-filter-${preset.id}`}
                          onClick={() => applyPresetFilter(preset)}
                          className={`flex flex-col items-center p-2 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-purple-600 bg-purple-50/70 dark:bg-purple-950/40 ring-2 ring-purple-600/30 shadow-2xs'
                              : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className="w-full h-16 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 mb-2 shadow-2xs">
                            <img
                              src={currentSrc}
                              alt={preset.name}
                              className="w-full h-full object-cover"
                              style={{ filter: previewStyle }}
                            />
                          </div>
                          <span className={`text-xs font-semibold ${isSelected ? 'text-purple-700 dark:text-purple-300 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                            {preset.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: RECORTE Y PROPORCIONES */}
              {activeTab === 'crop' && (
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Formatos y Relación de Aspecto
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'free', label: 'Libre / Original', desc: 'Recorte libre sin restricción de proporción' },
                      { id: '1:1', label: '1:1 Cuadrado', desc: 'Ideal para avatares, feed de Instagram y logos' },
                      { id: '16:9', label: '16:9 Panorámico', desc: 'YouTube, pantallas panorámicas y banners' },
                      { id: '9:16', label: '9:16 Vertical Story', desc: 'Instagram Stories, TikTok y Reels' },
                      { id: '4:3', label: '4:3 Fotografía Estándar', desc: 'Fotografía tradicional y catálogos' }
                    ].map((ratio) => (
                      <button
                        key={ratio.id}
                        id={`crop-ratio-${ratio.id}`}
                        onClick={() => setAspectRatio(ratio.id as AspectRatioType)}
                        className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          aspectRatio === ratio.id
                            ? 'border-cyan-600 bg-cyan-50/70 dark:bg-cyan-950/40 ring-2 ring-cyan-600/30 font-bold text-cyan-800 dark:text-cyan-300'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold">{ratio.label}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">{ratio.desc}</div>
                        </div>
                        {aspectRatio === ratio.id && (
                          <Check className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleApplyCrop}
                      className="w-full py-2.5 px-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                    >
                      <CropIcon className="w-4 h-4" />
                      <span>Cortar Imagen con este Marco</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 4: CAPAS DE TEXTO */}
              {activeTab === 'text' && (
                <div className="space-y-4">
                  <div className="p-3 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-950/40 dark:to-indigo-950/40 rounded-xl border border-purple-200 dark:border-purple-900/50 space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-100">
                      <Type className="w-4 h-4 text-[#7d2ae8]" />
                      <span>Añadir Texto sobre la Imagen</span>
                    </div>
                    <input
                      type="text"
                      value={newTextContent}
                      onChange={(e) => setNewTextContent(e.target.value)}
                      placeholder="Escribe el texto aquí..."
                      className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium focus:outline-none focus:border-[#7d2ae8]"
                    />

                    {/* Quick typography options */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div>
                        <label className="text-[10px] text-slate-500 font-semibold block mb-1">Tipografía</label>
                        <select
                          value={newTextFont}
                          onChange={(e) => setNewTextFont(e.target.value)}
                          className="w-full p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[11px]"
                        >
                          <option value="'Montserrat', sans-serif">Montserrat</option>
                          <option value="'Poppins', sans-serif">Poppins</option>
                          <option value="'Playfair Display', serif">Playfair Display</option>
                          <option value="'Bebas Neue', sans-serif">Bebas Neue</option>
                          <option value="'Caveat', cursive">Caveat</option>
                          <option value="'Space Grotesk', sans-serif">Space Grotesk</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] text-slate-500 font-semibold block mb-1">Tamaño: {newTextSize}px</label>
                        <input
                          type="range"
                          min="16"
                          max="64"
                          value={newTextSize}
                          onChange={(e) => setNewTextSize(Number(e.target.value))}
                          className="w-full accent-purple-600 cursor-pointer mt-1"
                        />
                      </div>
                    </div>

                    {/* Color palette */}
                    <div>
                      <label className="text-[10px] text-slate-500 font-semibold block mb-1">Color del Texto</label>
                      <div className="flex gap-1.5 flex-wrap">
                        {PRESET_COLORS.map(c => (
                          <button
                            key={c}
                            onClick={() => setNewTextColor(c)}
                            style={{ backgroundColor: c }}
                            className={`w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 transition-transform ${
                              newTextColor === c ? 'scale-110 ring-2 ring-[#7d2ae8]' : 'hover:scale-105'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleAddTextLayer}
                      className="w-full py-2 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Insertar Capa de Texto</span>
                    </button>
                  </div>

                  {/* Selected Layer Properties if a text layer is selected */}
                  {selectedLayer && selectedLayer.type === 'text' && (
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[11px] text-purple-700 dark:text-purple-300">
                          Editando Capa de Texto Seleccionada
                        </span>
                        <button
                          onClick={deleteSelectedLayer}
                          className="text-rose-600 hover:text-rose-700 p-1"
                          title="Eliminar capa"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <input
                        type="text"
                        value={selectedLayer.text || ''}
                        onChange={(e) => updateSelectedLayer({ text: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs"
                      />

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-slate-500">Opacidad ({Math.round(selectedLayer.opacity * 100)}%)</label>
                          <input
                            type="range"
                            min="0.1"
                            max="1"
                            step="0.05"
                            value={selectedLayer.opacity}
                            onChange={(e) => updateSelectedLayer({ opacity: Number(e.target.value) })}
                            className="w-full accent-purple-600"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-slate-500">Rotación ({selectedLayer.rotation}°)</label>
                          <input
                            type="range"
                            min="0"
                            max="360"
                            value={selectedLayer.rotation}
                            onChange={(e) => updateSelectedLayer({ rotation: Number(e.target.value) })}
                            className="w-full accent-purple-600"
                          />
                        </div>
                      </div>

                      <div className="flex gap-1.5 flex-wrap pt-1">
                        {PRESET_COLORS.map(c => (
                          <button
                            key={c}
                            onClick={() => updateSelectedLayer({ color: c })}
                            style={{ backgroundColor: c }}
                            className={`w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 ${
                              selectedLayer.color === c ? 'scale-110 ring-2 ring-[#7d2ae8]' : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: FORMAS VECTORIALES */}
              {activeTab === 'shapes' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Selecciona una forma vectorial
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {SHAPE_DEFS.map((sh) => {
                        const IconComp = sh.icon;
                        return (
                          <button
                            key={sh.type}
                            onClick={() => handleAddShapeLayer(sh.type)}
                            className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#7d2ae8] bg-slate-50 dark:bg-slate-800 hover:bg-purple-50/50 dark:hover:bg-purple-950/40 transition-all group cursor-pointer"
                            title={`Añadir ${sh.label}`}
                          >
                            <IconComp className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-[#7d2ae8] group-hover:scale-110 transition-transform" />
                            <span className="text-[9px] font-medium text-slate-600 dark:text-slate-400 mt-1 truncate max-w-full">
                              {sh.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Shape Customization Settings */}
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2.5">
                    <span className="font-bold text-[11px] text-slate-700 dark:text-slate-200 block">
                      Estilo de la Forma
                    </span>

                    {/* Fill Color */}
                    <div>
                      <label className="text-[10px] text-slate-500 font-semibold block mb-1">Color de Relleno</label>
                      <div className="flex gap-1.5 flex-wrap">
                        {PRESET_COLORS.map(c => (
                          <button
                            key={c}
                            onClick={() => {
                              setNewShapeFill(c);
                              if (selectedLayer && selectedLayer.type === 'shape') {
                                updateSelectedLayer({ fillColor: c });
                              }
                            }}
                            style={{ backgroundColor: c }}
                            className={`w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 ${
                              newShapeFill === c ? 'scale-110 ring-2 ring-[#7d2ae8]' : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Stroke Width */}
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>Grosor del Borde</span>
                        <span>{newShapeStrokeWidth}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="8"
                        value={newShapeStrokeWidth}
                        onChange={(e) => {
                          const w = Number(e.target.value);
                          setNewShapeStrokeWidth(w);
                          if (selectedLayer && selectedLayer.type === 'shape') {
                            updateSelectedLayer({ strokeWidth: w });
                          }
                        }}
                        className="w-full accent-purple-600"
                      />
                    </div>
                  </div>

                  {/* Active Shape Layer Controls if selected */}
                  {selectedLayer && selectedLayer.type === 'shape' && (
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[11px] text-purple-700 dark:text-purple-300 capitalize">
                          Forma: {selectedLayer.shapeType}
                        </span>
                        <button
                          onClick={deleteSelectedLayer}
                          className="text-rose-600 hover:text-rose-700 p-1"
                          title="Eliminar forma"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-slate-500">Opacidad ({Math.round(selectedLayer.opacity * 100)}%)</label>
                          <input
                            type="range"
                            min="0.1"
                            max="1"
                            step="0.05"
                            value={selectedLayer.opacity}
                            onChange={(e) => updateSelectedLayer({ opacity: Number(e.target.value) })}
                            className="w-full accent-purple-600"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-slate-500">Rotación ({selectedLayer.rotation}°)</label>
                          <input
                            type="range"
                            min="0"
                            max="360"
                            value={selectedLayer.rotation}
                            onChange={(e) => updateSelectedLayer({ rotation: Number(e.target.value) })}
                            className="w-full accent-purple-600"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 6: GESTIÓN DE TODAS LAS CAPAS */}
              {activeTab === 'layers' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Capas Añadidas ({layers.length})
                    </p>
                    {layers.length > 0 && (
                      <button
                        onClick={() => {
                          setLayers([]);
                          setSelectedLayerId(null);
                        }}
                        className="text-[10px] text-rose-600 font-semibold hover:underline"
                      >
                        Limpiar todas
                      </button>
                    )}
                  </div>

                  {layers.length === 0 ? (
                    <div className="p-6 text-center bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 space-y-2">
                      <Layers className="w-6 h-6 text-slate-300 dark:text-slate-600 mx-auto" />
                      <p className="font-semibold text-slate-600 dark:text-slate-300 text-xs">Sin capas añadidas</p>
                      <p className="text-[10px] text-slate-400">
                        Usa las pestañas Texto o Formas para añadir capas gráficas que se combinarán con tu fotografía.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {layers.map((layer, idx) => {
                        const isSelected = layer.id === selectedLayerId;
                        return (
                          <div
                            key={layer.id}
                            onClick={() => setSelectedLayerId(layer.id)}
                            className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-purple-50 dark:bg-purple-950/50 border-[#7d2ae8] ring-1 ring-[#7d2ae8]'
                                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 flex-shrink-0">
                                {layer.type === 'text' ? <Type className="w-3 h-3" /> : <Shapes className="w-3 h-3" />}
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-xs text-slate-800 dark:text-slate-200 truncate">
                                  {layer.type === 'text' ? (layer.text || 'Capa de Texto') : `Forma (${layer.shapeType})`}
                                </div>
                                <div className="text-[10px] text-slate-400">
                                  Capa #{idx + 1} • Opacidad {Math.round(layer.opacity * 100)}%
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setLayers(prev => prev.filter(l => l.id !== layer.id));
                                if (selectedLayerId === layer.id) setSelectedLayerId(null);
                              }}
                              className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors"
                              title="Eliminar capa"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer with Primary Actions */}
            <div className="p-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#1a1e2b] flex items-center justify-between gap-2">
              <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                {rotation !== 0 && (
                  <span className="bg-purple-100 dark:bg-purple-900/50 text-[#7d2ae8] dark:text-purple-300 px-1.5 py-0.5 rounded font-bold text-[9px]">
                    Rotación {rotation}°
                  </span>
                )}
                {layers.length > 0 && (
                  <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-bold text-[9px]">
                    {layers.length} {layers.length === 1 ? 'capa' : 'capas'}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="btn-cancel-editor"
                  onClick={onClose}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>

                <button
                  id="btn-save-editor"
                  disabled={isProcessingBake}
                  onClick={handleSaveAndClose}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#7d2ae8] hover:bg-[#6a24c5] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Check className="w-4 h-4" />
                  <span>{isProcessingBake ? 'Aplicando...' : 'Guardar en Diseño'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
