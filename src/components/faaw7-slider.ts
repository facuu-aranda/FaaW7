import { LitElement, html, css } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-slider')
export class Faaw7Slider extends LitElement {

  static formAssociated = true;
  private internals: ElementInternals;

  @property({ type: Number })
  min = 0;

  @property({ type: Number })
  max = 100;

  @property({ type: Number })
  step = 1;

  @property({ type: Number })
  value = 50;

  @property({ type: String })
  name: string | undefined = undefined;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  vertical = false;

  @property({ type: Boolean, attribute: 'box-indicator' })
  boxIndicator = false;

  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string | null = null;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.internals.setFormValue(String(this.value));
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('value')) {
      this.internals.setFormValue(String(this.value));
    }
  }

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.valueAsNumber;
    this.internals.setFormValue(String(this.value));
    
    this.dispatchEvent(new CustomEvent('faaw7-change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: inline-block;
      width: 100%;
      --faaw7-sdt-h: 18px;
      --faaw7-sdt-w: 10px;
      --faaw7-sdt-icon: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC7SURBVHgBlZLBCYQwEEVj9CDYgRfbswF7sRAbsArPdhBICDmEzPoDE9CdXeKH0eHP48fINOrSPM+k/mhd16YDtCyLmqZJhM7zxIs6PAF570WQAzJIRLkksd89DUl939eB1Ym3b0wpiQBmIYSXiTFGZYwRgWEY6o8uIPQLZGlu2rYtP54L3g3c912N45gHSEahh4dZERZj2zZyztFxHLnQw/vaLIattbmeULkMdg6XxLFaa3WB7MlCirTIHxVUkxicbwSEAAAAAElFTkSuQmCC");
      --faaw7-sdt-icon-h: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAMAAABVab95AAAAWlBMVEUAAAAAjf8AVpo8f7G44/v5/f7l9P3g8/za8Pzp9v32+/7u+f695v2z4PmWvdjr9/1onMKu3vjQ4e2Zv9l+pcJLc5GTu9eMtNGCqseLrcVhlbt0l7BWfptOdpOMIi2BAAAAA3RSTlMADUenYG6gAAAAWklEQVQI113GRwKAIAwEwCBBRaUo9vL/b0qWG3MaaqKG2FBcDCw3aWPB6NwW6nYgHUoHaQ9VxwlGKUPVwC7joOlIgeeZQ3pJnd46Z/2miNTqbZl8918efj2yH/8dBY1fB+zGAAAAAElFTkSuQmCC");
      --faaw7-sdt-icon-a: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgB3ZKxCoMwEIYvJWOn0r10LHTuVDp1KIU+RN+gT9FZ6AP0LYqDY+nQWXAScXMQdRYh+ouRqEF0cPGHHJfcl7sbfkaFroYlqEefx5lxQK/blu6rjRZ6R34RLcFxAWSkmRZEbUkeLWigZgVymZhuoid264lGjwMvTkhmtYsqvKEGMQQY43jYNwoy//7t0j31b8DPXyBOcVYe5Kr9mDpKdoY6ndoCrDNyDnRZRNbxQWFyAAAAAElFTkSuQmCC");
      --faaw7-sdt-icon-d: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASBAMAAACQmVJ4AAAAJFBMVEUAAADa2trKzc66vb+/w8bq6+zQ0tS8wMJ24HiUAAAAAnRSTlMAHoyc8FsAAAA4SURBVAjXY5BwcXFpZOg0NjaezeCspKRkQhG51EhJOZyBLVjJtICBIdU4nIGBgS20gAEIljEwAADrIhGV6oosPgAAAABJRU5ErkJggg==");
      --faaw7-sdt-iconb: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABrSURBVHgB7dLNCcAgDAXgWASjm9TJ3Egns8N4SGv6c2gbyQA+kED40IPPwJGUEsEgpRRjO8o5i6i11gfZe7HVCojIJ4QA6D3vnXM8F1DmBUkL1TdOOIRGC2X7hcIvPu1ZY/wFV83OhzTF3QGRrxiDB3GCSQAAAABJRU5ErkJggg==");
      --faaw7-sdt-iconb-h: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASBAMAAACQmVJ4AAAAKlBMVEUAAAA8f7Hp9/76/f695v3i8/zb8fy24vuu3vhkmb/Q4e3E3exckbhHfKRL187IAAAAAXRSTlMAQObYZgAAACRJREFUCNdj4BQUFJzAcFpJ2Xglg1C7W5AhlcnbYJN5gbYcAAA6fxkRCu8xlwAAAABJRU5ErkJggg==");
      --faaw7-sdt-iconb-a: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB7dKxCYAwEAXQfyEKYhrBThdwCwsLyRKukFGcRiyyh0tY2kcT0fJIn/zijg+v/IQnerUOTDYzkfToWkbOQcM6+ZX5OMNvVIVeFehqEbopXyIQmQzTgf969qFlIfkTM9wbGH4SS8YdBX4AAAAASUVORK5CYII=");
      --faaw7-sdt-iconb-d: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASBAMAAACQmVJ4AAAAElBMVEUAAAD09PStsrX8/Py8wMLq6+ySuCnaAAAAAXRSTlMAQObYZgAAACJJREFUCNdjYFFSUnJgcDU2Ng5hUBYUFDSiLgk2OQhsiwIAV/wLB9LkGuwAAAAASUVORK5CYII=");
    }

    .faaw7-slider-container {
      display: inline-block;
      width: 100%;
    }

    :host([vertical]) .faaw7-slider-container {
      height: 150px;
      transform: translateY(50%);
      width: 4px;
    }

    input[type=range] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: transparent;
      padding: 10px 1px;
      width: 100%;
    }

    input[type=range]:focus-visible {
      outline: 1px dotted #000;
    }

    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: var(--faaw7-sdt-icon);
      filter: drop-shadow(1px 1px 0 #0002);
      height: var(--faaw7-sdt-h);
      transform: translateY(-7px);
      width: var(--faaw7-sdt-w);
      cursor: default;
    }

    input[type=range]:not(:disabled)::-webkit-slider-thumb:hover {
      background: var(--faaw7-sdt-icon-h);
    }

    input[type=range]:not(:disabled)::-webkit-slider-thumb:active {
      background: var(--faaw7-sdt-icon-a);
    }

    input[type=range]::-moz-range-thumb {
      background: var(--faaw7-sdt-icon);
      border: 0;
      border-radius: 0;
      filter: drop-shadow(1px 1px 0 #0002);
      height: var(--faaw7-sdt-h);
      width: var(--faaw7-sdt-w);
      cursor: default;
    }

    input[type=range]:not(:disabled)::-moz-range-thumb:hover {
      background: var(--faaw7-sdt-icon-h);
    }

    input[type=range]:not(:disabled)::-moz-range-thumb:active {
      background: var(--faaw7-sdt-icon-a);
    }

    input[type=range]::-webkit-slider-runnable-track {
      background: var(--faaw7-color-surface);
      box-shadow: inset 1px 1px 1px #999, inset -1px 0 #999, 0 1px #fff;
      box-sizing: border-box;
      height: 3px;
      width: 100%;
    }

    input[type=range]::-moz-range-track {
      background: var(--faaw7-color-surface);
      box-shadow: inset 1px 1px 1px #999, inset -1px 0 #999, 0 1px #fff;
      box-sizing: border-box;
      height: 3px;
      width: 100%;
    }

    input[type=range].faaw7-slider-box-indicator::-webkit-slider-thumb {
      background: var(--faaw7-sdt-iconb);
      filter: drop-shadow(-1px -1px 0 #0002);
      transform: rotate(180deg) translateY(7px);
    }

    input[type=range].faaw7-slider-box-indicator:not(:disabled)::-webkit-slider-thumb:hover {
      background: var(--faaw7-sdt-iconb-h);
    }

    input[type=range].faaw7-slider-box-indicator:not(:disabled)::-webkit-slider-thumb:active {
      background: var(--faaw7-sdt-iconb-a);
    }

    input[type=range].faaw7-slider-box-indicator::-moz-range-thumb {
      background: var(--faaw7-sdt-iconb);
      filter: drop-shadow(1px 1px 0 #0002);
      transform: rotate(180deg);
    }

    input[type=range].faaw7-slider-box-indicator:not(:disabled)::-moz-range-thumb:hover {
      background: var(--faaw7-sdt-iconb-h);
    }

    input[type=range].faaw7-slider-box-indicator:not(:disabled)::-moz-range-thumb:active {
      background: var(--faaw7-sdt-iconb-a);
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background: var(--faaw7-sdt-icon-d);
    }

    input[type=range]:disabled::-moz-range-thumb {
      background: var(--faaw7-sdt-icon-d);
    }

    input[type=range]:disabled.faaw7-slider-box-indicator::-webkit-slider-thumb {
      background: var(--faaw7-sdt-iconb-d);
    }

    input[type=range]:disabled.faaw7-slider-box-indicator::-moz-range-thumb {
      background: var(--faaw7-sdt-iconb-d);
    }

    :host([vertical]) input[type=range] {
      height: 4px;
      margin: 0 16px 0 10px;
      transform: rotate(270deg) translateX(calc(-50% + 8px));
      transform-origin: left;
      width: 150px;
    }

    :host([vertical]) input[type=range]::-webkit-slider-thumb {
      transform: translateY(-8px) scaleX(-1);
    }

    :host([vertical]) input[type=range]::-moz-range-thumb {
      transform: translateY(2px) scaleX(-1);
    }

    :host([vertical]) input[type=range].faaw7-slider-box-indicator::-webkit-slider-thumb {
      transform: translateY(-9px) scaleX(-1) rotate(180deg);
    }

    :host([vertical]) input[type=range].faaw7-slider-box-indicator::-moz-range-thumb {
      transform: translateY(0) scaleX(-1) rotate(180deg);
    }
  `];

  render() {
    const classes = {
      'faaw7-slider-box-indicator': this.boxIndicator,
    };
    return html`
      <div class="faaw7-slider-container">
        <input
          type="range"
          class=${classMap(classes)}
          min=${this.min}
          max=${this.max}
          step=${this.step}
          .value=${String(this.value)}
          name=${ifDefined(this.name)}
          ?disabled=${this.disabled}
          @input=${this._handleChange}
          aria-label=${ifDefined(this.ariaLabel)}
          part="input"
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-slider': Faaw7Slider;
  }
}