import { CustomFont } from '../types';

export const STORAGE_KEY_CUSTOM_FONTS = 'creava_custom_fonts';

// Curated selection of popular Google Fonts with diverse typographic personalities
export interface GoogleFontPreset {
  name: string;
  category: 'Display' | 'Manuscrita' | 'Elegante' | 'Moderna' | 'Retro' | 'Sci-Fi' | 'Vintage';
  sampleText: string;
  cssFamily: string;
}

export const POPULAR_GOOGLE_FONTS: GoogleFontPreset[] = [
  // --- MODERNA (Sans-serif & Clean) ---
  { name: 'Montserrat', category: 'Moderna', sampleText: 'DISEÑO CONTEMPORÁNEO', cssFamily: "'Montserrat', sans-serif" },
  { name: 'Poppins', category: 'Moderna', sampleText: 'Creatividad sin límites', cssFamily: "'Poppins', sans-serif" },
  { name: 'Inter', category: 'Moderna', sampleText: 'Experiencia Digital 2026', cssFamily: "'Inter', sans-serif" },
  { name: 'Outfit', category: 'Moderna', sampleText: 'Tendencia & Minimalismo', cssFamily: "'Outfit', sans-serif" },
  { name: 'DM Sans', category: 'Moderna', sampleText: 'Estructura geométrica limpia', cssFamily: "'DM Sans', sans-serif" },
  { name: 'Plus Jakarta Sans', category: 'Moderna', sampleText: 'Tipografía de nueva generación', cssFamily: "'Plus Jakarta Sans', sans-serif" },
  { name: 'Raleway', category: 'Moderna', sampleText: 'Elegancia sofisticada', cssFamily: "'Raleway', sans-serif" },
  { name: 'Nunito', category: 'Moderna', sampleText: 'Bordes redondeados amigables', cssFamily: "'Nunito', sans-serif" },
  { name: 'Quicksand', category: 'Moderna', sampleText: 'Diseño fresco y moderno', cssFamily: "'Quicksand', sans-serif" },
  { name: 'Rubik', category: 'Moderna', sampleText: 'Carácter firme y actual', cssFamily: "'Rubik', sans-serif" },
  { name: 'Work Sans', category: 'Moderna', sampleText: 'Claridad editorial perfecta', cssFamily: "'Work Sans', sans-serif" },
  { name: 'Fira Sans', category: 'Moderna', sampleText: 'Rendimiento visual óptimo', cssFamily: "'Fira Sans', sans-serif" },
  { name: 'Comfortaa', category: 'Moderna', sampleText: 'Suavidad y estilo zen', cssFamily: "'Comfortaa', sans-serif" },
  { name: 'Syne', category: 'Moderna', sampleText: 'Arquitectura & Vanguardia', cssFamily: "'Syne', sans-serif" },
  { name: 'Righteous', category: 'Moderna', sampleText: 'DISEÑO VANGUARDISTA', cssFamily: "'Righteous', sans-serif" },

  // --- ELEGANTE (Serif & Luxury) ---
  { name: 'Playfair Display', category: 'Elegante', sampleText: 'Edición de Lujo & Moda', cssFamily: "'Playfair Display', serif" },
  { name: 'Cormorant Garamond', category: 'Elegante', sampleText: 'Alta Joyería & Perfumería', cssFamily: "'Cormorant Garamond', serif" },
  { name: 'Cinzel', category: 'Elegante', sampleText: 'HERENCIA CLÁSICA', cssFamily: "'Cinzel', serif" },
  { name: 'Cinzel Decorative', category: 'Elegante', sampleText: 'ARTE IMPERIAL', cssFamily: "'Cinzel Decorative', serif" },
  { name: 'Abril Fatface', category: 'Elegante', sampleText: 'Titulares de Gran Impacto', cssFamily: "'Abril Fatface', serif" },
  { name: 'DM Serif Display', category: 'Elegante', sampleText: 'Publicación Distinguida', cssFamily: "'DM Serif Display', serif" },
  { name: 'Bodoni Moda', category: 'Elegante', sampleText: 'Haute Couture & Glamour', cssFamily: "'Bodoni Moda', serif" },
  { name: 'Lora', category: 'Elegante', sampleText: 'Lectura poética y cálida', cssFamily: "'Lora', serif" },
  { name: 'Merriweather', category: 'Elegante', sampleText: 'Historias que inspiran', cssFamily: "'Merriweather', serif" },
  { name: 'Prata', category: 'Elegante', sampleText: 'Serifa noble refinada', cssFamily: "'Prata', serif" },
  { name: 'EB Garamond', category: 'Elegante', sampleText: 'Tradición tipográfica atemporal', cssFamily: "'EB Garamond', serif" },

  // --- DISPLAY & IMPACTO (Titulares y Posters) ---
  { name: 'Bebas Neue', category: 'Display', sampleText: 'OFERTA DESTACADA 50% OFF', cssFamily: "'Bebas Neue', sans-serif" },
  { name: 'Anton', category: 'Display', sampleText: 'TITULARES FUERTES Y CONTUNDENTES', cssFamily: "'Anton', sans-serif" },
  { name: 'Oswald', category: 'Display', sampleText: 'NOTICIAS & COMUNICACIÓN', cssFamily: "'Oswald', sans-serif" },
  { name: 'Bangers', category: 'Display', sampleText: '¡GRAN IMPACTO POP ART!', cssFamily: "'Bangers', cursive" },
  { name: 'Lobster', category: 'Display', sampleText: 'Creaciones Únicas & Sabrosas', cssFamily: "'Lobster', cursive" },
  { name: 'Russo One', category: 'Display', sampleText: 'PODER & ENERGÍA PURA', cssFamily: "'Russo One', sans-serif" },
  { name: 'Bungee', category: 'Display', sampleText: 'URBAN STREETWEAR 2026', cssFamily: "'Bungee', cursive" },
  { name: 'Permanent Marker', category: 'Display', sampleText: 'TRAZOS AUTÉNTICOS', cssFamily: "'Permanent Marker', cursive" },
  { name: 'Fredoka', category: 'Display', sampleText: 'Divertido, juvenil y audaz', cssFamily: "'Fredoka', sans-serif" },
  { name: 'Kanit', category: 'Display', sampleText: 'DEPORTE Y DINAMISMO', cssFamily: "'Kanit', sans-serif" },

  // --- MANUSCRITA (Handwriting & Scripts) ---
  { name: 'Dancing Script', category: 'Manuscrita', sampleText: 'Elegancia con Caligrafía', cssFamily: "'Dancing Script', cursive" },
  { name: 'Pacifico', category: 'Manuscrita', sampleText: 'Buenas Vibras Veraniegas', cssFamily: "'Pacifico', cursive" },
  { name: 'Caveat', category: 'Manuscrita', sampleText: 'Notas espontáneas a mano alzada', cssFamily: "'Caveat', cursive" },
  { name: 'Great Vibes', category: 'Manuscrita', sampleText: 'Invitaciones de Boda & Gala', cssFamily: "'Great Vibes', cursive" },
  { name: 'Sacramento', category: 'Manuscrita', sampleText: 'Dedicatorias especiales con amor', cssFamily: "'Sacramento', cursive" },
  { name: 'Satisfy', category: 'Manuscrita', sampleText: 'Firma personal de autor', cssFamily: "'Satisfy', cursive" },
  { name: 'Kalam', category: 'Manuscrita', sampleText: 'Apuntes cotidianos y frescos', cssFamily: "'Kalam', cursive" },
  { name: 'Kaushan Script', category: 'Manuscrita', sampleText: 'Pinceladas con carácter rústico', cssFamily: "'Kaushan Script', cursive" },
  { name: 'Yellowtail', category: 'Manuscrita', sampleText: 'Rotulación americana retro', cssFamily: "'Yellowtail', cursive" },
  { name: 'Alex Brush', category: 'Manuscrita', sampleText: 'Trazos suaves y armoniosos', cssFamily: "'Alex Brush', cursive" },
  { name: 'Courgette', category: 'Manuscrita', sampleText: 'Menús gourmet & Cafeterías', cssFamily: "'Courgette', cursive" },
  { name: 'Architects Daughter', category: 'Manuscrita', sampleText: 'Bocetos y planos creativos', cssFamily: "'Architects Daughter', cursive" },

  // --- RETRO & VINTAGE ---
  { name: 'Special Elite', category: 'Vintage', sampleText: 'Máquina de Escribir 1945', cssFamily: "'Special Elite', cursive" },
  { name: 'Monoton', category: 'Retro', sampleText: 'DISCO PARTY 1970', cssFamily: "'Monoton', cursive" },
  { name: 'Playball', category: 'Vintage', sampleText: 'Club Deportivo Clásico', cssFamily: "'Playball', cursive" },
  { name: 'Press Start 2P', category: 'Retro', sampleText: 'PIXEL ARCADE 8-BIT', cssFamily: "'Press Start 2P', monospace" },
  { name: 'VT323', category: 'Retro', sampleText: 'TERMINAL COMPUTADORA 1982', cssFamily: "'VT323', monospace" },
  { name: 'Silkscreen', category: 'Retro', sampleText: 'RETRO GAMING RETRO', cssFamily: "'Silkscreen', monospace" },

  // --- SCI-FI & TECH ---
  { name: 'Orbitron', category: 'Sci-Fi', sampleText: 'CYBERPUNK MATRIX SYSTEM', cssFamily: "'Orbitron', sans-serif" },
  { name: 'Audiowide', category: 'Sci-Fi', sampleText: 'AEROSPACE TECHNOLOGY', cssFamily: "'Audiowide', sans-serif" },
];

