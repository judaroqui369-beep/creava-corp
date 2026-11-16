import { PresetSize, ShapeType } from '../types';

export const PRESET_SIZES: PresetSize[] = [
  {
    id: 'instagram-post',
    name: 'Post de Instagram',
    category: 'Redes Sociales',
    width: 1080,
    height: 1080,
    icon: 'Square',
    description: '1080 × 1080 px (1:1)'
  },
  {
    id: 'instagram-story',
    name: 'Historia de Instagram',
    category: 'Redes Sociales',
    width: 1080,
    height: 1920,
    icon: 'Smartphone',
    description: '1080 × 1920 px (9:16)'
  },
  {
    id: 'presentation',
    name: 'Presentación (16:9)',
    category: 'Presentaciones',
    width: 1920,
    height: 1080,
    icon: 'Monitor',
    description: '1920 × 1080 px (16:9)'
  },
  {
    id: 'poster',
    name: 'Póster publicitario',
    category: 'Marketing',
    width: 1200,
    height: 1600,
    icon: 'FileText',
    description: '1200 × 1600 px (3:4)'
  },
  {
    id: 'banner',
    name: 'Banner / Encabezado',
    category: 'Marketing',
    width: 1200,
    height: 630,
    icon: 'Layout',
    description: '1200 × 630 px'
  },
  {
    id: 'logo',
    name: 'Logotipo Cuadrado',
    category: 'Branding',
    width: 800,
    height: 800,
    icon: 'Award',
    description: '800 × 800 px'
  }
];

