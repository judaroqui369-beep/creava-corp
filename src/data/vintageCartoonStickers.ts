// 50 High-Quality Vintage 1930s Rubber Hose / Steamboat Willie Cartoon Stickers
// Classic early animation aesthetic: pie-cut eyes, 4-fingered white gloves, rubber hose bends, and vintage monochrome/retro accents.

export interface VintageStickerItem {
  id: string;
  name: string;
  category: 'Stickers Retro 1930s';
  subCategory: 'Personajes & Caritas 1930s' | 'Guantes Blancos & Gestos' | 'Steamboat & Aventura Náutica' | 'Objetos Vivos & Rubber Hose' | 'Cine, Música & Show 1930s';
  svgContent: string;
  dataUri: string;
  viewBox: string;
  defaultFill: string;
  tags: string[];
}

export const VINTAGE_CARTOON_STICKERS: VintageStickerItem[] = [
  {
    "id": "retro-mickey-whistling",
    "name": "Ratón Steamboat Silbando",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"34\" cy=\"36\" r=\"20\" fill=\"#18181B\"/>\n    <circle cx=\"86\" cy=\"36\" r=\"20\" fill=\"#18181B\"/>\n    <ellipse cx=\"60\" cy=\"32\" rx=\"22\" ry=\"9\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <path d=\"M42 32 Q60 14 78 32 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <ellipse cx=\"60\" cy=\"35\" rx=\"16\" ry=\"4\" fill=\"#18181B\"/>\n    <ellipse cx=\"60\" cy=\"66\" rx=\"28\" ry=\"26\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"50\" cy=\"58\" r=\"7\" fill=\"#18181B\"/><polygon points=\"50,58 57,55 56,61\" fill=\"#FFFDF5\"/>\n    <circle cx=\"70\" cy=\"58\" r=\"7\" fill=\"#18181B\"/><polygon points=\"70,58 63,55 64,61\" fill=\"#FFFDF5\"/>\n    <ellipse cx=\"60\" cy=\"68\" rx=\"8\" ry=\"5\" fill=\"#18181B\"/>\n    <ellipse cx=\"60\" cy=\"80\" rx=\"4.5\" ry=\"6\" fill=\"#18181B\"/>\n    <ellipse cx=\"60\" cy=\"80\" rx=\"2.5\" ry=\"3.5\" fill=\"#EF4444\"/>\n    <path d=\"M84 76 Q92 70 96 74 M96 74 L96 66 L104 64 L104 72\" stroke=\"#18181B\" stroke-width=\"2.5\" fill=\"none\"/>\n    <ellipse cx=\"94\" cy=\"74\" rx=\"3\" ry=\"2\" fill=\"#18181B\"/><ellipse cx=\"102\" cy=\"72\" rx=\"3\" ry=\"2\" fill=\"#18181B\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2234%22%20cy%3D%2236%22%20r%3D%2220%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2236%22%20r%3D%2220%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2232%22%20rx%3D%2222%22%20ry%3D%229%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2032%20Q60%2014%2078%2032%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2235%22%20rx%3D%2216%22%20ry%3D%224%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2266%22%20rx%3D%2228%22%20ry%3D%2226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2258%22%20r%3D%227%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2250%2C58%2057%2C55%2056%2C61%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%2258%22%20r%3D%227%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2270%2C58%2063%2C55%2064%2C61%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2268%22%20rx%3D%228%22%20ry%3D%225%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2280%22%20rx%3D%224.5%22%20ry%3D%226%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2280%22%20rx%3D%222.5%22%20ry%3D%223.5%22%20fill%3D%22%23EF4444%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M84%2076%20Q92%2070%2096%2074%20M96%2074%20L96%2066%20L104%2064%20L104%2072%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2294%22%20cy%3D%2274%22%20rx%3D%223%22%20ry%3D%222%22%20fill%3D%22%2318181B%22/%3E%3Cellipse%20cx%3D%22102%22%20cy%3D%2272%22%20rx%3D%223%22%20ry%3D%222%22%20fill%3D%22%2318181B%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "mickey",
      "retro",
      "steamboat",
      "silbando",
      "raton",
      "vintage",
      "1930",
      "marinero"
    ]
  },
  {
    "id": "retro-mickey-wink-smile",
    "name": "Ratón Clásico Guiño Sonriente",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"32\" cy=\"34\" r=\"22\" fill=\"#18181B\"/>\n    <circle cx=\"88\" cy=\"34\" r=\"22\" fill=\"#18181B\"/>\n    <ellipse cx=\"60\" cy=\"68\" rx=\"30\" ry=\"28\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"48\" cy=\"58\" r=\"8\" fill=\"#18181B\"/><polygon points=\"48,58 55,54 54,61\" fill=\"#FFFDF5\"/>\n    <path d=\"M66 60 Q74 54 80 62\" stroke=\"#18181B\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"60\" cy=\"68\" rx=\"9\" ry=\"5.5\" fill=\"#18181B\"/>\n    <path d=\"M42 74 Q60 94 78 74\" fill=\"#18181B\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M50 82 Q60 88 70 82\" fill=\"#EF4444\"/>\n    <path d=\"M38 72 Q42 75 44 79\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M82 72 Q78 75 76 79\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2234%22%20r%3D%2222%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2288%22%20cy%3D%2234%22%20r%3D%2222%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2268%22%20rx%3D%2230%22%20ry%3D%2228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2248%22%20cy%3D%2258%22%20r%3D%228%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2248%2C58%2055%2C54%2054%2C61%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M66%2060%20Q74%2054%2080%2062%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2268%22%20rx%3D%229%22%20ry%3D%225.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2074%20Q60%2094%2078%2074%22%20fill%3D%22%2318181B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M50%2082%20Q60%2088%2070%2082%22%20fill%3D%22%23EF4444%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M38%2072%20Q42%2075%2044%2079%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M82%2072%20Q78%2075%2076%2079%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "mickey",
      "guiño",
      "sonrisa",
      "feliz",
      "raton",
      "retro",
      "vintage",
      "dibujo"
    ]
  },
  {
    "id": "retro-lady-mouse-flower",
    "name": "Ratona Coqueta con Margarita",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"34\" cy=\"38\" r=\"20\" fill=\"#18181B\"/>\n    <circle cx=\"86\" cy=\"38\" r=\"20\" fill=\"#18181B\"/>\n    <path d=\"M60 38 Q58 18 60 10\" stroke=\"#18181B\" stroke-width=\"3.5\" fill=\"none\"/>\n    <circle cx=\"60\" cy=\"10\" r=\"8\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"60\" cy=\"38\" rx=\"18\" ry=\"7\" fill=\"#E11D48\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <ellipse cx=\"60\" cy=\"68\" rx=\"28\" ry=\"26\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"49\" cy=\"60\" r=\"7\" fill=\"#18181B\"/><polygon points=\"49,60 55,56 55,62\" fill=\"#FFFDF5\"/>\n    <line x1=\"42\" y1=\"53\" x2=\"46\" y2=\"56\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"71\" cy=\"60\" r=\"7\" fill=\"#18181B\"/><polygon points=\"71,60 65,56 65,62\" fill=\"#FFFDF5\"/>\n    <line x1=\"78\" y1=\"53\" x2=\"74\" y2=\"56\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"60\" cy=\"69\" rx=\"7\" ry=\"4.5\" fill=\"#18181B\"/>\n    <path d=\"M46 75 Q60 90 74 75\" fill=\"#18181B\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M52 81 Q60 86 68 81\" fill=\"#E11D48\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2234%22%20cy%3D%2238%22%20r%3D%2220%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2238%22%20r%3D%2220%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2038%20Q58%2018%2060%2010%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2210%22%20r%3D%228%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2238%22%20rx%3D%2218%22%20ry%3D%227%22%20fill%3D%22%23E11D48%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2268%22%20rx%3D%2228%22%20ry%3D%2226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2249%22%20cy%3D%2260%22%20r%3D%227%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2249%2C60%2055%2C56%2055%2C62%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2242%22%20y1%3D%2253%22%20x2%3D%2246%22%20y2%3D%2256%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2271%22%20cy%3D%2260%22%20r%3D%227%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2271%2C60%2065%2C56%2065%2C62%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2278%22%20y1%3D%2253%22%20x2%3D%2274%22%20y2%3D%2256%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2269%22%20rx%3D%227%22%20ry%3D%224.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M46%2075%20Q60%2090%2074%2075%22%20fill%3D%22%2318181B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M52%2081%20Q60%2086%2068%2081%22%20fill%3D%22%23E11D48%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "ratona",
      "minnie",
      "vintage",
      "flor",
      "coqueta",
      "pestañas",
      "retro",
      "1930"
    ]
  },
  {
    "id": "retro-dancing-sun",
    "name": "Sol Bailarín Rubber Hose",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><g stroke=\"#18181B\" stroke-width=\"3\" fill=\"#FBBF24\">\n      <path d=\"M60 14 Q66 8 60 4 Q54 8 60 14 Z\"/>\n      <path d=\"M92 24 Q98 22 98 16 Q92 18 92 24 Z\"/>\n      <path d=\"M106 56 Q112 56 112 50 Q106 50 106 56 Z\"/>\n      <path d=\"M96 86 Q102 90 98 96 Q92 92 96 86 Z\"/>\n      <path d=\"M28 24 Q22 22 22 16 Q28 18 28 24 Z\"/>\n      <path d=\"M14 56 Q8 56 8 50 Q14 50 14 56 Z\"/>\n    </g>\n    <path d=\"M46 80 Q40 96 34 98\" stroke=\"#18181B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M74 80 Q80 96 86 98\" stroke=\"#18181B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"30\" cy=\"99\" rx=\"10\" ry=\"6\" fill=\"#18181B\"/>\n    <ellipse cx=\"90\" cy=\"99\" rx=\"10\" ry=\"6\" fill=\"#18181B\"/>\n    <circle cx=\"60\" cy=\"54\" r=\"32\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"49\" cy=\"48\" r=\"6\" fill=\"#18181B\"/><polygon points=\"49,48 55,45 54,51\" fill=\"#FFFDF5\"/>\n    <circle cx=\"71\" cy=\"48\" r=\"6\" fill=\"#18181B\"/><polygon points=\"71,48 65,45 66,51\" fill=\"#FFFDF5\"/>\n    <path d=\"M42 58 Q60 76 78 58\" fill=\"#18181B\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M50 67 Q60 73 70 67\" fill=\"#EF4444\"/>\n    <path d=\"M28 54 Q14 48 16 38\" stroke=\"#18181B\" stroke-width=\"4\" fill=\"none\"/>\n    <circle cx=\"15\" cy=\"35\" r=\"7\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M92 54 Q106 48 104 38\" stroke=\"#18181B\" stroke-width=\"4\" fill=\"none\"/>\n    <circle cx=\"105\" cy=\"35\" r=\"7\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cg%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20fill%3D%22%23FBBF24%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M60%2014%20Q66%208%2060%204%20Q54%208%2060%2014%20Z%22/%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M92%2024%20Q98%2022%2098%2016%20Q92%2018%2092%2024%20Z%22/%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M106%2056%20Q112%2056%20112%2050%20Q106%2050%20106%2056%20Z%22/%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M96%2086%20Q102%2090%2098%2096%20Q92%2092%2096%2086%20Z%22/%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M28%2024%20Q22%2022%2022%2016%20Q28%2018%2028%2024%20Z%22/%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M14%2056%20Q8%2056%208%2050%20Q14%2050%2014%2056%20Z%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cpath%20d%3D%22M46%2080%20Q40%2096%2034%2098%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M74%2080%20Q80%2096%2086%2098%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2230%22%20cy%3D%2299%22%20rx%3D%2210%22%20ry%3D%226%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2290%22%20cy%3D%2299%22%20rx%3D%2210%22%20ry%3D%226%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2254%22%20r%3D%2232%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2249%22%20cy%3D%2248%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2249%2C48%2055%2C45%2054%2C51%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2271%22%20cy%3D%2248%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2271%2C48%2065%2C45%2066%2C51%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2058%20Q60%2076%2078%2058%22%20fill%3D%22%2318181B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M50%2067%20Q60%2073%2070%2067%22%20fill%3D%22%23EF4444%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M28%2054%20Q14%2048%2016%2038%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2215%22%20cy%3D%2235%22%20r%3D%227%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M92%2054%20Q106%2048%20104%2038%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22105%22%20cy%3D%2235%22%20r%3D%227%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "sol",
      "baile",
      "rubber hose",
      "botas",
      "guantes",
      "alegre",
      "verano",
      "retro"
    ]
  },
  {
    "id": "retro-flower-rubberhose",
    "name": "Flor Cantarina con Guantes",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><g fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\">\n      <circle cx=\"60\" cy=\"20\" r=\"12\"/><circle cx=\"84\" cy=\"32\" r=\"12\"/><circle cx=\"88\" cy=\"58\" r=\"12\"/>\n      <circle cx=\"36\" cy=\"32\" r=\"12\"/><circle cx=\"32\" cy=\"58\" r=\"12\"/>\n    </g>\n    <circle cx=\"60\" cy=\"45\" r=\"22\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"52\" cy=\"40\" r=\"5\" fill=\"#18181B\"/><polygon points=\"52,40 57,38 56,43\" fill=\"#FFFDF5\"/>\n    <circle cx=\"68\" cy=\"40\" r=\"5\" fill=\"#18181B\"/><polygon points=\"68,40 63,38 64,43\" fill=\"#FFFDF5\"/>\n    <ellipse cx=\"60\" cy=\"52\" rx=\"6\" ry=\"4\" fill=\"#18181B\"/>\n    <path d=\"M60 67 Q52 85 62 104\" stroke=\"#18181B\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M57 78 Q36 74 34 66\" stroke=\"#18181B\" stroke-width=\"3.5\" fill=\"none\"/>\n    <ellipse cx=\"32\" cy=\"64\" rx=\"6\" ry=\"5\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <path d=\"M60 84 Q82 82 86 74\" stroke=\"#18181B\" stroke-width=\"3.5\" fill=\"none\"/>\n    <ellipse cx=\"88\" cy=\"72\" rx=\"6\" ry=\"5\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"48\" cy=\"92\" rx=\"10\" ry=\"5\" fill=\"#22C55E\" stroke=\"#18181B\" stroke-width=\"2.5\" transform=\"rotate(-25 48 92)\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cg%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2220%22%20r%3D%2212%22/%3E%3Ccircle%20cx%3D%2284%22%20cy%3D%2232%22%20r%3D%2212%22/%3E%3Ccircle%20cx%3D%2288%22%20cy%3D%2258%22%20r%3D%2212%22/%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2236%22%20cy%3D%2232%22%20r%3D%2212%22/%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2258%22%20r%3D%2212%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2245%22%20r%3D%2222%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2252%22%20cy%3D%2240%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2252%2C40%2057%2C38%2056%2C43%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2268%22%20cy%3D%2240%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2268%2C40%2063%2C38%2064%2C43%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2252%22%20rx%3D%226%22%20ry%3D%224%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2067%20Q52%2085%2062%20104%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M57%2078%20Q36%2074%2034%2066%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2232%22%20cy%3D%2264%22%20rx%3D%226%22%20ry%3D%225%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2084%20Q82%2082%2086%2074%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2288%22%20cy%3D%2272%22%20rx%3D%226%22%20ry%3D%225%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2248%22%20cy%3D%2292%22%20rx%3D%2210%22%20ry%3D%225%22%20fill%3D%22%2322C55E%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20transform%3D%22rotate%28-25%2048%2092%29%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "flor",
      "cantarina",
      "margarita",
      "silly symphony",
      "vintage",
      "retro",
      "guantes"
    ]
  },
  {
    "id": "retro-ghost-bowler-hat",
    "name": "Fantasma Bohemio con Bombín",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><ellipse cx=\"60\" cy=\"24\" rx=\"20\" ry=\"5.5\" fill=\"#18181B\"/>\n    <path d=\"M46 24 C46 12 74 12 74 24 Z\" fill=\"#18181B\"/>\n    <rect x=\"46\" y=\"21\" width=\"28\" height=\"3\" fill=\"#EF4444\"/>\n    <path d=\"M34 50 C34 32 86 32 86 50 C86 78 92 98 84 104 C78 108 72 96 66 102 C60 108 54 96 48 102 C42 108 36 94 30 102 C26 96 34 76 34 50 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"50\" cy=\"50\" r=\"7\" fill=\"#18181B\"/><polygon points=\"50,50 56,46 56,52\" fill=\"#FFFDF5\"/>\n    <circle cx=\"70\" cy=\"50\" r=\"7\" fill=\"#18181B\"/><polygon points=\"70,50 64,46 64,52\" fill=\"#FFFDF5\"/>\n    <ellipse cx=\"60\" cy=\"66\" rx=\"6\" ry=\"8\" fill=\"#18181B\"/>\n    <path d=\"M34 58 Q18 64 22 74\" stroke=\"#18181B\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"22\" cy=\"76\" rx=\"6\" ry=\"5\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <path d=\"M86 58 Q102 54 98 42\" stroke=\"#18181B\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"98\" cy=\"40\" rx=\"6\" ry=\"5\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cellipse%20cx%3D%2260%22%20cy%3D%2224%22%20rx%3D%2220%22%20ry%3D%225.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M46%2024%20C46%2012%2074%2012%2074%2024%20Z%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2246%22%20y%3D%2221%22%20width%3D%2228%22%20height%3D%223%22%20fill%3D%22%23EF4444%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M34%2050%20C34%2032%2086%2032%2086%2050%20C86%2078%2092%2098%2084%20104%20C78%20108%2072%2096%2066%20102%20C60%20108%2054%2096%2048%20102%20C42%20108%2036%2094%2030%20102%20C26%2096%2034%2076%2034%2050%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%227%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2250%2C50%2056%2C46%2056%2C52%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%2250%22%20r%3D%227%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2270%2C50%2064%2C46%2064%2C52%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2266%22%20rx%3D%226%22%20ry%3D%228%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M34%2058%20Q18%2064%2022%2074%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2222%22%20cy%3D%2276%22%20rx%3D%226%22%20ry%3D%225%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M86%2058%20Q102%2054%2098%2042%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2298%22%20cy%3D%2240%22%20rx%3D%226%22%20ry%3D%225%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "fantasma",
      "bombin",
      "sombrero",
      "halloween",
      "vintage",
      "boo",
      "espectro"
    ]
  },
  {
    "id": "retro-silly-skeleton",
    "name": "Calavera Danzante Silly Symphony",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><rect x=\"42\" y=\"10\" width=\"36\" height=\"24\" rx=\"3\" fill=\"#18181B\"/>\n    <ellipse cx=\"60\" cy=\"34\" rx=\"26\" ry=\"6\" fill=\"#18181B\"/>\n    <rect x=\"42\" y=\"28\" width=\"36\" height=\"4\" fill=\"#E11D48\"/>\n    <path d=\"M40 50 C40 38 80 38 80 50 C80 58 74 62 74 68 C74 74 68 76 60 76 C52 76 46 74 46 68 C46 62 40 58 40 50 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"50\" cy=\"52\" r=\"6\" fill=\"#18181B\"/><polygon points=\"50,52 56,49 55,54\" fill=\"#FFFDF5\"/>\n    <circle cx=\"70\" cy=\"52\" r=\"6\" fill=\"#18181B\"/><polygon points=\"70,52 64,49 65,54\" fill=\"#FFFDF5\"/>\n    <polygon points=\"60,60 57,66 63,66\" fill=\"#18181B\"/>\n    <line x1=\"48\" y1=\"72\" x2=\"72\" y2=\"72\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <line x1=\"53\" y1=\"68\" x2=\"53\" y2=\"76\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <line x1=\"60\" y1=\"68\" x2=\"60\" y2=\"76\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <line x1=\"67\" y1=\"68\" x2=\"67\" y2=\"76\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <line x1=\"94\" y1=\"70\" x2=\"102\" y2=\"108\" stroke=\"#92400E\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <path d=\"M94 70 Q98 62 106 66\" stroke=\"#92400E\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Crect%20x%3D%2242%22%20y%3D%2210%22%20width%3D%2236%22%20height%3D%2224%22%20rx%3D%223%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2234%22%20rx%3D%2226%22%20ry%3D%226%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2242%22%20y%3D%2228%22%20width%3D%2236%22%20height%3D%224%22%20fill%3D%22%23E11D48%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M40%2050%20C40%2038%2080%2038%2080%2050%20C80%2058%2074%2062%2074%2068%20C74%2074%2068%2076%2060%2076%20C52%2076%2046%2074%2046%2068%20C46%2062%2040%2058%2040%2050%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2252%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2250%2C52%2056%2C49%2055%2C54%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%2252%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2270%2C52%2064%2C49%2065%2C54%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2260%2C60%2057%2C66%2063%2C66%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2248%22%20y1%3D%2272%22%20x2%3D%2272%22%20y2%3D%2272%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2253%22%20y1%3D%2268%22%20x2%3D%2253%22%20y2%3D%2276%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2268%22%20x2%3D%2260%22%20y2%3D%2276%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2267%22%20y1%3D%2268%22%20x2%3D%2267%22%20y2%3D%2276%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2294%22%20y1%3D%2270%22%20x2%3D%22102%22%20y2%3D%22108%22%20stroke%3D%22%2392400E%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M94%2070%20Q98%2062%20106%2066%22%20stroke%3D%22%2392400E%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "esqueleto",
      "calavera",
      "danza",
      "silly symphony",
      "1930",
      "sombrero",
      "bastón"
    ]
  },
  {
    "id": "retro-whistling-cloud",
    "name": "Nube Silbadora con Viento",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M30 72 C18 72 16 56 26 48 C22 36 38 26 48 34 C56 22 76 22 84 34 C94 28 106 38 102 52 C112 60 108 74 94 74 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"48\" cy=\"46\" r=\"6\" fill=\"#18181B\"/><polygon points=\"48,46 54,43 53,48\" fill=\"#FFFDF5\"/>\n    <circle cx=\"68\" cy=\"46\" r=\"6\" fill=\"#18181B\"/><polygon points=\"68,46 62,43 63,48\" fill=\"#FFFDF5\"/>\n    <ellipse cx=\"60\" cy=\"58\" rx=\"5\" ry=\"6.5\" fill=\"#18181B\"/>\n    <ellipse cx=\"60\" cy=\"58\" rx=\"2.5\" ry=\"4\" fill=\"#EF4444\"/>\n    <path d=\"M60 66 Q64 82 82 82 Q92 82 90 74 Q84 72 80 76\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M54 70 Q56 94 40 96 Q28 94 32 86 Q38 84 42 88\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M30%2072%20C18%2072%2016%2056%2026%2048%20C22%2036%2038%2026%2048%2034%20C56%2022%2076%2022%2084%2034%20C94%2028%20106%2038%20102%2052%20C112%2060%20108%2074%2094%2074%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2248%22%20cy%3D%2246%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2248%2C46%2054%2C43%2053%2C48%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2268%22%20cy%3D%2246%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2268%2C46%2062%2C43%2063%2C48%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2258%22%20rx%3D%225%22%20ry%3D%226.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2258%22%20rx%3D%222.5%22%20ry%3D%224%22%20fill%3D%22%23EF4444%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2066%20Q64%2082%2082%2082%20Q92%2082%2090%2074%20Q84%2072%2080%2076%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M54%2070%20Q56%2094%2040%2096%20Q28%2094%2032%2086%20Q38%2084%2042%2088%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "nube",
      "viento",
      "silbando",
      "clima",
      "retro",
      "vintage",
      "1930",
      "dibujo"
    ]
  },
  {
    "id": "retro-walking-teacup",
    "name": "Taza Rubber Hose Caminando",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M52 24 Q56 14 50 8\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M66 24 Q72 14 66 8\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M48 82 Q42 98 34 102\" stroke=\"#18181B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"30\" cy=\"104\" rx=\"10\" ry=\"6\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M72 82 Q78 98 86 102\" stroke=\"#18181B\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"90\" cy=\"104\" rx=\"10\" ry=\"6\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M32 36 H88 V66 C88 80 74 84 60 84 C46 84 32 80 32 66 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <path d=\"M88 44 C100 44 100 62 88 64\" stroke=\"#18181B\" stroke-width=\"4.5\" fill=\"none\"/>\n    <circle cx=\"50\" cy=\"52\" r=\"5.5\" fill=\"#18181B\"/><polygon points=\"50,52 55,49 55,54\" fill=\"#FFFDF5\"/>\n    <circle cx=\"70\" cy=\"52\" r=\"5.5\" fill=\"#18181B\"/><polygon points=\"70,52 65,49 65,54\" fill=\"#FFFDF5\"/>\n    <path d=\"M48 64 Q60 76 72 64\" stroke=\"#18181B\" stroke-width=\"3\" fill=\"#18181B\"/>\n    <path d=\"M54 70 Q60 73 66 70\" fill=\"#EF4444\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M52%2024%20Q56%2014%2050%208%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M66%2024%20Q72%2014%2066%208%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M48%2082%20Q42%2098%2034%20102%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2230%22%20cy%3D%22104%22%20rx%3D%2210%22%20ry%3D%226%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M72%2082%20Q78%2098%2086%20102%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2290%22%20cy%3D%22104%22%20rx%3D%2210%22%20ry%3D%226%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M32%2036%20H88%20V66%20C88%2080%2074%2084%2060%2084%20C46%2084%2032%2080%2032%2066%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M88%2044%20C100%2044%20100%2062%2088%2064%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2252%22%20r%3D%225.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2250%2C52%2055%2C49%2055%2C54%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%2252%22%20r%3D%225.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2270%2C52%2065%2C49%2065%2C54%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M48%2064%20Q60%2076%2072%2064%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M54%2070%20Q60%2073%2066%2070%22%20fill%3D%22%23EF4444%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "taza",
      "cafe",
      "te",
      "rubber hose",
      "botas",
      "cuphead",
      "vintage",
      "retro"
    ]
  },
  {
    "id": "retro-sleepy-moon-cap",
    "name": "Luna Menguante con Gorrito",
    "category": "Stickers Retro 1930s",
    "subCategory": "Personajes & Caritas 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M50 32 Q62 10 92 12 Q82 24 72 26\" fill=\"#E11D48\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <circle cx=\"94\" cy=\"12\" r=\"6\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <path d=\"M52 28 C74 38 80 70 66 90 C48 112 20 94 28 88 C44 88 56 68 46 48 C42 40 46 32 52 28 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"50\" cy=\"54\" r=\"6\" fill=\"#18181B\"/><polygon points=\"50,54 56,51 55,56\" fill=\"#FFFDF5\"/>\n    <path d=\"M42 46 Q50 48 56 46\" stroke=\"#18181B\" stroke-width=\"2.5\" fill=\"none\"/>\n    <path d=\"M42 60 Q34 64 40 68\" stroke=\"#18181B\" stroke-width=\"3\" fill=\"none\"/>\n    <path d=\"M44 74 Q52 78 58 72\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M80 50 H90 L80 62 H90\" stroke=\"#18181B\" stroke-width=\"3\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M50%2032%20Q62%2010%2092%2012%20Q82%2024%2072%2026%22%20fill%3D%22%23E11D48%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2294%22%20cy%3D%2212%22%20r%3D%226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M52%2028%20C74%2038%2080%2070%2066%2090%20C48%20112%2020%2094%2028%2088%20C44%2088%2056%2068%2046%2048%20C42%2040%2046%2032%2052%2028%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2254%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2250%2C54%2056%2C51%2055%2C56%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2046%20Q50%2048%2056%2046%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2060%20Q34%2064%2040%2068%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2074%20Q52%2078%2058%2072%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M80%2050%20H90%20L80%2062%20H90%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "luna",
      "noche",
      "sueño",
      "gorrito",
      "cielo",
      "estrella",
      "retro",
      "1930"
    ]
  },
  {
    "id": "retro-glove-thumbs-up",
    "name": "Guante Clásico Pulgar Arriba",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M50 102 C38 102 36 94 40 82 L42 74 C34 74 26 66 30 52 C32 44 42 44 46 50 L46 34 C46 22 56 20 62 26 C66 30 64 44 64 54 C72 54 84 56 86 64 C88 72 82 78 86 84 C88 92 80 98 68 98 L60 102 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"50\" cy=\"106\" rx=\"20\" ry=\"6\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <line x1=\"56\" y1=\"62\" x2=\"52\" y2=\"76\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"62\" y1=\"62\" x2=\"60\" y2=\"78\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"62\" x2=\"68\" y2=\"76\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M88 46 L96 42 M92 56 L102 56 M86 66 L94 70\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M50%20102%20C38%20102%2036%2094%2040%2082%20L42%2074%20C34%2074%2026%2066%2030%2052%20C32%2044%2042%2044%2046%2050%20L46%2034%20C46%2022%2056%2020%2062%2026%20C66%2030%2064%2044%2064%2054%20C72%2054%2084%2056%2086%2064%20C88%2072%2082%2078%2086%2084%20C88%2092%2080%2098%2068%2098%20L60%20102%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2250%22%20cy%3D%22106%22%20rx%3D%2220%22%20ry%3D%226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2256%22%20y1%3D%2262%22%20x2%3D%2252%22%20y2%3D%2276%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2262%22%20y1%3D%2262%22%20x2%3D%2260%22%20y2%3D%2278%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2268%22%20y1%3D%2262%22%20x2%3D%2268%22%20y2%3D%2276%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M88%2046%20L96%2042%20M92%2056%20L102%2056%20M86%2066%20L94%2070%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "guante",
      "pulgar",
      "ok",
      "bien",
      "mickey",
      "retro",
      "gesto",
      "mano"
    ]
  },
  {
    "id": "retro-glove-peace-sign",
    "name": "Guante Clásico Paz & Victoria",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M42 44 L44 18 C45 10 54 10 56 18 L56 46 L64 18 C65 10 74 10 76 18 L76 50 C82 52 86 60 84 70 C82 82 76 96 64 96 L48 96 C36 96 32 82 34 68 C34 56 40 50 42 44 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"56\" cy=\"102\" rx=\"18\" ry=\"6\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <line x1=\"48\" y1=\"66\" x2=\"46\" y2=\"78\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"56\" y1=\"64\" x2=\"56\" y2=\"80\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"64\" y1=\"66\" x2=\"66\" y2=\"78\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M42%2044%20L44%2018%20C45%2010%2054%2010%2056%2018%20L56%2046%20L64%2018%20C65%2010%2074%2010%2076%2018%20L76%2050%20C82%2052%2086%2060%2084%2070%20C82%2082%2076%2096%2064%2096%20L48%2096%20C36%2096%2032%2082%2034%2068%20C34%2056%2040%2050%2042%2044%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2256%22%20cy%3D%22102%22%20rx%3D%2218%22%20ry%3D%226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2248%22%20y1%3D%2266%22%20x2%3D%2246%22%20y2%3D%2278%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2256%22%20y1%3D%2264%22%20x2%3D%2256%22%20y2%3D%2280%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2264%22%20y1%3D%2266%22%20x2%3D%2266%22%20y2%3D%2278%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "paz",
      "victoria",
      "guante",
      "mickey",
      "retro",
      "dedos",
      "mano",
      "vintage"
    ]
  },
  {
    "id": "retro-glove-pointing",
    "name": "Guante Señalando con el Índice",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M22 66 L68 66 L96 66 C104 66 104 54 96 54 L64 54 C64 48 60 44 54 44 L38 44 C26 44 20 54 22 66 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <path d=\"M40 66 C40 82 48 92 64 92 C74 92 82 84 80 74 L80 66\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"24\" cy=\"62\" rx=\"8\" ry=\"16\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <line x1=\"46\" y1=\"52\" x2=\"58\" y2=\"52\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"46\" y1=\"58\" x2=\"58\" y2=\"58\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"46\" y1=\"64\" x2=\"58\" y2=\"64\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M22%2066%20L68%2066%20L96%2066%20C104%2066%20104%2054%2096%2054%20L64%2054%20C64%2048%2060%2044%2054%2044%20L38%2044%20C26%2044%2020%2054%2022%2066%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M40%2066%20C40%2082%2048%2092%2064%2092%20C74%2092%2082%2084%2080%2074%20L80%2066%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2224%22%20cy%3D%2262%22%20rx%3D%228%22%20ry%3D%2216%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2246%22%20y1%3D%2252%22%20x2%3D%2258%22%20y2%3D%2252%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2246%22%20y1%3D%2258%22%20x2%3D%2258%22%20y2%3D%2258%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2246%22%20y1%3D%2264%22%20x2%3D%2258%22%20y2%3D%2264%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "señalar",
      "apuntar",
      "guante",
      "dedo",
      "direccion",
      "aqui",
      "retro",
      "vintage"
    ]
  },
  {
    "id": "retro-glove-waving-hello",
    "name": "Guante Saludando Hola",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M50 96 C38 96 34 82 36 68 C34 58 26 56 24 46 C22 36 32 32 38 40 L38 28 C38 18 46 16 50 24 L52 18 C54 10 64 10 66 18 L68 20 C70 12 78 12 82 20 L84 34 C88 28 96 30 96 40 C96 56 92 78 78 94 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"60\" cy=\"100\" rx=\"20\" ry=\"6\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <line x1=\"50\" y1=\"60\" x2=\"48\" y2=\"74\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"58\" y1=\"58\" x2=\"58\" y2=\"76\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"66\" y1=\"60\" x2=\"68\" y2=\"74\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M50%2096%20C38%2096%2034%2082%2036%2068%20C34%2058%2026%2056%2024%2046%20C22%2036%2032%2032%2038%2040%20L38%2028%20C38%2018%2046%2016%2050%2024%20L52%2018%20C54%2010%2064%2010%2066%2018%20L68%2020%20C70%2012%2078%2012%2082%2020%20L84%2034%20C88%2028%2096%2030%2096%2040%20C96%2056%2092%2078%2078%2094%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%22100%22%20rx%3D%2220%22%20ry%3D%226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2260%22%20x2%3D%2248%22%20y2%3D%2274%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2258%22%20y1%3D%2258%22%20x2%3D%2258%22%20y2%3D%2276%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2266%22%20y1%3D%2260%22%20x2%3D%2268%22%20y2%3D%2274%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "hola",
      "saludo",
      "guante",
      "mickey",
      "bienvenida",
      "mano",
      "retro",
      "amigo"
    ]
  },
  {
    "id": "retro-glove-snapping",
    "name": "Guante Chasquido de Dedos",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M42 98 C30 96 32 82 36 70 C36 56 42 46 54 44 L54 26 C54 16 64 16 66 26 L66 48 C72 44 82 46 84 54 C86 64 78 74 76 86 C74 96 62 100 48 98 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"50\" cy=\"102\" rx=\"18\" ry=\"6\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <circle cx=\"56\" cy=\"38\" r=\"4\" fill=\"#18181B\"/>\n    <path d=\"M68 20 L78 12 M74 26 L88 24 M64 14 L68 4\" stroke=\"#F59E0B\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <line x1=\"48\" y1=\"66\" x2=\"46\" y2=\"78\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"56\" y1=\"64\" x2=\"56\" y2=\"80\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"64\" y1=\"66\" x2=\"66\" y2=\"78\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M42%2098%20C30%2096%2032%2082%2036%2070%20C36%2056%2042%2046%2054%2044%20L54%2026%20C54%2016%2064%2016%2066%2026%20L66%2048%20C72%2044%2082%2046%2084%2054%20C86%2064%2078%2074%2076%2086%20C74%2096%2062%20100%2048%2098%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2250%22%20cy%3D%22102%22%20rx%3D%2218%22%20ry%3D%226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2256%22%20cy%3D%2238%22%20r%3D%224%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M68%2020%20L78%2012%20M74%2026%20L88%2024%20M64%2014%20L68%204%22%20stroke%3D%22%23F59E0B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2248%22%20y1%3D%2266%22%20x2%3D%2246%22%20y2%3D%2278%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2256%22%20y1%3D%2264%22%20x2%3D%2256%22%20y2%3D%2280%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2264%22%20y1%3D%2266%22%20x2%3D%2266%22%20y2%3D%2278%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "chasquido",
      "snap",
      "ritmo",
      "guante",
      "magia",
      "dedos",
      "vintage",
      "musica"
    ]
  },
  {
    "id": "retro-glove-holding-cane",
    "name": "Guante con Bastón de Baile",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M20 18 C28 8 46 8 50 20 L50 28 L94 104\" stroke=\"#92400E\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M44 64 C36 64 34 52 42 46 C48 40 58 44 62 50 C68 44 76 46 78 54 C82 50 90 54 88 64 C86 76 74 82 60 82 C48 82 44 72 44 64 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"64\" cy=\"88\" rx=\"18\" ry=\"6\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <line x1=\"54\" y1=\"56\" x2=\"52\" y2=\"68\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"62\" y1=\"56\" x2=\"62\" y2=\"70\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"70\" y1=\"58\" x2=\"72\" y2=\"68\" stroke=\"#18181B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M20%2018%20C28%208%2046%208%2050%2020%20L50%2028%20L94%20104%22%20stroke%3D%22%2392400E%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2064%20C36%2064%2034%2052%2042%2046%20C48%2040%2058%2044%2062%2050%20C68%2044%2076%2046%2078%2054%20C82%2050%2090%2054%2088%2064%20C86%2076%2074%2082%2060%2082%20C48%2082%2044%2072%2044%2064%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2264%22%20cy%3D%2288%22%20rx%3D%2218%22%20ry%3D%226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2254%22%20y1%3D%2256%22%20x2%3D%2252%22%20y2%3D%2268%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2262%22%20y1%3D%2256%22%20x2%3D%2262%22%20y2%3D%2270%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2270%22%20y1%3D%2258%22%20x2%3D%2272%22%20y2%3D%2268%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "baston",
      "baile",
      "charlot",
      "teatro",
      "guante",
      "elegante",
      "vintage",
      "show"
    ]
  },
  {
    "id": "retro-glove-flexing-muscle",
    "name": "Brazo Rubber Hose con Músculo",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M14 84 C20 54 44 40 68 50 C78 54 86 46 84 32 C82 20 72 16 66 24\" stroke=\"#18181B\" stroke-width=\"12\" stroke-linecap=\"round\" fill=\"none\"/>\n    <path d=\"M64 42 C70 38 78 40 80 48\" stroke=\"#EF4444\" stroke-width=\"3\" fill=\"none\"/>\n    <circle cx=\"68\" cy=\"22\" r=\"16\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"60\" cy=\"24\" rx=\"4\" ry=\"7\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <line x1=\"64\" y1=\"14\" x2=\"72\" y2=\"18\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <line x1=\"62\" y1=\"20\" x2=\"72\" y2=\"24\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <line x1=\"64\" y1=\"26\" x2=\"74\" y2=\"28\" stroke=\"#18181B\" stroke-width=\"2.5\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M14%2084%20C20%2054%2044%2040%2068%2050%20C78%2054%2086%2046%2084%2032%20C82%2020%2072%2016%2066%2024%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M64%2042%20C70%2038%2078%2040%2080%2048%22%20stroke%3D%22%23EF4444%22%20stroke-width%3D%223%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2268%22%20cy%3D%2222%22%20r%3D%2216%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2224%22%20rx%3D%224%22%20ry%3D%227%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2264%22%20y1%3D%2214%22%20x2%3D%2272%22%20y2%3D%2218%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2262%22%20y1%3D%2220%22%20x2%3D%2272%22%20y2%3D%2224%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2264%22%20y1%3D%2226%22%20x2%3D%2274%22%20y2%3D%2228%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "fuerza",
      "musculo",
      "brazo",
      "rubber hose",
      "guante",
      "poder",
      "retro",
      "fuerte"
    ]
  },
  {
    "id": "retro-glove-handshake",
    "name": "Apretón de Manos Cartoon",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M12 60 L36 60 C44 60 48 54 54 54 L66 66 L54 78 C44 78 36 72 12 72 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"20\" cy=\"66\" rx=\"6\" ry=\"14\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <path d=\"M108 60 L84 60 C76 60 72 54 66 54 L54 66 L66 78 C76 78 84 72 108 72 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"100\" cy=\"66\" rx=\"6\" ry=\"14\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <line x1=\"42\" y1=\"56\" x2=\"48\" y2=\"64\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <line x1=\"78\" y1=\"56\" x2=\"72\" y2=\"64\" stroke=\"#18181B\" stroke-width=\"2.5\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12%2060%20L36%2060%20C44%2060%2048%2054%2054%2054%20L66%2066%20L54%2078%20C44%2078%2036%2072%2012%2072%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2220%22%20cy%3D%2266%22%20rx%3D%226%22%20ry%3D%2214%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M108%2060%20L84%2060%20C76%2060%2072%2054%2066%2054%20L54%2066%20L66%2078%20C76%2078%2084%2072%20108%2072%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22100%22%20cy%3D%2266%22%20rx%3D%226%22%20ry%3D%2214%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2242%22%20y1%3D%2256%22%20x2%3D%2248%22%20y2%3D%2264%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2278%22%20y1%3D%2256%22%20x2%3D%2272%22%20y2%3D%2264%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "trato",
      "acuerdo",
      "manos",
      "apreton",
      "amigos",
      "socio",
      "guante",
      "retro"
    ]
  },
  {
    "id": "retro-glove-boxing-punch",
    "name": "Guante de Boxeo Retro Punch",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M12 70 C24 70 34 68 44 68 C44 52 56 36 76 36 C96 36 108 50 108 68 C108 86 94 96 74 96 C56 96 46 84 44 76 L12 76 Z\" fill=\"#DC2626\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <rect x=\"36\" y=\"66\" width=\"8\" height=\"12\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <ellipse cx=\"58\" cy=\"50\" rx=\"8\" ry=\"12\" fill=\"#B91C1C\"/>\n    <path d=\"M96 30 L106 20 M108 44 L118 40 M102 84 L114 90\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    <polygon points=\"106,32 112,38 104,40\" fill=\"#FBBF24\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12%2070%20C24%2070%2034%2068%2044%2068%20C44%2052%2056%2036%2076%2036%20C96%2036%20108%2050%20108%2068%20C108%2086%2094%2096%2074%2096%20C56%2096%2046%2084%2044%2076%20L12%2076%20Z%22%20fill%3D%22%23DC2626%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2236%22%20y%3D%2266%22%20width%3D%228%22%20height%3D%2212%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2258%22%20cy%3D%2250%22%20rx%3D%228%22%20ry%3D%2212%22%20fill%3D%22%23B91C1C%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M96%2030%20L106%2020%20M108%2044%20L118%2040%20M102%2084%20L114%2090%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%22106%2C32%20112%2C38%20104%2C40%22%20fill%3D%22%23FBBF24%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "boxeo",
      "golpe",
      "punch",
      "guante",
      "ko",
      "combate",
      "retro",
      "fuerza"
    ]
  },
  {
    "id": "retro-gloves-applause",
    "name": "Par de Guantes Aplaudiendo",
    "category": "Stickers Retro 1930s",
    "subCategory": "Guantes Blancos & Gestos",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><g transform=\"rotate(-15 44 60)\">\n      <ellipse cx=\"44\" cy=\"60\" rx=\"14\" ry=\"20\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n      <ellipse cx=\"38\" cy=\"78\" rx=\"14\" ry=\"5\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n      <line x1=\"40\" y1=\"52\" x2=\"40\" y2=\"66\" stroke=\"#18181B\" stroke-width=\"2\"/>\n      <line x1=\"46\" y1=\"50\" x2=\"46\" y2=\"68\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    </g>\n    <g transform=\"rotate(15 76 60)\">\n      <ellipse cx=\"76\" cy=\"60\" rx=\"14\" ry=\"20\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n      <ellipse cx=\"82\" cy=\"78\" rx=\"14\" ry=\"5\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n      <line x1=\"74\" y1=\"50\" x2=\"74\" y2=\"68\" stroke=\"#18181B\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"52\" x2=\"80\" y2=\"66\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    </g>\n    <path d=\"M52 30 L60 20 L68 30 M38 34 L32 26 M82 34 L88 26\" stroke=\"#F59E0B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cg%20transform%3D%22rotate%28-15%2044%2060%29%22%3E%0A%20%20%20%20%20%20%3Cellipse%20cx%3D%2244%22%20cy%3D%2260%22%20rx%3D%2214%22%20ry%3D%2220%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%20%20%3Cellipse%20cx%3D%2238%22%20cy%3D%2278%22%20rx%3D%2214%22%20ry%3D%225%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%20%20%3Cline%20x1%3D%2240%22%20y1%3D%2252%22%20x2%3D%2240%22%20y2%3D%2266%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%20%20%3Cline%20x1%3D%2246%22%20y1%3D%2250%22%20x2%3D%2246%22%20y2%3D%2268%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cg%20transform%3D%22rotate%2815%2076%2060%29%22%3E%0A%20%20%20%20%20%20%3Cellipse%20cx%3D%2276%22%20cy%3D%2260%22%20rx%3D%2214%22%20ry%3D%2220%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%20%20%3Cellipse%20cx%3D%2282%22%20cy%3D%2278%22%20rx%3D%2214%22%20ry%3D%225%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%20%20%3Cline%20x1%3D%2274%22%20y1%3D%2250%22%20x2%3D%2274%22%20y2%3D%2268%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%20%20%3Cline%20x1%3D%2280%22%20y1%3D%2252%22%20x2%3D%2280%22%20y2%3D%2266%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cpath%20d%3D%22M52%2030%20L60%2020%20L68%2030%20M38%2034%20L32%2026%20M82%2034%20L88%2026%22%20stroke%3D%22%23F59E0B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "aplauso",
      "bravo",
      "palmas",
      "ovacion",
      "guantes",
      "show",
      "felicidades",
      "retro"
    ]
  },
  {
    "id": "retro-ship-wheel-helm",
    "name": "Timón Steamboat de Barco",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"60\" cy=\"60\" r=\"28\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4.5\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"12\" fill=\"#92400E\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"5\" fill=\"#18181B\"/>\n    <g stroke=\"#18181B\" stroke-width=\"4\" stroke-linecap=\"round\">\n      <line x1=\"60\" y1=\"32\" x2=\"60\" y2=\"8\"/><line x1=\"60\" y1=\"88\" x2=\"60\" y2=\"112\"/>\n      <line x1=\"32\" y1=\"60\" x2=\"8\" y2=\"60\"/><line x1=\"88\" y1=\"60\" x2=\"112\" y2=\"60\"/>\n      <line x1=\"40\" y1=\"40\" x2=\"22\" y2=\"22\"/><line x1=\"80\" y1=\"80\" x2=\"98\" y2=\"98\"/>\n      <line x1=\"80\" y1=\"40\" x2=\"98\" y2=\"22\"/><line x1=\"40\" y1=\"80\" x2=\"22\" y2=\"98\"/>\n    </g></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2212%22%20fill%3D%22%2392400E%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cg%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%3E%0A%20%20%20%20%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2232%22%20x2%3D%2260%22%20y2%3D%228%22/%3E%3Cline%20x1%3D%2260%22%20y1%3D%2288%22%20x2%3D%2260%22%20y2%3D%22112%22/%3E%0A%20%20%20%20%20%20%3Cline%20x1%3D%2232%22%20y1%3D%2260%22%20x2%3D%228%22%20y2%3D%2260%22/%3E%3Cline%20x1%3D%2288%22%20y1%3D%2260%22%20x2%3D%22112%22%20y2%3D%2260%22/%3E%0A%20%20%20%20%20%20%3Cline%20x1%3D%2240%22%20y1%3D%2240%22%20x2%3D%2222%22%20y2%3D%2222%22/%3E%3Cline%20x1%3D%2280%22%20y1%3D%2280%22%20x2%3D%2298%22%20y2%3D%2298%22/%3E%0A%20%20%20%20%20%20%3Cline%20x1%3D%2280%22%20y1%3D%2240%22%20x2%3D%2298%22%20y2%3D%2222%22/%3E%3Cline%20x1%3D%2240%22%20y1%3D%2280%22%20x2%3D%2222%22%20y2%3D%2298%22/%3E%0A%20%20%20%20%3C/g%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "timon",
      "barco",
      "steamboat",
      "rueda",
      "navegar",
      "mar",
      "capitan",
      "mickey"
    ]
  },
  {
    "id": "retro-steamboat-puffing",
    "name": "Barco Steamboat con Chimeneas",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M16 78 L26 98 H96 L106 78 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <rect x=\"36\" y=\"58\" width=\"50\" height=\"20\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <circle cx=\"61\" cy=\"84\" r=\"12\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <line x1=\"49\" y1=\"84\" x2=\"73\" y2=\"84\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <line x1=\"61\" y1=\"72\" x2=\"61\" y2=\"96\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <rect x=\"44\" y=\"32\" width=\"12\" height=\"26\" fill=\"#18181B\"/>\n    <rect x=\"66\" y=\"32\" width=\"12\" height=\"26\" fill=\"#18181B\"/>\n    <circle cx=\"50\" cy=\"20\" r=\"7\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"58\" cy=\"12\" r=\"9\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"76\" cy=\"18\" r=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <path d=\"M10 102 Q20 98 30 102 Q40 106 50 102 Q60 98 70 102 Q80 106 90 102 Q100 98 110 102\" stroke=\"#18181B\" stroke-width=\"3.5\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M16%2078%20L26%2098%20H96%20L106%2078%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2236%22%20y%3D%2258%22%20width%3D%2250%22%20height%3D%2220%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2261%22%20cy%3D%2284%22%20r%3D%2212%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2249%22%20y1%3D%2284%22%20x2%3D%2273%22%20y2%3D%2284%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2261%22%20y1%3D%2272%22%20x2%3D%2261%22%20y2%3D%2296%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2244%22%20y%3D%2232%22%20width%3D%2212%22%20height%3D%2226%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2266%22%20y%3D%2232%22%20width%3D%2212%22%20height%3D%2226%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2220%22%20r%3D%227%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2258%22%20cy%3D%2212%22%20r%3D%229%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2276%22%20cy%3D%2218%22%20r%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M10%20102%20Q20%2098%2030%20102%20Q40%20106%2050%20102%20Q60%2098%2070%20102%20Q80%20106%2090%20102%20Q100%2098%20110%20102%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "barco",
      "vapor",
      "steamboat",
      "chimenea",
      "rio",
      "willie",
      "retro",
      "1928"
    ]
  },
  {
    "id": "retro-steam-whistle-trio",
    "name": "Silbato de Vapor Triple Toot",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><rect x=\"30\" y=\"86\" width=\"60\" height=\"12\" rx=\"3\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <rect x=\"36\" y=\"44\" width=\"12\" height=\"42\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <rect x=\"54\" y=\"32\" width=\"12\" height=\"54\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <rect x=\"72\" y=\"50\" width=\"12\" height=\"36\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"42\" cy=\"28\" r=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"60\" cy=\"16\" r=\"10\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"78\" cy=\"34\" r=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <text x=\"44\" y=\"20\" font-family=\"monospace\" font-size=\"10\" font-weight=\"bold\" fill=\"#18181B\">TOOT!</text></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Crect%20x%3D%2230%22%20y%3D%2286%22%20width%3D%2260%22%20height%3D%2212%22%20rx%3D%223%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2236%22%20y%3D%2244%22%20width%3D%2212%22%20height%3D%2242%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2254%22%20y%3D%2232%22%20width%3D%2212%22%20height%3D%2254%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2272%22%20y%3D%2250%22%20width%3D%2212%22%20height%3D%2236%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2242%22%20cy%3D%2228%22%20r%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2216%22%20r%3D%2210%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2278%22%20cy%3D%2234%22%20r%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%2244%22%20y%3D%2220%22%20font-family%3D%22monospace%22%20font-size%3D%2210%22%20font-weight%3D%22bold%22%20fill%3D%22%2318181B%22%3ETOOT%21%3C/text%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "silbato",
      "vapor",
      "toot",
      "caldera",
      "sonido",
      "steamboat",
      "retro",
      "tren"
    ]
  },
  {
    "id": "retro-smiling-anchor",
    "name": "Ancla Marina Sonriente",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"60\" cy=\"24\" r=\"10\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"60\" cy=\"24\" r=\"4\" fill=\"#18181B\"/>\n    <line x1=\"38\" y1=\"40\" x2=\"82\" y2=\"40\" stroke=\"#18181B\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <line x1=\"60\" y1=\"34\" x2=\"60\" y2=\"94\" stroke=\"#18181B\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <path d=\"M22 68 C24 98 96 98 98 68\" stroke=\"#18181B\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n    <polygon points=\"22,68 14,72 26,80\" fill=\"#18181B\"/>\n    <polygon points=\"98,68 106,72 94,80\" fill=\"#18181B\"/>\n    <circle cx=\"53\" cy=\"56\" r=\"4.5\" fill=\"#18181B\"/><polygon points=\"53,56 57,53 57,58\" fill=\"#FFFDF5\"/>\n    <circle cx=\"67\" cy=\"56\" r=\"4.5\" fill=\"#18181B\"/><polygon points=\"67,56 63,53 63,58\" fill=\"#FFFDF5\"/>\n    <path d=\"M53 68 Q60 76 67 68\" stroke=\"#18181B\" stroke-width=\"2.5\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2224%22%20r%3D%2210%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2224%22%20r%3D%224%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2238%22%20y1%3D%2240%22%20x2%3D%2282%22%20y2%3D%2240%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2234%22%20x2%3D%2260%22%20y2%3D%2294%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M22%2068%20C24%2098%2096%2098%2098%2068%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2222%2C68%2014%2C72%2026%2C80%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2298%2C68%20106%2C72%2094%2C80%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2253%22%20cy%3D%2256%22%20r%3D%224.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2253%2C56%2057%2C53%2057%2C58%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2267%22%20cy%3D%2256%22%20r%3D%224.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2267%2C56%2063%2C53%2063%2C58%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M53%2068%20Q60%2076%2067%2068%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "ancla",
      "mar",
      "marina",
      "barco",
      "nautico",
      "steamboat",
      "retro",
      "sonrisa"
    ]
  },
  {
    "id": "retro-lifebuoy-vintage",
    "name": "Salvavidas Náutico Steamboat",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"60\" cy=\"60\" r=\"40\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4.5\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"20\" fill=\"#60A5FA\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <path d=\"M60 20 A40 40 0 0 1 88 32 L74 46 A20 20 0 0 0 60 40 Z\" fill=\"#DC2626\"/>\n    <path d=\"M60 100 A40 40 0 0 1 32 88 L46 74 A20 20 0 0 0 60 80 Z\" fill=\"#DC2626\"/>\n    <path d=\"M20 60 A40 40 0 0 1 32 32 L46 46 A20 20 0 0 0 40 60 Z\" fill=\"#DC2626\"/>\n    <path d=\"M100 60 A40 40 0 0 1 88 88 L74 74 A20 20 0 0 0 80 60 Z\" fill=\"#DC2626\"/>\n    <path d=\"M60 14 Q78 8 88 20 M106 60 Q112 78 100 88 M60 106 Q42 112 32 100 M14 60 Q8 42 20 32\" stroke=\"#92400E\" stroke-width=\"3\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2240%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2220%22%20fill%3D%22%2360A5FA%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2020%20A40%2040%200%200%201%2088%2032%20L74%2046%20A20%2020%200%200%200%2060%2040%20Z%22%20fill%3D%22%23DC2626%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%20100%20A40%2040%200%200%201%2032%2088%20L46%2074%20A20%2020%200%200%200%2060%2080%20Z%22%20fill%3D%22%23DC2626%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M20%2060%20A40%2040%200%200%201%2032%2032%20L46%2046%20A20%2020%200%200%200%2040%2060%20Z%22%20fill%3D%22%23DC2626%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M100%2060%20A40%2040%200%200%201%2088%2088%20L74%2074%20A20%2020%200%200%200%2080%2060%20Z%22%20fill%3D%22%23DC2626%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2014%20Q78%208%2088%2020%20M106%2060%20Q112%2078%20100%2088%20M60%20106%20Q42%20112%2032%20100%20M14%2060%20Q8%2042%2020%2032%22%20stroke%3D%22%2392400E%22%20stroke-width%3D%223%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "salvavidas",
      "mar",
      "seguridad",
      "barco",
      "nautico",
      "retro",
      "vintage",
      "playa"
    ]
  },
  {
    "id": "retro-sailor-cap",
    "name": "Gorra de Capitán Marinero",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><ellipse cx=\"60\" cy=\"44\" rx=\"44\" ry=\"18\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <path d=\"M20 46 Q60 18 100 46 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <rect x=\"24\" y=\"52\" width=\"72\" height=\"14\" fill=\"#18181B\"/>\n    <line x1=\"26\" y1=\"64\" x2=\"94\" y2=\"64\" stroke=\"#F59E0B\" stroke-width=\"3\"/>\n    <circle cx=\"60\" cy=\"59\" r=\"5\" fill=\"#FBBF24\"/>\n    <path d=\"M22 66 C26 84 94 84 98 66 Z\" fill=\"#18181B\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cellipse%20cx%3D%2260%22%20cy%3D%2244%22%20rx%3D%2244%22%20ry%3D%2218%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M20%2046%20Q60%2018%20100%2046%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2252%22%20width%3D%2272%22%20height%3D%2214%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2226%22%20y1%3D%2264%22%20x2%3D%2294%22%20y2%3D%2264%22%20stroke%3D%22%23F59E0B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2259%22%20r%3D%225%22%20fill%3D%22%23FBBF24%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M22%2066%20C26%2084%2094%2084%2098%2066%20Z%22%20fill%3D%22%2318181B%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "gorra",
      "capitan",
      "marinero",
      "sombrero",
      "steamboat",
      "mickey",
      "retro",
      "barco"
    ]
  },
  {
    "id": "retro-cartoon-boots-pair",
    "name": "Botas Gigantes de Dibujo Animado",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M20 86 C12 86 12 70 24 64 C36 58 40 40 48 40 C56 40 56 60 56 70 C56 86 38 86 20 86 Z\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"34\" cy=\"86\" rx=\"20\" ry=\"7\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M100 86 C108 86 108 70 96 64 C84 58 80 40 72 40 C64 40 64 60 64 70 C64 86 82 86 100 86 Z\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"86\" cy=\"86\" rx=\"20\" ry=\"7\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <line x1=\"10\" y1=\"96\" x2=\"22\" y2=\"96\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <line x1=\"98\" y1=\"96\" x2=\"110\" y2=\"96\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M20%2086%20C12%2086%2012%2070%2024%2064%20C36%2058%2040%2040%2048%2040%20C56%2040%2056%2060%2056%2070%20C56%2086%2038%2086%2020%2086%20Z%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2234%22%20cy%3D%2286%22%20rx%3D%2220%22%20ry%3D%227%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M100%2086%20C108%2086%20108%2070%2096%2064%20C84%2058%2080%2040%2072%2040%20C64%2040%2064%2060%2064%2070%20C64%2086%2082%2086%20100%2086%20Z%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2286%22%20cy%3D%2286%22%20rx%3D%2220%22%20ry%3D%227%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2210%22%20y1%3D%2296%22%20x2%3D%2222%22%20y2%3D%2296%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2298%22%20y1%3D%2296%22%20x2%3D%22110%22%20y2%3D%2296%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "botas",
      "zapatos",
      "mickey",
      "amarillo",
      "caminar",
      "calzado",
      "retro",
      "vintage"
    ]
  },
  {
    "id": "retro-nautical-compass",
    "name": "Brújula Marina Rubber Hose",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"60\" cy=\"62\" r=\"38\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4.5\"/>\n    <circle cx=\"60\" cy=\"20\" r=\"8\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <polygon points=\"60,34 66,60 60,56 54,60\" fill=\"#DC2626\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <polygon points=\"60,88 66,62 60,66 54,62\" fill=\"#18181B\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <circle cx=\"60\" cy=\"61\" r=\"5\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <circle cx=\"44\" cy=\"54\" r=\"4\" fill=\"#18181B\"/><polygon points=\"44,54 48,51 48,56\" fill=\"#FFFDF5\"/>\n    <circle cx=\"76\" cy=\"54\" r=\"4\" fill=\"#18181B\"/><polygon points=\"76,54 72,51 72,56\" fill=\"#FFFDF5\"/>\n    <text x=\"56\" y=\"32\" font-family=\"monospace\" font-size=\"10\" font-weight=\"bold\" fill=\"#18181B\">N</text></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2262%22%20r%3D%2238%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2220%22%20r%3D%228%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2260%2C34%2066%2C60%2060%2C56%2054%2C60%22%20fill%3D%22%23DC2626%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2260%2C88%2066%2C62%2060%2C66%2054%2C62%22%20fill%3D%22%2318181B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2261%22%20r%3D%225%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2244%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2244%2C54%2048%2C51%2048%2C56%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2276%22%20cy%3D%2254%22%20r%3D%224%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2276%2C54%2072%2C51%2072%2C56%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%2256%22%20y%3D%2232%22%20font-family%3D%22monospace%22%20font-size%3D%2210%22%20font-weight%3D%22bold%22%20fill%3D%22%2318181B%22%3EN%3C/text%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "brujula",
      "norte",
      "direccion",
      "orientacion",
      "mapa",
      "mar",
      "retro",
      "viaje"
    ]
  },
  {
    "id": "retro-ship-bell",
    "name": "Campana de Navío Repicando",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><rect x=\"52\" y=\"16\" width=\"16\" height=\"12\" rx=\"2\" fill=\"#18181B\"/>\n    <path d=\"M44 28 C44 28 40 60 26 76 C22 80 28 84 60 84 C92 84 98 80 94 76 C80 60 76 28 76 28 Z\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"60\" cy=\"84\" rx=\"34\" ry=\"7\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <circle cx=\"60\" cy=\"94\" r=\"6\" fill=\"#18181B\"/>\n    <path d=\"M60 94 Q66 104 62 112\" stroke=\"#92400E\" stroke-width=\"3.5\" fill=\"none\"/>\n    <path d=\"M16 64 Q22 56 20 48 M104 64 Q98 56 100 48\" stroke=\"#18181B\" stroke-width=\"3\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Crect%20x%3D%2252%22%20y%3D%2216%22%20width%3D%2216%22%20height%3D%2212%22%20rx%3D%222%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2028%20C44%2028%2040%2060%2026%2076%20C22%2080%2028%2084%2060%2084%20C92%2084%2098%2080%2094%2076%20C80%2060%2076%2028%2076%2028%20Z%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2284%22%20rx%3D%2234%22%20ry%3D%227%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2294%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2094%20Q66%20104%2062%20112%22%20stroke%3D%22%2392400E%22%20stroke-width%3D%223.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M16%2064%20Q22%2056%2020%2048%20M104%2064%20Q98%2056%20100%2048%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "campana",
      "navio",
      "alarma",
      "sonido",
      "bronce",
      "dorado",
      "retro",
      "barco"
    ]
  },
  {
    "id": "retro-vintage-telescope",
    "name": "Catalejo Marinero Curioso",
    "category": "Stickers Retro 1930s",
    "subCategory": "Steamboat & Aventura Náutica",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><g transform=\"rotate(-30 60 60)\">\n      <rect x=\"20\" y=\"52\" width=\"22\" height=\"16\" rx=\"2\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n      <rect x=\"42\" y=\"48\" width=\"28\" height=\"24\" rx=\"3\" fill=\"#B45309\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n      <rect x=\"70\" y=\"44\" width=\"34\" height=\"32\" rx=\"4\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"4\"/>\n      <ellipse cx=\"104\" cy=\"60\" rx=\"4\" ry=\"15\" fill=\"#93C5FD\" stroke=\"#18181B\" stroke-width=\"3\"/>\n      <circle cx=\"82\" cy=\"56\" r=\"4.5\" fill=\"#18181B\"/><polygon points=\"82,56 86,53 86,58\" fill=\"#FFFDF5\"/>\n    </g>\n    <path d=\"M88 20 L96 14 M98 26 L108 24\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cg%20transform%3D%22rotate%28-30%2060%2060%29%22%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2220%22%20y%3D%2252%22%20width%3D%2222%22%20height%3D%2216%22%20rx%3D%222%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2242%22%20y%3D%2248%22%20width%3D%2228%22%20height%3D%2224%22%20rx%3D%223%22%20fill%3D%22%23B45309%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2270%22%20y%3D%2244%22%20width%3D%2234%22%20height%3D%2232%22%20rx%3D%224%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%20%20%3Cellipse%20cx%3D%22104%22%20cy%3D%2260%22%20rx%3D%224%22%20ry%3D%2215%22%20fill%3D%22%2393C5FD%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2282%22%20cy%3D%2256%22%20r%3D%224.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2282%2C56%2086%2C53%2086%2C58%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cpath%20d%3D%22M88%2020%20L96%2014%20M98%2026%20L108%2024%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "catalejo",
      "telescopio",
      "vision",
      "pirata",
      "mar",
      "explorar",
      "retro",
      "vintage"
    ]
  },
  {
    "id": "retro-ringing-alarm-clock",
    "name": "Despertador Vintage Campanillazos",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M30 32 C24 24 36 12 46 22 Z\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <path d=\"M90 32 C96 24 84 12 74 22 Z\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <line x1=\"60\" y1=\"18\" x2=\"60\" y2=\"28\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <line x1=\"38\" y1=\"92\" x2=\"28\" y2=\"104\" stroke=\"#18181B\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <line x1=\"82\" y1=\"92\" x2=\"92\" y2=\"104\" stroke=\"#18181B\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"60\" cy=\"62\" r=\"34\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4.5\"/>\n    <circle cx=\"50\" cy=\"54\" r=\"6\" fill=\"#18181B\"/><polygon points=\"50,54 56,51 55,56\" fill=\"#FFFDF5\"/>\n    <circle cx=\"70\" cy=\"54\" r=\"6\" fill=\"#18181B\"/><polygon points=\"70,54 64,51 65,56\" fill=\"#FFFDF5\"/>\n    <path d=\"M48 68 Q60 80 72 68\" stroke=\"#18181B\" stroke-width=\"3\" fill=\"none\"/>\n    <path d=\"M16 40 Q22 48 18 56 M104 40 Q98 48 102 56\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M30%2032%20C24%2024%2036%2012%2046%2022%20Z%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M90%2032%20C96%2024%2084%2012%2074%2022%20Z%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2218%22%20x2%3D%2260%22%20y2%3D%2228%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2238%22%20y1%3D%2292%22%20x2%3D%2228%22%20y2%3D%22104%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2282%22%20y1%3D%2292%22%20x2%3D%2292%22%20y2%3D%22104%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2262%22%20r%3D%2234%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2254%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2250%2C54%2056%2C51%2055%2C56%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%2254%22%20r%3D%226%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2270%2C54%2064%2C51%2065%2C56%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M48%2068%20Q60%2080%2072%2068%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M16%2040%20Q22%2048%2018%2056%20M104%2040%20Q98%2048%20102%2056%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "reloj",
      "despertador",
      "alarma",
      "tiempo",
      "hora",
      "campana",
      "retro",
      "vintage"
    ]
  },
  {
    "id": "retro-rotary-telephone",
    "name": "Teléfono de Disco Parlante",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M28 26 C28 14 92 14 92 26 C92 34 84 32 80 28 C70 32 50 32 40 28 C36 32 28 34 28 26 Z\" fill=\"#18181B\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M32 54 L24 88 H96 L88 54 Z\" fill=\"#18181B\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"60\" cy=\"72\" r=\"15\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"55\" cy=\"70\" r=\"3\" fill=\"#18181B\"/><circle cx=\"65\" cy=\"70\" r=\"3\" fill=\"#18181B\"/>\n    <path d=\"M56 76 Q60 80 64 76\" stroke=\"#18181B\" stroke-width=\"2\" fill=\"none\"/>\n    <path d=\"M18 16 L12 10 M102 16 L108 10\" stroke=\"#EF4444\" stroke-width=\"3.5\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M28%2026%20C28%2014%2092%2014%2092%2026%20C92%2034%2084%2032%2080%2028%20C70%2032%2050%2032%2040%2028%20C36%2032%2028%2034%2028%2026%20Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M32%2054%20L24%2088%20H96%20L88%2054%20Z%22%20fill%3D%22%2318181B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2272%22%20r%3D%2215%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2255%22%20cy%3D%2270%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%2270%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M56%2076%20Q60%2080%2064%2076%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M18%2016%20L12%2010%20M102%2016%20L108%2010%22%20stroke%3D%22%23EF4444%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "telefono",
      "retro",
      "disco",
      "llamada",
      "comunicacion",
      "vintage",
      "ring",
      "1930"
    ]
  },
  {
    "id": "retro-sizzling-bomb",
    "name": "Bomba de Mecha con Ojos Pie-Cut",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M84 12 L88 4 M94 18 L104 16 M88 24 L96 30\" stroke=\"#F59E0B\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"88\" cy=\"18\" r=\"4\" fill=\"#EF4444\"/>\n    <path d=\"M60 40 Q76 24 88 18\" stroke=\"#92400E\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <rect x=\"52\" y=\"38\" width=\"16\" height=\"8\" rx=\"2\" fill=\"#71717A\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"60\" cy=\"72\" r=\"34\" fill=\"#18181B\"/>\n    <circle cx=\"50\" cy=\"66\" r=\"6\" fill=\"#FFFDF5\"/>\n    <circle cx=\"50\" cy=\"66\" r=\"4.5\" fill=\"#18181B\"/><polygon points=\"50,66 54,63 54,68\" fill=\"#FFFDF5\"/>\n    <circle cx=\"70\" cy=\"66\" r=\"6\" fill=\"#FFFDF5\"/>\n    <circle cx=\"70\" cy=\"66\" r=\"4.5\" fill=\"#18181B\"/><polygon points=\"70,66 66,63 66,68\" fill=\"#FFFDF5\"/>\n    <ellipse cx=\"60\" cy=\"80\" rx=\"5\" ry=\"6\" fill=\"#FFFDF5\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M84%2012%20L88%204%20M94%2018%20L104%2016%20M88%2024%20L96%2030%22%20stroke%3D%22%23F59E0B%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2288%22%20cy%3D%2218%22%20r%3D%224%22%20fill%3D%22%23EF4444%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2040%20Q76%2024%2088%2018%22%20stroke%3D%22%2392400E%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2252%22%20y%3D%2238%22%20width%3D%2216%22%20height%3D%228%22%20rx%3D%222%22%20fill%3D%22%2371717A%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2272%22%20r%3D%2234%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2266%22%20r%3D%226%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2266%22%20r%3D%224.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2250%2C66%2054%2C63%2054%2C68%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%2266%22%20r%3D%226%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%2266%22%20r%3D%224.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2270%2C66%2066%2C63%2066%2C68%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2280%22%20rx%3D%225%22%20ry%3D%226%22%20fill%3D%22%23FFFDF5%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "bomba",
      "mecha",
      "fuego",
      "boom",
      "peligro",
      "comic",
      "retro",
      "1930"
    ]
  },
  {
    "id": "retro-gramophone-music",
    "name": "Gramófono con Bocina Cantarina",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><rect x=\"28\" y=\"74\" width=\"56\" height=\"26\" rx=\"3\" fill=\"#92400E\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"56\" cy=\"87\" r=\"5\" fill=\"#FBBF24\"/>\n    <ellipse cx=\"56\" cy=\"74\" rx=\"24\" ry=\"6\" fill=\"#18181B\"/>\n    <path d=\"M56 70 Q60 52 74 46 C88 40 102 30 106 18 C86 20 74 34 62 44 Z\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <ellipse cx=\"100\" cy=\"24\" rx=\"14\" ry=\"18\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3.5\" transform=\"rotate(-30 100 24)\"/>\n    <path d=\"M96 54 Q104 46 108 50 L108 42 L116 40 L116 48\" stroke=\"#18181B\" stroke-width=\"2.5\" fill=\"none\"/>\n    <circle cx=\"106\" cy=\"50\" r=\"3\" fill=\"#18181B\"/><circle cx=\"114\" cy=\"48\" r=\"3\" fill=\"#18181B\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Crect%20x%3D%2228%22%20y%3D%2274%22%20width%3D%2256%22%20height%3D%2226%22%20rx%3D%223%22%20fill%3D%22%2392400E%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2256%22%20cy%3D%2287%22%20r%3D%225%22%20fill%3D%22%23FBBF24%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2256%22%20cy%3D%2274%22%20rx%3D%2224%22%20ry%3D%226%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M56%2070%20Q60%2052%2074%2046%20C88%2040%20102%2030%20106%2018%20C86%2020%2074%2034%2062%2044%20Z%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22100%22%20cy%3D%2224%22%20rx%3D%2214%22%20ry%3D%2218%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20transform%3D%22rotate%28-30%20100%2024%29%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M96%2054%20Q104%2046%20108%2050%20L108%2042%20L116%2040%20L116%2048%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22106%22%20cy%3D%2250%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%22114%22%20cy%3D%2248%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "gramofono",
      "musica",
      "disco",
      "vinilo",
      "trompeta",
      "sonido",
      "vintage",
      "retro"
    ]
  },
  {
    "id": "retro-whistling-kettle",
    "name": "Tetera Silbadora de Cocina",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M34 50 C34 26 86 26 86 50\" stroke=\"#18181B\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <circle cx=\"20\" cy=\"24\" r=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"28\" cy=\"14\" r=\"6\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <path d=\"M42 66 L22 46 L26 40 L44 56 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <ellipse cx=\"60\" cy=\"74\" rx=\"32\" ry=\"24\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"60\" cy=\"50\" rx=\"16\" ry=\"6\" fill=\"#E11D48\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"52\" cy=\"70\" r=\"5\" fill=\"#18181B\"/><polygon points=\"52,70 56,67 56,72\" fill=\"#FFFDF5\"/>\n    <circle cx=\"68\" cy=\"70\" r=\"5\" fill=\"#18181B\"/><polygon points=\"68,70 64,67 64,72\" fill=\"#FFFDF5\"/>\n    <path d=\"M54 80 Q60 86 66 80\" stroke=\"#18181B\" stroke-width=\"2.5\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M34%2050%20C34%2026%2086%2026%2086%2050%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2220%22%20cy%3D%2224%22%20r%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2228%22%20cy%3D%2214%22%20r%3D%226%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2066%20L22%2046%20L26%2040%20L44%2056%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2274%22%20rx%3D%2232%22%20ry%3D%2224%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2250%22%20rx%3D%2216%22%20ry%3D%226%22%20fill%3D%22%23E11D48%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2252%22%20cy%3D%2270%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2252%2C70%2056%2C67%2056%2C72%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2268%22%20cy%3D%2270%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2268%2C70%2064%2C67%2064%2C72%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M54%2080%20Q60%2086%2066%2080%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "tetera",
      "te",
      "silbato",
      "vapor",
      "cocina",
      "caliente",
      "retro",
      "vintage"
    ]
  },
  {
    "id": "retro-vintage-radio",
    "name": "Radio Antigua de Ondas Mágicas",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M24 96 V54 C24 34 96 34 96 54 V96 Z\" fill=\"#92400E\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"60\" cy=\"62\" r=\"18\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"55\" cy=\"60\" r=\"3\" fill=\"#18181B\"/><circle cx=\"65\" cy=\"60\" r=\"3\" fill=\"#18181B\"/>\n    <path d=\"M54 68 Q60 72 66 68\" stroke=\"#18181B\" stroke-width=\"2\" fill=\"none\"/>\n    <circle cx=\"40\" cy=\"88\" r=\"5\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <circle cx=\"80\" cy=\"88\" r=\"5\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <path d=\"M14 48 Q8 58 14 68 M106 48 Q112 58 106 68\" stroke=\"#18181B\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M24%2096%20V54%20C24%2034%2096%2034%2096%2054%20V96%20Z%22%20fill%3D%22%2392400E%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2262%22%20r%3D%2218%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2255%22%20cy%3D%2260%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%2260%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M54%2068%20Q60%2072%2066%2068%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2240%22%20cy%3D%2288%22%20r%3D%225%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2280%22%20cy%3D%2288%22%20r%3D%225%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M14%2048%20Q8%2058%2014%2068%20M106%2048%20Q112%2058%20106%2068%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "radio",
      "musica",
      "antigua",
      "vintange",
      "ondas",
      "sonido",
      "emision",
      "1930"
    ]
  },
  {
    "id": "retro-vintage-car-jalopy",
    "name": "Automóvil Tin Lizzie Saltarín",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M18 72 L24 54 C24 50 30 46 36 46 H54 L68 34 H84 V56 L98 62 V78 H18 Z\" fill=\"#DC2626\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <rect x=\"58\" y=\"38\" width=\"22\" height=\"16\" fill=\"#93C5FD\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"64\" cy=\"46\" r=\"3\" fill=\"#18181B\"/><circle cx=\"74\" cy=\"46\" r=\"3\" fill=\"#18181B\"/>\n    <circle cx=\"36\" cy=\"82\" r=\"14\" fill=\"#18181B\"/><circle cx=\"36\" cy=\"82\" r=\"6\" fill=\"#FFFDF5\"/>\n    <circle cx=\"84\" cy=\"82\" r=\"14\" fill=\"#18181B\"/><circle cx=\"84\" cy=\"82\" r=\"6\" fill=\"#FFFDF5\"/>\n    <ellipse cx=\"14\" cy=\"66\" rx=\"4\" ry=\"7\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"2\"/>\n    <circle cx=\"106\" cy=\"74\" r=\"5\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"2\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M18%2072%20L24%2054%20C24%2050%2030%2046%2036%2046%20H54%20L68%2034%20H84%20V56%20L98%2062%20V78%20H18%20Z%22%20fill%3D%22%23DC2626%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2258%22%20y%3D%2238%22%20width%3D%2222%22%20height%3D%2216%22%20fill%3D%22%2393C5FD%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2264%22%20cy%3D%2246%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2274%22%20cy%3D%2246%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2236%22%20cy%3D%2282%22%20r%3D%2214%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2236%22%20cy%3D%2282%22%20r%3D%226%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2284%22%20cy%3D%2282%22%20r%3D%2214%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2284%22%20cy%3D%2282%22%20r%3D%226%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2214%22%20cy%3D%2266%22%20rx%3D%224%22%20ry%3D%227%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22106%22%20cy%3D%2274%22%20r%3D%225%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "auto",
      "coche",
      "carro",
      "tin lizzie",
      "ford",
      "jalopy",
      "retro",
      "viaje"
    ]
  },
  {
    "id": "retro-milk-bottle-hops",
    "name": "Botella de Leche Trotadora",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M48 88 Q44 102 36 104\" stroke=\"#18181B\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"32\" cy=\"104\" rx=\"8\" ry=\"5\" fill=\"#18181B\"/>\n    <path d=\"M72 88 Q76 102 84 104\" stroke=\"#18181B\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"88\" cy=\"104\" rx=\"8\" ry=\"5\" fill=\"#18181B\"/>\n    <path d=\"M44 26 H76 V34 C76 44 82 50 82 60 V88 H38 V60 C38 50 44 44 44 34 Z\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <rect x=\"42\" y=\"18\" width=\"36\" height=\"8\" rx=\"2\" fill=\"#E11D48\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"52\" cy=\"64\" r=\"5\" fill=\"#18181B\"/><polygon points=\"52,64 56,61 56,66\" fill=\"#FFFDF5\"/>\n    <circle cx=\"68\" cy=\"64\" r=\"5\" fill=\"#18181B\"/><polygon points=\"68,64 64,61 64,66\" fill=\"#FFFDF5\"/>\n    <path d=\"M54 74 Q60 80 66 74\" stroke=\"#18181B\" stroke-width=\"2.5\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M48%2088%20Q44%20102%2036%20104%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2232%22%20cy%3D%22104%22%20rx%3D%228%22%20ry%3D%225%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M72%2088%20Q76%20102%2084%20104%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2288%22%20cy%3D%22104%22%20rx%3D%228%22%20ry%3D%225%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2026%20H76%20V34%20C76%2044%2082%2050%2082%2060%20V88%20H38%20V60%20C38%2050%2044%2044%2044%2034%20Z%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2242%22%20y%3D%2218%22%20width%3D%2236%22%20height%3D%228%22%20rx%3D%222%22%20fill%3D%22%23E11D48%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2252%22%20cy%3D%2264%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2252%2C64%2056%2C61%2056%2C66%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2268%22%20cy%3D%2264%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2268%2C64%2064%2C61%2064%2C66%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M54%2074%20Q60%2080%2066%2074%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "leche",
      "botella",
      "desayuno",
      "rubber hose",
      "botas",
      "retro",
      "vintage",
      "cuphead"
    ]
  },
  {
    "id": "retro-padlock-and-key",
    "name": "Candado & Llave Traviesos",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M40 50 V34 C40 20 80 20 80 34 V50\" stroke=\"#18181B\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>\n    <rect x=\"32\" y=\"48\" width=\"56\" height=\"46\" rx=\"8\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"48\" cy=\"64\" r=\"5\" fill=\"#18181B\"/><polygon points=\"48,64 52,61 52,66\" fill=\"#FFFDF5\"/>\n    <circle cx=\"72\" cy=\"64\" r=\"5\" fill=\"#18181B\"/><polygon points=\"72,64 68,61 68,66\" fill=\"#FFFDF5\"/>\n    <path d=\"M50 78 Q60 86 70 78\" stroke=\"#18181B\" stroke-width=\"2.5\" fill=\"none\"/>\n    <circle cx=\"60\" cy=\"74\" r=\"3\" fill=\"#18181B\"/>\n    <circle cx=\"98\" cy=\"76\" r=\"6\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <path d=\"M98 82 V98 H104 M98 90 H104\" stroke=\"#18181B\" stroke-width=\"3\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M40%2050%20V34%20C40%2020%2080%2020%2080%2034%20V50%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2232%22%20y%3D%2248%22%20width%3D%2256%22%20height%3D%2246%22%20rx%3D%228%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2248%22%20cy%3D%2264%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2248%2C64%2052%2C61%2052%2C66%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2272%22%20cy%3D%2264%22%20r%3D%225%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2272%2C64%2068%2C61%2068%2C66%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M50%2078%20Q60%2086%2070%2078%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2274%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2298%22%20cy%3D%2276%22%20r%3D%226%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M98%2082%20V98%20H104%20M98%2090%20H104%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "candado",
      "llave",
      "seguridad",
      "amigos",
      "secreto",
      "retro",
      "vintage",
      "1930"
    ]
  },
  {
    "id": "retro-idea-lightbulb",
    "name": "Bombilla Idea Rubber Hose",
    "category": "Stickers Retro 1930s",
    "subCategory": "Objetos Vivos & Rubber Hose",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><rect x=\"50\" y=\"86\" width=\"20\" height=\"12\" fill=\"#71717A\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M54 98 Q60 104 66 98\" stroke=\"#18181B\" stroke-width=\"3\" fill=\"none\"/>\n    <path d=\"M50 86 C40 80 32 66 32 50 C32 30 46 18 60 18 C74 18 88 30 88 50 C88 66 80 80 70 86 Z\" fill=\"#FDE047\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"50\" cy=\"46\" r=\"5.5\" fill=\"#18181B\"/><polygon points=\"50,46 55,43 55,48\" fill=\"#FFFDF5\"/>\n    <circle cx=\"70\" cy=\"46\" r=\"5.5\" fill=\"#18181B\"/><polygon points=\"70,46 65,43 65,48\" fill=\"#FFFDF5\"/>\n    <path d=\"M48 58 Q60 70 72 58\" fill=\"#18181B\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <path d=\"M60 8 V2 M24 22 L18 16 M96 22 L102 16 M14 50 H6 M106 50 H114\" stroke=\"#F59E0B\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Crect%20x%3D%2250%22%20y%3D%2286%22%20width%3D%2220%22%20height%3D%2212%22%20fill%3D%22%2371717A%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M54%2098%20Q60%20104%2066%2098%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M50%2086%20C40%2080%2032%2066%2032%2050%20C32%2030%2046%2018%2060%2018%20C74%2018%2088%2030%2088%2050%20C88%2066%2080%2080%2070%2086%20Z%22%20fill%3D%22%23FDE047%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2246%22%20r%3D%225.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2250%2C46%2055%2C43%2055%2C48%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%2246%22%20r%3D%225.5%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2270%2C46%2065%2C43%2065%2C48%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M48%2058%20Q60%2070%2072%2058%22%20fill%3D%22%2318181B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%208%20V2%20M24%2022%20L18%2016%20M96%2022%20L102%2016%20M14%2050%20H6%20M106%2050%20H114%22%20stroke%3D%22%23F59E0B%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "idea",
      "bombilla",
      "luz",
      "creatividad",
      "mente",
      "retro",
      "vintage",
      "genio"
    ]
  },
  {
    "id": "retro-card-thats-all",
    "name": "Tarjeta The End Iris Concéntrico",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"60\" cy=\"60\" r=\"50\" fill=\"#DC2626\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"40\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"30\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"20\" fill=\"#18181B\"/>\n    <rect x=\"20\" y=\"50\" width=\"80\" height=\"20\" rx=\"4\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <text x=\"32\" y=\"65\" font-family=\"serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#18181B\">The End</text></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2250%22%20fill%3D%22%23DC2626%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2240%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2230%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2220%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2220%22%20y%3D%2250%22%20width%3D%2280%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2265%22%20font-family%3D%22serif%22%20font-size%3D%2214%22%20font-weight%3D%22bold%22%20fill%3D%22%2318181B%22%3EThe%20End%3C/text%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "the end",
      "cine",
      "final",
      "circulos",
      "cartel",
      "animacion",
      "retro",
      "1930"
    ]
  },
  {
    "id": "retro-film-reel-spinning",
    "name": "Rollo de Película 35mm",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"60\" cy=\"60\" r=\"40\" fill=\"#71717A\" stroke=\"#18181B\" stroke-width=\"4.5\"/>\n    <circle cx=\"60\" cy=\"60\" r=\"14\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <circle cx=\"60\" cy=\"32\" r=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"60\" cy=\"88\" r=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"32\" cy=\"60\" r=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"88\" cy=\"60\" r=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <path d=\"M88 40 Q112 36 108 64 Q106 82 116 88\" stroke=\"#18181B\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2240%22%20fill%3D%22%2371717A%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%2214%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2232%22%20r%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2288%22%20r%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2232%22%20cy%3D%2260%22%20r%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2288%22%20cy%3D%2260%22%20r%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M88%2040%20Q112%2036%20108%2064%20Q106%2082%20116%2088%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "pelicula",
      "cine",
      "film",
      "35mm",
      "carrete",
      "rollo",
      "hollywood",
      "retro"
    ]
  },
  {
    "id": "retro-vintage-microphone",
    "name": "Micrófono de Radio Clásico",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"60\" cy=\"50\" r=\"28\" fill=\"none\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <line x1=\"60\" y1=\"22\" x2=\"60\" y2=\"34\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <line x1=\"60\" y1=\"66\" x2=\"60\" y2=\"78\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <line x1=\"32\" y1=\"50\" x2=\"44\" y2=\"50\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <line x1=\"76\" y1=\"50\" x2=\"88\" y2=\"50\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <circle cx=\"60\" cy=\"50\" r=\"16\" fill=\"#E4E4E7\" stroke=\"#18181B\" stroke-width=\"3\"/>\n    <circle cx=\"55\" cy=\"48\" r=\"3\" fill=\"#18181B\"/><circle cx=\"65\" cy=\"48\" r=\"3\" fill=\"#18181B\"/>\n    <path d=\"M54 54 Q60 58 66 54\" stroke=\"#18181B\" stroke-width=\"2\" fill=\"none\"/>\n    <line x1=\"60\" y1=\"78\" x2=\"60\" y2=\"104\" stroke=\"#18181B\" stroke-width=\"5\"/>\n    <ellipse cx=\"60\" cy=\"106\" rx=\"20\" ry=\"6\" fill=\"#18181B\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2250%22%20r%3D%2228%22%20fill%3D%22none%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2222%22%20x2%3D%2260%22%20y2%3D%2234%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2266%22%20x2%3D%2260%22%20y2%3D%2278%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2232%22%20y1%3D%2250%22%20x2%3D%2244%22%20y2%3D%2250%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2276%22%20y1%3D%2250%22%20x2%3D%2288%22%20y2%3D%2250%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2250%22%20r%3D%2216%22%20fill%3D%22%23E4E4E7%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2255%22%20cy%3D%2248%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%2248%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M54%2054%20Q60%2058%2066%2054%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2260%22%20y1%3D%2278%22%20x2%3D%2260%22%20y2%3D%22104%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%225%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%22106%22%20rx%3D%2220%22%20ry%3D%226%22%20fill%3D%22%2318181B%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "microfono",
      "radio",
      "estudio",
      "cantar",
      "voz",
      "locutor",
      "vintage",
      "retro"
    ]
  },
  {
    "id": "retro-magic-top-hat",
    "name": "Sombrero de Copa con Orejas",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><ellipse cx=\"50\" cy=\"30\" rx=\"6\" ry=\"18\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\" transform=\"rotate(-15 50 30)\"/>\n    <ellipse cx=\"50\" cy=\"30\" rx=\"3\" ry=\"12\" fill=\"#F472B6\"/>\n    <ellipse cx=\"70\" cy=\"30\" rx=\"6\" ry=\"18\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3\" transform=\"rotate(15 70 30)\"/>\n    <ellipse cx=\"70\" cy=\"30\" rx=\"3\" ry=\"12\" fill=\"#F472B6\"/>\n    <rect x=\"36\" y=\"44\" width=\"48\" height=\"42\" rx=\"3\" fill=\"#18181B\"/>\n    <rect x=\"36\" y=\"74\" width=\"48\" height=\"8\" fill=\"#DC2626\"/>\n    <ellipse cx=\"60\" cy=\"86\" rx=\"36\" ry=\"8\" fill=\"#18181B\"/>\n    <polygon points=\"26,38 30,42 26,46 22,42\" fill=\"#FBBF24\"/>\n    <polygon points=\"94,36 98,40 94,44 90,40\" fill=\"#FBBF24\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2230%22%20rx%3D%226%22%20ry%3D%2218%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20transform%3D%22rotate%28-15%2050%2030%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2250%22%20cy%3D%2230%22%20rx%3D%223%22%20ry%3D%2212%22%20fill%3D%22%23F472B6%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2270%22%20cy%3D%2230%22%20rx%3D%226%22%20ry%3D%2218%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20transform%3D%22rotate%2815%2070%2030%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2270%22%20cy%3D%2230%22%20rx%3D%223%22%20ry%3D%2212%22%20fill%3D%22%23F472B6%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2236%22%20y%3D%2244%22%20width%3D%2248%22%20height%3D%2242%22%20rx%3D%223%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2236%22%20y%3D%2274%22%20width%3D%2248%22%20height%3D%228%22%20fill%3D%22%23DC2626%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2260%22%20cy%3D%2286%22%20rx%3D%2236%22%20ry%3D%228%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2226%2C38%2030%2C42%2026%2C46%2022%2C42%22%20fill%3D%22%23FBBF24%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2294%2C36%2098%2C40%2094%2C44%2090%2C40%22%20fill%3D%22%23FBBF24%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "magia",
      "conejo",
      "sombrero",
      "chistera",
      "mago",
      "show",
      "truco",
      "retro"
    ]
  },
  {
    "id": "retro-vintage-projector",
    "name": "Proyector de Cine con Haz",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><circle cx=\"40\" cy=\"30\" r=\"14\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <circle cx=\"40\" cy=\"30\" r=\"4\" fill=\"#18181B\"/>\n    <circle cx=\"76\" cy=\"30\" r=\"14\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <circle cx=\"76\" cy=\"30\" r=\"4\" fill=\"#18181B\"/>\n    <rect x=\"34\" y=\"44\" width=\"50\" height=\"36\" rx=\"4\" fill=\"#18181B\"/>\n    <circle cx=\"50\" cy=\"62\" r=\"6\" fill=\"#FBBF24\"/>\n    <rect x=\"84\" y=\"54\" width=\"12\" height=\"16\" fill=\"#71717A\" stroke=\"#18181B\" stroke-width=\"2.5\"/>\n    <polygon points=\"96,56 116,40 116,84 96,68\" fill=\"#FEF08A\" opacity=\"0.6\"/>\n    <line x1=\"59\" y1=\"80\" x2=\"42\" y2=\"108\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <line x1=\"59\" y1=\"80\" x2=\"76\" y2=\"108\" stroke=\"#18181B\" stroke-width=\"4\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2230%22%20r%3D%2214%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2240%22%20cy%3D%2230%22%20r%3D%224%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2276%22%20cy%3D%2230%22%20r%3D%2214%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2276%22%20cy%3D%2230%22%20r%3D%224%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2234%22%20y%3D%2244%22%20width%3D%2250%22%20height%3D%2236%22%20rx%3D%224%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2262%22%20r%3D%226%22%20fill%3D%22%23FBBF24%22/%3E%0A%20%20%20%20%3Crect%20x%3D%2284%22%20y%3D%2254%22%20width%3D%2212%22%20height%3D%2216%22%20fill%3D%22%2371717A%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%222.5%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2296%2C56%20116%2C40%20116%2C84%2096%2C68%22%20fill%3D%22%23FEF08A%22%20opacity%3D%220.6%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2259%22%20y1%3D%2280%22%20x2%3D%2242%22%20y2%3D%22108%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2259%22%20y1%3D%2280%22%20x2%3D%2276%22%20y2%3D%22108%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "proyector",
      "cine",
      "luz",
      "pantalla",
      "pelicula",
      "vintage",
      "retro",
      "1930"
    ]
  },
  {
    "id": "retro-director-megaphone",
    "name": "Megáfono de Director Action!",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><polygon points=\"26,60 88,34 88,86\" fill=\"#FBBF24\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <ellipse cx=\"88\" cy=\"60\" rx=\"8\" ry=\"26\" fill=\"#F59E0B\" stroke=\"#18181B\" stroke-width=\"3.5\"/>\n    <ellipse cx=\"26\" cy=\"60\" rx=\"4\" ry=\"8\" fill=\"#18181B\"/>\n    <path d=\"M48 70 V84\" stroke=\"#18181B\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <text x=\"36\" y=\"64\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#18181B\">ACTION!</text>\n    <path d=\"M100 48 Q108 60 100 72 M108 42 Q118 60 108 78\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpolygon%20points%3D%2226%2C60%2088%2C34%2088%2C86%22%20fill%3D%22%23FBBF24%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2288%22%20cy%3D%2260%22%20rx%3D%228%22%20ry%3D%2226%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2226%22%20cy%3D%2260%22%20rx%3D%224%22%20ry%3D%228%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M48%2070%20V84%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%2236%22%20y%3D%2264%22%20font-family%3D%22sans-serif%22%20font-size%3D%229%22%20font-weight%3D%22bold%22%20fill%3D%22%2318181B%22%3EACTION%21%3C/text%3E%0A%20%20%20%20%3Cpath%20d%3D%22M100%2048%20Q108%2060%20100%2072%20M108%2042%20Q118%2060%20108%2078%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "megafono",
      "director",
      "accion",
      "cine",
      "rodaje",
      "hollywood",
      "retro",
      "vintage"
    ]
  },
  {
    "id": "retro-dancing-music-notes",
    "name": "Notas Musicales Cantantes",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><line x1=\"38\" y1=\"72\" x2=\"38\" y2=\"34\" stroke=\"#18181B\" stroke-width=\"6\"/>\n    <line x1=\"82\" y1=\"64\" x2=\"82\" y2=\"26\" stroke=\"#18181B\" stroke-width=\"6\"/>\n    <polygon points=\"35,34 85,26 85,38 35,46\" fill=\"#18181B\"/>\n    <ellipse cx=\"32\" cy=\"74\" rx=\"16\" ry=\"12\" fill=\"#18181B\" transform=\"rotate(-20 32 74)\"/>\n    <circle cx=\"28\" cy=\"72\" r=\"3.5\" fill=\"#FFFDF5\"/>\n    <circle cx=\"38\" cy=\"70\" r=\"3.5\" fill=\"#FFFDF5\"/>\n    <ellipse cx=\"76\" cy=\"66\" rx=\"16\" ry=\"12\" fill=\"#18181B\" transform=\"rotate(-20 76 66)\"/>\n    <circle cx=\"72\" cy=\"64\" r=\"3.5\" fill=\"#FFFDF5\"/>\n    <circle cx=\"82\" cy=\"62\" r=\"3.5\" fill=\"#FFFDF5\"/>\n    <path d=\"M26 84 Q22 96 16 98\" stroke=\"#18181B\" stroke-width=\"3.5\" fill=\"none\"/>\n    <ellipse cx=\"14\" cy=\"98\" rx=\"6\" ry=\"3.5\" fill=\"#18181B\"/>\n    <path d=\"M70 76 Q66 94 60 96\" stroke=\"#18181B\" stroke-width=\"3.5\" fill=\"none\"/>\n    <ellipse cx=\"58\" cy=\"96\" rx=\"6\" ry=\"3.5\" fill=\"#18181B\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cline%20x1%3D%2238%22%20y1%3D%2272%22%20x2%3D%2238%22%20y2%3D%2234%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%226%22/%3E%0A%20%20%20%20%3Cline%20x1%3D%2282%22%20y1%3D%2264%22%20x2%3D%2282%22%20y2%3D%2226%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%226%22/%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2235%2C34%2085%2C26%2085%2C38%2035%2C46%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2232%22%20cy%3D%2274%22%20rx%3D%2216%22%20ry%3D%2212%22%20fill%3D%22%2318181B%22%20transform%3D%22rotate%28-20%2032%2074%29%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2228%22%20cy%3D%2272%22%20r%3D%223.5%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2238%22%20cy%3D%2270%22%20r%3D%223.5%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2276%22%20cy%3D%2266%22%20rx%3D%2216%22%20ry%3D%2212%22%20fill%3D%22%2318181B%22%20transform%3D%22rotate%28-20%2076%2066%29%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2272%22%20cy%3D%2264%22%20r%3D%223.5%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2282%22%20cy%3D%2262%22%20r%3D%223.5%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M26%2084%20Q22%2096%2016%2098%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2214%22%20cy%3D%2298%22%20rx%3D%226%22%20ry%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M70%2076%20Q66%2094%2060%2096%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223.5%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2258%22%20cy%3D%2296%22%20rx%3D%226%22%20ry%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "musica",
      "notas",
      "cantar",
      "ritmo",
      "melodia",
      "cancion",
      "retro",
      "vintage"
    ]
  },
  {
    "id": "retro-lucky-dice-pair",
    "name": "Dados de la Suerte 1930s",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><rect x=\"20\" y=\"44\" width=\"38\" height=\"38\" rx=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"39\" cy=\"63\" r=\"5\" fill=\"#DC2626\"/>\n    <circle cx=\"28\" cy=\"52\" r=\"3.5\" fill=\"#18181B\"/><circle cx=\"50\" cy=\"74\" r=\"3.5\" fill=\"#18181B\"/>\n    <circle cx=\"50\" cy=\"52\" r=\"3.5\" fill=\"#18181B\"/><circle cx=\"28\" cy=\"74\" r=\"3.5\" fill=\"#18181B\"/>\n    <g transform=\"rotate(25 78 50)\">\n      <rect x=\"60\" y=\"32\" width=\"38\" height=\"38\" rx=\"8\" fill=\"#FFFDF5\" stroke=\"#18181B\" stroke-width=\"4\"/>\n      <circle cx=\"79\" cy=\"51\" r=\"5\" fill=\"#DC2626\"/>\n      <circle cx=\"68\" cy=\"40\" r=\"3.5\" fill=\"#18181B\"/><circle cx=\"90\" cy=\"62\" r=\"3.5\" fill=\"#18181B\"/>\n    </g>\n    <path d=\"M12 40 Q18 32 24 34 M88 18 Q98 16 102 24\" stroke=\"#18181B\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Crect%20x%3D%2220%22%20y%3D%2244%22%20width%3D%2238%22%20height%3D%2238%22%20rx%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2239%22%20cy%3D%2263%22%20r%3D%225%22%20fill%3D%22%23DC2626%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2228%22%20cy%3D%2252%22%20r%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2274%22%20r%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2252%22%20r%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2228%22%20cy%3D%2274%22%20r%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Cg%20transform%3D%22rotate%2825%2078%2050%29%22%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2260%22%20y%3D%2232%22%20width%3D%2238%22%20height%3D%2238%22%20rx%3D%228%22%20fill%3D%22%23FFFDF5%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2279%22%20cy%3D%2251%22%20r%3D%225%22%20fill%3D%22%23DC2626%22/%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2268%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%3Ccircle%20cx%3D%2290%22%20cy%3D%2262%22%20r%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12%2040%20Q18%2032%2024%2034%20M88%2018%20Q98%2016%20102%2024%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "dados",
      "suerte",
      "juego",
      "azar",
      "casino",
      "retro",
      "vintage",
      "vegas"
    ]
  },
  {
    "id": "retro-broadway-marquee",
    "name": "Marquesina de Estrellas Broadway",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><rect x=\"16\" y=\"32\" width=\"88\" height=\"56\" rx=\"10\" fill=\"#18181B\" stroke=\"#FBBF24\" stroke-width=\"4\"/>\n    <g fill=\"#FDE047\">\n      <circle cx=\"26\" cy=\"40\" r=\"3\"/><circle cx=\"43\" cy=\"40\" r=\"3\"/><circle cx=\"60\" cy=\"40\" r=\"3\"/><circle cx=\"77\" cy=\"40\" r=\"3\"/><circle cx=\"94\" cy=\"40\" r=\"3\"/>\n      <circle cx=\"26\" cy=\"80\" r=\"3\"/><circle cx=\"43\" cy=\"80\" r=\"3\"/><circle cx=\"60\" cy=\"80\" r=\"3\"/><circle cx=\"77\" cy=\"80\" r=\"3\"/><circle cx=\"94\" cy=\"80\" r=\"3\"/>\n      <circle cx=\"26\" cy=\"60\" r=\"3\"/><circle cx=\"94\" cy=\"60\" r=\"3\"/>\n    </g>\n    <polygon points=\"60,46 64,54 73,54 66,60 69,68 60,63 51,68 54,60 47,54 56,54\" fill=\"#F59E0B\" stroke=\"#FFFDF5\" stroke-width=\"1.5\"/>\n    <text x=\"36\" y=\"74\" font-family=\"monospace\" font-size=\"9\" font-weight=\"bold\" fill=\"#FFFDF5\">SHOWTIME</text></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Crect%20x%3D%2216%22%20y%3D%2232%22%20width%3D%2288%22%20height%3D%2256%22%20rx%3D%2210%22%20fill%3D%22%2318181B%22%20stroke%3D%22%23FBBF24%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Cg%20fill%3D%22%23FDE047%22%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2226%22%20cy%3D%2240%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2243%22%20cy%3D%2240%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2240%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2277%22%20cy%3D%2240%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2294%22%20cy%3D%2240%22%20r%3D%223%22/%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2226%22%20cy%3D%2280%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2243%22%20cy%3D%2280%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2280%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2277%22%20cy%3D%2280%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2294%22%20cy%3D%2280%22%20r%3D%223%22/%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2226%22%20cy%3D%2260%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2294%22%20cy%3D%2260%22%20r%3D%223%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2260%2C46%2064%2C54%2073%2C54%2066%2C60%2069%2C68%2060%2C63%2051%2C68%2054%2C60%2047%2C54%2056%2C54%22%20fill%3D%22%23F59E0B%22%20stroke%3D%22%23FFFDF5%22%20stroke-width%3D%221.5%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%2236%22%20y%3D%2274%22%20font-family%3D%22monospace%22%20font-size%3D%229%22%20font-weight%3D%22bold%22%20fill%3D%22%23FFFDF5%22%3ESHOWTIME%3C/text%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "marquesina",
      "broadway",
      "teatro",
      "show",
      "luces",
      "estrella",
      "cartel",
      "retro"
    ]
  },
  {
    "id": "retro-vintage-umbrella",
    "name": "Paraguas Danzante bajo la Lluvia",
    "category": "Stickers Retro 1930s",
    "subCategory": "Cine, Música & Show 1930s",
    "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\" fill=\"none\"><path d=\"M22 62 C22 36 98 36 98 62 C90 58 84 64 74 60 C64 64 56 58 46 62 C36 58 30 64 22 62 Z\" fill=\"#DC2626\" stroke=\"#18181B\" stroke-width=\"4\"/>\n    <circle cx=\"60\" cy=\"34\" r=\"3.5\" fill=\"#18181B\"/>\n    <circle cx=\"48\" cy=\"50\" r=\"4\" fill=\"#FFFDF5\"/><circle cx=\"48\" cy=\"50\" r=\"3\" fill=\"#18181B\"/><polygon points=\"48,50 51,48 51,52\" fill=\"#FFFDF5\"/>\n    <circle cx=\"72\" cy=\"50\" r=\"4\" fill=\"#FFFDF5\"/><circle cx=\"72\" cy=\"50\" r=\"3\" fill=\"#18181B\"/><polygon points=\"72,50 69,48 69,52\" fill=\"#FFFDF5\"/>\n    <path d=\"M60 62 V92 C60 102 46 102 46 94\" stroke=\"#92400E\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <circle cx=\"28\" cy=\"22\" r=\"3\" fill=\"#60A5FA\"/>\n    <circle cx=\"88\" cy=\"24\" r=\"3\" fill=\"#60A5FA\"/>\n    <circle cx=\"40\" cy=\"104\" r=\"2\" fill=\"#60A5FA\"/><circle cx=\"76\" cy=\"102\" r=\"2.5\" fill=\"#60A5FA\"/></svg>",
    "dataUri": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M22%2062%20C22%2036%2098%2036%2098%2062%20C90%2058%2084%2064%2074%2060%20C64%2064%2056%2058%2046%2062%20C36%2058%2030%2064%2022%2062%20Z%22%20fill%3D%22%23DC2626%22%20stroke%3D%22%2318181B%22%20stroke-width%3D%224%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2260%22%20cy%3D%2234%22%20r%3D%223.5%22%20fill%3D%22%2318181B%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2248%22%20cy%3D%2250%22%20r%3D%224%22%20fill%3D%22%23FFFDF5%22/%3E%3Ccircle%20cx%3D%2248%22%20cy%3D%2250%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2248%2C50%2051%2C48%2051%2C52%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2272%22%20cy%3D%2250%22%20r%3D%224%22%20fill%3D%22%23FFFDF5%22/%3E%3Ccircle%20cx%3D%2272%22%20cy%3D%2250%22%20r%3D%223%22%20fill%3D%22%2318181B%22/%3E%3Cpolygon%20points%3D%2272%2C50%2069%2C48%2069%2C52%22%20fill%3D%22%23FFFDF5%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M60%2062%20V92%20C60%20102%2046%20102%2046%2094%22%20stroke%3D%22%2392400E%22%20stroke-width%3D%224.5%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2228%22%20cy%3D%2222%22%20r%3D%223%22%20fill%3D%22%2360A5FA%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2288%22%20cy%3D%2224%22%20r%3D%223%22%20fill%3D%22%2360A5FA%22/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2240%22%20cy%3D%22104%22%20r%3D%222%22%20fill%3D%22%2360A5FA%22/%3E%3Ccircle%20cx%3D%2276%22%20cy%3D%22102%22%20r%3D%222.5%22%20fill%3D%22%2360A5FA%22/%3E%3C/svg%3E",
    "viewBox": "0 0 120 120",
    "defaultFill": "#18181B",
    "tags": [
      "paraguas",
      "lluvia",
      "baile",
      "singing in the rain",
      "gotas",
      "retro",
      "vintage",
      "1930"
    ]
  }
];
