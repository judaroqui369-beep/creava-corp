// 50 High-Quality 3D Vector Elements (Claymorphic, Glossy & Isometric) for Creava Graphic Elements
// Features rich radial & linear gradients, ambient occlusion shadows, specular highlights, and volumetric depth.

export interface ThreeDElementItem {
  id: string;
  name: string;
  category: 'Elementos 3D';
  subCategory:
    | 'Figuras & Formas 3D'
    | 'Finanzas & Cripto 3D'
    | 'Tech & Espacio 3D'
    | 'Social & Reacciones 3D'
    | 'Oficina & Éxito 3D';
  svgContent: string;
  dataUri: string;
  viewBox: string;
  defaultFill: string;
  tags: string[];
}

function createThreeDSvg(svgInner: string, viewBox = '0 0 120 120'): { svgContent: string; dataUri: string; viewBox: string } {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%" fill="none">${svgInner}</svg>`;
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
  return { svgContent, dataUri, viewBox };
}

export const THREE_D_ELEMENTS: ThreeDElementItem[] = [
  // =================================================================
  // 1. FIGURAS & FORMAS 3D (10 elements)
  // =================================================================
  {
    id: 'threed-glossy-sphere-violet',
    name: 'Esfera Glossy Violeta 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-sphere-grad" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stop-color="#E9D5FF" />
          <stop offset="25%" stop-color="#C084FC" />
          <stop offset="65%" stop-color="#7E22CE" />
          <stop offset="100%" stop-color="#3B0764" />
        </radialGradient>
        <radialGradient id="threed-sphere-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1E1B4B" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#1E1B4B" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="threed-sphere-specular" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </linearGradient>
      </defs>
      <!-- Ground Shadow -->
      <ellipse cx="60" cy="108" rx="42" ry="9" fill="url(#threed-sphere-shadow)" />
      <!-- Main Sphere -->
      <circle cx="60" cy="56" r="46" fill="url(#threed-sphere-grad)" />
      <!-- Top-left Specular Glow -->
      <ellipse cx="46" cy="38" rx="18" ry="12" fill="url(#threed-sphere-specular)" transform="rotate(-25 46 38)" />
      <!-- Secondary Rim Light at Bottom-Right -->
      <path d="M72 88 A46 46 0 0 0 98 68" stroke="#F3E8FF" stroke-width="3" stroke-linecap="round" opacity="0.35" />
    `),
    defaultFill: '#8B5CF6',
    tags: ['3d', 'esfera', 'bola', 'glossy', 'render', 'morado', 'violeta', 'forma', 'geometria']
  },
  {
    id: 'threed-isometric-cube-cyan',
    name: 'Cubo Isométrico Neón 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#67E8F9" />
          <stop offset="100%" stop-color="#06B6D4" />
        </linearGradient>
        <linearGradient id="threed-cube-left" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0891B2" />
          <stop offset="100%" stop-color="#155E75" />
        </linearGradient>
        <linearGradient id="threed-cube-right" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0E7490" />
          <stop offset="100%" stop-color="#164E63" />
        </linearGradient>
        <radialGradient id="threed-cube-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#083344" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#083344" stop-opacity="0" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <polygon points="60,114 102,94 60,78 18,94" fill="url(#threed-cube-shadow)" />
      <!-- Cube Left Face -->
      <polygon points="20,44 60,66 60,104 20,82" fill="url(#threed-cube-left)" />
      <!-- Cube Right Face -->
      <polygon points="60,66 100,44 100,82 60,104" fill="url(#threed-cube-right)" />
      <!-- Cube Top Face -->
      <polygon points="60,22 100,44 60,66 20,44" fill="url(#threed-cube-top)" />
      <!-- Edge Highlights -->
      <polyline points="20,44 60,66 100,44" stroke="#A5F3FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" />
      <line x1="60" y1="66" x2="60" y2="104" stroke="#A5F3FC" stroke-width="1.5" stroke-linecap="round" opacity="0.4" />
    `),
    defaultFill: '#06B6D4',
    tags: ['3d', 'cubo', 'isometrico', 'cyan', 'bloque', 'geometria', 'caja', 'render']
  },
  {
    id: 'threed-torus-donut-pink',
    name: 'Toroide Donut Puffy 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-torus-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6" />
          <stop offset="50%" stop-color="#DB2777" />
          <stop offset="100%" stop-color="#831843" />
        </linearGradient>
        <radialGradient id="threed-torus-glow" cx="40%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#FDF2F8" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#F472B6" stop-opacity="0" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="106" rx="40" ry="10" fill="#4A044E" opacity="0.3" />
      <!-- Outer torus body -->
      <path d="M60 16 C34 16 16 34 16 58 C16 82 34 100 60 100 C86 100 104 82 104 58 C104 34 86 16 60 16 Z M60 40 C70 40 78 48 78 58 C78 68 70 76 60 76 C50 76 42 68 42 58 C42 48 50 40 60 40 Z" fill="url(#threed-torus-grad)" fill-rule="evenodd" />
      <!-- Torus Specular highlight rim -->
      <path d="M36 34 C44 26 56 22 68 24 C76 26 84 32 88 38" stroke="#FCE7F3" stroke-width="5" stroke-linecap="round" opacity="0.75" />
      <!-- Soft reflection on inner tube -->
      <ellipse cx="60" cy="48" rx="8" ry="4" fill="url(#threed-torus-glow)" />
    `),
    defaultFill: '#EC4899',
    tags: ['3d', 'toroide', 'donut', 'aro', 'anillo', 'rosa', 'puffy', 'clay', 'curva']
  },
  {
    id: 'threed-pyramid-gold',
    name: 'Pirámide Dorada 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-pyr-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#CA8A04" />
        </linearGradient>
        <linearGradient id="threed-pyr-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#713F12" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <polygon points="60,110 105,96 55,80 15,96" fill="#422006" opacity="0.35" />
      <!-- Left lit face -->
      <polygon points="60,16 18,92 60,102" fill="url(#threed-pyr-left)" />
      <!-- Right shaded face -->
      <polygon points="60,16 60,102 102,90" fill="url(#threed-pyr-right)" />
      <!-- Apex Highlight -->
      <circle cx="60" cy="16" r="3" fill="#FEF08A" />
      <line x1="60" y1="16" x2="60" y2="102" stroke="#FEF9C3" stroke-width="2" stroke-linecap="round" opacity="0.8" />
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'piramide', 'oro', 'triangulo', 'dorado', 'geometria', 'egipcio']
  },
  {
    id: 'threed-cylinder-emerald',
    name: 'Cilindro Esmeralda 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-cyl-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#059669" />
          <stop offset="35%" stop-color="#34D399" />
          <stop offset="70%" stop-color="#059669" />
          <stop offset="100%" stop-color="#064E3B" />
        </linearGradient>
        <linearGradient id="threed-cyl-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6EE7B7" />
          <stop offset="100%" stop-color="#10B981" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="38" ry="8" fill="#064E3B" opacity="0.35" />
      <!-- Cylinder Body -->
      <path d="M26 38 H94 V88 C94 99 79 108 60 108 C41 108 26 99 26 88 Z" fill="url(#threed-cyl-body)" />
      <!-- Cylinder Top Cap -->
      <ellipse cx="60" cy="38" rx="34" ry="14" fill="url(#threed-cyl-top)" />
      <!-- Top Rim Highlight -->
      <path d="M34 38 C42 45 68 47 86 40" stroke="#A7F3D0" stroke-width="2" stroke-linecap="round" opacity="0.7" />
    `),
    defaultFill: '#10B981',
    tags: ['3d', 'cilindro', 'columna', 'verde', 'esmeralda', 'pila', 'geometria']
  },
  {
    id: 'threed-capsule-pill-orange',
    name: 'Cápsula Flotante 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-pill-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDBA74" />
          <stop offset="40%" stop-color="#FB923C" />
          <stop offset="100%" stop-color="#C2410C" />
        </linearGradient>
        <linearGradient id="threed-pill-white" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
      </defs>
      <g transform="rotate(-30 60 60)">
        <!-- Shadow -->
        <rect x="22" y="78" width="76" height="26" rx="13" fill="#431407" opacity="0.25" />
        <!-- Orange Left Half -->
        <path d="M30 38 H60 V82 H30 C18 82 10 72 10 60 C10 48 18 38 30 38 Z" fill="url(#threed-pill-orange)" />
        <!-- White Right Half -->
        <path d="M60 38 H90 C102 38 110 48 110 60 C110 72 102 82 90 82 H60 Z" fill="url(#threed-pill-white)" />
        <!-- Specular Highlight Strip -->
        <rect x="26" y="44" width="68" height="6" rx="3" fill="#FFFFFF" opacity="0.8" />
      </g>
    `),
    defaultFill: '#F97316',
    tags: ['3d', 'capsula', 'pildora', 'medicina', 'orange', 'redondeado', 'pastilla']
  },
  {
    id: 'threed-cone-indigo',
    name: 'Cono Volumétrico 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-cone-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#4F46E5" />
          <stop offset="40%" stop-color="#818CF8" />
          <stop offset="80%" stop-color="#3730A3" />
          <stop offset="100%" stop-color="#1E1B4B" />
        </linearGradient>
      </defs>
      <!-- Base Shadow -->
      <ellipse cx="60" cy="104" rx="42" ry="10" fill="#1E1B4B" opacity="0.4" />
      <!-- Cone Body -->
      <path d="M60 16 L22 92 C22 104 39 112 60 112 C81 112 98 104 98 92 Z" fill="url(#threed-cone-grad)" />
      <!-- Cone Tip Highlight -->
      <circle cx="60" cy="18" r="3" fill="#C7D2FE" />
      <line x1="60" y1="20" x2="52" y2="92" stroke="#E0E7FF" stroke-width="2" stroke-linecap="round" opacity="0.6" />
    `),
    defaultFill: '#6366F1',
    tags: ['3d', 'cono', 'piramide', 'geometria', 'indigo', 'azul', 'volumen']
  },
  {
    id: 'threed-crystal-gem-teal',
    name: 'Prisma de Cristal 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-gem-f1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2DD4BF" />
          <stop offset="100%" stop-color="#0F766E" />
        </linearGradient>
        <linearGradient id="threed-gem-f2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#5EEAD4" />
          <stop offset="100%" stop-color="#14B8A6" />
        </linearGradient>
        <linearGradient id="threed-gem-f3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#115E59" />
          <stop offset="100%" stop-color="#042F2E" />
        </linearGradient>
      </defs>
      <!-- Ground Shadow -->
      <ellipse cx="60" cy="110" rx="36" ry="7" fill="#042F2E" opacity="0.35" />
      <!-- Gem Facets -->
      <polygon points="60,14 88,44 60,62 32,44" fill="url(#threed-gem-f2)" />
      <polygon points="32,44 60,62 60,106 20,68" fill="url(#threed-gem-f1)" />
      <polygon points="60,62 88,44 100,68 60,106" fill="url(#threed-gem-f3)" />
      <!-- Highlight Glint -->
      <path d="M56 18 L64 24 L60 30" stroke="#CCFBF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    `),
    defaultFill: '#14B8A6',
    tags: ['3d', 'prisma', 'cristal', 'diamante', 'gem', 'esmeralda', 'facetado', 'poligono']
  },
  {
    id: 'threed-star-puffy-yellow',
    name: 'Estrella Inflada 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-star-glow" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="45%" stop-color="#FACC15" />
          <stop offset="85%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#A16207" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="108" rx="38" ry="8" fill="#713F12" opacity="0.3" />
      <!-- Puffy Star Shape -->
      <path d="M60 14 C63 28 66 38 78 44 C90 50 102 52 100 66 C98 78 86 80 80 92 C74 104 66 108 60 98 C54 108 46 104 40 92 C34 80 22 78 20 66 C18 52 30 50 42 44 C54 38 57 28 60 14 Z" fill="url(#threed-star-glow)" />
      <!-- Star Specular Highlight -->
      <ellipse cx="48" cy="42" rx="10" ry="6" fill="#FFFFFF" opacity="0.75" transform="rotate(-20 48 42)" />
      <circle cx="68" cy="50" r="3" fill="#FFFFFF" opacity="0.6" />
    `),
    defaultFill: '#FACC15',
    tags: ['3d', 'estrella', 'inflada', 'puffy', 'dorada', 'favorito', 'premio', 'rating']
  },
  {
    id: 'threed-orbital-ring-blue',
    name: 'Anillo Orbital Neón 3D',
    category: 'Elementos 3D',
    subCategory: 'Figuras & Formas 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="50%" stop-color="#6366F1" />
          <stop offset="100%" stop-color="#A855F7" />
        </linearGradient>
      </defs>
      <!-- Central Glowing Core Sphere -->
      <circle cx="60" cy="60" r="26" fill="#1E293B" />
      <circle cx="56" cy="54" r="20" fill="url(#threed-ring-grad)" />
      <circle cx="50" cy="48" r="6" fill="#FFFFFF" opacity="0.7" />
      <!-- Tilted Orbital Ring in Front & Behind -->
      <ellipse cx="60" cy="60" rx="52" ry="18" stroke="url(#threed-ring-grad)" stroke-width="8" stroke-linecap="round" transform="rotate(-28 60 60)" />
      <!-- Front Arc Highlight -->
      <path d="M22 66 C32 82 68 86 92 68" stroke="#E0F2FE" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8" />
    `),
    defaultFill: '#38BDF8',
    tags: ['3d', 'orbital', 'anillo', 'planeta', 'saturno', 'futuro', 'espacio', 'tecnologia']
  },

  // =================================================================
  // 2. FINANZAS & CRIPTO 3D (10 elements)
  // =================================================================
  {
    id: 'threed-gold-coin-dollar',
    name: 'Moneda de Oro Dólar 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-coin-front" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="40%" stop-color="#FACC15" />
          <stop offset="80%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#854D0E" />
        </radialGradient>
        <linearGradient id="threed-coin-rim" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#A16207" />
          <stop offset="100%" stop-color="#713F12" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#422006" opacity="0.4" />
      <!-- Coin Rim Depth (3D edge) -->
      <ellipse cx="60" cy="64" rx="42" ry="42" fill="url(#threed-coin-rim)" />
      <!-- Coin Front Face -->
      <ellipse cx="60" cy="56" rx="42" ry="42" fill="url(#threed-coin-front)" />
      <!-- Inner Border Ring -->
      <circle cx="60" cy="56" r="34" stroke="#FEF08A" stroke-width="3" opacity="0.8" />
      <!-- 3D Dollar Symbol -->
      <text x="61" y="70" font-family="'Impact', 'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#713F12" text-anchor="middle">$</text>
      <text x="59" y="68" font-family="'Impact', 'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#FEF9C3" text-anchor="middle">$</text>
      <!-- Rim Glint -->
      <path d="M30 40 A42 42 0 0 1 74 18" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.75" />
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'moneda', 'oro', 'dolar', 'dinero', 'finanzas', 'banco', 'inversion', 'cash']
  },
  {
    id: 'threed-bitcoin-crypto',
    name: 'Criptomoneda Bitcoin 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-btc-face" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#FFEDD5" />
          <stop offset="35%" stop-color="#FB923C" />
          <stop offset="80%" stop-color="#EA580C" />
          <stop offset="100%" stop-color="#7C2D12" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#431407" opacity="0.35" />
      <!-- 3D Edge -->
      <circle cx="60" cy="62" r="42" fill="#7C2D12" />
      <!-- Main Face -->
      <circle cx="60" cy="56" r="42" fill="url(#threed-btc-face)" />
      <!-- Inner Ring -->
      <circle cx="60" cy="56" r="34" stroke="#FED7AA" stroke-width="2.5" opacity="0.7" />
      <!-- Bitcoin Symbol ₿ -->
      <text x="61" y="69" font-family="'Arial Black', sans-serif" font-size="40" font-weight="900" fill="#7C2D12" text-anchor="middle">₿</text>
      <text x="59" y="67" font-family="'Arial Black', sans-serif" font-size="40" font-weight="900" fill="#FFF7ED" text-anchor="middle">₿</text>
      <!-- Light Reflection -->
      <ellipse cx="45" cy="35" rx="14" ry="8" fill="#FFFFFF" opacity="0.45" transform="rotate(-30 45 35)" />
    `),
    defaultFill: '#F97316',
    tags: ['3d', 'bitcoin', 'crypto', 'cripto', 'btc', 'blockchain', 'finanzas', 'moneda']
  },
  {
    id: 'threed-piggy-bank-pink',
    name: 'Hucha Cerdito 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-piggy-grad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#FCE7F3" />
          <stop offset="35%" stop-color="#F472B6" />
          <stop offset="85%" stop-color="#BE185D" />
          <stop offset="100%" stop-color="#831843" />
        </radialGradient>
      </defs>
      <!-- Ground Shadow -->
      <ellipse cx="60" cy="110" rx="44" ry="9" fill="#500724" opacity="0.35" />
      <!-- Piggy Legs -->
      <rect x="34" y="82" width="12" height="20" rx="6" fill="#9D174D" />
      <rect x="74" y="82" width="12" height="20" rx="6" fill="#9D174D" />
      <!-- Piggy Body -->
      <ellipse cx="60" cy="62" rx="44" ry="34" fill="url(#threed-piggy-grad)" />
      <!-- Snout -->
      <ellipse cx="22" cy="64" rx="12" ry="10" fill="#FBCFE8" stroke="#DB2777" stroke-width="2" />
      <circle cx="18" cy="64" r="2.5" fill="#831843" />
      <circle cx="26" cy="64" r="2.5" fill="#831843" />
      <!-- Cute Eye -->
      <circle cx="38" cy="50" r="4" fill="#18181B" />
      <circle cx="39.5" cy="48.5" r="1.5" fill="#FFFFFF" />
      <!-- Cute Ear -->
      <polygon points="46,36 34,20 54,24" fill="#F472B6" stroke="#BE185D" stroke-width="2" />
      <!-- Coin Slot & Gold Coin entering -->
      <ellipse cx="62" cy="30" rx="10" ry="3" fill="#831843" />
      <ellipse cx="62" cy="24" rx="10" ry="5" fill="#FACC15" stroke="#CA8A04" stroke-width="1.5" />
    `),
    defaultFill: '#EC4899',
    tags: ['3d', 'hucha', 'cerdito', 'ahorro', 'banco', 'moneda', 'finanzas', 'pink']
  },
  {
    id: 'threed-credit-card-glow',
    name: 'Tarjeta de Crédito Flotante 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="40%" stop-color="#6366F1" />
          <stop offset="100%" stop-color="#4338CA" />
        </linearGradient>
      </defs>
      <g transform="rotate(-15 60 60)">
        <!-- Shadow -->
        <rect x="22" y="70" width="76" height="48" rx="8" fill="#1E1B4B" opacity="0.35" />
        <!-- Card 3D Depth -->
        <rect x="18" y="38" width="84" height="52" rx="8" fill="#312E81" />
        <!-- Card Face -->
        <rect x="18" y="34" width="84" height="52" rx="8" fill="url(#threed-card-grad)" />
        <!-- Golden Chip -->
        <rect x="28" y="44" width="16" height="12" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1" />
        <!-- Contactless waves -->
        <path d="M50 48 A6 6 0 0 1 50 54 M54 45 A12 12 0 0 1 54 57" stroke="#BAE6FD" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <!-- Card Number Dots -->
        <circle cx="32" cy="68" r="2" fill="#FFFFFF" opacity="0.9" />
        <circle cx="38" cy="68" r="2" fill="#FFFFFF" opacity="0.9" />
        <circle cx="44" cy="68" r="2" fill="#FFFFFF" opacity="0.9" />
        <circle cx="50" cy="68" r="2" fill="#FFFFFF" opacity="0.9" />
        <text x="64" y="71" font-family="'Space Grotesk', monospace" font-size="9" fill="#FFFFFF" font-weight="bold">8842</text>
        <!-- Card Logo circles -->
        <circle cx="82" cy="72" r="6" fill="#EF4444" opacity="0.9" />
        <circle cx="89" cy="72" r="6" fill="#F59E0B" opacity="0.9" />
      </g>
    `),
    defaultFill: '#6366F1',
    tags: ['3d', 'tarjeta', 'credito', 'debito', 'pago', 'finanzas', 'visa', 'mastercard', 'compra']
  },
  {
    id: 'threed-growth-chart-bars',
    name: 'Gráfico de Crecimiento 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-chart-b1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
        <linearGradient id="threed-chart-b2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#818CF8" />
          <stop offset="100%" stop-color="#4338CA" />
        </linearGradient>
        <linearGradient id="threed-chart-b3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
      </defs>
      <!-- Base Grid Plate -->
      <polygon points="60,116 110,92 60,74 10,92" fill="#0F172A" opacity="0.25" />
      <!-- Bar 1 (Short) -->
      <g transform="translate(18, 20)">
        <polygon points="12,40 24,46 24,78 12,72" fill="#1E40AF" />
        <polygon points="24,46 36,40 36,72 24,78" fill="#172554" />
        <polygon points="12,40 24,34 36,40 24,46" fill="url(#threed-chart-b1)" />
      </g>
      <!-- Bar 2 (Medium) -->
      <g transform="translate(42, 6)">
        <polygon points="12,28 24,34 24,78 12,72" fill="#3730A3" />
        <polygon points="24,34 36,28 36,72 24,78" fill="#1E1B4B" />
        <polygon points="12,28 24,22 36,28 24,34" fill="url(#threed-chart-b2)" />
      </g>
      <!-- Bar 3 (Tall Green) -->
      <g transform="translate(66, -10)">
        <polygon points="12,16 24,22 24,78 12,72" fill="#047857" />
        <polygon points="24,22 36,16 36,72 24,78" fill="#064E3B" />
        <polygon points="12,16 24,10 36,16 24,22" fill="url(#threed-chart-b3)" />
      </g>
      <!-- Dynamic Rising Trend Arrow -->
      <path d="M22 66 Q 50 44 86 16" stroke="#22C55E" stroke-width="5" fill="none" stroke-linecap="round" />
      <polygon points="84,10 98,14 90,26" fill="#22C55E" />
    `),
    defaultFill: '#10B981',
    tags: ['3d', 'grafico', 'crecimiento', 'ventas', 'estadistica', 'finanzas', 'subida', 'metricas']
  },
  {
    id: 'threed-money-bag-cash',
    name: 'Saco de Dinero 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-bag-body" cx="40%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="40%" stop-color="#EAB308" />
          <stop offset="85%" stop-color="#A16207" />
          <stop offset="100%" stop-color="#713F12" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="9" fill="#451A03" opacity="0.35" />
      <!-- Bag Body -->
      <path d="M30 50 C20 66 18 94 36 104 C46 108 74 108 84 104 C102 94 100 66 90 50 C80 38 72 44 60 44 C48 44 40 38 30 50 Z" fill="url(#threed-bag-body)" />
      <!-- Tied Neck Ribbon -->
      <ellipse cx="60" cy="42" rx="16" ry="6" fill="#DC2626" />
      <!-- Bag Top Ruff -->
      <path d="M46 40 C42 28 50 20 60 20 C70 20 78 28 74 40 Z" fill="#CA8A04" />
      <!-- Dollar Sign -->
      <text x="61" y="85" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#713F12" text-anchor="middle">$</text>
      <text x="59" y="83" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#FEF9C3" text-anchor="middle">$</text>
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'saco', 'bolsa', 'dinero', 'cash', 'riqueza', 'premio', 'inversion']
  },
  {
    id: 'threed-diamond-gem-blue',
    name: 'Diamante Brillante 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-dia-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0F2FE" />
          <stop offset="100%" stop-color="#38BDF8" />
        </linearGradient>
        <linearGradient id="threed-dia-mid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#0369A1" />
        </linearGradient>
        <linearGradient id="threed-dia-bot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#0C4A6E" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="112" rx="40" ry="8" fill="#082F49" opacity="0.35" />
      <!-- Top Table & Bezels -->
      <polygon points="34,26 86,26 104,50 16,50" fill="url(#threed-dia-top)" />
      <polygon points="46,26 74,26 60,50" fill="#BAE6FD" opacity="0.9" />
      <!-- Pavilion Bottom Cone -->
      <polygon points="16,50 60,106 40,50" fill="url(#threed-dia-mid)" />
      <polygon points="40,50 60,106 80,50" fill="#38BDF8" />
      <polygon points="80,50 60,106 104,50" fill="url(#threed-dia-bot)" />
      <!-- Sparkle Star Accent -->
      <path d="M88 20 L91 27 L98 30 L91 33 L88 40 L85 33 L78 30 L85 27 Z" fill="#FFFFFF" />
    `),
    defaultFill: '#38BDF8',
    tags: ['3d', 'diamante', 'gema', 'joya', 'lujo', 'premium', 'brillante', 'riqueza']
  },
  {
    id: 'threed-safe-vault-steel',
    name: 'Caja Fuerte de Acero 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-safe-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#1E293B" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="44" ry="8" fill="#0F172A" opacity="0.4" />
      <!-- Safe Outer Body -->
      <rect x="20" y="24" width="80" height="78" rx="14" fill="url(#threed-safe-body)" stroke="#64748B" stroke-width="3" />
      <!-- Inner Bezel Door -->
      <rect x="28" y="32" width="64" height="62" rx="10" fill="#334155" stroke="#0F172A" stroke-width="2" />
      <!-- Dial Wheel -->
      <circle cx="60" cy="63" r="18" fill="#F8FAFC" stroke="#64748B" stroke-width="3" />
      <circle cx="60" cy="63" r="12" fill="#E2E8F0" />
      <circle cx="60" cy="63" r="6" fill="#0F172A" />
      <line x1="60" y1="46" x2="60" y2="52" stroke="#EF4444" stroke-width="3" stroke-linecap="round" />
      <!-- Golden Handle Bar -->
      <rect x="76" y="56" width="8" height="14" rx="3" fill="#F59E0B" stroke="#B45309" stroke-width="1.5" />
    `),
    defaultFill: '#475569',
    tags: ['3d', 'caja fuerte', 'seguridad', 'banco', 'boveda', 'acero', 'oro', 'proteccion']
  },
  {
    id: 'threed-gold-bar-ingot',
    name: 'Lingote de Oro 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-gold-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="100%" stop-color="#EAB308" />
        </linearGradient>
        <linearGradient id="threed-gold-front" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#854D0E" />
        </linearGradient>
        <linearGradient id="threed-gold-side" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#A16207" />
          <stop offset="100%" stop-color="#713F12" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="106" rx="46" ry="8" fill="#451A03" opacity="0.35" />
      <!-- Ingot Front -->
      <polygon points="16,66 84,66 94,94 6,94" fill="url(#threed-gold-front)" />
      <!-- Ingot Right Side -->
      <polygon points="84,66 110,48 116,74 94,94" fill="url(#threed-gold-side)" />
      <!-- Ingot Top Face -->
      <polygon points="34,48 110,48 84,66 16,66" fill="url(#threed-gold-top)" />
      <!-- Stamped Hallmark -->
      <text x="50" y="84" font-family="'Impact', sans-serif" font-size="12" fill="#FEF9C3" letter-spacing="1">999.9 GOLD</text>
      <!-- Specular Shimmer -->
      <polygon points="40,50 60,50 48,64 28,64" fill="#FFFFFF" opacity="0.5" />
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'lingote', 'oro', 'riqueza', 'metal', 'inversion', 'banco', 'reserva']
  },
  {
    id: 'threed-wallet-leather-cards',
    name: 'Billetera con Tarjetas 3D',
    category: 'Elementos 3D',
    subCategory: 'Finanzas & Cripto 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-wallet-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#A16207" />
          <stop offset="100%" stop-color="#451A03" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="108" rx="44" ry="8" fill="#451A03" opacity="0.35" />
      <!-- Cards sticking out -->
      <rect x="36" y="22" width="46" height="26" rx="4" fill="#3B82F6" transform="rotate(-6 59 35)" />
      <rect x="42" y="26" width="46" height="24" rx="4" fill="#10B981" transform="rotate(4 65 38)" />
      <!-- Wallet Back -->
      <rect x="18" y="44" width="84" height="54" rx="12" fill="#78350F" />
      <!-- Wallet Front Flap -->
      <path d="M18 60 H102 V88 C102 96 94 102 84 102 H36 C26 102 18 96 18 88 Z" fill="url(#threed-wallet-grad)" />
      <!-- Clasp with golden snap -->
      <rect x="74" y="66" width="28" height="14" rx="6" fill="#78350F" stroke="#451A03" stroke-width="1.5" />
      <circle cx="94" cy="73" r="3.5" fill="#FACC15" stroke="#CA8A04" stroke-width="1" />
    `),
    defaultFill: '#B45309',
    tags: ['3d', 'billetera', 'cartera', 'tarjetas', 'dinero', 'cuero', 'pago', 'cash']
  },

  // =================================================================
  // 3. TECH & ESPACIO 3D (10 elements)
  // =================================================================
  {
    id: 'threed-rocket-launch-space',
    name: 'Cohete Espacial 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-rocket-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#F1F5F9" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
        <linearGradient id="threed-rocket-fin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
      </defs>
      <!-- Fire Thruster Flame -->
      <polygon points="60,118 46,92 74,92" fill="#EF4444" />
      <polygon points="60,112 50,92 70,92" fill="#F59E0B" />
      <polygon points="60,104 54,92 66,92" fill="#FEF08A" />
      <!-- Left & Right Fins -->
      <path d="M38 70 L20 88 C18 92 24 94 36 90 L40 82 Z" fill="url(#threed-rocket-fin)" />
      <path d="M82 70 L100 88 C102 92 96 94 84 90 L80 82 Z" fill="url(#threed-rocket-fin)" />
      <!-- Rocket Main Fuselage -->
      <path d="M60 12 C44 28 38 60 40 90 H80 C82 60 76 28 60 12 Z" fill="url(#threed-rocket-body)" />
      <!-- Red Nose Cone Tip -->
      <path d="M60 12 C52 20 48 30 46 38 H74 C72 30 68 20 60 12 Z" fill="url(#threed-rocket-fin)" />
      <!-- Cyan Glass Porthole Window -->
      <circle cx="60" cy="54" r="10" fill="#38BDF8" stroke="#0284C7" stroke-width="2.5" />
      <circle cx="58" cy="52" r="3" fill="#FFFFFF" />
    `),
    defaultFill: '#EF4444',
    tags: ['3d', 'cohete', 'espacio', 'lanzamiento', 'startup', 'vuelo', 'nave', 'velocidad']
  },
  {
    id: 'threed-smartphone-floating',
    name: 'Smartphone Flotante 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-phone-screen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#818CF8" />
          <stop offset="100%" stop-color="#4F46E5" />
        </linearGradient>
      </defs>
      <g transform="rotate(-10 60 60)">
        <!-- Shadow -->
        <rect x="36" y="80" width="56" height="34" rx="10" fill="#0F172A" opacity="0.3" />
        <!-- Phone 3D Edge -->
        <rect x="28" y="16" width="64" height="96" rx="14" fill="#1E293B" stroke="#475569" stroke-width="2" />
        <!-- Phone Screen -->
        <rect x="32" y="20" width="56" height="88" rx="10" fill="url(#threed-phone-screen)" />
        <!-- Dynamic Island / Speaker notch -->
        <rect x="52" y="24" width="16" height="4" rx="2" fill="#0F172A" />
        <!-- Screen App Icons -->
        <rect x="38" y="36" width="12" height="12" rx="3" fill="#38BDF8" />
        <rect x="54" y="36" width="12" height="12" rx="3" fill="#F43F5E" />
        <rect x="70" y="36" width="12" height="12" rx="3" fill="#10B981" />
        <!-- Glass Screen Glare -->
        <polygon points="32,20 64,20 44,98 32,98" fill="#FFFFFF" opacity="0.25" />
      </g>
    `),
    defaultFill: '#6366F1',
    tags: ['3d', 'movil', 'telefono', 'smartphone', 'celular', 'app', 'pantalla', 'gadget']
  },
  {
    id: 'threed-wireless-headphones',
    name: 'Auriculares Modernos 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-headphone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>
      </defs>
      <!-- Ground Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#0369A1" opacity="0.3" />
      <!-- Headband Arch -->
      <path d="M26 64 C26 32 40 18 60 18 C80 18 94 32 94 64" stroke="url(#threed-headphone-grad)" stroke-width="8" stroke-linecap="round" fill="none" />
      <!-- Top Cushion -->
      <path d="M42 22 C48 18 72 18 78 22" stroke="#0F172A" stroke-width="6" stroke-linecap="round" fill="none" />
      <!-- Left Ear Cup -->
      <rect x="18" y="56" width="16" height="34" rx="8" fill="#0284C7" stroke="#38BDF8" stroke-width="2" />
      <rect x="22" y="60" width="8" height="26" rx="4" fill="#0F172A" />
      <!-- Right Ear Cup -->
      <rect x="86" y="56" width="16" height="34" rx="8" fill="#0284C7" stroke="#38BDF8" stroke-width="2" />
      <rect x="90" y="60" width="8" height="26" rx="4" fill="#0F172A" />
    `),
    defaultFill: '#0284C7',
    tags: ['3d', 'auriculares', 'audifonos', 'musica', 'audio', 'sonido', 'podcast', 'dj']
  },
  {
    id: 'threed-cloud-upload-sync',
    name: 'Nube Cloud Sincronizada 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-cloud-puffy" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="50%" stop-color="#E0F2FE" />
          <stop offset="100%" stop-color="#7DD3FC" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="108" rx="46" ry="8" fill="#0369A1" opacity="0.3" />
      <!-- Cloud Puffy Body -->
      <path d="M34 86 C22 86 14 76 16 64 C16 52 26 44 38 46 C42 32 54 24 68 26 C80 28 88 38 90 48 C98 48 106 56 106 66 C106 78 96 86 84 86 Z" fill="url(#threed-cloud-puffy)" />
      <!-- Upload Arrow Floating in front -->
      <g transform="translate(48, 48)">
        <polygon points="12,4 2,16 8,16 8,28 16,28 16,16 22,16" fill="#0284C7" />
        <polygon points="12,4 2,16 8,16 8,26 16,26 16,16 22,16" fill="#38BDF8" />
      </g>
    `),
    defaultFill: '#38BDF8',
    tags: ['3d', 'nube', 'cloud', 'subir', 'sync', 'almacenamiento', 'servidor', 'datos']
  },
  {
    id: 'threed-fast-charge-battery',
    name: 'Batería Carga Rápida 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-battery-juice" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4ADE80" />
          <stop offset="100%" stop-color="#16A34A" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="36" ry="8" fill="#14532D" opacity="0.35" />
      <!-- Terminal Cap -->
      <rect x="48" y="16" width="24" height="8" rx="4" fill="#94A3B8" />
      <!-- Outer Glass Tube Body -->
      <rect x="30" y="24" width="60" height="78" rx="14" fill="#0F172A" stroke="#64748B" stroke-width="3" />
      <!-- Inner Green Power Level -->
      <rect x="36" y="42" width="48" height="54" rx="8" fill="url(#threed-battery-juice)" />
      <!-- Neon Lightning Bolt -->
      <polygon points="64,48 54,64 62,64 56,80 72,60 62,60" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5" />
    `),
    defaultFill: '#22C55E',
    tags: ['3d', 'bateria', 'carga', 'energia', 'rayo', 'potencia', 'electricidad', 'tech']
  },
  {
    id: 'threed-gear-cog-metallic',
    name: 'Engranaje Metálico 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-gear-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="50%" stop-color="#64748B" />
          <stop offset="100%" stop-color="#334155" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#1E293B" opacity="0.35" />
      <!-- 3D Depth Gear Rim -->
      <circle cx="60" cy="62" r="42" fill="#1E293B" />
      <!-- Gear Teeth & Wheel -->
      <g fill="url(#threed-gear-grad)">
        <circle cx="60" cy="56" r="38" />
        <rect x="52" y="10" width="16" height="14" rx="3" />
        <rect x="52" y="88" width="16" height="14" rx="3" />
        <rect x="14" y="48" width="14" height="16" rx="3" />
        <rect x="92" y="48" width="14" height="16" rx="3" />
        <rect x="24" y="24" width="16" height="16" rx="3" transform="rotate(45 32 32)" />
        <rect x="72" y="72" width="16" height="16" rx="3" transform="rotate(45 80 80)" />
        <rect x="72" y="24" width="16" height="16" rx="3" transform="rotate(-45 80 32)" />
        <rect x="24" y="72" width="16" height="16" rx="3" transform="rotate(-45 32 80)" />
      </g>
      <!-- Central Hole -->
      <circle cx="60" cy="56" r="14" fill="#0F172A" />
      <circle cx="60" cy="56" r="8" fill="#475569" />
    `),
    defaultFill: '#64748B',
    tags: ['3d', 'engranaje', 'ajustes', 'mecanico', 'configuracion', 'tuerca', 'motor', 'sistema']
  },
  {
    id: 'threed-lightbulb-idea-glow',
    name: 'Bombilla Idea Brillante 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-bulb-glow" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#FEF9C3" />
          <stop offset="40%" stop-color="#FACC15" />
          <stop offset="85%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#CA8A04" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="112" rx="34" ry="7" fill="#713F12" opacity="0.3" />
      <!-- Bulb Glass Dome -->
      <path d="M32 46 C32 30 44 18 60 18 C76 18 88 30 88 46 C88 56 80 66 76 74 H44 C40 66 32 56 32 46 Z" fill="url(#threed-bulb-glow)" />
      <!-- Screw Base -->
      <rect x="46" y="74" width="28" height="6" rx="2" fill="#94A3B8" />
      <rect x="48" y="82" width="24" height="6" rx="2" fill="#64748B" />
      <rect x="52" y="90" width="16" height="6" rx="3" fill="#334155" />
      <!-- Specular Highlight Curve -->
      <path d="M42 34 C46 26 56 24 64 24" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" />
      <!-- Glowing Rays -->
      <line x1="60" y1="6" x2="60" y2="12" stroke="#FACC15" stroke-width="3" stroke-linecap="round" />
      <line x1="20" y1="26" x2="26" y2="30" stroke="#FACC15" stroke-width="3" stroke-linecap="round" />
      <line x1="100" y1="26" x2="94" y2="30" stroke="#FACC15" stroke-width="3" stroke-linecap="round" />
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'bombilla', 'idea', 'creatividad', 'luz', 'pensar', 'innovacion', 'foco']
  },
  {
    id: 'threed-gamepad-controller',
    name: 'Mando Gaming 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-pad-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="108" rx="46" ry="8" fill="#0F172A" opacity="0.35" />
      <!-- Main Controller Ergonomic Body -->
      <path d="M26 40 C36 38 50 44 60 44 C70 44 84 38 94 40 C106 42 110 56 104 84 C100 100 86 98 78 86 L70 74 H50 L42 86 C34 98 20 100 16 84 C10 56 14 42 26 40 Z" fill="url(#threed-pad-grad)" stroke="#64748B" stroke-width="2" />
      <!-- D-Pad Plus Button (Left) -->
      <rect x="30" y="52" width="6" height="18" rx="2" fill="#CBD5E1" />
      <rect x="24" y="58" width="18" height="6" rx="2" fill="#CBD5E1" />
      <!-- ABXY Buttons (Right) -->
      <circle cx="86" cy="52" r="3" fill="#EF4444" />
      <circle cx="94" cy="60" r="3" fill="#10B981" />
      <circle cx="78" cy="60" r="3" fill="#3B82F6" />
      <circle cx="86" cy="68" r="3" fill="#F59E0B" />
      <!-- Thumbsticks -->
      <circle cx="46" cy="68" r="6" fill="#334155" stroke="#94A3B8" stroke-width="1.5" />
      <circle cx="74" cy="68" r="6" fill="#334155" stroke="#94A3B8" stroke-width="1.5" />
    `),
    defaultFill: '#3B82F6',
    tags: ['3d', 'mando', 'gamepad', 'videojuegos', 'gaming', 'arcade', 'consola', 'play']
  },
  {
    id: 'threed-security-padlock',
    name: 'Candado de Seguridad 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-lock-gold" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="45%" stop-color="#FACC15" />
          <stop offset="85%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#713F12" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="38" ry="8" fill="#451A03" opacity="0.35" />
      <!-- Shackle Metallic Arch -->
      <path d="M40 50 V34 C40 22 48 14 60 14 C72 14 80 22 80 34 V50" stroke="#94A3B8" stroke-width="10" stroke-linecap="round" fill="none" />
      <path d="M40 50 V34 C40 22 48 14 60 14 C72 14 80 22 80 34 V50" stroke="#F1F5F9" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8" />
      <!-- Padlock Solid Body -->
      <rect x="28" y="46" width="64" height="54" rx="14" fill="url(#threed-lock-gold)" stroke="#854D0E" stroke-width="2" />
      <!-- Keyhole -->
      <circle cx="60" cy="68" r="6" fill="#451A03" />
      <polygon points="57,68 63,68 65,82 55,82" fill="#451A03" />
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'candado', 'seguridad', 'bloqueo', 'privacidad', 'password', 'proteccion', 'lock']
  },
  {
    id: 'threed-shield-security-emblem',
    name: 'Escudo de Protección 3D',
    category: 'Elementos 3D',
    subCategory: 'Tech & Espacio 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="50%" stop-color="#2563EB" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="112" rx="40" ry="7" fill="#172554" opacity="0.35" />
      <!-- 3D Outer Rim -->
      <path d="M60 14 L96 28 C96 68 84 94 60 106 C36 94 24 68 24 28 Z" fill="#1E3A8A" />
      <!-- Shield Main Face -->
      <path d="M60 18 L90 30 C90 64 80 88 60 98 C40 88 30 64 30 30 Z" fill="url(#threed-shield-grad)" />
      <!-- White Protection Checkmark -->
      <path d="M44 54 L54 66 L76 44" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    `),
    defaultFill: '#2563EB',
    tags: ['3d', 'escudo', 'seguridad', 'proteccion', 'garantia', 'verificado', 'defensa', 'seguro']
  },

  // =================================================================
  // 4. SOCIAL & REACCIONES 3D (10 elements)
  // =================================================================
  {
    id: 'threed-heart-glossy-red',
    name: 'Corazón Inflable Glossy 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-heart-grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#FDA4AF" />
          <stop offset="35%" stop-color="#F43F5E" />
          <stop offset="75%" stop-color="#BE123C" />
          <stop offset="100%" stop-color="#881337" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#4C0519" opacity="0.35" />
      <!-- Heart Volumetric Body -->
      <path d="M60 36 C48 16 20 22 20 48 C20 74 52 94 60 102 C68 94 100 74 100 48 C100 22 72 16 60 36 Z" fill="url(#threed-heart-grad)" />
      <!-- Specular Gloss on Left Lobe -->
      <ellipse cx="36" cy="38" rx="10" ry="6" fill="#FFFFFF" opacity="0.75" transform="rotate(-30 36 38)" />
      <!-- Small Sparkle on Right Lobe -->
      <circle cx="82" cy="42" r="3.5" fill="#FFFFFF" opacity="0.6" />
    `),
    defaultFill: '#E11D48',
    tags: ['3d', 'corazon', 'amor', 'love', 'like', 'rojo', 'reaccion', 'san valentin', 'puffy']
  },
  {
    id: 'threed-thumbs-up-like',
    name: 'Pulgar Arriba Like 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-thumb-skin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047" />
          <stop offset="60%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#A16207" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="44" ry="8" fill="#451A03" opacity="0.3" />
      <!-- Sleeve / Cuff -->
      <rect x="18" y="66" width="22" height="32" rx="8" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2" />
      <!-- Fist Body -->
      <rect x="36" y="58" width="46" height="40" rx="12" fill="url(#threed-thumb-skin)" />
      <!-- Thumb Up -->
      <path d="M42 62 C40 40 44 20 54 18 C64 16 66 30 64 54 Z" fill="url(#threed-thumb-skin)" />
      <!-- Folded Fingers Lines -->
      <path d="M82 66 H60 M84 76 H60 M82 86 H60" stroke="#713F12" stroke-width="2" stroke-linecap="round" />
      <!-- Specular Glow on Thumb -->
      <ellipse cx="54" cy="30" rx="4" ry="8" fill="#FFFFFF" opacity="0.6" />
    `),
    defaultFill: '#3B82F6',
    tags: ['3d', 'like', 'pulgar', 'aprobado', 'bien', 'social', 'mano', 'positivo', 'reaccion']
  },
  {
    id: 'threed-bell-notification-ring',
    name: 'Campana Notificación 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-bell-gold" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="40%" stop-color="#FACC15" />
          <stop offset="80%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#854D0E" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="40" ry="8" fill="#451A03" opacity="0.35" />
      <!-- Clapper Ball at bottom -->
      <circle cx="60" cy="94" r="8" fill="#854D0E" />
      <!-- Top Handle Ring -->
      <circle cx="60" cy="18" r="8" stroke="#CA8A04" stroke-width="4" fill="none" />
      <!-- Bell Body -->
      <path d="M60 22 C44 22 34 38 34 64 C34 76 22 84 22 88 H98 C98 84 86 76 86 64 C86 38 76 22 60 22 Z" fill="url(#threed-bell-gold)" />
      <!-- Red Badge Alert Dot -->
      <circle cx="86" cy="32" r="10" fill="#EF4444" stroke="#FFFFFF" stroke-width="2.5" />
      <!-- Glint -->
      <path d="M44 40 C48 30 54 28 64 28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8" />
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'campana', 'notificacion', 'alerta', 'aviso', 'mensaje', 'social', 'recordatorio']
  },
  {
    id: 'threed-chat-speech-bubble',
    name: 'Bocadillo de Chat 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-chat-cyan" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#BAE6FD" />
          <stop offset="40%" stop-color="#38BDF8" />
          <stop offset="85%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#0369A1" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="44" ry="8" fill="#0C4A6E" opacity="0.35" />
      <!-- Bubble Body with Tail -->
      <path d="M60 20 C32 20 18 34 18 56 C18 70 26 80 40 86 L32 102 L52 92 C55 92 57 92 60 92 C88 92 102 78 102 56 C102 34 88 20 60 20 Z" fill="url(#threed-chat-cyan)" />
      <!-- 3 Conversation Dots -->
      <circle cx="44" cy="56" r="5" fill="#FFFFFF" />
      <circle cx="60" cy="56" r="5" fill="#FFFFFF" />
      <circle cx="76" cy="56" r="5" fill="#FFFFFF" />
      <!-- Specular Curve -->
      <ellipse cx="46" cy="34" rx="14" ry="6" fill="#FFFFFF" opacity="0.5" transform="rotate(-15 46 34)" />
    `),
    defaultFill: '#0284C7',
    tags: ['3d', 'chat', 'mensaje', 'comentario', 'conversacion', 'hablar', 'bocadillo', 'dialogo']
  },
  {
    id: 'threed-fire-flame-neon',
    name: 'Fuego Volumétrico 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-fire-outer" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#DC2626" />
          <stop offset="50%" stop-color="#EA580C" />
          <stop offset="100%" stop-color="#F59E0B" />
        </linearGradient>
        <linearGradient id="threed-fire-inner" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#FEF08A" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="38" ry="8" fill="#451A03" opacity="0.35" />
      <!-- Outer Flame -->
      <path d="M60 12 C74 34 86 44 86 66 C86 90 74 104 60 104 C46 104 34 90 34 66 C34 48 48 38 46 28 C54 36 54 22 60 12 Z" fill="url(#threed-fire-outer)" />
      <!-- Inner Glowing Core -->
      <path d="M60 48 C68 60 74 68 74 78 C74 92 68 98 60 98 C52 98 46 92 46 78 C46 68 54 62 60 48 Z" fill="url(#threed-fire-inner)" />
    `),
    defaultFill: '#EA580C',
    tags: ['3d', 'fuego', 'llama', 'trending', 'popular', 'caliente', 'hot', 'viral']
  },
  {
    id: 'threed-target-bullseye-arrow',
    name: 'Diana con Flecha 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-target-red" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="60%" stop-color="#DC2626" />
          <stop offset="100%" stop-color="#991B1B" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#450A0A" opacity="0.35" />
      <!-- Target Outer Red Ring -->
      <circle cx="60" cy="58" r="42" fill="url(#threed-target-red)" />
      <!-- Target White Ring -->
      <circle cx="60" cy="58" r="30" fill="#F8FAFC" />
      <!-- Target Inner Red Ring -->
      <circle cx="60" cy="58" r="18" fill="url(#threed-target-red)" />
      <!-- Bullseye Center Yellow -->
      <circle cx="60" cy="58" r="8" fill="#FACC15" />
      <!-- Piercing Arrow -->
      <line x1="88" y1="24" x2="62" y2="56" stroke="#475569" stroke-width="4" stroke-linecap="round" />
      <polygon points="86,16 98,22 92,34" fill="#EF4444" />
    `),
    defaultFill: '#DC2626',
    tags: ['3d', 'diana', 'objetivo', 'flecha', 'meta', 'acierto', 'exito', 'estrategia']
  },
  {
    id: 'threed-location-pin-map',
    name: 'Pin de Ubicación 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-pin-grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="45%" stop-color="#EF4444" />
          <stop offset="85%" stop-color="#B91C1C" />
          <stop offset="100%" stop-color="#7F1D1D" />
        </radialGradient>
      </defs>
      <!-- Shadow Point -->
      <ellipse cx="60" cy="112" rx="20" ry="6" fill="#450A0A" opacity="0.4" />
      <!-- Pin Drop Body -->
      <path d="M60 14 C40 14 24 30 24 50 C24 74 60 108 60 108 C60 108 96 74 96 50 C96 30 80 14 60 14 Z" fill="url(#threed-pin-grad)" />
      <!-- Inner Cutout Circle -->
      <circle cx="60" cy="46" r="14" fill="#FFFFFF" />
      <!-- Gloss Highlight -->
      <ellipse cx="46" cy="30" rx="8" ry="4" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 46 30)" />
    `),
    defaultFill: '#EF4444',
    tags: ['3d', 'pin', 'ubicacion', 'mapa', 'gps', 'lugar', 'viaje', 'direccion', 'destino']
  },
  {
    id: 'threed-hourglass-time-flowing',
    name: 'Reloj de Arena 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="36" ry="7" fill="#1E293B" opacity="0.35" />
      <!-- Wooden Top & Bottom Caps -->
      <rect x="28" y="14" width="64" height="8" rx="3" fill="#B45309" stroke="#78350F" stroke-width="1.5" />
      <rect x="28" y="98" width="64" height="8" rx="3" fill="#B45309" stroke="#78350F" stroke-width="1.5" />
      <!-- Glass Bulbs -->
      <path d="M34 22 C34 50 56 56 56 60 C56 64 34 70 34 98 H86 C86 70 64 64 64 60 C64 56 86 50 86 22 Z" fill="#BAE6FD" opacity="0.4" stroke="#38BDF8" stroke-width="2" />
      <!-- Golden Sand Top Bulb -->
      <path d="M42 34 C42 46 54 52 60 56 C66 52 78 46 78 34 Z" fill="#FACC15" />
      <!-- Falling Stream -->
      <line x1="60" y1="56" x2="60" y2="86" stroke="#FACC15" stroke-width="2" stroke-linecap="round" />
      <!-- Accumulated Sand Bottom -->
      <path d="M40 96 C44 86 76 86 80 96 Z" fill="#FACC15" />
    `),
    defaultFill: '#FACC15',
    tags: ['3d', 'reloj', 'arena', 'tiempo', 'espera', 'cuenta atras', 'hora', 'minutos']
  },
  {
    id: 'threed-emoji-happy-smile',
    name: 'Emoji Sonrisa Glossy 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-emoji-face" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="45%" stop-color="#FACC15" />
          <stop offset="85%" stop-color="#EAB308" />
          <stop offset="100%" stop-color="#854D0E" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#451A03" opacity="0.35" />
      <!-- Sphere Face -->
      <circle cx="60" cy="56" r="44" fill="url(#threed-emoji-face)" />
      <!-- Happy Arc Eyes -->
      <path d="M40 48 C42 42 50 42 52 48" stroke="#713F12" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <path d="M68 48 C70 42 78 42 80 48" stroke="#713F12" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <!-- Big Open Smile -->
      <path d="M38 64 C42 84 78 84 82 64 Z" fill="#713F12" />
      <path d="M48 76 C54 70 66 70 72 76 Z" fill="#F43F5E" />
      <!-- Specular Highlight -->
      <ellipse cx="46" cy="34" rx="12" ry="6" fill="#FFFFFF" opacity="0.65" transform="rotate(-25 46 34)" />
    `),
    defaultFill: '#FACC15',
    tags: ['3d', 'emoji', 'sonrisa', 'feliz', 'cara', 'alegria', 'reaccion', 'divertido']
  },
  {
    id: 'threed-award-ribbon-rosette',
    name: 'Escarapela de Premio 3D',
    category: 'Elementos 3D',
    subCategory: 'Social & Reacciones 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-rosette-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="112" rx="36" ry="7" fill="#1E3A8A" opacity="0.3" />
      <!-- Ribbon Tails -->
      <polygon points="46,74 34,106 48,100 58,106 52,74" fill="#1E40AF" />
      <polygon points="74,74 62,106 72,100 86,106 74,74" fill="#1D4ED8" />
      <!-- Rosette Pleated Star -->
      <circle cx="60" cy="50" r="36" fill="url(#threed-rosette-ribbon)" />
      <!-- Inner Golden Medal -->
      <circle cx="60" cy="50" r="22" fill="#FACC15" stroke="#CA8A04" stroke-width="2" />
      <!-- Number 1 -->
      <text x="60" y="58" font-family="'Arial Black', sans-serif" font-size="24" font-weight="900" fill="#713F12" text-anchor="middle">1</text>
    `),
    defaultFill: '#3B82F6',
    tags: ['3d', 'premio', 'medalla', 'escarapela', 'ganador', 'numero 1', 'calidad', 'certificado']
  },

  // =================================================================
  // 5. OFICINA & ÉXITO 3D (10 elements)
  // =================================================================
  {
    id: 'threed-trophy-gold-winner',
    name: 'Trofeo Ganador Dorado 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-trophy-gold" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="40%" stop-color="#FACC15" />
          <stop offset="85%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#713F12" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="112" rx="42" ry="7" fill="#451A03" opacity="0.35" />
      <!-- Pedestal Base -->
      <rect x="36" y="94" width="48" height="14" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1.5" />
      <rect x="42" y="86" width="36" height="8" rx="2" fill="#334155" />
      <!-- Trophy Stem -->
      <rect x="54" y="68" width="12" height="18" rx="3" fill="#CA8A04" />
      <!-- Trophy Cup Body -->
      <path d="M34 22 H86 V48 C86 64 74 72 60 72 C46 72 34 64 34 48 Z" fill="url(#threed-trophy-gold)" />
      <!-- Left & Right Handles -->
      <path d="M34 30 C18 30 18 52 34 52" stroke="#CA8A04" stroke-width="6" stroke-linecap="round" fill="none" />
      <path d="M86 30 C102 30 102 52 86 52" stroke="#CA8A04" stroke-width="6" stroke-linecap="round" fill="none" />
      <!-- Star on Cup -->
      <polygon points="60,34 63,42 71,42 65,47 67,55 60,50 53,55 55,47 49,42 57,42" fill="#FFFFFF" opacity="0.9" />
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'trofeo', 'copa', 'ganador', 'campeon', 'exito', 'premio', 'victoria', 'oro']
  },
  {
    id: 'threed-megaphone-bullhorn',
    name: 'Megáfono / Altavoz 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-mega-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F87171" />
          <stop offset="60%" stop-color="#EF4444" />
          <stop offset="100%" stop-color="#991B1B" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="44" ry="8" fill="#450A0A" opacity="0.3" />
      <!-- Handle Grip -->
      <rect x="36" y="68" width="12" height="30" rx="6" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2" transform="rotate(-15 42 83)" />
      <!-- Megaphone Cone -->
      <polygon points="26,44 76,24 84,86 26,66" fill="url(#threed-mega-body)" />
      <!-- Big Front Rim -->
      <ellipse cx="80" cy="55" rx="10" ry="32" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="3" />
      <!-- Sound Wave Arcs -->
      <path d="M96 38 A20 20 0 0 1 96 72" stroke="#38BDF8" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M104 28 A32 32 0 0 1 104 82" stroke="#38BDF8" stroke-width="3.5" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#EF4444',
    tags: ['3d', 'megafono', 'altavoz', 'anuncio', 'marketing', 'promo', 'sonido', 'voz']
  },
  {
    id: 'threed-briefcase-executive',
    name: 'Maletín Ejecutivo 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-briefcase-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#78350F" />
          <stop offset="100%" stop-color="#451A03" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="44" ry="8" fill="#451A03" opacity="0.35" />
      <!-- Handle -->
      <path d="M46 36 V22 C46 16 74 16 74 22 V36" stroke="#CA8A04" stroke-width="5" stroke-linecap="round" fill="none" />
      <!-- Briefcase Body -->
      <rect x="18" y="36" width="84" height="64" rx="12" fill="url(#threed-briefcase-body)" stroke="#92400E" stroke-width="2" />
      <!-- Central Metallic Lock & Latches -->
      <rect x="52" y="36" width="16" height="14" rx="3" fill="#FACC15" stroke="#CA8A04" stroke-width="1.5" />
      <rect x="28" y="44" width="8" height="12" rx="2" fill="#CA8A04" />
      <rect x="84" y="44" width="8" height="12" rx="2" fill="#CA8A04" />
    `),
    defaultFill: '#78350F',
    tags: ['3d', 'maletin', 'ejecutivo', 'negocios', 'trabajo', 'oficina', 'profesional', 'empleo']
  },
  {
    id: 'threed-folder-documents',
    name: 'Carpeta de Archivos 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-folder-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#2563EB" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="46" ry="8" fill="#1E3A8A" opacity="0.3" />
      <!-- Folder Back & Tab -->
      <path d="M18 36 C18 30 24 26 30 26 H48 L56 34 H94 C100 34 104 38 104 44 V88 H18 Z" fill="#1D4ED8" />
      <!-- White Paper Document peaking out -->
      <rect x="28" y="22" width="64" height="40" rx="4" fill="#F8FAFC" />
      <line x1="36" y1="32" x2="68" y2="32" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" />
      <line x1="36" y1="40" x2="78" y2="40" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round" />
      <!-- Folder Front Flap -->
      <path d="M14 50 H106 L98 96 H22 Z" fill="url(#threed-folder-grad)" />
    `),
    defaultFill: '#2563EB',
    tags: ['3d', 'carpeta', 'archivos', 'documentos', 'organizacion', 'oficina', 'archivar', 'folder']
  },
  {
    id: 'threed-calendar-agenda',
    name: 'Calendario y Cita 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#0F172A" opacity="0.35" />
      <!-- Spiral Wire Rings at Top -->
      <rect x="36" y="16" width="6" height="14" rx="3" fill="#64748B" />
      <rect x="57" y="16" width="6" height="14" rx="3" fill="#64748B" />
      <rect x="78" y="16" width="6" height="14" rx="3" fill="#64748B" />
      <!-- Calendar Back Body -->
      <rect x="22" y="24" width="76" height="78" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" />
      <!-- Red Header Strip -->
      <path d="M22 36 C22 30 26 24 32 24 H88 C94 24 98 30 98 36 V42 H22 Z" fill="#EF4444" />
      <!-- Day Number 28 -->
      <text x="60" y="80" font-family="'Arial Black', sans-serif" font-size="36" font-weight="900" fill="#0F172A" text-anchor="middle">28</text>
    `),
    defaultFill: '#EF4444',
    tags: ['3d', 'calendario', 'agenda', 'evento', 'fecha', 'dia', 'reunion', 'tiempo']
  },
  {
    id: 'threed-gift-box-surprise',
    name: 'Caja de Regalo 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-gift-box" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C084FC" />
          <stop offset="100%" stop-color="#7E22CE" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="42" ry="8" fill="#3B0764" opacity="0.35" />
      <!-- Box Body -->
      <rect x="24" y="44" width="72" height="60" rx="8" fill="url(#threed-gift-box)" />
      <!-- Box Lid -->
      <rect x="18" y="36" width="84" height="16" rx="6" fill="#A855F7" />
      <!-- Yellow Ribbon Vertical & Horizontal -->
      <rect x="54" y="36" width="12" height="68" fill="#FACC15" />
      <!-- Bow Ribbon Loops on top -->
      <path d="M60 36 C42 16 32 24 46 36 Z" fill="#FACC15" />
      <path d="M60 36 C78 16 88 24 74 36 Z" fill="#FACC15" />
      <circle cx="60" cy="36" r="5" fill="#EAB308" />
    `),
    defaultFill: '#A855F7',
    tags: ['3d', 'regalo', 'sorpresa', 'caja', 'navidad', 'cumpleanos', 'fiesta', 'premio']
  },
  {
    id: 'threed-paint-palette-art',
    name: 'Paleta de Arte Creativa 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-wood-palette" cx="40%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#FDE68A" />
          <stop offset="50%" stop-color="#D97706" />
          <stop offset="100%" stop-color="#92400E" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="110" rx="44" ry="8" fill="#451A03" opacity="0.3" />
      <!-- Wooden Palette Oval with Thumbhole -->
      <path d="M60 22 C32 22 16 38 18 64 C20 86 42 100 68 98 C90 96 104 84 102 58 C100 36 82 22 60 22 Z M78 72 C78 78 72 82 66 82 C60 82 56 78 56 72 C56 66 60 62 66 62 C72 62 78 66 78 72 Z" fill="url(#threed-wood-palette)" fill-rule="evenodd" />
      <!-- Paint Dollops -->
      <circle cx="34" cy="44" r="7" fill="#EF4444" />
      <circle cx="50" cy="34" r="7" fill="#F59E0B" />
      <circle cx="70" cy="34" r="7" fill="#10B981" />
      <circle cx="86" cy="46" r="7" fill="#3B82F6" />
      <circle cx="40" cy="68" r="6" fill="#8B5CF6" />
    `),
    defaultFill: '#D97706',
    tags: ['3d', 'paleta', 'arte', 'pintura', 'diseno', 'creatividad', 'colores', 'artista']
  },
  {
    id: 'threed-medal-first-place',
    name: 'Medalla de Oro Honorífica 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <radialGradient id="threed-medal-face" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="40%" stop-color="#FACC15" />
          <stop offset="85%" stop-color="#CA8A04" />
          <stop offset="100%" stop-color="#713F12" />
        </radialGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="60" cy="112" rx="38" ry="7" fill="#451A03" opacity="0.35" />
      <!-- V-shaped Ribbon (Red & Blue) -->
      <polygon points="60,60 30,12 44,12 60,46" fill="#EF4444" />
      <polygon points="60,60 90,12 76,12 60,46" fill="#3B82F6" />
      <!-- Gold Medal Disc -->
      <circle cx="60" cy="68" r="32" fill="url(#threed-medal-face)" stroke="#854D0E" stroke-width="2" />
      <!-- Laurel Wreath & Star -->
      <circle cx="60" cy="68" r="24" stroke="#FEF08A" stroke-width="2" fill="none" opacity="0.8" />
      <polygon points="60,56 63,64 71,64 65,69 67,77 60,72 53,77 55,69 49,64 57,64" fill="#FFFFFF" />
    `),
    defaultFill: '#EAB308',
    tags: ['3d', 'medalla', 'oro', 'honor', 'premio', 'ganador', 'campeon', 'exito', 'reconocimiento']
  },
  {
    id: 'threed-coffee-cup-mug',
    name: 'Taza de Café Colectiva 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-mug-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="40%" stop-color="#FFFFFF" />
          <stop offset="80%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="56" cy="108" rx="38" ry="8" fill="#1E293B" opacity="0.3" />
      <!-- Handle -->
      <path d="M78 50 C96 50 96 82 78 82" stroke="#E2E8F0" stroke-width="8" stroke-linecap="round" fill="none" />
      <!-- Mug Body -->
      <path d="M26 44 H82 V86 C82 98 72 104 54 104 C36 104 26 98 26 86 Z" fill="url(#threed-mug-body)" />
      <!-- Rim & Hot Coffee Liquid inside -->
      <ellipse cx="54" cy="44" rx="28" ry="10" fill="#E2E8F0" />
      <ellipse cx="54" cy="44" rx="24" ry="7" fill="#78350F" />
      <!-- Steam vapor curves -->
      <path d="M44 32 Q 40 22 46 16" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6" />
      <path d="M56 32 Q 60 22 54 14" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6" />
      <path d="M66 32 Q 64 24 68 18" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6" />
    `),
    defaultFill: '#78350F',
    tags: ['3d', 'cafe', 'taza', 'mug', 'desayuno', 'oficina', 'pausa', 'caliente']
  },
  {
    id: 'threed-megaphone-startup-flag',
    name: 'Banderín de Victoria 3D',
    category: 'Elementos 3D',
    subCategory: 'Oficina & Éxito 3D',
    ...createThreeDSvg(`
      <defs>
        <linearGradient id="threed-flag-cloth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F43F5E" />
          <stop offset="100%" stop-color="#BE123C" />
        </linearGradient>
      </defs>
      <!-- Base Shadow -->
      <ellipse cx="60" cy="112" rx="36" ry="6" fill="#1E293B" opacity="0.35" />
      <!-- Metal Base Stand -->
      <rect x="22" y="104" width="24" height="6" rx="2" fill="#64748B" />
      <!-- Mast / Pole -->
      <line x1="34" y1="18" x2="34" y2="104" stroke="#94A3B8" stroke-width="5" stroke-linecap="round" />
      <circle cx="34" cy="16" r="4.5" fill="#FACC15" />
      <!-- Volumetric Waving Flag -->
      <path d="M36 22 C52 16 68 30 88 22 C96 26 94 48 88 56 C68 64 52 50 36 58 Z" fill="url(#threed-flag-cloth)" stroke="#881337" stroke-width="2" />
      <polygon points="56,34 58,40 64,40 59,44 61,50 56,46 51,50 53,44 48,40 54,40" fill="#FFFFFF" opacity="0.9" />
    `),
    defaultFill: '#F43F5E',
    tags: ['3d', 'bandera', 'victoria', 'meta', 'cumbre', 'exito', 'conquista', 'llegada']
  }
];
