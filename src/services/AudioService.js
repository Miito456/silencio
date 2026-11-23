/**
 * AudioService.js
 * Encapsulates audio playback, safe autoplay policy handling, and sound effects.
 * (Single Responsibility Principle - SRP)
 */
export class AudioService {
  constructor(audioPath) {
    this.audio = new Audio(audioPath);
    this.isMuted = false;
  }

  play() {
    if (this.isMuted) return Promise.resolve();

    this.audio.currentTime = 0;
    return this.audio.play().catch(error => {
      // Browser autoplay restriction handling
      console.warn('Audio playback prevented by browser policy:', error.message);
    });
  }

  setMuted(muted) {
    this.isMuted = Boolean(muted);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}