// In-memory cache of already loaded fonts
const loadedGoogleFontsCache = new Set<string>();

/**
 * Loads a Google Font dynamically by injecting a `<link>` tag
 */
export function loadGoogleFontToDom(fontName: string): Promise<boolean> {
  return new Promise((resolve) => {
    const trimmedName = fontName.trim();
    const safeId = `google-font-${trimmedName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    
    if (document.getElementById(safeId) || loadedGoogleFontsCache.has(trimmedName.toLowerCase())) {
      resolve(true);
      return;
    }

    const formattedFont = encodeURIComponent(trimmedName).replace(/%20/g, '+');
    // We use the universally supported query format: family=FontName&display=swap
    const href = `https://fonts.googleapis.com/css2?family=${formattedFont}&display=swap`;

    const link = document.createElement('link');
    link.id = safeId;
    link.rel = 'stylesheet';
    link.href = href;
    
    link.onload = () => {
      loadedGoogleFontsCache.add(trimmedName.toLowerCase());
      if ('fonts' in document) {
        document.fonts.load(`16px "${trimmedName}"`).then(() => resolve(true)).catch(() => resolve(true));
      } else {
        resolve(true);
      }
    };
    link.onerror = () => {
      console.warn(`Could not load Google font: ${trimmedName}`);
      resolve(false);
    };

    document.head.appendChild(link);
  });
}

