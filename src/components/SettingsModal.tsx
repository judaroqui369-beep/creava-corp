import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Settings,
  Moon,
  Sun,
  Monitor,
  Check,
  X,
  Sliders,
  Sparkles,
  Eye,
  Grid,
  Zap,
  Save,
  Palette
} from 'lucide-react';
import { getThemeMode, setThemeMode, ThemeMode, isDarkModeActive } from '../utils/themeManager';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => getThemeMode());
  const [isDark, setIsDark] = useState<boolean>(() => isDarkModeActive());
  const [snapGuides, setSnapGuides] = useState<boolean>(true);
  const [highQualityPreview, setHighQualityPreview] = useState<boolean>(true);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState<boolean>(true);

  useEffect(() => {
    const handleThemeChange = () => {
      setCurrentTheme(getThemeMode());
      setIsDark(isDarkModeActive());
    };

    window.addEventListener('creava_theme_changed', handleThemeChange);
    return () => window.removeEventListener('creava_theme_changed', handleThemeChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
    setCurrentTheme(mode);
    setIsDark(isDarkModeActive());
  };

  const modalContent = (
    <div
      id="settings-modal-overlay"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        id="settings-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white dark:bg-[#161922] text-slate-900 dark:text-slate-100 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between flex-shrink-0 bg-slate-50/50 dark:bg-[#1a1d27]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7d2ae8] to-[#00c4cc] flex items-center justify-center shadow-xs">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Configuración de Creava</span>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
                  Preferencias
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Personaliza la apariencia y el rendimiento de tu estudio de diseño
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            title="Cerrar configuración"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* 1. SECCIÓN: TEMA Y APARIENCIA (MODO OSCURO / CLARO) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Tema y Apariencia</span>
              </label>
              <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded-md">
                {currentTheme === 'dark' ? 'Modo Oscuro activado' : currentTheme === 'light' ? 'Modo Claro activado' : 'Automático por sistema'}
              </span>
            </div>

            {/* Selector de 3 modos: Claro, Oscuro, Sistema */}
            <div className="grid grid-cols-3 gap-3">
              {/* Opción Modo Claro */}
              <button
                type="button"
                id="btn-theme-light"
                onClick={() => handleSelectTheme('light')}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-center relative group ${
                  currentTheme === 'light'
                    ? 'border-purple-600 bg-purple-50/70 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-[#1b1f2b] text-slate-700 dark:text-slate-300'
                }`}
              >
                {currentTheme === 'light' && (
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-105 transition-transform">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold block">Modo Claro</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5">Luminoso & limpio</span>
              </button>

              {/* Opción Modo Oscuro */}
              <button
                type="button"
                id="btn-theme-dark"
                onClick={() => handleSelectTheme('dark')}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-center relative group ${
                  currentTheme === 'dark'
                    ? 'border-purple-600 bg-purple-50/70 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-[#1b1f2b] text-slate-700 dark:text-slate-300'
                }`}
              >
                {currentTheme === 'dark' && (
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-indigo-950 text-indigo-300 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-105 transition-transform">
                  <Moon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold block">Modo Oscuro</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5">Descanso visual</span>
              </button>

              {/* Opción Sistema */}
              <button
                type="button"
                id="btn-theme-system"
                onClick={() => handleSelectTheme('system')}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-center relative group ${
                  currentTheme === 'system'
                    ? 'border-purple-600 bg-purple-50/70 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-[#1b1f2b] text-slate-700 dark:text-slate-300'
                }`}
              >
                {currentTheme === 'system' && (
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-105 transition-transform">
                  <Monitor className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold block">Sistema</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5">Sigue tu SO</span>
              </button>
            </div>

            {/* Banner explicativo modo oscuro */}
            <div className="p-3 bg-slate-50 dark:bg-[#1d212d] rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-indigo-400 shadow-xs shadow-indigo-500/50' : 'bg-amber-400 shadow-xs shadow-amber-500/50'}`} />
                <span className="text-slate-600 dark:text-slate-300 font-medium">
                  {isDark ? 'La interfaz se renderiza con paleta oscura para trabajar de noche.' : 'La interfaz se muestra con el estilo luminoso original de Creava.'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleSelectTheme(isDark ? 'light' : 'dark')}
                className="px-3 py-1.5 rounded-xl font-bold text-[11px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer flex-shrink-0"
              >
                {isDark ? 'Cambiar a Claro' : 'Cambiar a Oscuro'}
              </button>
            </div>
          </div>

          <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />

          {/* 2. SECCIÓN: PREFERENCIAS DEL EDITOR Y LIENZO */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Lienzo y Herramientas</span>
            </label>

            <div className="space-y-2">
              {/* Guías inteligentes */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/70 dark:bg-[#1b1f2b] border border-slate-200/70 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Grid className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      Guías magnéticas y alineación inteligente
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      Ajusta elementos al centro y bordes automáticamente
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSnapGuides(!snapGuides)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    snapGuides ? 'bg-purple-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform shadow-xs ${
                      snapGuides ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Alta calidad de renderizado */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/70 dark:bg-[#1b1f2b] border border-slate-200/70 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      Renderizado en alta definición
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      Nitidez vectorial al escalar capas en pantalla
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setHighQualityPreview(!highQualityPreview)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    highQualityPreview ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform shadow-xs ${
                      highQualityPreview ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Autoguardado */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/70 dark:bg-[#1b1f2b] border border-slate-200/70 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Save className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      Guardado automático en tiempo real
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      Conserva cada cambio en tu navegador sin perder trabajo
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setAutoSaveEnabled(!autoSaveEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    autoSaveEnabled ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform shadow-xs ${
                      autoSaveEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#1a1d27] border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Los cambios de tema se aplican al instante</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
