import React, { useState, useRef } from 'react';
import { Search, Sparkles, Gamepad2, Award, ShieldCheck, Smile, Film, Zap, FileText, Image as ImageIcon, Box } from 'lucide-react';
import { GRAPHIC_ELEMENTS_LIBRARY, GraphicElementItem } from '../data/graphicElements';
import { CanvasElement } from '../types';

interface ElementsPanelProps {
  onAddElement: (element: Omit<CanvasElement, 'id' | 'zIndex'>) => void;
}

const CATEGORIES = [
  'Todos',
  'Elementos 3D',
  'Marcos para Fotos',
  'Stickers Papel & Rasgado',
  'Stickers Cómic',
  'Stickers Pixel Art',
  'Stickers Formales',
  'Stickers Cartoon',
  'Stickers Retro 1930s',
  'Redes Sociales',
  'Formas Geométricas',
  'Elementos Abstractos',
  'Insignias y Ofertas',
  'Líneas y Flechas',
  'Ilustraciones & Stickers'
];

const THREE_D_SUBCATEGORIES = [
  'Todos los 3D',
  'Figuras & Formas 3D',
  'Finanzas & Cripto 3D',
  'Tech & Espacio 3D',
  'Social & Reacciones 3D',
  'Oficina & Éxito 3D'
];

const FRAME_SUBCATEGORIES = [
  'Todos los Marcos',
  'Geométricos & Básicos',
  'Dispositivos & Mockups',
  'Fotografía & Retro',
  'Orgánicos & Blobs',
  'Rasgados & Pincel',
  'Símbolos & Siluetas'
];

const PAPER_SUBCATEGORIES = [
  'Todos los Papeles',
  'Papel Rasgado',
  'Papel Arrugado',
  'Notas & Post-its',
  'Cintas Adhesivas',
  'Vintage & Texturas',
  'Etiquetas & Tags',
  'Hojas & Cuadernos'
];

const COMIC_SUBCATEGORIES = [
  'Todos los Cómics',
  'Onomatopeyas & Explosiones',
  'Bocadillos & Globos de Texto',
  'Héroes & Villanos Cómic',
  'Efectos & Destellos Cómic',
  'Expresiones & Símbolos Pop'
];

const PIXEL_SUBCATEGORIES = [
  'Todos los Pixels',
  'Arcade & Gaming',
  'Comida & Bebida',
  'Naturaleza & Clima',
  'Animales & Criaturas',
  'Objetos & Pop',
  'Expresiones & Badges'
];

const FORMAL_SUBCATEGORIES = [
  'Todos los Formales',
  'Sellos & Certificaciones',
  'Finanzas & Negocios',
  'Premios & Reconocimientos',
  'Gestión & Estrategia',
  'Seguridad & Legal'
];

const CARTOON_SUBCATEGORIES = [
  'Todos los Cartoons',
  'Personajes & Caritas',
  'Animalitos Tiernos',
  'Comida & Snacks Kawaii',
  'Cómic & Onomatopeyas',
  'Objetos & Magia Fun'
];

const RETRO_SUBCATEGORIES = [
  'Todos los Retro 1930s',
  'Personajes & Caritas 1930s',
  'Guantes Blancos & Gestos',
  'Steamboat & Aventura Náutica',
  'Objetos Vivos & Rubber Hose',
  'Cine, Música & Show 1930s'
];

