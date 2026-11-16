import { CanvasPage, CanvasElement } from '../types';
import { TemplateItem } from '../data/templates';

export const STORAGE_KEY_CUSTOM_TEMPLATES = 'creava_custom_templates';
export const EVENT_CUSTOM_TEMPLATES_CHANGED = 'creava_custom_templates_changed';

/**
 * Retrieves all custom templates saved by user in localStorage
 */
export function getCustomTemplates(): TemplateItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_TEMPLATES);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (err) {
    console.warn('Error reading custom templates from localStorage:', err);
  }
  return [];
}

/**
 * Saves a custom template to localStorage and returns updated list
 */
export function saveCustomTemplate(template: TemplateItem): TemplateItem[] {
  const current = getCustomTemplates();
  const existsIdx = current.findIndex(t => t.id === template.id);
  let updated: TemplateItem[];

  if (existsIdx >= 0) {
    updated = [...current];
    updated[existsIdx] = template;
  } else {
    updated = [template, ...current];
  }

  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_TEMPLATES, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(EVENT_CUSTOM_TEMPLATES_CHANGED, { detail: updated }));
  } catch (err) {
    console.error('Failed to persist template to localStorage:', err);
  }

  return updated;
}

/**
 * Removes a custom template by ID
 */
export function removeCustomTemplate(id: string): TemplateItem[] {
  const current = getCustomTemplates();
  const updated = current.filter(t => t.id !== id);

  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_TEMPLATES, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(EVENT_CUSTOM_TEMPLATES_CHANGED, { detail: updated }));
  } catch (err) {
    console.error('Failed to update templates after removal:', err);
  }

  return updated;
}

/**
 * Generates an SVG data URL thumbnail for a canvas page
 */
