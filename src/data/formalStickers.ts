// 50 High-End Formal Vector Stickers for Graphic Elements & Presentations
// Clean corporate, executive, business, diploma, analytics, legal, and financial vector graphics.

export interface FormalStickerItem {
  id: string;
  name: string;
  category: 'Stickers Formales';
  subCategory: 'Sellos & Certificaciones' | 'Finanzas & Negocios' | 'Gestión & Estrategia' | 'Seguridad & Legal' | 'Premios & Reconocimientos';
  svgContent: string;
  dataUri: string;
  viewBox: string;
  defaultFill: string;
  tags: string[];
}

function createFormalSvg(svgInner: string, viewBox = '0 0 120 120'): { svgContent: string; dataUri: string; viewBox: string } {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%" fill="none">${svgInner}</svg>`;
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
  return { svgContent, dataUri, viewBox };
}

export const FORMAL_STICKERS: FormalStickerItem[] = [
  // ==========================================
  // 1. SELLOS & CERTIFICACIONES (10 stickers)
  // ==========================================
  {
    id: 'formal-seal-certified',
    name: 'Sello Certificado Oficial',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="54" fill="#0A2540" />
      <circle cx="60" cy="60" r="48" stroke="#D4AF37" stroke-width="2.5" stroke-dasharray="3 3" />
      <circle cx="60" cy="60" r="43" stroke="#D4AF37" stroke-width="1.5" />
      <path d="M42 60 L54 72 L78 46" stroke="#D4AF37" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      <text x="60" y="32" fill="#FFFFFF" font-size="7.5" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="2">CERTIFIED</text>
      <text x="60" y="93" fill="#FFFFFF" font-size="7" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="2">OFFICIAL</text>
      <polygon points="60,20 62,23 66,23 63,25 64,29 60,27 56,29 57,25 54,23 58,23" fill="#D4AF37" />
    `),
    defaultFill: '#0A2540',
    tags: ['sello', 'certificado', 'oficial', 'garantia', 'legal', 'formal', 'calidad']
  },
  {
    id: 'formal-seal-approved-gold',
    name: 'Sello Aprobado Dorado',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <g transform="rotate(12 60 60)">
        <rect x="14" y="36" width="92" height="48" rx="8" fill="#1E293B" stroke="#F59E0B" stroke-width="3" />
        <rect x="19" y="41" width="82" height="38" rx="5" fill="none" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 2" />
        <text x="60" y="65" fill="#F59E0B" font-size="14" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="3">APROBADO</text>
        <path d="M26 60 L31 65 L40 54" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    `),
    defaultFill: '#1E293B',
    tags: ['aprobado', 'sello', 'autorizado', 'formal', 'empresa', 'control', 'gold']
  },
  {
    id: 'formal-seal-iso9001',
    name: 'Insignia Calidad ISO',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="52" fill="#0F172A" stroke="#38BDF8" stroke-width="3" />
      <circle cx="60" cy="60" r="44" stroke="#94A3B8" stroke-width="1" />
      <text x="60" y="46" fill="#38BDF8" font-size="11" font-family="sans-serif" font-weight="900" text-anchor="middle">ISO</text>
      <text x="60" y="66" fill="#FFFFFF" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">9001</text>
      <text x="60" y="82" fill="#94A3B8" font-size="6.5" font-family="sans-serif" font-weight="600" text-anchor="middle" letter-spacing="1">CALIDAD TOTAL</text>
    `),
    defaultFill: '#0F172A',
    tags: ['iso', 'calidad', 'norma', 'estandard', 'certificacion', 'auditoria', 'gestion']
  },
  {
    id: 'formal-seal-guarantee',
    name: 'Garantía 100% Premium',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <path d="M60 8 L72 20 L88 20 L93 35 L108 42 L105 58 L114 71 L103 82 L106 98 L90 102 L82 116 L67 112 L53 118 L44 106 L28 106 L27 90 L12 84 L16 68 L7 55 L17 43 L15 27 L31 24 L38 10 L54 13 Z" fill="#D97706" />
      <circle cx="60" cy="63" r="38" fill="#1E293B" />
      <circle cx="60" cy="63" r="33" stroke="#FDE68A" stroke-width="1.5" />
      <text x="60" y="55" fill="#FDE68A" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">100%</text>
      <text x="60" y="70" fill="#FFFFFF" font-size="8.5" font-family="sans-serif" font-weight="800" text-anchor="middle" letter-spacing="1">GARANTÍA</text>
      <text x="60" y="83" fill="#94A3B8" font-size="6" font-family="sans-serif" text-anchor="middle">TOTAL SATISFACCIÓN</text>
    `),
    defaultFill: '#D97706',
    tags: ['garantia', 'confianza', 'respaldo', 'seguridad', 'satisfecho', 'dorado']
  },
  {
    id: 'formal-stamp-confidential',
    name: 'Sello Confidencial Rojo',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <g transform="rotate(-15 60 60)">
        <rect x="6" y="40" width="108" height="40" rx="4" fill="#FEF2F2" stroke="#DC2626" stroke-width="3" />
        <rect x="10" y="44" width="100" height="32" rx="2" fill="none" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="2 2" />
        <text x="60" y="65" fill="#DC2626" font-size="11.5" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="2.5">CONFIDENCIAL</text>
      </g>
    `),
    defaultFill: '#DC2626',
    tags: ['confidencial', 'privado', 'secreto', 'sello', 'rojo', 'restringido', 'legal']
  },
  {
    id: 'formal-seal-premium-quality',
    name: 'Sello Premium Quality',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#0B132B" stroke="#C0C0C0" stroke-width="2" />
      <circle cx="60" cy="60" r="42" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="4 2" />
      <polygon points="60,26 63,33 70,33 65,37 67,44 60,40 53,44 55,37 50,33 57,33" fill="#E2E8F0" />
      <text x="60" y="58" fill="#FFFFFF" font-size="9" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="1">PREMIUM</text>
      <text x="60" y="72" fill="#94A3B8" font-size="7" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="1.5">QUALITY</text>
      <path d="M40 82 H80" stroke="#C0C0C0" stroke-width="1" />
      <text x="60" y="91" fill="#E2E8F0" font-size="5.5" font-family="sans-serif" text-anchor="middle">VERIFIED</text>
    `),
    defaultFill: '#0B132B',
    tags: ['premium', 'calidad', 'plata', 'verificado', 'elegante', 'alta gama']
  },
  {
    id: 'formal-seal-verified-shield',
    name: 'Escudo de Verificación',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <path d="M60 14 Q90 18 95 44 C95 78 60 106 60 106 C60 106 25 78 25 44 Q30 18 60 14 Z" fill="#0284C7" stroke="#BAE6FD" stroke-width="3" />
      <path d="M60 22 Q84 25 87 46 C87 72 60 96 60 96 C60 96 33 72 33 46 Q36 25 60 22 Z" fill="#0369A1" />
      <path d="M46 56 L55 65 L76 44" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    `),
    defaultFill: '#0284C7',
    tags: ['escudo', 'verificado', 'seguridad', 'protegido', 'autenticado', 'azul']
  },
  {
    id: 'formal-seal-notary',
    name: 'Sello Notarial Auténtico',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <circle cx="60" cy="52" r="42" fill="#881337" stroke="#FDA4AF" stroke-width="2" />
      <circle cx="60" cy="52" r="36" stroke="#FECDD3" stroke-width="1" stroke-dasharray="3 2" />
      <path d="M50 86 L44 116 L60 106 L76 116 L70 86 Z" fill="#9F1239" />
      <text x="60" y="44" fill="#FFE4E6" font-size="7.5" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="1">FE PÚBLICA</text>
      <text x="60" y="58" fill="#FFFFFF" font-size="11" font-family="sans-serif" font-weight="900" text-anchor="middle">NOTARIAL</text>
      <text x="60" y="70" fill="#FDA4AF" font-size="6" font-family="sans-serif" text-anchor="middle">REGISTRO OFICIAL</text>
    `),
    defaultFill: '#881337',
    tags: ['notaria', 'notarial', 'fe publica', 'legal', 'autentico', 'sello cera', 'cinta']
  },
  {
    id: 'formal-seal-tested',
    name: 'Sello Testeado y Probado',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#047857" stroke="#A7F3D0" stroke-width="3" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="5 3" />
      <text x="60" y="48" fill="#A7F3D0" font-size="8" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="1">100% PROBADO</text>
      <text x="60" y="65" fill="#FFFFFF" font-size="12" font-family="sans-serif" font-weight="900" text-anchor="middle">TESTED</text>
      <text x="60" y="80" fill="#D1FAE5" font-size="6.5" font-family="sans-serif" font-weight="600" text-anchor="middle">AUDITORÍA EXITOSA</text>
    `),
    defaultFill: '#047857',
    tags: ['probado', 'auditado', 'testeado', 'calidad', 'verde', 'exito']
  },
  {
    id: 'formal-seal-original',
    name: 'Sello Producto Original',
    category: 'Stickers Formales',
    subCategory: 'Sellos & Certificaciones',
    ...createFormalSvg(`
      <polygon points="60,6 74,18 92,12 98,30 114,36 110,54 120,68 108,80 110,98 92,100 84,116 68,110 54,120 44,108 26,110 24,92 8,86 14,70 4,54 16,42 12,24 28,20 36,6 52,12" fill="#4338CA" />
      <circle cx="62" cy="62" r="36" fill="#1E1B4B" stroke="#A5B4FC" stroke-width="2" />
      <text x="62" y="55" fill="#C7D2FE" font-size="8" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="1.5">GENUINO</text>
      <text x="62" y="70" fill="#FFFFFF" font-size="11" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="1">ORIGINAL</text>
      <text x="62" y="83" fill="#818CF8" font-size="6" font-family="sans-serif" text-anchor="middle">AUTENTICIDAD</text>
    `),
    defaultFill: '#4338CA',
    tags: ['original', 'genuino', 'autentico', 'marca', 'oficial', 'azul']
  },

  // ==========================================
  // 2. FINANZAS & NEGOCIOS (10 stickers)
  // ==========================================
  {
    id: 'formal-biz-growth-chart',
    name: 'Gráfico Crecimiento Empresarial',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <rect x="10" y="10" width="100" height="100" rx="16" fill="#0F172A" stroke="#334155" stroke-width="2" />
      <line x1="22" y1="92" x2="98" y2="92" stroke="#475569" stroke-width="2" />
      <line x1="22" y1="24" x2="22" y2="92" stroke="#475569" stroke-width="2" />
      <rect x="30" y="65" width="12" height="27" rx="3" fill="#38BDF8" opacity="0.7" />
      <rect x="48" y="50" width="12" height="42" rx="3" fill="#38BDF8" opacity="0.85" />
      <rect x="66" y="36" width="12" height="56" rx="3" fill="#38BDF8" />
      <rect x="84" y="24" width="12" height="68" rx="3" fill="#10B981" />
      <path d="M26 80 Q 50 60 70 42 T 96 20" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round" />
      <polygon points="98,14 98,25 87,20" fill="#F59E0B" />
    `),
    defaultFill: '#0F172A',
    tags: ['crecimiento', 'grafico', 'finanzas', 'metricas', 'barras', 'inversion', 'rendimiento']
  },
  {
    id: 'formal-biz-balance-scale',
    name: 'Balanza de Finanzas & Legal',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="52" fill="#1E293B" stroke="#D4AF37" stroke-width="2" />
      <line x1="60" y1="26" x2="60" y2="90" stroke="#D4AF37" stroke-width="4" stroke-linecap="round" />
      <line x1="38" y1="90" x2="82" y2="90" stroke="#D4AF37" stroke-width="4" stroke-linecap="round" />
      <circle cx="60" cy="24" r="5" fill="#D4AF37" />
      <line x1="26" y1="38" x2="94" y2="38" stroke="#D4AF37" stroke-width="3" stroke-linecap="round" />
      <path d="M26 38 L16 66 H44 Z" fill="#D4AF37" opacity="0.8" />
      <path d="M94 38 L84 66 H112 Z" fill="#D4AF37" opacity="0.8" />
      <line x1="26" y1="38" x2="16" y2="66" stroke="#94A3B8" stroke-width="1.5" />
      <line x1="26" y1="38" x2="44" y2="66" stroke="#94A3B8" stroke-width="1.5" />
      <line x1="94" y1="38" x2="84" y2="66" stroke="#94A3B8" stroke-width="1.5" />
      <line x1="94" y1="38" x2="112" y2="66" stroke="#94A3B8" stroke-width="1.5" />
    `),
    defaultFill: '#1E293B',
    tags: ['balanza', 'justicia', 'equilibrio', 'legal', 'derecho', 'finanzas', 'dorado']
  },
  {
    id: 'formal-biz-bank-building',
    name: 'Entidad Bancaria Corporativa',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#0C4A6E" stroke="#7DD3FC" stroke-width="2" />
      <polygon points="60,22 22,40 98,40" fill="#BAE6FD" />
      <rect x="26" y="40" width="68" height="6" fill="#38BDF8" />
      <rect x="29" y="46" width="8" height="34" rx="1.5" fill="#FFFFFF" />
      <rect x="44" y="46" width="8" height="34" rx="1.5" fill="#FFFFFF" />
      <rect x="68" y="46" width="8" height="34" rx="1.5" fill="#FFFFFF" />
      <rect x="83" y="46" width="8" height="34" rx="1.5" fill="#FFFFFF" />
      <rect x="22" y="80" width="76" height="6" fill="#38BDF8" />
      <rect x="18" y="86" width="84" height="6" fill="#BAE6FD" />
      <circle cx="60" cy="32" r="3.5" fill="#0C4A6E" />
    `),
    defaultFill: '#0C4A6E',
    tags: ['banco', 'institucion', 'credito', 'corporacion', 'edificio', 'financiero']
  },
  {
    id: 'formal-biz-briefcase',
    name: 'Maletín Ejecutivo Cuero',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <rect x="16" y="38" width="88" height="62" rx="10" fill="#78350F" stroke="#D97706" stroke-width="3" />
      <path d="M42 38 V26 C42 21, 48 18, 60 18 C72 18, 78 21, 78 26 V38" fill="none" stroke="#D97706" stroke-width="5" stroke-linecap="round" />
      <line x1="16" y1="58" x2="104" y2="58" stroke="#451A03" stroke-width="3" />
      <rect x="52" y="52" width="16" height="14" rx="2" fill="#F59E0B" stroke="#78350F" stroke-width="1.5" />
      <circle cx="60" cy="59" r="2.5" fill="#451A03" />
      <line x1="32" y1="38" x2="32" y2="100" stroke="#92400E" stroke-width="2" />
      <line x1="88" y1="38" x2="88" y2="100" stroke="#92400E" stroke-width="2" />
    `),
    defaultFill: '#78350F',
    tags: ['maletin', 'ejecutivo', 'negocios', 'abogado', 'portafolio', 'profesional']
  },
  {
    id: 'formal-biz-handshake',
    name: 'Pacto & Acuerdo Comercial',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#064E3B" stroke="#34D399" stroke-width="2.5" />
      <path d="M24 48 L42 66 L52 56 L34 38 Z" fill="#A7F3D0" />
      <path d="M96 48 L78 66 L68 56 L86 38 Z" fill="#A7F3D0" />
      <path d="M42 66 L56 80 L76 60 L62 46 Z" fill="#FFFFFF" />
      <path d="M50 74 L60 84 L72 72 L62 62 Z" fill="#D1FAE5" />
      <circle cx="60" cy="30" r="6" fill="#F59E0B" />
      <path d="M57 20 L63 20" stroke="#F59E0B" stroke-width="2" />
    `),
    defaultFill: '#064E3B',
    tags: ['apreton', 'acuerdo', 'alianza', 'contrato', 'socios', 'negocio', 'pacto']
  },
  {
    id: 'formal-biz-safe-vault',
    name: 'Caja Fuerte Acorazada',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <rect x="18" y="18" width="84" height="84" rx="14" fill="#334155" stroke="#94A3B8" stroke-width="3" />
      <rect x="26" y="26" width="68" height="68" rx="8" fill="#1E293B" />
      <circle cx="60" cy="60" r="22" fill="#475569" stroke="#E2E8F0" stroke-width="3" />
      <circle cx="60" cy="60" r="8" fill="#F8FAFC" />
      <line x1="60" y1="38" x2="60" y2="44" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" />
      <line x1="60" y1="76" x2="60" y2="82" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" />
      <line x1="38" y1="60" x2="44" y2="60" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" />
      <line x1="76" y1="60" x2="82" y2="60" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" />
      <circle cx="82" cy="40" r="3" fill="#10B981" />
    `),
    defaultFill: '#334155',
    tags: ['caja fuerte', 'boveda', 'custodia', 'seguridad', 'ahorros', 'deposito']
  },
  {
    id: 'formal-biz-coin-stack',
    name: 'Pila de Monedas de Inversión',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <ellipse cx="60" cy="90" rx="36" ry="12" fill="#B45309" />
      <ellipse cx="60" cy="85" rx="36" ry="12" fill="#D97706" />
      <ellipse cx="60" cy="80" rx="36" ry="12" fill="#F59E0B" />
      
      <ellipse cx="60" cy="65" rx="36" ry="12" fill="#B45309" />
      <ellipse cx="60" cy="60" rx="36" ry="12" fill="#D97706" />
      <ellipse cx="60" cy="55" rx="36" ry="12" fill="#F59E0B" />
      
      <ellipse cx="60" cy="40" rx="36" ry="12" fill="#B45309" />
      <ellipse cx="60" cy="35" rx="36" ry="12" fill="#D97706" />
      <ellipse cx="60" cy="30" rx="36" ry="12" fill="#FDE68A" />
      <text x="60" y="35" fill="#78350F" font-size="16" font-family="sans-serif" font-weight="900" text-anchor="middle">$</text>
    `),
    defaultFill: '#F59E0B',
    tags: ['monedas', 'dinero', 'inversion', 'capital', 'ganancias', 'oro', 'dolar']
  },
  {
    id: 'formal-biz-contract-pen',
    name: 'Contrato y Pluma Estilográfica',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <rect x="20" y="16" width="60" height="88" rx="6" fill="#F8FAFC" stroke="#64748B" stroke-width="2" />
      <line x1="30" y1="30" x2="68" y2="30" stroke="#0F172A" stroke-width="3" />
      <line x1="30" y1="42" x2="68" y2="42" stroke="#94A3B8" stroke-width="2" />
      <line x1="30" y1="52" x2="68" y2="52" stroke="#94A3B8" stroke-width="2" />
      <line x1="30" y1="62" x2="55" y2="62" stroke="#94A3B8" stroke-width="2" />
      <path d="M30 80 Q 42 75 48 82 T 62 78" fill="none" stroke="#2563EB" stroke-width="2" />
      <!-- Fountain pen -->
      <g transform="rotate(35 85 60)">
        <polygon points="85,30 92,30 90,75 85,90 80,75 78,30" fill="#1E293B" />
        <polygon points="85,90 81,78 89,78" fill="#F59E0B" />
        <rect x="78" y="25" width="14" height="8" rx="2" fill="#F59E0B" />
      </g>
    `),
    defaultFill: '#F8FAFC',
    tags: ['contrato', 'firma', 'pluma', 'documento', 'acuerdo', 'legal', 'negocio']
  },
  {
    id: 'formal-biz-roi-arrow',
    name: 'Retorno de Inversión ROI',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#042F2E" stroke="#14B8A6" stroke-width="3" />
      <path d="M30 75 Q 45 40 85 32" fill="none" stroke="#2DD4BF" stroke-width="6" stroke-linecap="round" />
      <polygon points="94,32 78,22 84,40" fill="#2DD4BF" />
      <text x="60" y="85" fill="#FFFFFF" font-size="13" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="1">R.O.I.</text>
      <text x="60" y="96" fill="#5EEAD4" font-size="6.5" font-family="sans-serif" text-anchor="middle">ALTO RENDIMIENTO</text>
    `),
    defaultFill: '#042F2E',
    tags: ['roi', 'retorno', 'rendimiento', 'beneficio', 'crecimiento', 'verde']
  },
  {
    id: 'formal-biz-pie-analytics',
    name: 'Diagrama de Pastel Ejecutivo',
    category: 'Stickers Formales',
    subCategory: 'Finanzas & Negocios',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#18181B" stroke="#3F3F46" stroke-width="2" />
      <!-- Pie slice 1: 50% -->
      <path d="M60 60 L60 20 A 40 40 0 0 1 100 60 Z" fill="#6366F1" />
      <!-- Pie slice 2: 25% -->
      <path d="M60 60 L100 60 A 40 40 0 0 1 60 100 Z" fill="#10B981" />
      <!-- Pie slice 3: 25% -->
      <path d="M60 60 L60 100 A 40 40 0 0 1 20 60 L60 60 Z" fill="#F59E0B" />
      <path d="M60 60 L20 60 A 40 40 0 0 1 60 20 Z" fill="#38BDF8" />
      <circle cx="60" cy="60" r="18" fill="#18181B" />
      <text x="60" y="64" fill="#FFFFFF" font-size="8" font-family="sans-serif" font-weight="bold" text-anchor="middle">KPI</text>
    `),
    defaultFill: '#18181B',
    tags: ['pastel', 'grafico', 'kpi', 'metricas', 'analisis', 'reporte', 'estadistica']
  },

  // ==========================================
  // 3. PREMIOS & RECONOCIMIENTOS (10 stickers)
  // ==========================================
  {
    id: 'formal-award-medal-gold',
    name: 'Medalla de Honor Dorada',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <path d="M42 16 L28 62 L46 62 L60 38 Z" fill="#1E40AF" />
      <path d="M78 16 L92 62 L74 62 L60 38 Z" fill="#B91C1C" />
      <circle cx="60" cy="74" r="34" fill="#D97706" />
      <circle cx="60" cy="74" r="30" fill="#F59E0B" stroke="#FEF3C7" stroke-width="2" />
      <polygon points="60,54 64,66 76,66 66,74 70,86 60,78 50,86 54,74 44,66 56,66" fill="#FEF3C7" />
      <text x="60" y="98" fill="#78350F" font-size="6" font-family="sans-serif" font-weight="900" text-anchor="middle">1er LUGAR</text>
    `),
    defaultFill: '#F59E0B',
    tags: ['medalla', 'honor', 'premio', 'primer lugar', 'oro', 'reconocimiento', 'campeon']
  },
  {
    id: 'formal-award-golden-cup',
    name: 'Copa Excelencia Empresarial',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <path d="M36 20 H84 V56 C84 70, 72 80, 60 80 C48 80, 36 70, 36 56 Z" fill="#F59E0B" stroke="#D97706" stroke-width="2" />
      <path d="M36 28 H18 C18 48, 30 56, 36 56 Z" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" />
      <path d="M84 28 H102 C102 48, 90 56, 84 56 Z" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" />
      <rect x="54" y="80" width="12" height="18" fill="#D97706" />
      <rect x="38" y="98" width="44" height="12" rx="3" fill="#1E293B" stroke="#94A3B8" stroke-width="1.5" />
      <polygon points="60,32 63,40 71,40 65,46 67,54 60,49 53,54 55,46 49,40 57,40" fill="#FEF3C7" />
    `),
    defaultFill: '#F59E0B',
    tags: ['copa', 'trofeo', 'excelencia', 'campeon', 'empresa', 'triunfo']
  },
  {
    id: 'formal-award-laurel-wreath',
    name: 'Corona de Laureles de Triunfo',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <g stroke="#D4AF37" stroke-width="2" fill="#F59E0B">
        <!-- Left branch -->
        <path d="M60 102 C30 96 16 70 20 40 C22 28 30 18 36 12" fill="none" stroke-width="3" />
        <ellipse cx="28" cy="24" rx="8" ry="4" transform="rotate(-30 28 24)" />
        <ellipse cx="20" cy="40" rx="8" ry="4" transform="rotate(-15 20 40)" />
        <ellipse cx="18" cy="58" rx="8" ry="4" transform="rotate(5 18 58)" />
        <ellipse cx="24" cy="76" rx="8" ry="4" transform="rotate(30 24 76)" />
        <ellipse cx="38" cy="90" rx="8" ry="4" transform="rotate(50 38 90)" />

        <!-- Right branch -->
        <path d="M60 102 C90 96 104 70 100 40 C98 28 90 18 84 12" fill="none" stroke-width="3" />
        <ellipse cx="92" cy="24" rx="8" ry="4" transform="rotate(30 92 24)" />
        <ellipse cx="100" cy="40" rx="8" ry="4" transform="rotate(15 100 40)" />
        <ellipse cx="102" cy="58" rx="8" ry="4" transform="rotate(-5 102 58)" />
        <ellipse cx="96" cy="76" rx="8" ry="4" transform="rotate(-30 96 76)" />
        <ellipse cx="82" cy="90" rx="8" ry="4" transform="rotate(-50 82 90)" />
      </g>
      <circle cx="60" cy="58" r="6" fill="#D4AF37" />
      <polygon points="60,42 62,48 68,48 63,52 65,58 60,54 55,58 57,52 52,48 58,48" fill="#D4AF37" />
    `),
    defaultFill: '#D4AF37',
    tags: ['laureles', 'victoria', 'honor', 'premio', 'triunfo', 'merito', 'dorado']
  },
  {
    id: 'formal-award-diploma-ribbon',
    name: 'Diploma con Cinta de Honor',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <path d="M22 24 H98 V86 H22 Z" fill="#FFFBEB" stroke="#D97706" stroke-width="2" />
      <line x1="30" y1="36" x2="90" y2="36" stroke="#92400E" stroke-width="2.5" />
      <line x1="30" y1="46" x2="80" y2="46" stroke="#D97706" stroke-width="1.5" />
      <line x1="30" y1="56" x2="85" y2="56" stroke="#D97706" stroke-width="1.5" />
      <line x1="30" y1="66" x2="60" y2="66" stroke="#D97706" stroke-width="1.5" />
      
      <!-- Seal on diploma -->
      <circle cx="82" cy="74" r="14" fill="#DC2626" />
      <circle cx="82" cy="74" r="11" stroke="#FEF2F2" stroke-width="1" stroke-dasharray="2 2" />
      <path d="M78 86 L74 106 L82 100 L90 106 L86 86 Z" fill="#B91C1C" />
    `),
    defaultFill: '#FFFBEB',
    tags: ['diploma', 'grado', 'titulo', 'certificado', 'graduacion', 'merito']
  },
  {
    id: 'formal-award-ribbon-badge',
    name: 'Roseta de Reconocimiento',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <!-- Ribbons tails -->
      <polygon points="46,70 34,116 52,106 60,116 56,70" fill="#1E3A8A" />
      <polygon points="74,70 86,116 68,106 60,116 64,70" fill="#1D4ED8" />
      
      <!-- Rosette pleated circle -->
      <circle cx="60" cy="50" r="42" fill="#2563EB" stroke="#60A5FA" stroke-width="2" />
      <circle cx="60" cy="50" r="34" fill="#1E40AF" />
      <circle cx="60" cy="50" r="28" fill="#F59E0B" stroke="#FEF3C7" stroke-width="2" />
      <polygon points="60,34 63,44 73,44 65,50 68,60 60,54 52,60 55,50 47,44 57,44" fill="#FEF3C7" />
    `),
    defaultFill: '#2563EB',
    tags: ['roseta', 'cinta', 'insignia', 'honor', 'primer puesto', 'azul']
  },
  {
    id: 'formal-award-five-stars',
    name: '5 Estrellas de Excelencia',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <rect x="6" y="36" width="108" height="48" rx="24" fill="#0F172A" stroke="#F59E0B" stroke-width="2" />
      <!-- Star 1 -->
      <polygon points="24,52 26,58 32,58 27,62 29,68 24,64 19,68 21,62 16,58 22,58" fill="#F59E0B" />
      <!-- Star 2 -->
      <polygon points="42,50 44,56 50,56 45,60 47,66 42,62 37,66 39,60 34,56 40,56" fill="#F59E0B" />
      <!-- Star 3 (center - larger) -->
      <polygon points="60,46 63,54 71,54 65,59 67,67 60,62 53,67 55,59 49,54 57,54" fill="#FDE68A" />
      <!-- Star 4 -->
      <polygon points="78,50 80,56 86,56 81,60 83,66 78,62 73,66 75,60 70,56 76,56" fill="#F59E0B" />
      <!-- Star 5 -->
      <polygon points="96,52 98,58 104,58 99,62 101,68 96,64 91,68 93,62 88,58 94,58" fill="#F59E0B" />
    `),
    defaultFill: '#0F172A',
    tags: ['estrellas', '5 estrellas', 'calificacion', 'excelente', 'review', 'reputacion']
  },
  {
    id: 'formal-award-top-performer',
    name: 'Insignia Líder Destacado',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#4C1D95" stroke="#C4B5FD" stroke-width="2.5" />
      <polygon points="60,18 73,34 94,36 80,52 82,74 60,65 38,74 40,52 26,36 47,34" fill="#F59E0B" />
      <circle cx="60" cy="60" r="24" fill="#1E1B4B" stroke="#FDE68A" stroke-width="1.5" />
      <text x="60" y="58" fill="#FDE68A" font-size="8" font-family="sans-serif" font-weight="bold" text-anchor="middle">TOP</text>
      <text x="60" y="70" fill="#FFFFFF" font-size="8.5" font-family="sans-serif" font-weight="900" text-anchor="middle">LEADER</text>
    `),
    defaultFill: '#4C1D95',
    tags: ['lider', 'top', 'desempeño', 'talento', 'empleado del mes', 'estrella']
  },
  {
    id: 'formal-award-diamond-tier',
    name: 'Nivel Diamante Black',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <rect x="12" y="12" width="96" height="96" rx="20" fill="#09090B" stroke="#38BDF8" stroke-width="2.5" />
      <polygon points="60,26 88,46 60,94 32,46" fill="#0284C7" stroke="#BAE6FD" stroke-width="1.5" />
      <polygon points="60,26 74,46 60,94 46,46" fill="#38BDF8" />
      <polygon points="60,26 88,46 74,46" fill="#E0F2FE" />
      <polygon points="60,26 32,46 46,46" fill="#BAE6FD" />
      <text x="60" y="102" fill="#38BDF8" font-size="7" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="2">DIAMOND</text>
    `),
    defaultFill: '#09090B',
    tags: ['diamante', 'nivel', 'black', 'exclusivo', 'lujo', 'vip', 'categoria']
  },
  {
    id: 'formal-award-hall-of-fame',
    name: 'Cuadro de Honor & Distinción',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <rect x="16" y="20" width="88" height="80" rx="8" fill="#1C1917" stroke="#D4AF37" stroke-width="3" />
      <rect x="22" y="26" width="76" height="68" rx="4" fill="none" stroke="#D4AF37" stroke-width="1" stroke-dasharray="3 3" />
      <polygon points="60,34 63,42 71,42 65,47 67,55 60,50 53,55 55,47 49,42 57,42" fill="#D4AF37" />
      <text x="60" y="68" fill="#FFFFFF" font-size="9" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="1">CUADRO DE</text>
      <text x="60" y="80" fill="#D4AF37" font-size="9" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="1">HONOR</text>
    `),
    defaultFill: '#1C1917',
    tags: ['honor', 'distincion', 'salon de la fama', 'dorado', 'cuadro', 'merito']
  },
  {
    id: 'formal-award-verified-gold-badge',
    name: 'Check Oficial Dorada',
    category: 'Stickers Formales',
    subCategory: 'Premios & Reconocimientos',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="48" fill="#B45309" />
      <circle cx="60" cy="60" r="44" fill="#F59E0B" stroke="#FEF3C7" stroke-width="2" />
      <circle cx="60" cy="60" r="36" fill="#1E293B" />
      <path d="M44 60 L55 71 L76 50" stroke="#F59E0B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    `),
    defaultFill: '#F59E0B',
    tags: ['verificado', 'check', 'aprobado', 'oficial', 'dorado', 'distincion']
  },

  // ==========================================
  // 4. GESTIÓN & ESTRATEGIA (10 stickers)
  // ==========================================
  {
    id: 'formal-mgmt-target-bullseye',
    name: 'Diana de Objetivos y Metas',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#0F172A" stroke="#EF4444" stroke-width="2" />
      <circle cx="60" cy="60" r="42" fill="#EF4444" />
      <circle cx="60" cy="60" r="32" fill="#FFFFFF" />
      <circle cx="60" cy="60" r="22" fill="#EF4444" />
      <circle cx="60" cy="60" r="10" fill="#FFFFFF" />
      <circle cx="60" cy="60" r="4" fill="#EF4444" />
      
      <!-- Target Arrow -->
      <line x1="88" y1="32" x2="63" y2="57" stroke="#1E293B" stroke-width="4" stroke-linecap="round" />
      <polygon points="96,24 82,28 92,38" fill="#F59E0B" />
    `),
    defaultFill: '#EF4444',
    tags: ['diana', 'objetivo', 'meta', 'kpi', 'enfoque', 'estrategia', 'precision']
  },
  {
    id: 'formal-mgmt-gears-process',
    name: 'Engranajes de Optimización',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#1E293B" stroke="#475569" stroke-width="2" />
      <!-- Gear 1 (large) -->
      <g fill="#38BDF8">
        <circle cx="50" cy="50" r="24" />
        <rect x="46" y="22" width="8" height="56" rx="2" />
        <rect x="46" y="22" width="8" height="56" rx="2" transform="rotate(45 50 50)" />
        <rect x="46" y="22" width="8" height="56" rx="2" transform="rotate(90 50 50)" />
        <rect x="46" y="22" width="8" height="56" rx="2" transform="rotate(135 50 50)" />
        <circle cx="50" cy="50" r="12" fill="#1E293B" />
      </g>
      <!-- Gear 2 (small) -->
      <g fill="#94A3B8">
        <circle cx="76" cy="74" r="16" />
        <rect x="73" y="54" width="6" height="40" rx="1.5" />
        <rect x="73" y="54" width="6" height="40" rx="1.5" transform="rotate(45 76 74)" />
        <rect x="73" y="54" width="6" height="40" rx="1.5" transform="rotate(90 76 74)" />
        <circle cx="76" cy="74" r="7" fill="#1E293B" />
      </g>
    `),
    defaultFill: '#1E293B',
    tags: ['engranajes', 'procesos', 'operaciones', 'ingenieria', 'optimizacion', 'mecanismo']
  },
  {
    id: 'formal-mgmt-kanban-board',
    name: 'Tablero Kanban & Scrum',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <rect x="14" y="16" width="92" height="88" rx="10" fill="#0F172A" stroke="#334155" stroke-width="2.5" />
      <line x1="14" y1="36" x2="106" y2="36" stroke="#334155" stroke-width="2" />
      
      <!-- Col 1 -->
      <rect x="22" y="44" width="22" height="18" rx="4" fill="#3B82F6" />
      <rect x="22" y="68" width="22" height="24" rx="4" fill="#64748B" />
      
      <!-- Col 2 -->
      <rect x="49" y="44" width="22" height="30" rx="4" fill="#F59E0B" />
      
      <!-- Col 3 -->
      <rect x="76" y="44" width="22" height="20" rx="4" fill="#10B981" />
      <rect x="76" y="70" width="22" height="18" rx="4" fill="#10B981" opacity="0.8" />
      
      <circle cx="33" cy="26" r="3" fill="#94A3B8" />
      <circle cx="60" cy="26" r="3" fill="#94A3B8" />
      <circle cx="87" cy="26" r="3" fill="#94A3B8" />
    `),
    defaultFill: '#0F172A',
    tags: ['kanban', 'scrum', 'agil', 'tareas', 'gestion', 'proyecto', 'tablero']
  },
  {
    id: 'formal-mgmt-gantt-timeline',
    name: 'Cronograma & Línea de Tiempo',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <rect x="12" y="18" width="96" height="84" rx="12" fill="#18181B" stroke="#27272A" stroke-width="2" />
      <line x1="30" y1="28" x2="30" y2="92" stroke="#3F3F46" stroke-width="1.5" stroke-dasharray="3 3" />
      <line x1="55" y1="28" x2="55" y2="92" stroke="#3F3F46" stroke-width="1.5" stroke-dasharray="3 3" />
      <line x1="80" y1="28" x2="80" y2="92" stroke="#3F3F46" stroke-width="1.5" stroke-dasharray="3 3" />
      
      <rect x="20" y="34" width="35" height="12" rx="4" fill="#3B82F6" />
      <rect x="45" y="52" width="40" height="12" rx="4" fill="#8B5CF6" />
      <rect x="65" y="70" width="35" height="12" rx="4" fill="#10B981" />
    `),
    defaultFill: '#18181B',
    tags: ['cronograma', 'gantt', 'plazos', 'fechas', 'planificacion', 'roadmap']
  },
  {
    id: 'formal-mgmt-puzzle-strategy',
    name: 'Piezas de Rompecabezas Sinergia',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#0C4A6E" stroke="#38BDF8" stroke-width="2" />
      <path d="M32 32 H50 C50 36, 56 38, 56 32 H74 V50 C70 50, 68 56, 74 56 V74 H56 C56 70, 50 68, 50 74 H32 V56 C36 56, 38 50, 32 50 Z" fill="#0284C7" stroke="#E0F2FE" stroke-width="2" />
      <path d="M56 32 H74 V50 C70 50, 68 56, 74 56 V74 H56" fill="#38BDF8" />
      <circle cx="60" cy="60" r="4" fill="#FFFFFF" />
    `),
    defaultFill: '#0C4A6E',
    tags: ['rompecabezas', 'sinergia', 'encaje', 'estrategia', 'equipo', 'solucion']
  },
  {
    id: 'formal-mgmt-compass-direction',
    name: 'Brújula de Dirección Estratégica',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#1E293B" stroke="#D4AF37" stroke-width="3" />
      <circle cx="60" cy="60" r="42" stroke="#64748B" stroke-width="1" stroke-dasharray="2 4" />
      <text x="60" y="28" fill="#F59E0B" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">N</text>
      <text x="60" y="100" fill="#94A3B8" font-size="8" font-family="sans-serif" text-anchor="middle">S</text>
      <text x="96" y="64" fill="#94A3B8" font-size="8" font-family="sans-serif" text-anchor="middle">E</text>
      <text x="24" y="64" fill="#94A3B8" font-size="8" font-family="sans-serif" text-anchor="middle">O</text>
      
      <!-- Needle -->
      <polygon points="60,28 66,60 60,56 54,60" fill="#EF4444" />
      <polygon points="60,92 66,60 60,64 54,60" fill="#94A3B8" />
      <circle cx="60" cy="60" r="5" fill="#D4AF37" />
    `),
    defaultFill: '#1E293B',
    tags: ['brujula', 'rumbo', 'vision', 'mision', 'estrategia', 'direccion', 'liderazgo']
  },
  {
    id: 'formal-mgmt-org-chart',
    name: 'Organigrama Estructura Corporativa',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <rect x="12" y="14" width="96" height="92" rx="14" fill="#0F172A" stroke="#334155" stroke-width="2" />
      <!-- Top node (CEO) -->
      <rect x="46" y="24" width="28" height="16" rx="4" fill="#6366F1" stroke="#A5B4FC" stroke-width="1.5" />
      <line x1="60" y1="40" x2="60" y2="52" stroke="#94A3B8" stroke-width="2" />
      <line x1="30" y1="52" x2="90" y2="52" stroke="#94A3B8" stroke-width="2" />
      
      <!-- Sub branch lines -->
      <line x1="30" y1="52" x2="30" y2="62" stroke="#94A3B8" stroke-width="2" />
      <line x1="60" y1="52" x2="60" y2="62" stroke="#94A3B8" stroke-width="2" />
      <line x1="90" y1="52" x2="90" y2="62" stroke="#94A3B8" stroke-width="2" />
      
      <!-- Bottom nodes -->
      <rect x="18" y="62" width="24" height="16" rx="4" fill="#3B82F6" />
      <rect x="48" y="62" width="24" height="16" rx="4" fill="#3B82F6" />
      <rect x="78" y="62" width="24" height="16" rx="4" fill="#3B82F6" />
    `),
    defaultFill: '#0F172A',
    tags: ['organigrama', 'jerarquia', 'ceo', 'cargos', 'departamentos', 'estructura']
  },
  {
    id: 'formal-mgmt-lightbulb-innovation',
    name: 'Bombilla de Innovación & I+D',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#1C1917" stroke="#F59E0B" stroke-width="2" />
      <path d="M42 46 C42 34 50 26 60 26 C70 26 78 34 78 46 C78 54 72 60 70 66 H50 C48 60 42 54 42 46 Z" fill="#F59E0B" opacity="0.9" />
      <rect x="52" y="68" width="16" height="4" rx="1" fill="#D97706" />
      <rect x="54" y="74" width="12" height="4" rx="1" fill="#D97706" />
      <path d="M56 80 Q 60 84 64 80" stroke="#D97706" stroke-width="2" fill="none" />
      
      <!-- Filament glow rays -->
      <line x1="60" y1="14" x2="60" y2="20" stroke="#FDE68A" stroke-width="2.5" stroke-linecap="round" />
      <line x1="30" y1="24" x2="35" y2="29" stroke="#FDE68A" stroke-width="2.5" stroke-linecap="round" />
      <line x1="90" y1="24" x2="85" y2="29" stroke="#FDE68A" stroke-width="2.5" stroke-linecap="round" />
    `),
    defaultFill: '#1C1917',
    tags: ['bombilla', 'idea', 'innovacion', 'estrategia', 'creatividad', 'solucion']
  },
  {
    id: 'formal-mgmt-chess-king',
    name: 'Rey de Ajedrez Táctico',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#0A0A0A" stroke="#E4E4E7" stroke-width="2" />
      <!-- Cross top -->
      <line x1="60" y1="20" x2="60" y2="30" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
      <line x1="55" y1="24" x2="65" y2="24" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
      
      <!-- Crown top -->
      <path d="M48 34 Q 60 38 72 34 L76 44 H44 Z" fill="#F4F4F5" />
      <!-- Head -->
      <path d="M46 44 Q 60 52 74 44 L70 66 H50 Z" fill="#E4E4E7" />
      <!-- Body & base -->
      <path d="M50 66 L44 86 H76 L70 66 Z" fill="#D4D4D8" />
      <rect x="36" y="86" width="48" height="10" rx="3" fill="#FAFAFA" />
    `),
    defaultFill: '#0A0A0A',
    tags: ['ajedrez', 'rey', 'tactica', 'estrategia', 'jaque mate', 'liderazgo']
  },
  {
    id: 'formal-mgmt-presentation-screen',
    name: 'Pantalla Keynote Ejecutiva',
    category: 'Stickers Formales',
    subCategory: 'Gestión & Estrategia',
    ...createFormalSvg(`
      <rect x="16" y="20" width="88" height="60" rx="6" fill="#0284C7" stroke="#BAE6FD" stroke-width="2" />
      <path d="M26 64 L42 46 L58 56 L84 32" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
      <circle cx="84" cy="32" r="4" fill="#F59E0B" />
      
      <!-- Tripod stand -->
      <line x1="60" y1="80" x2="60" y2="98" stroke="#64748B" stroke-width="4" stroke-linecap="round" />
      <line x1="60" y1="98" x2="42" y2="112" stroke="#64748B" stroke-width="3" stroke-linecap="round" />
      <line x1="60" y1="98" x2="78" y2="112" stroke="#64748B" stroke-width="3" stroke-linecap="round" />
    `),
    defaultFill: '#0284C7',
    tags: ['presentacion', 'diapositiva', 'keynote', 'proyeccion', 'conferencia', 'reunion']
  },

  // ==========================================
  // 5. SEGURIDAD & LEGAL (10 stickers)
  // ==========================================
  {
    id: 'formal-legal-gavel',
    name: 'Mazo de Juez & Magistrado',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#1C1917" stroke="#78350F" stroke-width="2.5" />
      <!-- Sound block -->
      <ellipse cx="76" cy="88" rx="26" ry="10" fill="#451A03" stroke="#B45309" stroke-width="2" />
      
      <!-- Gavel hammer head -->
      <g transform="rotate(-30 50 45)">
        <rect x="36" y="26" width="34" height="24" rx="4" fill="#78350F" stroke="#F59E0B" stroke-width="2" />
        <line x1="42" y1="26" x2="42" y2="50" stroke="#F59E0B" stroke-width="2" />
        <line x1="64" y1="26" x2="64" y2="50" stroke="#F59E0B" stroke-width="2" />
        <!-- Gavel handle -->
        <rect x="50" y="50" width="6" height="42" rx="3" fill="#B45309" />
      </g>
    `),
    defaultFill: '#1C1917',
    tags: ['mazo', 'juez', 'ley', 'justicia', 'tribunal', 'abogado', 'sentencia']
  },
  {
    id: 'formal-legal-padlock-shield',
    name: 'Candado de Ciberseguridad',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#030712" stroke="#10B981" stroke-width="2.5" />
      <!-- Shackle -->
      <path d="M44 54 V40 C44 30, 50 24, 60 24 C70 24, 76 30, 76 40 V54" fill="none" stroke="#E5E7EB" stroke-width="7" stroke-linecap="round" />
      <!-- Padlock body -->
      <rect x="34" y="52" width="52" height="42" rx="8" fill="#10B981" />
      <circle cx="60" cy="70" r="5" fill="#064E3B" />
      <line x1="60" y1="74" x2="60" y2="82" stroke="#064E3B" stroke-width="4" stroke-linecap="round" />
    `),
    defaultFill: '#030712',
    tags: ['candado', 'seguridad', 'cifrado', 'ssl', 'protegido', 'clave', 'privacidad']
  },
  {
    id: 'formal-legal-parchment-scroll',
    name: 'Pergamino de Leyes & Decretos',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <path d="M30 20 H86 C94 20, 94 32, 86 32 H34 C26 32, 26 42, 34 42 H86 V94 C86 102, 78 102, 74 96 H24 C16 96, 16 84, 24 84 H76" fill="#FEF3C7" stroke="#B45309" stroke-width="2" />
      <line x1="38" y1="52" x2="72" y2="52" stroke="#92400E" stroke-width="2" />
      <line x1="38" y1="62" x2="76" y2="62" stroke="#92400E" stroke-width="2" />
      <line x1="38" y1="72" x2="65" y2="72" stroke="#92400E" stroke-width="2" />
      <circle cx="78" cy="86" r="6" fill="#DC2626" />
    `),
    defaultFill: '#FEF3C7',
    tags: ['pergamino', 'ley', 'decreto', 'constitucion', 'documento antiguo', 'estatuto']
  },
  {
    id: 'formal-legal-gdpr-privacy',
    name: 'Cumplimiento RGPD & Privacidad',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#1E1B4B" stroke="#818CF8" stroke-width="2" />
      <!-- Star ring (EU style) -->
      <g fill="#FDE047" transform="scale(0.8) translate(15, 15)">
        <polygon points="60,20 61,23 64,23 62,25 63,28 60,26 57,28 58,25 56,23 59,23" />
        <polygon points="90,40 91,43 94,43 92,45 93,48 90,46 87,48 88,45 86,43 89,43" />
        <polygon points="90,80 91,83 94,83 92,85 93,88 90,86 87,88 88,85 86,83 89,83" />
        <polygon points="60,100 61,103 64,103 62,105 63,108 60,106 57,108 58,105 56,103 59,103" />
        <polygon points="30,80 31,83 34,83 32,85 33,88 30,86 27,88 28,85 26,83 29,83" />
        <polygon points="30,40 31,43 34,43 32,45 33,48 30,46 27,48 28,45 26,43 29,43" />
      </g>
      <text x="60" y="58" fill="#FFFFFF" font-size="11" font-family="sans-serif" font-weight="900" text-anchor="middle">GDPR</text>
      <text x="60" y="72" fill="#A5B4FC" font-size="6.5" font-family="sans-serif" font-weight="bold" text-anchor="middle">COMPLIANT</text>
    `),
    defaultFill: '#1E1B4B',
    tags: ['gdpr', 'rgpd', 'privacidad', 'europa', 'datos', 'legal', 'cumplimiento']
  },
  {
    id: 'formal-legal-nda-agreement',
    name: 'Sello Acuerdo Confidencial NDA',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <polygon points="60,12 104,36 104,84 60,108 16,84 16,36" fill="#18181B" stroke="#E11D48" stroke-width="3" />
      <text x="60" y="54" fill="#E11D48" font-size="14" font-family="sans-serif" font-weight="900" text-anchor="middle" letter-spacing="2">N.D.A.</text>
      <text x="60" y="70" fill="#FFFFFF" font-size="7" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="1">ACUERDO DE</text>
      <text x="60" y="80" fill="#FDA4AF" font-size="6" font-family="sans-serif" text-anchor="middle">NO DIVULGACIÓN</text>
    `),
    defaultFill: '#18181B',
    tags: ['nda', 'confidencialidad', 'acuerdo', 'no divulgacion', 'privado', 'contrato']
  },
  {
    id: 'formal-legal-fingerprint-biometric',
    name: 'Huella Biométrica de Identidad',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#082F49" stroke="#38BDF8" stroke-width="2.5" />
      <g stroke="#38BDF8" stroke-width="3" fill="none" stroke-linecap="round">
        <path d="M60 40 C50 40, 44 48, 44 58 C44 72, 54 80, 60 84" />
        <path d="M60 48 C54 48, 50 52, 50 60 C50 70, 56 76, 60 78" />
        <path d="M60 32 C44 32, 36 44, 36 60 C36 78, 48 88, 60 92" />
        <path d="M66 42 C72 46, 76 54, 76 62 C76 74, 70 80, 64 84" />
        <path d="M72 36 C80 44, 84 54, 84 66 C84 80, 76 88, 68 92" />
      </g>
    `),
    defaultFill: '#082F49',
    tags: ['huella', 'biometria', 'identidad', 'seguridad', 'acceso', 'autenticacion']
  },
  {
    id: 'formal-legal-id-card',
    name: 'Credencial Oficial Ejecutiva',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <rect x="18" y="24" width="84" height="64" rx="8" fill="#F8FAFC" stroke="#475569" stroke-width="2.5" />
      <rect x="26" y="34" width="22" height="26" rx="4" fill="#CBD5E1" />
      <circle cx="37" cy="43" r="5" fill="#64748B" />
      <path d="M29 57 C29 51 33 49 37 49 C41 49 45 51 45 57 Z" fill="#64748B" />
      
      <line x1="56" y1="38" x2="88" y2="38" stroke="#0F172A" stroke-width="3" stroke-linecap="round" />
      <line x1="56" y1="48" x2="84" y2="48" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" />
      <line x1="56" y1="56" x2="76" y2="56" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" />
      
      <!-- Hologram strip -->
      <rect x="18" y="74" width="84" height="6" fill="#38BDF8" opacity="0.8" />
    `),
    defaultFill: '#F8FAFC',
    tags: ['credencial', 'gafete', 'pase', 'identificacion', 'personal', 'acceso']
  },
  {
    id: 'formal-legal-copyright-badge',
    name: 'Insignia Copyright & Derechos',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="48" fill="#18181B" stroke="#D4D4D8" stroke-width="3" />
      <circle cx="60" cy="60" r="34" fill="none" stroke="#FFFFFF" stroke-width="4" />
      <path d="M68 48 C64 44 54 44 50 52 C46 60 46 66 50 72 C54 78 64 78 68 74" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" />
      <text x="60" y="100" fill="#A1A1AA" font-size="6" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="1">DERECHOS RESERVADOS</text>
    `),
    defaultFill: '#18181B',
    tags: ['copyright', 'derechos', 'autor', 'propiedad intelectual', 'legal', 'marca']
  },
  {
    id: 'formal-legal-registered-trademark',
    name: 'Marca Registrada (R)',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="48" fill="#1E3A8A" stroke="#93C5FD" stroke-width="3" />
      <circle cx="60" cy="60" r="34" fill="none" stroke="#FFFFFF" stroke-width="3.5" />
      <path d="M50 72 V48 H62 C68 48 70 52 70 56 C70 60 67 63 62 63 H50 M60 63 L70 72" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
    `),
    defaultFill: '#1E3A8A',
    tags: ['marca registrada', 'patente', 'propiedad', 'comercial', 'legal', 'logo']
  },
  {
    id: 'formal-legal-audit-certified',
    name: 'Sello Auditoría Externa Aprobada',
    category: 'Stickers Formales',
    subCategory: 'Seguridad & Legal',
    ...createFormalSvg(`
      <circle cx="60" cy="60" r="50" fill="#14532D" stroke="#86EFAC" stroke-width="2.5" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#DCFCE7" stroke-width="1.5" stroke-dasharray="3 3" />
      <text x="60" y="44" fill="#BBF7D0" font-size="7.5" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="1">DICTAMEN LIMPIO</text>
      <text x="60" y="60" fill="#FFFFFF" font-size="12" font-family="sans-serif" font-weight="900" text-anchor="middle">AUDITADO</text>
      <text x="60" y="74" fill="#86EFAC" font-size="7" font-family="sans-serif" font-weight="bold" text-anchor="middle">CONFORME 100%</text>
      <path d="M42 84 L54 94 L78 74" stroke="#4ADE80" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
    `),
    defaultFill: '#14532D',
    tags: ['auditoria', 'dictamen', 'legal', 'contable', 'fiscal', 'aprobado', 'verde']
  }
];