export const ElementsPanel: React.FC<ElementsPanelProps> = ({ onAddElement }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selected3DSubcategory, setSelected3DSubcategory] = useState<string>('Todos los 3D');
  const [selectedFrameSubcategory, setSelectedFrameSubcategory] = useState<string>('Todos los Marcos');
  const [selectedPaperSubcategory, setSelectedPaperSubcategory] = useState<string>('Todos los Papeles');
  const [selectedComicSubcategory, setSelectedComicSubcategory] = useState<string>('Todos los Cómics');
  const [selectedPixelSubcategory, setSelectedPixelSubcategory] = useState<string>('Todos los Pixels');
  const [selectedFormalSubcategory, setSelectedFormalSubcategory] = useState<string>('Todos los Formales');
  const [selectedCartoonSubcategory, setSelectedCartoonSubcategory] = useState<string>('Todos los Cartoons');
  const [selectedRetroSubcategory, setSelectedRetroSubcategory] = useState<string>('Todos los Retro 1930s');
  const lastClickTimeRef = useRef<number>(0);

  const filteredElements = GRAPHIC_ELEMENTS_LIBRARY.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    
    let matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;

    if (selectedCategory === 'Elementos 3D' && selected3DSubcategory !== 'Todos los 3D') {
      matchesCategory = matchesCategory && item.subCategory === selected3DSubcategory;
    }

    if (selectedCategory === 'Marcos para Fotos' && selectedFrameSubcategory !== 'Todos los Marcos') {
      matchesCategory = matchesCategory && item.subCategory === selectedFrameSubcategory;
    }

    if (selectedCategory === 'Stickers Papel & Rasgado' && selectedPaperSubcategory !== 'Todos los Papeles') {
      matchesCategory = matchesCategory && item.subCategory === selectedPaperSubcategory;
    }

    if (selectedCategory === 'Stickers Cómic' && selectedComicSubcategory !== 'Todos los Cómics') {
      matchesCategory = matchesCategory && item.subCategory === selectedComicSubcategory;
    }

    if (selectedCategory === 'Stickers Pixel Art' && selectedPixelSubcategory !== 'Todos los Pixels') {
      matchesCategory = matchesCategory && item.subCategory === selectedPixelSubcategory;
    }

    if (selectedCategory === 'Stickers Formales' && selectedFormalSubcategory !== 'Todos los Formales') {
      matchesCategory = matchesCategory && item.subCategory === selectedFormalSubcategory;
    }

    if (selectedCategory === 'Stickers Cartoon' && selectedCartoonSubcategory !== 'Todos los Cartoons') {
      matchesCategory = matchesCategory && item.subCategory === selectedCartoonSubcategory;
    }

    if (selectedCategory === 'Stickers Retro 1930s' && selectedRetroSubcategory !== 'Todos los Retro 1930s') {
      matchesCategory = matchesCategory && item.subCategory === selectedRetroSubcategory;
    }

    return matchesSearch && matchesCategory;
  });

  const handleAddVectorElement = (item: GraphicElementItem) => {
    const now = Date.now();
    if (now - lastClickTimeRef.current < 250) {
      return; // Prevent accidental duplicate additions
    }
    lastClickTimeRef.current = now;

    if (item.category === 'Marcos para Fotos') {
      onAddElement({
        type: 'frame',
        name: item.name,
        frameShape: item.id,
        frameClipPath: item.clipPath,
        frameViewBox: item.viewBox,
        frameOverlaySvg: item.overlaySvg,
        svgContent: item.svgContent,
        x: 180,
        y: 180,
        width: item.defaultWidth || 160,
        height: item.defaultHeight || 160,
        rotation: 0,
        opacity: 1,
        strokeWidth: 0,
        strokeColor: '#7d2ae8',
      });
      return;
    }

    const is3D = item.category === 'Elementos 3D';
    const isLine = item.category === 'Líneas y Flechas';
    const isPixel = item.category === 'Stickers Pixel Art';
    const isFormal = item.category === 'Stickers Formales';
    const isCartoon = item.category === 'Stickers Cartoon';
    const isRetro = item.category === 'Stickers Retro 1930s';
    const isComic = item.category === 'Stickers Cómic';
    const isPaper = item.category === 'Stickers Papel & Rasgado';
    const isSvgSticker = is3D || isPixel || isFormal || isCartoon || isRetro || isComic || isPaper || Boolean(item.svgContent);

    if (isSvgSticker) {
      let width = 145;
      let height = 145;

      if (is3D) {
        width = 150;
        height = 150;
      } else if (isPaper) {
        if (item.id === 'paper-torn-strip-horizontal' || item.id === 'paper-masking-tape-translucent') {
          width = 230;
          height = 90;
        } else if (item.id === 'paper-ticket-perforated-stub') {
          width = 220;
          height = 100;
        } else if (item.id === 'paper-notebook-spiral-torn' || item.id === 'paper-lined-memo-taped') {
          width = 175;
          height = 195;
        } else if (item.id === 'paper-kraft-hang-tag-string') {
          width = 150;
          height = 210;
        } else {
          width = 165;
          height = 165;
        }
      } else if (isFormal) {
        width = 150;
        height = 150;
      } else if (isCartoon) {
        width = 145;
        height = 145;
      } else if (isRetro || isComic) {
        width = 150;
        height = 150;
      } else {
        width = 140;
        height = 140;
      }

      onAddElement({
        type: 'sticker',
        name: item.name,
        svgContent: item.svgContent,
        src: item.dataUri,
        isPixelArt: isPixel,
        x: 180,
        y: 180,
        width,
        height,
        rotation: 0,
        opacity: 1,
        fillColor: item.defaultFill || (is3D ? '#8B5CF6' : isPaper ? '#FAF9F6' : isFormal ? '#0A2540' : isCartoon ? '#F59E0B' : isRetro ? '#18181B' : isComic ? '#EF4444' : '#EF233C'),
      });
      return;
    }

    onAddElement({
      type: 'vector',
      name: item.name,
      svgPath: item.svgPath,
      svgViewBox: item.viewBox || '0 0 24 24',
      x: 180,
      y: 180,
      width: isLine ? 260 : 150,
      height: isLine ? 70 : 150,
      rotation: 0,
      opacity: 1,
      fillColor: item.defaultFill || '#7d2ae8',
    });
  };

  return (
    <div className="space-y-3">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar elementos 3D, formas, marcos, cómic, papel..."
          className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white dark:focus:bg-slate-800 transition-all"
        />
      </div>

      {/* Category Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              if (cat !== 'Elementos 3D') {
                setSelected3DSubcategory('Todos los 3D');
              }
              if (cat !== 'Marcos para Fotos') {
                setSelectedFrameSubcategory('Todos los Marcos');
              }
              if (cat !== 'Stickers Papel & Rasgado') {
                setSelectedPaperSubcategory('Todos los Papeles');
              }
              if (cat !== 'Stickers Cómic') {
                setSelectedComicSubcategory('Todos los Cómics');
              }
              if (cat !== 'Stickers Pixel Art') {
                setSelectedPixelSubcategory('Todos los Pixels');
              }
              if (cat !== 'Stickers Formales') {
                setSelectedFormalSubcategory('Todos los Formales');
              }
              if (cat !== 'Stickers Cartoon') {
                setSelectedCartoonSubcategory('Todos los Cartoons');
              }
              if (cat !== 'Stickers Retro 1930s') {
                setSelectedRetroSubcategory('Todos los Retro 1930s');
              }
            }}
            className={`px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap font-medium transition-all flex items-center gap-1 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-2xs font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat === 'Elementos 3D' && <Box className="w-3 h-3 text-cyan-300" />}
            {cat === 'Marcos para Fotos' && <ImageIcon className="w-3 h-3 text-sky-400" />}
            {cat === 'Stickers Papel & Rasgado' && <FileText className="w-3 h-3 text-amber-500" />}
            {cat === 'Stickers Cómic' && <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300" />}
            {cat === 'Stickers Pixel Art' && <Gamepad2 className="w-3 h-3 text-purple-300" />}
            {cat === 'Stickers Formales' && <ShieldCheck className="w-3 h-3 text-amber-300" />}
            {cat === 'Stickers Cartoon' && <Smile className="w-3 h-3 text-amber-300" />}
            {cat === 'Stickers Retro 1930s' && <Film className="w-3 h-3 text-amber-200" />}
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* Subcategory Pills for Elementos 3D */}
      {selectedCategory === 'Elementos 3D' && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none bg-linear-to-r from-violet-50/80 via-purple-50/60 to-cyan-50/80 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-cyan-950/40 p-1.5 rounded-lg border border-violet-200/70 dark:border-violet-900/40">
          {THREE_D_SUBCATEGORIES.map(sub => (
            <button
              key={sub}
              onClick={() => setSelected3DSubcategory(sub)}
              className={`px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap transition-all font-medium cursor-pointer ${
                selected3DSubcategory === sub
                  ? 'bg-linear-to-r from-violet-600 to-cyan-600 text-white font-bold shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-violet-950 dark:text-cyan-200 hover:bg-violet-100 dark:hover:bg-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Subcategory Pills for Marcos para Fotos */}
      {selectedCategory === 'Marcos para Fotos' && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none bg-sky-50/70 dark:bg-sky-950/30 p-1.5 rounded-lg border border-sky-200/70 dark:border-sky-900/40">
          {FRAME_SUBCATEGORIES.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedFrameSubcategory(sub)}
              className={`px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap transition-all font-medium cursor-pointer ${
                selectedFrameSubcategory === sub
                  ? 'bg-sky-600 text-white font-bold shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-sky-900 dark:text-sky-200 hover:bg-sky-100 dark:hover:bg-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Subcategory Pills for Stickers Papel & Rasgado */}
      {selectedCategory === 'Stickers Papel & Rasgado' && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none bg-amber-50/60 dark:bg-stone-900/50 p-1.5 rounded-lg border border-amber-200/60 dark:border-stone-800/60">
          {PAPER_SUBCATEGORIES.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedPaperSubcategory(sub)}
              className={`px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap transition-all font-medium cursor-pointer ${
                selectedPaperSubcategory === sub
                  ? 'bg-amber-700 text-white font-bold shadow-2xs'
                  : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-stone-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Subcategory Pills for Stickers Cómic */}
      {selectedCategory === 'Stickers Cómic' && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none bg-red-50/50 dark:bg-red-950/20 p-1.5 rounded-lg border border-red-200/60 dark:border-red-900/40">
          {COMIC_SUBCATEGORIES.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedComicSubcategory(sub)}
              className={`px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap transition-all font-medium cursor-pointer ${
                selectedComicSubcategory === sub
                  ? 'bg-red-600 text-white font-bold shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-red-100 dark:hover:bg-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Subcategory Pills for Pixel Art */}
      {selectedCategory === 'Stickers Pixel Art' && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none bg-purple-50/50 dark:bg-purple-950/20 p-1.5 rounded-lg border border-purple-100 dark:border-purple-900/30">
          {PIXEL_SUBCATEGORIES.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedPixelSubcategory(sub)}
              className={`px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap transition-all font-medium cursor-pointer ${
                selectedPixelSubcategory === sub
                  ? 'bg-purple-600 text-white font-semibold shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Subcategory Pills for Stickers Formales */}
      {selectedCategory === 'Stickers Formales' && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none bg-amber-50/50 dark:bg-amber-950/20 p-1.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
          {FORMAL_SUBCATEGORIES.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedFormalSubcategory(sub)}
              className={`px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap transition-all font-medium cursor-pointer ${
                selectedFormalSubcategory === sub
                  ? 'bg-slate-900 dark:bg-amber-500 text-amber-300 dark:text-slate-950 font-bold shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-100 dark:hover:bg-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Subcategory Pills for Stickers Cartoon */}
      {selectedCategory === 'Stickers Cartoon' && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none bg-amber-50/50 dark:bg-amber-950/20 p-1.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
          {CARTOON_SUBCATEGORIES.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedCartoonSubcategory(sub)}
              className={`px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap transition-all font-medium cursor-pointer ${
                selectedCartoonSubcategory === sub
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-100 dark:hover:bg-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Subcategory Pills for Retro 1930s */}
      {selectedCategory === 'Stickers Retro 1930s' && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none bg-zinc-100 dark:bg-zinc-900/60 p-1.5 rounded-lg border border-zinc-300/80 dark:border-zinc-700/60">
          {RETRO_SUBCATEGORIES.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedRetroSubcategory(sub)}
              className={`px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap transition-all font-medium cursor-pointer ${
                selectedRetroSubcategory === sub
                  ? 'bg-zinc-900 text-amber-200 dark:bg-zinc-100 dark:text-zinc-950 font-bold shadow-2xs'
                  : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Quick Access Banners when in 'Todos' */}
      {selectedCategory === 'Todos' && !search && (
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => setSelectedCategory('Elementos 3D')}
            className="col-span-2 flex items-center justify-between p-2.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white rounded-xl shadow-xs hover:shadow-md transition-all text-left group cursor-pointer border border-violet-400/40"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-black/25 flex items-center justify-center shrink-0 border border-cyan-300/40">
                <Box className="w-3.5 h-3.5 text-cyan-200" />
              </div>
              <div>
                <div className="text-[11px] font-black uppercase tracking-wide leading-tight flex items-center gap-1.5">
                  50 Elementos 3D Volumétricos
                  <span className="bg-cyan-400 text-slate-950 text-[8px] px-1 py-0.2 rounded font-black font-mono">NUEVO 3D</span>
                </div>
                <div className="text-[8px] text-cyan-100 leading-tight">Figuras isométricas, finanzas, cohetes, gadgets, emojis y trofeos 3D</div>
              </div>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse shrink-0" />
          </button>

          <button
            onClick={() => setSelectedCategory('Marcos para Fotos')}
            className="col-span-2 flex items-center justify-between p-2.5 bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 text-white rounded-xl shadow-xs hover:shadow-md transition-all text-left group cursor-pointer border border-sky-400/40"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-black/25 flex items-center justify-center shrink-0 border border-sky-300/40">
                <ImageIcon className="w-3.5 h-3.5 text-sky-200" />
              </div>
              <div>
                <div className="text-[11px] font-black uppercase tracking-wide leading-tight flex items-center gap-1.5">
                  50 Marcos para Fotos
                  <span className="bg-white/30 text-white text-[8px] px-1 py-0.2 rounded font-black font-mono">CANVA</span>
                </div>
                <div className="text-[8px] text-sky-100 leading-tight">Móvil, Polaroid, Blobs, Papel rasgado, Letras y Geométricos</div>
              </div>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-sky-200 animate-pulse shrink-0" />
          </button>

          <button
            onClick={() => setSelectedCategory('Stickers Papel & Rasgado')}
            className="col-span-2 flex items-center justify-between p-2.5 bg-linear-to-r from-amber-700 via-stone-800 to-amber-900 text-white rounded-xl shadow-xs hover:shadow-md transition-all text-left group cursor-pointer border border-amber-600/40"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-black/30 flex items-center justify-center shrink-0 border border-amber-400/30">
                <FileText className="w-3.5 h-3.5 text-amber-200" />
              </div>
              <div>
                <div className="text-[11px] font-black uppercase tracking-wide leading-tight flex items-center gap-1.5">
                  10 Stickers Papel Hiperrealista
                  <span className="bg-amber-400 text-stone-950 text-[8px] px-1 py-0.2 rounded font-black font-mono">NUEVO</span>
                </div>
                <div className="text-[8px] text-amber-100/90 leading-tight">Papel rasgado, arrugado 3D, cinta masking y post-it curvado</div>
              </div>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
          </button>

          <button
            onClick={() => setSelectedCategory('Stickers Cómic')}
            className="col-span-2 flex items-center justify-between p-2.5 bg-linear-to-r from-red-600 via-amber-500 to-yellow-500 text-white rounded-xl shadow-xs hover:shadow-md transition-all text-left group cursor-pointer border border-red-500/50"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-black/20 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-yellow-200 fill-yellow-200" />
              </div>
              <div>
                <div className="text-[11px] font-black uppercase tracking-wide leading-tight flex items-center gap-1.5">
                  50 Stickers Cómic Pop Art
                  <span className="bg-black/30 text-yellow-200 text-[8px] px-1 py-0.2 rounded font-mono">POPULAR</span>
                </div>
                <div className="text-[8px] text-white/90 leading-tight">¡POW, BOOM!, bocadillos, superhéroes y explosiones</div>
              </div>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-yellow-100 animate-pulse shrink-0" />
          </button>

          <button
            onClick={() => setSelectedCategory('Stickers Pixel Art')}
            className="flex flex-col justify-between p-2 bg-linear-to-br from-purple-700 to-indigo-700 text-white rounded-xl shadow-xs hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                <Gamepad2 className="w-3.5 h-3.5 text-white" />
              </div>
              <Sparkles className="w-2.5 h-2.5 text-purple-200" />
            </div>
            <div>
              <div className="text-[10px] font-bold leading-tight">50 Pixel Art</div>
              <div className="text-[7.5px] text-purple-100 leading-tight">8-bit retro gaming</div>
            </div>
          </button>

          <button
            onClick={() => setSelectedCategory('Stickers Formales')}
            className="flex flex-col justify-between p-2 bg-linear-to-br from-slate-900 to-slate-800 text-white rounded-xl shadow-xs hover:shadow-md border border-slate-700 transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="w-5 h-5 rounded-md bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <Sparkles className="w-2.5 h-2.5 text-amber-300" />
            </div>
            <div>
              <div className="text-[10px] font-bold leading-tight">50 Elegantes / Formales</div>
              <div className="text-[7.5px] text-slate-300 leading-tight">Sellos & diplomas</div>
            </div>
          </button>

          <button
            onClick={() => setSelectedCategory('Stickers Cartoon')}
            className="flex flex-col justify-between p-2 bg-linear-to-br from-amber-500 to-orange-500 text-white rounded-xl shadow-xs hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                <Smile className="w-3.5 h-3.5 text-white" />
              </div>
              <Sparkles className="w-2.5 h-2.5 text-yellow-200" />
            </div>
            <div>
              <div className="text-[10px] font-bold leading-tight">50 Cartoon</div>
              <div className="text-[7.5px] text-amber-100 leading-tight">Kawaii & cómic fun</div>
            </div>
          </button>

          <button
            onClick={() => setSelectedCategory('Stickers Retro 1930s')}
            className="flex flex-col justify-between p-2 bg-linear-to-br from-zinc-900 to-stone-800 text-white rounded-xl shadow-xs hover:shadow-md border border-stone-700 transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="w-5 h-5 rounded-md bg-white/15 border border-amber-200/30 flex items-center justify-center">
                <Film className="w-3.5 h-3.5 text-amber-200" />
              </div>
              <Sparkles className="w-2.5 h-2.5 text-amber-200" />
            </div>
            <div>
              <div className="text-[10px] font-bold leading-tight">50 Retro 1930s</div>
              <div className="text-[7.5px] text-stone-300 leading-tight">Mickey & Steamboat</div>
            </div>
          </button>
        </div>
      )}

      {/* Elements Grid */}
      <div className="pr-0.5">
        {filteredElements.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs">
            No se encontraron elementos para "{search}"
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {filteredElements.map(item => {
              const is3D = item.category === 'Elementos 3D';
              const isFrame = item.category === 'Marcos para Fotos';
              const isPaper = item.category === 'Stickers Papel & Rasgado';
              const isPixel = item.category === 'Stickers Pixel Art';
              const isFormal = item.category === 'Stickers Formales';
              const isCartoon = item.category === 'Stickers Cartoon';
              const isRetro = item.category === 'Stickers Retro 1930s';
              const isComic = item.category === 'Stickers Cómic';

              return (
                <button
                  key={item.id}
                  id={`vector-element-${item.id}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddVectorElement(item);
                  }}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border bg-white dark:bg-slate-850 hover:scale-105 transition-all group shadow-2xs relative overflow-hidden cursor-pointer ${
                    is3D
                      ? 'border-violet-200 dark:border-violet-900/60 hover:border-cyan-400 dark:hover:border-cyan-400 hover:bg-violet-50/40 dark:hover:bg-violet-950/30'
                      : isFrame
                      ? 'border-sky-200 dark:border-sky-800 hover:border-sky-500 dark:hover:border-sky-400 hover:bg-sky-50/40 dark:hover:bg-sky-950/30'
                      : isPaper
                      ? 'border-amber-200/70 dark:border-stone-750 hover:border-amber-600 dark:hover:border-amber-400 hover:bg-amber-50/30 dark:hover:bg-stone-800/50'
                      : isComic
                      ? 'border-red-200 dark:border-red-900/60 hover:border-red-500 hover:bg-red-50/20 dark:hover:bg-red-950/20'
                      : isRetro
                      ? 'border-zinc-200 dark:border-zinc-750 hover:border-zinc-900 dark:hover:border-zinc-300 hover:bg-stone-50/50 dark:hover:bg-zinc-800/40'
                      : isCartoon
                      ? 'border-slate-200 dark:border-slate-800 hover:border-amber-400 hover:bg-amber-50/20 dark:hover:bg-amber-950/20'
                      : isFormal 
                      ? 'border-slate-200 dark:border-slate-800 hover:border-amber-500 hover:bg-amber-50/20 dark:hover:bg-amber-950/20' 
                      : isPixel
                      ? 'border-slate-200 dark:border-slate-800 hover:border-purple-500 hover:bg-purple-50/40 dark:hover:bg-purple-950/30'
                      : 'border-slate-200 dark:border-slate-800 hover:border-purple-500 hover:bg-purple-50/40 dark:hover:bg-purple-950/30'
                  }`}
                  title={`${item.name} (${item.category}${item.subCategory ? ` - ${item.subCategory}` : ''})`}
                >
                  {is3D && (
                    <span className="absolute top-1 right-1 text-[7px] font-mono px-1 py-0.2 rounded bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-black leading-tight uppercase shadow-2xs">
                      3D
                    </span>
                  )}
                  {isFrame && (
                    <span className="absolute top-1 right-1 text-[7px] font-mono px-1 py-0.2 rounded bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-black leading-tight uppercase shadow-2xs">
                      MARCO
                    </span>
                  )}
                  {isPaper && (
                    <span className="absolute top-1 right-1 text-[7px] font-mono px-1 py-0.2 rounded bg-amber-100 dark:bg-amber-950/90 text-amber-900 dark:text-amber-200 font-black leading-tight uppercase border border-amber-300/60 dark:border-amber-700/60 shadow-2xs">
                      PAPEL
                    </span>
                  )}
                  {isComic && (
                    <span className="absolute top-1 right-1 text-[7px] font-mono px-1 py-0.2 rounded bg-red-600 text-white font-black leading-tight uppercase shadow-2xs">
                      CÓMIC
                    </span>
                  )}
                  {isPixel && (
                    <span className="absolute top-1 right-1 text-[8px] font-mono px-1 py-0.2 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold leading-tight uppercase">
                      PIXEL
                    </span>
                  )}
                  {isFormal && (
                    <span className="absolute top-1 right-1 text-[7.5px] font-mono px-1 py-0.2 rounded bg-slate-900 text-amber-300 border border-amber-400/40 font-bold leading-tight uppercase">
                      OFICIAL
                    </span>
                  )}
                  {isCartoon && (
                    <span className="absolute top-1 right-1 text-[7.5px] font-mono px-1 py-0.2 rounded bg-amber-500 text-slate-950 font-bold leading-tight uppercase">
                      FUN
                    </span>
                  )}
                  {isRetro && (
                    <span className="absolute top-1 right-1 text-[7px] font-mono px-1 py-0.2 rounded bg-zinc-900 text-amber-200 dark:bg-zinc-100 dark:text-zinc-900 font-bold leading-tight uppercase border border-amber-300/30">
                      1930s
                    </span>
                  )}
                  <div className="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:text-purple-600 transition-colors">
                    {item.svgContent ? (
                      <div
                        className="w-9 h-9 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
                        style={{ imageRendering: isPixel ? 'pixelated' : 'auto' }}
                        dangerouslySetInnerHTML={{ __html: item.svgContent }}
                      />
                    ) : (
                      <svg
                        viewBox={item.viewBox || '0 0 24 24'}
                        className="w-8 h-8 max-w-full max-h-full"
                      >
                        <path
                          d={item.svgPath}
                          fill={item.defaultFill || 'currentColor'}
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300 group-hover:text-purple-700 dark:group-hover:text-purple-400 mt-1 truncate max-w-full text-center">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

