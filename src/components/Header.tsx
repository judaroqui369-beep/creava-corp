import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Undo2, 
  Redo2, 
  Cloud, 
  Play, 
  Share2, 
  Download, 
  Printer, 
  FileCode, 
  FileImage, 
  FolderDown, 
  ChevronDown, 
  Settings2, 
  Home, 
  HelpCircle,
  FilePlus,
  Copy
} from 'lucide-react';
import { DesignDocument } from '../types';
import { AuthDropdown } from './AuthDropdown';
import { SettingsModal } from './SettingsModal';
import { ShareModal } from './ShareModal';

interface HeaderProps {
  document: DesignDocument;
  onUpdateTitle: (newTitle: string) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onOpenResize: () => void;
  onOpenPresentation: () => void;
  onExportPng: () => void;
  onExportJpeg: () => void;
  onExportSvg: () => void;
  onExportJson: () => void;
  onImportJson: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrint: () => void;
  onNewDesign: () => void;
  onGoHome?: () => void;
  onOpenFontImporter?: () => void;
  saveStatus?: 'saved' | 'saving';
}

export const Header: React.FC<HeaderProps> = ({
  document: doc,
  onUpdateTitle,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onOpenResize,
  onOpenPresentation,
  onExportPng,
  onExportJpeg,
  onExportSvg,
  onExportJson,
  onImportJson,
  onPrint,
  onNewDesign,
  onGoHome,
  onOpenFontImporter,
  saveStatus = 'saved',
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState(doc.title);
  const [showFileMenu, setShowFileMenu] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitleValue(doc.title);
  }, [doc.title]);

  const handleTitleSubmit = () => {
    setIsEditingTitle(false);
    if (titleValue.trim()) {
      onUpdateTitle(titleValue.trim());
    } else {
      setTitleValue(doc.title);
    }
  };

  return (
    <header className="h-14 bg-white dark:bg-[#151822] text-[#0e1318] dark:text-slate-100 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-3 md:px-4 select-none z-30 relative shadow-2xs">
      {/* Left side: Logo, File Menu, Resize, Undo/Redo */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Creava Logo (Clickable to go home) */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2.5 pr-3 border-r border-gray-200 hover:opacity-85 transition-opacity text-left cursor-pointer"
          title="Ir a la pantalla de inicio de Creava"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00c4cc] to-[#7d2ae8] flex items-center justify-center shadow-xs">
            <div className="w-3.5 h-3.5 bg-white rounded-xs rotate-45 flex items-center justify-center">
              <span className="font-extrabold text-[#7d2ae8] text-[9px] -rotate-45">C</span>
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight text-[#7d2ae8] hidden sm:inline">
            creava
          </span>
        </button>

        {/* Inicio (Home) Button */}
        {onGoHome && (
          <button
            onClick={onGoHome}
            id="btn-header-go-home"
            className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-gray-700 hover:text-[#7d2ae8] px-2.5 py-1.5 rounded-lg hover:bg-purple-50 transition-colors"
            title="Volver a la pantalla de inicio"
          >
            <Home className="w-4 h-4 text-purple-600" />
            <span className="hidden sm:inline">Inicio</span>
          </button>
        )}

        {/* File menu button */}
        <div className="relative">
          <button
            onClick={() => {
              setShowFileMenu(!showFileMenu);
            }}
            className="flex items-center gap-1 text-xs md:text-sm font-medium text-gray-600 hover:text-[#7d2ae8] px-2.5 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            Archivo
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>

          {showFileMenu && (
            <div 
              className="absolute left-0 top-full mt-1.5 w-60 bg-white dark:bg-[#161922] rounded-xl shadow-2xl border border-gray-200 dark:border-slate-800 py-1.5 z-50 text-xs text-gray-700 dark:text-slate-200 animate-in fade-in zoom-in-95 duration-100"
              onClick={() => setShowFileMenu(false)}
            >
              {onGoHome && (
                <button 
                  onClick={onGoHome}
                  className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-purple-50 text-left text-purple-700 font-semibold transition-colors"
                >
                  <Home className="w-4 h-4 text-[#7d2ae8]" />
                  <span>Ir a la pantalla de inicio</span>
                </button>
              )}
              <button 
                onClick={onNewDesign}
                className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 text-left transition-colors"
              >
                <FilePlus className="w-4 h-4 text-[#7d2ae8]" />
                <span className="font-medium">Crear nuevo diseño</span>
              </button>
              <button 
                onClick={onOpenResize}
                className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 text-left transition-colors"
              >
                <Settings2 className="w-4 h-4 text-[#00c4cc]" />
                <span className="font-medium">Cambiar tamaño de página</span>
              </button>
              <div className="h-px bg-gray-100 my-1"></div>
              <button 
                onClick={onExportJson}
                className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 text-left transition-colors"
              >
                <FolderDown className="w-4 h-4 text-amber-500" />
                <span className="font-medium">Guardar proyecto (.json)</span>
              </button>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 text-left transition-colors"
              >
                <FileCode className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">Abrir proyecto (.json)</span>
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={onImportJson} 
                accept=".json" 
                className="hidden" 
              />
              <div className="h-px bg-gray-100 dark:bg-slate-800 my-1"></div>
              <button 
                onClick={onPrint}
                className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-slate-800 text-left transition-colors"
              >
                <Printer className="w-4 h-4 text-gray-500" />
                <span className="font-medium">Imprimir diseño</span>
              </button>
              <div className="h-px bg-gray-100 dark:bg-slate-800 my-1"></div>
              <button 
                id="btn-file-settings"
                onClick={() => {
                  setShowSettingsModal(true);
                  setShowFileMenu(false);
                }}
                className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-left text-purple-700 dark:text-purple-300 font-semibold transition-colors cursor-pointer"
              >
                <Settings2 className="w-4 h-4 text-purple-600" />
                <span>Configuración y Modo Oscuro</span>
              </button>
            </div>
          )}
        </div>

        {/* Professional Polish Resize Button */}
        <button
          onClick={onOpenResize}
          className="flex items-center gap-1.5 text-xs md:text-sm font-semibold bg-[#7d2ae8]/10 hover:bg-[#7d2ae8]/15 text-[#7d2ae8] border border-[#7d2ae8]/20 px-3 py-1.5 rounded-md transition-all"
          title="Redimensionar dimensiones del lienzo"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#7d2ae8]" />
          <span className="hidden md:inline">Redimensionar</span>
        </button>

        {/* Undo / Redo */}
        <div className="flex items-center gap-0.5 ml-1">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className={`p-1.5 rounded-md text-gray-600 transition-colors ${
              canUndo ? 'hover:bg-gray-100 hover:text-[#0e1318]' : 'opacity-30 cursor-not-allowed'
            }`}
            title="Deshacer (Ctrl+Z)"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className={`p-1.5 rounded-md text-gray-600 transition-colors ${
              canRedo ? 'hover:bg-gray-100 hover:text-[#0e1318]' : 'opacity-30 cursor-not-allowed'
            }`}
            title="Rehacer (Ctrl+Y)"
          >
            <Redo2 className="w-4 h-4" />
          </button>
        </div>

        {/* Cloud sync status */}
        <div className="hidden lg:flex items-center gap-1.5 text-[11px] pl-2 transition-colors">
          {saveStatus === 'saving' ? (
            <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-medium animate-pulse">
              <div className="w-3 h-3 border-2 border-purple-600 dark:border-purple-400 border-t-transparent rounded-full animate-spin" />
              <span>Guardando...</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-slate-400">
              <Cloud className="w-3.5 h-3.5 text-emerald-500" />
              <span>Guardado automático</span>
            </div>
          )}
        </div>
      </div>

      {/* Center: Title Bar */}
      <div className="flex-1 max-w-xs md:max-w-md mx-2 md:mx-4 text-center">
        {isEditingTitle ? (
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            onBlur={handleTitleSubmit}
            onKeyDown={(e) => e.key === 'Enter' && handleTitleSubmit()}
            autoFocus
            className="bg-gray-100 dark:bg-slate-800 border border-[#7d2ae8] rounded-md px-3 py-1 text-xs md:text-sm font-semibold text-[#0e1318] dark:text-white w-full text-center focus:outline-none focus:ring-2 focus:ring-[#7d2ae8]/20"
          />
        ) : (
          <div
            onClick={() => setIsEditingTitle(true)}
            className="text-xs md:text-sm font-semibold text-[#0e1318] dark:text-slate-100 hover:text-[#7d2ae8] dark:hover:text-purple-400 truncate cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 border border-transparent hover:border-gray-200 dark:hover:border-slate-700 transition-colors inline-block max-w-full"
            title="Haz clic para editar el nombre del diseño"
          >
            {doc.title}
          </div>
        )}
      </div>

      {/* Right side: Present, Share & Export */}
      <div className="flex items-center gap-2 md:gap-2.5">
        {/* Presentation button */}
        <button
          onClick={onOpenPresentation}
          className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-[#7d2ae8] dark:hover:text-purple-400 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          title="Modo Presentación a pantalla completa"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span className="hidden sm:inline">Presentar</span>
        </button>

        {/* Canva Signature Share Button */}
        <button
          id="btn-header-share"
          onClick={() => setShowShareModal(true)}
          className="flex items-center gap-1.5 text-xs md:text-sm font-bold bg-[#7d2ae8] hover:bg-[#6a24c5] active:bg-[#581da8] text-white px-3.5 py-2 rounded-xl shadow-xs hover:shadow-sm transition-all cursor-pointer"
          title="Compartir diseño, colaborar o exportar (Estilo Canva)"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Compartir</span>
        </button>

        {/* Settings Button */}
        <button
          id="btn-header-settings"
          onClick={() => setShowSettingsModal(true)}
          className="p-2 text-gray-500 hover:text-[#7d2ae8] dark:text-gray-400 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          title="Configuración y Modo Oscuro"
        >
          <Settings2 className="w-4 h-4" />
        </button>

        {/* User profile / login dropdown */}
        <AuthDropdown
          align="right"
          showLabel={false}
          onOpenFontImporter={onOpenFontImporter}
        />
      </div>

      {/* Canva Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        document={doc}
        onExportPng={onExportPng}
        onExportJpeg={onExportJpeg}
        onExportSvg={onExportSvg}
        onExportJson={onExportJson}
        onPrint={onPrint}
        onOpenPresentation={onOpenPresentation}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />
    </header>
  );
};
