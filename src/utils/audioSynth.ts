import { MusicTrack } from '../types';

class WebAudioSynthPlayer {
  private ctx: AudioContext | null = null;
  private isCurrentlyPlaying = false;
  private currentTrack: MusicTrack | null = null;
  private loopInterval: number | null = null;
  private progressInterval: number | null = null;
  private currentTimeSeconds = 0;
  private masterGain: GainNode | null = null;
  private volumeLevel = 0.5;
  private onProgressCallback: ((sec: number) => void) | null = null;
  private stepIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volumeLevel, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volumeLevel = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volumeLevel, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volumeLevel;
  }

  public playTrack(track: MusicTrack, onProgress?: (sec: number) => void) {
    this.stopTrack();
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    this.currentTrack = track;
    this.isCurrentlyPlaying = true;
    this.currentTimeSeconds = 0;
    this.stepIndex = 0;
    this.onProgressCallback = onProgress || null;

    const secondsPerBeat = 60 / track.bpm;
    const stepDurationMs = (secondsPerBeat / 2) * 1000; // 8th note steps

    // Scale intervals relative to base frequency
    const scaleIntervals = track.scale === 'minor'
      ? [1, 1.189, 1.334, 1.498, 1.781, 2]
      : track.scale === 'pentatonic'
      ? [1, 1.125, 1.25, 1.5, 1.666, 2]
      : [1, 1.122, 1.26, 1.334, 1.498, 1.681, 1.887, 2];

    const playStep = () => {
      if (!this.ctx || !this.masterGain || !this.isCurrentlyPlaying) return;
      const now = this.ctx.currentTime;

      const chordRootIndex = Math.floor(this.stepIndex / 8) % scaleIntervals.length;
      const rootRatio = scaleIntervals[chordRootIndex];
      const rootFreq = track.baseFreq * rootRatio;

      // 1. Bass note every 4 steps
      if (this.stepIndex % 4 === 0) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = track.category === 'Synthwave' ? 'sawtooth' : 'triangle';
        bassOsc.frequency.setValueAtTime(rootFreq * 0.5, now);

        bassGain.gain.setValueAtTime(0.18, now);
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + secondsPerBeat * 1.5);

        bassOsc.connect(bassGain);
        bassGain.connect(this.masterGain);
        bassOsc.start(now);
        bassOsc.stop(now + secondsPerBeat * 1.5);
      }

      // 2. Chords pad or arpeggio
      const noteDegree = (this.stepIndex % 3);
      const noteInterval = scaleIntervals[(chordRootIndex + noteDegree * 2) % scaleIntervals.length];
      const melodyFreq = track.baseFreq * noteInterval;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = track.category === 'Ambient' ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(melodyFreq, now);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + secondsPerBeat * 0.8);

      // Lowpass filter for smooth warmth
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + secondsPerBeat * 0.8);

      // 3. Gentle percussion / click for pop and lo-fi
      if (track.category === 'Pop' || track.category === 'Lo-Fi' || track.category === 'Synthwave') {
        if (this.stepIndex % 2 === 1) {
          // Hi-hat tick
          const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.05, this.ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          for (let i = 0; i < noiseBuffer.length; i++) {
            output[i] = Math.random() * 2 - 1;
          }
          const whiteNoise = this.ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          const noiseFilter = this.ctx.createBiquadFilter();
          noiseFilter.type = 'highpass';
          noiseFilter.frequency.setValueAtTime(6000, now);

          const noiseGain = this.ctx.createGain();
          noiseGain.gain.setValueAtTime(0.04, now);
          noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

          whiteNoise.connect(noiseFilter);
          noiseFilter.connect(noiseGain);
          noiseGain.connect(this.masterGain);

          whiteNoise.start(now);
        }
      }

      this.stepIndex++;
    };

    // Run first step immediately
    playStep();

    this.loopInterval = window.setInterval(playStep, stepDurationMs);

    // Track elapsed time
    this.progressInterval = window.setInterval(() => {
      if (this.isCurrentlyPlaying && this.currentTrack) {
        this.currentTimeSeconds++;
        if (this.currentTimeSeconds >= this.currentTrack.durationSec) {
          this.currentTimeSeconds = 0; // loop track
        }
        if (this.onProgressCallback) {
          this.onProgressCallback(this.currentTimeSeconds);
        }
      }
    }, 1000);
  }

  public pauseTrack() {
    this.isCurrentlyPlaying = false;
    if (this.loopInterval) {
      clearInterval(this.loopInterval);
      this.loopInterval = null;
    }
  }

  public resumeTrack() {
    if (this.currentTrack && !this.isCurrentlyPlaying) {
      this.playTrack(this.currentTrack, this.onProgressCallback || undefined);
    }
  }

  public stopTrack() {
    this.isCurrentlyPlaying = false;
    if (this.loopInterval) {
      clearInterval(this.loopInterval);
      this.loopInterval = null;
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
    this.currentTimeSeconds = 0;
    this.currentTrack = null;
    if (this.onProgressCallback) {
      this.onProgressCallback(0);
    }
  }

  public isPlaying(): boolean {
    return this.isCurrentlyPlaying;
  }

  public getTrack(): MusicTrack | null {
    return this.currentTrack;
  }
}

export const audioSynthPlayer = new WebAudioSynthPlayer();
