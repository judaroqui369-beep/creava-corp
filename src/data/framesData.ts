export interface PhotoFrameItem {
  id: string;
  name: string;
  category: 'Marcos para Fotos';
  subCategory: 'Geométricos & Básicos' | 'Dispositivos & Mockups' | 'Fotografía & Retro' | 'Orgánicos & Blobs' | 'Rasgados & Pincel' | 'Símbolos & Siluetas';
  viewBox: string;
  clipPath: string;
  overlaySvg?: string;
  defaultWidth: number;
  defaultHeight: number;
  tags: string[];
}

export const CANVA_PHOTO_FRAMES: PhotoFrameItem[] = [
  // ==========================================
  // 1. GEOMÉTRICOS & BÁSICOS (12)
  // ==========================================
  {
    id: 'frame-circle',
    name: 'Marco Círculo',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,50 m -48,0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['círculo', 'redondo', 'circulo', 'básico', 'foto', 'perfil', 'avatar', 'frame']
  },
  {
    id: 'frame-squircle',
    name: 'Marco Squircle Cuadrado Suave',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 22,2 H 78 Q 98,2 98,22 V 78 Q 98,98 78,98 H 22 Q 2,98 2,78 V 22 Q 2,2 22,2 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['cuadrado', 'squircle', 'redondeado', 'app', 'icon', 'suave', 'básico']
  },
  {
    id: 'frame-rect-story-9-16',
    name: 'Marco Historia 9:16 Retrato',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 90 160',
    clipPath: 'M 10,2 H 80 Q 88,2 88,10 V 150 Q 88,158 80,158 H 10 Q 2,158 2,150 V 10 Q 2,2 10,2 Z',
    defaultWidth: 120,
    defaultHeight: 213,
    tags: ['story', 'reels', 'tiktok', 'vertical', 'retrato', '9:16', 'smartphone']
  },
  {
    id: 'frame-rect-cinema-16-9',
    name: 'Marco Cine 16:9 Panorámico',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 160 90',
    clipPath: 'M 10,2 H 150 Q 158,2 158,10 V 80 Q 158,88 150,88 H 10 Q 2,88 2,80 V 10 Q 2,2 10,2 Z',
    defaultWidth: 210,
    defaultHeight: 118,
    tags: ['cinema', 'panoramico', '16:9', 'video', 'apaisado', 'horizontal']
  },
  {
    id: 'frame-triangle',
    name: 'Marco Triángulo',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,4 L 97,94 Q 98,96 95,96 L 5,96 Q 2,96 3,94 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['triangulo', 'geometrico', 'punta', 'flecha', 'forma']
  },
  {
    id: 'frame-hexagon',
    name: 'Marco Hexágono',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,2 L 95,26 L 95,74 L 50,98 L 5,74 L 5,26 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['hexagono', 'panal', 'poligono', '6 lados', 'geometria']
  },
  {
    id: 'frame-octagon',
    name: 'Marco Octágono',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 30,2 L 70,2 L 98,30 L 98,70 L 70,98 L 30,98 L 2,70 L 2,30 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['octagono', 'stop', '8 lados', 'geometria']
  },
  {
    id: 'frame-diamond',
    name: 'Marco Diamante / Rombo',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,2 L 98,50 L 50,98 L 2,50 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['diamante', 'rombo', 'joya', 'cristal', 'geometrico']
  },
  {
    id: 'frame-pentagon',
    name: 'Marco Pentágono',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,2 L 98,38 L 80,96 L 20,96 L 2,38 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['pentagono', '5 lados', 'poligono', 'estrella']
  },
  {
    id: 'frame-parallelogram',
    name: 'Marco Paralelogramo Dinámico',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 24,4 L 98,4 L 76,96 L 2,96 Z',
    defaultWidth: 170,
    defaultHeight: 150,
    tags: ['paralelogramo', 'inclinado', 'deporte', 'dinamico', 'velocidad']
  },
  {
    id: 'frame-trapezoid',
    name: 'Marco Trapecio',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 20,6 L 80,6 L 98,94 L 2,94 Z',
    defaultWidth: 170,
    defaultHeight: 150,
    tags: ['trapecio', 'geometrico', 'perspectiva']
  },
  {
    id: 'frame-cross',
    name: 'Marco Cruz / Plus (+)',
    category: 'Marcos para Fotos',
    subCategory: 'Geométricos & Básicos',
    viewBox: '0 0 100 100',
    clipPath: 'M 35,2 H 65 V 35 H 98 V 65 H 65 V 98 H 35 V 65 H 2 V 35 H 35 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['cruz', 'plus', 'salud', 'medico', 'suma', 'positivo']
  },

  // ==========================================
  // 2. DISPOSITIVOS & MOCKUPS (7)
  // ==========================================
  {
    id: 'frame-device-iphone',
    name: 'Marco Smartphone / iPhone',
    category: 'Marcos para Fotos',
    subCategory: 'Dispositivos & Mockups',
    viewBox: '0 0 100 200',
    clipPath: 'M 10,14 H 90 Q 93,14 93,18 V 186 Q 93,190 90,190 H 10 Q 7,190 7,186 V 18 Q 7,14 10,14 Z',
    overlaySvg: `<svg viewBox="0 0 100 200" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Phone body outer bezel -->
      <rect x="3" y="6" width="94" height="188" rx="14" stroke="#1f2937" stroke-width="6" fill="none" />
      <rect x="4" y="7" width="92" height="186" rx="13" stroke="#475569" stroke-width="1.2" fill="none" />
      <!-- Dynamic Island pill -->
      <rect x="35" y="16" width="30" height="7" rx="3.5" fill="#0f172a" />
      <circle cx="58" cy="19.5" r="1.5" fill="#1e293b" />
      <!-- Bottom swipe bar -->
      <rect x="36" y="184" width="28" height="2.5" rx="1.2" fill="#ffffff" fill-opacity="0.75" />
    </svg>`,
    defaultWidth: 130,
    defaultHeight: 260,
    tags: ['iphone', 'celular', 'smartphone', 'movil', 'telefono', 'mockup', 'app', 'pantalla']
  },
  {
    id: 'frame-device-tablet',
    name: 'Marco Tablet / iPad',
    category: 'Marcos para Fotos',
    subCategory: 'Dispositivos & Mockups',
    viewBox: '0 0 150 115',
    clipPath: 'M 14,10 H 136 Q 140,10 140,14 V 101 Q 140,105 136,105 H 14 Q 10,105 10,101 V 14 Q 10,10 14,10 Z',
    overlaySvg: `<svg viewBox="0 0 150 115" fill="none" class="w-full h-full drop-shadow-md">
      <rect x="5" y="5" width="140" height="105" rx="8" stroke="#1e293b" stroke-width="7" fill="none" />
      <rect x="6" y="6" width="138" height="103" rx="7" stroke="#64748b" stroke-width="1" fill="none" />
      <!-- Top camera dot -->
      <circle cx="75" cy="8" r="1.5" fill="#334155" />
      <!-- Bottom home bar -->
      <rect x="62" y="102" width="26" height="2" rx="1" fill="#ffffff" fill-opacity="0.8" />
    </svg>`,
    defaultWidth: 210,
    defaultHeight: 161,
    tags: ['tablet', 'ipad', 'dispositivo', 'pantalla', 'mockup']
  },
  {
    id: 'frame-device-laptop',
    name: 'Marco Laptop / MacBook',
    category: 'Marcos para Fotos',
    subCategory: 'Dispositivos & Mockups',
    viewBox: '0 0 180 120',
    clipPath: 'M 25,12 H 155 V 94 H 25 Z',
    overlaySvg: `<svg viewBox="0 0 180 120" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Screen bezel -->
      <rect x="20" y="8" width="140" height="90" rx="4" stroke="#1e293b" stroke-width="6" fill="none" />
      <!-- Webcam -->
      <circle cx="90" cy="11" r="1.2" fill="#475569" />
      <!-- Laptop base / keyboard tray -->
      <path d="M 6,98 L 22,98 L 158,98 L 174,98 C 178,98 177,104 172,105 L 8,105 C 3,104 2,98 6,98 Z" fill="#94a3b8" />
      <path d="M 75,98 H 105 V 100 Q 105,102 103,102 H 77 Q 75,102 75,100 Z" fill="#64748b" />
    </svg>`,
    defaultWidth: 220,
    defaultHeight: 146,
    tags: ['laptop', 'macbook', 'computadora', 'portatil', 'ordenador', 'mockup']
  },
  {
    id: 'frame-device-desktop',
    name: 'Marco Monitor / iMac',
    category: 'Marcos para Fotos',
    subCategory: 'Dispositivos & Mockups',
    viewBox: '0 0 180 150',
    clipPath: 'M 14,10 H 166 V 104 H 14 Z',
    overlaySvg: `<svg viewBox="0 0 180 150" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Screen bezel -->
      <rect x="10" y="6" width="160" height="102" rx="4" stroke="#0f172a" stroke-width="5" fill="none" />
      <!-- Webcam -->
      <circle cx="90" cy="8.5" r="1.2" fill="#475569" />
      <!-- Monitor chin -->
      <rect x="10" y="104" width="160" height="12" fill="#cbd5e1" />
      <!-- Stand leg -->
      <path d="M 78,116 L 82,142 H 98 L 102,116 Z" fill="#94a3b8" />
      <!-- Base foot -->
      <rect x="65" y="142" width="50" height="4" rx="2" fill="#64748b" />
    </svg>`,
    defaultWidth: 210,
    defaultHeight: 175,
    tags: ['monitor', 'imac', 'pantalla', 'escritorio', 'pc', 'computadora']
  },
  {
    id: 'frame-device-smartwatch',
    name: 'Marco Smartwatch',
    category: 'Marcos para Fotos',
    subCategory: 'Dispositivos & Mockups',
    viewBox: '0 0 120 160',
    clipPath: 'M 32,38 Q 32,28 42,28 H 78 Q 88,28 88,38 V 122 Q 88,132 78,132 H 42 Q 32,132 32,122 Z',
    overlaySvg: `<svg viewBox="0 0 120 160" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Top and bottom silicone straps -->
      <path d="M 44,28 V 6 Q 44,2 48,2 H 72 Q 76,2 76,6 V 28 Z" fill="#334155" />
      <path d="M 44,132 V 154 Q 44,158 48,158 H 72 Q 76,158 76,154 V 132 Z" fill="#334155" />
      <!-- Watch outer case -->
      <rect x="28" y="24" width="64" height="112" rx="16" stroke="#0f172a" stroke-width="6" fill="none" />
      <!-- Digital crown knob -->
      <rect x="92" y="44" width="4" height="14" rx="2" fill="#64748b" />
    </svg>`,
    defaultWidth: 130,
    defaultHeight: 173,
    tags: ['reloj', 'smartwatch', 'apple watch', 'wearable', 'fitness']
  },
  {
    id: 'frame-device-browser',
    name: 'Marco Ventana Navegador Web',
    category: 'Marcos para Fotos',
    subCategory: 'Dispositivos & Mockups',
    viewBox: '0 0 160 115',
    clipPath: 'M 4,28 H 156 V 110 Q 156,113 152,113 H 8 Q 4,113 4,110 Z',
    overlaySvg: `<svg viewBox="0 0 160 115" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Top header bar -->
      <path d="M 4,8 Q 4,4 8,4 H 152 Q 156,4 156,8 V 28 H 4 Z" fill="#e2e8f0" />
      <!-- Three window buttons (mac style) -->
      <circle cx="14" cy="16" r="3" fill="#ef4444" />
      <circle cx="23" cy="16" r="3" fill="#f59e0b" />
      <circle cx="32" cy="16" r="3" fill="#10b981" />
      <!-- URL Bar pill -->
      <rect x="42" y="10" width="85" height="12" rx="3" fill="#ffffff" />
      <rect x="50" y="14" width="45" height="3.5" rx="1.5" fill="#cbd5e1" />
      <!-- Outer border -->
      <rect x="4" y="4" width="152" height="108" rx="6" stroke="#cbd5e1" stroke-width="1.5" fill="none" />
    </svg>`,
    defaultWidth: 220,
    defaultHeight: 158,
    tags: ['navegador', 'browser', 'web', 'safari', 'chrome', 'ventana', 'mockup']
  },
  {
    id: 'frame-device-retrotv',
    name: 'Marco Televisor Retro Vintage',
    category: 'Marcos para Fotos',
    subCategory: 'Dispositivos & Mockups',
    viewBox: '0 0 160 135',
    clipPath: 'M 18,26 Q 62,21 106,26 Q 110,58 106,94 Q 62,99 18,94 Q 14,58 18,26 Z',
    overlaySvg: `<svg viewBox="0 0 160 135" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Antennas -->
      <line x1="80" y1="18" x2="45" y2="4" stroke="#475569" stroke-width="2" stroke-linecap="round" />
      <line x1="80" y1="18" x2="115" y2="4" stroke="#475569" stroke-width="2" stroke-linecap="round" />
      <!-- TV body -->
      <rect x="8" y="18" width="144" height="94" rx="10" fill="#78350f" stroke="#451a03" stroke-width="3" />
      <!-- Screen bezel border -->
      <rect x="14" y="22" width="96" height="76" rx="8" stroke="#1c1917" stroke-width="4" fill="none" />
      <!-- Right control panel -->
      <rect x="114" y="24" width="32" height="72" rx="4" fill="#92400e" />
      <!-- Knobs -->
      <circle cx="130" cy="38" r="6" fill="#fef08a" stroke="#713f12" stroke-width="1.5" />
      <circle cx="130" cy="56" r="6" fill="#fef08a" stroke="#713f12" stroke-width="1.5" />
      <!-- Speaker grille lines -->
      <line x1="120" y1="72" x2="140" y2="72" stroke="#451a03" stroke-width="2" />
      <line x1="120" y1="78" x2="140" y2="78" stroke="#451a03" stroke-width="2" />
      <line x1="120" y1="84" x2="140" y2="84" stroke="#451a03" stroke-width="2" />
      <!-- Legs -->
      <line x1="28" y1="112" x2="16" y2="128" stroke="#451a03" stroke-width="4" stroke-linecap="round" />
      <line x1="132" y1="112" x2="144" y2="128" stroke="#451a03" stroke-width="4" stroke-linecap="round" />
    </svg>`,
    defaultWidth: 200,
    defaultHeight: 168,
    tags: ['tv', 'television', 'retro', 'vintage', 'pantalla', 'vintage tv']
  },

  // ==========================================
  // 3. FOTOGRAFÍA & RETRO (8)
  // ==========================================
  {
    id: 'frame-photo-polaroid',
    name: 'Marco Polaroid Clásico',
    category: 'Marcos para Fotos',
    subCategory: 'Fotografía & Retro',
    viewBox: '0 0 120 145',
    clipPath: 'M 12,12 H 108 V 104 H 12 Z',
    overlaySvg: `<svg viewBox="0 0 120 145" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Polaroid white paper border with bottom caption area -->
      <path d="M 4,4 H 116 V 140 H 4 Z M 12,12 V 104 H 108 V 12 Z" fill="#fafafa" fill-rule="evenodd" />
      <!-- Subtle inner shadow line around photo -->
      <rect x="12" y="12" width="96" height="92" stroke="#e2e8f0" stroke-width="0.8" fill="none" />
      <!-- Subtle outer paper border -->
      <rect x="4" y="4" width="112" height="136" stroke="#e5e7eb" stroke-width="1" fill="none" />
    </svg>`,
    defaultWidth: 160,
    defaultHeight: 193,
    tags: ['polaroid', 'instantanea', 'vintage', 'foto', 'retro', 'recuerdo', 'nostalgia']
  },
  {
    id: 'frame-photo-filmstrip',
    name: 'Marco Película 35mm Film Strip',
    category: 'Marcos para Fotos',
    subCategory: 'Fotografía & Retro',
    viewBox: '0 0 110 140',
    clipPath: 'M 18,16 H 92 V 124 H 18 Z',
    overlaySvg: `<svg viewBox="0 0 110 140" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Black film body with left and right perforations -->
      <path d="M 2,2 H 108 V 138 H 2 Z M 18,16 V 124 H 92 V 16 Z" fill="#18181b" fill-rule="evenodd" />
      <!-- Left sprocket holes -->
      <rect x="6" y="10" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="6" y="28" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="6" y="46" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="6" y="64" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="6" y="82" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="6" y="100" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="6" y="118" width="6" height="9" rx="1.5" fill="#ffffff" />
      <!-- Right sprocket holes -->
      <rect x="98" y="10" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="98" y="28" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="98" y="46" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="98" y="64" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="98" y="82" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="98" y="100" width="6" height="9" rx="1.5" fill="#ffffff" />
      <rect x="98" y="118" width="6" height="9" rx="1.5" fill="#ffffff" />
    </svg>`,
    defaultWidth: 150,
    defaultHeight: 191,
    tags: ['pelicula', 'film', '35mm', 'rollo', 'negativo', 'cine', 'analogico']
  },
  {
    id: 'frame-photo-slide',
    name: 'Marco Diapositiva 35mm Slide',
    category: 'Marcos para Fotos',
    subCategory: 'Fotografía & Retro',
    viewBox: '0 0 120 120',
    clipPath: 'M 22,22 H 98 V 98 H 22 Z',
    overlaySvg: `<svg viewBox="0 0 120 120" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Cardboard slide frame -->
      <path d="M 4,4 H 116 V 116 H 4 Z M 22,22 V 98 H 98 V 22 Z" fill="#f8fafc" fill-rule="evenodd" />
      <rect x="4" y="4" width="112" height="112" stroke="#cbd5e1" stroke-width="1.5" fill="none" />
      <!-- Slide imprint text -->
      <text x="60" y="16" font-size="6" font-family="monospace" font-weight="bold" fill="#64748b" text-anchor="middle">KODAK COLOR SLIDE</text>
      <text x="60" y="110" font-size="5" font-family="monospace" fill="#94a3b8" text-anchor="middle">▲ 36mm EXP 400</text>
    </svg>`,
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['diapositiva', 'slide', 'kodak', 'retro', 'vintage', 'analogica']
  },
  {
    id: 'frame-photo-stamp',
    name: 'Marco Sello Postal Dentado',
    category: 'Marcos para Fotos',
    subCategory: 'Fotografía & Retro',
    viewBox: '0 0 100 100',
    clipPath: 'M 6,6 H 94 V 94 H 6 Z',
    overlaySvg: `<svg viewBox="0 0 100 100" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Scalloped postage stamp edges -->
      <rect x="2" y="2" width="96" height="96" stroke="#e2e8f0" stroke-width="4" stroke-dasharray="0 8" stroke-linecap="round" fill="none" />
      <rect x="8" y="8" width="84" height="84" stroke="#94a3b8" stroke-width="0.8" fill="none" />
    </svg>`,
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['sello', 'postal', 'stamp', 'carta', 'dentado', 'filatelia', 'envio']
  },
  {
    id: 'frame-photo-booth',
    name: 'Marco Fotomatón Tira Triple',
    category: 'Marcos para Fotos',
    subCategory: 'Fotografía & Retro',
    viewBox: '0 0 80 210',
    clipPath: 'M 8,8 H 72 V 68 H 8 Z M 8,76 H 72 V 136 H 8 Z M 8,144 H 72 V 204 H 8 Z',
    overlaySvg: `<svg viewBox="0 0 80 210" fill="none" class="w-full h-full drop-shadow-md">
      <!-- White card strip framing 3 photos -->
      <path d="M 2,2 H 78 V 208 H 2 Z M 8,8 V 68 H 72 V 8 Z M 8,76 V 136 H 72 V 76 Z M 8,144 V 204 H 72 V 144 Z" fill="#ffffff" fill-rule="evenodd" />
      <rect x="2" y="2" width="76" height="206" stroke="#e2e8f0" stroke-width="1.2" fill="none" />
    </svg>`,
    defaultWidth: 110,
    defaultHeight: 288,
    tags: ['fotomaton', 'photobooth', 'tira', 'amigos', 'triple', 'fotos', 'fiesta']
  },
  {
    id: 'frame-photo-gold-ornate',
    name: 'Marco Portarretratos Dorado Elegante',
    category: 'Marcos para Fotos',
    subCategory: 'Fotografía & Retro',
    viewBox: '0 0 120 150',
    clipPath: 'M 20,20 H 100 V 130 H 20 Z',
    overlaySvg: `<svg viewBox="0 0 120 150" fill="none" class="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="30%" stop-color="#f59e0b"/>
          <stop offset="70%" stop-color="#d97706"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
      </defs>
      <!-- Thick baroque gold picture frame moulding -->
      <path d="M 4,4 H 116 V 146 H 4 Z M 20,20 V 130 H 100 V 20 Z" fill="url(#goldGrad)" fill-rule="evenodd" />
      <rect x="18" y="18" width="84" height="114" stroke="#78350f" stroke-width="1" fill="none" />
      <rect x="6" y="6" width="108" height="138" stroke="#fef3c7" stroke-width="1.2" fill="none" />
    </svg>`,
    defaultWidth: 160,
    defaultHeight: 200,
    tags: ['dorado', 'oro', 'elegante', 'museo', 'clasico', 'portarretratos', 'cuadro']
  },
  {
    id: 'frame-photo-mirror-oval',
    name: 'Marco Espejo Ovalado Vintage',
    category: 'Marcos para Fotos',
    subCategory: 'Fotografía & Retro',
    viewBox: '0 0 110 150',
    clipPath: 'M 55,18 C 80,18 95,44 95,75 C 95,106 80,132 55,132 C 30,132 15,106 15,75 C 15,44 30,18 55,18 Z',
    overlaySvg: `<svg viewBox="0 0 110 150" fill="none" class="w-full h-full drop-shadow-lg">
      <!-- Antique ornate mirror bevel -->
      <ellipse cx="55" cy="75" rx="44" ry="60" stroke="#d97706" stroke-width="6" fill="none" />
      <ellipse cx="55" cy="75" rx="46" ry="62" stroke="#fbbf24" stroke-width="1.5" fill="none" />
      <ellipse cx="55" cy="75" rx="40" ry="57" stroke="#92400e" stroke-width="1.5" fill="none" />
      <!-- Crest ornaments top & bottom -->
      <circle cx="55" cy="12" r="5" fill="#f59e0b" />
      <circle cx="55" cy="138" r="4" fill="#f59e0b" />
    </svg>`,
    defaultWidth: 150,
    defaultHeight: 204,
    tags: ['espejo', 'ovalado', 'vintage', 'barroco', 'antiguo', 'princesa']
  },
  {
    id: 'frame-photo-film-square',
    name: 'Marco Negativo Cuadrado 120mm',
    category: 'Marcos para Fotos',
    subCategory: 'Fotografía & Retro',
    viewBox: '0 0 120 120',
    clipPath: 'M 18,14 H 102 V 106 H 18 Z',
    overlaySvg: `<svg viewBox="0 0 120 120" fill="none" class="w-full h-full drop-shadow-md">
      <!-- Square Medium format film border with markings -->
      <path d="M 2,2 H 118 V 118 H 2 Z M 18,14 V 106 H 102 V 14 Z" fill="#09090b" fill-rule="evenodd" />
      <text x="60" y="9" font-size="5" font-family="monospace" fill="#e4e4e7" text-anchor="middle">FUJIFILM PRO 400H</text>
      <text x="60" y="114" font-size="5" font-family="monospace" fill="#e4e4e7" text-anchor="middle">◀ 12A ▶ SAFETY FILM</text>
    </svg>`,
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['negativo', 'cuadrado', 'fujifilm', 'medio formato', 'camara', 'retro']
  },

  // ==========================================
  // 4. ORGÁNICOS & BLOBS (10)
  // ==========================================
  {
    id: 'frame-organic-blob-1',
    name: 'Marco Blob Suave 1',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 100 100',
    clipPath: 'M 48,8 C 76,4 96,24 94,52 C 92,80 74,96 46,94 C 18,92 4,74 6,46 C 8,18 20,12 48,8 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['blob', 'organico', 'liquido', 'suave', 'moderno', 'fluido']
  },
  {
    id: 'frame-organic-blob-2',
    name: 'Marco Blob Dinámico 2',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 100 100',
    clipPath: 'M 35,6 C 68,1 98,16 95,48 C 92,82 76,96 44,95 C 12,94 2,72 5,38 C 8,14 16,9 35,6 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['blob', 'dinamico', 'curvas', 'abstracto', 'arte', 'fluido']
  },
  {
    id: 'frame-organic-blob-3',
    name: 'Marco Gota de Agua / Lágrima',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,4 C 50,4 92,52 92,72 C 92,87 73,96 50,96 C 27,96 8,87 8,72 C 8,52 50,4 50,4 Z',
    defaultWidth: 150,
    defaultHeight: 160,
    tags: ['gota', 'agua', 'lagrima', 'fluido', 'lluvia']
  },
  {
    id: 'frame-organic-petal',
    name: 'Marco Pétalo / Hoja Natural',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,2 C 86,16 98,52 86,86 C 52,98 16,86 2,50 C 16,14 50,2 50,2 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['petalo', 'hoja', 'naturaleza', 'botanica', 'organico']
  },
  {
    id: 'frame-organic-cloud',
    name: 'Marco Nube Suave (Cloud)',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 120 80',
    clipPath: 'M 26,72 H 96 C 108,72 116,62 116,50 C 116,40 110,32 100,30 C 100,16 88,4 72,4 C 62,4 52,10 46,18 C 42,14 36,12 30,12 C 16,12 6,22 6,36 C 6,38 7,40 8,42 C 2,46 0,54 0,62 C 0,72 10,72 26,72 Z',
    defaultWidth: 190,
    defaultHeight: 126,
    tags: ['nube', 'cloud', 'cielo', 'suave', 'fantasia', 'algodon']
  },
  {
    id: 'frame-organic-arch',
    name: 'Marco Arco Arquitectónico (Arch)',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 100 140',
    clipPath: 'M 6,134 V 50 A 44,44 0 0,1 94,50 V 134 Z',
    defaultWidth: 140,
    defaultHeight: 196,
    tags: ['arco', 'arch', 'portal', 'arquitectura', 'boho', 'moderno']
  },
  {
    id: 'frame-organic-semicircle',
    name: 'Marco Semicírculo / Domo',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 120 70',
    clipPath: 'M 6,64 A 54,54 0 0,1 114,64 Z',
    defaultWidth: 180,
    defaultHeight: 105,
    tags: ['semicirculo', 'medio circulo', 'domo', 'sol saliente']
  },
  {
    id: 'frame-organic-capsule-h',
    name: 'Marco Cápsula Horizontal',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 150 75',
    clipPath: 'M 38,6 H 112 A 32,32 0 0,1 112,70 H 38 A 32,32 0 0,1 38,6 Z',
    defaultWidth: 200,
    defaultHeight: 100,
    tags: ['capsula', 'pildora', 'pill', 'redondeado', 'estirado']
  },
  {
    id: 'frame-organic-capsule-v',
    name: 'Marco Cápsula Vertical',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 75 150',
    clipPath: 'M 6,38 V 112 A 32,32 0 0,0 70,112 V 38 A 32,32 0 0,0 6,38 Z',
    defaultWidth: 100,
    defaultHeight: 200,
    tags: ['capsula', 'vertical', 'pildora', 'estilizado']
  },
  {
    id: 'frame-organic-wave',
    name: 'Marco Onda Fluida (Wave)',
    category: 'Marcos para Fotos',
    subCategory: 'Orgánicos & Blobs',
    viewBox: '0 0 100 100',
    clipPath: 'M 4,4 H 96 V 78 Q 72,98 48,82 Q 24,66 4,88 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['onda', 'ola', 'wave', 'mar', 'agua', 'verano']
  },

  // ==========================================
  // 5. RASGADOS & PINCEL (7)
  // ==========================================
  {
    id: 'frame-torn-paper-rect',
    name: 'Marco Papel Rasgado Horizontal',
    category: 'Marcos para Fotos',
    subCategory: 'Rasgados & Pincel',
    viewBox: '0 0 140 100',
    clipPath: 'M 6,8 L 134,6 L 132,24 L 136,44 L 133,62 L 135,82 L 133,92 L 118,94 L 102,90 L 86,95 L 70,89 L 52,94 L 36,88 L 22,94 L 8,91 L 6,74 L 8,56 L 5,38 L 7,20 Z',
    defaultWidth: 185,
    defaultHeight: 132,
    tags: ['papel rasgado', 'torn paper', 'grunge', 'scrapbook', 'collage', 'artesanal']
  },
  {
    id: 'frame-torn-paper-square',
    name: 'Marco Papel Rasgado Cuadrado',
    category: 'Marcos para Fotos',
    subCategory: 'Rasgados & Pincel',
    viewBox: '0 0 100 100',
    clipPath: 'M 8,6 L 32,8 L 56,6 L 78,9 L 94,6 L 91,28 L 95,48 L 92,68 L 94,92 L 72,90 L 52,94 L 30,89 L 8,92 L 10,70 L 6,48 L 9,26 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['papel rasgado', 'cuadrado', 'grunge', 'vintage', 'scrapbook']
  },
  {
    id: 'frame-brush-stroke-h',
    name: 'Marco Pincelada Horizontal',
    category: 'Marcos para Fotos',
    subCategory: 'Rasgados & Pincel',
    viewBox: '0 0 150 90',
    clipPath: 'M 14,24 Q 40,16 80,18 Q 120,20 138,24 Q 146,45 138,66 Q 110,72 75,68 Q 38,72 14,64 Q 6,44 14,24 Z',
    defaultWidth: 200,
    defaultHeight: 120,
    tags: ['pincel', 'brush', 'brocha', 'pintura', 'trazo', 'artistico']
  },
  {
    id: 'frame-brush-stroke-v',
    name: 'Marco Pincelada Vertical',
    category: 'Marcos para Fotos',
    subCategory: 'Rasgados & Pincel',
    viewBox: '0 0 90 140',
    clipPath: 'M 24,14 Q 45,6 66,14 Q 72,40 68,75 Q 72,110 64,134 Q 44,142 24,134 Q 16,110 20,75 Q 16,40 24,14 Z',
    defaultWidth: 135,
    defaultHeight: 210,
    tags: ['pincel vertical', 'brocha', 'pintura', 'trazo', 'textura']
  },
  {
    id: 'frame-watercolor-splash',
    name: 'Marco Acuarela Salpicadura',
    category: 'Marcos para Fotos',
    subCategory: 'Rasgados & Pincel',
    viewBox: '0 0 100 100',
    clipPath: 'M 48,10 C 66,4 82,18 90,32 C 98,46 94,64 86,76 C 78,88 62,96 46,94 C 30,92 16,84 10,68 C 4,52 6,36 18,22 C 30,8 38,12 48,10 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['acuarela', 'salpicadura', 'splash', 'arte', 'mancha', 'color']
  },
  {
    id: 'frame-ink-splatter',
    name: 'Marco Mancha de Tinta Ink Splat',
    category: 'Marcos para Fotos',
    subCategory: 'Rasgados & Pincel',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,14 C 62,6 74,18 84,22 C 94,26 96,40 92,54 C 88,68 94,82 82,90 C 70,98 56,92 44,92 C 32,92 18,96 12,84 C 6,72 12,58 10,44 C 8,30 20,24 28,18 C 36,12 44,16 50,14 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['tinta', 'mancha', 'ink', 'splatter', 'graffiti', 'creativo']
  },
  {
    id: 'frame-washi-tape-photo',
    name: 'Marco Foto con Cinta Washi Tape',
    category: 'Marcos para Fotos',
    subCategory: 'Rasgados & Pincel',
    viewBox: '0 0 110 130',
    clipPath: 'M 14,16 H 96 V 116 H 14 Z',
    overlaySvg: `<svg viewBox="0 0 110 130" fill="none" class="w-full h-full drop-shadow-md">
      <!-- White card base -->
      <rect x="10" y="12" width="90" height="108" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
      <!-- Washi tape top-left piece -->
      <rect x="8" y="4" width="38" height="12" rx="1" transform="rotate(-12 27 10)" fill="#fef08a" fill-opacity="0.85" stroke="#facc15" stroke-width="0.8" />
      <!-- Washi tape bottom-right piece -->
      <rect x="64" y="112" width="38" height="12" rx="1" transform="rotate(-8 83 118)" fill="#fbcfe8" fill-opacity="0.85" stroke="#f472b6" stroke-width="0.8" />
    </svg>`,
    defaultWidth: 150,
    defaultHeight: 177,
    tags: ['washi tape', 'cinta', 'polaroid pegada', 'scrapbook', 'memo', 'nota']
  },

  // ==========================================
  // 6. SÍMBOLOS & SILUETAS (6)
  // ==========================================
  {
    id: 'frame-heart',
    name: 'Marco Corazón Romántico',
    category: 'Marcos para Fotos',
    subCategory: 'Símbolos & Siluetas',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,86 C 18,62 4,42 4,26 C 4,12 14,4 27,4 C 36,4 45,9 50,18 C 55,9 64,4 73,4 C 86,4 96,12 96,26 C 96,42 82,62 50,86 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['corazon', 'heart', 'amor', 'romance', 'san valentin', 'boda', 'pareja']
  },
  {
    id: 'frame-star-5',
    name: 'Marco Estrella de 5 Puntas',
    category: 'Marcos para Fotos',
    subCategory: 'Símbolos & Siluetas',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,4 L 63,33 L 95,36 L 71,57 L 78,89 L 50,72 L 22,89 L 29,57 L 5,36 L 37,33 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['estrella', 'star', 'magia', 'premio', 'favorito', 'calificacion']
  },
  {
    id: 'frame-star-badge-12',
    name: 'Marco Insignia Festoneada 12 Puntas',
    category: 'Marcos para Fotos',
    subCategory: 'Símbolos & Siluetas',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,2 L 62,12 L 78,9 L 85,24 L 99,30 L 98,46 L 108,58 L 99,70 L 102,86 L 86,91 L 80,106 L 64,103 L 53,114 L 43,103 L 27,106 L 21,91 L 5,86 L 8,70 L -1,58 L 9,46 L 8,30 L 22,24 L 29,9 L 45,12 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['insignia', 'badge', 'festoneado', 'premio', 'oferta', 'descuento', 'calidad']
  },
  {
    id: 'frame-shield',
    name: 'Marco Escudo / Blazón',
    category: 'Marcos para Fotos',
    subCategory: 'Símbolos & Siluetas',
    viewBox: '0 0 100 120',
    clipPath: 'M 6,10 H 94 V 56 C 94,88 64,112 50,118 C 36,112 6,88 6,56 Z',
    defaultWidth: 150,
    defaultHeight: 180,
    tags: ['escudo', 'shield', 'seguridad', 'blazon', 'emblema', 'heráldico']
  },
  {
    id: 'frame-flower-daisy',
    name: 'Marco Flor Margarita 6 Pétalos',
    category: 'Marcos para Fotos',
    subCategory: 'Símbolos & Siluetas',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,30 C 56,16 68,16 74,26 C 80,36 74,46 66,48 C 78,44 86,52 84,64 C 82,76 70,78 62,72 C 68,84 60,94 48,92 C 36,90 38,78 42,70 C 32,76 22,72 20,60 C 18,48 28,42 38,46 C 30,38 34,26 44,28 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['flor', 'margarita', 'flower', 'primavera', 'naturaleza', 'jardin']
  },
  {
    id: 'frame-sunburst',
    name: 'Marco Sol Radiante Sunburst',
    category: 'Marcos para Fotos',
    subCategory: 'Símbolos & Siluetas',
    viewBox: '0 0 100 100',
    clipPath: 'M 50,4 L 56,22 L 74,12 L 72,30 L 90,28 L 82,44 L 98,50 L 82,56 L 90,72 L 72,70 L 74,88 L 56,78 L 50,96 L 44,78 L 26,88 L 28,70 L 10,72 L 18,56 L 2,50 L 18,44 L 10,28 L 28,30 L 26,12 L 44,22 Z',
    defaultWidth: 160,
    defaultHeight: 160,
    tags: ['sol', 'sun', 'rayos', 'verano', 'calor', 'radiante', 'brillante']
  }
];

