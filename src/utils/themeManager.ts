export type ThemeMode = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'creava_theme_mode';

export function getThemeMode(): ThemeMode {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  } catch (e) {
    console.warn('Error reading theme from localStorage:', e);
  }
  return 'light';
}

export function isDarkModeActive(): boolean {
  const mode = getThemeMode();
  if (mode === 'dark') return true;
  if (mode === 'light') return false;
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
}

export function applyTheme(mode: ThemeMode): void {
  if (typeof document === 'undefined') return;

  const isDark =
    mode === 'dark' ||
    (mode === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const root = document.documentElement;
  const body = document.body;

  if (isDark) {
    root.classList.add('dark');
    body.classList.add('dark');
  } else {
    root.classList.remove('dark');
    body.classList.remove('dark');
  }
}

export function setThemeMode(mode: ThemeMode): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch (e) {
    console.warn('Error saving theme to localStorage:', e);
  }
  applyTheme(mode);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('creava_theme_changed', { detail: { mode, isDark: isDarkModeActive() } }));
  }
}

export function initTheme(): void {
  const mode = getThemeMode();
  applyTheme(mode);

  if (typeof window !== 'undefined' && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (getThemeMode() === 'system') {
        applyTheme('system');
        window.dispatchEvent(new CustomEvent('creava_theme_changed', { detail: { mode: 'system', isDark: isDarkModeActive() } }));
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else {
      mediaQuery.addListener(handleSystemChange);
    }
  }
}
