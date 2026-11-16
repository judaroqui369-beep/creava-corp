// 50 Varied Pixel Art Stickers for Graphic Elements Library
// Handcrafted with 16x16 / 12x12 retro grids and crisp SVG rendering

export interface PixelArtStickerItem {
  id: string;
  name: string;
  category: 'Stickers Pixel Art';
  subCategory: 'Arcade & Gaming' | 'Comida & Bebida' | 'Naturaleza & Clima' | 'Animales & Criaturas' | 'Objetos & Pop' | 'Expresiones & Badges';
  svgContent: string;
  dataUri: string;
  viewBox: string;
  defaultFill: string;
  tags: string[];
}

function buildPixelSvg(
  palette: Record<string, string>,
  grid: string[],
  fixedWidth = 16,
  fixedHeight = 16
): { svgContent: string; dataUri: string; viewBox: string } {
  const height = fixedHeight;
  const width = fixedWidth;
  const rects: string[] = [];

  for (let y = 0; y < height; y++) {
    const rawRow = grid[y] || '';
    const row = rawRow.padEnd(width, '.');
    let startX = -1;
    let currentColor = '';

    for (let x = 0; x < width; x++) {
      const char = row[x] || '.';
      const color = (char === '.' || char === ' ') ? '' : (palette[char] || '');

      if (color !== currentColor) {
        if (currentColor && startX !== -1) {
          const runLen = x - startX;
          rects.push(`<rect x="${startX}" y="${y}" width="${runLen}" height="1" fill="${currentColor}"/>`);
        }
        currentColor = color;
        startX = color ? x : -1;
      }
    }

    if (currentColor && startX !== -1) {
      const runLen = width - startX;
      rects.push(`<rect x="${startX}" y="${y}" width="${runLen}" height="1" fill="${currentColor}"/>`);
    }
  }

  const viewBox = `0 0 ${width} ${height}`;
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%" shape-rendering="crispEdges">${rects.join('')}</svg>`;
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;

  return { svgContent, dataUri, viewBox };
}

function createSticker(
  id: string,
  name: string,
  subCategory: PixelArtStickerItem['subCategory'],
  defaultFill: string,
  tags: string[],
  palette: Record<string, string>,
  grid: string[]
): PixelArtStickerItem {
  const { svgContent, dataUri, viewBox } = buildPixelSvg(palette, grid);
  return {
    id,
    name,
    category: 'Stickers Pixel Art',
    subCategory,
    svgContent,
    dataUri,
    viewBox,
    defaultFill,
    tags: [...tags, 'pixel', 'pixel art', '8-bit', 'retro', 'sticker']
  };
}

