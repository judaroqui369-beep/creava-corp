// 50 High-Quality Comic / Pop-Art Vector Stickers for Graphic Elements
// Vibrant comic book aesthetic: Halftones, 3D extruded lettering, thick bold inking strokes,
// onomatopoeias, speech bubbles, superhero badges, dynamic speed effects, and expressive pop symbols.

export interface ComicStickerItem {
  id: string;
  name: string;
  category: 'Stickers Cómic';
  subCategory: 
    | 'Onomatopeyas & Explosiones'
    | 'Bocadillos & Globos de Texto'
    | 'Héroes & Villanos Cómic'
    | 'Efectos & Destellos Cómic'
    | 'Expresiones & Símbolos Pop';
  svgContent: string;
  dataUri: string;
  viewBox: string;
  defaultFill: string;
  tags: string[];
}

function createComicSvg(svgInner: string, viewBox = '0 0 120 120'): { svgContent: string; dataUri: string; viewBox: string } {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%" fill="none">${svgInner}</svg>`;
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
  return { svgContent, dataUri, viewBox };
}

export const COMIC_STICKERS: ComicStickerItem[] = [
  // =================================================================
  // 1. ONOMATOPEYAS & EXPLOSIONES (10 stickers)
  // =================================================================
  {
    id: 'comic-onomatopoeia-pow',
    name: '¡POW! Explosión Cómic',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Outer red starburst burst -->
      <polygon points="60,6 74,28 100,16 90,42 116,48 94,70 114,92 86,92 90,118 66,102 52,118 42,96 16,110 26,84 6,76 26,56 6,34 32,38 34,10 52,26" fill="#EF4444" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Inner bright yellow burst -->
      <polygon points="60,18 70,36 90,26 82,46 102,52 86,68 100,84 78,84 82,104 64,92 54,104 46,88 26,98 34,78 18,72 34,58 20,42 40,44 42,22 54,34" fill="#FACC15" stroke="#18181B" stroke-width="3" stroke-linejoin="round" />
      <!-- Halftone dots dots accent -->
      <circle cx="36" cy="62" r="2.5" fill="#EF4444" opacity="0.8" />
      <circle cx="44" cy="72" r="2" fill="#EF4444" opacity="0.8" />
      <circle cx="76" cy="38" r="2" fill="#EF4444" opacity="0.8" />
      <circle cx="84" cy="46" r="2.5" fill="#EF4444" opacity="0.8" />
      <!-- 3D Text Extrusion POW! -->
      <g>
        <!-- Shadow / Extrusion -->
        <text x="63" y="73" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic" letter-spacing="1">POW!</text>
        <!-- Main Text White/Yellow -->
        <text x="60" y="70" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" text-anchor="middle" font-style="italic" letter-spacing="1">POW!</text>
      </g>
      <!-- Small action sparkles -->
      <path d="M50 28 L52 34 L58 36 L52 38 L50 44 L48 38 L42 36 L48 34 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
    `),
    defaultFill: '#FACC15',
    tags: ['comic', 'pow', 'onomatopeya', 'golpe', 'explosion', 'accion', 'superheroe', 'pop']
  },
  {
    id: 'comic-onomatopoeia-boom',
    name: '¡BOOM! Detonación Dinámica',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Explosion Cloud Layer -->
      <path d="M22 62 C14 50 24 30 40 32 C44 18 64 16 76 26 C88 18 106 28 104 44 C116 56 110 78 98 84 C104 98 86 112 70 106 C58 116 38 110 32 98 C18 98 12 76 22 62 Z" fill="#F97316" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Spiky Flash Inside -->
      <polygon points="60,24 72,42 94,36 84,54 104,64 84,76 96,94 76,88 68,106 54,92 40,104 42,84 22,86 34,70 18,58 38,50 32,32 50,42" fill="#FDE047" stroke="#18181B" stroke-width="3" stroke-linejoin="round" />
      <!-- BOOM! 3D letters -->
      <text x="63" y="74" font-family="'Impact', 'Arial Black', sans-serif" font-size="30" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">BOOM!</text>
      <text x="60" y="70" font-family="'Impact', 'Arial Black', sans-serif" font-size="30" font-weight="900" fill="#EF4444" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" text-anchor="middle" font-style="italic">BOOM!</text>
      <!-- Action speed strokes -->
      <line x1="12" y1="28" x2="24" y2="38" stroke="#18181B" stroke-width="3" stroke-linecap="round" />
      <line x1="98" y1="18" x2="88" y2="28" stroke="#18181B" stroke-width="3" stroke-linecap="round" />
      <line x1="108" y1="96" x2="98" y2="88" stroke="#18181B" stroke-width="3" stroke-linecap="round" />
    `),
    defaultFill: '#F97316',
    tags: ['boom', 'detonacion', 'bomba', 'fuego', 'comic', 'explosion', 'popart']
  },
  {
    id: 'comic-onomatopoeia-bang',
    name: '¡BANG! Disparo de Acción',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Jagged Blast -->
      <polygon points="60,10 74,32 104,20 88,48 114,60 88,72 108,98 78,92 74,116 54,96 38,114 36,88 12,98 26,74 8,56 32,48 18,24 46,34" fill="#3B82F6" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <polygon points="60,22 70,38 92,30 80,50 100,58 80,68 94,86 72,82 68,100 54,86 42,98 40,78 22,86 32,68 18,54 36,48 26,30 48,38" fill="#FEF08A" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round" />
      <!-- BANG! typography -->
      <text x="63" y="73" font-family="'Impact', 'Arial Black', sans-serif" font-size="31" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">BANG!</text>
      <text x="60" y="69" font-family="'Impact', 'Arial Black', sans-serif" font-size="31" font-weight="900" fill="#EF4444" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" text-anchor="middle" font-style="italic">BANG!</text>
      <circle cx="86" cy="38" r="2.5" fill="#EF4444" />
      <circle cx="34" cy="74" r="2.5" fill="#EF4444" />
    `),
    defaultFill: '#EF4444',
    tags: ['bang', 'disparo', 'accion', 'comic', 'onomatopeya', 'sonido']
  },
  {
    id: 'comic-onomatopoeia-zap',
    name: '¡ZAP! Rayo Eléctrico',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Electric Flash Cloud -->
      <path d="M28 50 Q16 28 38 24 Q50 8 72 20 Q92 12 96 34 Q114 46 102 70 Q112 94 88 98 Q72 114 50 102 Q28 112 22 90 Q8 70 28 50 Z" fill="#A855F7" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Sharp lightning zig-zag -->
      <polygon points="68,14 42,56 62,56 46,104 84,50 64,50 78,14" fill="#FACC15" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" />
      <!-- ZAP! Text -->
      <text x="62" y="75" font-family="'Impact', 'Arial Black', sans-serif" font-size="32" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">ZAP!</text>
      <text x="59" y="71" font-family="'Impact', 'Arial Black', sans-serif" font-size="32" font-weight="900" fill="#00F0FF" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" text-anchor="middle" font-style="italic">ZAP!</text>
    `),
    defaultFill: '#A855F7',
    tags: ['zap', 'rayo', 'electricidad', 'energia', 'trueno', 'comic', 'poder']
  },
  {
    id: 'comic-onomatopoeia-bam',
    name: '¡BAM! Golpe Directo',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Impact Oval with Spokes -->
      <ellipse cx="60" cy="60" rx="46" ry="38" fill="#EC4899" stroke="#18181B" stroke-width="4" transform="rotate(-8 60 60)" />
      <polygon points="60,14 74,38 98,28 88,52 110,64 88,78 98,102 74,92 64,112 50,92 32,106 36,80 14,78 28,58 12,42 36,40 34,18 52,32" fill="#FDE047" stroke="#18181B" stroke-width="3" stroke-linejoin="round" />
      <!-- BAM! Text -->
      <text x="63" y="72" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">BAM!</text>
      <text x="60" y="68" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" text-anchor="middle" font-style="italic">BAM!</text>
    `),
    defaultFill: '#EC4899',
    tags: ['bam', 'puñetazo', 'golpe', 'comic', 'lucha', 'pelea']
  },
  {
    id: 'comic-onomatopoeia-crash',
    name: '¡CRASH! Ruptura de Impacto',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Shattered Shards -->
      <polygon points="56,12 70,34 94,18 84,46 112,50 86,72 108,98 80,90 76,114 54,96 36,112 36,86 10,92 26,68 8,48 34,44 22,20 48,32" fill="#06B6D4" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <polygon points="58,24 68,40 88,28 78,50 100,54 78,70 96,90 74,84 70,102 54,88 40,100 40,80 20,84 32,64 18,48 38,44 28,26 48,36" fill="#FACC15" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round" />
      <!-- CRASH! Letters -->
      <text x="62" y="71" font-family="'Impact', 'Arial Black', sans-serif" font-size="25" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">CRASH!</text>
      <text x="59" y="67" font-family="'Impact', 'Arial Black', sans-serif" font-size="25" font-weight="900" fill="#DC2626" stroke="#18181B" stroke-width="3" stroke-linejoin="round" text-anchor="middle" font-style="italic">CRASH!</text>
    `),
    defaultFill: '#06B6D4',
    tags: ['crash', 'ruptura', 'choque', 'cristal', 'impacto', 'comic']
  },
  {
    id: 'comic-onomatopoeia-wow',
    name: '¡WOW! Sorpresa Pop Art',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Pop art cloud star -->
      <ellipse cx="60" cy="60" rx="48" ry="38" fill="#FACC15" stroke="#18181B" stroke-width="4" />
      <ellipse cx="60" cy="60" rx="42" ry="32" fill="#FEF08A" stroke="#18181B" stroke-width="2" stroke-dasharray="3,3" />
      <!-- Comic Ben-Day Halftone Dots -->
      <g fill="#F59E0B" opacity="0.6">
        <circle cx="32" cy="48" r="2" /><circle cx="40" cy="48" r="2" /><circle cx="48" cy="48" r="2" />
        <circle cx="36" cy="56" r="2" /><circle cx="44" cy="56" r="2" /><circle cx="76" cy="48" r="2" />
        <circle cx="84" cy="48" r="2" /><circle cx="80" cy="56" r="2" /><circle cx="88" cy="56" r="2" />
      </g>
      <!-- WOW! 3D -->
      <text x="63" y="71" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">WOW!</text>
      <text x="60" y="67" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#EF4444" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" text-anchor="middle" font-style="italic">WOW!</text>
      <!-- Sparkle stars -->
      <polygon points="26,30 29,35 34,36 30,39 31,44 26,41 21,44 22,39 18,36 23,35" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
      <polygon points="94,74 97,79 102,80 98,83 99,88 94,85 89,88 90,83 86,80 91,79" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
    `),
    defaultFill: '#FACC15',
    tags: ['wow', 'sorpresa', 'popart', 'increible', 'comic', 'emocion']
  },
  {
    id: 'comic-onomatopoeia-smash',
    name: '¡SMASH! Aplastamiento Cómic',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Heavy crack shockwaves -->
      <polygon points="60,8 78,34 110,24 94,52 116,74 88,78 102,108 72,94 60,116 48,94 18,108 32,78 4,74 26,52 10,24 42,34" fill="#10B981" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <polygon points="60,20 74,40 98,32 86,54 104,70 82,74 92,96 70,86 60,102 50,86 28,96 38,74 16,70 34,54 22,32 46,40" fill="#FACC15" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round" />
      <!-- SMASH! Text -->
      <text x="63" y="70" font-family="'Impact', 'Arial Black', sans-serif" font-size="24" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">SMASH!</text>
      <text x="60" y="66" font-family="'Impact', 'Arial Black', sans-serif" font-size="24" font-weight="900" fill="#7C3AED" stroke="#18181B" stroke-width="3" stroke-linejoin="round" text-anchor="middle" font-style="italic">SMASH!</text>
    `),
    defaultFill: '#10B981',
    tags: ['smash', 'fuerza', 'aplastar', 'hulk', 'comic', 'poder']
  },
  {
    id: 'comic-onomatopoeia-oops',
    name: '¡OOPS! Error Cómic',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Wobbly comic speech cloud -->
      <path d="M30 40 Q22 20 45 22 Q60 14 75 24 Q95 18 90 40 Q105 55 92 72 Q98 92 78 86 Q60 98 46 88 Q25 96 28 75 Q12 60 30 40 Z" fill="#F43F5E" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <path d="M34 44 Q28 28 47 30 Q60 22 72 30 Q88 26 84 44 Q96 56 86 70 Q90 84 74 80 Q60 90 48 82 Q32 88 34 72 Q22 60 34 44 Z" fill="#FED7AA" stroke="#18181B" stroke-width="2" stroke-linejoin="round" />
      <!-- OOPS! letters with nervous slant -->
      <text x="62" y="66" font-family="'Impact', 'Arial Black', sans-serif" font-size="27" font-weight="900" fill="#18181B" text-anchor="middle">OOPS!</text>
      <text x="59" y="62" font-family="'Impact', 'Arial Black', sans-serif" font-size="27" font-weight="900" fill="#18181B" stroke="#FFFFFF" stroke-width="2" text-anchor="middle">OOPS!</text>
      <!-- Sweat drop -->
      <path d="M88 32 C88 26 94 20 94 20 C94 20 100 26 100 32 C100 36 96 40 94 40 C92 40 88 36 88 32 Z" fill="#38BDF8" stroke="#18181B" stroke-width="2.5" />
    `),
    defaultFill: '#F43F5E',
    tags: ['oops', 'ups', 'error', 'comic', 'divertido', 'fallo']
  },
  {
    id: 'comic-onomatopoeia-ko',
    name: '¡K.O.! Victoria Cómic',
    category: 'Stickers Cómic',
    subCategory: 'Onomatopeyas & Explosiones',
    ...createComicSvg(`
      <!-- Golden Champion Starburst -->
      <polygon points="60,6 72,28 98,18 90,44 116,52 94,74 112,98 84,96 86,120 62,106 48,120 40,98 14,108 26,82 4,72 26,52 8,30 34,36 34,8 52,24" fill="#FBBF24" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Red inner circle -->
      <circle cx="60" cy="62" r="32" fill="#DC2626" stroke="#18181B" stroke-width="3" />
      <!-- K.O. Giant text -->
      <text x="63" y="73" font-family="'Impact', 'Arial Black', sans-serif" font-size="36" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">K.O.</text>
      <text x="60" y="69" font-family="'Impact', 'Arial Black', sans-serif" font-size="36" font-weight="900" fill="#FFFFFF" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" text-anchor="middle" font-style="italic">K.O.</text>
      <!-- Dazzle stars around -->
      <polygon points="28,24 30,28 34,29 31,32 32,36 28,34 24,36 25,32 22,29 26,28" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
      <polygon points="96,28 98,32 102,33 99,36 100,40 96,38 92,40 93,36 90,33 94,32" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
    `),
    defaultFill: '#FBBF24',
    tags: ['ko', 'knockout', 'victoria', 'boxeo', 'pelea', 'comic', 'ganador']
  },

  // =================================================================
  // 2. BOCADILLOS & GLOBOS DE TEXTO (10 stickers)
  // =================================================================
  {
    id: 'comic-bubble-speech-classic',
    name: 'Bocadillo de Diálogo Clásico',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Shadow -->
      <path d="M22 24 C14 24 10 32 10 44 C10 60 22 72 40 72 L42 86 L56 72 L96 72 C108 72 114 60 114 44 C114 32 108 24 96 24 Z" fill="#18181B" />
      <!-- Main Bubble -->
      <path d="M20 20 C10 20 6 30 6 42 C6 58 18 70 38 70 L40 86 L54 70 L96 70 C108 70 112 58 112 42 C112 30 108 20 96 20 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <!-- Three expressive dots -->
      <circle cx="44" cy="45" r="4.5" fill="#18181B" />
      <circle cx="60" cy="45" r="4.5" fill="#18181B" />
      <circle cx="76" cy="45" r="4.5" fill="#18181B" />
    `),
    defaultFill: '#FFFFFF',
    tags: ['bocadillo', 'dialogo', 'hablar', 'globo', 'texto', 'comic', 'puntos']
  },
  {
    id: 'comic-bubble-shout-spiky',
    name: 'Globo de Grito Explosivo',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Outer Spiky Balloon -->
      <polygon points="60,10 74,26 96,16 92,34 114,38 98,54 116,70 94,76 104,98 80,94 76,116 58,98 38,114 42,92 18,98 26,76 6,70 24,54 8,38 30,34 26,16 48,26" fill="#FEF08A" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <!-- Inner accent halo -->
      <polygon points="60,20 72,32 88,24 84,38 100,42 88,54 102,66 84,70 92,86 74,84 70,98 58,86 44,96 46,80 30,84 36,68 22,64 34,52 22,40 38,36 34,22 50,30" fill="#FFFFFF" stroke="#F59E0B" stroke-width="2" stroke-linejoin="round" />
      <!-- Exclamation Marks -->
      <text x="60" y="68" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#EF4444" stroke="#18181B" stroke-width="2.5" text-anchor="middle" font-style="italic">!!!</text>
    `),
    defaultFill: '#FEF08A',
    tags: ['grito', 'bocadillo', 'alerta', 'exclamacion', 'comic', 'estallido', 'urgente']
  },
  {
    id: 'comic-bubble-thought-cloud',
    name: 'Burbuja de Pensamiento Nube',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Shadow -->
      <path d="M38 28 C30 18 48 10 64 16 C78 8 98 18 96 32 C108 38 108 58 98 68 C100 84 82 92 70 86 C58 96 38 90 34 78 C20 80 14 62 22 50 C14 36 26 24 38 28 Z" fill="#18181B" />
      <!-- Main Cloud -->
      <path d="M36 24 C28 14 46 6 62 12 C76 4 96 14 94 28 C106 34 106 54 96 64 C98 80 80 88 68 82 C56 92 36 86 32 74 C18 76 12 58 20 46 C12 32 24 20 36 24 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <!-- Small thought bubbles leading down -->
      <circle cx="28" cy="94" r="7" fill="#FFFFFF" stroke="#18181B" stroke-width="3.5" />
      <circle cx="20" cy="108" r="4.5" fill="#FFFFFF" stroke="#18181B" stroke-width="3" />
      <!-- Cloud sparkles inside -->
      <circle cx="50" cy="46" r="3.5" fill="#93C5FD" />
      <circle cx="64" cy="40" r="4.5" fill="#93C5FD" />
      <circle cx="78" cy="48" r="3.5" fill="#93C5FD" />
    `),
    defaultFill: '#FFFFFF',
    tags: ['pensamiento', 'nube', 'soñar', 'bocadillo', 'mente', 'idea', 'comic']
  },
  {
    id: 'comic-bubble-electric-surprise',
    name: 'Bocadillo Eléctrico Zigzag',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Electric outline box -->
      <polygon points="16,24 36,18 42,26 64,16 70,26 94,18 104,32 96,44 108,56 94,70 102,82 84,86 78,108 64,88 44,92 38,84 20,90 12,74 22,62 10,48 20,38" fill="#67E8F9" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <polygon points="22,30 38,24 44,32 64,24 70,32 90,26 98,36 90,46 100,56 88,68 94,78 80,80 74,96 64,82 46,84 42,76 26,82 20,70 28,60 18,48 26,40" fill="#FFFFFF" stroke="#0891B2" stroke-width="2" stroke-linejoin="round" />
      <!-- Central Bolt & Question -->
      <text x="60" y="66" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#0E7490" stroke="#18181B" stroke-width="2.5" text-anchor="middle">?!</text>
    `),
    defaultFill: '#67E8F9',
    tags: ['electrico', 'sorpresa', 'rayo', 'bocadillo', 'impacto', 'comic']
  },
  {
    id: 'comic-bubble-whisper-dashed',
    name: 'Bocadillo de Susurro Punteado',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Dashed secret speech bubble -->
      <path d="M22 22 C10 22 8 32 8 44 C8 60 20 72 40 72 L36 90 L56 72 L96 72 C108 72 112 60 112 44 C112 32 108 22 96 22 Z" fill="#F8FAFC" stroke="#18181B" stroke-width="4.5" stroke-dasharray="7,6" stroke-linejoin="round" />
      <!-- Whisper text inside -->
      <text x="60" y="52" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#64748B" text-anchor="middle" letter-spacing="2">SHHH!</text>
    `),
    defaultFill: '#F8FAFC',
    tags: ['susurro', 'secreto', 'shhh', 'silencio', 'bocadillo', 'punteado', 'comic']
  },
  {
    id: 'comic-bubble-double-chat',
    name: 'Bocadillo Doble Conversación',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- First bubble (Left) -->
      <path d="M12 20 C6 20 6 28 6 38 C6 50 14 58 28 58 L24 74 L38 58 L54 58 C64 58 66 50 66 38 C66 28 64 20 54 20 Z" fill="#FEE2E2" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Second bubble (Right overlapping) -->
      <path d="M58 46 C52 46 50 54 50 64 C50 76 60 84 76 84 L90 102 L88 84 L104 84 C114 84 116 76 116 64 C116 54 114 46 104 46 Z" fill="#FEF08A" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Chat symbols -->
      <text x="36" y="44" font-family="'Impact', 'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#DC2626" text-anchor="middle">HI!</text>
      <text x="84" y="70" font-family="'Impact', 'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#18181B" text-anchor="middle">HEY!</text>
    `),
    defaultFill: '#FEF08A',
    tags: ['dialogo', 'chat', 'conversacion', 'doble', 'bocadillo', 'comic']
  },
  {
    id: 'comic-bubble-rage-black',
    name: 'Globo de Furia & Maldición',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Spiky Black Balloon of Anger -->
      <polygon points="60,8 74,26 98,14 92,34 116,42 98,58 114,76 92,80 100,104 76,96 70,118 54,98 34,114 38,92 14,96 22,76 4,68 22,54 8,36 30,34 24,14 48,24" fill="#18181B" stroke="#EF4444" stroke-width="4" stroke-linejoin="round" />
      <!-- Inner Red Spikes -->
      <polygon points="60,20 70,34 88,24 82,40 100,46 86,58 98,72 82,74 88,92 70,86 66,102 54,88 38,100 42,84 24,86 30,70 16,64 30,54 20,40 38,38 34,24 52,32" fill="#DC2626" stroke="#18181B" stroke-width="2" stroke-linejoin="round" />
      <!-- Cursing Symbols @#$! -->
      <text x="60" y="67" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">@#$%!</text>
    `),
    defaultFill: '#18181B',
    tags: ['furia', 'enojo', 'maldicion', 'rabia', 'bocadillo', 'comic', 'negro']
  },
  {
    id: 'comic-bubble-broadcast-radio',
    name: 'Bocadillo de Megafonía / Radio',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Boxy angular speech bubble -->
      <polygon points="18,22 102,22 106,72 70,72 58,102 50,72 14,72" fill="#FDE047" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <!-- Antenna waves above -->
      <path d="M46 14 Q60 6 74 14" stroke="#18181B" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M38 8 Q60 -4 82 8" stroke="#18181B" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Broadcast Text -->
      <text x="60" y="46" font-family="'Impact', 'Arial Black', sans-serif" font-size="16" font-weight="900" fill="#DC2626" text-anchor="middle">ATENCIÓN:</text>
      <text x="60" y="64" font-family="'Impact', 'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#18181B" text-anchor="middle">¡ALERTA!</text>
    `),
    defaultFill: '#FDE047',
    tags: ['radio', 'megafono', 'noticia', 'alerta', 'bocadillo', 'comic', 'aviso']
  },
  {
    id: 'comic-bubble-yes-action',
    name: 'Bocadillo ¡YES! Triunfal',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Dynamic round bubble with tail -->
      <path d="M24 24 C10 24 6 36 6 52 C6 68 18 80 42 80 L38 100 L62 80 L96 80 C110 80 114 68 114 52 C114 36 110 24 96 24 Z" fill="#22C55E" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <!-- YES! 3D -->
      <text x="63" y="62" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">YES!</text>
      <text x="60" y="58" font-family="'Impact', 'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" stroke="#18181B" stroke-width="3" text-anchor="middle" font-style="italic">YES!</text>
      <!-- Sparkle stars -->
      <polygon points="26,34 29,39 34,40 30,43 31,48 26,45 21,48 22,43 18,40 23,39" fill="#FACC15" stroke="#18181B" stroke-width="1.5" />
    `),
    defaultFill: '#22C55E',
    tags: ['yes', 'si', 'triunfo', 'positivo', 'bocadillo', 'comic', 'victoria']
  },
  {
    id: 'comic-bubble-no-denial',
    name: 'Bocadillo ¡NO! Enérgico',
    category: 'Stickers Cómic',
    subCategory: 'Bocadillos & Globos de Texto',
    ...createComicSvg(`
      <!-- Red oval bubble -->
      <path d="M24 24 C10 24 6 36 6 52 C6 68 18 80 42 80 L38 100 L62 80 L96 80 C110 80 114 68 114 52 C114 36 110 24 96 24 Z" fill="#EF4444" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <!-- NO! 3D -->
      <text x="63" y="63" font-family="'Impact', 'Arial Black', sans-serif" font-size="38" font-weight="900" fill="#18181B" text-anchor="middle" font-style="italic">NO!</text>
      <text x="60" y="59" font-family="'Impact', 'Arial Black', sans-serif" font-size="38" font-weight="900" fill="#FFFFFF" stroke="#18181B" stroke-width="3.5" text-anchor="middle" font-style="italic">NO!</text>
      <!-- Lightning slash -->
      <line x1="20" y1="28" x2="30" y2="40" stroke="#FACC15" stroke-width="3" stroke-linecap="round" />
      <line x1="100" y1="28" x2="90" y2="40" stroke="#FACC15" stroke-width="3" stroke-linecap="round" />
    `),
    defaultFill: '#EF4444',
    tags: ['no', 'rechazo', 'prohibido', 'negativo', 'bocadillo', 'comic']
  },

  // =================================================================
  // 3. HÉROES & VILLANOS CÓMIC (10 stickers)
  // =================================================================
  {
    id: 'comic-hero-mask-domino',
    name: 'Antifaz de Héroe Clásico',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Hero Mask with pointed stylish wings -->
      <path d="M12 40 C32 46 44 62 60 52 C76 62 88 46 108 40 C116 52 110 76 96 76 C80 76 68 62 60 62 C52 62 40 76 24 76 C10 76 4 52 12 40 Z" fill="#18181B" stroke="#000000" stroke-width="3.5" stroke-linejoin="round" />
      <!-- Mask Eyes (Slanted White Hero Eyes) -->
      <path d="M26 52 Q40 48 48 58 Q38 64 26 52 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2" />
      <path d="M94 52 Q80 48 72 58 Q82 64 94 52 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2" />
      <!-- Ribbon ties at back -->
      <path d="M14 48 Q4 42 2 54 M106 48 Q116 42 118 54" stroke="#18181B" stroke-width="3" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#18181B',
    tags: ['antifaz', 'mascara', 'heroe', 'superheroe', 'vigilante', 'comic', 'misterio']
  },
  {
    id: 'comic-hero-shield-star',
    name: 'Escudo Heroico con Estrella',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Concentric circular shield rings -->
      <circle cx="60" cy="60" r="48" fill="#EF4444" stroke="#18181B" stroke-width="4.5" />
      <circle cx="60" cy="60" r="38" fill="#F8FAFC" stroke="#18181B" stroke-width="3" />
      <circle cx="60" cy="60" r="28" fill="#EF4444" stroke="#18181B" stroke-width="3" />
      <circle cx="60" cy="60" r="18" fill="#2563EB" stroke="#18181B" stroke-width="3" />
      <!-- Central Silver Star -->
      <polygon points="60,46 63.5,55 73,55 65.5,61 68.5,70 60,65 51.5,70 54.5,61 47,55 56.5,55" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
      <!-- Metallic shine curve -->
      <path d="M26 34 A 42 42 0 0 1 84 24" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6" fill="none" />
    `),
    defaultFill: '#EF4444',
    tags: ['escudo', 'capitan', 'estrella', 'heroe', 'defensa', 'comic', 'patria']
  },
  {
    id: 'comic-hero-flying-cape',
    name: 'Capa Heroica Ondeante',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Gold Cape Clasp -->
      <circle cx="48" cy="22" r="6" fill="#FACC15" stroke="#18181B" stroke-width="3" />
      <circle cx="72" cy="22" r="6" fill="#FACC15" stroke="#18181B" stroke-width="3" />
      <line x1="54" y1="22" x2="66" y2="22" stroke="#18181B" stroke-width="3" />
      <!-- Flowing Dynamic Cape Ribbons -->
      <path d="M44 26 C26 44 14 74 12 104 C28 96 38 106 52 98 C64 108 76 96 90 106 C104 98 112 104 114 96 C110 66 94 38 76 26 Z" fill="#DC2626" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Cape interior shadow / folds -->
      <path d="M52 28 C42 50 36 78 34 100 M68 28 C64 54 62 80 66 102 M84 32 C82 56 86 80 94 102" stroke="#991B1B" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Action wind lines -->
      <path d="M20 28 Q10 24 6 32 M108 26 Q118 24 118 34" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#DC2626',
    tags: ['capa', 'vuelo', 'heroe', 'superman', 'accion', 'comic', 'viento']
  },
  {
    id: 'comic-hero-punch-fist',
    name: 'Puñetazo Heroico con Estela',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Speed impact lines behind -->
      <line x1="10" y1="46" x2="34" y2="46" stroke="#EF4444" stroke-width="4" stroke-linecap="round" />
      <line x1="8" y1="60" x2="30" y2="60" stroke="#FACC15" stroke-width="5" stroke-linecap="round" />
      <line x1="12" y1="74" x2="36" y2="74" stroke="#EF4444" stroke-width="4" stroke-linecap="round" />
      <!-- Power Fist -->
      <g transform="translate(10, 0)">
        <!-- Gauntlet Arm -->
        <rect x="24" y="44" width="28" height="32" rx="4" fill="#DC2626" stroke="#18181B" stroke-width="4" />
        <!-- Gold cuff -->
        <rect x="20" y="40" width="10" height="40" rx="3" fill="#FACC15" stroke="#18181B" stroke-width="3.5" />
        <!-- Clenched Fist -->
        <path d="M52 42 C52 36 60 34 70 34 C82 34 94 42 94 56 C94 72 82 82 68 82 C58 82 52 78 52 72 Z" fill="#EF4444" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
        <!-- Fingers lines -->
        <path d="M68 38 C74 38 82 42 82 48 M70 50 C78 50 84 54 84 60 M68 62 C76 62 82 66 82 72" stroke="#18181B" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Thumb folded over -->
        <ellipse cx="64" cy="62" rx="7" ry="12" fill="#DC2626" stroke="#18181B" stroke-width="3" />
      </g>
      <!-- Hit sparks -->
      <polygon points="102,46 106,52 114,50 108,56 112,64 104,60 98,66 100,58 92,54 100,52" fill="#FDE047" stroke="#18181B" stroke-width="2" />
    `),
    defaultFill: '#DC2626',
    tags: ['puño', 'golpe', 'guante', 'fuerza', 'superheroe', 'comic', 'pelea']
  },
  {
    id: 'comic-hero-utility-belt',
    name: 'Cinturón Táctico con Bolsillos',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Belt Strap -->
      <rect x="10" y="48" width="100" height="24" rx="4" fill="#F59E0B" stroke="#18181B" stroke-width="4" />
      <!-- Central Emblem Buckle -->
      <circle cx="60" cy="60" r="18" fill="#FBBF24" stroke="#18181B" stroke-width="4" />
      <polygon points="60,48 64,56 72,56 66,62 68,70 60,65 52,70 54,62 48,56 56,56" fill="#18181B" />
      <!-- Side Pouches / Capsules -->
      <rect x="18" y="42" width="14" height="34" rx="4" fill="#FBBF24" stroke="#18181B" stroke-width="3.5" />
      <rect x="36" y="42" width="12" height="34" rx="4" fill="#FBBF24" stroke="#18181B" stroke-width="3.5" />
      <rect x="72" y="42" width="12" height="34" rx="4" fill="#FBBF24" stroke="#18181B" stroke-width="3.5" />
      <rect x="88" y="42" width="14" height="34" rx="4" fill="#FBBF24" stroke="#18181B" stroke-width="3.5" />
    `),
    defaultFill: '#FBBF24',
    tags: ['cinturon', 'tactico', 'gadget', 'batman', 'heroe', 'herramientas', 'comic']
  },
  {
    id: 'comic-hero-lightning-chest',
    name: 'Emblema de Rayo en el Pecho',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Triangular / Diamond Chest Shield -->
      <polygon points="60,10 108,34 94,84 60,112 26,84 12,34" fill="#DC2626" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <polygon points="60,20 98,40 86,80 60,102 34,80 22,40" fill="#EF4444" stroke="#FACC15" stroke-width="3" stroke-linejoin="round" />
      <!-- Big Golden Lightning Bolt -->
      <polygon points="66,22 40,62 58,62 46,98 80,54 62,54 74,22" fill="#FACC15" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" />
      <!-- Highlight -->
      <polygon points="66,24 50,56 60,56 52,80 72,56 62,56 70,24" fill="#FEF08A" opacity="0.6" />
    `),
    defaultFill: '#DC2626',
    tags: ['rayo', 'pecho', 'emblema', 'flash', 'velocidad', 'heroe', 'insignia']
  },
  {
    id: 'comic-villain-poison-vial',
    name: 'Matraz Tóxico de Villano',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Glass Flask Neck & Rim -->
      <rect x="50" y="16" width="20" height="8" rx="2" fill="#CBD5E1" stroke="#18181B" stroke-width="3.5" />
      <rect x="54" y="24" width="12" height="18" fill="#E2E8F0" stroke="#18181B" stroke-width="3.5" />
      <!-- Cork / Stopper -->
      <rect x="52" y="10" width="16" height="8" rx="2" fill="#B45309" stroke="#18181B" stroke-width="3" />
      <!-- Flask Triangular Body -->
      <polygon points="60,38 98,96 22,96" fill="#F1F5F9" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <!-- Toxic Green Glowing Acid Liquid -->
      <polygon points="56,58 92,94 28,94" fill="#22C55E" stroke="#18181B" stroke-width="3" stroke-linejoin="round" />
      <!-- Bubbles -->
      <circle cx="48" cy="80" r="4" fill="#86EFAC" />
      <circle cx="72" cy="82" r="5" fill="#86EFAC" />
      <circle cx="60" cy="70" r="3" fill="#86EFAC" />
      <!-- Skull Icon on Flask -->
      <circle cx="60" cy="82" r="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
      <rect x="57" y="86" width="6" height="4" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
      <circle cx="58" cy="81" r="1.2" fill="#18181B" />
      <circle cx="62" cy="81" r="1.2" fill="#18181B" />
      <!-- Toxic green vapors rising -->
      <path d="M46 16 Q40 6 52 4 M70 16 Q78 4 66 2" stroke="#22C55E" stroke-width="3" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#22C55E',
    tags: ['veneno', 'pocion', 'quimico', 'villano', 'toxico', 'calavera', 'comic']
  },
  {
    id: 'comic-villain-round-bomb',
    name: 'Bomba Negra con Mecha Encendida',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Curving Fuse -->
      <path d="M72 40 Q84 20 96 22 Q106 24 104 12" stroke="#D97706" stroke-width="4" stroke-linecap="round" fill="none" />
      <!-- Fuse Spark / Fire -->
      <polygon points="104,10 112,4 116,12 122,8 118,16 124,20 114,20 112,28 106,20 100,24" fill="#FACC15" stroke="#EF4444" stroke-width="2" />
      <!-- Bomb Neck -->
      <rect x="62" y="34" width="18" height="10" rx="2" fill="#475569" stroke="#18181B" stroke-width="3.5" />
      <!-- Big Round Black Bomb -->
      <circle cx="56" cy="68" r="38" fill="#1E293B" stroke="#18181B" stroke-width="4.5" />
      <!-- Comic Glint / Reflection -->
      <ellipse cx="42" cy="54" rx="8" ry="14" fill="#FFFFFF" opacity="0.4" transform="rotate(-30 42 54)" />
      <circle cx="48" cy="44" r="3" fill="#FFFFFF" opacity="0.8" />
    `),
    defaultFill: '#1E293B',
    tags: ['bomba', 'explosivo', 'mecha', 'villano', 'peligro', 'comic']
  },
  {
    id: 'comic-villain-dynamite-bundle',
    name: 'Cartuchos de Dinamita TNT',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- 3 Sticks of Red Dynamite -->
      <!-- Left Stick -->
      <rect x="24" y="32" width="22" height="66" rx="4" fill="#DC2626" stroke="#18181B" stroke-width="3.5" />
      <!-- Right Stick -->
      <rect x="74" y="32" width="22" height="66" rx="4" fill="#DC2626" stroke="#18181B" stroke-width="3.5" />
      <!-- Center Stick (Forward) -->
      <rect x="46" y="26" width="28" height="74" rx="5" fill="#EF4444" stroke="#18181B" stroke-width="4" />
      <!-- Black Holding Band -->
      <rect x="20" y="52" width="80" height="18" fill="#18181B" stroke="#000000" stroke-width="2" />
      <!-- TNT Text on Band -->
      <text x="60" y="66" font-family="'Impact', 'Arial Black', sans-serif" font-size="16" font-weight="900" fill="#FACC15" text-anchor="middle">TNT</text>
      <!-- Wicks leading up to spark -->
      <path d="M35 32 Q45 18 58 14 M60 26 L60 14 M85 32 Q75 18 62 14" stroke="#D97706" stroke-width="3" fill="none" />
      <!-- Burning Spark at top -->
      <polygon points="60,12 64,4 70,8 74,2 72,10 80,12 72,16 74,22 66,18 62,24" fill="#FDE047" stroke="#EF4444" stroke-width="1.5" />
    `),
    defaultFill: '#DC2626',
    tags: ['dinamita', 'tnt', 'explosivo', 'bomba', 'acme', 'villano', 'comic']
  },
  {
    id: 'comic-villain-evil-laugh',
    name: 'Carcajada Siniestra HA-HA-HA',
    category: 'Stickers Cómic',
    subCategory: 'Héroes & Villanos Cómic',
    ...createComicSvg(`
      <!-- Jagged electric green/purple background cloud -->
      <path d="M20 40 Q30 14 60 18 Q90 10 98 36 Q116 52 102 80 Q106 106 78 104 Q50 114 30 96 Q8 86 16 60 Z" fill="#7E22CE" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Comic HA HA HA in Joker / villain colors -->
      <text x="44" y="44" font-family="'Impact', 'Arial Black', sans-serif" font-size="24" font-weight="900" fill="#22C55E" stroke="#18181B" stroke-width="2.5" font-style="italic">HA!</text>
      <text x="76" y="64" font-family="'Impact', 'Arial Black', sans-serif" font-size="28" font-weight="900" fill="#FACC15" stroke="#18181B" stroke-width="2.5" font-style="italic">HA!</text>
      <text x="48" y="90" font-family="'Impact', 'Arial Black', sans-serif" font-size="32" font-weight="900" fill="#EF4444" stroke="#18181B" stroke-width="3" font-style="italic">HA!</text>
      <!-- Action spikes -->
      <line x1="10" y1="30" x2="20" y2="40" stroke="#22C55E" stroke-width="3" stroke-linecap="round" />
      <line x1="104" y1="26" x2="94" y2="34" stroke="#22C55E" stroke-width="3" stroke-linecap="round" />
    `),
    defaultFill: '#7E22CE',
    tags: ['haha', 'joker', 'risa', 'villano', 'siniestro', 'locura', 'comic']
  },

  // =================================================================
  // 4. EFECTOS & DESTELLOS CÓMIC (10 stickers)
  // =================================================================
  {
    id: 'comic-effect-action-sunburst',
    name: 'Estallido Solar Halftone',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Radial Action Sunburst -->
      <circle cx="60" cy="60" r="50" fill="#FACC15" stroke="#18181B" stroke-width="4" />
      <!-- Alternating Sun Rays -->
      <path d="M60 60 L48 12 L60 10 L72 12 Z M60 60 L108 48 L110 60 L108 72 Z M60 60 L72 108 L60 110 L48 108 Z M60 60 L12 72 L10 60 L12 48 Z" fill="#EF4444" />
      <path d="M60 60 L24 24 L34 16 L44 26 Z M60 60 L86 24 L96 34 L86 44 Z M60 60 L96 86 L86 96 L76 86 Z M60 60 L24 86 L16 76 L26 66 Z" fill="#F97316" />
      <!-- Center Core -->
      <circle cx="60" cy="60" r="18" fill="#FFFFFF" stroke="#18181B" stroke-width="3" />
      <circle cx="60" cy="60" r="10" fill="#FDE047" />
    `),
    defaultFill: '#FACC15',
    tags: ['sunburst', 'rayos', 'sol', 'fondo', 'accion', 'comic', 'retro']
  },
  {
    id: 'comic-effect-speed-lines',
    name: 'Líneas de Supervelocidad',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Wind burst lines rushing across -->
      <path d="M10 24 L84 24 M92 24 L110 24" stroke="#18181B" stroke-width="4.5" stroke-linecap="round" />
      <path d="M24 38 L98 38 M106 38 L116 38" stroke="#3B82F6" stroke-width="5" stroke-linecap="round" />
      <path d="M6 52 L114 52" stroke="#18181B" stroke-width="6" stroke-linecap="round" />
      <path d="M16 66 L88 66 M96 66 L112 66" stroke="#EF4444" stroke-width="5" stroke-linecap="round" />
      <path d="M8 80 L76 80 M84 80 L106 80" stroke="#FACC15" stroke-width="5" stroke-linecap="round" />
      <path d="M22 94 L94 94" stroke="#18181B" stroke-width="4.5" stroke-linecap="round" />
      <!-- Arrowheads for momentum -->
      <polygon points="110,52 98,46 102,52 98,58" fill="#18181B" />
      <polygon points="112,66 102,61 105,66 102,71" fill="#EF4444" />
    `),
    defaultFill: '#3B82F6',
    tags: ['velocidad', 'lineas', 'rapido', 'carrera', 'movimiento', 'comic']
  },
  {
    id: 'comic-effect-smoke-skid',
    name: 'Nube de Humo de Derrape',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Puffy skid smoke puffs -->
      <path d="M24 74 C14 74 10 64 16 54 C12 40 28 32 40 38 C48 24 68 22 80 32 C92 26 106 34 104 48 C114 54 114 68 104 74 Z" fill="#E2E8F0" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Inner puff lines -->
      <path d="M34 56 C38 46 50 48 56 52 M68 44 C76 40 84 46 86 54" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Skid streak on ground -->
      <path d="M10 82 L110 82" stroke="#18181B" stroke-width="4" stroke-linecap="round" />
      <path d="M18 90 L94 90" stroke="#64748B" stroke-width="3" stroke-linecap="round" />
      <!-- Little escaping dust dots -->
      <circle cx="16" cy="42" r="3.5" fill="#CBD5E1" stroke="#18181B" stroke-width="2" />
      <circle cx="108" cy="36" r="3" fill="#CBD5E1" stroke="#18181B" stroke-width="2" />
    `),
    defaultFill: '#E2E8F0',
    tags: ['humo', 'derrape', 'frenazo', 'nube', 'polvo', 'comic']
  },
  {
    id: 'comic-effect-dizzy-stars',
    name: 'Estrellas y Espirales de Mareo',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Tilted Elliptical Orbit Track -->
      <ellipse cx="60" cy="60" rx="46" ry="24" fill="none" stroke="#18181B" stroke-width="3" stroke-dasharray="6,6" transform="rotate(-15 60 60)" />
      <!-- Star 1 (Top Left) -->
      <polygon points="34,22 38,32 48,34 40,40 42,50 34,44 26,50 28,40 20,34 30,32" fill="#FACC15" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Star 2 (Top Right) -->
      <polygon points="86,34 89,42 98,43 91,48 93,56 86,51 79,56 81,48 74,43 83,42" fill="#EF4444" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Star 3 (Bottom Center) -->
      <polygon points="62,72 65,80 74,81 67,86 69,94 62,89 55,94 57,86 50,81 59,80" fill="#38BDF8" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Little Dizzy Swirls -->
      <path d="M50 48 Q56 42 62 48 T70 54" stroke="#A855F7" stroke-width="3" fill="none" stroke-linecap="round" />
    `),
    defaultFill: '#FACC15',
    tags: ['mareo', 'estrellas', 'aturdido', 'confuso', 'orbita', 'comic']
  },
  {
    id: 'comic-effect-laser-eyes',
    name: 'Visión Láser de Ojos Rojos',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Twin Blazing Laser Beams blasting forward -->
      <polygon points="26,38 114,14 114,28 26,44" fill="#EF4444" stroke="#18181B" stroke-width="3" stroke-linejoin="round" />
      <polygon points="26,40 114,18 114,24 26,42" fill="#FEF08A" />
      <polygon points="26,76 114,92 114,106 26,82" fill="#EF4444" stroke="#18181B" stroke-width="3" stroke-linejoin="round" />
      <polygon points="26,78 114,96 114,102 26,80" fill="#FEF08A" />
      <!-- Origin Eyes Glow -->
      <circle cx="24" cy="40" r="10" fill="#DC2626" stroke="#18181B" stroke-width="3" />
      <circle cx="24" cy="40" r="5" fill="#FFFFFF" />
      <circle cx="24" cy="80" r="10" fill="#DC2626" stroke="#18181B" stroke-width="3" />
      <circle cx="24" cy="80" r="5" fill="#FFFFFF" />
      <!-- Terminal Energy Blasts -->
      <polygon points="112,20 118,12 122,22 116,28" fill="#FACC15" />
      <polygon points="112,100 118,92 122,102 116,108" fill="#FACC15" />
    `),
    defaultFill: '#EF4444',
    tags: ['laser', 'ojos', 'vision', 'superman', 'energia', 'comic', 'disparo']
  },
  {
    id: 'comic-effect-claw-slash',
    name: 'Zarpazo de Tres Garras',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Three Sharp Diagonal Slashes like Wolverine -->
      <polygon points="18,18 32,14 104,88 92,94" fill="#E11D48" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" />
      <polygon points="34,14 48,10 116,74 104,80" fill="#E11D48" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" />
      <polygon points="10,34 22,28 92,106 80,110" fill="#E11D48" stroke="#18181B" stroke-width="3.5" stroke-linejoin="round" />
      <!-- Metallic Yellow Core in Slashes -->
      <line x1="26" y1="16" x2="98" y2="91" stroke="#FDE047" stroke-width="3" stroke-linecap="round" />
      <line x1="42" y1="12" x2="110" y2="77" stroke="#FDE047" stroke-width="3" stroke-linecap="round" />
      <line x1="16" y1="31" x2="86" y2="108" stroke="#FDE047" stroke-width="3" stroke-linecap="round" />
      <!-- Splatter blood / action sparks -->
      <circle cx="80" cy="30" r="3" fill="#E11D48" />
      <circle cx="98" cy="46" r="2.5" fill="#E11D48" />
      <circle cx="40" cy="80" r="3" fill="#E11D48" />
    `),
    defaultFill: '#E11D48',
    tags: ['garras', 'zarpazo', 'corte', 'lobezno', 'wolverine', 'slash', 'comic']
  },
  {
    id: 'comic-effect-hypno-spiral',
    name: 'Espiral Hipnótica Mental',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Hypnotic target circles/swirl -->
      <circle cx="60" cy="60" r="48" fill="#F8FAFC" stroke="#18181B" stroke-width="4.5" />
      <!-- Spiral bands in high-contrast purple/black -->
      <path d="M60 60 L60 12 A 48 48 0 0 1 108 60 Z" fill="#7C3AED" />
      <path d="M60 60 L60 108 A 48 48 0 0 1 12 60 Z" fill="#7C3AED" />
      <circle cx="60" cy="60" r="34" fill="#F8FAFC" stroke="#18181B" stroke-width="3.5" />
      <path d="M60 60 L12 60 A 34 34 0 0 1 60 26 Z" fill="#18181B" />
      <path d="M60 60 L108 60 A 34 34 0 0 1 60 94 Z" fill="#18181B" />
      <circle cx="60" cy="60" r="18" fill="#F8FAFC" stroke="#18181B" stroke-width="3" />
      <circle cx="60" cy="60" r="8" fill="#EF4444" stroke="#18181B" stroke-width="2" />
    `),
    defaultFill: '#7C3AED',
    tags: ['hipnosis', 'espiral', 'mente', 'control', 'psiquico', 'comic']
  },
  {
    id: 'comic-effect-shockwave-rings',
    name: 'Ondas de Choque Concéntricas',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Expanding sonic shockwave rings -->
      <ellipse cx="60" cy="60" rx="52" ry="46" fill="none" stroke="#38BDF8" stroke-width="4" stroke-dasharray="14,10" />
      <ellipse cx="60" cy="60" rx="38" ry="32" fill="none" stroke="#0284C7" stroke-width="5" />
      <ellipse cx="60" cy="60" rx="24" ry="20" fill="none" stroke="#FACC15" stroke-width="4.5" />
      <!-- Central epicenter burst -->
      <polygon points="60,46 64,54 74,52 68,60 74,68 64,66 60,74 56,66 46,68 52,60 46,52 56,54" fill="#EF4444" stroke="#18181B" stroke-width="2" />
    `),
    defaultFill: '#38BDF8',
    tags: ['ondas', 'choque', 'sonico', 'vibracion', 'impacto', 'comic']
  },
  {
    id: 'comic-effect-dynamic-arrow',
    name: 'Flecha de Acción Cómic 3D',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Curving 3D comic arrow -->
      <!-- Shadow extrusion -->
      <path d="M22 84 Q44 94 72 82 L72 96 L108 70 L84 40 L84 54 Q56 64 34 52 Z" fill="#18181B" />
      <!-- Main arrow body -->
      <path d="M18 78 Q42 88 68 76 L68 90 L104 64 L80 34 L80 48 Q52 58 30 46 Z" fill="#EF4444" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Inner yellow highlight -->
      <path d="M24 74 Q44 82 66 72 L66 78 L94 58 L78 38 L78 46 Q54 54 34 46 Z" fill="#FACC15" stroke="#18181B" stroke-width="1.5" stroke-linejoin="round" />
      <!-- Speed dust trails -->
      <line x1="12" y1="84" x2="22" y2="84" stroke="#18181B" stroke-width="3" stroke-linecap="round" />
      <line x1="16" y1="64" x2="26" y2="64" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" />
    `),
    defaultFill: '#EF4444',
    tags: ['flecha', 'direccion', 'accion', 'comic', 'apuntar', 'dinamico']
  },
  {
    id: 'comic-effect-cosmic-sparkles',
    name: 'Destellos de Energía Cósmica',
    category: 'Stickers Cómic',
    subCategory: 'Efectos & Destellos Cómic',
    ...createComicSvg(`
      <!-- Big Center 4-Point Star -->
      <polygon points="60,14 66,48 102,60 66,72 60,106 54,72 18,60 54,48" fill="#FACC15" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Inner star glow -->
      <polygon points="60,26 64,52 90,60 64,68 60,94 56,68 30,60 56,52" fill="#FFFFFF" />
      <!-- Secondary Mini Sparkles -->
      <polygon points="28,20 31,28 40,30 31,34 28,42 25,34 16,30 25,28" fill="#38BDF8" stroke="#18181B" stroke-width="2" />
      <polygon points="92,78 95,84 102,86 95,89 92,96 89,89 82,86 89,84" fill="#EC4899" stroke="#18181B" stroke-width="2" />
      <!-- Little energy sparkles -->
      <circle cx="34" cy="84" r="3.5" fill="#FACC15" stroke="#18181B" stroke-width="1.5" />
      <circle cx="88" cy="28" r="3.5" fill="#FACC15" stroke="#18181B" stroke-width="1.5" />
    `),
    defaultFill: '#FACC15',
    tags: ['destellos', 'brillo', 'magia', 'energia', 'estrellas', 'comic']
  },

  // =================================================================
  // 5. EXPRESIONES & SÍMBOLOS POP (10 stickers)
  // =================================================================
  {
    id: 'comic-symbol-idea-lightbulb',
    name: 'Bombilla de Idea Genial',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Radiating Idea Rays -->
      <g stroke="#F59E0B" stroke-width="4" stroke-linecap="round">
        <line x1="60" y1="8" x2="60" y2="18" />
        <line x1="24" y1="24" x2="32" y2="32" />
        <line x1="96" y1="24" x2="88" y2="32" />
        <line x1="12" y1="56" x2="22" y2="56" />
        <line x1="108" y1="56" x2="98" y2="56" />
      </g>
      <!-- Bulb Glass Dome -->
      <path d="M42 74 C30 66 30 40 44 30 C58 20 76 26 80 44 C82 54 76 66 66 74 Z" fill="#FACC15" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <!-- Filament Smiling -->
      <path d="M48 54 Q60 42 72 54" stroke="#18181B" stroke-width="3" stroke-linecap="round" fill="none" />
      <line x1="54" y1="54" x2="54" y2="70" stroke="#18181B" stroke-width="2.5" />
      <line x1="66" y1="54" x2="66" y2="70" stroke="#18181B" stroke-width="2.5" />
      <!-- Screw Base -->
      <rect x="46" y="74" width="16" height="6" rx="2" fill="#94A3B8" stroke="#18181B" stroke-width="3" />
      <rect x="48" y="80" width="12" height="5" rx="2" fill="#94A3B8" stroke="#18181B" stroke-width="3" />
      <ellipse cx="54" cy="87" rx="4" ry="2" fill="#18181B" />
      <!-- Bright Highlight -->
      <ellipse cx="44" cy="40" rx="4" ry="8" fill="#FFFFFF" opacity="0.8" transform="rotate(-30 44 40)" />
    `),
    defaultFill: '#FACC15',
    tags: ['bombilla', 'idea', 'luz', 'mente', 'inspiracion', 'comic', 'genio']
  },
  {
    id: 'comic-symbol-money-eyes',
    name: 'Ojos con Signos de Dólar ($$)',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Yellow Excited Face Oval -->
      <ellipse cx="60" cy="60" rx="48" ry="46" fill="#FBBF24" stroke="#18181B" stroke-width="4.5" />
      <!-- Green Dollar Sign Left Eye -->
      <circle cx="42" cy="50" r="15" fill="#DCFCE7" stroke="#18181B" stroke-width="3.5" />
      <text x="42" y="58" font-family="'Impact', 'Arial Black', sans-serif" font-size="24" font-weight="900" fill="#15803D" text-anchor="middle">$</text>
      <!-- Green Dollar Sign Right Eye -->
      <circle cx="78" cy="50" r="15" fill="#DCFCE7" stroke="#18181B" stroke-width="3.5" />
      <text x="78" y="58" font-family="'Impact', 'Arial Black', sans-serif" font-size="24" font-weight="900" fill="#15803D" text-anchor="middle">$</text>
      <!-- Huge Greedy Grin with tongue out like cash -->
      <path d="M34 76 Q60 102 86 76 Z" fill="#18181B" stroke="#18181B" stroke-width="3" />
      <!-- Green Cash Tongue hanging out -->
      <path d="M50 82 C50 98 56 106 60 106 C64 106 70 98 70 82 Z" fill="#22C55E" stroke="#18181B" stroke-width="2.5" />
      <line x1="60" y1="84" x2="60" y2="102" stroke="#15803D" stroke-width="2" />
    `),
    defaultFill: '#FBBF24',
    tags: ['dinero', 'dolar', 'riqueza', 'ojos', 'comic', 'carita', 'rico']
  },
  {
    id: 'comic-symbol-heart-eyes',
    name: 'Ojos de Corazón Enamorado',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Yellow Love Face -->
      <ellipse cx="60" cy="60" rx="48" ry="46" fill="#FBBF24" stroke="#18181B" stroke-width="4.5" />
      <!-- Left Giant Heart Eye -->
      <path d="M42 42 C36 34 26 38 26 48 C26 60 42 70 42 70 C42 70 58 60 58 48 C58 38 48 34 42 42 Z" fill="#EF4444" stroke="#18181B" stroke-width="3.5" />
      <!-- Right Giant Heart Eye -->
      <path d="M78 42 C72 34 62 38 62 48 C62 60 78 70 78 70 C78 70 94 60 94 48 C94 38 84 34 78 42 Z" fill="#EF4444" stroke="#18181B" stroke-width="3.5" />
      <!-- Heart Glints -->
      <circle cx="34" cy="46" r="2.5" fill="#FFFFFF" />
      <circle cx="70" cy="46" r="2.5" fill="#FFFFFF" />
      <!-- Happy Blush Cheeks -->
      <ellipse cx="26" cy="74" rx="6" ry="4" fill="#F87171" opacity="0.8" />
      <ellipse cx="94" cy="74" rx="6" ry="4" fill="#F87171" opacity="0.8" />
      <!-- Big Happy Smile -->
      <path d="M44 76 Q60 94 76 76" stroke="#18181B" stroke-width="3.5" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#FBBF24',
    tags: ['corazon', 'amor', 'enamorado', 'ojos', 'carita', 'comic', 'romance']
  },
  {
    id: 'comic-symbol-censored-swearing',
    name: 'Burbuja de Insultos Cómic',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Black Censorship Speech Bubble with Red Border -->
      <path d="M14 26 C8 26 6 34 6 48 C6 64 16 74 38 74 L32 94 L54 74 L102 74 C112 74 114 64 114 48 C114 34 112 26 102 26 Z" fill="#18181B" stroke="#EF4444" stroke-width="4.5" stroke-linejoin="round" />
      <!-- Colorful Swear Symbols: Spiral, Skull, Lightning, Exclamation -->
      <!-- Skull -->
      <circle cx="28" cy="50" r="5" fill="#FFFFFF" />
      <rect x="25" y="53" width="6" height="3" fill="#FFFFFF" />
      <circle cx="26" cy="49" r="1" fill="#18181B" /><circle cx="30" cy="49" r="1" fill="#18181B" />
      <!-- At sign -->
      <text x="46" y="56" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#FACC15">@</text>
      <!-- Hash -->
      <text x="64" y="56" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#38BDF8">#</text>
      <!-- Lightning -->
      <polygon points="84,40 76,52 82,52 78,64 88,48 82,48" fill="#FACC15" stroke="#18181B" stroke-width="1" />
      <!-- Exclamation / Star -->
      <text x="98" y="56" font-family="'Impact', 'Arial Black', sans-serif" font-size="22" font-weight="900" fill="#EF4444">!</text>
    `),
    defaultFill: '#18181B',
    tags: ['censura', 'insulto', 'rabia', 'simbolos', 'comic', 'enojo']
  },
  {
    id: 'comic-symbol-sweat-drop',
    name: 'Gota Gigante de Nervios / Anime',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Classic Comic / Manga Sweat Drop -->
      <path d="M60 12 C60 12 20 54 20 80 C20 102 38 114 60 114 C82 114 100 102 100 80 C100 54 60 12 60 12 Z" fill="#38BDF8" stroke="#18181B" stroke-width="4.5" stroke-linejoin="round" />
      <!-- Inner light highlight curved arc -->
      <path d="M38 72 C38 60 52 40 56 32" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" fill="none" />
      <circle cx="38" cy="84" r="4.5" fill="#FFFFFF" />
      <!-- Bottom shadow curve -->
      <path d="M40 100 Q60 108 80 100" stroke="#0284C7" stroke-width="4" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#38BDF8',
    tags: ['gota', 'sudor', 'nervios', 'manga', 'comic', 'verguenza', 'anime']
  },
  {
    id: 'comic-symbol-jaw-drop',
    name: 'Boca Abierta de Shock Cómic',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Tilted Face in Pure Shock -->
      <circle cx="60" cy="54" r="44" fill="#FBBF24" stroke="#18181B" stroke-width="4.5" />
      <!-- Staring Round Eyes popping out -->
      <circle cx="44" cy="40" r="14" fill="#FFFFFF" stroke="#18181B" stroke-width="3.5" />
      <circle cx="46" cy="40" r="5" fill="#18181B" />
      <circle cx="76" cy="40" r="14" fill="#FFFFFF" stroke="#18181B" stroke-width="3.5" />
      <circle cx="74" cy="40" r="5" fill="#18181B" />
      <!-- Extreme Elongated Jaw Dropped Down -->
      <path d="M40 60 C40 60 36 106 60 106 C84 106 80 60 80 60 Z" fill="#18181B" stroke="#18181B" stroke-width="3.5" />
      <!-- Red Tongue Inside -->
      <path d="M50 96 C50 90 56 84 60 84 C64 84 70 90 70 96 Z" fill="#EF4444" />
      <!-- Top teeth -->
      <rect x="46" y="60" width="8" height="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
      <rect x="54" y="60" width="8" height="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
      <rect x="62" y="60" width="8" height="6" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
    `),
    defaultFill: '#FBBF24',
    tags: ['shock', 'mandibula', 'boca', 'sorpresa', 'grito', 'comic', 'carita']
  },
  {
    id: 'comic-symbol-thumbs-up-speed',
    name: 'Pulgar Arriba de Superhéroe',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Yellow Starburst behind thumb -->
      <polygon points="60,18 70,36 90,28 82,48 100,56 84,70 96,86 76,84 78,104 62,94 52,106 44,90 26,98 34,78 18,72 34,58 20,44 40,44 42,24 54,34" fill="#FEF08A" stroke="#18181B" stroke-width="3" stroke-linejoin="round" />
      <!-- Hero White Gauntlet Hand with Thumbs Up -->
      <g transform="translate(10, 5)">
        <!-- Thumb pointing high -->
        <path d="M54 22 C54 16 62 14 66 18 C70 24 68 44 68 50 C74 48 84 50 84 56 C84 62 76 64 76 64 C82 64 84 70 82 74 C80 78 74 78 74 78 C78 80 78 86 72 88 C66 90 54 88 44 82 L34 82 L34 56 L46 56 C50 50 54 32 54 22 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
        <!-- Red hero cuff -->
        <rect x="22" y="52" width="14" height="34" rx="3" fill="#DC2626" stroke="#18181B" stroke-width="3.5" />
      </g>
      <!-- Sparkle of success -->
      <polygon points="76,14 78,18 82,19 79,22 80,26 76,24 72,26 73,22 70,19 74,18" fill="#F59E0B" stroke="#18181B" stroke-width="1" />
    `),
    defaultFill: '#FFFFFF',
    tags: ['pulgar', 'like', 'bien', 'aprobado', 'superheroe', 'guante', 'comic']
  },
  {
    id: 'comic-symbol-danger-skull',
    name: 'Calavera Cómic con Tibias Cruzadas',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Crossed Bones Behind -->
      <line x1="20" y1="20" x2="100" y2="100" stroke="#E2E8F0" stroke-width="12" stroke-linecap="round" />
      <line x1="20" y1="20" x2="100" y2="100" stroke="#18181B" stroke-width="16" stroke-linecap="round" style="z-index:-1" />
      <line x1="100" y1="20" x2="20" y2="100" stroke="#E2E8F0" stroke-width="12" stroke-linecap="round" />
      <!-- Outer Bone Knobs -->
      <circle cx="16" cy="18" r="6" fill="#E2E8F0" stroke="#18181B" stroke-width="3" />
      <circle cx="22" cy="12" r="6" fill="#E2E8F0" stroke="#18181B" stroke-width="3" />
      <circle cx="98" cy="18" r="6" fill="#E2E8F0" stroke="#18181B" stroke-width="3" />
      <circle cx="104" cy="12" r="6" fill="#E2E8F0" stroke="#18181B" stroke-width="3" />
      <circle cx="16" cy="102" r="6" fill="#E2E8F0" stroke="#18181B" stroke-width="3" />
      <circle cx="22" cy="108" r="6" fill="#E2E8F0" stroke="#18181B" stroke-width="3" />
      <circle cx="98" cy="102" r="6" fill="#E2E8F0" stroke="#18181B" stroke-width="3" />
      <circle cx="104" cy="108" r="6" fill="#E2E8F0" stroke="#18181B" stroke-width="3" />
      <!-- Skull Head -->
      <path d="M34 50 C34 30 44 22 60 22 C76 22 86 30 86 50 C86 64 78 68 76 76 L44 76 C42 68 34 64 34 50 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="4.5" />
      <!-- Skull Eyes -->
      <ellipse cx="48" cy="46" rx="6" ry="8" fill="#18181B" />
      <ellipse cx="72" cy="46" rx="6" ry="8" fill="#18181B" />
      <!-- Inverted heart nose -->
      <path d="M60 56 L57 62 L63 62 Z" fill="#18181B" />
      <!-- Teeth -->
      <rect x="48" y="76" width="6" height="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2" />
      <rect x="54" y="76" width="6" height="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2" />
      <rect x="60" y="76" width="6" height="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2" />
      <rect x="66" y="76" width="6" height="8" fill="#FFFFFF" stroke="#18181B" stroke-width="2" />
    `),
    defaultFill: '#FFFFFF',
    tags: ['calavera', 'huesos', 'peligro', 'muerte', 'pirata', 'comic', 'veneno']
  },
  {
    id: 'comic-symbol-exclamation-burst',
    name: 'Signo de Exclamación Gigante (!)',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Dynamic comic burst badge -->
      <polygon points="60,6 74,26 98,16 90,40 114,50 94,72 110,94 84,94 88,118 64,104 50,118 42,96 16,108 26,82 6,74 24,54 8,34 32,38 32,10 52,24" fill="#EF4444" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <polygon points="60,16 70,32 90,24 84,44 102,52 86,68 100,86 78,86 82,104 62,94 52,104 46,88 26,98 34,78 18,72 32,56 20,40 40,44 40,20 54,32" fill="#FACC15" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Giant Exclamation Point 3D -->
      <!-- Shadow -->
      <text x="63" y="80" font-family="'Impact', 'Arial Black', sans-serif" font-size="58" font-weight="900" fill="#18181B" text-anchor="middle">!</text>
      <!-- Main White/Black Exclamation -->
      <text x="60" y="76" font-family="'Impact', 'Arial Black', sans-serif" font-size="58" font-weight="900" fill="#FFFFFF" stroke="#18181B" stroke-width="3" text-anchor="middle">!</text>
    `),
    defaultFill: '#EF4444',
    tags: ['exclamacion', 'alerta', 'atencion', 'punto', 'comic', 'destello']
  },
  {
    id: 'comic-symbol-question-burst',
    name: 'Signo de Interrogación Cómic (?)',
    category: 'Stickers Cómic',
    subCategory: 'Expresiones & Símbolos Pop',
    ...createComicSvg(`
      <!-- Dynamic Comic Burst Badge (Cyan & Lime) -->
      <polygon points="60,6 74,26 98,16 90,40 114,50 94,72 110,94 84,94 88,118 64,104 50,118 42,96 16,108 26,82 6,74 24,54 8,34 32,38 32,10 52,24" fill="#0284C7" stroke="#18181B" stroke-width="4" stroke-linejoin="round" />
      <polygon points="60,16 70,32 90,24 84,44 102,52 86,68 100,86 78,86 82,104 62,94 52,104 46,88 26,98 34,78 18,72 32,56 20,40 40,44 40,20 54,32" fill="#67E8F9" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Giant Question Mark 3D -->
      <text x="63" y="78" font-family="'Impact', 'Arial Black', sans-serif" font-size="56" font-weight="900" fill="#18181B" text-anchor="middle">?</text>
      <text x="60" y="74" font-family="'Impact', 'Arial Black', sans-serif" font-size="56" font-weight="900" fill="#FFFFFF" stroke="#18181B" stroke-width="3" text-anchor="middle">?</text>
    `),
    defaultFill: '#0284C7',
    tags: ['interrogacion', 'pregunta', 'duda', 'misterio', 'que', 'comic']
  }
];
