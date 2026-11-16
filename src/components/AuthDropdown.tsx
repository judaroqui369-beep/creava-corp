import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  User,
  LogIn,
  LogOut,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
  X,
  ChevronDown,
  Crown,
  ShieldCheck,
  Type,
  LayoutTemplate,
  ArrowRight
} from 'lucide-react';
import { UserProfile } from '../types';
import {
  getUserProfile,
  isFirstVisit,
  markFirstVisitCompleted,
  firebaseSignIn,
  firebaseSignUp,
  firebaseGoogleSignIn,
  firebaseSignOut
} from '../utils/authManager';

interface AuthDropdownProps {
  align?: 'left' | 'right';
  showLabel?: boolean;
  onOpenFontImporter?: () => void;
  onNavigateToTab?: (tab: string) => void;
}

export const AuthDropdown: React.FC<AuthDropdownProps> = ({
  align = 'right',
  showLabel = true,
  onOpenFontImporter,
  onNavigateToTab
}) => {
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => getUserProfile());
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [isLoading, setIsLoading] = useState(false);
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalCardRef = useRef<HTMLDivElement>(null);

  // Check first visit on mount and auto-open dropdown
  useEffect(() => {
    const first = isFirstVisit();
    if (first && !currentUser.isLoggedIn) {
      setIsFirstTime(true);
      // Automatically unfold the login dropdown on first visit
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentUser.isLoggedIn]);

  // Listen to external auth changes (cross-component sync)
  useEffect(() => {
    const handleAuthChange = (e: Event) => {
      const customEvent = e as CustomEvent<UserProfile>;
      if (customEvent.detail) {
        setCurrentUser(customEvent.detail);
      }
    };
    window.addEventListener('creava_auth_changed', handleAuthChange);
    return () => window.removeEventListener('creava_auth_changed', handleAuthChange);
  }, []);

  // Keyboard navigation (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        markFirstVisitCompleted();
        setIsFirstTime(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      setFormError('');
      setSuccessMessage('');
    }
    if (isFirstTime) {
      markFirstVisitCompleted();
      setIsFirstTime(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    markFirstVisitCompleted();
    setIsFirstTime(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!email || !email.includes('@')) {
      setFormError('Por favor ingresa un correo electrónico válido');
      return;
    }

    if (password.length < 6) {
      setFormError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (mode === 'register' && !name.trim()) {
      setFormError('Por favor ingresa tu nombre completo');
      return;
    }

    setIsLoading(true);
    try {
      if (mode === 'register') {
        const updated = await firebaseSignUp(name.trim(), email, password);
        setCurrentUser(updated);
        setSuccessMessage('¡Cuenta creada y sincronizada con Firebase!');
      } else {
        const updated = await firebaseSignIn(email, password);
        setCurrentUser(updated);
        setSuccessMessage('¡Bienvenido de vuelta! Diseños cargados.');
      }
      setIsFirstTime(false);

      setTimeout(() => {
        setIsOpen(false);
        setSuccessMessage('');
      }, 1000);
    } catch (err: any) {
      console.error('Auth error:', err);
      let msg = 'Ocurrió un error al procesar tu solicitud.';
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        msg = 'Correo o contraseña incorrectos.';
      } else if (err.code === 'auth/email-already-in-use') {
        msg = 'Ya existe una cuenta con este correo. Prueba iniciar sesión.';
      } else if (err.code === 'auth/weak-password') {
        msg = 'La contraseña debe tener al menos 6 caracteres.';
      } else if (err.code === 'auth/invalid-email') {
        msg = 'El formato del correo es inválido.';
      } else if (err.message) {
        msg = err.message;
      }
      setFormError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setFormError('');
    try {
      const updated = await firebaseGoogleSignIn();
      setCurrentUser(updated);
      setSuccessMessage('¡Sesión iniciada con Google!');
      setIsFirstTime(false);

      setTimeout(() => {
        setIsOpen(false);
        setSuccessMessage('');
      }, 1000);
    } catch (err: any) {
      console.error('Google auth error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setFormError('Ventana de acceso cerrada antes de completar.');
      } else if (err.code === 'auth/popup-blocked') {
        setFormError('La ventana emergente de Google fue bloqueada por el navegador.');
      } else {
        setFormError(err.message || 'Error al iniciar sesión con Google.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestContinue = () => {
    markFirstVisitCompleted();
    setIsFirstTime(false);
    setIsOpen(false);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const guest = await firebaseSignOut();
      setCurrentUser(guest);
      setName('');
      setEmail('');
      setPassword('');
      setIsOpen(false);
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        id="btn-auth-dropdown-trigger"
        onClick={handleToggle}
        className={`flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl transition-all relative cursor-pointer ${
          currentUser.isLoggedIn
            ? 'hover:bg-slate-100 text-slate-800'
            : isFirstTime
            ? 'bg-purple-50 text-purple-700 hover:bg-purple-100 ring-2 ring-purple-500/40'
            : 'hover:bg-slate-100 text-slate-700'
        }`}
        title={currentUser.isLoggedIn ? `Perfil de ${currentUser.name}` : 'Iniciar sesión en Creava'}
        aria-expanded={isOpen}
      >
        {/* Avatar badge */}
        <div className="relative">
          <div
            className={`w-8 h-8 rounded-full bg-gradient-to-br ${
              currentUser.isLoggedIn ? currentUser.avatarColor || 'from-[#7d2ae8] to-[#00c4cc]' : 'from-purple-600 to-indigo-600'
            } flex items-center justify-center text-white font-bold text-xs shadow-xs transition-transform hover:scale-105`}
          >
            {currentUser.isLoggedIn ? currentUser.initials : <User className="w-4 h-4" />}
          </div>

          {/* First visit pulse notification dot */}
          {isFirstTime && !currentUser.isLoggedIn && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 border-2 border-white"></span>
            </span>
          )}

          {/* Pro / Logged in crown dot */}
          {currentUser.isLoggedIn && currentUser.plan === 'Pro' && (
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-amber-400 rounded-full border border-white flex items-center justify-center text-[8px] text-amber-950 font-black shadow-2xs">
              ★
            </span>
          )}
        </div>

        {/* User label / Iniciar sesión text */}
        {showLabel && (
          <div className="hidden sm:flex flex-col text-left leading-tight">
            <span className="text-xs font-bold text-slate-800 truncate max-w-[110px]">
              {currentUser.isLoggedIn ? currentUser.name : 'Iniciar sesión'}
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              {currentUser.isLoggedIn ? `${currentUser.plan}` : 'Creava Studio'}
            </span>
          </div>
        )}

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 hidden sm:block ${
            isOpen ? 'rotate-180 text-purple-600' : ''
          }`}
        />
      </button>

      {/* DROPDOWN / AUTH MODAL - Rendered directly in document.body via Portal to prevent any stacking context clipping */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div
          id="auth-modal-overlay"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
        >
          <div
            id="auth-dropdown-menu"
            ref={modalCardRef}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden transition-all animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
          >
            {/* Top Banner if first time */}
            {isFirstTime && !currentUser.isLoggedIn && (
              <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 px-5 py-3 text-white flex items-start justify-between gap-3 shadow-xs flex-shrink-0">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-white">¡Bienvenido a Creava Studio!</p>
                    <p className="text-[11px] text-purple-100 leading-snug">
                      Inicia sesión para guardar tus diseños en la nube y desbloquear todas las herramientas.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer flex-shrink-0"
                  title="Cerrar aviso"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 p-5 space-y-4">
              {/* If NOT LOGGED IN: Sign in / Register Form */}
              {!currentUser.isLoggedIn ? (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00c4cc] to-[#7d2ae8] flex items-center justify-center shadow-2xs">
                        <span className="text-white font-black text-xs">C</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta gratis'}
                        </h3>
                        <p className="text-[10px] text-slate-500">
                          Accede a tus proyectos y recursos desde cualquier lugar
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleClose}
                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                      title="Cerrar"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

              {/* Mode Tabs: Iniciar sesión / Registrarse */}
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">
                <button
                  type="button"
                  id="tab-auth-login"
                  onClick={() => {
                    setMode('login');
                    setFormError('');
                  }}
                  className={`py-1.5 px-3 rounded-lg transition-all ${
                    mode === 'login'
                      ? 'bg-white text-purple-700 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Iniciar Sesión
                </button>
                <button
                  type="button"
                  id="tab-auth-register"
                  onClick={() => {
                    setMode('register');
                    setFormError('');
                  }}
                  className={`py-1.5 px-3 rounded-lg transition-all ${
                    mode === 'register'
                      ? 'bg-white text-purple-700 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Registrarse
                </button>
              </div>

              {/* Google 1-Click Login Button */}
              <button
                type="button"
                id="btn-login-google"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl flex items-center justify-center gap-2.5 text-xs font-bold text-slate-700 shadow-2xs hover:shadow-xs transition-all cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                )}
                <span>Continuar con Google</span>
              </button>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-slate-200 w-full"></div>
                <span className="bg-white px-2.5 text-[10px] text-slate-400 font-medium uppercase tracking-wider relative">
                  o con tu correo
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {mode === 'register' && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="auth-input-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Cifra Studio"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="auth-input-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@ejemplo.com"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold text-slate-700">
                      Contraseña
                    </label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={() => alert('Para reestablecer tu contraseña, ingresa tu correo y contacta al soporte de Creava.')}
                        className="text-[10px] text-purple-600 hover:text-purple-800 font-semibold"
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="auth-input-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-purple-600 focus:bg-white rounded-xl pl-9 pr-9 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-0.5">
                  <label className="flex items-center gap-1.5 cursor-pointer text-[11px] text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
                    />
                    <span>Recordar sesión</span>
                  </label>

                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Seguro SSL
                  </span>
                </div>

                {/* Error Banner */}
                {formError && (
                  <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium">
                    {formError}
                  </div>
                )}

                {/* Success Banner */}
                {successMessage && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  id="btn-auth-submit"
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#7d2ae8] to-[#5c2ae8] hover:from-[#6a24c5] hover:to-[#4e22c4] text-white font-bold text-xs rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <LogIn className="w-4 h-4" />
                  )}
                  <span>
                    {isLoading 
                      ? 'Conectando...' 
                      : mode === 'login' ? 'Iniciar Sesión' : 'Crear Mi Cuenta'
                    }
                  </span>
                </button>
              </form>

              {/* Guest option */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  id="btn-auth-continue-guest"
                  onClick={handleGuestContinue}
                  className="w-full py-2 px-3 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 rounded-xl font-semibold text-[11px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Continuar como invitado sin cuenta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          ) : (
            /* If LOGGED IN: Profile & Workspace details */
            <div className="space-y-4">
              {/* Header profile info */}
              <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                      currentUser.avatarColor || 'from-[#7d2ae8] to-[#00c4cc]'
                    } flex items-center justify-center text-white font-extrabold text-base shadow-sm ring-2 ring-purple-100`}
                  >
                    {currentUser.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-slate-900">{currentUser.name}</h3>
                      <span className="text-[9px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                        <Crown className="w-2.5 h-2.5 text-amber-600" />
                        {currentUser.plan}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 truncate max-w-[170px]">{currentUser.email || 'Sin correo asociado'}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-semibold mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Sincronizado en la nube
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  title="Cerrar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Workspace status */}
              <div className="p-3 bg-gradient-to-br from-purple-50 via-indigo-50/60 to-purple-50 rounded-xl border border-purple-100 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-900">Espacio de Trabajo Creava</span>
                  <span className="text-[10px] text-purple-700 font-semibold bg-white px-2 py-0.5 rounded-md border border-purple-200">
                    Ilimitado
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Tus proyectos, tipografías y recursos se guardan automáticamente en tu navegador y almacenamiento local.
                </p>
              </div>

              {/* Navigation shortcuts */}
              <div className="space-y-1 text-xs font-semibold text-slate-700">
                {onNavigateToTab && (
                  <button
                    onClick={() => {
                      onNavigateToTab('proyectos');
                      handleClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <LayoutTemplate className="w-4 h-4 text-purple-600" />
                      <span>Tus Proyectos guardados</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Ver todos</span>
                  </button>
                )}

                {onOpenFontImporter && (
                  <button
                    onClick={() => {
                      onOpenFontImporter();
                      handleClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Type className="w-4 h-4 text-indigo-600" />
                      <span>Gestor de Tipografías</span>
                    </div>
                    <span className="text-[10px] text-purple-600 font-bold">Google Fonts</span>
                  </button>
                )}
              </div>

              {/* Logout button */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  id="btn-auth-logout"
                  onClick={handleLogout}
                  className="w-full py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Cerrar sesión</span>
                </button>
              </div>
            </div>
          )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
