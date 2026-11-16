import React, { useState } from 'react';
import { CanvasElement, CanvasPage, DesignDocument } from '../types';
import { CanvasElementItem } from './CanvasElementItem';
import { Plus, Trash2, Copy, Eye } from 'lucide-react';

interface CanvasAreaProps {
  document: DesignDocument;
  currentPageIndex: number;
  selectedElementId: string | null;
  zoom: number;
  isGridView: boolean;
  onSelectElement: (id: string | null) => void;
  onUpdateElement: (id: string, updates: Partial<CanvasElement>) => void;
  onPageChange: (index: number) => void;
  onAddPage: () => void;
  onDuplicatePage: (index: number) => void;
  onDeletePage: (index: number) => void;
  artboardRef: React.RefObject<HTMLDivElement | null>;
}

export const CanvasArea: React.FC<CanvasAreaProps> = ({
  document: doc,
  currentPageIndex,
  selectedElementId,
  zoom,
  isGridView,
  onSelectElement,
  onUpdateElement,
  onPageChange,
  onAddPage,
  onDuplicatePage,
  onDeletePage,
  artboardRef,
}) => {
  const [guideX, setGuideX] = useState<number | null>(null);
  const [guideY, setGuideY] = useState<number | null>(null);

  const currentPage = doc.pages[currentPageIndex] || doc.pages[0];

  // Grid view of all pages
  if (isGridView) {
    return (
      <div className="flex-1 bg-[#f4f7fb] dark:bg-[#0c0e14] overflow-y-auto p-8 select-none transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-[#0e1318] dark:text-white">Vista general de páginas</h2>
              <p className="text-xs text-gray-500 dark:text-slate-400">Organiza, agrega o duplica tus diapositivas y diseños</p>
            </div>
            <button
              onClick={onAddPage}
              className="px-4 py-2 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white text-xs font-bold rounded-lg flex items-center gap-2 shadow-xs hover:shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Añadir nueva página</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doc.pages.map((page, idx) => {
              const isCurrent = idx === currentPageIndex;
              const previewScale = 260 / doc.width;
              return (
                <div
                  key={page.id}
                  onClick={() => onPageChange(idx)}
                  className={`group relative rounded-2xl overflow-hidden border transition-all cursor-pointer bg-white dark:bg-[#161922] p-3 flex flex-col items-center shadow-xs hover:shadow-md ${
                    isCurrent
                      ? 'border-[#7d2ae8] ring-2 ring-[#7d2ae8]/20 shadow-md'
                      : 'border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Page Preview Thumbnail */}
                  <div
                    style={{
                      width: 260,
                      height: (doc.height / doc.width) * 260,
                      overflow: 'hidden',
                      position: 'relative',
                      borderRadius: 8,
                      background: page.background.value,
                    }}
                    className="shadow-xs border border-gray-100 dark:border-slate-700/50 flex-shrink-0"
                  >
                    <div
                      style={{
                        width: doc.width,
                        height: doc.height,
                        transform: `scale(${previewScale})`,
                        transformOrigin: 'top left',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                    >
                      {page.elements.map((el) => (
                        <div
                          key={el.id}
                          style={{
                            position: 'absolute',
                            left: el.x,
                            top: el.y,
                            width: el.width,
                            height: el.height,
                            transform: `rotate(${el.rotation}deg)`,
                            opacity: el.opacity,
                            zIndex: el.zIndex,
                          }}
                        >
                          {el.type === 'text' && (
                            <div
                              style={{
                                fontSize: el.fontSize,
                                fontFamily: el.fontFamily,
                                color: el.color,
                                fontWeight: el.bold ? 700 : 400,
                              }}
                              className="w-full h-full truncate"
                            >
                              {el.content}
                            </div>
                          )}
                          {el.type === 'shape' && (
                            <div
                              style={{
                                backgroundColor: el.fillColor,
                                borderRadius: el.shapeType === 'circle' ? '50%' : `${el.borderRadius || 0}px`,
                              }}
                              className="w-full h-full"
                            />
                          )}
                          {el.type === 'image' && (
                            <img
                              src={el.src}
                              alt=""
                              className="w-full h-full object-cover rounded-md"
                            />
                          )}
                          {el.type === 'frame' && (
                            <div className="w-full h-full relative overflow-hidden pointer-events-none">
                              {el.src ? (
                                <svg viewBox={el.frameViewBox || '0 0 100 100'} className="w-full h-full block" preserveAspectRatio="none">
                                  <defs>
                                    <clipPath id={`thumb-clip-${el.id}`}>
                                      <path d={el.frameClipPath || 'M 0,0 H 100 V 100 H 0 Z'} />
                                    </clipPath>
                                  </defs>
                                  <image
                                    href={el.src}
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid slice"
                                    clipPath={`url(#thumb-clip-${el.id})`}
                                  />
                                </svg>
                              ) : (
                                <svg viewBox={el.frameViewBox || '0 0 100 100'} className="w-full h-full block" preserveAspectRatio="none">
                                  <defs>
                                    <clipPath id={`thumb-clip-${el.id}`}>
                                      <path d={el.frameClipPath || 'M 0,0 H 100 V 100 H 0 Z'} />
                                    </clipPath>
                                    <linearGradient id={`thumb-sky-${el.id}`} x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#4bb2f6" />
                                      <stop offset="100%" stopColor="#c5e6fe" />
                                    </linearGradient>
                                    <linearGradient id={`thumb-hill-${el.id}`} x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#66bb6a" />
                                      <stop offset="100%" stopColor="#2e7d32" />
                                    </linearGradient>
                                  </defs>
                                  <g clipPath={`url(#thumb-clip-${el.id})`}>
                                    <rect width="100%" height="100%" fill={`url(#thumb-sky-${el.id})`} />
                                    <circle cx="78%" cy="26%" r="14%" fill="#fff59d" />
                                    <path d="M -20,70 Q 30,44 75,60 T 150,52 L 150,150 L -20,150 Z" fill={`url(#thumb-hill-${el.id})`} />
                                  </g>
                                </svg>
                              )}
                              {el.frameOverlaySvg && (
                                <div
                                  className="absolute inset-0 [&>svg]:w-full [&>svg]:h-full pointer-events-none"
                                  dangerouslySetInnerHTML={{ __html: el.frameOverlaySvg }}
                                />
                              )}
                            </div>
                          )}
                          {el.type === 'sticker' && (
                            el.svgContent ? (
                              <div
                                className="w-full h-full [&>svg]:w-full [&>svg]:h-full pointer-events-none"
                                dangerouslySetInnerHTML={{ __html: el.svgContent }}
                              />
                            ) : el.src ? (
                              <img
                                src={el.src}
                                alt=""
                                className="w-full h-full object-contain pointer-events-none"
                              />
                            ) : null
                          )}
                          {(el.type === 'vector' || Boolean(el.svgPath)) && (
                            <svg viewBox={el.svgViewBox || '0 0 100 100'} className="w-full h-full">
                              <path d={el.svgPath} fill={el.fillColor || '#7d2ae8'} />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail bottom bar */}
                  <div className="w-full flex items-center justify-between mt-3 pt-2 border-t border-gray-100 dark:border-slate-800 text-xs">
                    <span className="font-semibold text-gray-700 dark:text-slate-200">
                      Página {idx + 1}
                    </span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDuplicatePage(idx);
                        }}
                        className="p-1 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                        title="Duplicar"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      {doc.pages.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeletePage(idx);
                          }}
                          className="p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main
      id="canvas-main-area"
      onClick={(e) => {
        // Only deselect if clicking directly on the empty background of main or pattern
        if (e.target === e.currentTarget) {
          onSelectElement(null);
        }
      }}
      className="flex-1 bg-[#edf2f7] dark:bg-[#0c0e14] overflow-auto relative flex items-center justify-center p-8 select-none transition-colors duration-200"
    >
      {/* Background Dots Pattern for Canva Studio feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-20 text-slate-400 dark:text-slate-500"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1.5px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Artboard Container Scaled */}
      <div
        className="relative transition-transform duration-75 ease-out"
        style={{
          width: doc.width * zoom,
          height: doc.height * zoom,
        }}
      >
        <div
          ref={artboardRef}
          style={{
            width: doc.width,
            height: doc.height,
            transform: `scale(${zoom})`,
            transformOrigin: 'top left',
            background: currentPage.background.type === 'gradient'
              ? currentPage.background.value
              : currentPage.background.value,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onSelectElement(null);
            }
          }}
          className="absolute top-0 left-0 shadow-[0_12px_40px_rgba(0,0,0,0.14)] dark:shadow-[0_12px_45px_rgba(0,0,0,0.85)] border border-gray-300/60 dark:border-slate-700/80 overflow-hidden rounded-xs select-none"
        >
          {/* Smart Snap Guides (Center X & Center Y Purple Lines) */}
          {guideX !== null && (
            <div
              style={{ left: guideX }}
              className="absolute top-0 bottom-0 w-0.5 bg-[#7d2ae8] z-50 pointer-events-none shadow-xs"
            />
          )}
          {guideY !== null && (
            <div
              style={{ top: guideY }}
              className="absolute left-0 right-0 h-0.5 bg-[#7d2ae8] z-50 pointer-events-none shadow-xs"
            />
          )}

          {/* Render All Elements of this page */}
          {currentPage.elements
            .sort((a, b) => a.zIndex - b.zIndex)
            .map((el) => (
              <CanvasElementItem
                key={el.id}
                element={el}
                isSelected={selectedElementId === el.id}
                scale={zoom}
                canvasWidth={doc.width}
                canvasHeight={doc.height}
                onSelect={(e) => {
                  e.stopPropagation();
                  onSelectElement(el.id);
                }}
                onUpdate={(updates) => onUpdateElement(el.id, updates)}
                onShowGuides={(x, y) => {
                  setGuideX(x);
                  setGuideY(y);
                }}
              />
            ))}
        </div>
      </div>
    </main>
  );
};
