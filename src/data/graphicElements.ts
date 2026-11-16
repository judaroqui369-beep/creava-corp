import { PIXEL_ART_STICKERS } from './pixelArtStickers';
import { FORMAL_STICKERS } from './formalStickers';
import { CARTOON_STICKERS } from './cartoonStickers';
import { VINTAGE_CARTOON_STICKERS } from './vintageCartoonStickers';
import { COMIC_STICKERS } from './comicStickers';
import { PAPER_STICKERS } from './paperStickers';
import { THREE_D_ELEMENTS } from './threeDElements';
import { CANVA_PHOTO_FRAMES, generateCanvaFrameSvgMarkup } from './framesData';

export interface GraphicElementItem {
  id: string;
  name: string;
  category: 'Elementos 3D' | 'Marcos para Fotos' | 'Stickers Papel & Rasgado' | 'Stickers Cómic' | 'Stickers Pixel Art' | 'Stickers Formales' | 'Stickers Cartoon' | 'Stickers Retro 1930s' | 'Redes Sociales' | 'Formas Geométricas' | 'Elementos Abstractos' | 'Insignias y Ofertas' | 'Líneas y Flechas' | 'Ilustraciones & Stickers';
  subCategory?: string;
  svgPath?: string;
  svgContent?: string;
  overlaySvg?: string;
  clipPath?: string;
  defaultWidth?: number;
  defaultHeight?: number;
  dataUri?: string;
  viewBox: string;
  defaultFill: string;
  defaultStroke?: string;
  strokeWidth?: number;
  tags: string[];
}

