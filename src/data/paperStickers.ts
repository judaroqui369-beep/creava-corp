// 10 Hyperrealistic Paper Stickers for Graphic Elements
// Includes torn edges, crumpled sheets, curled sticky notes, masking tape, burnt parchment, and kraft tags.

export interface PaperStickerItem {
  id: string;
  name: string;
  category: 'Stickers Papel & Rasgado';
  subCategory: 'Papel Rasgado' | 'Papel Arrugado' | 'Notas & Post-its' | 'Cintas Adhesivas' | 'Vintage & Texturas' | 'Etiquetas & Tags' | 'Hojas & Cuadernos';
  svgContent: string;
  dataUri: string;
  viewBox: string;
  defaultFill: string;
  tags: string[];
}

function createPaperSvg(svgInner: string, viewBox = '0 0 180 180'): { svgContent: string; dataUri: string; viewBox: string } {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%" fill="none">${svgInner}</svg>`;
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
  return { svgContent, dataUri, viewBox };
}

export const PAPER_STICKERS: PaperStickerItem[] = [
  // =========================================================================
  // 1. TIRA DE PAPEL BLANCO RASGADO HORIZONTAL (Torn Paper Strip / Deckle Edge)
  // =========================================================================
  {
    id: 'paper-torn-strip-horizontal',
    name: 'Tira de Papel Blanco Rasgado',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Papel Rasgado',
    ...createPaperSvg(`
      <defs>
        <filter id="pshadow1" x="-10%" y="-20%" width="125%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="4.5" flood-color="#0f172a" flood-opacity="0.22" />
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#0f172a" flood-opacity="0.14" />
        </filter>
        <linearGradient id="pgrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FCFCFA" />
          <stop offset="50%" stop-color="#F7F6F2" />
          <stop offset="100%" stop-color="#ECEAE3" />
        </linearGradient>
        <linearGradient id="pcore1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#F4F4F0" />
        </linearGradient>
      </defs>

      <!-- Soft ambient shadow -->
      <g filter="url(#pshadow1)">
        <!-- Underlying raw white pulp fiber fringe (deckle tear) -->
        <path d="M 12,22 
          C 16,19 22,23 30,20 C 38,18 45,23 55,20 C 66,17 74,22 85,19 C 96,16 104,22 116,19 C 128,17 137,22 148,18 C 160,15 170,22 182,18 C 193,16 202,21 214,17 C 220,19 228,21 230,25
          L 232,68 
          C 226,65 218,72 208,68 C 197,64 188,71 176,67 C 164,63 155,69 143,66 C 132,62 122,69 110,65 C 98,61 88,68 76,64 C 64,61 54,67 42,63 C 32,60 22,66 12,62 Z"
          fill="url(#pcore1)" stroke="#E2E8F0" stroke-width="0.75" />

        <!-- Main paper body with fibrous deckle edges -->
        <path d="M 14,24 
          C 18,22 24,25 32,22 C 40,20 48,25 57,22 C 68,19 76,24 87,21 C 98,18 106,24 118,21 C 130,19 139,24 150,20 C 162,17 172,24 184,20 C 195,18 204,23 216,19 C 221,21 226,22 228,26
          L 230,65 
          C 224,63 216,69 206,65 C 195,62 186,68 174,64 C 162,61 153,66 141,63 C 130,60 120,66 108,62 C 96,59 86,65 74,62 C 62,59 52,64 40,61 C 30,58 21,63 13,60 Z"
          fill="url(#pgrad1)" />
      </g>

      <!-- Torn paper fiber fringes & micro-fibrils -->
      <path d="M 18,23.5 L 19,20 M 34,21 L 35,17.5 M 58,21.5 L 59,18 M 88,20.5 L 89,17 M 120,20.5 L 121,17 M 152,19.5 L 153,16 M 186,19.5 L 187,16.5 M 218,18.5 L 219,16" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity="0.9" />
      <path d="M 22,61 L 23,64 M 52,62 L 53,65 M 84,63 L 85,66.5 M 116,63.5 L 117,67 M 148,64.5 L 149,68 M 180,65.5 L 181,69 M 212,66.5 L 213,70" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" opacity="0.9" />

      <!-- Subtle paper fiber grain texture & transverse creasing -->
      <path d="M 40,24 Q 42,42 41,61 M 95,22 Q 97,44 94,63 M 155,21 Q 153,40 156,64 M 190,20 Q 192,43 189,65" stroke="#E5E5DF" stroke-width="0.6" stroke-dasharray="2 4" opacity="0.5" />
      <path d="M 15,25 L 227,27" stroke="#FFFFFF" stroke-width="1" opacity="0.8" />
      <path d="M 14,59 L 229,64" stroke="#D1CFCA" stroke-width="0.75" opacity="0.6" />
    `, '0 0 240 90'),
    defaultFill: '#FAF9F6',
    tags: ['papel', 'rasgado', 'tira', 'blanco', 'banner', 'scrapbook', 'textura', 'realista']
  },

  // =========================================================================
  // 2. HOJA CUADRICULADA RASGADA CON ESPIRAL (Torn Spiral Notebook Page)
  // =========================================================================
  {
    id: 'paper-notebook-spiral-torn',
    name: 'Hoja Cuadriculada con Agujeros de Espiral',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Hojas & Cuadernos',
    ...createPaperSvg(`
      <defs>
        <filter id="pshadow2" x="-15%" y="-15%" width="130%" height="135%">
          <feDropShadow dx="3" dy="6" stdDeviation="5" flood-color="#0f172a" flood-opacity="0.25" />
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-color="#0f172a" flood-opacity="0.15" />
        </filter>
        <linearGradient id="pgrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FCFCFB" />
          <stop offset="100%" stop-color="#F2EFE9" />
        </linearGradient>
        <linearGradient id="curlgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#D9D5CC" />
          <stop offset="70%" stop-color="#ECE8DF" />
          <stop offset="100%" stop-color="#FAF8F5" />
        </linearGradient>
        <pattern id="gridpat" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#93C5FD" stroke-width="0.6" opacity="0.55" />
        </pattern>
      </defs>

      <!-- Main sheet with cast shadow -->
      <g filter="url(#pshadow2)">
        <!-- Irregular page shape with torn spiral left edge and ripped bottom right -->
        <path d="M 28,15 
          L 158,15 
          C 160,15 162,17 162,19
          L 162,142
          C 158,144 153,141 146,145 C 139,149 133,144 125,147 C 118,150 112,146 104,151 C 96,155 90,151 81,154 C 72,157 65,152 56,156 C 48,159 40,154 33,158
          L 28,158 Z"
          fill="url(#pgrad2)" />
        
        <!-- Grid pattern fill clipped to inside page -->
        <path d="M 36,18 L 158,18 L 158,140 L 36,152 Z" fill="url(#gridpat)" />

        <!-- Red margin rule line -->
        <line x1="48" y1="15" x2="48" y2="155" stroke="#F87171" stroke-width="1.2" opacity="0.75" />
        <line x1="50" y1="15" x2="50" y2="155" stroke="#FCA5A5" stroke-width="0.5" opacity="0.5" />

        <!-- 7 Spiral punch holes with ripped open edges on left side -->
        <!-- Hole 1 -->
        <circle cx="28" cy="28" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="0.5" />
        <path d="M 20,28 L 24,28" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
        <path d="M 20,26 L 24,27.5 M 20,30 L 24,28.5" stroke="#9CA3AF" stroke-width="0.75" />
        <circle cx="28" cy="28" r="3.2" fill="#E5E7EB" />

        <!-- Hole 2 -->
        <circle cx="28" cy="46" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="0.5" />
        <path d="M 20,46 L 24,46" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="28" cy="46" r="3.2" fill="#E5E7EB" />

        <!-- Hole 3 -->
        <circle cx="28" cy="64" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="0.5" />
        <path d="M 20,64 L 24,64" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="28" cy="64" r="3.2" fill="#E5E7EB" />

        <!-- Hole 4 -->
        <circle cx="28" cy="82" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="0.5" />
        <path d="M 20,82 L 24,82" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="28" cy="82" r="3.2" fill="#E5E7EB" />

        <!-- Hole 5 -->
        <circle cx="28" cy="100" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="0.5" />
        <path d="M 20,100 L 24,100" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="28" cy="100" r="3.2" fill="#E5E7EB" />

        <!-- Hole 6 -->
        <circle cx="28" cy="118" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="0.5" />
        <path d="M 20,118 L 24,118" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="28" cy="118" r="3.2" fill="#E5E7EB" />

        <!-- Hole 7 -->
        <circle cx="28" cy="136" r="4.5" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="0.5" />
        <path d="M 20,136 L 24,136" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="28" cy="136" r="3.2" fill="#E5E7EB" />

        <!-- Torn bottom edge fiber accents -->
        <path d="M 33,158 Q 95,152 162,142" stroke="#FFFFFF" stroke-width="1.5" opacity="0.8" />
      </g>

      <!-- Realistic folded Dog-Ear / Curled bottom corner -->
      <g>
        <path d="M 144,146 Q 146,160 152,168 L 162,142 Z" fill="#000000" opacity="0.18" filter="blur(2px)" />
        <path d="M 144,146 L 162,164 L 162,142 Z" fill="url(#curlgrad)" stroke="#D4D0C5" stroke-width="0.6" />
        <line x1="144" y1="146" x2="162" y2="164" stroke="#C4BFB3" stroke-width="1" />
      </g>
    `, '0 0 180 180'),
    defaultFill: '#FCFCFB',
    tags: ['papel', 'cuadriculado', 'cuaderno', 'espiral', 'libreta', 'nota', 'rasgado', 'estudio']
  },

  // =========================================================================
  // 3. PAPEL KRAFT ULTRA-ARRUGADO & DESDOBLADO (Crumpled Kraft Paper Sheet)
  // =========================================================================
  {
    id: 'paper-crumpled-kraft-sheet',
    name: 'Papel Kraft Ultra-Arrugado 3D',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Papel Arrugado',
    ...createPaperSvg(`
      <defs>
        <filter id="pshadow3" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="7" stdDeviation="6" flood-color="#451a03" flood-opacity="0.32" />
          <feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.2" />
        </filter>
        <linearGradient id="kfacet1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#E2984A" />
          <stop offset="100%" stop-color="#C27A2F" />
        </linearGradient>
        <linearGradient id="kfacet2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#9C5919" />
          <stop offset="100%" stop-color="#BD7427" />
        </linearGradient>
        <linearGradient id="kfacet3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#F2AE63" />
          <stop offset="100%" stop-color="#DF9344" />
        </linearGradient>
        <linearGradient id="kfacet4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#844810" />
          <stop offset="100%" stop-color="#A5611E" />
        </linearGradient>
        <linearGradient id="kfacet5" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#F7BE7E" />
          <stop offset="100%" stop-color="#DE9446" />
        </linearGradient>
      </defs>

      <g filter="url(#pshadow3)">
        <!-- Irregular crinkled outer boundary of crumpled sheet -->
        <!-- Facet polygons simulating 3D topography and sharp creases -->
        <polygon points="22,32 58,18 78,44 42,60" fill="url(#kfacet1)" />
        <polygon points="58,18 112,20 126,52 78,44" fill="url(#kfacet3)" />
        <polygon points="112,20 156,28 142,68 126,52" fill="url(#kfacet2)" />
        <polygon points="22,32 42,60 18,88 16,56" fill="url(#kfacet4)" />
        <polygon points="42,60 78,44 92,86 48,102" fill="url(#kfacet5)" />
        <polygon points="78,44 126,52 134,96 92,86" fill="url(#kfacet1)" />
        <polygon points="126,52 142,68 162,106 134,96" fill="url(#kfacet4)" />
        <polygon points="142,68 156,28 168,76 162,106" fill="url(#kfacet3)" />
        <polygon points="18,88 48,102 34,136 20,118" fill="url(#kfacet2)" />
        <polygon points="48,102 92,86 86,134 46,146" fill="url(#kfacet3)" />
        <polygon points="92,86 134,96 142,138 86,134" fill="url(#kfacet2)" />
        <polygon points="134,96 162,106 158,148 142,138" fill="url(#kfacet5)" />
        <polygon points="34,136 46,146 72,168 38,162" fill="url(#kfacet4)" />
        <polygon points="46,146 86,134 116,166 72,168" fill="url(#kfacet1)" />
        <polygon points="86,134 142,138 136,168 116,166" fill="url(#kfacet3)" />
        <polygon points="142,138 158,148 154,166 136,168" fill="url(#kfacet2)" />

        <!-- Sharp crease highlights along ridge crests -->
        <polyline points="22,32 42,60 78,44 112,20" stroke="#FDE68A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />
        <polyline points="42,60 48,102 92,86 126,52" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" />
        <polyline points="18,88 48,102 46,146 86,134 142,138" stroke="#FCD34D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity="0.75" />
        <polyline points="78,44 92,86 86,134 116,166" stroke="#FEF3C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
        <polyline points="126,52 134,96 142,138 158,148" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7" />

        <!-- Dark crease shadow valleys -->
        <polyline points="58,18 78,44 92,86 48,102 34,136" stroke="#633107" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />
        <polyline points="112,20 126,52 134,96 86,134 72,168" stroke="#522704" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity="0.65" />
        <polyline points="142,68 134,96 142,138 136,168" stroke="#451A03" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.55" />

        <!-- Fibrous cardboard speckles & micro texture -->
        <circle cx="64" cy="52" r="0.8" fill="#451A03" opacity="0.4" />
        <circle cx="108" cy="74" r="1.1" fill="#451A03" opacity="0.35" />
        <circle cx="52" cy="116" r="0.9" fill="#451A03" opacity="0.4" />
        <circle cx="128" cy="122" r="1" fill="#451A03" opacity="0.3" />
        <circle cx="84" cy="150" r="0.8" fill="#451A03" opacity="0.35" />
      </g>
    `, '0 0 185 185'),
    defaultFill: '#D97706',
    tags: ['papel', 'kraft', 'arrugado', 'carton', '3D', 'textura', 'realista', 'reciclado']
  },

  // =========================================================================
  // 4. PAPEL BLANCO ARRUGADO CON PLIEGUES 3D (Crumpled White Paper Sheet)
  // =========================================================================
  {
    id: 'paper-crumpled-white-scrap',
    name: 'Papel Blanco Arrugado con Pliegues 3D',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Papel Arrugado',
    ...createPaperSvg(`
      <defs>
        <filter id="pshadow4" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="6" stdDeviation="5.5" flood-color="#0f172a" flood-opacity="0.22" />
          <feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="#0f172a" flood-opacity="0.12" />
        </filter>
        <linearGradient id="wfacet1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>
        <linearGradient id="wfacet2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#F1F5F9" />
        </linearGradient>
        <linearGradient id="wfacet3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
        <linearGradient id="wfacet4" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#F8FAFC" />
        </linearGradient>
        <linearGradient id="wfacet5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#E2E8F0" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>
      </defs>

      <g filter="url(#pshadow4)">
        <!-- 3D geometric mesh of white paper creases -->
        <polygon points="26,36 62,20 84,48 44,66" fill="url(#wfacet4)" />
        <polygon points="62,20 118,22 130,56 84,48" fill="url(#wfacet1)" />
        <polygon points="118,22 154,32 144,72 130,56" fill="url(#wfacet2)" />
        <polygon points="26,36 44,66 22,94 18,60" fill="url(#wfacet3)" />
        <polygon points="44,66 84,48 96,90 52,106" fill="url(#wfacet4)" />
        <polygon points="84,48 130,56 138,100 96,90" fill="url(#wfacet5)" />
        <polygon points="130,56 144,72 158,110 138,100" fill="url(#wfacet3)" />
        <polygon points="144,72 154,32 164,80 158,110" fill="url(#wfacet1)" />
        <polygon points="22,94 52,106 38,140 24,122" fill="url(#wfacet2)" />
        <polygon points="52,106 96,90 90,138 48,150" fill="url(#wfacet1)" />
        <polygon points="96,90 138,100 144,142 90,138" fill="url(#wfacet3)" />
        <polygon points="138,100 158,110 154,152 144,142" fill="url(#wfacet4)" />
        <polygon points="38,140 48,150 74,166 40,162" fill="url(#wfacet5)" />
        <polygon points="48,150 90,138 118,166 74,166" fill="url(#wfacet4)" />
        <polygon points="90,138 144,142 138,168 118,166" fill="url(#wfacet2)" />
        <polygon points="144,142 154,152 150,166 138,168" fill="url(#wfacet3)" />

        <!-- Crisp white light highlights along folded peaks -->
        <polyline points="26,36 44,66 84,48 118,22" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <polyline points="44,66 52,106 96,90 130,56" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <polyline points="22,94 52,106 48,150 90,138 144,142" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <polyline points="84,48 96,90 90,138 118,166" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <polyline points="130,56 138,100 144,142 154,152" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Deep shaded valley lines -->
        <polyline points="62,20 84,48 96,90 52,106 38,140" stroke="#64748B" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />
        <polyline points="118,22 130,56 138,100 90,138 74,166" stroke="#475569" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" opacity="0.65" />
        <polyline points="144,72 138,100 144,142 138,168" stroke="#334155" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.55" />
      </g>
    `, '0 0 185 185'),
    defaultFill: '#FFFFFF',
    tags: ['papel', 'blanco', 'arrugado', '3D', 'pliegues', 'realista', 'hoja', 'textura']
  },

  // =========================================================================
  // 5. POST-IT AMARILLO CANARIO CURVADO 3D (Curled Sticky Note)
  // =========================================================================
  {
    id: 'paper-postit-curled-yellow',
    name: 'Post-it Amarillo Canario Curvado 3D',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Notas & Post-its',
    ...createPaperSvg(`
      <defs>
        <filter id="postit-shadow" x="-20%" y="-10%" width="145%" height="150%">
          <feDropShadow dx="2" dy="5" stdDeviation="4.5" flood-color="#0f172a" flood-opacity="0.2" />
        </filter>
        <filter id="curl-under-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        <linearGradient id="postit-face" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stop-color="#FEF9C3" />
          <stop offset="25%" stop-color="#FEF08A" />
          <stop offset="70%" stop-color="#FDE047" />
          <stop offset="100%" stop-color="#EAB308" />
        </linearGradient>
        <linearGradient id="postit-curl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#CA8A04" />
          <stop offset="45%" stop-color="#FACC15" />
          <stop offset="100%" stop-color="#FEF08A" />
        </linearGradient>
        <linearGradient id="glue-band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35" />
          <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.35" />
        </linearGradient>
      </defs>

      <!-- Projected soft shadow beneath lifting corner -->
      <path d="M 108,136 C 118,144 140,152 154,142 C 160,132 150,118 136,112 Z" fill="#000000" opacity="0.32" filter="url(#curl-under-shadow)" />

      <!-- Main Sticky Note Body -->
      <g filter="url(#postit-shadow)">
        <!-- Curved bottom boundary simulating upward paper tension -->
        <path d="M 22,22 
          L 154,22 
          L 154,106 
          C 142,108 126,118 114,134 
          C 96,140 54,146 22,142 Z"
          fill="url(#postit-face)" />

        <!-- Adhesive top band highlight -->
        <path d="M 22,22 L 154,22 L 154,42 L 22,42 Z" fill="url(#glue-band)" />
        <line x1="22" y1="42" x2="154" y2="42" stroke="#CA8A04" stroke-width="0.5" opacity="0.3" stroke-dasharray="3 3" />

        <!-- Paper top bevel highlight -->
        <line x1="22" y1="23" x2="154" y2="23" stroke="#FFFFFF" stroke-width="1.2" opacity="0.9" />
        <line x1="23" y1="22" x2="23" y2="142" stroke="#FFFFFF" stroke-width="0.8" opacity="0.7" />
      </g>

      <!-- Realistic 3D Curled Flap revealing underside -->
      <g>
        <path d="M 114,134 
          C 126,118 142,108 154,106 
          C 164,124 146,156 122,154 
          C 114,148 112,140 114,134 Z"
          fill="url(#postit-curl)" stroke="#B45309" stroke-width="0.75" />
        
        <!-- Specular reflection along curl edge -->
        <path d="M 116,134 C 128,118 144,108 153,107" stroke="#FFFFFF" stroke-width="1.4" opacity="0.85" fill="none" />
      </g>
    `, '0 0 180 180'),
    defaultFill: '#FEF08A',
    tags: ['postit', 'nota', 'amarillo', 'adhesivo', 'curvado', '3D', 'recordatorio', 'oficina']
  },

  // =========================================================================
  // 6. CINTA DE ENMASCARAR / WASHI TAPE RASGADA (Translucent Masking Tape)
  // =========================================================================
  {
    id: 'paper-masking-tape-translucent',
    name: 'Cinta Masking Tape Semitransparente',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Cintas Adhesivas',
    ...createPaperSvg(`
      <defs>
        <filter id="tape-shadow" x="-10%" y="-25%" width="125%" height="160%">
          <feDropShadow dx="0" dy="3.5" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.18" />
        </filter>
        <linearGradient id="tape-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFFDF5" stop-opacity="0.9" />
          <stop offset="20%" stop-color="#F5EFE0" stop-opacity="0.85" />
          <stop offset="80%" stop-color="#EDE2C8" stop-opacity="0.82" />
          <stop offset="100%" stop-color="#E2D4B5" stop-opacity="0.88" />
        </linearGradient>
      </defs>

      <g filter="url(#tape-shadow)">
        <!-- Torn jagged serrated edges at both ends -->
        <path d="M 18,22 
          C 20,24 16,27 21,30 C 17,33 22,36 18,39 C 21,42 16,45 20,48
          L 204,48
          C 200,45 205,42 201,39 C 205,36 200,33 204,30 C 199,27 203,24 201,22
          Z"
          fill="url(#tape-body)" stroke="#D6C6A5" stroke-width="0.6" />

        <!-- Longitudinal crinkle lines and tape fibrous grain -->
        <line x1="20" y1="24" x2="202" y2="24" stroke="#FFFFFF" stroke-width="1.2" opacity="0.7" />
        <line x1="20" y1="31" x2="202" y2="31" stroke="#FAF5E8" stroke-width="0.8" opacity="0.6" stroke-dasharray="12 4" />
        <line x1="19" y1="38" x2="203" y2="38" stroke="#E0D2B4" stroke-width="0.7" opacity="0.5" stroke-dasharray="8 6" />
        <line x1="20" y1="46" x2="204" y2="46" stroke="#D1BE98" stroke-width="0.9" opacity="0.5" />

        <!-- Fiber fray flecks on torn ends -->
        <line x1="16" y1="25" x2="19" y2="26" stroke="#FFFFFF" stroke-width="1" />
        <line x1="15" y1="35" x2="18" y2="36" stroke="#FFFFFF" stroke-width="1" />
        <line x1="15" y1="44" x2="19" y2="45" stroke="#FFFFFF" stroke-width="1" />
        <line x1="203" y1="26" x2="206" y2="25" stroke="#FFFFFF" stroke-width="1" />
        <line x1="202" y1="35" x2="206" y2="34" stroke="#FFFFFF" stroke-width="1" />
        <line x1="203" y1="44" x2="207" y2="43" stroke="#FFFFFF" stroke-width="1" />
      </g>
    `, '0 0 220 70'),
    defaultFill: '#F5EFE0',
    tags: ['cinta', 'masking', 'tape', 'washi', 'adhesiva', 'transparente', 'scrapbook', 'fijar']
  },

  // =========================================================================
  // 7. NOTA RAYADA CON CINTA ADHESIVA (Lined Notepad with Scotch Tape)
  // =========================================================================
  {
    id: 'paper-lined-memo-taped',
    name: 'Nota Rayada con Cinta Adhesiva',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Notas & Post-its',
    ...createPaperSvg(`
      <defs>
        <filter id="noteshadow" x="-15%" y="-15%" width="130%" height="135%">
          <feDropShadow dx="2" dy="5" stdDeviation="4.5" flood-color="#0f172a" flood-opacity="0.22" />
        </filter>
        <linearGradient id="notebody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFFDF7" />
          <stop offset="100%" stop-color="#F5F0E4" />
        </linearGradient>
        <linearGradient id="scotchtaped" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
          <stop offset="30%" stop-color="#E2E8F0" stop-opacity="0.6" />
          <stop offset="70%" stop-color="#CBD5E1" stop-opacity="0.55" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.75" />
        </linearGradient>
      </defs>

      <!-- Note paper sheet -->
      <g filter="url(#noteshadow)" transform="rotate(-1.5 90 105)">
        <!-- Perforated ripped top edge -->
        <path d="M 22,28 
          C 26,26 30,30 35,27 C 40,25 45,29 50,26 C 55,24 60,28 65,25 C 70,23 75,27 80,24 C 85,22 90,26 95,24 C 100,22 105,26 110,23 C 115,22 120,26 125,23 C 130,22 135,26 140,23 C 145,22 150,26 156,24
          L 158,186 C 158,188 156,190 154,190 L 26,190 C 24,190 22,188 22,186 Z"
          fill="url(#notebody)" stroke="#DDD6C6" stroke-width="0.75" />

        <!-- Double red margin rule on left -->
        <line x1="42" y1="28" x2="42" y2="190" stroke="#F87171" stroke-width="1" opacity="0.7" />
        <line x1="44" y1="28" x2="44" y2="190" stroke="#FCA5A5" stroke-width="0.5" opacity="0.5" />

        <!-- Blue horizontal notebook lines -->
        <line x1="22" y1="50" x2="158" y2="50" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="66" x2="158" y2="66" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="82" x2="158" y2="82" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="98" x2="158" y2="98" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="114" x2="158" y2="114" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="130" x2="158" y2="130" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="146" x2="158" y2="146" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="162" x2="158" y2="162" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
        <line x1="22" y1="178" x2="158" y2="178" stroke="#93C5FD" stroke-width="0.8" opacity="0.6" />
      </g>

      <!-- Frosted scotch tape tab holding top center -->
      <g transform="rotate(2 90 24)">
        <path d="M 68,10 
          C 70,12 67,14 71,15 C 68,17 72,18 69,20
          L 111,20
          C 108,18 112,17 109,15 C 113,14 110,12 112,10 Z"
          fill="#000000" opacity="0.14" filter="blur(2px)" />

        <path d="M 68,10 
          C 70,12 67,14 71,15 C 68,17 72,18 69,20
          L 111,20
          C 108,18 112,17 109,15 C 113,14 110,12 112,10 Z"
          fill="url(#scotchtaped)" stroke="#CBD5E1" stroke-width="0.5" />
        
        <!-- Gloss highlight on tape -->
        <line x1="72" y1="12" x2="108" y2="12" stroke="#FFFFFF" stroke-width="1" opacity="0.85" />
      </g>
    `, '0 0 180 205'),
    defaultFill: '#FFFDF7',
    tags: ['nota', 'rayada', 'cinta', 'scotch', 'escuela', 'oficina', 'hoja', 'realista']
  },

  // =========================================================================
  // 8. PERGAMINO VINTAGE QUEMADO & ENVEJECIDO (Aged & Burnt Parchment)
  // =========================================================================
  {
    id: 'paper-vintage-burnt-parchment',
    name: 'Pergamino Vintage Quemado & Envejecido',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Vintage & Texturas',
    ...createPaperSvg(`
      <defs>
        <filter id="burnt-shadow" x="-15%" y="-15%" width="135%" height="135%">
          <feDropShadow dx="3" dy="6" stdDeviation="5" flood-color="#1c0a00" flood-opacity="0.3" />
        </filter>
        <radialGradient id="parchment-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#FDF6E2" />
          <stop offset="60%" stop-color="#EED9B3" />
          <stop offset="85%" stop-color="#C9985E" />
          <stop offset="96%" stop-color="#6E380D" />
          <stop offset="100%" stop-color="#1A0700" />
        </radialGradient>
        <linearGradient id="char-border" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3D1804" />
          <stop offset="50%" stop-color="#170500" />
          <stop offset="100%" stop-color="#4F1F04" />
        </linearGradient>
      </defs>

      <g filter="url(#burnt-shadow)">
        <!-- Scorched irregular charred parchment silhouette -->
        <path d="M 28,34 
          C 36,22 52,38 68,26 C 84,18 96,30 114,22 C 128,16 142,32 152,24 C 160,36 156,54 162,70 C 166,86 152,98 160,116 C 164,132 150,146 156,158 C 142,166 128,154 112,162 C 96,170 82,156 66,164 C 52,170 38,154 26,160 C 18,146 32,130 22,114 C 16,98 30,84 24,68 C 20,52 34,44 28,34 Z"
          fill="url(#parchment-glow)" stroke="url(#char-border)" stroke-width="2.5" stroke-linejoin="round" />

        <!-- Singed charred holes burned completely through paper -->
        <!-- Burnt hole 1 -->
        <ellipse cx="140" cy="46" rx="9" ry="7" fill="#000000" opacity="0.3" filter="blur(1px)" />
        <path d="M 134,44 C 137,40 144,39 148,43 C 151,47 147,53 142,52 C 136,51 132,47 134,44 Z" fill="#1A0700" stroke="#78350F" stroke-width="1.5" />
        <ellipse cx="141" cy="46" rx="4" ry="3" fill="#FFFFFF" opacity="0.9" />

        <!-- Burnt hole 2 (bottom corner) -->
        <path d="M 44,142 C 48,138 56,139 58,144 C 60,149 54,153 49,152 C 44,151 42,146 44,142 Z" fill="#1A0700" stroke="#78350F" stroke-width="1.2" />

        <!-- Tea/coffee foxing stains and aging rings -->
        <circle cx="86" cy="74" r="16" fill="#92400E" opacity="0.08" filter="blur(4px)" />
        <circle cx="118" cy="116" r="22" fill="#78350F" opacity="0.07" filter="blur(5px)" />
        
        <!-- Singed embers & glowing brown borders -->
        <path d="M 32,38 C 42,28 56,42 70,30" stroke="#B45309" stroke-width="1.5" opacity="0.6" fill="none" />
        <path d="M 148,148 C 138,156 122,148 108,154" stroke="#B45309" stroke-width="1.5" opacity="0.6" fill="none" />
      </g>
    `, '0 0 185 185'),
    defaultFill: '#EED9B3',
    tags: ['pergamino', 'vintage', 'quemado', 'antiguo', 'fuego', 'mapa', 'medieval', 'mancha']
  },

  // =========================================================================
  // 9. BOLETO RETRO CON PERFORACIÓN RASGADA (Perforated Ticket Stub)
  // =========================================================================
  {
    id: 'paper-ticket-perforated-stub',
    name: 'Boleto Retro con Talón Rasgado',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Vintage & Texturas',
    ...createPaperSvg(`
      <defs>
        <filter id="ticketshadow" x="-10%" y="-20%" width="125%" height="150%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.22" />
        </filter>
        <linearGradient id="ticketbody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFFBEB" />
          <stop offset="100%" stop-color="#FEEBC8" />
        </linearGradient>
      </defs>

      <g filter="url(#ticketshadow)">
        <!-- Left Main Ticket Body -->
        <path d="M 16,20 
          L 142,20 
          C 142,26 146,30 152,30
          L 152,42
          C 148,46 153,49 149,53 C 153,57 148,60 152,64
          L 152,74
          C 146,74 142,78 142,84
          L 16,84
          C 16,78 12,74 6,74
          L 6,30
          C 12,30 16,26 16,20 Z"
          fill="url(#ticketbody)" stroke="#D97706" stroke-width="1.2" />

        <!-- Inner Guilloché / Double Border -->
        <rect x="22" y="26" width="118" height="52" rx="2" fill="none" stroke="#D97706" stroke-width="0.8" stroke-dasharray="3 1.5" opacity="0.6" />

        <!-- Star cutout in main ticket body -->
        <polygon points="40,36 43,44 51,44 45,49 47,57 40,52 33,57 35,49 29,44 37,44" fill="#B45309" opacity="0.75" />

        <!-- Typography accents -->
        <text x="76" y="44" fill="#92400E" font-size="8" font-family="monospace" font-weight="bold" letter-spacing="2">ADMIT ONE</text>
        <text x="76" y="56" fill="#B45309" font-size="12" font-family="sans-serif" font-weight="900" letter-spacing="1">TICKET</text>
        <text x="76" y="68" fill="#B45309" font-size="6.5" font-family="monospace" letter-spacing="2">№ 742918</text>

        <!-- Barcode lines on left -->
        <line x1="124" y1="34" x2="124" y2="70" stroke="#92400E" stroke-width="2.5" />
        <line x1="128" y1="34" x2="128" y2="70" stroke="#92400E" stroke-width="1" />
        <line x1="131" y1="34" x2="131" y2="70" stroke="#92400E" stroke-width="1.8" />
        <line x1="135" y1="34" x2="135" y2="70" stroke="#92400E" stroke-width="1" />

        <!-- Right Detached / Partially Ripped Stub with angle -->
        <g transform="rotate(6 156 52)">
          <path d="M 158,22 
            L 204,22 
            C 204,27 208,31 214,31
            L 214,73
            C 208,73 204,77 204,82
            L 158,82
            C 158,76 155,73 158,67 C 154,63 158,59 154,55 C 158,51 154,47 158,43
            Z"
            fill="url(#ticketbody)" stroke="#D97706" stroke-width="1.2" />

          <!-- Stub number & border -->
          <text x="180" y="55" fill="#92400E" font-size="7" font-family="monospace" font-weight="bold" transform="rotate(-90 180 55)" letter-spacing="1">STUB 742918</text>
          <line x1="162" y1="28" x2="162" y2="76" stroke="#D97706" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.6" />
        </g>
      </g>
    `, '0 0 220 100'),
    defaultFill: '#FFFBEB',
    tags: ['ticket', 'boleto', 'cine', 'perforado', 'rasgado', 'retro', 'vintage', 'entrada']
  },

  // =========================================================================
  // 10. ETIQUETA KRAFT CON OJAL METÁLICO Y CUERDA (Hang Tag with Twine)
  // =========================================================================
  {
    id: 'paper-kraft-hang-tag-string',
    name: 'Etiqueta Kraft con Ojal Metálico y Cuerda',
    category: 'Stickers Papel & Rasgado',
    subCategory: 'Etiquetas & Tags',
    ...createPaperSvg(`
      <defs>
        <filter id="tagshadow" x="-20%" y="-15%" width="145%" height="135%">
          <feDropShadow dx="3" dy="6" stdDeviation="5" flood-color="#451a03" flood-opacity="0.25" />
        </filter>
        <linearGradient id="tagkraft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#E5A665" />
          <stop offset="50%" stop-color="#CE8844" />
          <stop offset="100%" stop-color="#B26B28" />
        </linearGradient>
        <linearGradient id="grommet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FDE68A" />
          <stop offset="40%" stop-color="#D97706" />
          <stop offset="80%" stop-color="#78350F" />
          <stop offset="100%" stop-color="#FCD34D" />
        </linearGradient>
        <linearGradient id="stringgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FEF3C7" />
          <stop offset="50%" stop-color="#D97706" />
          <stop offset="100%" stop-color="#92400E" />
        </linearGradient>
      </defs>

      <!-- Looped Jute Twine / String going upwards -->
      <g>
        <!-- Shadow of twine -->
        <path d="M 80,68 C 80,45 68,26 72,8 C 76,8 88,26 84,68" stroke="#000000" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.18" filter="blur(2px)" />
        <!-- Actual twine with twisted fibers pattern -->
        <path d="M 78,66 C 78,44 67,24 72,8 C 77,8 86,24 82,66" stroke="url(#stringgrad)" stroke-width="2.6" stroke-linecap="round" fill="none" />
        <path d="M 78,66 C 78,44 67,24 72,8" stroke="#FEF9C3" stroke-width="0.8" stroke-dasharray="2 2" stroke-linecap="round" fill="none" opacity="0.75" />
      </g>

      <!-- Main Hang Tag -->
      <g filter="url(#tagshadow)" transform="rotate(2 80 135)">
        <!-- Classic luggage / price tag silhouette with clipped top corners -->
        <path d="M 52,50 
          L 108,50 
          L 132,74 
          L 132,204 
          C 132,208 128,212 124,212 
          L 36,212 
          C 32,212 28,208 28,204 
          L 28,74 
          Z"
          fill="url(#tagkraft)" stroke="#8C4B13" stroke-width="1.2" />

        <!-- Decorative dashed inner border -->
        <path d="M 54,54 L 106,54 L 128,76 L 128,206 L 32,206 L 32,76 Z" fill="none" stroke="#FDE68A" stroke-width="0.75" stroke-dasharray="3 2.5" opacity="0.55" />

        <!-- Subtle paper grain & horizontal creases -->
        <line x1="34" y1="110" x2="126" y2="110" stroke="#78350F" stroke-width="0.5" opacity="0.3" />
        <line x1="34" y1="150" x2="126" y2="150" stroke="#78350F" stroke-width="0.5" opacity="0.3" />

        <!-- Embossed metallic brass eyelet grommet -->
        <circle cx="80" cy="66" r="10" fill="url(#grommet)" stroke="#5E2B05" stroke-width="0.8" />
        <circle cx="80" cy="66" r="8" fill="none" stroke="#FFFFFF" stroke-width="0.6" opacity="0.6" />
        <!-- Hollow hole through tag -->
        <circle cx="80" cy="66" r="5.5" fill="#FFFFFF" stroke="#451A03" stroke-width="1" />

        <!-- Twine knot over eyelet -->
        <ellipse cx="80" cy="66" rx="4" ry="2.5" fill="#B45309" stroke="#78350F" stroke-width="0.75" />
      </g>
    `, '0 0 160 220'),
    defaultFill: '#CE8844',
    tags: ['etiqueta', 'tag', 'kraft', 'cuerda', 'ojal', 'ropa', 'precio', 'equipaje', 'realista']
  }
];
