export type ElementType = 'text' | 'shape' | 'image' | 'sticker' | 'frame' | 'vector';

export type ShapeType = 
  | 'rectangle' 
  | 'circle' 
  | 'triangle' 
  | 'star' 
  | 'heart' 
  | 'arrow' 
  | 'badge' 
  | 'speech-bubble'
  | 'polygon'
  | 'diamond'
  | 'hexagon'
  | 'wave'
  | 'line'
  | 'blob';

export type TextEffect = 'none' | 'shadow' | 'lift' | 'neon' | 'hollow' | 'background';

export interface CanvasElement {
  id: string;
  type: ElementType;
  name?: string; // Custom layer name
  groupId?: string; // Grouping identifier
  hidden?: boolean; // Layer visibility toggle
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  locked?: boolean;
  zIndex: number;
  
  // Text specific
  content?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  letterSpacing?: number; // in px
  lineHeight?: number; // ratio e.g. 1.2
  effect?: TextEffect;
  effectColor?: string;
  
  // Shape / Vector specific
  shapeType?: ShapeType;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  borderRadius?: number;
  svgPath?: string; // SVG path data for vector elements
  svgViewBox?: string;
  svgContent?: string; // Full SVG markup for multi-color pixel art / complex graphics
  isPixelArt?: boolean; // Sharp crisp pixelated rendering flag
  
  // Graphic / Shape Effects
  shadowEffect?: 'none' | 'drop' | 'lift' | 'glow' | 'outline' | 'neon';
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowOpacity?: number;
  graphicBlur?: number; // in px
  duotoneFilter?: string;
  
  // Image / Sticker specific
  src?: string;
  alt?: string;
  objectFit?: 'cover' | 'contain';
  filter?: {
    brightness?: number; // 0 to 200 (100 is normal)
    contrast?: number;   // 0 to 200 (100 is normal)
    saturation?: number; // 0 to 200 (100 is normal)
    blur?: number;       // in px
    grayscale?: number;  // 0 to 100
    sepia?: number;      // 0 to 100
    hueRotate?: number;  // 0 to 360 deg
  };
  flipH?: boolean;
  flipV?: boolean;

  // Frame specific
  frameShape?: string;
  frameClipPath?: string;
  frameViewBox?: string;
  frameOverlaySvg?: string;
  frameBorderColor?: string;
  frameBorderWidth?: number;
}

export interface CanvasPage {
  id: string;
  title: string;
  background: {
    type: 'color' | 'gradient' | 'image';
    value: string;
  };
  elements: CanvasElement[];
  notes?: string;
}

export interface PresetSize {
  id: string;
  name: string;
  category: string;
  width: number;
  height: number;
  icon: string;
  description: string;
}

export interface DesignDocument {
  id: string;
  title: string;
  width: number;
  height: number;
  pages: CanvasPage[];
  audioTrackId?: string; // Selected background AI music track
  createdAt: number;
  updatedAt: number;
}

export type ActiveSidebarTab = 
  | 'templates' 
  | 'elements' 
  | 'text' 
  | 'uploads' 
  | 'layers' 
  | 'background' 
  | 'magic'
  | 'music'
  | 'resources';

export type ContextualSidebarPanel = 'color' | 'fonts' | 'effects' | null;

export interface HistoryState {
  past: DesignDocument[];
  present: DesignDocument;
  future: DesignDocument[];
}

export interface MusicTrack {
  id: string;
  title: string;
  category: 'Lo-Fi' | 'Pop' | 'Ambient' | 'Corporate' | 'Cinematic' | 'Acoustic' | 'Synthwave';
  duration: string;
  durationSec: number;
  bpm: number;
  scale: 'major' | 'minor' | 'pentatonic';
  baseFreq: number;
  mood: string;
  tags: string[];
}

export interface GraphicResource {
  id: string;
  name: string;
  category: 'Fotos' | 'Ilustraciones' | 'Iconos';
  url: string;
  tags: string[];
  width?: number;
  height?: number;
}

export interface CustomFont {
  id: string;
  name: string;
  family: string;
  category: string;
  sourceType: 'file' | 'google' | 'url';
  dataUrl?: string; // base64 data for uploaded TTF/OTF/WOFF/WOFF2
  url?: string;
  googleFontFamily?: string;
  createdAt: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  avatarColor?: string;
  initials: string;
  plan: 'Gratuito' | 'Pro' | 'Educación';
  isLoggedIn: boolean;
  createdAt: number;
  lastLoginAt?: number;
}

