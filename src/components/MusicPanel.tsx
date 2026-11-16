import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  Music, 
  Check, 
  Plus, 
  Search
} from 'lucide-react';
import { AI_MUSIC_TRACKS } from '../data/musicTracks';
import { MusicTrack } from '../types';
import { audioSynthPlayer } from '../utils/audioSynth';

interface MusicPanelProps {
  currentAudioTrackId?: string;
  onSelectTrackForPage: (trackId: string | undefined) => void;
}

const CATEGORIES = ['Todos', 'Lo-Fi', 'Cinematográfico', 'Pop & Upbeat', 'Corporativo', 'Electrónica & Synth', 'Meditación & Spa'];

export const MusicPanel: React.FC<MusicPanelProps> = ({
  currentAudioTrackId,
  onSelectTrackForPage,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [playingId, setPlayingId] = useState<string | null>(audioSynthPlayer.getTrack()?.id || null);
  const [volumeLevel, setVolumeLevel] = useState<number>(Math.round(audioSynthPlayer.getVolume() * 100));

  const filteredTracks = AI_MUSIC_TRACKS.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(search.toLowerCase()) ||
                          track.category.toLowerCase().includes(search.toLowerCase()) ||
                          track.mood.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || track.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePlayToggle = (track: MusicTrack) => {
    if (playingId === track.id) {
      audioSynthPlayer.stopTrack();
      setPlayingId(null);
    } else {
      audioSynthPlayer.playTrack(track);
      setPlayingId(track.id);
    }
  };

  const handleVolumeChange = (val: number) => {
    setVolumeLevel(val);
    audioSynthPlayer.setVolume(val / 100);
  };

  return (
    <div className="space-y-4">
      {/* 1. Feature Intro & Active Track Status */}
      <div className="bg-gradient-to-tr from-purple-50 via-pink-50/50 to-indigo-50/60 p-3.5 rounded-2xl border border-purple-200 shadow-2xs">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center">
              <Music className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-xs text-slate-800">50 Pistas de Audio IA</span>
          </div>
          <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-purple-200 text-purple-800">
            Web Audio Synth
          </span>
        </div>
        <p className="text-[11px] text-slate-600 leading-relaxed">
          Banda sonora sintética procedural en tiempo real generada por Web Audio API. Escucha y sincroniza pistas con tus diapositivas.
        </p>

        {/* Volume Master Slider */}
        <div className="mt-3 pt-2.5 border-t border-purple-200/60 flex items-center gap-2.5">
          <Volume2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
          <input
            type="range"
            min="0"
            max="100"
            value={volumeLevel}
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className="w-full accent-purple-600 h-1.5 bg-purple-200 rounded-lg cursor-pointer"
          />
          <span className="text-[10px] font-bold text-purple-700 w-8 text-right">{volumeLevel}%</span>
        </div>
      </div>

      {/* 2. Search & Category Filters */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por categoría, estado de ánimo o título..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-2xs font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Track List */}
      <div className="space-y-2 pr-0.5">
        {filteredTracks.map(track => {
          const isPlaying = playingId === track.id;
          const isAttachedToPage = currentAudioTrackId === track.id;

          return (
            <div
              key={track.id}
              id={`music-track-${track.id}`}
              className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                isPlaying
                  ? 'border-purple-500 bg-purple-50/80 shadow-xs ring-1 ring-purple-500/20'
                  : isAttachedToPage
                  ? 'border-cyan-500 bg-cyan-50/60'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {/* Left Play button + Info */}
              <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
                <button
                  onClick={() => handlePlayToggle(track)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 shadow-2xs ${
                    isPlaying
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 border border-slate-200'
                  }`}
                  title={isPlaying ? 'Pausar' : 'Reproducir'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-800 truncate">
                      {track.title}
                    </span>
                    {isPlaying && (
                      <span className="flex items-end gap-0.5 h-3">
                        <span className="w-0.5 h-2 bg-purple-600 animate-bounce"></span>
                        <span className="w-0.5 h-3 bg-purple-600 animate-pulse"></span>
                        <span className="w-0.5 h-1.5 bg-purple-600 animate-bounce"></span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                    <span className="font-semibold text-purple-600">{track.category}</span>
                    <span>•</span>
                    <span>{track.bpm} BPM</span>
                    <span>•</span>
                    <span className="bg-slate-100 px-1.5 py-0.2 rounded text-slate-500 font-medium truncate max-w-[120px]">
                      {track.mood}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Action: Attach to Slide */}
              <button
                id={`btn-attach-track-${track.id}`}
                onClick={() => {
                  if (isAttachedToPage) {
                    onSelectTrackForPage(undefined);
                  } else {
                    onSelectTrackForPage(track.id);
                  }
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all flex-shrink-0 ${
                  isAttachedToPage
                    ? 'bg-cyan-600 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
                title={isAttachedToPage ? 'Pista asignada a esta diapositiva' : 'Asignar pista a diapositiva'}
              >
                {isAttachedToPage ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>En uso</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5 text-purple-600" />
                    <span>Usar</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
