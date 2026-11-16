import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { DesignDocument, CanvasElement } from '../types';

interface PresentationModalProps {
  document: DesignDocument;
  initialPageIndex?: number;
  onClose: () => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({
  document: doc,
  initialPageIndex = 0,
  onClose
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const currentPage = doc.pages[currentPageIndex] || doc.pages[0];

  // Measure container dimensions dynamically with ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(el);
    window.addEventListener('resize', updateSize);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // Sync fullscreen state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter' || e.key === 'PageDown') {
        setCurrentPageIndex(prev => Math.min(doc.pages.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
        setCurrentPageIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === 'Home') {
        setCurrentPageIndex(0);
      } else if (e.key === 'End') {
        setCurrentPageIndex(doc.pages.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [doc.pages.length, onClose]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  // Calculate proportional scale to fit container cleanly with breathing room for controls
  const padX = 140; // 70px on each side so prev/next arrow buttons never overlap content
  const padY = 32;  // 16px top and bottom margin
  const availW = Math.max(100, (containerSize.width || window.innerWidth) - padX);
  const availH = Math.max(100, (containerSize.height || window.innerHeight - 120) - padY);

  const scale = Math.min(availW / doc.width, availH / doc.height);
  const scaledWidth = Math.max(1, Math.round(doc.width * scale));
  const scaledHeight = Math.max(1, Math.round(doc.height * scale));

  const getBackgroundStyle = () => {
    if (!currentPage?.background) return '#ffffff';
    if (currentPage.background.type === 'gradient') {
      return currentPage.background.value;
    }
    if (currentPage.background.type === 'image') {
      return `url("${currentPage.background.value}") center/cover no-repeat`;
    }
    return currentPage.background.value || '#ffffff';
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0c0f12] flex flex-col items-center justify-between p-4 sm:p-6 select-none overflow-hidden">
      {/* Top bar controls */}
      <div className="w-full flex items-center justify-between text-gray-400 z-20 flex-shrink-0 mb-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-white tracking-wide truncate max-w-xs sm:max-w-md">
            {doc.title}
          </span>
          <span className="text-xs bg-white/10 px-2.5 py-1 rounded-md text-gray-200 font-medium whitespace-nowrap">
            {currentPageIndex + 1} / {doc.pages.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            id="btn-presentation-fullscreen"
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <button
            id="btn-presentation-close"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Salir (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main presentation slide view with exact centering */}
      <div 
        ref={containerRef}
        className="flex-1 flex items-center justify-center w-full relative overflow-hidden min-h-0"
      >
        {/* Prev button */}
        <button
          id="btn-presentation-prev"
          onClick={() => setCurrentPageIndex(prev => Math.max(0, prev - 1))}
          disabled={currentPageIndex === 0}
          className={`absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/15 hover:bg-[#7d2ae8] transition-all cursor-pointer ${
            currentPageIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 active:scale-95 shadow-lg'
          }`}
          title="Página anterior (←)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Artboard: outer dimensioned box ensures mathematically perfect flex centering without layout overflow */}
        <div
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
          }}
          className="relative shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-lg overflow-hidden flex-shrink-0 transition-all duration-100 ease-out"
        >
          <div
            style={{
              width: `${doc.width}px`,
              height: `${doc.height}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
              background: getBackgroundStyle(),
            }}
            className="overflow-hidden"
          >
            {currentPage.elements
              .filter(el => !el.hidden)
              .sort((a, b) => a.zIndex - b.zIndex)
              .map(renderPresentationElement)}
          </div>
        </div>

        {/* Next button */}
        <button
          id="btn-presentation-next"
          onClick={() => setCurrentPageIndex(prev => Math.min(doc.pages.length - 1, prev + 1))}
          disabled={currentPageIndex === doc.pages.length - 1}
          className={`absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/15 hover:bg-[#7d2ae8] transition-all cursor-pointer ${
            currentPageIndex === doc.pages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 active:scale-95 shadow-lg'
          }`}
          title="Página siguiente (→)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom controls / page navigation indicator */}
      <div className="flex items-center gap-2 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex-shrink-0 mt-2">
        {doc.pages.map((_, idx) => (
          <button
            key={idx}
            id={`btn-presentation-page-${idx}`}
            onClick={() => setCurrentPageIndex(idx)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              currentPageIndex === idx
                ? 'bg-[#7d2ae8] w-7'
                : 'bg-white/30 hover:bg-white/60 w-2.5'
            }`}
            title={`Ir a página ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

function getGraphicFilter(el: CanvasElement) {
  const parts: string[] = [];
  if (el.graphicBlur) parts.push(`blur(${el.graphicBlur}px)`);
  if (el.shadowEffect && el.shadowEffect !== 'none') {
    const color = el.shadowColor || 'rgba(0,0,0,0.5)';
    const ox = el.shadowOffsetX ?? 4;
    const oy = el.shadowOffsetY ?? 4;
    const blur = el.shadowBlur ?? 8;
    if (el.shadowEffect === 'drop' || el.shadowEffect === 'lift') {
      parts.push(`drop-shadow(${ox}px ${oy}px ${blur}px ${color})`);
    } else if (el.shadowEffect === 'glow' || el.shadowEffect === 'neon') {
      parts.push(`drop-shadow(0 0 ${blur}px ${color})`);
    }
  }
  return parts.length > 0 ? parts.join(' ') : undefined;
}

function renderPresentationElement(el: CanvasElement) {
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    left: el.x,
    top: el.y,
    width: el.width,
    height: el.height,
    transform: `rotate(${el.rotation || 0}deg)`,
    opacity: el.opacity ?? 1,
    zIndex: el.zIndex || 1,
  };

  if (el.type === 'text') {
    return (
      <div
        key={el.id}
        style={{
          ...baseStyle,
          fontSize: el.fontSize || 24,
          fontFamily: el.fontFamily || 'Inter, sans-serif',
          color: el.color || '#000000',
          textAlign: el.textAlign || 'left',
          fontWeight: el.bold ? 700 : 400,
          fontStyle: el.italic ? 'italic' : 'normal',
          textDecoration: el.underline ? 'underline' : 'none',
          letterSpacing: el.letterSpacing ? `${el.letterSpacing}px` : 'normal',
          lineHeight: el.lineHeight || 1.2,
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          textShadow: el.effect === 'neon' 
            ? `0 0 10px ${el.effectColor || '#8B3DFF'}, 0 0 20px ${el.effectColor || '#8B3DFF'}, 0 0 30px ${el.effectColor || '#8B3DFF'}`
            : el.effect === 'shadow'
            ? '2px 2px 4px rgba(0,0,0,0.5)'
            : el.effect === 'lift'
            ? '0 8px 16px rgba(0,0,0,0.3)'
            : el.effect === 'hollow'
            ? `1px 1px 0 ${el.color}, -1px -1px 0 ${el.color}, 1px -1px 0 ${el.color}, -1px 1px 0 ${el.color}`
            : 'none',
        }}
        className={`w-full h-full select-none ${el.effect === 'background' ? 'p-2 rounded-lg' : ''}`}
      >
        {el.content}
      </div>
    );
  }

  if (el.type === 'shape') {
    return (
      <div 
        key={el.id} 
        style={{ ...baseStyle, filter: getGraphicFilter(el) }}
        className="w-full h-full relative"
      >
        {(!el.shapeType || el.shapeType === 'rectangle') && (
          <div
            style={{
              backgroundColor: el.fillColor,
              borderColor: el.strokeColor || 'transparent',
              borderWidth: el.strokeWidth || 0,
              borderStyle: el.strokeWidth ? 'solid' : 'none',
              borderRadius: `${el.borderRadius || 0}px`,
            }}
            className="w-full h-full"
          />
        )}
        {el.shapeType === 'circle' && (
          <div
            style={{
              backgroundColor: el.fillColor,
              borderColor: el.strokeColor || 'transparent',
              borderWidth: el.strokeWidth || 0,
              borderStyle: el.strokeWidth ? 'solid' : 'none',
            }}
            className="w-full h-full rounded-full"
          />
        )}
        {el.shapeType === 'triangle' && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,5 95,95 5,95"
              fill={el.fillColor || '#8B3DFF'}
              stroke={el.strokeColor || 'none'}
              strokeWidth={el.strokeWidth || 0}
            />
          </svg>
        )}
        {el.shapeType === 'star' && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,5 64,35 98,35 70,57 81,91 50,70 19,91 30,57 2,35 36,35"
              fill={el.fillColor || '#FFB800'}
              stroke={el.strokeColor || 'none'}
              strokeWidth={el.strokeWidth || 0}
            />
          </svg>
        )}
        {el.shapeType === 'heart' && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50,85 C20,60 5,40 5,25 C5,12 15,5 28,5 C37,5 45,10 50,18 C55,10 63,5 72,5 C85,5 95,12 95,25 C95,40 80,60 50,85 Z"
              fill={el.fillColor || '#FF2A68'}
              stroke={el.strokeColor || 'none'}
              strokeWidth={el.strokeWidth || 0}
            />
          </svg>
        )}
        {el.shapeType === 'arrow' && (
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <polygon
              points="0,20 60,20 60,5 100,25 60,45 60,30 0,30"
              fill={el.fillColor || '#8B3DFF'}
              stroke={el.strokeColor || 'none'}
              strokeWidth={el.strokeWidth || 0}
            />
          </svg>
        )}
        {el.shapeType === 'badge' && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50,0 L61,11 L77,7 L83,23 L98,28 L97,44 L108,56 L100,70 L103,86 L88,92 L82,107 L66,104 L55,115 L45,115 L34,104 L18,107 L12,92 L-3,86 L0,70 L-8,56 L3,44 L2,28 L17,23 L23,7 L39,11 Z"
              fill={el.fillColor || '#00C4CC'}
              transform="scale(0.85) translate(8, 0)"
            />
          </svg>
        )}
        {el.shapeType === 'speech-bubble' && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10,20 Q10,10 20,10 L80,10 Q90,10 90,20 L90,65 Q90,75 80,75 L40,75 L20,95 L25,75 L20,75 Q10,75 10,65 Z"
              fill={el.fillColor || '#8B3DFF'}
              stroke={el.strokeColor || 'none'}
              strokeWidth={el.strokeWidth || 0}
            />
          </svg>
        )}
        {el.shapeType === 'diamond' && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,5 95,50 50,95 5,50"
              fill={el.fillColor || '#8B3DFF'}
              stroke={el.strokeColor || 'none'}
              strokeWidth={el.strokeWidth || 0}
            />
          </svg>
        )}
        {el.shapeType === 'hexagon' && (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="25,5 75,5 95,50 75,95 25,95 5,50"
              fill={el.fillColor || '#8B3DFF'}
              stroke={el.strokeColor || 'none'}
              strokeWidth={el.strokeWidth || 0}
            />
          </svg>
        )}

        {/* In-shape Text Layer */}
        {Boolean(el.content) && (
          <div className="absolute inset-0 flex items-center justify-center p-2.5 text-center overflow-hidden z-10 pointer-events-none">
            <span
              style={{
                fontSize: el.fontSize || 18,
                fontFamily: el.fontFamily,
                color: el.color || '#FFFFFF',
                fontWeight: el.bold ? 700 : 400,
                fontStyle: el.italic ? 'italic' : 'normal',
                textAlign: el.textAlign || 'center',
                textDecoration: el.underline ? 'underline' : 'none',
                lineHeight: el.lineHeight || 1.2,
              }}
              className="select-none break-words max-w-full"
            >
              {el.content}
            </span>
          </div>
        )}
      </div>
    );
  }

  if (el.type === 'image') {
    return (
      <div
        key={el.id}
        style={{
          ...baseStyle,
          borderRadius: el.borderRadius ? `${el.borderRadius}px` : 0,
          overflow: 'hidden',
          filter: getGraphicFilter(el),
        }}
      >
        <img
          src={el.src}
          alt={el.alt || ''}
          className="w-full h-full"
          style={{
            objectFit: el.objectFit || 'cover',
            filter: el.filter ? `
              brightness(${el.filter.brightness ?? 100}%)
              contrast(${el.filter.contrast ?? 100}%)
              saturate(${el.filter.saturation ?? 100}%)
              blur(${el.filter.blur ?? 0}px)
              grayscale(${el.filter.grayscale ?? 0}%)
              sepia(${el.filter.sepia ?? 0}%)
            ` : 'none',
            transform: `${el.flipH ? 'scaleX(-1)' : ''} ${el.flipV ? 'scaleY(-1)' : ''}`,
          }}
          draggable={false}
        />
      </div>
    );
  }

  if (el.type === 'sticker') {
    return (
      <div
        key={el.id}
        style={{
          ...baseStyle,
          filter: getGraphicFilter(el),
          imageRendering: el.isPixelArt ? 'pixelated' : undefined,
        }}
        className="w-full h-full flex items-center justify-center relative select-none"
      >
        {el.svgContent ? (
          <div 
            className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full"
            style={{ 
              imageRendering: el.isPixelArt ? 'pixelated' : 'auto',
              transform: `${el.flipH ? 'scaleX(-1)' : ''} ${el.flipV ? 'scaleY(-1)' : ''}`
            }}
            dangerouslySetInnerHTML={{ __html: el.svgContent }}
          />
        ) : el.src ? (
          <img
            src={el.src}
            alt={el.alt || el.name || 'sticker'}
            style={{
              objectFit: el.objectFit || 'contain',
              imageRendering: el.isPixelArt ? 'pixelated' : undefined,
              transform: `${el.flipH ? 'scaleX(-1)' : ''} ${el.flipV ? 'scaleY(-1)' : ''}`,
            }}
            className="w-full h-full"
            draggable={false}
          />
        ) : null}
      </div>
    );
  }

  if (el.type === 'frame') {
    return (
      <div
        key={el.id}
        style={{ ...baseStyle, filter: getGraphicFilter(el) }}
        className="w-full h-full relative overflow-hidden select-none pointer-events-none"
      >
        {el.src ? (
          <svg viewBox={el.frameViewBox || '0 0 100 100'} className="w-full h-full block" preserveAspectRatio="none">
            <defs>
              <clipPath id={`pres-clip-${el.id}`}>
                <path d={el.frameClipPath || 'M 0,0 H 100 V 100 H 0 Z'} />
              </clipPath>
            </defs>
            <image
              href={el.src}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#pres-clip-${el.id})`}
              style={{
                filter: el.filter ? `
                  brightness(${el.filter.brightness ?? 100}%)
                  contrast(${el.filter.contrast ?? 100}%)
                  saturate(${el.filter.saturation ?? 100}%)
                  blur(${el.filter.blur ?? 0}px)
                  grayscale(${el.filter.grayscale ?? 0}%)
                  sepia(${el.filter.sepia ?? 0}%)
                ` : 'none',
                transform: `${el.flipH ? 'scaleX(-1)' : ''} ${el.flipV ? 'scaleY(-1)' : ''}`,
              }}
            />
            {Boolean(el.strokeWidth && el.strokeWidth > 0) && (
              <path
                d={el.frameClipPath}
                fill="none"
                stroke={el.strokeColor || '#7d2ae8'}
                strokeWidth={el.strokeWidth}
              />
            )}
          </svg>
        ) : (
          <svg viewBox={el.frameViewBox || '0 0 100 100'} className="w-full h-full block" preserveAspectRatio="none">
            <defs>
              <clipPath id={`pres-clip-${el.id}`}>
                <path d={el.frameClipPath || 'M 0,0 H 100 V 100 H 0 Z'} />
              </clipPath>
              <linearGradient id={`pres-sky-${el.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4bb2f6" />
                <stop offset="60%" stopColor="#89d1fc" />
                <stop offset="100%" stopColor="#c5e6fe" />
              </linearGradient>
              <linearGradient id={`pres-hill1-${el.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#66bb6a" />
                <stop offset="100%" stopColor="#43a047" />
              </linearGradient>
              <linearGradient id={`pres-hill2-${el.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4caf50" />
                <stop offset="100%" stopColor="#2e7d32" />
              </linearGradient>
            </defs>
            <g clipPath={`url(#pres-clip-${el.id})`}>
              <rect width="100%" height="100%" fill={`url(#pres-sky-${el.id})`} />
              <circle cx="78%" cy="26%" r="14%" fill="#fff59d" opacity="0.9" />
              <circle cx="78%" cy="26%" r="9%" fill="#ffee58" />
              <path d="M 16,32 Q 22,22 32,24 Q 38,14 50,22 Q 60,16 68,25 Q 75,24 78,32 Q 81,40 72,46 L 18,46 Q 10,40 16,32 Z" fill="#ffffff" fillOpacity="0.88" />
              <path d="M -20,70 Q 30,44 75,60 T 150,52 L 150,150 L -20,150 Z" fill={`url(#pres-hill1-${el.id})`} />
              <path d="M -20,86 Q 25,62 65,78 T 150,70 L 150,150 L -20,150 Z" fill={`url(#pres-hill2-${el.id})`} />
            </g>
            {Boolean(el.strokeWidth && el.strokeWidth > 0) && (
              <path
                d={el.frameClipPath}
                fill="none"
                stroke={el.strokeColor || '#7d2ae8'}
                strokeWidth={el.strokeWidth}
              />
            )}
          </svg>
        )}
        {el.frameOverlaySvg && (
          <div
            className="absolute inset-0 [&>svg]:w-full [&>svg]:h-full pointer-events-none"
            dangerouslySetInnerHTML={{ __html: el.frameOverlaySvg }}
          />
        )}
      </div>
    );
  }

  if ((el.type === 'vector' && !el.svgContent) || (Boolean(el.svgPath) && !el.svgContent)) {
    return (
      <div 
        key={el.id}
        style={{ ...baseStyle, filter: getGraphicFilter(el) }}
        className="w-full h-full flex items-center justify-center relative"
      >
        <svg
          viewBox={el.svgViewBox || '0 0 100 100'}
          className="w-full h-full drop-shadow-xs"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={el.svgPath}
            fill={el.fillColor || '#7d2ae8'}
            stroke={el.strokeColor || 'none'}
            strokeWidth={el.strokeWidth || 0}
          />
        </svg>

        {/* In-vector Text Layer */}
        {Boolean(el.content) && (
          <div className="absolute inset-0 flex items-center justify-center p-2.5 text-center overflow-hidden z-10 pointer-events-none">
            <span
              style={{
                fontSize: el.fontSize || 16,
                fontFamily: el.fontFamily,
                color: el.color || '#FFFFFF',
                fontWeight: el.bold ? 700 : 400,
                fontStyle: el.italic ? 'italic' : 'normal',
                textAlign: el.textAlign || 'center',
                textDecoration: el.underline ? 'underline' : 'none',
                lineHeight: el.lineHeight || 1.2,
              }}
              className="select-none break-words max-w-full"
            >
              {el.content}
            </span>
          </div>
        )}
      </div>
    );
  }

  return null;
}

