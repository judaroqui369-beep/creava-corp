import { MusicTrack } from '../types';

export const AI_MUSIC_TRACKS: MusicTrack[] = [
  // 1. Lo-Fi & Chill (8 tracks)
  {
    id: 'lofi-1',
    title: 'Midnight Coffee Sip',
    category: 'Lo-Fi',
    duration: '2:34',
    durationSec: 154,
    bpm: 78,
    scale: 'pentatonic',
    baseFreq: 261.63, // C4
    mood: 'Relajado & Acogedor',
    tags: ['estudio', 'café', 'noche', 'chill']
  },
  {
    id: 'lofi-2',
    title: 'Rainy Window Dreams',
    category: 'Lo-Fi',
    duration: '3:10',
    durationSec: 190,
    bpm: 72,
    scale: 'minor',
    baseFreq: 220.0, // A3
    mood: 'Nostálgico & Pensativo',
    tags: ['lluvia', 'nostalgia', 'concentración']
  },
  {
    id: 'lofi-3',
    title: 'Golden Sunset Vinyl',
    category: 'Lo-Fi',
    duration: '2:45',
    durationSec: 165,
    bpm: 82,
    scale: 'major',
    baseFreq: 293.66, // D4
    mood: 'Cálido & Sereno',
    tags: ['atardecer', 'vinilo', 'verano']
  },
  {
    id: 'lofi-4',
    title: 'Tokyo Streetlights',
    category: 'Lo-Fi',
    duration: '2:50',
    durationSec: 170,
    bpm: 85,
    scale: 'pentatonic',
    baseFreq: 329.63, // E4
    mood: 'Urbano & Suave',
    tags: ['ciudad', 'noche', 'luces']
  },
  {
    id: 'lofi-5',
    title: 'Warm Wool Blanket',
    category: 'Lo-Fi',
    duration: '3:05',
    durationSec: 185,
    bpm: 70,
    scale: 'major',
    baseFreq: 261.63,
    mood: 'Confortable & Hogareño',
    tags: ['otoño', 'paz', 'descanso']
  },
  {
    id: 'lofi-6',
    title: 'Study Session 3AM',
    category: 'Lo-Fi',
    duration: '2:20',
    durationSec: 140,
    bpm: 80,
    scale: 'minor',
    baseFreq: 246.94, // B3
    mood: 'Foco Profundo',
    tags: ['estudio', 'foco', 'madrugada']
  },
  {
    id: 'lofi-7',
    title: 'Bonsai Garden Breeze',
    category: 'Lo-Fi',
    duration: '2:58',
    durationSec: 178,
    bpm: 76,
    scale: 'pentatonic',
    baseFreq: 392.0, // G4
    mood: 'Zen & Equilibrado',
    tags: ['zen', 'naturaleza', 'jardín']
  },
  {
    id: 'lofi-8',
    title: 'Cloud Hopping Beat',
    category: 'Lo-Fi',
    duration: '3:15',
    durationSec: 195,
    bpm: 84,
    scale: 'major',
    baseFreq: 349.23, // F4
    mood: 'Ligero & Alegre',
    tags: ['cielo', 'nubes', 'optimismo']
  },

  // 2. Pop Upbeat & Fun (8 tracks)
  {
    id: 'pop-1',
    title: 'Summer Splash Sparkle',
    category: 'Pop',
    duration: '2:40',
    durationSec: 160,
    bpm: 124,
    scale: 'major',
    baseFreq: 329.63,
    mood: 'Energético & Feliz',
    tags: ['verano', 'fiesta', 'baile', 'alegre']
  },
  {
    id: 'pop-2',
    title: 'City Lights Groove',
    category: 'Pop',
    duration: '3:02',
    durationSec: 182,
    bpm: 120,
    scale: 'major',
    baseFreq: 261.63,
    mood: 'Moderno & Chic',
    tags: ['ciudad', 'moda', 'ritmo']
  },
  {
    id: 'pop-3',
    title: 'Weekend High Five',
    category: 'Pop',
    duration: '2:25',
    durationSec: 145,
    bpm: 128,
    scale: 'major',
    baseFreq: 392.0,
    mood: 'Euforia & Amigos',
    tags: ['fin de semana', 'fiesta', 'juvenil']
  },
  {
    id: 'pop-4',
    title: 'Bubblegum Drive',
    category: 'Pop',
    duration: '2:52',
    durationSec: 172,
    bpm: 118,
    scale: 'major',
    baseFreq: 293.66,
    mood: 'Pegadizo & Dulce',
    tags: ['colorido', 'tiktok', 'reels']
  },
  {
    id: 'pop-5',
    title: 'Sunshine Radio',
    category: 'Pop',
    duration: '3:12',
    durationSec: 192,
    bpm: 122,
    scale: 'major',
    baseFreq: 349.23,
    mood: 'Optimista & Brillante',
    tags: ['mañana', 'radio', 'viaje']
  },
  {
    id: 'pop-6',
    title: 'Neon Skater Boy',
    category: 'Pop',
    duration: '2:38',
    durationSec: 158,
    bpm: 126,
    scale: 'minor',
    baseFreq: 220.0,
    mood: 'Audaz & Dinámico',
    tags: ['skate', 'calle', 'energía']
  },
  {
    id: 'pop-7',
    title: 'Catchy Whistle Melody',
    category: 'Pop',
    duration: '2:15',
    durationSec: 135,
    bpm: 115,
    scale: 'major',
    baseFreq: 261.63,
    mood: 'Divertido & Juguetón',
    tags: ['silbido', 'comercial', 'viral']
  },
  {
    id: 'pop-8',
    title: 'Festival Golden Hour',
    category: 'Pop',
    duration: '3:20',
    durationSec: 200,
    bpm: 125,
    scale: 'major',
    baseFreq: 392.0,
    mood: 'Celebración Épica',
    tags: ['festival', 'concierto', 'amigos']
  },

  // 3. Ambient & Meditación (8 tracks)
  {
    id: 'amb-1',
    title: 'Ocean Deep Resonance',
    category: 'Ambient',
    duration: '4:10',
    durationSec: 250,
    bpm: 60,
    scale: 'pentatonic',
    baseFreq: 196.0, // G3
    mood: 'Calma Profunda',
    tags: ['meditación', 'mar', 'sueño', 'spa']
  },
  {
    id: 'amb-2',
    title: 'Forest Canopy Mist',
    category: 'Ambient',
    duration: '3:45',
    durationSec: 225,
    bpm: 65,
    scale: 'pentatonic',
    baseFreq: 220.0,
    mood: 'Ecológico & Puro',
    tags: ['bosque', 'niebla', 'respiración']
  },
  {
    id: 'amb-3',
    title: 'Tibetan Bowl Waves',
    category: 'Ambient',
    duration: '5:00',
    durationSec: 300,
    bpm: 50,
    scale: 'pentatonic',
    baseFreq: 261.63,
    mood: 'Místico & Armónico',
    tags: ['yoga', 'cuencos', 'espiritual']
  },
  {
    id: 'amb-4',
    title: 'Starry Cosmic Drift',
    category: 'Ambient',
    duration: '4:30',
    durationSec: 270,
    bpm: 55,
    scale: 'minor',
    baseFreq: 174.61, // F3
    mood: 'Espacial & Infinito',
    tags: ['universo', 'estrellas', 'paz']
  },
  {
    id: 'amb-5',
    title: 'Gentle Morning Zen',
    category: 'Ambient',
    duration: '3:30',
    durationSec: 210,
    bpm: 62,
    scale: 'major',
    baseFreq: 293.66,
    mood: 'Renovador & Fresco',
    tags: ['amanecer', 'salud', 'mente']
  },
  {
    id: 'amb-6',
    title: 'Crystal Caves Echo',
    category: 'Ambient',
    duration: '3:50',
    durationSec: 230,
    bpm: 58,
    scale: 'pentatonic',
    baseFreq: 329.63,
    mood: 'Mágico & Claro',
    tags: ['cristal', 'silencio', 'claridad']
  },
  {
    id: 'amb-7',
    title: 'Aurora Borealis Glow',
    category: 'Ambient',
    duration: '4:15',
    durationSec: 255,
    bpm: 64,
    scale: 'major',
    baseFreq: 220.0,
    mood: 'Majestuoso & Frío',
    tags: ['aurora', 'ártico', 'belleza']
  },
  {
    id: 'amb-8',
    title: 'Breath of the Mountain',
    category: 'Ambient',
    duration: '4:40',
    durationSec: 280,
    bpm: 52,
    scale: 'pentatonic',
    baseFreq: 196.0,
    mood: 'Inamovible & Sereno',
    tags: ['montaña', 'tierra', 'enfoque']
  },

  // 4. Corporate & Tech (8 tracks)
  {
    id: 'corp-1',
    title: 'Future Horizons Pitch',
    category: 'Corporate',
    duration: '2:45',
    durationSec: 165,
    bpm: 110,
    scale: 'major',
    baseFreq: 261.63,
    mood: 'Profesional & Inspirador',
    tags: ['presentación', 'negocios', 'pitch']
  },
  {
    id: 'corp-2',
    title: 'Silicon Valley Sprint',
    category: 'Corporate',
    duration: '2:30',
    durationSec: 150,
    bpm: 116,
    scale: 'major',
    baseFreq: 293.66,
    mood: 'Innovación & Avance',
    tags: ['startup', 'tecnología', 'software']
  },
  {
    id: 'corp-3',
    title: 'Success Blueprint',
    category: 'Corporate',
    duration: '3:05',
    durationSec: 185,
    bpm: 108,
    scale: 'major',
    baseFreq: 349.23,
    mood: 'Confianza & Liderazgo',
    tags: ['finanzas', 'estrategia', 'éxito']
  },
  {
    id: 'corp-4',
    title: 'Smart AI Pulse',
    category: 'Corporate',
    duration: '2:40',
    durationSec: 160,
    bpm: 114,
    scale: 'minor',
    baseFreq: 220.0,
    mood: 'Vanguardia & Datos',
    tags: ['ia', 'datos', 'ciber']
  },
  {
    id: 'corp-5',
    title: 'Global Connectivity',
    category: 'Corporate',
    duration: '3:15',
    durationSec: 195,
    bpm: 112,
    scale: 'major',
    baseFreq: 392.0,
    mood: 'Expansión & Alianzas',
    tags: ['comercio', 'redes', 'mundo']
  },
  {
    id: 'corp-6',
    title: 'Modern Architecture',
    category: 'Corporate',
    duration: '2:55',
    durationSec: 175,
    bpm: 105,
    scale: 'major',
    baseFreq: 261.63,
    mood: 'Estructurado & Limpio',
    tags: ['diseño', 'inmobiliaria', 'orden']
  },
  {
    id: 'corp-7',
    title: 'Teamwork Synergy',
    category: 'Corporate',
    duration: '2:20',
    durationSec: 140,
    bpm: 118,
    scale: 'major',
    baseFreq: 329.63,
    mood: 'Motivador & Unido',
    tags: ['equipo', 'colaboración', 'cultura']
  },
  {
    id: 'corp-8',
    title: 'The Annual Report',
    category: 'Corporate',
    duration: '3:30',
    durationSec: 210,
    bpm: 102,
    scale: 'major',
    baseFreq: 261.63,
    mood: 'Sólido & Transparente',
    tags: ['reporte', 'anual', 'gráficos']
  },

  // 5. Cinematic & Epic (8 tracks)
  {
    id: 'cine-1',
    title: 'The Hero Emerges',
    category: 'Cinematic',
    duration: '3:40',
    durationSec: 220,
    bpm: 95,
    scale: 'minor',
    baseFreq: 220.0,
    mood: 'Épico & Triunfante',
    tags: ['cine', 'trailer', 'héroe', 'fuerza']
  },
  {
    id: 'cine-2',
    title: 'Interstellar Voyage',
    category: 'Cinematic',
    duration: '4:10',
    durationSec: 250,
    bpm: 88,
    scale: 'minor',
    baseFreq: 196.0,
    mood: 'Misterioso & Grandioso',
    tags: ['espacio', 'orquesta', 'viaje']
  },
  {
    id: 'cine-3',
    title: 'Chrono Awakening',
    category: 'Cinematic',
    duration: '3:15',
    durationSec: 195,
    bpm: 104,
    scale: 'minor',
    baseFreq: 246.94,
    mood: 'Tensión & Suspenso',
    tags: ['tiempo', 'cuenta regresiva', 'acción']
  },
  {
    id: 'cine-4',
    title: 'Valley of the Ancients',
    category: 'Cinematic',
    duration: '3:55',
    durationSec: 235,
    bpm: 86,
    scale: 'pentatonic',
    baseFreq: 261.63,
    mood: 'Legendario & Antiguo',
    tags: ['historia', 'fantasía', 'paisaje']
  },
  {
    id: 'cine-5',
    title: 'Battle for Dawn',
    category: 'Cinematic',
    duration: '3:05',
    durationSec: 185,
    bpm: 120,
    scale: 'minor',
    baseFreq: 220.0,
    mood: 'Adrenalina & Determinación',
    tags: ['combate', 'tambores', 'impacto']
  },
  {
    id: 'cine-6',
    title: 'Tears in the Rain',
    category: 'Cinematic',
    duration: '3:25',
    durationSec: 205,
    bpm: 74,
    scale: 'minor',
    baseFreq: 174.61,
    mood: 'Emotivo & Sentimental',
    tags: ['piano', 'cuerdas', 'drama']
  },
  {
    id: 'cine-7',
    title: 'Flight of the Phoenix',
    category: 'Cinematic',
    duration: '3:50',
    durationSec: 230,
    bpm: 98,
    scale: 'major',
    baseFreq: 293.66,
    mood: 'Esperanza & Ascenso',
    tags: ['renacer', 'cielo', 'orquestal']
  },
  {
    id: 'cine-8',
    title: 'Kingdom Revealed',
    category: 'Cinematic',
    duration: '4:00',
    durationSec: 240,
    bpm: 90,
    scale: 'major',
    baseFreq: 329.63,
    mood: 'Majestuoso & Solemne',
    tags: ['castillo', 'realeza', 'monumental']
  },

  // 6. Acoustic & Verano (5 tracks)
  {
    id: 'aco-1',
    title: 'Campfire Guitar Stories',
    category: 'Acoustic',
    duration: '2:45',
    durationSec: 165,
    bpm: 96,
    scale: 'major',
    baseFreq: 261.63,
    mood: 'Cálido & Familiar',
    tags: ['guitarra', 'fogata', 'amigos']
  },
  {
    id: 'aco-2',
    title: 'Sunny Morning Porch',
    category: 'Acoustic',
    duration: '2:30',
    durationSec: 150,
    bpm: 102,
    scale: 'major',
    baseFreq: 329.63,
    mood: 'Fresco & Agradecido',
    tags: ['desayuno', 'café', 'madera']
  },
  {
    id: 'aco-3',
    title: 'Coastal Highway Ride',
    category: 'Acoustic',
    duration: '3:10',
    durationSec: 190,
    bpm: 108,
    scale: 'major',
    baseFreq: 293.66,
    mood: 'Libertad & Aventura',
    tags: ['viaje', 'mar', 'carretera']
  },
  {
    id: 'aco-4',
    title: 'Lavender Breeze Folk',
    category: 'Acoustic',
    duration: '2:55',
    durationSec: 175,
    bpm: 90,
    scale: 'major',
    baseFreq: 349.23,
    mood: 'Delicado & Dulce',
    tags: ['campo', 'flores', 'paz']
  },
  {
    id: 'aco-5',
    title: 'Strumming into Twilight',
    category: 'Acoustic',
    duration: '3:00',
    durationSec: 180,
    bpm: 94,
    scale: 'pentatonic',
    baseFreq: 392.0,
    mood: 'Melancólico & Bello',
    tags: ['tarde', 'pétalos', 'acústico']
  },

  // 7. Synthwave & Retro 80s (5 tracks)
  {
    id: 'syn-1',
    title: 'Neon Palm Boulevard',
    category: 'Synthwave',
    duration: '3:15',
    durationSec: 195,
    bpm: 118,
    scale: 'minor',
    baseFreq: 220.0,
    mood: 'Retro & Nocturno',
    tags: ['80s', 'neon', 'miami', 'arcade']
  },
  {
    id: 'syn-2',
    title: 'Cyberpunk Skyline 2088',
    category: 'Synthwave',
    duration: '3:30',
    durationSec: 210,
    bpm: 122,
    scale: 'minor',
    baseFreq: 196.0,
    mood: 'Futurista & Conducción',
    tags: ['cyber', 'synth', 'laser']
  },
  {
    id: 'syn-3',
    title: 'Laser Grid Sunset',
    category: 'Synthwave',
    duration: '2:50',
    durationSec: 170,
    bpm: 112,
    scale: 'minor',
    baseFreq: 246.94,
    mood: 'Nostalgia Digital',
    tags: ['delorean', 'retrowave', 'vapor']
  },
  {
    id: 'syn-4',
    title: 'Midnight Highway Chase',
    category: 'Synthwave',
    duration: '3:05',
    durationSec: 185,
    bpm: 128,
    scale: 'minor',
    baseFreq: 220.0,
    mood: 'Rápido & Eléctrico',
    tags: ['velocidad', 'persecución', 'bajo']
  },
  {
    id: 'syn-5',
    title: 'Arcade Dreamer Highscore',
    category: 'Synthwave',
    duration: '2:40',
    durationSec: 160,
    bpm: 120,
    scale: 'major',
    baseFreq: 261.63,
    mood: 'Lúdico & Retro-Gaming',
    tags: ['videojuegos', 'fichines', 'chips']
  }
];