/**
 * Generates an SVG string representation of the iconic Canva rolling landscape placeholder
 * (blue sky, fluffy cloud, sun, rolling green hills) clipped exactly to the given frame path!
 */
export function generateCanvaFrameSvgMarkup(frame: PhotoFrameItem, uniqueId: string = frame.id): string {
  const maskId = `canva-mask-${uniqueId.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  
  return `
<svg viewBox="${frame.viewBox}" class="w-full h-full block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <defs>
    <clipPath id="${maskId}">
      <path d="${frame.clipPath}" />
    </clipPath>
    <linearGradient id="${maskId}-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4bb2f6"/>
      <stop offset="60%" stop-color="#89d1fc"/>
      <stop offset="100%" stop-color="#c5e6fe"/>
    </linearGradient>
    <linearGradient id="${maskId}-hill1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#66bb6a"/>
      <stop offset="100%" stop-color="#43a047"/>
    </linearGradient>
    <linearGradient id="${maskId}-hill2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4caf50"/>
      <stop offset="100%" stop-color="#2e7d32"/>
    </linearGradient>
  </defs>
  <g clip-path="url(#${maskId})">
    <!-- Sky -->
    <rect width="100%" height="100%" fill="url(#${maskId}-sky)" />
    <!-- Sun -->
    <circle cx="78%" cy="26%" r="14%" fill="#fff59d" opacity="0.9" />
    <circle cx="78%" cy="26%" r="9%" fill="#ffee58" />
    <!-- Cloud -->
    <path d="M 16,32 Q 22,22 32,24 Q 38,14 50,22 Q 60,16 68,25 Q 75,24 78,32 Q 81,40 72,46 L 18,46 Q 10,40 16,32 Z" fill="#ffffff" fill-opacity="0.88" />
    <!-- Background Rolling Hill -->
    <path d="M -20,70 Q 30,44 75,60 T 150,52 L 150,150 L -20,150 Z" fill="url(#${maskId}-hill1)" />
    <!-- Foreground Lush Hill -->
    <path d="M -20,86 Q 25,62 65,78 T 150,70 L 150,150 L -20,150 Z" fill="url(#${maskId}-hill2)" />
  </g>
</svg>
`.trim();
}