export function generateSvgThumbnail(page: CanvasPage, docWidth: number = 1080, docHeight: number = 1080): string {
  const bgType = page.background?.type || 'color';
  const bgVal = page.background?.value || '#ffffff';
  const w = docWidth || 1080;
  const h = docHeight || 1080;

  // Background definition
  let bgSvg = `<rect width="${w}" height="${h}" fill="#ffffff" />`;
  if (bgType === 'color') {
    bgSvg = `<rect width="${w}" height="${h}" fill="${bgVal}" />`;
  } else if (bgType === 'gradient') {
    bgSvg = `<rect width="${w}" height="${h}" fill="#7d2ae8" opacity="0.9" />`;
  }

  // Draw simplified elements (up to 20 to keep SVG compact)
  const elementsSvg = (page.elements || []).slice(0, 20).map((el: CanvasElement) => {
    const opacity = el.opacity ?? 1;
    const transform = el.rotation ? `transform="rotate(${el.rotation} ${el.x + el.width / 2} ${el.y + el.height / 2})"` : '';

    if (el.type === 'text') {
      const textFill = el.color || '#1e293b';
      const cleanText = (el.content || 'Texto').replace(/[<>&"]/g, '');
      const fontSize = Math.max(16, el.fontSize || 32);
      return `
        <text 
          x="${el.x}" 
          y="${el.y + fontSize}" 
          font-family="sans-serif" 
          font-size="${fontSize}" 
          fill="${textFill}" 
          opacity="${opacity}" 
          font-weight="${el.bold ? 'bold' : 'normal'}" 
          ${transform}
        >
          ${cleanText.substring(0, 35)}
        </text>
      `;
    }

    if (el.type === 'shape') {
      const fill = el.fillColor || '#7d2ae8';
      const stroke = el.strokeColor ? `stroke="${el.strokeColor}" stroke-width="${el.strokeWidth || 1}"` : '';
      const rx = el.borderRadius || 0;

      if (el.shapeType === 'circle') {
        const r = Math.min(el.width, el.height) / 2;
        return `<circle cx="${el.x + r}" cy="${el.y + r}" r="${r}" fill="${fill}" opacity="${opacity}" ${stroke} ${transform} />`;
      }

      return `<rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" rx="${rx}" fill="${fill}" opacity="${opacity}" ${stroke} ${transform} />`;
    }

    if (el.type === 'image') {
      if (el.src && el.src.startsWith('data:image/')) {
        // Embed small preview
        return `
          <image 
            x="${el.x}" 
            y="${el.y}" 
            width="${el.width}" 
            height="${el.height}" 
            href="${el.src}" 
            preserveAspectRatio="xMidYMid slice" 
            opacity="${opacity}" 
            ${transform} 
          />
        `;
      }
      return `
        <rect 
          x="${el.x}" 
          y="${el.y}" 
          width="${el.width}" 
          height="${el.height}" 
          rx="${el.borderRadius || 8}" 
          fill="#cbd5e1" 
          opacity="${opacity}" 
          ${transform} 
        />
        <text x="${el.x + el.width / 2}" y="${el.y + el.height / 2}" font-size="24" fill="#64748b" text-anchor="middle" dominant-baseline="middle">
          IMG
        </text>
      `;
    }

    return '';
  }).join('');

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="400" height="${Math.round(400 * (h / w))}">
      ${bgSvg}
      ${elementsSvg}
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Utility: Converts a raw filename into a human-friendly title
 */
export function cleanFileNameToTitle(fileName: string): string {
  if (!fileName) return 'Nueva Plantilla';
  const nameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
  const spaced = nameWithoutExt
    .replace(/[_-]+/g, ' ')
    .replace(/%20/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!spaced) return 'Nueva Plantilla';

  // Capitalize words nicely
  return spaced
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Creates a complete TemplateItem from current canvas page
 */
export function createTemplateFromPage(
  name: string,
  category: string = 'Mis Plantillas',
  width: number = 1080,
  height: number = 1080,
  page: CanvasPage,
  description?: string
): TemplateItem {
  const thumb = generateSvgThumbnail(page, width, height);

  // Extract primary colors from elements
  const colorsSet = new Set<string>();
  if (page.background?.type === 'color') colorsSet.add(page.background.value);
  page.elements.forEach(el => {
    if (el.color) colorsSet.add(el.color);
    if (el.fillColor) colorsSet.add(el.fillColor);
  });
  const primaryColors = Array.from(colorsSet).slice(0, 4);

  return {
    id: `tpl-user-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: name.trim() || 'Plantilla Personalizada',
    category: category.trim() || 'Mis Plantillas',
    thumbnailUrl: thumb,
    width,
    height,
    description: description || `Plantilla personalizada creada por el usuario con ${page.elements.length} elementos.`,
    suggestedTypography: 'Personalizada',
    primaryColors: primaryColors.length > 0 ? primaryColors : ['#7d2ae8', '#ffffff'],
    keyElements: [`${page.elements.length} capas de diseño`, 'Editable 100%'],
    page: JSON.parse(JSON.stringify(page)),
    isCustom: true,
    createdAt: Date.now(),
  };
}

/**
 * Convenience wrapper for creating a custom template from page options
 */
export function createCustomTemplateFromPage(params: {
  name: string;
  category?: string;
  width?: number;
  height?: number;
  page: CanvasPage;
  description?: string;
}): TemplateItem {
  return createTemplateFromPage(
    params.name,
    params.category || 'Mis Plantillas',
    params.width || 1080,
    params.height || 1080,
    params.page,
    params.description
  );
}

/**
 * Reads a file as Data URL
 */
function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error(`No se pudo leer el archivo ${file.name}`));
    reader.readAsDataURL(file);
  });
}

/**
 * Reads a file as plain text
 */
function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error(`No se pudo leer el archivo ${file.name}`));
    reader.readAsText(file);
  });
}

/**
 * Formats byte size to human readable string
 */
function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * PARSES ANY FILE AS A RICH CREAVA DESIGN TEMPLATE
 * Supports:
 * - JSON (Creava templates, Creava documents, canvas pages, arbitrary JSON)
 * - Images (PNG, JPG, JPEG, WEBP, SVG, GIF, BMP, AVIF, ICO, TIFF)
 * - Vector SVG
 * - PDF documents
 * - Markdown & Text files (.md, .txt, .log)
 * - Code & Web files (.html, .css, .js, .ts, .py)
 * - Spreadsheets & Data (.csv, .tsv)
 * - Presentations & Office (.pptx, .docx, .xlsx)
 * - Audio & Video (.mp3, .mp4, .wav)
 * - Any other arbitrary binary or unknown file
 */
export async function parseAnyFileAsTemplate(file: File): Promise<TemplateItem> {
  const extension = (file.name.split('.').pop() || '').toLowerCase();
  const title = cleanFileNameToTitle(file.name);
  const fileSizeStr = formatFileSize(file.size);

  // 1. JSON FILES (.json)
  if (extension === 'json' || file.type === 'application/json') {
    return parseJsonTemplate(file);
  }

  // 2. IMAGE FILES (.png, .jpg, .jpeg, .webp, .gif, .bmp, .avif, .ico, .tiff)
  const isImageMime = file.type.startsWith('image/');
  const isImageExt = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'bmp', 'avif', 'ico', 'tiff', 'svg'].includes(extension);

  if (isImageMime || isImageExt) {
    return parseImageAsTemplate(file, title, extension);
  }

  // 3. PDF DOCUMENTS (.pdf)
  if (extension === 'pdf' || file.type === 'application/pdf') {
    return parsePdfAsTemplate(file, title, fileSizeStr);
  }

  // 4. MARKDOWN & TEXT FILES (.txt, .md, .markdown, .log)
  if (['txt', 'md', 'markdown', 'log'].includes(extension) || file.type.startsWith('text/plain') || file.type === 'text/markdown') {
    return parseTextAsTemplate(file, title, extension);
  }

  // 5. CODE & WEB FILES (.html, .htm, .css, .js, .ts, .tsx, .py)
  if (['html', 'htm', 'css', 'js', 'jsx', 'ts', 'tsx', 'py', 'php', 'sql'].includes(extension)) {
    return parseCodeAsTemplate(file, title, extension);
  }

  // 6. CSV / SPREADSHEET FILES (.csv, .tsv)
  if (['csv', 'tsv'].includes(extension)) {
    return parseCsvAsTemplate(file, title);
  }

  // 7. ANY OTHER FILE (Office docs, presentations, audio, archives, binary files, etc.)
  return parseGenericFileAsTemplate(file, title, extension, fileSizeStr);
}

/**
 * Backwards compatible alias for parseAnyFileAsTemplate
 */
export async function parseTemplateJsonFile(file: File): Promise<TemplateItem> {
  return parseAnyFileAsTemplate(file);
}

/**
 * 1. JSON Parser
 */
async function parseJsonTemplate(file: File): Promise<TemplateItem> {
  const text = await readFileAsText(file);
  let parsed: any;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new Error('El archivo no es un JSON válido. Revisa la sintaxis del archivo.');
  }

  // 1. Direct TemplateItem
  if (parsed.page && Array.isArray(parsed.page.elements) && parsed.width && parsed.height) {
    const thumb = parsed.thumbnailUrl && parsed.thumbnailUrl.startsWith('http')
      ? parsed.thumbnailUrl
      : generateSvgThumbnail(parsed.page, parsed.width, parsed.height);

    return {
      id: `tpl-uploaded-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: parsed.name || cleanFileNameToTitle(file.name),
      category: parsed.category || 'Mis Plantillas',
      thumbnailUrl: thumb,
      width: Number(parsed.width) || 1080,
      height: Number(parsed.height) || 1080,
      description: parsed.description || `Plantilla importada desde archivo ${file.name}`,
      suggestedTypography: parsed.suggestedTypography || 'Personalizada',
      primaryColors: Array.isArray(parsed.primaryColors) ? parsed.primaryColors : ['#7d2ae8', '#ffffff'],
      keyElements: Array.isArray(parsed.keyElements) ? parsed.keyElements : ['Diseño importado'],
      page: parsed.page,
      isCustom: true,
      createdAt: Date.now(),
    };
  }

  // 2. Full Creava DesignDocument
  if (Array.isArray(parsed.pages) && parsed.pages.length > 0 && parsed.width && parsed.height) {
    const firstPage: CanvasPage = parsed.pages[0];
    const thumb = generateSvgThumbnail(firstPage, parsed.width, parsed.height);

    return {
      id: `tpl-uploaded-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: parsed.title || cleanFileNameToTitle(file.name),
      category: 'Mis Plantillas',
      thumbnailUrl: thumb,
      width: Number(parsed.width) || 1080,
      height: Number(parsed.height) || 1080,
      description: `Proyecto Creava importado como plantilla desde ${file.name}`,
      suggestedTypography: 'Creava Studio Fonts',
      primaryColors: ['#7d2ae8', '#00c4cc', '#ffffff'],
      keyElements: [`${firstPage.elements.length} capas de diseño`, `${parsed.width}x${parsed.height}px`],
      page: firstPage,
      isCustom: true,
      createdAt: Date.now(),
    };
  }

  // 3. CanvasPage with elements
  if (Array.isArray(parsed.elements)) {
    const page: CanvasPage = {
      id: `page-${Date.now()}`,
      title: parsed.title || cleanFileNameToTitle(file.name),
      background: parsed.background || { type: 'color', value: '#ffffff' },
      elements: parsed.elements,
    };
    const thumb = generateSvgThumbnail(page, 1080, 1080);

    return {
      id: `tpl-uploaded-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: parsed.title || cleanFileNameToTitle(file.name),
      category: 'Mis Plantillas',
      thumbnailUrl: thumb,
      width: 1080,
      height: 1080,
      description: `Lienzo importado desde ${file.name}`,
      suggestedTypography: 'Personalizada',
      primaryColors: ['#7d2ae8', '#ffffff'],
      keyElements: [`${parsed.elements.length} elementos`],
      page,
      isCustom: true,
      createdAt: Date.now(),
    };
  }

  // 4. Arbitrary JSON: Format as a Modern Tech / JSON Data Report Template
  const keys = Object.keys(parsed).slice(0, 6);
  const sampleJsonStr = JSON.stringify(parsed, null, 2).slice(0, 300);

  const page: CanvasPage = {
    id: `page-json-${Date.now()}`,
    title: cleanFileNameToTitle(file.name),
    background: { type: 'color', value: '#0f172a' },
    elements: [
      {
        id: `el-json-card-${Date.now()}`,
        type: 'shape',
        name: 'Tarjeta Principal',
        shapeType: 'rectangle',
        x: 60,
        y: 60,
        width: 960,
        height: 960,
        rotation: 0,
        opacity: 1,
        zIndex: 1,
        fillColor: '#1e293b',
        strokeColor: '#334155',
        strokeWidth: 2,
        borderRadius: 24,
      },
      {
        id: `el-json-badge-${Date.now()}`,
        type: 'shape',
        name: 'Badge JSON',
        shapeType: 'rectangle',
        x: 100,
        y: 100,
        width: 180,
        height: 38,
        rotation: 0,
        opacity: 1,
        zIndex: 2,
        fillColor: '#7d2ae8',
        borderRadius: 12,
      },
      {
        id: `el-json-badgetxt-${Date.now()}`,
        type: 'text',
        name: 'Texto Badge',
        content: 'ESTRUCTURA JSON',
        x: 100,
        y: 108,
        width: 180,
        height: 24,
        rotation: 0,
        opacity: 1,
        zIndex: 3,
        fontSize: 12,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        textAlign: 'center',
        bold: true,
      },
      {
        id: `el-json-title-${Date.now()}`,
        type: 'text',
        name: 'Título Principal',
        content: cleanFileNameToTitle(file.name),
        x: 100,
        y: 160,
        width: 880,
        height: 60,
        rotation: 0,
        opacity: 1,
        zIndex: 4,
        fontSize: 42,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      {
        id: `el-json-subtitle-${Date.now()}`,
        type: 'text',
        name: 'Subtítulo',
        content: `Claves detectadas: ${keys.join(', ') || 'Objeto de datos'}`,
        x: 100,
        y: 230,
        width: 880,
        height: 35,
        rotation: 0,
        opacity: 0.8,
        zIndex: 5,
        fontSize: 18,
        fontFamily: "'Inter', sans-serif",
        color: '#94a3b8',
      },
      {
        id: `el-json-codebg-${Date.now()}`,
        type: 'shape',
        name: 'Fondo Código',
        shapeType: 'rectangle',
        x: 100,
        y: 290,
        width: 880,
        height: 680,
        rotation: 0,
        opacity: 1,
        zIndex: 6,
        fillColor: '#0b0f19',
        strokeColor: '#1e293b',
        strokeWidth: 1,
        borderRadius: 16,
      },
      {
        id: `el-json-codetxt-${Date.now()}`,
        type: 'text',
        name: 'Contenido JSON',
        content: sampleJsonStr,
        x: 130,
        y: 320,
        width: 820,
        height: 620,
        rotation: 0,
        opacity: 1,
        zIndex: 7,
        fontSize: 18,
        fontFamily: "'Courier New', monospace",
        color: '#38bdf8',
      }
    ],
  };

  const thumb = generateSvgThumbnail(page, 1080, 1080);
  return {
    id: `tpl-uploaded-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: cleanFileNameToTitle(file.name),
    category: 'Mis Plantillas',
    thumbnailUrl: thumb,
    width: 1080,
    height: 1080,
    description: `Plantilla de datos JSON generada a partir de ${file.name}`,
    suggestedTypography: 'Montserrat + Courier New',
    primaryColors: ['#7d2ae8', '#38bdf8', '#0f172a'],
    keyElements: ['Estructura JSON', 'Tarjeta de Código'],
    page,
    isCustom: true,
    createdAt: Date.now(),
  };
}

/**
 * 2. Image as Template (PNG, JPG, WEBP, SVG, etc.)
 */
async function parseImageAsTemplate(file: File, title: string, extension: string): Promise<TemplateItem> {
  const dataUrl = await readFileAsDataURL(file);

  // Detect image natural dimensions
  const dims = await new Promise<{ w: number; h: number }>((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ w: img.naturalWidth || 1080, h: img.naturalHeight || 1080 });
    };
    img.onerror = () => {
      resolve({ w: 1080, h: 1080 });
    };
    img.src = dataUrl;
  });

  // Calculate canvas dimensions based on image aspect ratio
  const ratio = dims.w / (dims.h || 1);
  let canvasW = 1080;
  let canvasH = 1080;

  if (ratio >= 1.4) {
    // Landscape / Presentation 16:9
    canvasW = 1920;
    canvasH = 1080;
  } else if (ratio <= 0.65) {
    // Reel / Story 9:16
    canvasW = 1080;
    canvasH = 1920;
  } else if (ratio >= 0.72 && ratio <= 0.88) {
    // Instagram Portrait 4:5
    canvasW = 1080;
    canvasH = 1350;
  } else {
    // Square or near-square
    canvasW = 1080;
    canvasH = 1080;
  }

  // Create clean, beautiful template elements with the image
  const isLandscape = canvasW > canvasH;
  const isStory = canvasH > canvasW * 1.4;

  const cardY = isStory 
    ? Math.round(canvasH * 0.68)
    : isLandscape 
      ? Math.round(canvasH * 0.65) 
      : Math.round(canvasH * 0.68);
  const cardH = Math.round(canvasH * 0.26);

  const page: CanvasPage = {
    id: `page-img-${Date.now()}`,
    title,
    background: { type: 'color', value: '#0f172a' },
    elements: [
      // 1. Full Image Element
      {
        id: `img-layer-${Date.now()}`,
        type: 'image',
        name: `Foto: ${title}`,
        src: dataUrl,
        x: 0,
        y: 0,
        width: canvasW,
        height: canvasH,
        rotation: 0,
        opacity: 1,
        zIndex: 1,
        borderRadius: 0,
      },
      // 2. Translucent Bottom Card for High Legibility & Modern Style
      {
        id: `img-card-bg-${Date.now()}`,
        type: 'shape',
        name: 'Banda de Contraste',
        shapeType: 'rectangle',
        x: Math.round(canvasW * 0.05),
        y: cardY,
        width: Math.round(canvasW * 0.9),
        height: cardH,
        rotation: 0,
        opacity: 0.88,
        zIndex: 2,
        fillColor: '#090d16',
        strokeColor: '#7d2ae8',
        strokeWidth: 2,
        borderRadius: 24,
      },
      // 3. Category Badge
      {
        id: `img-badge-${Date.now()}`,
        type: 'shape',
        name: 'Insignia',
        shapeType: 'rectangle',
        x: Math.round(canvasW * 0.08),
        y: cardY + 20,
        width: 140,
        height: 32,
        rotation: 0,
        opacity: 1,
        zIndex: 3,
        fillColor: '#7d2ae8',
        borderRadius: 8,
      },
      {
        id: `img-badgetxt-${Date.now()}`,
        type: 'text',
        name: 'Texto Insignia',
        content: extension.toUpperCase() || 'IMAGEN',
        x: Math.round(canvasW * 0.08),
        y: cardY + 26,
        width: 140,
        height: 20,
        rotation: 0,
        opacity: 1,
        zIndex: 4,
        fontSize: 12,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        textAlign: 'center',
        bold: true,
        letterSpacing: 1,
      },
      // 4. Primary Editable Title
      {
        id: `img-title-${Date.now()}`,
        type: 'text',
        name: 'Título Principal',
        content: title,
        x: Math.round(canvasW * 0.08),
        y: cardY + 65,
        width: Math.round(canvasW * 0.84),
        height: 55,
        rotation: 0,
        opacity: 1,
        zIndex: 5,
        fontSize: isLandscape ? 38 : (isStory ? 44 : 36),
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      // 5. Editable Subtitle
      {
        id: `img-sub-${Date.now()}`,
        type: 'text',
        name: 'Subtítulo',
        content: 'Personaliza este diseño con tus propios textos, formas y efectos en Creava',
        x: Math.round(canvasW * 0.08),
        y: cardY + 125,
        width: Math.round(canvasW * 0.84),
        height: 40,
        rotation: 0,
        opacity: 0.9,
        zIndex: 6,
        fontSize: isLandscape ? 18 : 16,
        fontFamily: "'Inter', sans-serif",
        color: '#cbd5e1',
      },
    ],
  };

  return {
    id: `tpl-user-img-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: title,
    category: 'Mis Plantillas',
    thumbnailUrl: dataUrl, // Instantaneous high-fidelity thumbnail!
    width: canvasW,
    height: canvasH,
    description: `Plantilla creada a partir de la imagen ${file.name} (${canvasW}x${canvasH}px)`,
    suggestedTypography: 'Montserrat Bold + Inter',
    primaryColors: ['#7d2ae8', '#090d16', '#ffffff'],
    keyElements: ['Fotografía Base', 'Caja de Texto Destacada', 'Totalmente Editable'],
    page,
    isCustom: true,
    createdAt: Date.now(),
  };
}

/**
 * 3. PDF Document as Template
 */
async function parsePdfAsTemplate(file: File, title: string, fileSizeStr: string): Promise<TemplateItem> {
  // A4 Ratio Document (1080 x 1528)
  const canvasW = 1080;
  const canvasH = 1528;

  const page: CanvasPage = {
    id: `page-pdf-${Date.now()}`,
    title,
    background: { type: 'color', value: '#f8fafc' },
    elements: [
      // Top Header Ribbon
      {
        id: `pdf-ribbon-${Date.now()}`,
        type: 'shape',
        name: 'Franja Superior',
        shapeType: 'rectangle',
        x: 0,
        y: 0,
        width: canvasW,
        height: 220,
        rotation: 0,
        opacity: 1,
        zIndex: 1,
        fillColor: '#7d2ae8',
        borderRadius: 0,
      },
      // Category Pill
      {
        id: `pdf-pill-${Date.now()}`,
        type: 'shape',
        name: 'Pill PDF',
        shapeType: 'rectangle',
        x: 80,
        y: 60,
        width: 180,
        height: 34,
        rotation: 0,
        opacity: 1,
        zIndex: 2,
        fillColor: '#00c4cc',
        borderRadius: 17,
      },
      {
        id: `pdf-pill-txt-${Date.now()}`,
        type: 'text',
        name: 'Texto Pill',
        content: 'DOCUMENTO PDF',
        x: 80,
        y: 68,
        width: 180,
        height: 20,
        rotation: 0,
        opacity: 1,
        zIndex: 3,
        fontSize: 12,
        fontFamily: "'Montserrat', sans-serif",
        color: '#0f172a',
        textAlign: 'center',
        bold: true,
        letterSpacing: 1,
      },
      // Document Title
      {
        id: `pdf-title-${Date.now()}`,
        type: 'text',
        name: 'Título del Documento',
        content: title,
        x: 80,
        y: 110,
        width: 920,
        height: 80,
        rotation: 0,
        opacity: 1,
        zIndex: 4,
        fontSize: 44,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      // Section Card 1: Overview
      {
        id: `pdf-card1-${Date.now()}`,
        type: 'shape',
        name: 'Tarjeta Resumen',
        shapeType: 'rectangle',
        x: 80,
        y: 280,
        width: 920,
        height: 320,
        rotation: 0,
        opacity: 1,
        zIndex: 5,
        fillColor: '#ffffff',
        strokeColor: '#e2e8f0',
        strokeWidth: 2,
        borderRadius: 20,
      },
      {
        id: `pdf-card1-h-${Date.now()}`,
        type: 'text',
        name: 'Título Resumen',
        content: '1. Resumen Ejecutivo y Objetivos',
        x: 120,
        y: 315,
        width: 840,
        height: 38,
        rotation: 0,
        opacity: 1,
        zIndex: 6,
        fontSize: 26,
        fontFamily: "'Montserrat', sans-serif",
        color: '#0f172a',
        bold: true,
      },
      {
        id: `pdf-card1-body-${Date.now()}`,
        type: 'text',
        name: 'Cuerpo Resumen',
        content: `Plantilla editorial inspirada en el archivo "${file.name}" (${fileSizeStr}). Diseña propuestas comerciales, catálogos o informes profesionales editando los bloques de contenido y agregando imágenes según necesites.`,
        x: 120,
        y: 370,
        width: 840,
        height: 180,
        rotation: 0,
        opacity: 0.85,
        zIndex: 7,
        fontSize: 20,
        fontFamily: "'Inter', sans-serif",
        color: '#334155',
        lineHeight: 1.5,
      },
      // Section Card 2: Key Points Grid
      {
        id: `pdf-card2-${Date.now()}`,
        type: 'shape',
        name: 'Tarjeta Puntos Clave',
        shapeType: 'rectangle',
        x: 80,
        y: 640,
        width: 440,
        height: 380,
        rotation: 0,
        opacity: 1,
        zIndex: 8,
        fillColor: '#ffffff',
        strokeColor: '#e2e8f0',
        strokeWidth: 2,
        borderRadius: 20,
      },
      {
        id: `pdf-card2-h-${Date.now()}`,
        type: 'text',
        name: 'Título Puntos Clave',
        content: 'Aspectos Destacados',
        x: 110,
        y: 675,
        width: 380,
        height: 35,
        rotation: 0,
        opacity: 1,
        zIndex: 9,
        fontSize: 22,
        fontFamily: "'Montserrat', sans-serif",
        color: '#7d2ae8',
        bold: true,
      },
      {
        id: `pdf-card2-b-${Date.now()}`,
        type: 'text',
        name: 'Texto Puntos Clave',
        content: `• Formato A4 estándar para impresión y digital\n• Tipografías de alto contraste y legibilidad\n• Listo para exportar a PDF de alta resolución\n• Personalización rápida de colores corporativos`,
        x: 110,
        y: 725,
        width: 380,
        height: 250,
        rotation: 0,
        opacity: 0.85,
        zIndex: 10,
        fontSize: 18,
        fontFamily: "'Inter', sans-serif",
        color: '#334155',
        lineHeight: 1.6,
      },
      // Section Card 3: Metrics / Callout
      {
        id: `pdf-card3-${Date.now()}`,
        type: 'shape',
        name: 'Tarjeta Métrica',
        shapeType: 'rectangle',
        x: 560,
        y: 640,
        width: 440,
        height: 380,
        rotation: 0,
        opacity: 1,
        zIndex: 11,
        fillColor: '#ffffff',
        strokeColor: '#e2e8f0',
        strokeWidth: 2,
        borderRadius: 20,
      },
      {
        id: `pdf-card3-h-${Date.now()}`,
        type: 'text',
        name: 'Título Métricas',
        content: 'Métrica o Conclusión',
        x: 590,
        y: 675,
        width: 380,
        height: 35,
        rotation: 0,
        opacity: 1,
        zIndex: 12,
        fontSize: 22,
        fontFamily: "'Montserrat', sans-serif",
        color: '#00c4cc',
        bold: true,
      },
      {
        id: `pdf-card3-val-${Date.now()}`,
        type: 'text',
        name: 'Valor Destacado',
        content: '100%',
        x: 590,
        y: 730,
        width: 380,
        height: 70,
        rotation: 0,
        opacity: 1,
        zIndex: 13,
        fontSize: 64,
        fontFamily: "'Montserrat', sans-serif",
        color: '#0f172a',
        bold: true,
      },
      {
        id: `pdf-card3-desc-${Date.now()}`,
        type: 'text',
        name: 'Descripción Métrica',
        content: 'Efectividad en comunicación visual, editable en tiempo real.',
        x: 590,
        y: 815,
        width: 380,
        height: 100,
        rotation: 0,
        opacity: 0.8,
        zIndex: 14,
        fontSize: 17,
        fontFamily: "'Inter', sans-serif",
        color: '#64748b',
        lineHeight: 1.4,
      },
      // Bottom Call-to-action Banner
      {
        id: `pdf-footer-card-${Date.now()}`,
        type: 'shape',
        name: 'Banner Inferior',
        shapeType: 'rectangle',
        x: 80,
        y: 1060,
        width: 920,
        height: 180,
        rotation: 0,
        opacity: 1,
        zIndex: 15,
        fillColor: '#0f172a',
        borderRadius: 20,
      },
      {
        id: `pdf-footer-h-${Date.now()}`,
        type: 'text',
        name: 'Llamada a la Acción',
        content: '¿Listo para presentar tus ideas al mundo?',
        x: 120,
        y: 1100,
        width: 600,
        height: 38,
        rotation: 0,
        opacity: 1,
        zIndex: 16,
        fontSize: 24,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      {
        id: `pdf-footer-sub-${Date.now()}`,
        type: 'text',
        name: 'Subtítulo Inferior',
        content: 'Exporta a PDF o comparte en vivo directamente desde Creava Studio',
        x: 120,
        y: 1145,
        width: 600,
        height: 30,
        rotation: 0,
        opacity: 0.7,
        zIndex: 17,
        fontSize: 16,
        fontFamily: "'Inter', sans-serif",
        color: '#cbd5e1',
      },
    ],
  };

  const thumb = generateSvgThumbnail(page, canvasW, canvasH);
  return {
    id: `tpl-user-pdf-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: title,
    category: 'Mis Plantillas',
    thumbnailUrl: thumb,
    width: canvasW,
    height: canvasH,
    description: `Plantilla editorial de documento PDF (${canvasW}x${canvasH}px A4)`,
    suggestedTypography: 'Montserrat Bold + Inter Regular',
    primaryColors: ['#7d2ae8', '#00c4cc', '#0f172a'],
    keyElements: ['Formato A4 Editorial', 'Tarjetas de Contenido', 'Métricas y Conclusiones'],
    page,
    isCustom: true,
    createdAt: Date.now(),
  };
}

/**
 * 4. Text & Markdown as Presentation / Slide Template
 */
async function parseTextAsTemplate(file: File, title: string, extension: string): Promise<TemplateItem> {
  const text = await readFileAsText(file);
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  // Extract headings and paragraphs
  let docTitle = title;
  const contentSnippets: string[] = [];

  for (const line of lines) {
    if (line.startsWith('#')) {
      const cleanH = line.replace(/^#+\s*/, '').trim();
      if (!docTitle || docTitle === title) {
        docTitle = cleanH;
      } else if (contentSnippets.length < 4) {
        contentSnippets.push(cleanH);
      }
    } else if (contentSnippets.length < 4 && line.length > 10) {
      contentSnippets.push(line.replace(/^[-*•]\s*/, ''));
    }
  }

  // 1920 x 1080 Presentation Slide
  const canvasW = 1920;
  const canvasH = 1080;

  const page: CanvasPage = {
    id: `page-txt-${Date.now()}`,
    title: docTitle,
    background: { type: 'color', value: '#0f172a' },
    elements: [
      // Accent Background Card
      {
        id: `txt-bg-card-${Date.now()}`,
        type: 'shape',
        name: 'Tarjeta Principal',
        shapeType: 'rectangle',
        x: 80,
        y: 80,
        width: 1760,
        height: 920,
        rotation: 0,
        opacity: 1,
        zIndex: 1,
        fillColor: '#1e293b',
        strokeColor: '#334155',
        strokeWidth: 2,
        borderRadius: 28,
      },
      // Badge Pill
      {
        id: `txt-badge-${Date.now()}`,
        type: 'shape',
        name: 'Insignia',
        shapeType: 'rectangle',
        x: 140,
        y: 130,
        width: 170,
        height: 38,
        rotation: 0,
        opacity: 1,
        zIndex: 2,
        fillColor: '#7d2ae8',
        borderRadius: 19,
      },
      {
        id: `txt-badgetxt-${Date.now()}`,
        type: 'text',
        name: 'Texto Insignia',
        content: extension.toUpperCase() === 'MD' ? 'MARKDOWN' : 'DOCUMENTO DE TEXTO',
        x: 140,
        y: 138,
        width: 170,
        height: 22,
        rotation: 0,
        opacity: 1,
        zIndex: 3,
        fontSize: 12,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        textAlign: 'center',
        bold: true,
      },
      // Slide Title
      {
        id: `txt-title-${Date.now()}`,
        type: 'text',
        name: 'Título Principal',
        content: docTitle,
        x: 140,
        y: 190,
        width: 1640,
        height: 75,
        rotation: 0,
        opacity: 1,
        zIndex: 4,
        fontSize: 52,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      // Content Columns
      ...contentSnippets.slice(0, 3).map((snippet, idx) => {
        const colW = 490;
        const colX = 140 + idx * 560;
        return [
          {
            id: `txt-col-${idx}-${Date.now()}`,
            type: 'shape' as const,
            name: `Tarjeta Columna ${idx + 1}`,
            shapeType: 'rectangle' as const,
            x: colX,
            y: 300,
            width: colW,
            height: 580,
            rotation: 0,
            opacity: 1,
            zIndex: 5,
            fillColor: '#0f172a',
            strokeColor: idx === 0 ? '#7d2ae8' : '#334155',
            strokeWidth: 2,
            borderRadius: 20,
          },
          {
            id: `txt-colnum-${idx}-${Date.now()}`,
            type: 'text' as const,
            name: `Número ${idx + 1}`,
            content: `0${idx + 1}`,
            x: colX + 30,
            y: 330,
            width: 100,
            height: 40,
            rotation: 0,
            opacity: 1,
            zIndex: 6,
            fontSize: 32,
            fontFamily: "'Montserrat', sans-serif",
            color: idx === 0 ? '#7d2ae8' : '#00c4cc',
            bold: true,
          },
          {
            id: `txt-coltxt-${idx}-${Date.now()}`,
            type: 'text' as const,
            name: `Texto Contenido ${idx + 1}`,
            content: snippet,
            x: colX + 30,
            y: 400,
            width: colW - 60,
            height: 440,
            rotation: 0,
            opacity: 0.9,
            zIndex: 7,
            fontSize: 22,
            fontFamily: "'Inter', sans-serif",
            color: '#e2e8f0',
            lineHeight: 1.5,
          }
        ];
      }).flat(),
    ],
  };

  const thumb = generateSvgThumbnail(page, canvasW, canvasH);
  return {
    id: `tpl-user-txt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: docTitle,
    category: 'Mis Plantillas',
    thumbnailUrl: thumb,
    width: canvasW,
    height: canvasH,
    description: `Plantilla de presentación generada desde "${file.name}"`,
    suggestedTypography: 'Montserrat Bold + Inter Regular',
    primaryColors: ['#7d2ae8', '#00c4cc', '#0f172a'],
    keyElements: ['Diapositiva 16:9', 'Columnas de Texto', 'Contenido Extraído'],
    page,
    isCustom: true,
    createdAt: Date.now(),
  };
}

/**
 * 5. Code & Web Files as IDE / Developer Showcase Template
 */
async function parseCodeAsTemplate(file: File, title: string, extension: string): Promise<TemplateItem> {
  const code = await readFileAsText(file);
  const snippet = code.slice(0, 800);

  const canvasW = 1920;
  const canvasH = 1080;

  const page: CanvasPage = {
    id: `page-code-${Date.now()}`,
    title,
    background: { type: 'color', value: '#080c14' },
    elements: [
      // IDE Window Frame
      {
        id: `code-window-${Date.now()}`,
        type: 'shape',
        name: 'Ventana Editor IDE',
        shapeType: 'rectangle',
        x: 120,
        y: 100,
        width: 1680,
        height: 880,
        rotation: 0,
        opacity: 1,
        zIndex: 1,
        fillColor: '#0f172a',
        strokeColor: '#1e293b',
        strokeWidth: 2,
        borderRadius: 24,
      },
      // Title Bar Dots (Red, Yellow, Green)
      {
        id: `code-dot1-${Date.now()}`,
        type: 'shape',
        name: 'Dot Rojo',
        shapeType: 'circle',
        x: 160,
        y: 135,
        width: 16,
        height: 16,
        rotation: 0,
        opacity: 1,
        zIndex: 2,
        fillColor: '#ef4444',
      },
      {
        id: `code-dot2-${Date.now()}`,
        type: 'shape',
        name: 'Dot Amarillo',
        shapeType: 'circle',
        x: 190,
        y: 135,
        width: 16,
        height: 16,
        rotation: 0,
        opacity: 1,
        zIndex: 2,
        fillColor: '#f59e0b',
      },
      {
        id: `code-dot3-${Date.now()}`,
        type: 'shape',
        name: 'Dot Verde',
        shapeType: 'circle',
        x: 220,
        y: 135,
        width: 16,
        height: 16,
        rotation: 0,
        opacity: 1,
        zIndex: 2,
        fillColor: '#10b981',
      },
      // File Tab
      {
        id: `code-tab-${Date.now()}`,
        type: 'shape',
        name: 'Pestaña Archivo',
        shapeType: 'rectangle',
        x: 270,
        y: 125,
        width: 240,
        height: 38,
        rotation: 0,
        opacity: 1,
        zIndex: 3,
        fillColor: '#1e293b',
        borderRadius: 8,
      },
      {
        id: `code-tabtxt-${Date.now()}`,
        type: 'text',
        name: 'Nombre Archivo Tab',
        content: file.name,
        x: 285,
        y: 132,
        width: 210,
        height: 24,
        rotation: 0,
        opacity: 1,
        zIndex: 4,
        fontSize: 14,
        fontFamily: "'Courier New', monospace",
        color: '#38bdf8',
        bold: true,
      },
      // Title
      {
        id: `code-title-${Date.now()}`,
        type: 'text',
        name: 'Título del Código',
        content: title,
        x: 160,
        y: 195,
        width: 1600,
        height: 50,
        rotation: 0,
        opacity: 1,
        zIndex: 5,
        fontSize: 36,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      // Code Snippet Box
      {
        id: `code-box-${Date.now()}`,
        type: 'shape',
        name: 'Caja Código',
        shapeType: 'rectangle',
        x: 160,
        y: 260,
        width: 1600,
        height: 680,
        rotation: 0,
        opacity: 1,
        zIndex: 6,
        fillColor: '#020617',
        strokeColor: '#1e293b',
        strokeWidth: 1,
        borderRadius: 16,
      },
      {
        id: `code-text-${Date.now()}`,
        type: 'text',
        name: 'Contenido Código',
        content: snippet,
        x: 190,
        y: 290,
        width: 1540,
        height: 620,
        rotation: 0,
        opacity: 1,
        zIndex: 7,
        fontSize: 20,
        fontFamily: "'Courier New', monospace",
        color: '#a78bfa',
        lineHeight: 1.5,
      }
    ]
  };

  const thumb = generateSvgThumbnail(page, canvasW, canvasH);
  return {
    id: `tpl-user-code-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: title,
    category: 'Mis Plantillas',
    thumbnailUrl: thumb,
    width: canvasW,
    height: canvasH,
    description: `Plantilla de presentación de código IDE generada desde ${file.name}`,
    suggestedTypography: 'Montserrat Bold + Courier New',
    primaryColors: ['#7d2ae8', '#38bdf8', '#080c14'],
    keyElements: ['Ventana IDE', 'Sintaxis Monospaciada', 'Diapositiva Tech'],
    page,
    isCustom: true,
    createdAt: Date.now(),
  };
}

/**
 * 6. CSV / Spreadsheet as Dashboard Template
 */
async function parseCsvAsTemplate(file: File, title: string): Promise<TemplateItem> {
  const text = await readFileAsText(file);
  const rows = text.split('\n').map(r => r.trim()).filter(r => r.length > 0);
  const headers = rows.length > 0 ? rows[0].split(/[,;\t]/).map(h => h.trim().replace(/^["']|["']$/g, '')) : ['Métrica 1', 'Métrica 2', 'Métrica 3'];

  const canvasW = 1920;
  const canvasH = 1080;

  const page: CanvasPage = {
    id: `page-csv-${Date.now()}`,
    title,
    background: { type: 'color', value: '#0f172a' },
    elements: [
      // Top Title Bar
      {
        id: `csv-head-${Date.now()}`,
        type: 'text',
        name: 'Título Dashboard',
        content: `Dashboard de Métricas: ${title}`,
        x: 100,
        y: 70,
        width: 1720,
        height: 55,
        rotation: 0,
        opacity: 1,
        zIndex: 1,
        fontSize: 42,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      {
        id: `csv-sub-${Date.now()}`,
        type: 'text',
        name: 'Subtítulo CSV',
        content: `Datos importados de ${file.name} • ${rows.length} registros analizados`,
        x: 100,
        y: 135,
        width: 1720,
        height: 30,
        rotation: 0,
        opacity: 0.8,
        zIndex: 2,
        fontSize: 18,
        fontFamily: "'Inter', sans-serif",
        color: '#94a3b8',
      },
      // 3 Highlight Stat Cards
      ...headers.slice(0, 3).map((header, idx) => {
        const cardW = 540;
        const cardX = 100 + idx * 590;
        const dummyVal = ['98.4%', '$124,500', '1,420+'][idx] || '4.9 ★';

        return [
          {
            id: `csv-stat-bg-${idx}-${Date.now()}`,
            type: 'shape' as const,
            name: `Tarjeta Estadística ${idx + 1}`,
            shapeType: 'rectangle' as const,
            x: cardX,
            y: 190,
            width: cardW,
            height: 220,
            rotation: 0,
            opacity: 1,
            zIndex: 3,
            fillColor: '#1e293b',
            strokeColor: idx === 0 ? '#7d2ae8' : (idx === 1 ? '#00c4cc' : '#38bdf8'),
            strokeWidth: 2,
            borderRadius: 20,
          },
          {
            id: `csv-stat-h-${idx}-${Date.now()}`,
            type: 'text' as const,
            name: `Nombre Métrica ${idx + 1}`,
            content: header || `Columna ${idx + 1}`,
            x: cardX + 30,
            y: 225,
            width: cardW - 60,
            height: 30,
            rotation: 0,
            opacity: 0.8,
            zIndex: 4,
            fontSize: 18,
            fontFamily: "'Inter', sans-serif",
            color: '#94a3b8',
          },
          {
            id: `csv-stat-v-${idx}-${Date.now()}`,
            type: 'text' as const,
            name: `Valor Métrica ${idx + 1}`,
            content: dummyVal,
            x: cardX + 30,
            y: 270,
            width: cardW - 60,
            height: 70,
            rotation: 0,
            opacity: 1,
            zIndex: 5,
            fontSize: 56,
            fontFamily: "'Montserrat', sans-serif",
            color: '#ffffff',
            bold: true,
          }
        ];
      }).flat(),
      // Data Table Container Card
      {
        id: `csv-table-bg-${Date.now()}`,
        type: 'shape',
        name: 'Contenedor Tabla',
        shapeType: 'rectangle',
        x: 100,
        y: 450,
        width: 1720,
        height: 550,
        rotation: 0,
        opacity: 1,
        zIndex: 6,
        fillColor: '#1e293b',
        strokeColor: '#334155',
        strokeWidth: 2,
        borderRadius: 24,
      },
      {
        id: `csv-table-h-${Date.now()}`,
        type: 'text',
        name: 'Título Tabla',
        content: 'Detalle de Registros y Segmentación',
        x: 140,
        y: 485,
        width: 800,
        height: 35,
        rotation: 0,
        opacity: 1,
        zIndex: 7,
        fontSize: 24,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      {
        id: `csv-table-txt-${Date.now()}`,
        type: 'text',
        name: 'Texto Datos Tabla',
        content: rows.slice(0, 8).join('\n'),
        x: 140,
        y: 540,
        width: 1640,
        height: 420,
        rotation: 0,
        opacity: 0.9,
        zIndex: 8,
        fontSize: 18,
        fontFamily: "'Courier New', monospace",
        color: '#38bdf8',
        lineHeight: 1.6,
      }
    ]
  };

  const thumb = generateSvgThumbnail(page, canvasW, canvasH);
  return {
    id: `tpl-user-csv-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: title,
    category: 'Mis Plantillas',
    thumbnailUrl: thumb,
    width: canvasW,
    height: canvasH,
    description: `Plantilla de dashboard y analítica creada desde ${file.name}`,
    suggestedTypography: 'Montserrat Bold + Courier New',
    primaryColors: ['#7d2ae8', '#00c4cc', '#38bdf8'],
    keyElements: ['Tarjetas KPI', 'Tabla de Datos', 'Infografía Corporativa'],
    page,
    isCustom: true,
    createdAt: Date.now(),
  };
}

/**
 * 7. ANY OTHER FILE (Office .pptx / .docx, Audio, Video, Archives, 3D, Binary, etc.)
 */
async function parseGenericFileAsTemplate(
  file: File, 
  title: string, 
  extension: string, 
  fileSizeStr: string
): Promise<TemplateItem> {
  const canvasW = 1920;
  const canvasH = 1080;

  // Derive theme colors based on extension
  const extUpper = (extension || 'ARCHIVO').toUpperCase();
  let themeColor = '#7d2ae8'; // default Creava purple
  let accentColor = '#00c4cc';

  if (['PPTX', 'PPT', 'KEY'].includes(extUpper)) {
    themeColor = '#ea580c'; // Presentation Orange
    accentColor = '#f59e0b';
  } else if (['DOCX', 'DOC', 'PAGES', 'RTF'].includes(extUpper)) {
    themeColor = '#2563eb'; // Document Blue
    accentColor = '#38bdf8';
  } else if (['XLSX', 'XLS', 'NUMBERS'].includes(extUpper)) {
    themeColor = '#16a34a'; // Excel Green
    accentColor = '#4ade80';
  } else if (['ZIP', 'RAR', '7Z', 'TAR', 'GZ'].includes(extUpper)) {
    themeColor = '#0d9488'; // Archive Teal
    accentColor = '#2dd4bf';
  } else if (['MP3', 'WAV', 'OGG', 'M4A', 'FLAC'].includes(extUpper)) {
    themeColor = '#db2777'; // Audio Pink
    accentColor = '#f472b6';
  } else if (['MP4', 'MOV', 'AVI', 'MKV', 'WEBM'].includes(extUpper)) {
    themeColor = '#9333ea'; // Video Violet
    accentColor = '#c084fc';
  }

  const page: CanvasPage = {
    id: `page-gen-${Date.now()}`,
    title,
    background: { type: 'color', value: '#0b0f19' },
    elements: [
      // Outer Ambient Card
      {
        id: `gen-card-${Date.now()}`,
        type: 'shape',
        name: 'Tarjeta Principal',
        shapeType: 'rectangle',
        x: 80,
        y: 80,
        width: 1760,
        height: 920,
        rotation: 0,
        opacity: 1,
        zIndex: 1,
        fillColor: '#131826',
        strokeColor: '#1f293d',
        strokeWidth: 2,
        borderRadius: 28,
      },
      // Left Hero Column: File Showcase Card
      {
        id: `gen-left-card-${Date.now()}`,
        type: 'shape',
        name: 'Caja Visual Destacada',
        shapeType: 'rectangle',
        x: 130,
        y: 130,
        width: 580,
        height: 820,
        rotation: 0,
        opacity: 1,
        zIndex: 2,
        fillColor: '#0a0e17',
        strokeColor: themeColor,
        strokeWidth: 2,
        borderRadius: 24,
      },
      // File Extension Huge Badge
      {
        id: `gen-ext-badge-${Date.now()}`,
        type: 'shape',
        name: 'Insignia Formato',
        shapeType: 'rectangle',
        x: 180,
        y: 190,
        width: 220,
        height: 50,
        rotation: 0,
        opacity: 1,
        zIndex: 3,
        fillColor: themeColor,
        borderRadius: 14,
      },
      {
        id: `gen-ext-txt-${Date.now()}`,
        type: 'text',
        name: 'Texto Formato',
        content: extUpper || 'ARCHIVO',
        x: 180,
        y: 202,
        width: 220,
        height: 30,
        rotation: 0,
        opacity: 1,
        zIndex: 4,
        fontSize: 18,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        textAlign: 'center',
        bold: true,
        letterSpacing: 2,
      },
      // Decorative Center Circle Icon
      {
        id: `gen-circle-${Date.now()}`,
        type: 'shape',
        name: 'Círculo Central',
        shapeType: 'circle',
        x: 320,
        y: 330,
        width: 200,
        height: 200,
        rotation: 0,
        opacity: 0.15,
        zIndex: 3,
        fillColor: themeColor,
      },
      {
        id: `gen-icon-text-${Date.now()}`,
        type: 'text',
        name: 'Icono Central',
        content: '📁',
        x: 320,
        y: 380,
        width: 200,
        height: 100,
        rotation: 0,
        opacity: 1,
        zIndex: 4,
        fontSize: 80,
        fontFamily: "'Segoe UI Emoji', sans-serif",
        color: '#ffffff',
        textAlign: 'center',
      },
      // File Name and Specs in Left Card
      {
        id: `gen-left-name-${Date.now()}`,
        type: 'text',
        name: 'Nombre Archivo Izq',
        content: file.name,
        x: 180,
        y: 590,
        width: 480,
        height: 60,
        rotation: 0,
        opacity: 1,
        zIndex: 5,
        fontSize: 22,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      {
        id: `gen-left-specs-${Date.now()}`,
        type: 'text',
        name: 'Detalles Archivo',
        content: `Tamaño: ${fileSizeStr}\nTipo: ${file.type || extUpper}\nImportado: ${new Date().toLocaleDateString()}`,
        x: 180,
        y: 660,
        width: 480,
        height: 100,
        rotation: 0,
        opacity: 0.75,
        zIndex: 5,
        fontSize: 16,
        fontFamily: "'Inter', sans-serif",
        color: '#94a3b8',
        lineHeight: 1.6,
      },
      // Right Content Area: Title & Presentation Blocks
      {
        id: `gen-right-title-${Date.now()}`,
        type: 'text',
        name: 'Título Principal',
        content: title,
        x: 770,
        y: 150,
        width: 1010,
        height: 70,
        rotation: 0,
        opacity: 1,
        zIndex: 6,
        fontSize: 48,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      {
        id: `gen-right-desc-${Date.now()}`,
        type: 'text',
        name: 'Descripción Proyecto',
        content: `Plantilla de diseño y presentación creada a partir de tu archivo "${file.name}". Personaliza los colores, textos, recursos y elementos para crear presentaciones ejecutivas impactantes.`,
        x: 770,
        y: 235,
        width: 1010,
        height: 70,
        rotation: 0,
        opacity: 0.85,
        zIndex: 7,
        fontSize: 20,
        fontFamily: "'Inter', sans-serif",
        color: '#cbd5e1',
        lineHeight: 1.5,
      },
      // 2 Feature Cards on the Right
      {
        id: `gen-feat1-bg-${Date.now()}`,
        type: 'shape',
        name: 'Tarjeta Característica 1',
        shapeType: 'rectangle',
        x: 770,
        y: 340,
        width: 490,
        height: 380,
        rotation: 0,
        opacity: 1,
        zIndex: 8,
        fillColor: '#0a0e17',
        strokeColor: '#1e293b',
        strokeWidth: 1.5,
        borderRadius: 20,
      },
      {
        id: `gen-feat1-h-${Date.now()}`,
        type: 'text',
        name: 'Encabezado Característica 1',
        content: 'Objetivo y Alcance',
        x: 805,
        y: 375,
        width: 420,
        height: 35,
        rotation: 0,
        opacity: 1,
        zIndex: 9,
        fontSize: 22,
        fontFamily: "'Montserrat', sans-serif",
        color: accentColor,
        bold: true,
      },
      {
        id: `gen-feat1-p-${Date.now()}`,
        type: 'text',
        name: 'Párrafo Característica 1',
        content: 'Define aquí los objetivos estratégicos, puntos de partida y metas a conseguir con este diseño o propuesta.',
        x: 805,
        y: 430,
        width: 420,
        height: 250,
        rotation: 0,
        opacity: 0.8,
        zIndex: 10,
        fontSize: 18,
        fontFamily: "'Inter', sans-serif",
        color: '#94a3b8',
        lineHeight: 1.5,
      },
      {
        id: `gen-feat2-bg-${Date.now()}`,
        type: 'shape',
        name: 'Tarjeta Característica 2',
        shapeType: 'rectangle',
        x: 1290,
        y: 340,
        width: 490,
        height: 380,
        rotation: 0,
        opacity: 1,
        zIndex: 8,
        fillColor: '#0a0e17',
        strokeColor: '#1e293b',
        strokeWidth: 1.5,
        borderRadius: 20,
      },
      {
        id: `gen-feat2-h-${Date.now()}`,
        type: 'text',
        name: 'Encabezado Característica 2',
        content: 'Entregables Clave',
        x: 1325,
        y: 375,
        width: 420,
        height: 35,
        rotation: 0,
        opacity: 1,
        zIndex: 9,
        fontSize: 22,
        fontFamily: "'Montserrat', sans-serif",
        color: themeColor,
        bold: true,
      },
      {
        id: `gen-feat2-p-${Date.now()}`,
        type: 'text',
        name: 'Párrafo Característica 2',
        content: '• Diseño editable al 100%\n• Soporte de fuentes de Google\n• Capas organizadas y personalizables\n• Exportación en alta resolución (PNG/PDF)',
        x: 1325,
        y: 430,
        width: 420,
        height: 250,
        rotation: 0,
        opacity: 0.8,
        zIndex: 10,
        fontSize: 18,
        fontFamily: "'Inter', sans-serif",
        color: '#94a3b8',
        lineHeight: 1.6,
      },
      // Bottom Callout
      {
        id: `gen-callout-bg-${Date.now()}`,
        type: 'shape',
        name: 'Caja Llamada Inferior',
        shapeType: 'rectangle',
        x: 770,
        y: 755,
        width: 1010,
        height: 195,
        rotation: 0,
        opacity: 1,
        zIndex: 11,
        fillColor: '#0a0e17',
        strokeColor: themeColor,
        strokeWidth: 2,
        borderRadius: 20,
      },
      {
        id: `gen-callout-h-${Date.now()}`,
        type: 'text',
        name: 'Título Llamada Inferior',
        content: 'Crea, Edita y Comparte sin Límites',
        x: 810,
        y: 790,
        width: 930,
        height: 35,
        rotation: 0,
        opacity: 1,
        zIndex: 12,
        fontSize: 24,
        fontFamily: "'Montserrat', sans-serif",
        color: '#ffffff',
        bold: true,
      },
      {
        id: `gen-callout-p-${Date.now()}`,
        type: 'text',
        name: 'Texto Llamada Inferior',
        content: `Esta plantilla fue generada automáticamente para procesar archivos "${extUpper}". Puedes cambiar cualquier elemento haciendo clic sobre él en el lienzo.`,
        x: 810,
        y: 835,
        width: 930,
        height: 80,
        rotation: 0,
        opacity: 0.75,
        zIndex: 13,
        fontSize: 17,
        fontFamily: "'Inter', sans-serif",
        color: '#cbd5e1',
        lineHeight: 1.4,
      }
    ]
  };

  const thumb = generateSvgThumbnail(page, canvasW, canvasH);
  return {
    id: `tpl-user-gen-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name: title,
    category: 'Mis Plantillas',
    thumbnailUrl: thumb,
    width: canvasW,
    height: canvasH,
    description: `Plantilla de presentación creada a partir del archivo ${file.name} (${extUpper})`,
    suggestedTypography: 'Montserrat Bold + Inter Regular',
    primaryColors: [themeColor, accentColor, '#0b0f19'],
    keyElements: [`Archivo ${extUpper}`, 'Diseño 16:9 Ejecutivo', 'Totalmente Editable'],
    page,
    isCustom: true,
    createdAt: Date.now(),
  };
}

/**
 * Downloads a template as a formatted JSON file
 */
export function downloadTemplateAsJson(template: TemplateItem): void {
  const cleanData = {
    name: template.name,
    category: template.category,
    width: template.width,
    height: template.height,
    description: template.description,
    suggestedTypography: template.suggestedTypography,
    primaryColors: template.primaryColors,
    keyElements: template.keyElements,
    page: template.page,
    exportedFrom: 'Creava Studio Pro',
    version: '2.0',
    exportedAt: new Date().toISOString(),
  };

  const jsonStr = JSON.stringify(cleanData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const safeName = template.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  a.download = `plantilla-creava-${safeName}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