export const PIXEL_ART_STICKERS: PixelArtStickerItem[] = [
  // ==========================================
  // 1. ARCADE & GAMING (10 stickers)
  // ==========================================
  createSticker(
    'pixel-heart-full',
    'Corazón 8-Bit Vida',
    'Arcade & Gaming',
    '#EF233C',
    ['corazon', 'vida', 'hp', 'amor', 'salud'],
    {
      k: '#1E1014', // outline
      r: '#EF233C', // red
      l: '#FF758F', // light red
      w: '#FFFFFF', // shine
      d: '#9B111E'  // dark red shadow
    },
    [
      '..kkkk....kkkk..',
      '.kwwwwk..kwwwwk.',
      'kwwrrrwkkkrrrrrk',
      'kwrllllkrrlllllk',
      'kwrlrrrrkrrrrrlk',
      'krrlrrrrrrrrrrlk',
      'krrrrrrrrrrrrrdk',
      '.krrrrrrrrrrrrdk',
      '.krrrrrrrrrrrrdk',
      '..krrrrrrrrrrrdk',
      '...krrrrrrrrrdk.',
      '....krrrrrrrdk..',
      '.....krrrrrdk...',
      '......krrrrdk...',
      '.......krdk.....',
      '........kk......'
    ]
  ),

  createSticker(
    'pixel-heart-half',
    'Medio Corazón 8-Bit',
    'Arcade & Gaming',
    '#EF233C',
    ['corazon', 'medio', 'vida', 'salud', 'gamer'],
    {
      k: '#1E1014',
      r: '#EF233C',
      l: '#FF758F',
      w: '#FFFFFF',
      d: '#9B111E',
      g: '#4A5568',
      m: '#718096'
    },
    [
      '..kkkk....kkkk..',
      '.kwwwwk..kggggk.',
      'kwwrrrwkkkgggggk',
      'kwrllllkrrgmmmgk',
      'kwrlrrrrkrrgmmgk',
      'krrlrrrrkrrggggk',
      'krrrrrrrkrrggggk',
      '.krrrrrrkrrggggk',
      '.krrrrrrkrrggggk',
      '..krrrrrkrrgggk.',
      '...krrrrkrrggk..',
      '....krrrkrrgk...',
      '.....krrkrgk....',
      '......krkgk.....',
      '.......kkk......',
      '........k.......'
    ]
  ),

  createSticker(
    'pixel-gameboy',
    'Consola Game Boy Retro',
    'Arcade & Gaming',
    '#9CA3AF',
    ['consola', 'gameboy', 'nintendo', 'retro', 'videojuegos'],
    {
      k: '#1F2937',
      b: '#D1D5DB', // body
      d: '#9CA3AF', // body dark
      s: '#374151', // screen bezel
      g: '#84CC16', // screen green
      p: '#4D7C0F', // screen pixel
      r: '#EF4444', // buttons A B
      c: '#4B5563'  // d-pad
    },
    [
      '..kkkkkkkkkkkk..',
      '.kbbbbbbbbbbbbk.',
      '.kbbbbbbbbbbbbk.',
      '.kbssssssssssbk.',
      '.kbsggggggggsbk.',
      '.kbsgpggppggsbk.',
      '.kbsggggggggsbk.',
      '.kbssssssssssbk.',
      '.kbbbbbbbbbbbbk.',
      '.kbbccbbbbbrbbk.',
      '.kbccccbbbrrbbk.',
      '.kbbccbbbbbrbbk.',
      '.kbbbbbbbbbbbbk.',
      '.kbbbcbcbbbbbbk.',
      '.kddddddddddddk.',
      '..kkkkkkkkkkkk..'
    ]
  ),

  createSticker(
    'pixel-mushroom-red',
    'Seta Mágica 1-UP',
    'Arcade & Gaming',
    '#EF4444',
    ['seta', 'hongo', 'mario', 'powerup', '1up'],
    {
      k: '#111827',
      r: '#EF4444', // red cap
      w: '#FFFFFF', // white spot
      s: '#FED7AA', // skin
      e: '#000000'  // eye
    },
    [
      '.....kkkkkk.....',
      '...kkrrrrrrkk...',
      '..krrwwwwwwrrk..',
      '.krwwwwwwwwwwrk.',
      '.krwwrrrrrrwwrk.',
      'krrwwrrrrrrwwrrk',
      'krrwwrrrrrrwwrrk',
      'krrrrwwwwwwrrrrk',
      '.kkkrrrrrrrrkkk.',
      '..kssssssssssk..',
      '.kssessssssessk.',
      '.kssessssssessk.',
      '.kssssssssssssk.',
      '..kssssssssssk..',
      '...kksssssskk...',
      '.....kkkkkk.....'
    ]
  ),

  createSticker(
    'pixel-mushroom-green',
    'Seta Verde Vida Extra',
    'Arcade & Gaming',
    '#10B981',
    ['seta', 'verde', 'vida', 'extra', 'luigi'],
    {
      k: '#111827',
      g: '#10B981', // green cap
      w: '#FFFFFF',
      s: '#FED7AA',
      e: '#000000'
    },
    [
      '.....kkkkkk.....',
      '...kkggggggkk...',
      '..kggwwwwwwggk..',
      '.kgwwwwwwwwwwgk.',
      '.kgwwggggggwwgk.',
      'kggwwggggggwwggk',
      'kggwwggggggwwggk',
      'kggggwwwwwwggggk',
      '.kkkggggggggkkk.',
      '..kssssssssssk..',
      '.kssessssssessk.',
      '.kssessssssessk.',
      '.kssssssssssssk.',
      '..kssssssssssk..',
      '...kksssssskk...',
      '.....kkkkkk.....'
    ]
  ),

  createSticker(
    'pixel-space-invader',
    'Marcianito Space Invader',
    'Arcade & Gaming',
    '#00F5D4',
    ['marcianito', 'alien', 'arcade', 'space', 'invader'],
    {
      k: '#0B0F19',
      g: '#00F5D4',
      w: '#FFFFFF',
      d: '#05B59E'
    },
    [
      '..k...........k.',
      '...k.........k..',
      '..kkkkkkkkkkk...',
      '.kkgwgggggwgkk..',
      '.kgggggggggggkk.',
      'kkgggggggggggkkk',
      'k.kgggggggggk..k',
      '..kkgkkkkgkk....',
      '..kggggggggk....',
      '.kggggggggggk...',
      'k.kkkkkkkkkk.k..',
      'k.k........k.k..',
      '..k........k....',
      '.k..........k...',
      'kk..........kk..',
      '................'
    ]
  ),

  createSticker(
    'pixel-arcade-ghost',
    'Fantasma Arcade Retro',
    'Arcade & Gaming',
    '#00BBF9',
    ['fantasma', 'pacman', 'arcade', 'retro', 'ghost'],
    {
      k: '#0A1128',
      c: '#00BBF9', // cyan body
      l: '#70E000', // light
      w: '#FFFFFF', // eye white
      b: '#03045E'  // eye pupil
    },
    [
      '.....kkkkkk.....',
      '...kkcccccckk...',
      '..kcccccccccck..',
      '.kccwwkccwwkcck.',
      '.kccwwkccwwkcck.',
      'kcccbbkcccbbkcck',
      'kcccccccccccccck',
      'kcccccccccccccck',
      'kcccccccccccccck',
      'kcccccccccccccck',
      'kcccccccccccccck',
      'kcccccccccccccck',
      'kckkcckcckcckckk',
      'kckkcckcckcckckk',
      '.k..kk.kk.kk..k.',
      '................'
    ]
  ),

  createSticker(
    'pixel-coin-gold',
    'Moneda Dorada 8-Bit',
    'Arcade & Gaming',
    '#F59E0B',
    ['moneda', 'oro', 'coin', 'dinero', 'puntos'],
    {
      k: '#78350F',
      y: '#F59E0B', // gold
      l: '#FDE047', // bright light
      w: '#FEF08A', // star glint
      d: '#B45309'  // dark gold
    },
    [
      '.....kkkkkk.....',
      '...kkyyyyyykk...',
      '..kyyllllllyyk..',
      '.kylllyyyyyllldk',
      '.kyllyywwyyllldk',
      'kylyyywwwwyylydk',
      'kylyyywwwwyylydk',
      'kylyyywwwwyylydk',
      'kylyyywwwwyylydk',
      'kylyyywwwwyylydk',
      'kylyyywwwwyylydk',
      '.kyllyywwyyllldk',
      '.kyddlyyyylldddk',
      '..kydddddddydk..',
      '...kkyyyyyykk...',
      '.....kkkkkk.....'
    ]
  ),

  createSticker(
    'pixel-gamepad',
    'Mando Arcade Retro',
    'Arcade & Gaming',
    '#8B5CF6',
    ['mando', 'control', 'gamepad', 'gamer', 'play'],
    {
      k: '#1E1B4B',
      g: '#8B5CF6',
      d: '#6D28D9',
      w: '#FFFFFF',
      r: '#EF4444',
      y: '#F59E0B',
      b: '#3B82F6',
      p: '#10B981'
    },
    [
      '................',
      '..kkkkkkkkkkkk..',
      '.kggggggggggggk.',
      'kggggggggggggggk',
      'kgkkgggggggygggk',
      'kkkkgkgggygygggk',
      'kgkkggggggrgpgbk',
      'kggggggggggrgggk',
      'kggggggggggggggk',
      'kggddggggggddggk',
      'kgdkkggggggkkdgk',
      '.kdk.kggggk.kdk.',
      '..k...kkkk...k..',
      '................',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-sword',
    'Espada Legendaria 8-Bit',
    'Arcade & Gaming',
    '#38BDF8',
    ['espada', 'sword', 'arma', 'legendaria', 'rpg'],
    {
      k: '#0F172A',
      s: '#38BDF8', // blade cyan
      w: '#F0F9FF', // shine
      g: '#F59E0B', // hilt gold
      h: '#78350F', // leather grip
      r: '#EF4444'  // ruby gem
    },
    [
      '..............wk',
      '.............wsk',
      '............wsk.',
      '...........wsk..',
      '..........wsk...',
      '.........wsk....',
      '........wsk.....',
      '.......wsk......',
      '..k...wsk...k...',
      '..kgggwskgggk...',
      '...kgggggggk....',
      '....khhhhhk.....',
      '.....khhhk......',
      '....kgrrgk......',
      '....kggggk......',
      '.....kkkk.......'
    ]
  ),

  // ==========================================
  // 2. COMIDA & BEBIDAS PIXEL (10 stickers)
  // ==========================================
  createSticker(
    'pixel-burger',
    'Hamburguesa Pixel Deliciosa',
    'Comida & Bebida',
    '#F59E0B',
    ['hamburguesa', 'burger', 'comida', 'fastfood', 'snack'],
    {
      k: '#451A03',
      b: '#D97706', // bun top
      w: '#FEF08A', // sesame
      t: '#EF4444', // tomato
      c: '#FBBF24', // cheese
      m: '#78350F', // meat
      l: '#22C55E'  // lettuce
    },
    [
      '.....kkkkkk.....',
      '..kkkbbbbbbkkk..',
      '.kbbwbbbwbbbbk.',
      'kbbbbbbbbbbbbbbk',
      'kbbbbbbbbbbbbbbk',
      'kkkkkkkkkkkkkkkk',
      '.kllllllllllllk.',
      'kttttttttttttttk',
      'kcccccccccccccck',
      'kcmmmmmmmmmmmmck',
      'kmmmmmmmmmmmmmmk',
      'kkkkkkkkkkkkkkkk',
      'kbbbbbbbbbbbbbbk',
      '.kbbbbbbbbbbbbk.',
      '..kkkkkkkkkkkk..',
      '................'
    ]
  ),

  createSticker(
    'pixel-pizza',
    'Rebanada de Pizza Pixel',
    'Comida & Bebida',
    '#F59E0B',
    ['pizza', 'queso', 'pepperoni', 'comida', 'italia'],
    {
      k: '#78350F',
      c: '#B45309', // crust
      y: '#FBBF24', // cheese
      p: '#DC2626', // pepperoni
      g: '#16A34A'  // basil / green pepper
    },
    [
      '..kkkkkkkkkkk...',
      '.kccccccccccc.',
      'kccccccccccccc.',
      'kcyyyyyyyyyyyck.',
      '.kyyppygyyyyyk..',
      '.kyppppyyyyyyk..',
      '..kyypyyppyk....',
      '..kyyyyypppk....',
      '...kygyyyppk....',
      '...kyyyyyyk.....',
      '....kyypyk......',
      '....kypppk......',
      '.....kypk.......',
      '.....kyyk.......',
      '......kyk.......',
      '.......k........'
    ]
  ),

  createSticker(
    'pixel-coffee',
    'Taza de Café Humeante',
    'Comida & Bebida',
    '#78350F',
    ['cafe', 'taza', 'desayuno', 'caliente', 'coffee'],
    {
      k: '#1E293B',
      w: '#FFFFFF', // cup
      c: '#78350F', // coffee
      s: '#94A3B8', // steam
      h: '#E2E8F0'
    },
    [
      '...s...s........',
      '....s...s.......',
      '...s...s........',
      '....s...s.......',
      '..kkkkkkkkk.....',
      '.kwwwwwwwwwkk...',
      'kwwcccccccwwkwk.',
      'kwwwwwwwwwwwk.wk',
      'kwwwwwwwwwwwkwk.',
      'kwhhhhhhhhhwkk..',
      'kwhhhhhhhhhwk...',
      'kwhhhhhhhhhwk...',
      '.kwwwwwwwwwk....',
      '..kkkkkkkkk.....',
      'kkwwwwwwwwwkk...',
      'kkkkkkkkkkkkk...'
    ]
  ),

  createSticker(
    'pixel-ice-cream',
    'Helado en Cono Pixel',
    'Comida & Bebida',
    '#F43F5E',
    ['helado', 'cono', 'dulce', 'postre', 'icecream'],
    {
      k: '#3F1A08',
      r: '#DC2626', // cherry
      p: '#FB7185', // strawberry scoop
      c: '#D97706', // cone
      d: '#92400E', // waffle line
      w: '#FFFFFF'
    },
    [
      '.......k........',
      '......krrk......',
      '.....krrwrk.....',
      '....kkkrrkkk....',
      '...kppppppppk...',
      '..kppwpppppppk..',
      '..kppppppppppk..',
      '.kppppppppppppk.',
      '.kkkppppppppkkk.',
      '..kcccccccccck..',
      '..kcdccdccdcdk..',
      '...kcdccdcdck...',
      '....kcdcdcdk....',
      '.....kcdcdk.....',
      '......kcdk......',
      '.......kk.......'
    ]
  ),

  createSticker(
    'pixel-taco',
    'Taco Mexicano Pixel',
    'Comida & Bebida',
    '#FBBF24',
    ['taco', 'mexico', 'comida', 'salsa', 'carne'],
    {
      k: '#451A03',
      s: '#FBBF24', // shell
      m: '#78350F', // beef
      l: '#22C55E', // lettuce
      t: '#EF4444', // tomato
      c: '#FEF08A'  // cheese
    },
    [
      '................',
      '....kkkkkkkk....',
      '..kktlctmlctkk..',
      '.ktlltmmcltlltk.',
      'ktlllllllllllltk',
      'ksksssssssssskck',
      'kssssssssssssssk',
      'kssssssssssssssk',
      'kssssssssssssssk',
      '.kssssssssssssk.',
      '..kssssssssssk..',
      '...kksssssskk...',
      '.....kkkkkk.....',
      '................',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-fries',
    'Papas Fritas Pixel',
    'Comida & Bebida',
    '#EF4444',
    ['papas', 'fritas', 'fries', 'fastfood', 'snack'],
    {
      k: '#450A0A',
      r: '#EF4444', // red box
      y: '#FBBF24', // fries
      l: '#FEF08A', // light fry
      w: '#FFFFFF'
    },
    [
      '...kk..kk..kk...',
      '..kylk.kyl.kylk.',
      '..kylkkylk.kylk.',
      '.kkylkkylk.kylk.',
      '.kylkkylkkylk.k.',
      '.kylkkylkkylk...',
      '.kkkkkkkkkkkkk..',
      'krrrrrrrrrrrrrk.',
      'krrrrrwrrrrrrrk.',
      'krrrrwwwrrrrrrk.',
      'krrrrrwrrrrrrrk.',
      'krrrrrrrrrrrrrk.',
      '.krrrrrrrrrrrk..',
      '.krrrrrrrrrrrk..',
      '..kkkkkkkkkkk...',
      '................'
    ]
  ),

  createSticker(
    'pixel-donut',
    'Dona Glaseada con Chispas',
    'Comida & Bebida',
    '#EC4899',
    ['dona', 'donut', 'rosquilla', 'glaseado', 'dulce'],
    {
      k: '#3F1A08',
      d: '#D97706', // dough
      p: '#F472B6', // pink frosting
      w: '#FFFFFF', // sprinkle white
      b: '#38BDF8', // sprinkle blue
      y: '#FACC15'  // sprinkle yellow
    },
    [
      '.....kkkkkk.....',
      '..kkkppppppkkk..',
      '.kppwppppbypppk.',
      'kppppppppppppppk',
      'kppbyppkkppwpppk',
      'kppppkk..kkppppk',
      'kppwkk....kkpppk',
      'kpppkk....kkbybk',
      'kpppbkk..kkppppk',
      'kppppypkkppppppk',
      'kppwpppppppppppk',
      'kppppbyppwpppppk',
      '.kddddddddddddk.',
      '..kkkddddddkkk..',
      '.....kkkkkk.....',
      '................'
    ]
  ),

  createSticker(
    'pixel-apple',
    'Manzana Roja Pixel',
    'Comida & Bebida',
    '#DC2626',
    ['manzana', 'fruta', 'roja', 'saludable', 'apple'],
    {
      k: '#1E1B18',
      r: '#DC2626',
      l: '#F87171',
      w: '#FFFFFF',
      g: '#22C55E',
      b: '#78350F'
    },
    [
      '........kgk.....',
      '.......kggk.....',
      '......kbkk......',
      '.....kbk........',
      '..kkk..kkkk.....',
      '.krrwkkkrrrrk...',
      'krrwwkrrrrrrrk..',
      'krrrwrrrrrrrrrk.',
      'krrrrrrrrrrrrrk.',
      'krrrrrrrrrrrrrk.',
      'krrrrrrrrrrrrrk.',
      'krrrrrrrrrrrrrk.',
      '.krrrrrrrrrrrk..',
      '..krrrrkrrrrk...',
      '...kkkk..kkk....',
      '................'
    ]
  ),

  createSticker(
    'pixel-cherries',
    'Cerezas Gemelas Dulces',
    'Comida & Bebida',
    '#E11D48',
    ['cerezas', 'fruta', 'cherry', 'dulce', 'verano'],
    {
      k: '#1C1917',
      g: '#16A34A',
      r: '#E11D48',
      w: '#FFFFFF',
      d: '#881337'
    },
    [
      '..........kgk...',
      '.........kggk...',
      '........kgkk....',
      '....kk..gk......',
      '...k..kk.k......',
      '..k...k...k.....',
      '.k...k.....k....',
      'k...k.......k...',
      '..kkkk.....kkkk.',
      '.krrrwk...krrrwk',
      'krrwwwrk.krrwwwk',
      'krrrrrrk.krrrrrk',
      'krrrrddk.krrrrrk',
      '.krrddk...krrddk',
      '..kkkk.....kkkk.',
      '................'
    ]
  ),

  createSticker(
    'pixel-soda',
    'Vaso de Refresco con Popote',
    'Comida & Bebida',
    '#EF4444',
    ['refresco', 'soda', 'bebida', 'popote', 'vaso'],
    {
      k: '#111827',
      r: '#EF4444',
      w: '#FFFFFF',
      c: '#38BDF8',
      l: '#E2E8F0'
    },
    [
      '...........kwk..',
      '..........kwk...',
      '........kwkk....',
      '.......kwk......',
      '....kkkwkkkk....',
      '...kllllllllk...',
      '..kllllllllllk..',
      '..kkkkkkkkkkkk..',
      '...krrrrrrrrk...',
      '...krwwrwwrrk...',
      '...krwwrwwrrk...',
      '...krrrrrrrrk...',
      '...krrrrrrrrk...',
      '....krrrrrrk....',
      '....krrrrrrk....',
      '.....kkkkkk.....'
    ]
  ),

  // ==========================================
  // 3. NATURALEZA & CLIMA PIXEL (8 stickers)
  // ==========================================
  createSticker(
    'pixel-sunny-sun',
    'Sol Radiante 8-Bit',
    'Naturaleza & Clima',
    '#F59E0B',
    ['sol', 'verano', 'calor', 'dia', 'feliz'],
    {
      k: '#78350F',
      y: '#FBBF24',
      l: '#FEF08A',
      o: '#F97316'
    },
    [
      '.......kk.......',
      '..k....kk....k..',
      '...k..kyyk..k...',
      '....kkyyyykk....',
      '....kyyyyyyk....',
      '.kkkkykyykykkkk.',
      '.kyyyyykyyyyyyk.',
      'kkyyykyyykyyyykk',
      'kkyyykyyykyyyykk',
      '.kyyyykkkkyyyyk.',
      '.kkkkyyyyyykkkk.',
      '....kyyyyyyk....',
      '....kkyyyykk....',
      '...k..kyyk..k...',
      '..k....kk....k..',
      '.......kk.......'
    ]
  ),

  createSticker(
    'pixel-moon-star',
    'Luna Creciente y Estrella',
    'Naturaleza & Clima',
    '#FACC15',
    ['luna', 'estrella', 'noche', 'cielo', 'espacio'],
    {
      k: '#1E1B4B',
      y: '#FACC15',
      w: '#FEF08A',
      c: '#38BDF8'
    },
    [
      '....kkkk........',
      '..kkyyyykk......',
      '.kyyyyyyyk..k...',
      'kyyyykkkkk.kwk..',
      'kyyyk.....kkk...',
      'kyyyk...........',
      'kyyyk...........',
      'kyyyk.......k...',
      'kyyyk......kwk..',
      'kyyyk.....kkk...',
      'kyyyk...........',
      'kyyyykkkkk......',
      '.kyyyyyyyk......',
      '..kkyyyykk......',
      '....kkkk........',
      '................'
    ]
  ),

  createSticker(
    'pixel-rain-cloud',
    'Nube con Lluvia Pixel',
    'Naturaleza & Clima',
    '#38BDF8',
    ['nube', 'lluvia', 'clima', 'agua', 'tormenta'],
    {
      k: '#1E293B',
      w: '#F8FAFC',
      g: '#94A3B8',
      c: '#38BDF8'
    },
    [
      '.....kkkk.......',
      '...kkwwwwkk.....',
      '..kwwwwwwwwk....',
      '.kwwwkkkwwwwkk..',
      'kwwwwk..kwwwwwk.',
      'kwwwk....kwwwwk.',
      'kwwwwkkkkwwwwwk.',
      'kwwwwwwwwwwwwwk.',
      'kgggggggggggggk.',
      '.kkkkkkkkkkkkk..',
      '....kc....kc....',
      '...kcck..kcck...',
      '....kc....kc....',
      '.......kc.......',
      '......kcck......',
      '.......kc.......'
    ]
  ),

  createSticker(
    'pixel-fire-flame',
    'Llama de Fuego Mágico',
    'Naturaleza & Clima',
    '#EF4444',
    ['fuego', 'llama', 'calor', 'hoguera', 'energia'],
    {
      k: '#450A0A',
      r: '#EF4444',
      o: '#F97316',
      y: '#FBBF24',
      w: '#FEF08A'
    },
    [
      '.......kk.......',
      '......krk.......',
      '.....krrk.......',
      '....krrorrk.....',
      '...kroooorrk....',
      '...krooyyookk...',
      '..krooyyyyookk..',
      '..kroyywwyyookk.',
      '.krooywwwwyyork.',
      '.krooywwwwyyork.',
      '.krooyywwyyookk.',
      '..krooyyyyyook..',
      '..krrrooooorrk..',
      '...kkkrrrrrkk...',
      '......kkkkk.....',
      '................'
    ]
  ),

  createSticker(
    'pixel-water-drop',
    'Gota de Agua Cristalina',
    'Naturaleza & Clima',
    '#0EA5E9',
    ['gota', 'agua', 'lluvia', 'splash', 'limpio'],
    {
      k: '#0C4A6E',
      b: '#0EA5E9',
      l: '#38BDF8',
      w: '#F0F9FF',
      d: '#0369A1'
    },
    [
      '.......k........',
      '......kkk.......',
      '.....kbbbk......',
      '....kbbblbk.....',
      '...kbbblllbk....',
      '...kbbwllllbk...',
      '..kbbwwlllllbk..',
      '..kbbwwlllllbk..',
      '.kbbbwwllllllbk.',
      '.kbbbwllllllldk.',
      '.kbbbbllllllldk.',
      '..kbbbdddddddk..',
      '..kbbddddddddk..',
      '...kkddddddkk...',
      '.....kkkkkk.....',
      '................'
    ]
  ),

  createSticker(
    'pixel-cactus',
    'Cactus del Desierto con Flor',
    'Naturaleza & Clima',
    '#22C55E',
    ['cactus', 'desierto', 'planta', 'verde', 'naturaleza'],
    {
      k: '#052E16',
      g: '#22C55E',
      d: '#15803D',
      p: '#EC4899', // pink bloom
      y: '#FBBF24'
    },
    [
      '.......kpk......',
      '......kpppk.....',
      '.......kdk......',
      '......kggdk.....',
      '.kkk..kggdk.....',
      'kgggkkkggdk..kk.',
      'kgggkggdggkkgdgk',
      'kgggkggdggkkgdgk',
      'kgggkkkkggkkgdgk',
      '.kkd..kggdkkggdk',
      '......kggdk.kkd.',
      '......kggdk.....',
      '......kggdk.....',
      '......kggdk.....',
      '.....kggggdk....',
      '....kkkkkkkkk...'
    ]
  ),

  createSticker(
    'pixel-flower-daisy',
    'Flor Margarita Feliz',
    'Naturaleza & Clima',
    '#FACC15',
    ['flor', 'margarita', 'primavera', 'jardin', 'petalos'],
    {
      k: '#1C1917',
      w: '#FFFFFF',
      y: '#FACC15',
      g: '#16A34A'
    },
    [
      '......kkkk......',
      '.....kwwwwk.....',
      '..kk.kwwwwk.kk..',
      '.kwwk.kkkk.kwwk.',
      'kwwwwkkyykkwwwwk',
      'kwwwwkyyyykwvwwk',
      '.kwwkkyyyyk.kwwk.',
      '..kk.kkyykk.kk..',
      '.....kwwwwk.....',
      '......kwwk......',
      '.......kgk......',
      '..kk...kgk......',
      '.kggk..kgk.kk...',
      '..kgk..kgkgk....',
      '...kggkgkgk.....',
      '....kkkkkk......'
    ]
  ),

  createSticker(
    'pixel-pine-tree',
    'Pino de Bosque 8-Bit',
    'Naturaleza & Clima',
    '#15803D',
    ['pino', 'arbol', 'bosque', 'navidad', 'naturaleza'],
    {
      k: '#052E16',
      g: '#16A34A',
      d: '#15803D',
      b: '#78350F'
    },
    [
      '.......kk.......',
      '......kggk......',
      '.....kggggk.....',
      '....kggggggk....',
      '....kkkggkkk....',
      '...kggggggggk...',
      '..kggggggggggk..',
      '..kkkggggggkkk..',
      '.kggggggggggggk.',
      'kggggggggggggggk',
      'kkkkkggggggkkkkk',
      '....kbbbbbbk....',
      '....kbbbbbbk....',
      '....kbbbbbbk....',
      '....kkbbbbkk....',
      '......kkkk......'
    ]
  ),

  // ==========================================
  // 4. ANIMALES & CRIATURAS PIXEL (8 stickers)
  // ==========================================
  createSticker(
    'pixel-cat',
    'Gatito Negro Místico',
    'Animales & Criaturas',
    '#1E293B',
    ['gato', 'gatito', 'negro', 'mascota', 'miau'],
    {
      k: '#0F172A',
      b: '#1E293B',
      g: '#22C55E', // green eyes
      p: '#F472B6', // pink ears/nose
      w: '#FFFFFF'
    },
    [
      '.kk........kk...',
      'kpkk......kpkk..',
      'kppk......kppk..',
      'kbbkkkkkkkkbbk..',
      'kbbbbbbbbbbbbk..',
      'kbkgkbkkbkgkbk..',
      'kbwgkbkkbwgkbk..',
      'kbbbbkppkbbbbk..',
      'kbbbbkkkkbbbbk..',
      '.kbbbbbbbbbbk...',
      '..kbbbbbbbbk.kk.',
      '.kbbbbbbbbbbk.bk',
      'kbbbbbbbbbbbbk.k',
      'kbbkkkbbkkkbbk.k',
      'kbbk.kbbk.kbbk.k',
      '.kk...kk...kk.k.'
    ]
  ),

  createSticker(
    'pixel-dog',
    'Perrito Shiba Feliz',
    'Animales & Criaturas',
    '#F59E0B',
    ['perro', 'perrito', 'shiba', 'mascota', 'guau'],
    {
      k: '#451A03',
      y: '#F59E0B',
      w: '#FFFFFF',
      r: '#EF4444', // collar
      e: '#000000'
    },
    [
      '.kk........kk...',
      'kykk......kykk..',
      'kyykkkkkkkkyyk..',
      'kyyyyyyyyyyyyk..',
      'kyyywyyyywyyyk..',
      'kyyewyyyyweyyk..',
      'kyywwweewwyyyk..',
      'kyyywwkkwyyyyk..',
      '.kyyyywwyyyyk...',
      '..krrrrrrrrk....',
      '.kyyyyyyyyyk....',
      'kyyyyyyyyyyyk.k.',
      'kyyyyyyyyyyykkk.',
      'kyykkkyyykkkyyk.',
      'kyyk.kyyk.kyyk..',
      '.kk...kk...kk...'
    ]
  ),

  createSticker(
    'pixel-duck',
    'Patito de Hule Pixel',
    'Animales & Criaturas',
    '#FACC15',
    ['pato', 'patito', 'hule', 'baño', 'amarillo'],
    {
      k: '#713F12',
      y: '#FACC15',
      o: '#F97316',
      w: '#FFFFFF',
      e: '#000000'
    },
    [
      '................',
      '....kkkkkk......',
      '..kkyyyyyykk....',
      '.kyyyyweyyykk...',
      '.kyyyywwyyyyk...',
      'koooyyyyyyyk....',
      'koooyyyyyyk.....',
      '.kkkyyyyyykkk...',
      '..kkyyyyyyyyykk.',
      '.kyyyyyyyyyyyyyk',
      'kyyyyyyyyyyyyyyk',
      'kyyyyyyyyyyyyyyk',
      '.kyyyyyyyyyyyyk.',
      '..kkyyyyyyyykk..',
      '....kkkkkkkk....',
      '................'
    ]
  ),

  createSticker(
    'pixel-frog',
    'Rana Verde Sonriente',
    'Animales & Criaturas',
    '#22C55E',
    ['rana', 'ranita', 'verde', 'anfibio', 'feliz'],
    {
      k: '#052E16',
      g: '#22C55E',
      l: '#4ADE80',
      w: '#FFFFFF',
      p: '#FB7185',
      e: '#000000'
    },
    [
      '..kk......kk....',
      '.kwwe....kwwk...',
      '.kwee....kwek...',
      'kkkkkkkkkkkkkk..',
      'kggggggggggggk..',
      'kggggggggggggk..',
      'kgpggggggggpkg..',
      'kggkkkkkkkkggk..',
      'kggggggggggggk..',
      '.kggggggggggk...',
      '.kkgkkkkkkkgk...',
      'kggkggggggkggk..',
      'kggkggggggkggk..',
      '.kk.kkkkkk.kk...',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-skull',
    'Calavera Pirata 8-Bit',
    'Animales & Criaturas',
    '#E2E8F0',
    ['calavera', 'craneo', 'pirata', 'halloween', 'esqueleto'],
    {
      k: '#0F172A',
      w: '#F8FAFC',
      g: '#94A3B8'
    },
    [
      '.....kkkkkk.....',
      '...kkwwwwwwkk...',
      '..kwwwwwwwwwwk..',
      '.kwwwwwwwwwwwwk.',
      '.kwwkkwwwwkkwwk.',
      'kwwwkkwwwwkkwwwk',
      'kwwwwwwwwwwwwwwk',
      'kwwwwwkwwkwwwwwk',
      'kwwwwwwkkwwwwwwk',
      '.kwwwwwwwwwwwwk.',
      '..kkwwwwwwwwkk..',
      '...kkwkwkwkk....',
      '...kkwkwkwkk....',
      '....kkkkkkk.....',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-bat',
    'Murciélago de Noche',
    'Animales & Criaturas',
    '#6366F1',
    ['murcielago', 'bat', 'noche', 'vampiro', 'halloween'],
    {
      k: '#1E1B4B',
      p: '#6366F1',
      e: '#FACC15',
      w: '#FFFFFF'
    },
    [
      'k..............k',
      'kk....kkkk....kk',
      'kpk..kppppk..kpk',
      'kppkkkppppkkkppk',
      'kppppkpeepkppppk',
      '.kpppkpeepkpppk.',
      '..kpppkwkpppkk..',
      '..kppppppppppk..',
      '.kppkppkppkppk..',
      '.kp.kp..kp.kp...',
      'k...k....k...k..',
      '................',
      '................',
      '................',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-blue-bird',
    'Pajarito Azul Feliz',
    'Animales & Criaturas',
    '#38BDF8',
    ['pajaro', 'ave', 'azul', 'twitter', 'canto'],
    {
      k: '#0C4A6E',
      b: '#38BDF8',
      w: '#FFFFFF',
      y: '#FACC15',
      e: '#000000'
    },
    [
      '.....kkkkkk.....',
      '...kkbbbbbbkk...',
      '..kbbbbbbbbbbk..',
      '.kbbbbbwkbbbbk..',
      '.kbbbbwekbbbyyyk',
      '.kbbbbwwkbbbyyyk',
      'kbbbbbbbbbbkkkk.',
      'kbbkkkbbbbbbbk..',
      'kbkwwwkbbbbbbk..',
      'kbkwwwkbbbbbbk..',
      '.kkkkkbbbbbbk...',
      '..kbbbbbbbbk....',
      '...kkk..kkk.....',
      '....kyk..kyk....',
      '....kyyk.kyyk...',
      '................'
    ]
  ),

  createSticker(
    'pixel-dino',
    'Dinosaurio T-Rex Pixel',
    'Animales & Criaturas',
    '#10B981',
    ['dinosaurio', 'dino', 'trex', 'google', 'runner'],
    {
      k: '#064E3B',
      g: '#10B981',
      w: '#FFFFFF',
      e: '#000000'
    },
    [
      '........kkkkkkk.',
      '.......kggggggggk',
      '.......kgwgggkggk',
      '.......kggggggggk',
      '.......kggggggggk',
      '.......kggggkkkk.',
      'k.....kgggggk...',
      'kgk..kggggggk...',
      'kggkkggggggkkk..',
      'kggggggggggggk..',
      '.kggggggggggk...',
      '..kggggggggk....',
      '...kkggggggk....',
      '....kgk..kgk....',
      '....kgk..kgk....',
      '....kkk..kkk....'
    ]
  ),

  // ==========================================
  // 5. OBJETOS, TECH & POP (8 stickers)
  // ==========================================
  createSticker(
    'pixel-cassette',
    'Casete Retro Synthwave',
    'Objetos & Pop',
    '#EC4899',
    ['casete', 'musica', 'retro', '80s', 'mixtape'],
    {
      k: '#1E1B4B',
      p: '#EC4899', // pink body
      c: '#06B6D4', // cyan label
      w: '#FFFFFF',
      y: '#FACC15'
    },
    [
      '.kkkkkkkkkkkkkk.',
      'kppppppppppppppk',
      'kpccccccccccccpk',
      'kpcwwcwwcwwcwwcpk',
      'kpckkkcccckkkcpk',
      'kpckwkcccckwkcpk',
      'kpckkkcccckkkcpk',
      'kpccccccccccccpk',
      'kppppppppppppppk',
      'kppkkkkkkkkkkppk',
      'kpkkyyyyyyyykkpk',
      'kpkkyyyyyyyykkpk',
      'kppkkkkkkkkkkppk',
      'kppppppppppppppk',
      '.kkkkkkkkkkkkkk.',
      '................'
    ]
  ),

  createSticker(
    'pixel-floppy',
    'Disquete 3.5 Retro',
    'Objetos & Pop',
    '#3B82F6',
    ['disquete', 'floppy', 'guardar', 'retro', 'computadora'],
    {
      k: '#0F172A',
      b: '#3B82F6', // blue body
      s: '#94A3B8', // silver slider
      w: '#FFFFFF', // write label
      d: '#1E3A8A'
    },
    [
      '..kkkkkkkkkkk...',
      '.kbbbbbbbbbbbk..',
      'kbbkssssssskbbk.',
      'kbbkssssssskbbk.',
      'kbbkssskssskbbk.',
      'kbbkssssssskbbk.',
      'kbbbbbbbbbbbbbk.',
      'kbbkwwwwwwwkbbk.',
      'kbbkwwwwwwwkbbk.',
      'kbbkwwwwwwwkbbk.',
      'kbbkwwwwwwwkbbk.',
      'kbbkwwwwwwwkbbk.',
      'kbbkwwwwwwwkbbk.',
      'kbbbbbbbbbbbbbk.',
      '.kbbbbbbbbbbbk..',
      '..kkkkkkkkkkk...'
    ]
  ),

  createSticker(
    'pixel-monitor',
    'Computadora Vintage CRT',
    'Objetos & Pop',
    '#E2E8F0',
    ['computadora', 'monitor', 'pc', 'vintage', 'retro'],
    {
      k: '#1E293B',
      b: '#CBD5E1', // beige case
      s: '#0284C7', // blue screen
      g: '#4ADE80'  // green code
    },
    [
      '..kkkkkkkkkkkk..',
      '.kbbbbbbbbbbbbk.',
      'kbbksssssssskbbk',
      'kbbksggssssskbbk',
      'kbbksssssssskbbk',
      'kbbksggggggskbbk',
      'kbbksssssssskbbk',
      'kbbksssssssskbbk',
      'kbbkkkkkkkkkkbbk',
      '.kbbbbbbbbbbbbk.',
      '..kkkkkbbkkkkk..',
      '......kbbk......',
      '.....kbbbbk.....',
      '....kbbbbbbk....',
      '....kkkkkkkk....',
      '................'
    ]
  ),

  createSticker(
    'pixel-diamond',
    'Diamante Precioso 8-Bit',
    'Objetos & Pop',
    '#38BDF8',
    ['diamante', 'gema', 'joya', 'brillante', 'cristal'],
    {
      k: '#0C4A6E',
      c: '#38BDF8',
      l: '#7DD3FC',
      w: '#F0F9FF',
      d: '#0284C7'
    },
    [
      '.....kkkkkk.....',
      '...kkwwwwwwkk...',
      '..kwllcwwcllwk..',
      '.kwwclccccclwdk.',
      'kwwccccccccccddk',
      'kwwccccccccccddk',
      'kwwccccccccccddk',
      '.kwcccccccccdk..',
      '..kwcccccccdk...',
      '...kwcccccdk....',
      '....kwcccdk.....',
      '.....kwcdk......',
      '......kwdk......',
      '.......kk.......',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-lightning',
    'Rayo Eléctrico Flash',
    'Objetos & Pop',
    '#FACC15',
    ['rayo', 'energia', 'electrico', 'trueno', 'flash'],
    {
      k: '#713F12',
      y: '#FACC15',
      w: '#FEF08A',
      o: '#F97316'
    },
    [
      '........kk......',
      '.......kwk......',
      '......kwwk......',
      '.....kwwyk......',
      '....kwwyok......',
      '...kwwyokk......',
      '..kwwyokkkkkk...',
      '.kwwyooooooooo..',
      '..kkkkkkkkywwk..',
      '.......kwwyok...',
      '......kwwyok....',
      '.....kwwyok.....',
      '....kwwyok......',
      '...kwwyok.......',
      '..kwyyok........',
      '..kkykk.........'
    ]
  ),

  createSticker(
    'pixel-crown',
    'Corona Real Dorada',
    'Objetos & Pop',
    '#EAB308',
    ['corona', 'rey', 'reina', 'oro', 'vip'],
    {
      k: '#713F12',
      y: '#EAB308',
      l: '#FDE047',
      r: '#EF4444', // ruby
      b: '#3B82F6'  // sapphire
    },
    [
      '..k.....k.....k.',
      '.krk...kbk...krk',
      '.kyk...kyk...kyk',
      'kkykkkkykykkkkyk',
      'kyyyyyyyyyyyyyyk',
      'kyyyyylyyyyyyyyk',
      'kyyryyblyyryyyyk',
      'kyyyyyyyyyyyyyyk',
      'kyyyyyyyyyyyyyyk',
      'kkyyyyyyyyyyyykk',
      '.kkyyyyyyyyyykk.',
      '..kkkkkkkkkkkk..',
      '................',
      '................',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-rocket',
    'Cohete Cósmico Pixel',
    'Objetos & Pop',
    '#EF4444',
    ['cohete', 'espacio', 'nave', 'luna', 'astronauta'],
    {
      k: '#1E1B4B',
      r: '#EF4444',
      w: '#FFFFFF',
      c: '#38BDF8',
      o: '#F97316',
      y: '#FACC15'
    },
    [
      '.......kk.......',
      '......krrk......',
      '.....krrrrk.....',
      '....kwwwwwwk....',
      '....kwwccwwk....',
      '...kwwwccwwwk...',
      '...kwwwwwwwwk...',
      '..krkwwwwwwkrk..',
      '.krrkwwwwwwkrrk.',
      '.krrkrrrrrrkrrk.',
      '.kkk.kkkkkk.kkk.',
      '......koook.....',
      '.....kooyyook...',
      '.....koyyyyok...',
      '......koyyok....',
      '.......kkkk.....'
    ]
  ),

  createSticker(
    'pixel-hourglass',
    'Reloj de Arena Mágico',
    'Objetos & Pop',
    '#F59E0B',
    ['reloj', 'arena', 'tiempo', 'espera', 'retro'],
    {
      k: '#451A03',
      w: '#78350F', // wood frame
      g: '#E0F2FE', // glass
      s: '#FBBF24'  // sand
    },
    [
      '..kkkkkkkkkkkk..',
      '..kwwwwwwwwwwk..',
      '...kkkggggkkk...',
      '....kgssssgk....',
      '....kgssssgk....',
      '.....kgssgk.....',
      '......kggk......',
      '......kgsk......',
      '.....kgssgk.....',
      '....kgssssgk....',
      '....kgssssgk....',
      '....kgssssgk....',
      '...kkkggggkkk...',
      '..kwwwwwwwwwwk..',
      '..kkkkkkkkkkkk..',
      '................'
    ]
  ),

  // ==========================================
  // 6. EXPRESIONES & BADGES (6 stickers)
  // ==========================================
  createSticker(
    'pixel-smiley',
    'Carita Feliz Retro Smiley',
    'Expresiones & Badges',
    '#FACC15',
    ['feliz', 'sonrisa', 'smiley', 'emoji', 'retro'],
    {
      k: '#713F12',
      y: '#FACC15',
      l: '#FEF08A'
    },
    [
      '.....kkkkkk.....',
      '..kkkyyyyyykkk..',
      '.kkyyyyyyyyyykk.',
      '.kyykkkyyykkkyyk',
      'kyyykkkyyykkkyyy',
      'kyyyyyyyyyyyyyyy',
      'kyyyyyyyyyyyyyyy',
      'kyykkyyyyyyykkyy',
      'kyyykkyyyyykkyyy',
      'kyyyykkkkkkkyyyy',
      '.kyyyyyyyyyyyyyk',
      '.kkyyyyyyyyyykk.',
      '..kkkyyyyyykkk..',
      '.....kkkkkk.....',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-cool-sunglasses',
    'Carita con Gafas de Sol Cool',
    'Expresiones & Badges',
    '#FACC15',
    ['cool', 'gafas', 'lentes', 'swag', 'estilo'],
    {
      k: '#713F12',
      y: '#FACC15',
      b: '#0F172A',
      w: '#FFFFFF'
    },
    [
      '.....kkkkkk.....',
      '..kkkyyyyyykkk..',
      '.kkyyyyyyyyyykk.',
      'kykkkkkkkkkkkkyk',
      'kykbbwkkkbbwkkky',
      'kykbbwkkkbbwkkky',
      'kykbbwkkkbbwkkky',
      'kyykkkkkkkkkkyyy',
      'kyyyyyyyyyyyyyyy',
      'kyyykkkkkkkkyyyy',
      'kyyyykkkkkkyyyyy',
      '.kkyyyyyyyyyykk.',
      '..kkkyyyyyykkk..',
      '.....kkkkkk.....',
      '................',
      '................'
    ]
  ),

  createSticker(
    'pixel-trophy',
    'Trofeo Campeón Dorado',
    'Expresiones & Badges',
    '#F59E0B',
    ['trofeo', 'copa', 'ganador', 'campeon', 'oro'],
    {
      k: '#713F12',
      y: '#F59E0B',
      l: '#FDE047',
      w: '#FEF08A'
    },
    [
      '..kkkkkkkkkkkk..',
      '.kyyyyyyyyyyyyk.',
      'kkyylllllyyyykky',
      'kykyywwwwyyyykyk',
      'kykyywwwwyyyykyk',
      'kkyyywwwwyyykyk.',
      '.kkyyyyyyyykk...',
      '..kkyyyyyykk....',
      '...kkyyyykk.....',
      '....kkyykk......',
      '.....kyyk.......',
      '....kkyykk......',
      '...kkyyyykk.....',
      '..kyyyyyyyyk....',
      '..kkkkkkkkkk....',
      '................'
    ]
  ),

  createSticker(
    'pixel-mail',
    'Carta con Corazón Pixel',
    'Expresiones & Badges',
    '#F8FAFC',
    ['carta', 'sobre', 'mensaje', 'correo', 'amor'],
    {
      k: '#1E293B',
      w: '#F8FAFC',
      g: '#E2E8F0',
      r: '#EF4444'
    },
    [
      '................',
      '..kkkkkkkkkkkk..',
      '.kwwwwwwwwwwwwk.',
      'kwwkwwwwwwwwkwwk',
      'kwwwkwwwwwwkwwwk',
      'kwwwwkwwwwkwwwwk',
      'kwwwwwkwwkwwwwwk',
      'kwwwwwkrrkwwwwwk',
      'kwwwwkrrrrkwwwwk',
      'kwwwwwkrrkwwwwwk',
      'kwwwwwwkkwwwwwwk',
      'kwwwwwwwwwwwwwwk',
      'kwwwwwwwwwwwwwwk',
      '.kwwwwwwwwwwwwk.',
      '..kkkkkkkkkkkk..',
      '................'
    ]
  ),

  createSticker(
    'pixel-bomb',
    'Bomba Clásica con Mecha',
    'Expresiones & Badges',
    '#1E293B',
    ['bomba', 'explosion', 'arcade', 'mecha', 'retro'],
    {
      k: '#0F172A',
      b: '#1E293B',
      w: '#94A3B8',
      s: '#FACC15', // spark
      o: '#F97316'
    },
    [
      '..........sos...',
      '.........sosos..',
      '..........sos...',
      '........kkk.....',
      '.......kkbkk....',
      '.....kkbbbbbkk..',
      '....kbbbbbbbbk..',
      '...kbbwwbbbbbbk.',
      '..kbbwwwbbbbbbk.',
      '..kbbwwwbbbbbbk.',
      '..kbbbbbbbbbbbk.',
      '..kbbbbbbbbbbbk.',
      '...kbbbbbbbbbk..',
      '....kbbbbbbbk...',
      '.....kkkkkkk....',
      '................'
    ]
  ),

  createSticker(
    'pixel-rainbow',
    'Arcoíris Curvo Pixel',
    'Expresiones & Badges',
    '#EC4899',
    ['arcoiris', 'color', 'magia', 'cielo', 'orgullo'],
    {
      k: '#1E1B4B',
      r: '#EF4444',
      o: '#F97316',
      y: '#FACC15',
      g: '#22C55E',
      b: '#3B82F6',
      p: '#8B5CF6'
    },
    [
      '.....rrrrrr.....',
      '...rrooooooorr..',
      '..rooyyyyyyyoor.',
      '.royyggggggggyor',
      'royggbbbbbbbbgyo',
      'rygbbppppppppbg',
      'rgbbp........pbg',
      'rbp............',
      '................',
      '................',
      '................',
      '................',
      '................',
      '................',
      '................',
      '................'
    ]
  )
];
