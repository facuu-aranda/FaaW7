import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-custom-slider')
export class Faaw7CustomSlider extends LitElement {

  @property({ type: Number })
  min = 0;

  @property({ type: Number })
  max = 100;

  @property({ type: Number })
  step = 1;

  @property({ type: Number })
  value = 50;
  
  @state()
  private _isSliding = false;

  private _track: HTMLDivElement | null = null;
  private _thumb: HTMLDivElement | null = null;
  
  firstUpdated() {
    this._track = this.shadowRoot?.querySelector('.faaw7-custom-slider-track') as HTMLDivElement;
    this._thumb = this.shadowRoot?.querySelector('.faaw7-custom-slider-thumb') as HTMLDivElement;
  }

  private _handleDragStart(e: MouseEvent) {
    if (e.button !== 0 || !this._track) return;

    this._isSliding = true;
    this.shadowRoot?.host.classList.add('is-sliding');
    this._thumb?.focus();
    this._updateValueFromEvent(e);

    document.addEventListener('mousemove', this._handleDragging);
    document.addEventListener('mouseup', this._handleDragEnd);
  }

  private _handleDragging = (e: MouseEvent) => {
    if (!this._isSliding || !this._track) return;
    e.preventDefault();
    this._updateValueFromEvent(e);
  };

  private _handleDragEnd = () => {
    this._isSliding = false;
    this.shadowRoot?.host.classList.remove('is-sliding');
    document.removeEventListener('mousemove', this._handleDragging);
    document.removeEventListener('mouseup', this._handleDragEnd);

    this._dispatchChange();
  };
  
  private _handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        this._setValue(this.value - this.step);
        this._dispatchChange();
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        this._setValue(this.value + this.step);
        this._dispatchChange();
        break;
      case 'Home':
        e.preventDefault();
        this._setValue(this.min);
        this._dispatchChange();
        break;
      case 'End':
        e.preventDefault();
        this._setValue(this.max);
        this._dispatchChange();
        break;
    }
  }

  private _updateValueFromEvent(e: MouseEvent) {
    if (!this._track) return;
    
    const rect = this._track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    let percent = Math.max(0, Math.min(1, x / width));
    
    this._setValueFromPercent(percent);
  }

  private _setValueFromPercent(percent: number) {
    const range = this.max - this.min;
    let value = this.min + range * percent;
    this._setValue(value);
  }
  
  private _setValue(value: number) {
    if (this.step > 0) {
      value = Math.round(value / this.step) * this.step;
    }
    this.value = Math.max(this.min, Math.min(this.max, value));
  }
  
  private _dispatchChange() {
    this.dispatchEvent(new CustomEvent('faaw7-change', {
      detail: { value: this.value },
      bubbles: true, composed: true
    }));
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      height: 20px;
      cursor: pointer;
      user-select: none;
    }

    .faaw7-custom-slider-track {
      width: 100%;
      height: 3px;
      background: var(--faaw7-color-surface);
      box-shadow: inset 1px 1px 1px #999;
      part: track;
    }

    .faaw7-custom-slider-thumb {
      position: absolute;
      width: 10px;
      height: 18px;
      background: var(--faaw7-gradient-bg);
      border: 1px solid var(--faaw7-color-border);
      border-radius: var(--faaw7-border-radius);
      cursor: default;
      transform: translateX(-50%);
      part: thumb;
    }
    
    .faaw7-custom-slider-thumb:focus-visible {
      outline: 1px dotted #000;
      outline-offset: 2px;
    }

    :host(:not([disabled])) .faaw7-custom-slider-thumb:hover {
      border-color: var(--faaw7-color-border-hover);
    }
    
    :host(.is-sliding) .faaw7-custom-slider-thumb {
      border-color: var(--faaw7-color-border-hover);
    }

    .faaw7-slider-tooltip {
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      background: #333;
      color: white;
      padding: 2px 6px;
      border-radius: 3px;
      font: 8pt var(--faaw7-font-family);
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.2s;
      part: tooltip;
    }
    
    :host(:hover) .faaw7-slider-tooltip,
    :host(.is-sliding) .faaw7-slider-tooltip,
    .faaw7-custom-slider-thumb:focus-visible + .faaw7-slider-tooltip {
      opacity: 1;
    }
  `];

  render() {
    const percent = ((this.value - this.min) / (this.max - this.min)) * 100;
    const thumbStyles = {
      left: `${percent}%`
    };

    return html`
      <div 
        class="faaw7-custom-slider-track" 
        @mousedown=${this._handleDragStart}
      ></div>
      <div 
        class="faaw7-custom-slider-thumb" 
        style=${styleMap(thumbStyles)}
        @mousedown=${this._handleDragStart}
        @keydown=${this._handleKeyDown}
        role="slider"
        tabindex="0"
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
      >
        <div class="faaw7-slider-tooltip">${Math.round(this.value)}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-custom-slider': Faaw7CustomSlider;
  }
}