const BASE_GRAPHIC_ELEMENTS: GraphicElementItem[] = [
  // 1. Iconos de Redes Sociales (10)
  {
    id: 'icon-instagram',
    name: 'Instagram',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#E1306C',
    svgPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    tags: ['social', 'instagram', 'redes', 'foto', 'feed']
  },
  {
    id: 'icon-whatsapp',
    name: 'WhatsApp',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#25D366',
    svgPath: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z',
    tags: ['social', 'whatsapp', 'chat', 'contacto', 'mensaje']
  },
  {
    id: 'icon-tiktok',
    name: 'TikTok',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#000000',
    svgPath: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
    tags: ['social', 'tiktok', 'video', 'viral', 'reels']
  },
  {
    id: 'icon-youtube',
    name: 'YouTube',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#FF0000',
    svgPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    tags: ['social', 'youtube', 'video', 'stream', 'canal']
  },
  {
    id: 'icon-facebook',
    name: 'Facebook',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#1877F2',
    svgPath: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    tags: ['social', 'facebook', 'meta', 'comunidad', 'perfil']
  },
  {
    id: 'icon-twitter-x',
    name: 'X (Twitter)',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#000000',
    svgPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    tags: ['social', 'twitter', 'x', 'noticias', 'tweet']
  },
  {
    id: 'icon-linkedin',
    name: 'LinkedIn',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#0A66C2',
    svgPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    tags: ['social', 'linkedin', 'empleo', 'profesional', 'cv']
  },
  {
    id: 'icon-pinterest',
    name: 'Pinterest',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#BD081C',
    svgPath: 'M12 0a12 12 0 0 0-4.37 23.18c-.05-.98-.09-2.5.02-3.57l1.04-4.41s-.27-.53-.27-1.32c0-1.24.72-2.16 1.62-2.16.76 0 1.13.57 1.13 1.26 0 .77-.49 1.92-.74 2.99-.21.89.45 1.62 1.33 1.62 1.6 0 2.83-1.69 2.83-4.12 0-2.16-1.55-3.66-3.76-3.66-2.56 0-4.06 1.92-4.06 3.9 0 .77.3 1.6.67 2.05.07.09.08.17.06.26l-.25 1.02c-.04.16-.14.2-.31.12-1.15-.54-1.87-2.22-1.87-3.58 0-2.91 2.12-5.59 6.11-5.59 3.21 0 5.7 2.29 5.7 5.34 0 3.19-2.01 5.75-4.8 5.75-.94 0-1.82-.49-2.12-1.07l-.58 2.2c-.21.81-.78 1.83-1.16 2.45A12 12 0 1 0 12 0z',
    tags: ['social', 'pinterest', 'ideas', 'diseño', 'tablero']
  },
  {
    id: 'icon-telegram',
    name: 'Telegram',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#229ED9',
    svgPath: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.895-1.45 6.452-2.1 9.493-.275 1.286-.803 1.543-1.31 1.579-.982.08-1.724-.652-2.673-1.274-1.486-.973-2.325-1.579-3.767-2.53-1.666-1.098-.586-1.701.364-2.688.248-.258 4.568-4.186 4.652-4.542.01-.045.02-.211-.08-.299-.098-.088-.243-.058-.348-.035-.149.034-2.528 1.608-7.135 4.717-.674.463-1.286.688-1.834.676-.605-.013-1.768-.342-2.634-.624-1.062-.345-1.906-.527-1.832-1.113.039-.305.46-.617 1.263-.938 4.938-2.152 8.234-3.57 9.889-4.256 4.707-1.956 5.683-2.296 6.32-2.308.14-.002.453.033.655.198.17.139.217.327.24.46.024.133.053.435.031.67z',
    tags: ['social', 'telegram', 'mensaje', 'canal', 'seguro']
  },
  {
    id: 'icon-spotify',
    name: 'Spotify',
    category: 'Redes Sociales',
    viewBox: '0 0 24 24',
    defaultFill: '#1DB954',
    svgPath: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
    tags: ['social', 'spotify', 'musica', 'podcast', 'audio']
  },

  // 2. Formas Geométricas (10)
  {
    id: 'geo-circle',
    name: 'Círculo Perfecto',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#7d2ae8',
    svgPath: 'M50 0 C77.61 0 100 22.39 100 50 C100 77.61 77.61 100 50 100 C22.39 100 0 77.61 0 50 C0 22.39 22.39 0 50 0 Z',
    tags: ['geometria', 'circulo', 'redondo', 'forma']
  },
  {
    id: 'geo-square-round',
    name: 'Cuadrado Esquinas Curvas',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#00c4cc',
    svgPath: 'M20 0 H80 A20 20 0 0 1 100 20 V80 A20 20 0 0 1 80 100 H20 A20 20 0 0 1 0 80 V20 A20 20 0 0 1 20 0 Z',
    tags: ['geometria', 'cuadrado', 'rectangulo', 'squircle']
  },
  {
    id: 'geo-triangle',
    name: 'Triángulo Equilátero',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#FF5E3A',
    svgPath: 'M50 5 L98 95 L2 95 Z',
    tags: ['geometria', 'triangulo', 'piramide', 'alerta']
  },
  {
    id: 'geo-diamond',
    name: 'Rombo / Diamante',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#FFB800',
    svgPath: 'M50 0 L100 50 L50 100 L0 50 Z',
    tags: ['geometria', 'rombo', 'diamante', 'lujo']
  },
  {
    id: 'geo-hexagon',
    name: 'Hexágono Moderno',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#6366F1',
    svgPath: 'M50 2 L93 25 L93 75 L50 98 L7 75 L7 25 Z',
    tags: ['geometria', 'hexagono', 'tecnologia', 'poligono']
  },
  {
    id: 'geo-octagon',
    name: 'Octágono',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#EC4899',
    svgPath: 'M30 0 L70 0 L100 30 L100 70 L70 100 L30 100 L0 70 L0 30 Z',
    tags: ['geometria', 'octagono', 'stop', 'sello']
  },
  {
    id: 'geo-pentagon',
    name: 'Pentágono',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#10B981',
    svgPath: 'M50 2 L98 38 L80 98 L20 98 L2 38 Z',
    tags: ['geometria', 'pentagono', 'forma', 'poligono']
  },
  {
    id: 'geo-star-5',
    name: 'Estrella 5 Puntas',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#F59E0B',
    svgPath: 'M50 0 L63 35 L100 36 L71 59 L82 95 L50 73 L18 95 L29 59 L0 36 L37 35 Z',
    tags: ['geometria', 'estrella', 'calificacion', 'favorito']
  },
  {
    id: 'geo-star-8',
    name: 'Estrella Destello 8 Puntas',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#8B5CF6',
    svgPath: 'M50 0 L60 35 L95 20 L75 50 L95 80 L60 65 L50 100 L40 65 L5 80 L25 50 L5 20 L40 35 Z',
    tags: ['geometria', 'estrella', 'brillo', 'magia']
  },
  {
    id: 'geo-trapezoid',
    name: 'Trapecio',
    category: 'Formas Geométricas',
    viewBox: '0 0 100 100',
    defaultFill: '#3B82F6',
    svgPath: 'M20 15 L80 15 L100 85 L0 85 Z',
    tags: ['geometria', 'trapecio', 'base', 'bloque']
  },

  // 3. Elementos Abstractos y Blobs (8)
  {
    id: 'abstract-blob-1',
    name: 'Blob Orgánico Suave',
    category: 'Elementos Abstractos',
    viewBox: '0 0 100 100',
    defaultFill: '#7d2ae8',
    svgPath: 'M44.5,-61.8C57.4,-54.2,67.6,-41.8,72.4,-27.5C77.2,-13.2,76.6,3,71.7,17.4C66.8,31.8,57.6,44.4,45.2,54.1C32.8,63.8,17.2,70.6,1.4,68.7C-14.4,66.8,-30.4,56.2,-43.6,44.2C-56.8,32.2,-67.2,18.8,-70.8,3.5C-74.4,-11.8,-71.2,-29,-61.1,-41.7C-51,-54.4,-34,-62.6,-18.2,-65.4C-2.4,-68.2,14.8,-65.6,44.5,-61.8Z',
    tags: ['abstracto', 'blob', 'organico', 'fluido']
  },
  {
    id: 'abstract-blob-2',
    name: 'Blob Moderno Curvo',
    category: 'Elementos Abstractos',
    viewBox: '0 0 100 100',
    defaultFill: '#00c4cc',
    svgPath: 'M38.8,-52.3C50.2,-45.5,59.3,-34.5,63.8,-21.8C68.3,-9.1,68.2,5.3,63.1,17.9C58,30.5,47.9,41.3,36.2,49.8C24.5,58.3,11.2,64.5,-2.1,67.4C-15.4,70.3,-28.7,69.9,-40.4,62.8C-52.1,55.7,-62.2,41.9,-67.1,26.9C-72,11.9,-71.7,-4.3,-66.2,-18.4C-60.7,-32.5,-50.1,-44.5,-37.6,-50.8C-25.1,-57.1,-10.7,-57.7,2.2,-60.7C15.1,-63.7,27.4,-59.1,38.8,-52.3Z',
    tags: ['abstracto', 'blob', 'moderno', 'ola']
  },
  {
    id: 'abstract-wave-curved',
    name: 'Onda Marina Elegante',
    category: 'Elementos Abstractos',
    viewBox: '0 0 100 60',
    defaultFill: '#38BDF8',
    svgPath: 'M0 30 Q 25 5, 50 30 T 100 30 L 100 60 L 0 60 Z',
    tags: ['abstracto', 'onda', 'ola', 'verano', 'mar']
  },
  {
    id: 'abstract-arch',
    name: 'Arco Arquitectónico Minimal',
    category: 'Elementos Abstractos',
    viewBox: '0 0 100 140',
    defaultFill: '#F472B6',
    svgPath: 'M0 140 V 50 C 0 22.39 22.39 0 50 0 C 77.61 0 100 22.39 100 50 V 140 Z',
    tags: ['abstracto', 'arco', 'arquitectura', 'portal']
  },
  {
    id: 'abstract-sunburst',
    name: 'Ráfaga de Sol (Sunburst)',
    category: 'Elementos Abstractos',
    viewBox: '0 0 100 100',
    defaultFill: '#F59E0B',
    svgPath: 'M50 0 L54 35 L85 15 L65 45 L100 50 L65 55 L85 85 L54 65 L50 100 L46 65 L15 85 L35 55 L0 50 L35 45 L15 15 L46 35 Z',
    tags: ['abstracto', 'sol', 'rayos', 'verano', 'calor']
  },
  {
    id: 'abstract-circle-ring',
    name: 'Anillo Circular Grueso',
    category: 'Elementos Abstractos',
    viewBox: '0 0 100 100',
    defaultFill: '#7d2ae8',
    svgPath: 'M50 0 A50 50 0 1 0 50 100 A50 50 0 1 0 50 0 Z M50 20 A30 30 0 1 1 50 80 A30 30 0 1 1 50 20 Z',
    tags: ['abstracto', 'anillo', 'dona', 'circulo']
  },
  {
    id: 'abstract-swoosh',
    name: 'Trazo Dinámico Swoosh',
    category: 'Elementos Abstractos',
    viewBox: '0 0 100 50',
    defaultFill: '#10B981',
    svgPath: 'M0 45 C 30 45, 60 5, 100 5 C 65 15, 35 50, 0 45 Z',
    tags: ['abstracto', 'trazo', 'linea', 'velocidad']
  },
  {
    id: 'abstract-bracket',
    name: 'Ojo Decorativo Boho',
    category: 'Elementos Abstractos',
    viewBox: '0 0 100 60',
    defaultFill: '#E07A5F',
    svgPath: 'M0 30 Q 50 -10, 100 30 Q 50 70, 0 30 Z M50 18 A 12 12 0 1 0 50 42 A 12 12 0 1 0 50 18 Z',
    tags: ['abstracto', 'ojo', 'boho', 'mistico', 'diseño']
  },

  // 4. Insignias y Ofertas (8)
  {
    id: 'badge-sale-starburst',
    name: 'Sello de Oferta 12 Picos',
    category: 'Insignias y Ofertas',
    viewBox: '0 0 100 100',
    defaultFill: '#EF4444',
    svgPath: 'M50 0 L59 13 L75 7 L80 23 L96 23 L93 39 L100 50 L93 61 L96 77 L80 77 L75 93 L59 87 L50 100 L41 87 L25 93 L20 77 L4 77 L7 61 L0 50 L7 39 L4 23 L20 23 L25 7 L41 13 Z',
    tags: ['oferta', 'descuento', 'sello', 'badge', 'sale']
  },
  {
    id: 'badge-ribbon',
    name: 'Cinta / Listón Promocional',
    category: 'Insignias y Ofertas',
    viewBox: '0 0 100 40',
    defaultFill: '#7d2ae8',
    svgPath: 'M0 0 L85 0 L100 20 L85 40 L0 40 L10 20 Z',
    tags: ['oferta', 'cinta', 'liston', 'etiqueta', 'banner']
  },
  {
    id: 'badge-tag-price',
    name: 'Etiqueta de Precio',
    category: 'Insignias y Ofertas',
    viewBox: '0 0 100 60',
    defaultFill: '#F59E0B',
    svgPath: 'M0 30 L30 0 L100 0 L100 60 L30 60 Z M20 30 A 6 6 0 1 1 20 29.9 Z',
    tags: ['oferta', 'precio', 'tienda', 'tag', 'compra']
  },
  {
    id: 'badge-shield-verified',
    name: 'Escudo Calidad Garantizada',
    category: 'Insignias y Ofertas',
    viewBox: '0 0 100 100',
    defaultFill: '#10B981',
    svgPath: 'M50 0 L95 18 C 95 60, 50 95, 50 100 C 50 95, 5 60, 5 18 Z M42 68 L22 48 L28 42 L42 56 L72 26 L78 32 Z',
    tags: ['garantia', 'escudo', 'calidad', 'verificado', 'confianza']
  },
  {
    id: 'badge-circle-offer',
    name: 'Medalla Número 1',
    category: 'Insignias y Ofertas',
    viewBox: '0 0 100 100',
    defaultFill: '#F59E0B',
    svgPath: 'M50 0 A 35 35 0 1 0 50 70 A 35 35 0 1 0 50 0 Z M35 65 L20 100 L50 85 L80 100 L65 65 Z',
    tags: ['medalla', 'top', 'primer lugar', 'oro', 'ganador']
  },
  {
    id: 'badge-discount-percent',
    name: 'Insignia Porcentaje %',
    category: 'Insignias y Ofertas',
    viewBox: '0 0 100 100',
    defaultFill: '#EC4899',
    svgPath: 'M15 15 H85 V85 H15 Z M35 25 A8 8 0 1 0 35 41 A8 8 0 1 0 35 25 Z M65 59 A8 8 0 1 0 65 75 A8 8 0 1 0 65 59 Z M75 25 L25 75 Z',
    tags: ['porcentaje', 'descuento', 'promo', 'liquidación']
  },
  {
    id: 'badge-hot-deal',
    name: 'Insignia Oferta Caliente',
    category: 'Insignias y Ofertas',
    viewBox: '0 0 100 100',
    defaultFill: '#DC2626',
    svgPath: 'M50 5 C55 30 80 40 80 65 C80 85 65 98 50 98 C35 98 20 85 20 65 C20 45 40 30 40 15 Z M50 50 C45 60 40 70 40 78 C40 85 45 90 50 90 C55 90 60 85 60 78 C60 68 55 60 50 50 Z',
    tags: ['fuego', 'hot', 'oferta', 'caliente', 'tendencia']
  },
  {
    id: 'badge-best-choice',
    name: 'Recomendado / Best Choice',
    category: 'Insignias y Ofertas',
    viewBox: '0 0 100 100',
    defaultFill: '#6366F1',
    svgPath: 'M50 5 L64 34 L95 38 L72 60 L78 91 L50 76 L22 91 L28 60 L5 38 L36 34 Z',
    tags: ['favorito', 'mejor', 'eleccion', 'calidad']
  },

  // 5. Líneas y Flechas Decorativas (8)
  {
    id: 'line-arrow-right',
    name: 'Flecha Audaz Moderna',
    category: 'Líneas y Flechas',
    viewBox: '0 0 100 50',
    defaultFill: '#7d2ae8',
    svgPath: 'M0 18 H60 V0 L100 25 L60 50 V32 H0 Z',
    tags: ['flecha', 'indicador', 'apuntar', 'derecha', 'cta']
  },
  {
    id: 'line-swirl-arrow',
    name: 'Flecha Curva Mano Alzada',
    category: 'Líneas y Flechas',
    viewBox: '0 0 100 70',
    defaultFill: '#00c4cc',
    svgPath: 'M10 60 Q 40 80, 70 40 T 80 15 L 68 20 M 80 15 L 85 28',
    defaultStroke: '#00c4cc',
    strokeWidth: 5,
    tags: ['flecha', 'curva', 'dibujo', 'llamado', 'atencion']
  },
  {
    id: 'line-zigzag',
    name: 'Línea Zigzag Dinámica',
    category: 'Líneas y Flechas',
    viewBox: '0 0 100 25',
    defaultFill: 'none',
    defaultStroke: '#F59E0B',
    strokeWidth: 6,
    svgPath: 'M0 20 L20 5 L40 20 L60 5 L80 20 L100 5',
    tags: ['linea', 'zigzag', 'decorativa', 'separador']
  },
  {
    id: 'line-wave-divider',
    name: 'Separador Ondulado Suave',
    category: 'Líneas y Flechas',
    viewBox: '0 0 100 20',
    defaultFill: 'none',
    defaultStroke: '#EC4899',
    strokeWidth: 5,
    svgPath: 'M0 10 Q 25 0, 50 10 T 100 10',
    tags: ['linea', 'onda', 'suave', 'separador', 'elegante']
  },
  {
    id: 'line-flourish-classic',
    name: 'Flourish Divisor Caligráfico',
    category: 'Líneas y Flechas',
    viewBox: '0 0 100 30',
    defaultFill: '#8B5CF6',
    svgPath: 'M0 15 C 25 15, 35 5, 45 15 C 48 18, 50 18, 52 15 C 62 5, 75 15, 100 15 C 75 18, 62 25, 52 16 C 50 14, 48 14, 45 16 C 35 25, 25 18, 0 15 Z M50 10 A 3 3 0 1 1 50 9.9 Z',
    tags: ['adorno', 'vintage', 'caligrafia', 'elegante', 'divisor']
  },
  {
    id: 'line-double-accent',
    name: 'Líneas Dobles con Rombo Central',
    category: 'Líneas y Flechas',
    viewBox: '0 0 100 20',
    defaultFill: '#1E293B',
    svgPath: 'M0 9 H42 V11 H0 Z M58 9 H100 V11 H58 Z M50 4 L56 10 L50 16 L44 10 Z',
    tags: ['linea', 'rombo', 'minimalista', 'titulo', 'subrayado']
  },
  {
    id: 'line-curved-underline',
    name: 'Subrayado Pincelada Curva',
    category: 'Líneas y Flechas',
    viewBox: '0 0 100 20',
    defaultFill: '#FF5E3A',
    svgPath: 'M0 8 Q 50 18, 100 6 Q 50 13, 0 8 Z',
    tags: ['subrayado', 'pincel', 'resaltar', 'marcador']
  },
  {
    id: 'line-corner-ornament',
    name: 'Adorno de Esquina Lujoso',
    category: 'Líneas y Flechas',
    viewBox: '0 0 60 60',
    defaultFill: 'none',
    defaultStroke: '#D97706',
    strokeWidth: 4,
    svgPath: 'M5 55 V15 C 5 9.47, 9.47 5, 15 5 H55 M15 55 V22 C 15 18.13, 18.13 15, 22 15 H55',
    tags: ['esquina', 'marco', 'adorno', 'tarjeta', 'diploma']
  },

  // 6. Ilustraciones & Stickers (8)
  {
    id: 'sticker-sun-summer',
    name: 'Sol Radiante de Verano',
    category: 'Ilustraciones & Stickers',
    viewBox: '0 0 100 100',
    defaultFill: '#FBBF24',
    svgPath: 'M50 25 A 25 25 0 1 0 50 75 A 25 25 0 1 0 50 25 Z M50 0 L54 18 L46 18 Z M50 100 L54 82 L46 82 Z M0 50 L18 46 L18 54 Z M100 50 L82 46 L82 54 Z M15 15 L28 26 L23 31 Z M85 85 L72 74 L77 69 Z M15 85 L26 72 L31 77 Z M85 15 L74 28 L69 23 Z',
    tags: ['verano', 'sol', 'calor', 'playa', 'brillo']
  },
  {
    id: 'sticker-palm-leaf',
    name: 'Palmera / Hoja Tropical',
    category: 'Ilustraciones & Stickers',
    viewBox: '0 0 100 100',
    defaultFill: '#10B981',
    svgPath: 'M20 95 Q 40 60, 85 15 C 80 35, 75 60, 30 85 C 45 70, 70 40, 85 15 C 65 30, 45 45, 20 95 Z M45 40 Q 60 30, 80 18 M38 55 Q 55 45, 75 35 M30 70 Q 50 60, 70 50',
    tags: ['hoja', 'tropical', 'verano', 'selva', 'palmera']
  },
  {
    id: 'sticker-sparkle-magic',
    name: 'Destello Mágico (Sparkle)',
    category: 'Ilustraciones & Stickers',
    viewBox: '0 0 100 100',
    defaultFill: '#7d2ae8',
    svgPath: 'M50 0 Q 50 40, 10 50 Q 50 50, 50 100 Q 50 60, 90 50 Q 50 50, 50 0 Z M75 10 Q 75 22, 63 25 Q 75 25, 75 40 Q 75 28, 87 25 Q 75 25, 75 10 Z',
    tags: ['brillo', 'magia', 'destello', 'nuevo', 'ia']
  },
  {
    id: 'sticker-heart-pop',
    name: 'Corazón Pop Amor',
    category: 'Ilustraciones & Stickers',
    viewBox: '0 0 100 100',
    defaultFill: '#F43F5E',
    svgPath: 'M50 88 C20 65, 0 45, 0 25 C0 10, 12 0, 26 0 C37 0, 45 6, 50 15 C55 6, 63 0, 74 0 C88 0, 100 10, 100 25 C100 45, 80 65, 50 88 Z',
    tags: ['corazon', 'amor', 'like', 'favorito', 'san valentin']
  },
  {
    id: 'sticker-trophy',
    name: 'Trofeo Copa Campeón',
    category: 'Ilustraciones & Stickers',
    viewBox: '0 0 100 100',
    defaultFill: '#F59E0B',
    svgPath: 'M25 15 H75 V45 C75 58, 65 70, 50 70 C35 70, 25 58, 25 45 Z M25 22 H10 C10 38, 20 45, 25 45 Z M75 22 H90 C90 38, 80 45, 75 45 Z M45 70 H55 V85 H45 Z M30 85 H70 V95 H30 Z',
    tags: ['trofeo', 'copa', 'ganador', 'premio', 'exito']
  },
  {
    id: 'sticker-crown',
    name: 'Corona Real VIP',
    category: 'Ilustraciones & Stickers',
    viewBox: '0 0 100 70',
    defaultFill: '#EAB308',
    svgPath: 'M5 60 L15 15 L40 40 L50 10 L60 40 L85 15 L95 60 Z M5 62 H95 V68 H5 Z M15 12 A 4 4 0 1 1 15 11.9 Z M50 7 A 4 4 0 1 1 50 6.9 Z M85 12 A 4 4 0 1 1 85 11.9 Z',
    tags: ['corona', 'vip', 'premium', 'rey', 'lujo']
  },
  {
    id: 'sticker-music-note',
    name: 'Nota Musical Doble',
    category: 'Ilustraciones & Stickers',
    viewBox: '0 0 100 100',
    defaultFill: '#8B5CF6',
    svgPath: 'M35 15 H85 V65 A 15 15 0 1 1 70 50 V30 H35 V75 A 15 15 0 1 1 20 60 V15 Z',
    tags: ['musica', 'cancion', 'sonido', 'ritmo', 'nota']
  },
  {
    id: 'sticker-coffee-cup',
    name: 'Taza de Café Caliente',
    category: 'Ilustraciones & Stickers',
    viewBox: '0 0 100 100',
    defaultFill: '#854D0E',
    svgPath: 'M15 35 H75 V70 C75 80, 65 90, 50 90 C35 90, 15 80, 15 70 Z M75 45 H88 C93 45, 95 50, 95 55 C95 65, 88 70, 75 70 Z M30 15 Q 35 25, 30 30 M45 10 Q 50 22, 45 30 M60 15 Q 65 25, 60 30 M5 92 H85 V96 H5 Z',
    tags: ['cafe', 'taza', 'brunch', 'desayuno', 'caliente']
  }
];

export const PHOTO_FRAME_ELEMENTS: GraphicElementItem[] = CANVA_PHOTO_FRAMES.map(frame => ({
  id: frame.id,
  name: frame.name,
  category: 'Marcos para Fotos' as const,
  subCategory: frame.subCategory,
  viewBox: frame.viewBox,
  clipPath: frame.clipPath,
  overlaySvg: frame.overlaySvg,
  defaultWidth: frame.defaultWidth,
  defaultHeight: frame.defaultHeight,
  defaultFill: '#5dbb63',
  svgContent: generateCanvaFrameSvgMarkup(frame),
  tags: ['marco', 'frame', 'foto', 'canva', 'imagen', 'recorte', 'mask', ...frame.tags]
}));

export const GRAPHIC_ELEMENTS_LIBRARY: GraphicElementItem[] = [
  ...PHOTO_FRAME_ELEMENTS,
  ...THREE_D_ELEMENTS,
  ...PAPER_STICKERS,
  ...COMIC_STICKERS,
  ...PIXEL_ART_STICKERS,
  ...FORMAL_STICKERS,
  ...CARTOON_STICKERS,
  ...VINTAGE_CARTOON_STICKERS,
  ...BASE_GRAPHIC_ELEMENTS
];