export const AVAILABLE_FONTS = [
  { name: 'Montserrat', family: "'Montserrat', sans-serif", category: 'Moderna' },
  { name: 'Poppins', family: "'Poppins', sans-serif", category: 'Geométrica' },
  { name: 'Playfair Display', family: "'Playfair Display', serif", category: 'Elegante' },
  { name: 'Bebas Neue', family: "'Bebas Neue', sans-serif", category: 'Impacto' },
  { name: 'Great Vibes', family: "'Great Vibes', cursive", category: 'Caligrafía' },
  { name: 'Caveat', family: "'Caveat', cursive", category: 'Manuscrita' },
  { name: 'Oswald', family: "'Oswald', sans-serif", category: 'Condensada' },
  { name: 'Inter', family: "'Inter', sans-serif", category: 'Limpia' },
  { name: 'Pacifico', family: "'Pacifico', cursive", category: 'Retro' },
  { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", category: 'Tech' },
  { name: 'Cinzel', family: "'Cinzel', serif", category: 'Clásica' },
];

export const SHAPE_ITEMS: { type: ShapeType; label: string; icon: string }[] = [
  { type: 'rectangle', label: 'Rectángulo', icon: 'Square' },
  { type: 'circle', label: 'Círculo', icon: 'Circle' },
  { type: 'triangle', label: 'Triángulo', icon: 'Triangle' },
  { type: 'star', label: 'Estrella', icon: 'Star' },
  { type: 'heart', label: 'Corazón', icon: 'Heart' },
  { type: 'arrow', label: 'Flecha', icon: 'ArrowRight' },
  { type: 'badge', label: 'Insignia', icon: 'Award' },
  { type: 'speech-bubble', label: 'Burbuja', icon: 'MessageSquare' },
];

export const TYPOGRAPHY_PRESETS = [
  {
    title: 'NEON CYBER',
    subtitle: 'FUTURISTIC VIBES',
    titleFont: "'Bebas Neue', sans-serif",
    subFont: "'Space Grotesk', sans-serif",
    titleColor: '#00ffff',
    subColor: '#ff007f',
    effect: 'neon' as const,
    titleSize: 72,
    subSize: 22,
  },
  {
    title: 'Elegance & Co.',
    subtitle: 'EXCLUSIVE COLLECTION',
    titleFont: "'Playfair Display', serif",
    subFont: "'Montserrat', sans-serif",
    titleColor: '#2b2d42',
    subColor: '#8d99ae',
    effect: 'none' as const,
    titleSize: 64,
    subSize: 18,
  },
  {
    title: 'GRAN OFERTA',
    subtitle: '50% DE DESCUENTO ESTE FIN DE SEMANA',
    titleFont: "'Oswald', sans-serif",
    subFont: "'Poppins', sans-serif",
    titleColor: '#e63946',
    subColor: '#1d3557',
    effect: 'shadow' as const,
    titleSize: 68,
    subSize: 18,
  },
  {
    title: 'Momentos Dulces',
    subtitle: 'Pastelería Artesanal',
    titleFont: "'Caveat', cursive",
    subFont: "'Poppins', sans-serif",
    titleColor: '#e07a5f',
    subColor: '#3d405b',
    effect: 'none' as const,
    titleSize: 66,
    subSize: 20,
  },
  {
    title: 'TECH SUMMIT 2026',
    subtitle: 'EL FUTURO DE LA INTELIGENCIA ARTIFICIAL',
    titleFont: "'Space Grotesk', sans-serif",
    subFont: "'Inter', sans-serif",
    titleColor: '#ffffff',
    subColor: '#8b3dff',
    effect: 'background' as const,
    effectColor: '#0f172a',
    titleSize: 52,
    subSize: 18,
  }
];

export const STOCK_PHOTOS = [
  {
    category: 'Negocios',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    title: 'Equipo colaborando'
  },
  {
    category: 'Negocios',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    title: 'Oficina moderna luminosa'
  },
  {
    category: 'Café & Comida',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    title: 'Taza de café latte art'
  },
  {
    category: 'Café & Comida',
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    title: 'Pizza artesanal deliciosa'
  },
  {
    category: 'Naturaleza',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: 'Paisaje de montaña y lago'
  },
  {
    category: 'Naturaleza',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    title: 'Bosque en la niebla'
  },
  {
    category: 'Moda & Retrato',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    title: 'Modelo estilo urbano chic'
  },
  {
    category: 'Moda & Retrato',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    title: 'Retrato creativo'
  },
  {
    category: 'Tecnología',
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    title: 'Trabajo digital con laptop'
  },
  {
    category: 'Tecnología',
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    title: 'Ciberseguridad y datos'
  },
  {
    category: 'Minimalista',
    url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80',
    title: 'Lámpara geométrica minimal'
  },
  {
    category: 'Minimalista',
    url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    title: 'Textura suave y arquitectura'
  }
];

export const CANVA_GRADIENTS = [
  { name: 'Canva Violet', value: 'linear-gradient(135deg, #8B3DFF 0%, #00C4CC 100%)' },
  { name: 'Sunset Glow', value: 'linear-gradient(135deg, #FF5E3A 0%, #FF2A68 100%)' },
  { name: 'Ocean Breeze', value: 'linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)' },
  { name: 'Fresh Emerald', value: 'linear-gradient(135deg, #0BA360 0%, #3CBA92 100%)' },
  { name: 'Neon Cyber', value: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)' },
  { name: 'Golden Hour', value: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)' },
  { name: 'Royal Velvet', value: 'linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)' },
  { name: 'Dark Slate', value: 'linear-gradient(135deg, #232526 0%, #414345 100%)' },
  { name: 'Soft Peach', value: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  { name: 'Morning Mist', value: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
];

export const COLOR_PALETTES = [
  {
    name: 'Canva Oficial',
    colors: ['#8B3DFF', '#00C4CC', '#0E1318', '#FFFFFF', '#FF3366', '#FFB800']
  },
  {
    name: 'Moderno Pastel',
    colors: ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0', '#F8F9FA']
  },
  {
    name: 'Tierra & Café',
    colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', '#DDA15E']
  },
  {
    name: 'Monocromo Elegante',
    colors: ['#111827', '#374151', '#6B7280', '#9CA3AF', '#E5E7EB', '#F9FAFB']
  },
  {
    name: 'Primavera Natural',
    colors: ['#2D6A4F', '#52B788', '#74C69D', '#D8F3DC', '#1B4332', '#95D5B2']
  }
];

export const STICKER_ITEMS = [
  { id: 'sale-badge', name: 'Oferta 50%', text: '50% OFF', bg: '#e63946', color: '#ffffff' },
  { id: 'new-badge', name: 'Nuevo', text: '¡NUEVO!', bg: '#8B3DFF', color: '#ffffff' },
  { id: 'best-seller', name: 'Más Vendido', text: '★ TOP VENTAS', bg: '#FFB800', color: '#000000' },
  { id: 'limited', name: 'Edición Limitada', text: 'EDICIÓN LIMITADA', bg: '#00C4CC', color: '#000000' },
  { id: 'verified', name: 'Verificado', text: '✓ 100% GARANTÍA', bg: '#10B981', color: '#ffffff' },
  { id: 'free-shipping', name: 'Envío Gratis', text: '🚚 ENVÍO GRATIS', bg: '#3B82F6', color: '#ffffff' },
];
