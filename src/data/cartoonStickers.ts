// 50 High-Quality Cartoon Vector Stickers for Graphic Elements
// Vibrant, expressive, cute, playful cartoon characters, emotions, food, animals, pop & comic graphics.

export interface CartoonStickerItem {
  id: string;
  name: string;
  category: 'Stickers Cartoon';
  subCategory: 'Personajes & Caritas' | 'Animalitos Tiernos' | 'Comida & Snacks Kawaii' | 'Cómic & Onomatopeyas' | 'Objetos & Magia Fun';
  svgContent: string;
  dataUri: string;
  viewBox: string;
  defaultFill: string;
  tags: string[];
}

function createCartoonSvg(svgInner: string, viewBox = '0 0 120 120'): { svgContent: string; dataUri: string; viewBox: string } {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%" fill="none">${svgInner}</svg>`;
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
  return { svgContent, dataUri, viewBox };
}

export const CARTOON_STICKERS: CartoonStickerItem[] = [
  // ==========================================
  // 1. PERSONAJES & CARITAS (10 stickers)
  // ==========================================
  {
    id: 'cartoon-face-happy-sun',
    name: 'Sol Sonriente Kawaii',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <!-- Rays -->
      <g stroke="#F59E0B" stroke-width="6" stroke-linecap="round">
        <line x1="60" y1="12" x2="60" y2="22" />
        <line x1="60" y1="98" x2="60" y2="108" />
        <line x1="12" y1="60" x2="22" y2="60" />
        <line x1="98" y1="60" x2="108" y2="60" />
        <line x1="26" y1="26" x2="34" y2="34" />
        <line x1="86" y1="86" x2="94" y2="94" />
        <line x1="26" y1="94" x2="34" y2="86" />
        <line x1="86" y1="34" x2="94" y2="26" />
      </g>
      <!-- Sun Face -->
      <circle cx="60" cy="60" r="36" fill="#FBBF24" stroke="#1E293B" stroke-width="4" />
      <!-- Big Cute Eyes -->
      <circle cx="48" cy="54" r="5" fill="#1E293B" />
      <circle cx="50" cy="52" r="2" fill="#FFFFFF" />
      <circle cx="72" cy="54" r="5" fill="#1E293B" />
      <circle cx="74" cy="52" r="2" fill="#FFFFFF" />
      <!-- Cheeks -->
      <ellipse cx="42" cy="62" rx="4" ry="2.5" fill="#F87171" opacity="0.8" />
      <ellipse cx="78" cy="62" rx="4" ry="2.5" fill="#F87171" opacity="0.8" />
      <!-- Smile with open tongue -->
      <path d="M52 64 Q60 74 68 64" fill="#E11D48" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
    `),
    defaultFill: '#FBBF24',
    tags: ['sol', 'kawaii', 'feliz', 'verano', 'sonrisa', 'cara', 'alegria', 'tierno']
  },
  {
    id: 'cartoon-face-cool-star',
    name: 'Estrella Cool con Gafas',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <!-- Star Body -->
      <polygon points="60,10 73,42 108,44 81,68 89,102 60,83 31,102 39,68 12,44 47,42" fill="#FACC15" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Sunglasses -->
      <path d="M38 52 Q50 50 60 52 Q70 50 82 52 L80 64 Q69 67 62 60 Q51 67 40 64 Z" fill="#0F172A" stroke="#1E293B" stroke-width="3" />
      <line x1="43" y1="54" x2="52" y2="62" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
      <line x1="68" y1="54" x2="77" y2="62" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
      <!-- Cool Smirk -->
      <path d="M54 74 Q62 78 68 73" stroke="#1E293B" stroke-width="3.5" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#FACC15',
    tags: ['estrella', 'gafas', 'cool', 'lentes', 'divertido', 'genial', 'rock']
  },
  {
    id: 'cartoon-face-cloud-crying',
    name: 'Nubecita Triste Llorando',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <!-- Cloud Body -->
      <path d="M35 70 H85 C95 70 102 62 100 52 C98 42 88 38 80 40 C75 28 60 26 50 34 C44 30 32 34 32 44 C22 46 20 60 35 70 Z" fill="#93C5FD" stroke="#1E293B" stroke-width="4" />
      <!-- Eyes closed crying -->
      <path d="M44 50 Q48 46 52 50" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M68 50 Q72 46 76 50" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Tears stream -->
      <path d="M42 56 Q40 68 44 76" stroke="#2563EB" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M78 56 Q80 68 76 76" stroke="#2563EB" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Sad Mouth -->
      <path d="M54 62 Q60 56 66 62" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Rain drops -->
      <path d="M48 88 Q48 94 45 96 C42 94 42 88 48 88 Z" fill="#3B82F6" stroke="#1E293B" stroke-width="1.5" />
      <path d="M72 86 Q72 92 69 94 C66 92 66 86 72 86 Z" fill="#3B82F6" stroke="#1E293B" stroke-width="1.5" />
    `),
    defaultFill: '#93C5FD',
    tags: ['nube', 'lluvia', 'triste', 'llorar', 'gotas', 'tierno', 'clima']
  },
  {
    id: 'cartoon-face-heart-in-love',
    name: 'Corazón Enamorado Ojos de Estrella',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <path d="M60 102 C30 75 14 56 14 36 C14 20 26 12 40 12 C50 12 56 18 60 24 C64 18 70 12 80 12 C94 12 106 20 106 36 C106 56 90 75 60 102 Z" fill="#FB7185" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Star Eyes -->
      <polygon points="42,34 44,40 50,40 45,43 47,49 42,45 37,49 39,43 34,40 40,40" fill="#FACC15" stroke="#1E293B" stroke-width="1.5" />
      <polygon points="78,34 80,40 86,40 81,43 83,49 78,45 73,49 75,43 70,40 76,40" fill="#FACC15" stroke="#1E293B" stroke-width="1.5" />
      <!-- Cheeks -->
      <circle cx="34" cy="52" r="4" fill="#F43F5E" />
      <circle cx="86" cy="52" r="4" fill="#F43F5E" />
      <!-- Happy Open Smile -->
      <path d="M50 56 Q60 68 70 56 Z" fill="#991B1B" stroke="#1E293B" stroke-width="2.5" />
      <path d="M54 62 Q60 67 66 62" fill="#FDA4AF" />
    `),
    defaultFill: '#FB7185',
    tags: ['corazon', 'amor', 'enamorado', 'estrellas', 'kawaii', 'rosa', 'romantico']
  },
  {
    id: 'cartoon-face-ghost-boo',
    name: 'Fantasmita Amigable Boo',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <!-- Ghost body -->
      <path d="M60 14 C36 14 28 32 28 56 V96 Q36 88 44 96 Q52 88 60 96 Q68 88 76 96 Q84 88 92 96 V56 C92 32 84 14 60 14 Z" fill="#F8FAFC" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Arms -->
      <path d="M28 54 Q14 50 18 42 Q24 46 30 48" fill="#F8FAFC" stroke="#1E293B" stroke-width="3.5" />
      <path d="M92 54 Q106 50 102 42 Q96 46 90 48" fill="#F8FAFC" stroke="#1E293B" stroke-width="3.5" />
      <!-- Big Black Anime Eyes -->
      <ellipse cx="48" cy="46" rx="6" ry="8" fill="#1E293B" />
      <circle cx="50" cy="43" r="2.5" fill="#FFFFFF" />
      <ellipse cx="72" cy="46" rx="6" ry="8" fill="#1E293B" />
      <circle cx="74" cy="43" r="2.5" fill="#FFFFFF" />
      <!-- Blush -->
      <circle cx="38" cy="54" r="4" fill="#F472B6" opacity="0.7" />
      <circle cx="82" cy="54" r="4" fill="#F472B6" opacity="0.7" />
      <!-- Cute open mouth -->
      <ellipse cx="60" cy="62" rx="5" ry="7" fill="#1E293B" />
    `),
    defaultFill: '#F8FAFC',
    tags: ['fantasma', 'tierno', 'boo', 'halloween', 'amigo', 'blanco', 'kawaii']
  },
  {
    id: 'cartoon-face-fire-flame',
    name: 'Fuego Pícaro & Encendido',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <!-- Outer Flame -->
      <path d="M60 10 C60 10 74 34 82 46 C94 62 96 78 84 94 C74 108 46 108 36 94 C24 78 26 62 44 42 C46 60 56 64 60 52 C64 38 60 10 60 10 Z" fill="#EA580C" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Inner Flame -->
      <path d="M60 40 C60 40 70 54 74 64 C80 76 74 88 64 94 C56 90 52 82 56 72 C58 64 60 40 60 40 Z" fill="#FACC15" />
      <!-- Cheeky Face -->
      <path d="M46 64 Q50 60 54 64" stroke="#1E293B" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <circle cx="70" cy="62" r="3.5" fill="#1E293B" />
      <!-- Smirk Tongue out -->
      <path d="M52 74 Q60 80 66 72" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M62 76 Q64 84 68 76 Z" fill="#EF4444" stroke="#1E293B" stroke-width="1.5" />
    `),
    defaultFill: '#EA580C',
    tags: ['fuego', 'llama', 'picaro', 'hot', 'candela', 'divertido', 'quemar']
  },
  {
    id: 'cartoon-face-wink-coffee',
    name: 'Taza de Café Guiño',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <!-- Steam -->
      <path d="M46 22 Q42 14 48 8" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M60 24 Q56 16 62 10" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M74 22 Q70 14 76 8" stroke="#94A3B8" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Mug Handle -->
      <path d="M82 44 C98 44 98 72 82 72" fill="none" stroke="#1E293B" stroke-width="5" stroke-linecap="round" />
      <!-- Mug Body -->
      <path d="M26 34 H84 V74 C84 90 74 98 55 98 C36 98 26 90 26 74 Z" fill="#F1F5F9" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Wink eye -->
      <path d="M40 56 Q46 50 50 56" stroke="#1E293B" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <!-- Open big eye -->
      <circle cx="68" cy="54" r="5" fill="#1E293B" />
      <circle cx="70" cy="52" r="2" fill="#FFFFFF" />
      <!-- Blush -->
      <ellipse cx="38" cy="66" rx="4" ry="2" fill="#FB7185" />
      <ellipse cx="74" cy="66" rx="4" ry="2" fill="#FB7185" />
      <!-- Smile -->
      <path d="M50 68 Q56 74 62 68" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#F1F5F9',
    tags: ['cafe', 'taza', 'guiño', 'desayuno', 'mañana', 'tierno', 'humo']
  },
  {
    id: 'cartoon-face-surprised-bomb',
    name: 'Bombita de Mecha Asustada',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <!-- Fuse & Spark -->
      <path d="M60 30 Q70 16 82 22" fill="none" stroke="#78350F" stroke-width="3.5" stroke-linecap="round" />
      <polygon points="86,16 90,22 96,20 92,26 96,32 90,30 86,36 84,30 78,30 82,24" fill="#F59E0B" />
      <!-- Cap -->
      <rect x="52" y="28" width="16" height="8" rx="2" fill="#64748B" stroke="#1E293B" stroke-width="2.5" />
      <!-- Bomb Body -->
      <circle cx="60" cy="70" r="38" fill="#1E293B" stroke="#0F172A" stroke-width="4" />
      <ellipse cx="46" cy="50" rx="8" ry="4" fill="#475569" transform="rotate(-30 46 50)" />
      <!-- Surprised Eyes -->
      <circle cx="50" cy="68" r="6" fill="#FFFFFF" stroke="#0F172A" stroke-width="2" />
      <circle cx="50" cy="68" r="3" fill="#0F172A" />
      <circle cx="70" cy="68" r="6" fill="#FFFFFF" stroke="#0F172A" stroke-width="2" />
      <circle cx="70" cy="68" r="3" fill="#0F172A" />
      <!-- O mouth -->
      <ellipse cx="60" cy="84" rx="4" ry="6" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.5" />
    `),
    defaultFill: '#1E293B',
    tags: ['bomba', 'sorpresa', 'boom', 'mecha', 'asombro', 'comic', 'explosion']
  },
  {
    id: 'cartoon-face-sleepy-moon',
    name: 'Luna Menguante Soñolienta',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <!-- Moon Body -->
      <path d="M72 16 C40 22 26 50 34 78 C42 104 74 112 94 96 C62 94 50 64 64 36 C68 28 72 20 72 16 Z" fill="#FDE047" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Sleeping cap -->
      <path d="M72 18 Q86 10 98 22 Q90 32 78 30 Z" fill="#6366F1" stroke="#1E293B" stroke-width="2.5" />
      <circle cx="102" cy="22" r="5" fill="#FFFFFF" stroke="#1E293B" stroke-width="2" />
      <!-- Sleepy eye line -->
      <path d="M50 56 Q55 60 60 56" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Blush -->
      <circle cx="46" cy="66" r="3.5" fill="#F472B6" />
      <!-- Zzz letters -->
      <text x="76" y="58" fill="#818CF8" font-size="12" font-family="sans-serif" font-weight="bold">Z</text>
      <text x="88" y="48" fill="#818CF8" font-size="9" font-family="sans-serif" font-weight="bold">z</text>
      <text x="96" y="40" fill="#818CF8" font-size="7" font-family="sans-serif" font-weight="bold">z</text>
    `),
    defaultFill: '#FDE047',
    tags: ['luna', 'noche', 'dormir', 'sueño', 'zzz', 'descanso', 'tierno']
  },
  {
    id: 'cartoon-face-nerd-emoji',
    name: 'Emoticono Nerd con Gafas',
    category: 'Stickers Cartoon',
    subCategory: 'Personajes & Caritas',
    ...createCartoonSvg(`
      <circle cx="60" cy="60" r="46" fill="#FACC15" stroke="#1E293B" stroke-width="4" />
      <!-- Thick Glasses -->
      <rect x="24" y="40" width="28" height="24" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="4" />
      <rect x="68" y="40" width="28" height="24" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="4" />
      <line x1="52" y1="52" x2="68" y2="52" stroke="#1E293B" stroke-width="5" stroke-linecap="round" />
      <!-- White tape in middle -->
      <rect x="56" y="48" width="8" height="8" fill="#E2E8F0" stroke="#1E293B" stroke-width="1.5" />
      <!-- Pupils looking up -->
      <circle cx="38" cy="50" r="4" fill="#1E293B" />
      <circle cx="82" cy="50" r="4" fill="#1E293B" />
      <!-- Buck teeth smile -->
      <path d="M42 74 Q60 88 78 74" stroke="#1E293B" stroke-width="3.5" fill="none" />
      <rect x="52" y="76" width="7" height="9" fill="#FFFFFF" stroke="#1E293B" stroke-width="2" />
      <rect x="61" y="76" width="7" height="9" fill="#FFFFFF" stroke="#1E293B" stroke-width="2" />
    `),
    defaultFill: '#FACC15',
    tags: ['nerd', 'gafas', 'estudio', 'cerebrito', 'dientes', 'gracioso', 'geek']
  },

  // ==========================================
  // 2. ANIMALITOS TIERNOS (10 stickers)
  // ==========================================
  {
    id: 'cartoon-animal-cat-paw',
    name: 'Patita de Gato Rosada',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Paw Base -->
      <path d="M38 48 C38 34 82 34 82 48 C86 64 88 88 76 102 C66 110 54 110 44 102 C32 88 34 64 38 48 Z" fill="#FFFFFF" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Big central pad -->
      <path d="M60 62 C50 62 44 70 48 80 C52 88 68 88 72 80 C76 70 70 62 60 62 Z" fill="#FB7185" stroke="#1E293B" stroke-width="2.5" />
      <!-- Toe pads -->
      <ellipse cx="40" cy="46" rx="6" ry="8" fill="#FB7185" stroke="#1E293B" stroke-width="2" />
      <ellipse cx="54" cy="40" rx="6" ry="8" fill="#FB7185" stroke="#1E293B" stroke-width="2" />
      <ellipse cx="68" cy="40" rx="6" ry="8" fill="#FB7185" stroke="#1E293B" stroke-width="2" />
      <ellipse cx="82" cy="46" rx="6" ry="8" fill="#FB7185" stroke="#1E293B" stroke-width="2" />
    `),
    defaultFill: '#FFFFFF',
    tags: ['gato', 'pata', 'huella', 'mascota', 'felino', 'kawaii', 'rosa']
  },
  {
    id: 'cartoon-animal-panda-cute',
    name: 'Osito Panda Tierno',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Black Ears -->
      <circle cx="34" cy="32" r="14" fill="#0F172A" stroke="#0F172A" stroke-width="2" />
      <circle cx="86" cy="32" r="14" fill="#0F172A" stroke="#0F172A" stroke-width="2" />
      <!-- Face -->
      <circle cx="60" cy="62" r="42" fill="#FFFFFF" stroke="#0F172A" stroke-width="4" />
      <!-- Black Eye Patches -->
      <ellipse cx="44" cy="58" rx="10" ry="13" fill="#0F172A" transform="rotate(-15 44 58)" />
      <ellipse cx="76" cy="58" rx="10" ry="13" fill="#0F172A" transform="rotate(15 76 58)" />
      <!-- White Pupils -->
      <circle cx="46" cy="56" r="3.5" fill="#FFFFFF" />
      <circle cx="74" cy="56" r="3.5" fill="#FFFFFF" />
      <!-- Nose & Mouth -->
      <ellipse cx="60" cy="72" rx="4.5" ry="3" fill="#0F172A" />
      <path d="M54 78 Q60 84 66 78" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <!-- Pink cheeks -->
      <circle cx="34" cy="74" r="5" fill="#FDA4AF" opacity="0.8" />
      <circle cx="86" cy="74" r="5" fill="#FDA4AF" opacity="0.8" />
    `),
    defaultFill: '#FFFFFF',
    tags: ['panda', 'oso', 'tierno', 'animal', 'kawaii', 'blanco y negro']
  },
  {
    id: 'cartoon-animal-shiba-dog',
    name: 'Perrito Shiba Inu Feliz',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Pointy Ears -->
      <polygon points="26,44 38,16 54,34" fill="#F59E0B" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round" />
      <polygon points="32,40 40,24 48,34" fill="#FFFFFF" />
      <polygon points="94,44 82,16 66,34" fill="#F59E0B" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round" />
      <polygon points="88,40 80,24 72,34" fill="#FFFFFF" />
      <!-- Shiba Head -->
      <circle cx="60" cy="62" r="40" fill="#F59E0B" stroke="#1E293B" stroke-width="4" />
      <!-- White muzzle & cheeks -->
      <path d="M30 68 C30 52 50 48 60 58 C70 48 90 52 90 68 C90 88 74 98 60 98 C46 98 30 88 30 68 Z" fill="#FFFFFF" />
      <!-- Cute Eyes -->
      <circle cx="44" cy="54" r="4.5" fill="#1E293B" />
      <circle cx="46" cy="52" r="1.5" fill="#FFFFFF" />
      <circle cx="76" cy="54" r="4.5" fill="#1E293B" />
      <circle cx="78" cy="52" r="1.5" fill="#FFFFFF" />
      <!-- Eyebrows dots -->
      <circle cx="44" cy="42" r="3" fill="#FFFFFF" />
      <circle cx="76" cy="42" r="3" fill="#FFFFFF" />
      <!-- Nose & Tongue -->
      <ellipse cx="60" cy="68" rx="4" ry="3" fill="#1E293B" />
      <path d="M56 74 Q60 84 64 74 Z" fill="#EF4444" stroke="#1E293B" stroke-width="1.5" />
    `),
    defaultFill: '#F59E0B',
    tags: ['perro', 'shiba', 'cachorro', 'doge', 'mascota', 'tierno', 'japones']
  },
  {
    id: 'cartoon-animal-bunny-ears',
    name: 'Conejo Saltando de Alegría',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Long Ears -->
      <ellipse cx="44" cy="30" rx="10" ry="24" fill="#FFFFFF" stroke="#1E293B" stroke-width="3.5" transform="rotate(-15 44 30)" />
      <ellipse cx="44" cy="30" rx="5" ry="16" fill="#F472B6" transform="rotate(-15 44 30)" />
      <ellipse cx="76" cy="30" rx="10" ry="24" fill="#FFFFFF" stroke="#1E293B" stroke-width="3.5" transform="rotate(15 76 30)" />
      <ellipse cx="76" cy="30" rx="5" ry="16" fill="#F472B6" transform="rotate(15 76 30)" />
      <!-- Bunny Head -->
      <circle cx="60" cy="72" r="34" fill="#FFFFFF" stroke="#1E293B" stroke-width="4" />
      <!-- Eyes smiling closed -->
      <path d="M46 68 Q50 62 54 68" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M66 68 Q70 62 74 68" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Nose & Mouth -->
      <polygon points="60,74 57,71 63,71" fill="#FB7185" />
      <path d="M54 78 Q60 84 66 78" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <!-- Whiskers -->
      <line x1="32" y1="72" x2="42" y2="74" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
      <line x1="32" y1="80" x2="42" y2="78" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
      <line x1="88" y1="72" x2="78" y2="74" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
      <line x1="88" y1="80" x2="78" y2="78" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
    `),
    defaultFill: '#FFFFFF',
    tags: ['conejo', 'bunny', 'pascua', 'tierno', 'orejas', 'blanco', 'kawaii']
  },
  {
    id: 'cartoon-animal-penguin-chic',
    name: 'Pingüino con Bufanda',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Body -->
      <ellipse cx="60" cy="64" rx="34" ry="42" fill="#0F172A" stroke="#0F172A" stroke-width="2" />
      <!-- Wings -->
      <ellipse cx="26" cy="68" rx="8" ry="20" fill="#0F172A" transform="rotate(25 26 68)" />
      <ellipse cx="94" cy="68" rx="8" ry="20" fill="#0F172A" transform="rotate(-25 94 68)" />
      <!-- White Belly -->
      <ellipse cx="60" cy="68" rx="24" ry="32" fill="#FFFFFF" />
      <!-- Scarf -->
      <path d="M38 56 Q60 62 82 56 L80 66 Q60 72 40 66 Z" fill="#EF4444" stroke="#1E293B" stroke-width="2" />
      <rect x="70" y="62" width="10" height="20" rx="3" fill="#EF4444" stroke="#1E293B" stroke-width="1.5" />
      <!-- Eyes -->
      <circle cx="50" cy="46" r="4" fill="#0F172A" />
      <circle cx="52" cy="44" r="1.5" fill="#FFFFFF" />
      <circle cx="70" cy="46" r="4" fill="#0F172A" />
      <circle cx="72" cy="44" r="1.5" fill="#FFFFFF" />
      <!-- Beak -->
      <polygon points="60,54 54,49 66,49" fill="#F59E0B" stroke="#1E293B" stroke-width="1.5" />
      <!-- Feet -->
      <ellipse cx="48" cy="106" rx="8" ry="4" fill="#F59E0B" stroke="#1E293B" stroke-width="2" />
      <ellipse cx="72" cy="106" rx="8" ry="4" fill="#F59E0B" stroke="#1E293B" stroke-width="2" />
    `),
    defaultFill: '#0F172A',
    tags: ['pinguino', 'bufanda', 'frio', 'antartida', 'ave', 'tierno', 'invierno']
  },
  {
    id: 'cartoon-animal-koala-tree',
    name: 'Koala Cariñoso',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Fluffy Big Ears -->
      <circle cx="30" cy="38" r="18" fill="#94A3B8" stroke="#1E293B" stroke-width="3.5" />
      <circle cx="30" cy="38" r="10" fill="#F8FAFC" />
      <circle cx="90" cy="38" r="18" fill="#94A3B8" stroke="#1E293B" stroke-width="3.5" />
      <circle cx="90" cy="38" r="10" fill="#F8FAFC" />
      <!-- Face -->
      <circle cx="60" cy="64" r="36" fill="#94A3B8" stroke="#1E293B" stroke-width="4" />
      <!-- Cute Eyes -->
      <circle cx="44" cy="56" r="4.5" fill="#1E293B" />
      <circle cx="46" cy="54" r="1.5" fill="#FFFFFF" />
      <circle cx="76" cy="56" r="4.5" fill="#1E293B" />
      <circle cx="78" cy="54" r="1.5" fill="#FFFFFF" />
      <!-- Big Black Koala Nose -->
      <ellipse cx="60" cy="68" rx="10" ry="16" fill="#0F172A" stroke="#1E293B" stroke-width="2" />
      <!-- Cheeks -->
      <circle cx="38" cy="74" r="4" fill="#FDA4AF" />
      <circle cx="82" cy="74" r="4" fill="#FDA4AF" />
    `),
    defaultFill: '#94A3B8',
    tags: ['koala', 'australia', 'tierno', 'orejas', 'gris', 'kawaii', 'oso']
  },
  {
    id: 'cartoon-animal-chick-egg',
    name: 'Pollito en Cascarón',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Chick Body -->
      <circle cx="60" cy="50" r="32" fill="#FDE047" stroke="#1E293B" stroke-width="3.5" />
      <!-- Little Wings -->
      <path d="M26 52 Q18 56 26 64" fill="#FACC15" stroke="#1E293B" stroke-width="3" />
      <path d="M94 52 Q102 56 94 64" fill="#FACC15" stroke="#1E293B" stroke-width="3" />
      <!-- Beak & Eyes -->
      <circle cx="48" cy="44" r="4" fill="#1E293B" />
      <circle cx="50" cy="42" r="1.5" fill="#FFFFFF" />
      <circle cx="72" cy="44" r="4" fill="#1E293B" />
      <circle cx="74" cy="42" r="1.5" fill="#FFFFFF" />
      <polygon points="60,54 53,48 67,48" fill="#F97316" stroke="#1E293B" stroke-width="1.5" />
      <!-- Broken Eggshell Bottom -->
      <path d="M26 70 L34 60 L44 70 L54 60 L64 70 L74 60 L84 70 L94 60 V76 C94 96 78 108 60 108 C42 108 26 96 26 76 Z" fill="#FFFFFF" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
    `),
    defaultFill: '#FDE047',
    tags: ['pollito', 'huevo', 'cascaron', 'bebe', 'amarillo', 'tierno', 'granja']
  },
  {
    id: 'cartoon-animal-fox-tail',
    name: 'Zorrito Astuto y Alegre',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Big Ears -->
      <polygon points="24,50 34,14 56,36" fill="#EA580C" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round" />
      <polygon points="32,44 38,24 50,36" fill="#1E293B" />
      <polygon points="96,50 86,14 64,36" fill="#EA580C" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round" />
      <polygon points="88,44 82,24 70,36" fill="#1E293B" />
      <!-- Fox Head -->
      <polygon points="60,98 22,54 98,54" fill="#EA580C" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- White Cheeks Mask -->
      <polygon points="60,98 22,54 44,54 60,76 76,54 98,54" fill="#FFFFFF" />
      <!-- Sleek Fox Eyes -->
      <path d="M38 52 Q46 48 52 54" stroke="#1E293B" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M82 52 Q74 48 68 54" stroke="#1E293B" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <!-- Black Nose Point -->
      <circle cx="60" cy="94" r="5" fill="#1E293B" />
    `),
    defaultFill: '#EA580C',
    tags: ['zorro', 'fox', 'astuto', 'bosque', 'tierno', 'naranja', 'animal']
  },
  {
    id: 'cartoon-animal-octopus-cute',
    name: 'Pulpito Rosado Curioso',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Round Head -->
      <path d="M28 60 C28 32 40 18 60 18 C80 18 92 32 92 60 C92 76 84 82 76 82 C68 82 68 76 60 76 C52 76 52 82 44 82 C36 82 28 76 28 60 Z" fill="#F43F5E" stroke="#1E293B" stroke-width="4" />
      <!-- Tentacles curly -->
      <path d="M32 78 Q22 96 32 104 Q40 98 42 82" fill="#F43F5E" stroke="#1E293B" stroke-width="3" />
      <path d="M48 80 Q44 100 54 104 Q60 98 58 80" fill="#F43F5E" stroke="#1E293B" stroke-width="3" />
      <path d="M64 80 Q62 100 72 104 Q78 98 74 80" fill="#F43F5E" stroke="#1E293B" stroke-width="3" />
      <path d="M80 78 Q90 96 82 104 Q72 98 76 82" fill="#F43F5E" stroke="#1E293B" stroke-width="3" />
      <!-- Big Manga Eyes -->
      <circle cx="46" cy="50" r="7" fill="#1E293B" />
      <circle cx="48" cy="47" r="3" fill="#FFFFFF" />
      <circle cx="74" cy="50" r="7" fill="#1E293B" />
      <circle cx="76" cy="47" r="3" fill="#FFFFFF" />
      <!-- Blush & mouth -->
      <circle cx="36" cy="58" r="4" fill="#FDA4AF" />
      <circle cx="84" cy="58" r="4" fill="#FDA4AF" />
      <ellipse cx="60" cy="62" rx="3" ry="4" fill="#881337" />
    `),
    defaultFill: '#F43F5E',
    tags: ['pulpo', 'mar', 'tentaculos', 'kawaii', 'rosa', 'oceano', 'tierno']
  },
  {
    id: 'cartoon-animal-dino-rawr',
    name: 'Dinosaurio Bebé Rawr',
    category: 'Stickers Cartoon',
    subCategory: 'Animalitos Tiernos',
    ...createCartoonSvg(`
      <!-- Spikes on back -->
      <polygon points="34,36 26,44 38,48" fill="#F59E0B" stroke="#1E293B" stroke-width="2.5" />
      <polygon points="28,52 18,60 30,66" fill="#F59E0B" stroke="#1E293B" stroke-width="2.5" />
      <polygon points="24,70 14,78 26,84" fill="#F59E0B" stroke="#1E293B" stroke-width="2.5" />
      <!-- Dino Body & Tail -->
      <path d="M40 32 C40 18 64 16 78 22 C92 28 98 42 90 56 C82 66 84 80 88 94 C76 96 66 94 58 86 C48 94 36 94 34 82 C30 68 34 50 40 32 Z" fill="#10B981" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Cute Eye -->
      <circle cx="76" cy="34" r="5" fill="#1E293B" />
      <circle cx="78" cy="32" r="2" fill="#FFFFFF" />
      <!-- Smile with tiny fang -->
      <path d="M72 46 Q80 52 86 44" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
      <polygon points="76,46 80,46 78,51" fill="#FFFFFF" stroke="#1E293B" stroke-width="1" />
      <!-- Cheek -->
      <circle cx="68" cy="46" r="4" fill="#6EE7B7" />
      <!-- Spots -->
      <circle cx="48" cy="52" r="4" fill="#047857" />
      <circle cx="56" cy="68" r="3.5" fill="#047857" />
    `),
    defaultFill: '#10B981',
    tags: ['dinosaurio', 'dino', 'rawr', 'verde', 'bebe', 'tierno', 'reptil']
  },

  // ==========================================
  // 3. COMIDA & SNACKS KAWAII (10 stickers)
  // ==========================================
  {
    id: 'cartoon-food-pizza-slice',
    name: 'Rebanada de Pizza Feliz',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Crust -->
      <path d="M26 24 Q60 12 94 24 L86 36 Q60 26 34 36 Z" fill="#D97706" stroke="#1E293B" stroke-width="3.5" />
      <!-- Pizza Body -->
      <polygon points="34,36 86,36 60,104" fill="#FBBF24" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Pepperonis -->
      <circle cx="48" cy="46" r="7" fill="#DC2626" stroke="#1E293B" stroke-width="2" />
      <circle cx="72" cy="52" r="6" fill="#DC2626" stroke="#1E293B" stroke-width="2" />
      <circle cx="58" cy="80" r="5.5" fill="#DC2626" stroke="#1E293B" stroke-width="2" />
      <!-- Cute Eyes -->
      <circle cx="52" cy="62" r="3.5" fill="#1E293B" />
      <circle cx="68" cy="62" r="3.5" fill="#1E293B" />
      <!-- Smile -->
      <path d="M56 68 Q60 74 64 68" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <circle cx="46" cy="66" r="2.5" fill="#F87171" />
      <circle cx="74" cy="66" r="2.5" fill="#F87171" />
    `),
    defaultFill: '#FBBF24',
    tags: ['pizza', 'comida', 'queso', 'snack', 'kawaii', 'delicioso', 'pepperoni']
  },
  {
    id: 'cartoon-food-burger-kingly',
    name: 'Hamburguesa Triple Delicia',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Top Bun -->
      <path d="M24 44 C24 22 96 22 96 44 Z" fill="#F59E0B" stroke="#1E293B" stroke-width="4" />
      <circle cx="42" cy="30" r="1.5" fill="#FEF3C7" />
      <circle cx="56" cy="26" r="1.5" fill="#FEF3C7" />
      <circle cx="70" cy="30" r="1.5" fill="#FEF3C7" />
      <circle cx="82" cy="36" r="1.5" fill="#FEF3C7" />
      <!-- Lettuce wavy -->
      <path d="M20 46 Q28 54 36 46 Q44 54 52 46 Q60 54 68 46 Q76 54 84 46 Q92 54 100 46" stroke="#10B981" stroke-width="5" stroke-linecap="round" fill="none" />
      <!-- Tomato Slice -->
      <rect x="22" y="52" width="76" height="8" rx="3" fill="#EF4444" stroke="#1E293B" stroke-width="2.5" />
      <!-- Cheese melting -->
      <polygon points="24,62 96,62 88,74 72,66 54,76 40,66 24,70" fill="#FACC15" stroke="#1E293B" stroke-width="2" />
      <!-- Meat Patty -->
      <rect x="20" y="68" width="80" height="14" rx="6" fill="#78350F" stroke="#1E293B" stroke-width="3" />
      <!-- Bottom Bun -->
      <path d="M24 84 H96 V92 C96 98 86 102 60 102 C34 102 24 98 24 92 Z" fill="#F59E0B" stroke="#1E293B" stroke-width="4" />
      <!-- Cute face on top bun -->
      <circle cx="48" cy="38" r="3" fill="#1E293B" />
      <circle cx="72" cy="38" r="3" fill="#1E293B" />
      <path d="M56 40 Q60 44 64 40" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#F59E0B',
    tags: ['hamburguesa', 'burger', 'fast food', 'queso', 'comida chatarra', 'tierno']
  },
  {
    id: 'cartoon-food-glazed-donut',
    name: 'Dona Glaseada con Chispas',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Donut Dough -->
      <circle cx="60" cy="60" r="46" fill="#FBBF24" stroke="#1E293B" stroke-width="4" />
      <!-- Pink Frosting -->
      <path d="M60 18 C82 18 98 34 98 60 C98 72 90 76 86 84 C82 92 72 96 60 96 C48 96 38 90 32 82 C26 74 22 70 22 60 C22 34 38 18 60 18 Z" fill="#EC4899" stroke="#1E293B" stroke-width="3" />
      <!-- Donut Hole -->
      <circle cx="60" cy="60" r="16" fill="#F8FAFC" stroke="#1E293B" stroke-width="4" />
      <!-- Sprinkles -->
      <rect x="36" y="32" width="8" height="3" rx="1.5" fill="#38BDF8" transform="rotate(30 36 32)" />
      <rect x="74" y="32" width="8" height="3" rx="1.5" fill="#FACC15" transform="rotate(-20 74 32)" />
      <rect x="80" y="64" width="8" height="3" rx="1.5" fill="#10B981" transform="rotate(45 80 64)" />
      <rect x="34" y="68" width="8" height="3" rx="1.5" fill="#F59E0B" transform="rotate(-40 34 68)" />
      <rect x="54" y="84" width="8" height="3" rx="1.5" fill="#A855F7" transform="rotate(15 54 84)" />
      <rect x="56" y="24" width="8" height="3" rx="1.5" fill="#FFFFFF" />
    `),
    defaultFill: '#EC4899',
    tags: ['dona', 'donut', 'dulce', 'postre', 'chispas', 'rosa', 'glaseado']
  },
  {
    id: 'cartoon-food-ice-cream-cone',
    name: 'Helado Doble Bola Festivo',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Waffle Cone -->
      <polygon points="34,60 86,60 60,112" fill="#D97706" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <line x1="44" y1="74" x2="74" y2="94" stroke="#B45309" stroke-width="2" />
      <line x1="52" y1="62" x2="68" y2="104" stroke="#B45309" stroke-width="2" />
      <line x1="76" y1="74" x2="46" y2="94" stroke="#B45309" stroke-width="2" />
      <!-- Scoop 1 (Chocolate/Mint) -->
      <circle cx="60" cy="54" r="26" fill="#34D399" stroke="#1E293B" stroke-width="4" />
      <!-- Scoop 2 (Strawberry) -->
      <circle cx="60" cy="34" r="22" fill="#FB7185" stroke="#1E293B" stroke-width="4" />
      <!-- Cherry on Top -->
      <circle cx="60" cy="14" r="7" fill="#DC2626" stroke="#1E293B" stroke-width="2" />
      <path d="M60 10 Q66 2 74 6" fill="none" stroke="#78350F" stroke-width="2" stroke-linecap="round" />
      <!-- Eyes on scoop -->
      <circle cx="52" cy="34" r="3" fill="#1E293B" />
      <circle cx="68" cy="34" r="3" fill="#1E293B" />
      <path d="M58 38 Q60 41 62 38" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#FB7185',
    tags: ['helado', 'cono', 'postre', 'verano', 'cereza', 'dulce', 'fresa']
  },
  {
    id: 'cartoon-food-boba-tea',
    name: 'Té Boba Bubble Tea Sonriente',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Big Straw -->
      <rect x="54" y="6" width="12" height="36" rx="3" fill="#A855F7" stroke="#1E293B" stroke-width="3" transform="rotate(-8 60 20)" />
      <!-- Cup Body -->
      <path d="M30 32 H90 L82 100 C82 106 74 110 60 110 C46 110 38 106 38 100 Z" fill="#FED7AA" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Lid -->
      <rect x="26" y="28" width="68" height="8" rx="4" fill="#F43F5E" stroke="#1E293B" stroke-width="3" />
      <!-- Tapioca Pearls -->
      <circle cx="48" cy="94" r="5" fill="#451A03" />
      <circle cx="60" cy="98" r="5" fill="#451A03" />
      <circle cx="72" cy="94" r="5" fill="#451A03" />
      <circle cx="54" cy="84" r="5" fill="#451A03" />
      <circle cx="66" cy="86" r="5" fill="#451A03" />
      <!-- Face -->
      <circle cx="48" cy="58" r="3.5" fill="#1E293B" />
      <circle cx="72" cy="58" r="3.5" fill="#1E293B" />
      <path d="M56 64 Q60 68 64 64" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <circle cx="42" cy="62" r="3" fill="#FB7185" />
      <circle cx="78" cy="62" r="3" fill="#FB7185" />
    `),
    defaultFill: '#FED7AA',
    tags: ['boba', 'bubble tea', 'te de perlas', 'bebida', 'kawaii', 'dulce']
  },
  {
    id: 'cartoon-food-sushi-nigiri',
    name: 'Sushi Salmón Amigable',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Rice Bed -->
      <rect x="22" y="52" width="76" height="34" rx="14" fill="#FFFFFF" stroke="#1E293B" stroke-width="4" />
      <!-- Salmon Fish Topping -->
      <path d="M16 48 C16 34 36 30 60 30 C84 30 104 34 104 48 C104 56 88 56 60 56 C32 56 16 56 16 48 Z" fill="#FB923C" stroke="#1E293B" stroke-width="3.5" />
      <!-- White salmon stripes -->
      <path d="M36 34 Q46 44 54 52" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <path d="M62 34 Q72 44 80 52" stroke="#FFF7ED" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <!-- Nori Seaweed Belt -->
      <rect x="52" y="30" width="16" height="58" fill="#1E293B" />
      <!-- Face on rice -->
      <circle cx="36" cy="66" r="3" fill="#1E293B" />
      <circle cx="46" cy="66" r="3" fill="#1E293B" />
      <path d="M40 72 Q42 75 44 72" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
      <circle cx="32" cy="70" r="2" fill="#FDA4AF" />
    `),
    defaultFill: '#FB923C',
    tags: ['sushi', 'salmon', 'nigiri', 'japones', 'comida', 'arroz', 'kawaii']
  },
  {
    id: 'cartoon-food-french-fries',
    name: 'Papas Fritas Crujientes',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Fries Sticks -->
      <rect x="36" y="16" width="8" height="40" rx="2" fill="#FACC15" stroke="#1E293B" stroke-width="2.5" transform="rotate(-10 36 16)" />
      <rect x="48" y="12" width="8" height="44" rx="2" fill="#FBBF24" stroke="#1E293B" stroke-width="2.5" />
      <rect x="60" y="10" width="8" height="46" rx="2" fill="#FACC15" stroke="#1E293B" stroke-width="2.5" transform="rotate(6 60 10)" />
      <rect x="72" y="18" width="8" height="38" rx="2" fill="#FBBF24" stroke="#1E293B" stroke-width="2.5" transform="rotate(15 72 18)" />
      <!-- Red Box -->
      <path d="M26 48 L34 106 H86 L94 48 Q60 56 26 48 Z" fill="#EF4444" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Yellow Arc emblem -->
      <circle cx="60" cy="76" r="14" fill="#FEF08A" stroke="#1E293B" stroke-width="2" />
      <circle cx="56" cy="74" r="2.5" fill="#1E293B" />
      <circle cx="64" cy="74" r="2.5" fill="#1E293B" />
      <path d="M58 78 Q60 82 62 78" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#EF4444',
    tags: ['papas', 'fritas', 'snack', 'fast food', 'crujiente', 'ketchup']
  },
  {
    id: 'cartoon-food-sweet-cupcake',
    name: 'Cupcake Festivo con Cereza',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Cup Base -->
      <polygon points="32,60 88,60 80,104 40,104" fill="#38BDF8" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round" />
      <line x1="48" y1="60" x2="52" y2="104" stroke="#0284C7" stroke-width="2" />
      <line x1="72" y1="60" x2="68" y2="104" stroke="#0284C7" stroke-width="2" />
      <!-- Swirly Frosting -->
      <path d="M26 60 C24 50 36 44 46 46 C48 34 66 32 74 42 C84 38 96 46 94 60 Z" fill="#F472B6" stroke="#1E293B" stroke-width="3.5" />
      <path d="M40 44 C42 28 78 28 80 44 Z" fill="#FB7185" />
      <!-- Cherry -->
      <circle cx="60" cy="24" r="7" fill="#DC2626" stroke="#1E293B" stroke-width="2" />
      <path d="M60 20 Q66 12 72 16" fill="none" stroke="#78350F" stroke-width="2" stroke-linecap="round" />
      <!-- Face on cup -->
      <circle cx="50" cy="80" r="3" fill="#1E293B" />
      <circle cx="70" cy="80" r="3" fill="#1E293B" />
      <path d="M56 86 Q60 90 64 86" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#F472B6',
    tags: ['cupcake', 'pastel', 'muffin', 'dulce', 'reposteria', 'fiesta', 'cereza']
  },
  {
    id: 'cartoon-food-avocado-fit',
    name: 'Aguacate Palta Entrenando',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Avocado Skin & Flesh -->
      <path d="M60 16 C42 16 30 32 30 54 C30 78 40 104 60 104 C80 104 90 78 90 54 C90 32 78 16 60 16 Z" fill="#A7F3D0" stroke="#065F46" stroke-width="5" stroke-linejoin="round" />
      <!-- Dark Seed Center -->
      <circle cx="60" cy="70" r="18" fill="#78350F" stroke="#1E293B" stroke-width="3" />
      <circle cx="54" cy="64" r="3" fill="#A16207" />
      <!-- Cute Eyes above seed -->
      <circle cx="50" cy="42" r="4" fill="#1E293B" />
      <circle cx="52" cy="40" r="1.5" fill="#FFFFFF" />
      <circle cx="70" cy="42" r="4" fill="#1E293B" />
      <circle cx="72" cy="40" r="1.5" fill="#FFFFFF" />
      <!-- Happy Open Smile -->
      <path d="M54 50 Q60 56 66 50" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <!-- Cheeks -->
      <circle cx="42" cy="48" r="3" fill="#34D399" />
      <circle cx="78" cy="48" r="3" fill="#34D399" />
    `),
    defaultFill: '#A7F3D0',
    tags: ['aguacate', 'palta', 'saludable', 'fit', 'verde', 'kawaii', 'comida']
  },
  {
    id: 'cartoon-food-popcorn-cinema',
    name: 'Caja de Palomitas de Maíz',
    category: 'Stickers Cartoon',
    subCategory: 'Comida & Snacks Kawaii',
    ...createCartoonSvg(`
      <!-- Puffy Popcorns -->
      <circle cx="44" cy="30" r="12" fill="#FEF08A" stroke="#1E293B" stroke-width="2.5" />
      <circle cx="60" cy="22" r="13" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5" />
      <circle cx="76" cy="30" r="12" fill="#FEF08A" stroke="#1E293B" stroke-width="2.5" />
      <circle cx="52" cy="34" r="10" fill="#FFFFFF" />
      <circle cx="68" cy="34" r="10" fill="#FEF08A" />
      <!-- Popcorn Box -->
      <polygon points="28,44 92,44 82,106 38,106" fill="#FFFFFF" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Red Stripes -->
      <polygon points="40,44 48,44 46,106 40,106" fill="#EF4444" />
      <polygon points="56,44 64,44 62,106 56,106" fill="#EF4444" />
      <polygon points="72,44 80,44 76,106 72,106" fill="#EF4444" />
      <!-- Center Emblem with face -->
      <circle cx="60" cy="72" r="14" fill="#FACC15" stroke="#1E293B" stroke-width="2" />
      <circle cx="55" cy="70" r="2.5" fill="#1E293B" />
      <circle cx="65" cy="70" r="2.5" fill="#1E293B" />
      <path d="M57 76 Q60 79 63 76" stroke="#1E293B" stroke-width="1.5" stroke-linecap="round" fill="none" />
    `),
    defaultFill: '#FFFFFF',
    tags: ['palomitas', 'popcorn', 'cine', 'pelicula', 'snack', 'maiz', 'tierno']
  },

  // ==========================================
  // 4. CÓMIC & ONOMATOPEYAS (10 stickers)
  // ==========================================
  {
    id: 'cartoon-comic-pow-burst',
    name: 'Bocadillo Explosivo POW!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <!-- Explosion Back -->
      <polygon points="60,6 74,26 98,16 94,40 116,48 102,68 116,88 92,88 88,112 68,98 52,114 44,92 20,98 26,76 4,64 24,48 14,26 38,32 46,8" fill="#FACC15" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Inner comic bubble -->
      <polygon points="60,18 70,32 88,24 84,42 102,48 90,64 100,80 82,80 78,98 62,88 50,100 44,84 26,88 30,70 12,60 28,48 20,32 38,36" fill="#EF4444" />
      <!-- POW Text -->
      <text x="60" y="68" fill="#FFFFFF" font-size="24" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" stroke="#1E293B" stroke-width="3" paint-order="stroke fill" letter-spacing="1">POW!</text>
    `),
    defaultFill: '#FACC15',
    tags: ['pow', 'comic', 'explosion', 'golpe', 'superheroe', 'bocadillo', 'impacto']
  },
  {
    id: 'cartoon-comic-wow-bubble',
    name: 'Nube de Asombro WOW!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <!-- Pop Star Bubble -->
      <polygon points="60,10 75,28 98,22 96,46 116,58 100,76 112,98 88,96 80,118 60,104 40,118 32,96 8,98 20,76 4,58 24,46 22,22 45,28" fill="#38BDF8" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <polygon points="60,20 72,34 90,30 88,50 104,60 90,74 100,90 80,90 74,106 60,94 46,106 40,90 20,90 30,74 16,60 32,50 30,30 48,34" fill="#F59E0B" />
      <!-- WOW Text -->
      <text x="60" y="68" fill="#FFFFFF" font-size="23" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" stroke="#1E293B" stroke-width="3.5" paint-order="stroke fill" letter-spacing="1.5">WOW!</text>
    `),
    defaultFill: '#38BDF8',
    tags: ['wow', 'asombro', 'increible', 'comic', 'onomatopeya', 'bocadillo', 'pop']
  },
  {
    id: 'cartoon-comic-boom-dynamite',
    name: 'Explosión BOOM!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <!-- Dynamic burst spikes -->
      <polygon points="60,4 76,28 104,14 96,44 118,60 94,76 112,102 82,96 70,118 52,98 34,116 30,88 4,92 20,68 2,44 30,40 24,14 50,26" fill="#EA580C" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Center white-yellow flash -->
      <circle cx="60" cy="62" r="32" fill="#FEF08A" stroke="#1E293B" stroke-width="2.5" />
      <!-- BOOM text -->
      <text x="60" y="70" fill="#DC2626" font-size="21" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" stroke="#1E293B" stroke-width="3" paint-order="stroke fill" letter-spacing="1">BOOM!</text>
    `),
    defaultFill: '#EA580C',
    tags: ['boom', 'explosion', 'comic', 'bomba', 'fuerte', 'dinamita', 'choque']
  },
  {
    id: 'cartoon-comic-speech-yay',
    name: 'Globo de Diálogo YAY!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <!-- Rounded Speech Bubble with tail -->
      <path d="M20 28 C20 16 36 12 60 12 C84 12 100 16 100 28 C100 48 90 64 74 64 L68 84 L52 64 C30 64 20 50 20 28 Z" fill="#A855F7" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <text x="60" y="44" fill="#FDE047" font-size="20" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" stroke="#1E293B" stroke-width="2.5" paint-order="stroke fill" letter-spacing="2">YAY!</text>
      <!-- Confetti specks -->
      <circle cx="28" cy="80" r="3" fill="#F43F5E" />
      <circle cx="86" cy="82" r="3" fill="#38BDF8" />
      <polygon points="90,70 94,76 88,74" fill="#FACC15" />
    `),
    defaultFill: '#A855F7',
    tags: ['yay', 'alegria', 'celebracion', 'globo', 'dialogo', 'comic', 'exito']
  },
  {
    id: 'cartoon-comic-oops-splat',
    name: 'Mancha Sorpresa OOPS!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <!-- Liquid Splat Shape -->
      <path d="M60 16 C76 14 90 26 94 42 C98 58 114 66 106 82 C98 98 84 94 74 104 C64 114 46 112 36 100 C26 88 10 94 14 74 C18 54 26 50 28 36 C30 22 44 18 60 16 Z" fill="#EC4899" stroke="#1E293B" stroke-width="4" />
      <!-- Splat drops -->
      <circle cx="106" cy="34" r="5" fill="#EC4899" stroke="#1E293B" stroke-width="2" />
      <circle cx="22" cy="24" r="4" fill="#EC4899" stroke="#1E293B" stroke-width="2" />
      <circle cx="20" cy="98" r="4.5" fill="#EC4899" stroke="#1E293B" stroke-width="2" />
      <!-- OOPS Text -->
      <text x="60" y="68" fill="#FFFFFF" font-size="20" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" stroke="#1E293B" stroke-width="3" paint-order="stroke fill" letter-spacing="1">OOPS!</text>
    `),
    defaultFill: '#EC4899',
    tags: ['oops', 'ups', 'mancha', 'error', 'comic', 'rosa', 'divertido']
  },
  {
    id: 'cartoon-comic-omg-star',
    name: 'Insignia Exclamación OMG!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <circle cx="60" cy="60" r="48" fill="#10B981" stroke="#1E293B" stroke-width="4" />
      <circle cx="60" cy="60" r="40" fill="#34D399" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="4 3" />
      <!-- OMG Text -->
      <text x="60" y="66" fill="#FEF08A" font-size="24" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" stroke="#064E3B" stroke-width="3.5" paint-order="stroke fill" letter-spacing="1.5">OMG!</text>
      <!-- Little sparkle -->
      <polygon points="60,20 62,26 68,26 63,29 65,35 60,31 55,35 57,29 52,26 58,26" fill="#FFFFFF" />
      <polygon points="60,82 62,88 68,88 63,91 65,97 60,93 55,97 57,91 52,88 58,88" fill="#FFFFFF" />
    `),
    defaultFill: '#10B981',
    tags: ['omg', 'oh my god', 'sorpresa', 'verde', 'exclamacion', 'comic', 'pop']
  },
  {
    id: 'cartoon-comic-zap-lightning',
    name: 'Rayo Eléctrico ZAP!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <!-- Electric Flash -->
      <polygon points="68,8 30,58 56,58 42,112 90,48 64,48" fill="#FACC15" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Action speed lines -->
      <line x1="18" y1="36" x2="28" y2="44" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
      <line x1="14" y1="56" x2="26" y2="60" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
      <line x1="88" y1="20" x2="98" y2="28" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
      <line x1="92" y1="76" x2="104" y2="82" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
      <!-- ZAP pill badge -->
      <rect x="24" y="44" width="72" height="24" rx="6" fill="#EF4444" stroke="#1E293B" stroke-width="2.5" />
      <text x="60" y="62" fill="#FFFFFF" font-size="16" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" letter-spacing="2">ZAP!</text>
    `),
    defaultFill: '#FACC15',
    tags: ['zap', 'rayo', 'electricidad', 'energia', 'comic', 'trueno', 'poder']
  },
  {
    id: 'cartoon-comic-cool-badge',
    name: 'Medalla Retro COOL!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <polygon points="60,10 74,18 90,14 98,30 114,36 112,54 120,68 110,82 110,100 92,104 84,118 68,112 54,120 44,108 26,110 24,92 8,86 14,70 4,54 16,42 12,24 28,20 36,6 52,12" fill="#6366F1" stroke="#1E293B" stroke-width="3.5" />
      <circle cx="62" cy="62" r="36" fill="#FDE047" stroke="#1E293B" stroke-width="3" />
      <text x="62" y="70" fill="#1E293B" font-size="18" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" letter-spacing="1">COOL</text>
    `),
    defaultFill: '#6366F1',
    tags: ['cool', 'genial', 'retro', 'insignia', 'vintage', 'comic', 'chido']
  },
  {
    id: 'cartoon-comic-yes-thumbs',
    name: 'Pulgar Arriba YES!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <circle cx="60" cy="60" r="48" fill="#F59E0B" stroke="#1E293B" stroke-width="4" />
      <!-- Giant Thumbs Up Cartoon Glove -->
      <path d="M44 80 H68 C76 80 82 74 82 66 C82 62 80 58 76 56 C80 54 82 50 82 46 C82 42 78 38 74 38 C76 34 76 30 72 26 C68 22 62 22 58 26 L56 34 L56 16 C56 10 48 8 44 14 L36 38 L32 46 V74 C32 78 36 80 44 80 Z" fill="#FFFFFF" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round" />
      <!-- Cuff -->
      <rect x="24" y="58" width="12" height="24" rx="4" fill="#EF4444" stroke="#1E293B" stroke-width="2.5" />
      <!-- YES bubble -->
      <rect x="62" y="68" width="44" height="20" rx="6" fill="#10B981" stroke="#1E293B" stroke-width="2" />
      <text x="84" y="83" fill="#FFFFFF" font-size="13" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle">YES!</text>
    `),
    defaultFill: '#F59E0B',
    tags: ['yes', 'si', 'pulgar', 'like', 'guante', 'aprobado', 'bien']
  },
  {
    id: 'cartoon-comic-action-starburst',
    name: 'Destello Estelar POP!',
    category: 'Stickers Cartoon',
    subCategory: 'Cómic & Onomatopeyas',
    ...createCartoonSvg(`
      <!-- 12-point sharp starburst -->
      <polygon points="60,8 68,36 96,20 84,48 112,56 86,72 104,96 74,92 68,118 52,94 30,110 38,82 12,80 32,58 10,40 38,38 34,10 52,32" fill="#F43F5E" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Inner star -->
      <polygon points="60,24 65,42 82,32 75,50 92,56 76,66 86,82 68,78 64,96 54,80 38,90 44,72 26,70 40,56 26,44 44,44 42,26 54,38" fill="#FDE047" />
      <text x="60" y="66" fill="#1E293B" font-size="19" font-family="Impact, sans-serif" font-weight="900" text-anchor="middle" letter-spacing="1">POP!</text>
    `),
    defaultFill: '#F43F5E',
    tags: ['pop', 'destello', 'estrella', 'brillo', 'comic', 'explosion', 'accion']
  },

  // ==========================================
  // 5. OBJETOS & MAGIA FUN (10 stickers)
  // ==========================================
  {
    id: 'cartoon-obj-magic-wand',
    name: 'Varita Mágica de Estrellas',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Magic Sparkles -->
      <polygon points="34,16 36,22 42,22 37,25 39,31 34,27 29,31 31,25 26,22 32,22" fill="#FACC15" />
      <polygon points="82,20 84,24 88,24 85,27 86,31 82,28 78,31 79,27 76,24 80,24" fill="#38BDF8" />
      <polygon points="26,56 28,60 32,60 29,63 30,67 26,64 22,67 23,63 20,60 24,60" fill="#EC4899" />
      <!-- Wand Stick -->
      <rect x="52" y="36" width="12" height="74" rx="4" fill="#38BDF8" stroke="#1E293B" stroke-width="3.5" transform="rotate(-35 58 73)" />
      <rect x="36" y="44" width="12" height="16" rx="2" fill="#F8FAFC" stroke="#1E293B" stroke-width="2" transform="rotate(-35 42 52)" />
      <!-- Star on Wand Tip -->
      <polygon points="40,24 45,34 56,34 47,40 51,51 40,44 29,51 33,40 24,34 35,34" fill="#FACC15" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round" />
      <circle cx="40" cy="38" r="4" fill="#FFFFFF" />
    `),
    defaultFill: '#FACC15',
    tags: ['varita', 'magia', 'estrella', 'hechizo', 'fantasia', 'hada', 'brillos']
  },
  {
    id: 'cartoon-obj-retro-cassette',
    name: 'Casete Retro Años 80',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Cassette Body -->
      <rect x="14" y="24" width="92" height="66" rx="8" fill="#F43F5E" stroke="#1E293B" stroke-width="4" />
      <!-- Label Paper -->
      <rect x="22" y="32" width="76" height="42" rx="4" fill="#FEF08A" stroke="#1E293B" stroke-width="2.5" />
      <line x1="28" y1="40" x2="88" y2="40" stroke="#EF4444" stroke-width="2" />
      <line x1="28" y1="46" x2="70" y2="46" stroke="#94A3B8" stroke-width="1.5" />
      <!-- Center Reels Window -->
      <rect x="34" y="50" width="52" height="20" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="2" />
      <circle cx="46" cy="60" r="6" fill="#1E293B" />
      <circle cx="46" cy="60" r="2.5" fill="#FFFFFF" />
      <circle cx="74" cy="60" r="6" fill="#1E293B" />
      <circle cx="74" cy="60" r="2.5" fill="#FFFFFF" />
      <!-- Bottom trapezoid notches -->
      <polygon points="26,90 32,80 88,80 94,90" fill="#BE123C" stroke="#1E293B" stroke-width="2.5" />
      <circle cx="38" cy="85" r="2.5" fill="#FFFFFF" />
      <circle cx="82" cy="85" r="2.5" fill="#FFFFFF" />
    `),
    defaultFill: '#F43F5E',
    tags: ['casete', 'cassette', 'musica', 'retro', 'vintage', '80s', 'mixtape']
  },
  {
    id: 'cartoon-obj-space-rocket',
    name: 'Cohete Espacial Despegando',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Flame Exhaust -->
      <polygon points="52,94 60,118 68,94" fill="#EF4444" />
      <polygon points="56,94 60,110 64,94" fill="#FACC15" />
      <!-- Left Wing -->
      <path d="M42 74 L24 92 L42 90 Z" fill="#EF4444" stroke="#1E293B" stroke-width="3" stroke-linejoin="round" />
      <!-- Right Wing -->
      <path d="M78 74 L96 92 L78 90 Z" fill="#EF4444" stroke="#1E293B" stroke-width="3" stroke-linejoin="round" />
      <!-- Rocket Body -->
      <path d="M60 12 C44 26 40 60 42 94 H78 C80 60 76 26 60 12 Z" fill="#F8FAFC" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- Nose Cone -->
      <path d="M60 12 C52 20 48 30 46 38 H74 C72 30 68 20 60 12 Z" fill="#EF4444" />
      <!-- Porthole Window -->
      <circle cx="60" cy="56" r="11" fill="#38BDF8" stroke="#1E293B" stroke-width="3" />
      <circle cx="58" cy="53" r="3" fill="#FFFFFF" />
    `),
    defaultFill: '#F8FAFC',
    tags: ['cohete', 'espacio', 'nave', 'despegue', 'universo', 'aventura', 'volar']
  },
  {
    id: 'cartoon-obj-ufo-alien',
    name: 'Platillo OVNI con Marcianito',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Glass Dome -->
      <path d="M40 50 C40 30 80 30 80 50 Z" fill="#67E8F9" stroke="#1E293B" stroke-width="3.5" />
      <!-- Little Green Alien -->
      <circle cx="60" cy="44" r="8" fill="#10B981" />
      <ellipse cx="58" cy="43" rx="2" ry="3" fill="#1E293B" />
      <ellipse cx="62" cy="43" rx="2" ry="3" fill="#1E293B" />
      <!-- Saucer Metallic Base -->
      <ellipse cx="60" cy="62" rx="46" ry="16" fill="#A855F7" stroke="#1E293B" stroke-width="4" />
      <ellipse cx="60" cy="64" rx="34" ry="8" fill="#9333EA" />
      <!-- Glowing Lights -->
      <circle cx="30" cy="64" r="3.5" fill="#FDE047" stroke="#1E293B" stroke-width="1.5" />
      <circle cx="45" cy="68" r="3.5" fill="#FDE047" stroke="#1E293B" stroke-width="1.5" />
      <circle cx="60" cy="69" r="3.5" fill="#FDE047" stroke="#1E293B" stroke-width="1.5" />
      <circle cx="75" cy="68" r="3.5" fill="#FDE047" stroke="#1E293B" stroke-width="1.5" />
      <circle cx="90" cy="64" r="3.5" fill="#FDE047" stroke="#1E293B" stroke-width="1.5" />
      <!-- Tractor Beam Rays -->
      <polygon points="46,78 28,108 92,108 74,78" fill="#FDE047" opacity="0.3" />
    `),
    defaultFill: '#A855F7',
    tags: ['ovni', 'ufo', 'alien', 'extraterrestre', 'platillo', 'espacio', 'galaxia']
  },
  {
    id: 'cartoon-obj-gamepad-fun',
    name: 'Control Gamer Retro Fun',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Controller Body -->
      <path d="M28 38 C16 38 10 50 12 76 C14 96 30 102 42 90 L52 80 H68 L78 90 C90 102 106 96 108 76 C110 50 104 38 92 38 Z" fill="#3B82F6" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
      <!-- D-Pad Plus -->
      <rect x="28" y="56" width="18" height="6" rx="2" fill="#1E293B" />
      <rect x="34" y="50" width="6" height="18" rx="2" fill="#1E293B" />
      <!-- Action Buttons -->
      <circle cx="80" cy="54" r="4.5" fill="#EF4444" stroke="#1E293B" stroke-width="1.5" />
      <circle cx="90" cy="62" r="4.5" fill="#FACC15" stroke="#1E293B" stroke-width="1.5" />
      <circle cx="72" cy="62" r="4.5" fill="#10B981" stroke="#1E293B" stroke-width="1.5" />
      <circle cx="82" cy="70" r="4.5" fill="#A855F7" stroke="#1E293B" stroke-width="1.5" />
      <!-- Center Screen / Face -->
      <rect x="50" y="48" width="20" height="12" rx="3" fill="#1E293B" />
      <circle cx="55" cy="54" r="1.5" fill="#34D399" />
      <circle cx="65" cy="54" r="1.5" fill="#34D399" />
    `),
    defaultFill: '#3B82F6',
    tags: ['control', 'gamepad', 'gamer', 'videojuegos', 'gaming', 'arcade', 'play']
  },
  {
    id: 'cartoon-obj-magic-potion',
    name: 'Poción Mágica Burbujeante',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Cork Stopper -->
      <polygon points="52,24 68,24 65,34 55,34" fill="#D97706" stroke="#1E293B" stroke-width="2.5" />
      <!-- Bottle Neck -->
      <rect x="54" y="34" width="12" height="12" fill="#BAE6FD" stroke="#1E293B" stroke-width="3" />
      <!-- Spherical Flask -->
      <circle cx="60" cy="74" r="32" fill="#E0F2FE" stroke="#1E293B" stroke-width="4" />
      <!-- Purple Magic Liquid -->
      <path d="M34 76 C34 92 46 104 60 104 C74 104 86 92 86 76 C86 72 78 74 72 70 C66 66 54 74 48 70 C42 66 34 72 34 76 Z" fill="#C084FC" />
      <!-- Floating bubbles -->
      <circle cx="50" cy="84" r="4" fill="#FFFFFF" opacity="0.8" />
      <circle cx="68" cy="80" r="3" fill="#FFFFFF" opacity="0.8" />
      <circle cx="58" cy="92" r="2.5" fill="#FFFFFF" opacity="0.8" />
      <!-- Stars of magic -->
      <polygon points="60,10 62,14 66,14 63,16 64,20 60,18 56,20 57,16 54,14 58,14" fill="#FACC15" />
      <polygon points="84,40 85,43 88,43 86,45 87,48 84,46 81,48 82,45 80,43 83,43" fill="#38BDF8" />
    `),
    defaultFill: '#C084FC',
    tags: ['pocion', 'magia', 'frasco', 'alquimia', 'burbujas', 'fantasia', 'hechizo']
  },
  {
    id: 'cartoon-obj-rainbow-arch',
    name: 'Arcoíris Mágico con Nubes',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Rainbow Arcs -->
      <path d="M24 74 A 36 36 0 0 1 96 74" fill="none" stroke="#EF4444" stroke-width="7" stroke-linecap="round" />
      <path d="M30 74 A 30 30 0 0 1 90 74" fill="none" stroke="#F59E0B" stroke-width="7" stroke-linecap="round" />
      <path d="M36 74 A 24 24 0 0 1 84 74" fill="none" stroke="#FACC15" stroke-width="7" stroke-linecap="round" />
      <path d="M42 74 A 18 18 0 0 1 78 74" fill="none" stroke="#10B981" stroke-width="7" stroke-linecap="round" />
      <path d="M48 74 A 12 12 0 0 1 72 74" fill="none" stroke="#3B82F6" stroke-width="7" stroke-linecap="round" />
      <!-- Left Puffy Cloud -->
      <circle cx="24" cy="74" r="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="3" />
      <circle cx="34" cy="78" r="10" fill="#FFFFFF" stroke="#1E293B" stroke-width="3" />
      <circle cx="16" cy="80" r="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="3" />
      <!-- Right Puffy Cloud -->
      <circle cx="96" cy="74" r="12" fill="#FFFFFF" stroke="#1E293B" stroke-width="3" />
      <circle cx="86" cy="78" r="10" fill="#FFFFFF" stroke="#1E293B" stroke-width="3" />
      <circle cx="104" cy="80" r="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="3" />
      <!-- Sparkle stars -->
      <polygon points="60,20 62,24 66,24 63,27 64,31 60,28 56,31 57,27 54,24 58,24" fill="#FACC15" />
    `),
    defaultFill: '#FACC15',
    tags: ['arcoiris', 'rainbow', 'colores', 'cielo', 'nubes', 'magia', 'fantasia']
  },
  {
    id: 'cartoon-obj-skateboard-cruiser',
    name: 'Patineta Skateboard Callejera',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <g transform="rotate(-20 60 60)">
        <!-- Wheels -->
        <circle cx="32" cy="76" r="8" fill="#FACC15" stroke="#1E293B" stroke-width="3" />
        <circle cx="88" cy="76" r="8" fill="#FACC15" stroke="#1E293B" stroke-width="3" />
        <rect x="28" y="66" width="8" height="6" fill="#94A3B8" stroke="#1E293B" stroke-width="2" />
        <rect x="84" y="66" width="8" height="6" fill="#94A3B8" stroke="#1E293B" stroke-width="2" />
        <!-- Skateboard Deck -->
        <path d="M12 56 Q16 48 30 52 L90 52 Q104 48 108 56 Q106 66 90 64 L30 64 Q14 66 12 56 Z" fill="#3B82F6" stroke="#1E293B" stroke-width="4" stroke-linejoin="round" />
        <!-- Deck Flame Graphic -->
        <path d="M26 58 Q44 54 58 58 Q72 54 84 58 Q66 62 50 60 Z" fill="#EF4444" />
        <!-- Grip bolts -->
        <circle cx="34" cy="56" r="1.5" fill="#FFFFFF" />
        <circle cx="34" cy="60" r="1.5" fill="#FFFFFF" />
        <circle cx="86" cy="56" r="1.5" fill="#FFFFFF" />
        <circle cx="86" cy="60" r="1.5" fill="#FFFFFF" />
      </g>
    `),
    defaultFill: '#3B82F6',
    tags: ['skate', 'patineta', 'urbano', 'calle', 'deporte', 'ruedas', 'cool']
  },
  {
    id: 'cartoon-obj-gift-box-surprise',
    name: 'Caja de Regalo Sorpresa',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Box Body -->
      <rect x="24" y="48" width="72" height="58" rx="8" fill="#38BDF8" stroke="#1E293B" stroke-width="4" />
      <!-- Yellow Ribbon Cross -->
      <rect x="54" y="48" width="12" height="58" fill="#FACC15" stroke="#1E293B" stroke-width="2" />
      <rect x="24" y="72" width="72" height="12" fill="#FACC15" stroke="#1E293B" stroke-width="2" />
      <!-- Box Lid -->
      <rect x="18" y="40" width="84" height="14" rx="4" fill="#0284C7" stroke="#1E293B" stroke-width="3.5" />
      <rect x="54" y="40" width="12" height="14" fill="#FACC15" stroke="#1E293B" stroke-width="2" />
      <!-- Ribbon Bow -->
      <path d="M42 26 C30 26 30 40 46 38 C56 36 58 32 58 38 C58 32 64 36 74 38 C90 40 90 26 78 26 C68 26 62 34 60 38 C58 34 52 26 42 26 Z" fill="#FACC15" stroke="#1E293B" stroke-width="3" stroke-linejoin="round" />
      <!-- Polka Dots on Box -->
      <circle cx="36" cy="62" r="3" fill="#BAE6FD" />
      <circle cx="84" cy="62" r="3" fill="#BAE6FD" />
      <circle cx="36" cy="94" r="3" fill="#BAE6FD" />
      <circle cx="84" cy="94" r="3" fill="#BAE6FD" />
    `),
    defaultFill: '#38BDF8',
    tags: ['regalo', 'sorpresa', 'cumpleaños', 'fiesta', 'navidad', 'caja', 'lazo']
  },
  {
    id: 'cartoon-obj-headphones-music',
    name: 'Auriculares Dj con Ritmo',
    category: 'Stickers Cartoon',
    subCategory: 'Objetos & Magia Fun',
    ...createCartoonSvg(`
      <!-- Headband Arc -->
      <path d="M26 68 C24 32 96 32 94 68" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" />
      <path d="M26 68 C24 32 96 32 94 68" fill="none" stroke="#A855F7" stroke-width="4" stroke-linecap="round" />
      <!-- Left Ear Cup -->
      <rect x="14" y="58" width="18" height="34" rx="8" fill="#EC4899" stroke="#1E293B" stroke-width="3.5" />
      <rect x="18" y="64" width="6" height="22" rx="3" fill="#FDE047" />
      <!-- Right Ear Cup -->
      <rect x="88" y="58" width="18" height="34" rx="8" fill="#EC4899" stroke="#1E293B" stroke-width="3.5" />
      <rect x="96" y="64" width="6" height="22" rx="3" fill="#FDE047" />
      <!-- Music Musical Notes -->
      <path d="M52 68 V52 L68 48 V64" stroke="#10B981" stroke-width="3" stroke-linecap="round" fill="none" />
      <circle cx="48" cy="68" r="4.5" fill="#10B981" />
      <circle cx="64" cy="64" r="4.5" fill="#10B981" />
    `),
    defaultFill: '#EC4899',
    tags: ['auriculares', 'audifonos', 'musica', 'dj', 'ritmo', 'sonido', 'cancion']
  }
];