/**
 * Injects a base64 font file (.ttf, .otf, .woff, .woff2) into the document
 */
export async function injectFontFileToDom(font: CustomFont): Promise<boolean> {
  if (!font.dataUrl) return false;

  const styleId = `custom-font-style-${font.id}`;
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @font-face {
        font-family: '${font.name}';
        src: url('${font.dataUrl}');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }

  // Also register via FontFace API for canvas / export safety
  if ('fonts' in document && typeof FontFace !== 'undefined') {
    try {
      const fontFace = new FontFace(font.name, `url(${font.dataUrl})`);
      await fontFace.load();
      document.fonts.add(fontFace);
    } catch (err) {
      console.warn('FontFace API loading notice:', err);
    }
  }

  return true;
}

/**
 * Loads all saved custom fonts from localStorage on application start
 */
export function getSavedCustomFonts(): CustomFont[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_FONTS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (err) {
    console.warn('Failed to parse saved custom fonts:', err);
  }
  return [];
}

/**
 * Re-applies all saved custom fonts to the browser DOM
 */
export function initializeCustomFonts(): CustomFont[] {
  const fonts = getSavedCustomFonts();
  fonts.forEach((font) => {
    if (font.sourceType === 'file') {
      injectFontFileToDom(font);
    } else if (font.sourceType === 'google') {
      loadGoogleFontToDom(font.googleFontFamily || font.name);
    } else if (font.sourceType === 'url' && font.url) {
      loadFontFromExternalUrl(font.name, font.url);
    }
  });
  return fonts;
}

/**
 * Saves a new custom font or updates the font list
 */
export function saveCustomFontToStorage(newFont: CustomFont): CustomFont[] {
  const current = getSavedCustomFonts();
  const existsIndex = current.findIndex(f => f.name.toLowerCase() === newFont.name.toLowerCase());
  let updated: CustomFont[];
  if (existsIndex >= 0) {
    updated = [...current];
    updated[existsIndex] = newFont;
  } else {
    updated = [newFont, ...current];
  }

  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_FONTS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save custom fonts to localStorage (quota exceeded?):', err);
  }

  return updated;
}

/**
 * Deletes a custom font by ID
 */
export function removeCustomFontFromStorage(id: string): CustomFont[] {
  const current = getSavedCustomFonts();
  const updated = current.filter(f => f.id !== id);

  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_FONTS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update custom fonts after removal:', err);
  }

  // Remove DOM node
  const styleEl = document.getElementById(`custom-font-style-${id}`);
  if (styleEl) styleEl.remove();

  return updated;
}

/**
 * Read File object to Data URL
 */
export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * Loads font from arbitrary web stylesheet URL or @import
 */
export function loadFontFromExternalUrl(fontName: string, url: string): void {
  const safeId = `external-font-${encodeURIComponent(fontName).toLowerCase()}`;
  if (document.getElementById(safeId)) return;

  const link = document.createElement('link');
  link.id = safeId;
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

/**
 * Installs a Google Font into the DOM and persists it to customFonts storage
 */
export async function installGoogleFont(fontName: string, category: string = 'Google Fonts'): Promise<CustomFont | null> {
  const trimmed = fontName.trim();
  if (!trimmed) return null;

  const success = await loadGoogleFontToDom(trimmed);
  if (!success) return null;

  const newFont: CustomFont = {
    id: `font-gf-${Date.now()}-${trimmed.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    name: trimmed,
    family: `'${trimmed}', sans-serif`,
    category,
    sourceType: 'google',
    googleFontFamily: trimmed,
    createdAt: Date.now(),
  };

  saveCustomFontToStorage(newFont);
  return newFont;
}

