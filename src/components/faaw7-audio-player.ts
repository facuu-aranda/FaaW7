import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

import './faaw7-icon-button.ts';
import './faaw7-progress-bar.ts';
import './faaw7-slider.ts';

const playIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik04IDV2MTRsMTEtN3oiLz48L3N2Zz4=`;
const pauseIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik02IDE5aDRWNUg2djE0em04LTE0djE0aDRWNWh-NHoiLz48L3N2Zz4=`;

@customElement('faaw7-audio-player')
export class Faaw7AudioPlayer extends LitElement {

  @property({ type: String })
  src = '';

  @state()
  private _isPlaying = false;
  
  @state()
  private _currentTime = 0;
  
  @state()
  private _duration = 0;

  @state()
  private _volume = 1;

  private _audio: HTMLAudioElement = new Audio();

  connectedCallback(): void {
    super.connectedCallback();
    this._audio.src = this.src;
    this._audio.addEventListener('loadedmetadata', this._updateDuration);
    this._audio.addEventListener('timeupdate', this._updateTime);
    this._audio.addEventListener('ended', this._handleEnded);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._audio.removeEventListener('loadedmetadata', this._updateDuration);
    this._audio.removeEventListener('timeupdate', this._updateTime);
    this._audio.removeEventListener('ended', this._handleEnded);
  }

  private _updateDuration = () => {
    this._duration = this._audio.duration;
  }
  
  private _updateTime = () => {
    this._currentTime = this._audio.currentTime;
  }

  private _handleEnded = () => {
    this._isPlaying = false;
    this._currentTime = 0;
  }

  private _togglePlay() {
    if (this._audio.paused) {
      this._audio.play();
      this._isPlaying = true;
    } else {
      this._audio.pause();
      this._isPlaying = false;
    }
  }

  private _handleVolumeChange(e: CustomEvent) {
    this._volume = e.detail.value;
    this._audio.volume = this._volume;
  }

  private _formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
    }

    .player {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--faaw7-color-surface-dark);
      padding: 8px;
      border: 1px solid var(--faaw7-color-border-disabled);
      border-radius: var(--faaw7-border-radius);
    }
    
    faaw7-icon-button {
      flex-shrink: 0;
    }
    
    faaw7-progress-bar {
      flex-grow: 1;
    }
    
    .time-display {
      font: 8pt var(--faaw7-font-family);
      color: var(--faaw7-color-text);
      min-width: 70px;
      text-align: center;
      user-select: none;
    }
    
    faaw7-slider {
      width: 80px;
      flex-shrink: 0;
    }
  `];

  render() {
    const progressPercent = (this._currentTime / this._duration) * 100 || 0;
    const icon = this._isPlaying ? pauseIcon : playIcon;
    const time = `${this._formatTime(this._currentTime)} / ${this._formatTime(this._duration)}`;

    return html`
      <div class="player" part="container">
        <faaw7-icon-button
          .iconUrl=${icon}
          @click=${this._togglePlay}
          part="play-button"
        ></faaw7-icon-button>
        
        <faaw7-progress-bar 
          .value=${progressPercent}
          part="progress-bar"
        ></faaw7-progress-bar>
        
        <span class="time-display" part="time">${time}</span>
        
        <faaw7-slider
          min="0"
          max="1"
          step="0.01"
          .value=${this._volume}
          @faaw7-change=${this._handleVolumeChange}
          part="volume-slider"
        ></faaw7-slider>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-audio-player': Faaw7AudioPlayer;
  }
}