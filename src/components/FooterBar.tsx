import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  Maximize2, 
  Grid, 
  StickyNote, 
  Copy, 
  Trash2,
  Maximize,
  Sliders
} from 'lucide-react';

interface FooterBarProps {
  currentPageIndex: number;
  totalPages: number;
  onPageChange: (index: number) => void;
  onAddPage: () => void;
  onDuplicatePage: () => void;
  onDeletePage: () => void;
  zoom: number;
  onZoomChange: (newZoom: number) => void;
  onFitToScreen: () => void;
  isGridView: boolean;
  onToggleGridView: () => void;
  onOpenPresentation: () => void;
}

export const FooterBar: React.FC<FooterBarProps> = ({
  currentPageIndex,
  totalPages,
  onPageChange,
  onAddPage,
  onDuplicatePage,
  onDeletePage,
  zoom,
  onZoomChange,
  onFitToScreen,
  isGridView,
  onToggleGridView,
  onOpenPresentation,
}) => {
  return (
    <footer className="h-10 bg-white dark:bg-[#151822] text-gray-600 dark:text-slate-300 border-t border-gray-200 dark:border-slate-800 flex items-center justify-between px-3 md:px-4 text-xs select-none z-20 shadow-2xs transition-colors">
      {/* Left side: Page Navigation */}
      <div className="flex items-center gap-2">
        {/* Page Prev/Next */}
        <div className="flex items-center bg-gray-100 dark:bg-slate-800 rounded-lg p-0.5 border border-gray-200 dark:border-slate-700">
          <button
            onClick={() => onPageChange(Math.max(0, currentPageIndex - 1))}
            disabled={currentPageIndex === 0}
            className={`p-1 rounded-md transition-colors ${
              currentPageIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white'
            }`}
            title="Página anterior"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          <span className="px-2 text-[11px] font-semibold text-gray-800 dark:text-slate-200">
            Página {currentPageIndex + 1} de {totalPages}
          </span>

          <button
            onClick={() => onPageChange(Math.min(totalPages - 1, currentPageIndex + 1))}
            disabled={currentPageIndex === totalPages - 1}
            className={`p-1 rounded-md transition-colors ${
              currentPageIndex === totalPages - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white'
            }`}
            title="Página siguiente"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Add Page Button */}
        <button
          onClick={onAddPage}
          className="flex items-center gap-1 text-[11px] font-semibold text-gray-700 dark:text-slate-200 hover:text-[#7d2ae8] dark:hover:text-purple-400 bg-gray-100 dark:bg-slate-800 hover:bg-purple-50/70 dark:hover:bg-purple-950/40 border border-gray-200 dark:border-slate-700 px-2.5 py-1 rounded-lg transition-colors"
          title="Añadir nueva página en blanco"
        >
          <Plus className="w-3 h-3 text-[#7d2ae8] dark:text-purple-400" />
          <span className="hidden sm:inline">Añadir página</span>
        </button>

        {/* Duplicate Page Button */}
        <button
          onClick={onDuplicatePage}
          className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white transition-colors"
          title="Duplicar página actual"
        >
          <Copy className="w-3.5 h-3.5" />
        </button>

        {/* Delete Page Button */}
        {totalPages > 1 && (
          <button
            onClick={onDeletePage}
            className="p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            title="Eliminar página actual"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Center: Grid View Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleGridView}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors ${
            isGridView
              ? 'bg-purple-50 dark:bg-purple-950/50 border-[#7d2ae8] text-[#7d2ae8] dark:text-purple-300'
              : 'bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200/70 dark:hover:bg-slate-700'
          }`}
          title="Vista de cuadrícula de páginas"
        >
          <Grid className="w-3 h-3" />
          <span className="hidden md:inline">Vista de cuadrícula</span>
        </button>
      </div>

      {/* Right side: Zoom Controls & Presentation */}
      <div className="flex items-center gap-3">
        {/* Zoom Stepper and Slider */}
        <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg border border-gray-200 dark:border-slate-700">
          <button
            onClick={() => onZoomChange(Math.max(0.25, zoom - 0.1))}
            className="p-1 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            title="Alejar (-)"
          >
            <Minus className="w-3 h-3" />
          </button>

          <input
            type="range"
            min="0.25"
            max="2.5"
            step="0.05"
            value={zoom}
            onChange={(e) => onZoomChange(parseFloat(e.target.value))}
            className="w-16 md:w-20 accent-[#7d2ae8] cursor-pointer h-1"
          />

          <button
            onClick={() => onZoomChange(Math.min(2.5, zoom + 0.1))}
            className="p-1 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            title="Acercar (+)"
          >
            <Plus className="w-3 h-3" />
          </button>

          <button
            onClick={onFitToScreen}
            className="text-[11px] font-mono text-gray-700 dark:text-slate-300 hover:text-[#7d2ae8] dark:hover:text-purple-400 font-semibold pl-1 border-l border-gray-300 dark:border-slate-700 hover:underline"
            title="Ajustar a la pantalla"
          >
            {Math.round(zoom * 100)}%
          </button>
        </div>

        {/* Fit to Screen Button */}
        <button
          onClick={onFitToScreen}
          className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-slate-700 transition-colors hidden sm:block"
          title="Ajustar diseño a la ventana"
        >
          <Maximize className="w-3.5 h-3.5" />
        </button>

        {/* Presentation Button */}
        <button
          onClick={onOpenPresentation}
          className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-slate-700 transition-colors"
          title="Pantalla completa"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
