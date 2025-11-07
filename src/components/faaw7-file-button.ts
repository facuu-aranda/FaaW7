import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { defaultTheme } from '../theme/default.css.js';

let uniqueId = 0;

@customElement('faaw7-file-button')
export class Faaw7FileButton extends LitElement {

  private _id = `faaw7-file-${uniqueId++}`;

  @property({ type: Boolean })
  default = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  accept = '';
  
  @property({ type: Boolean })
  multiple = false;

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.dispatchEvent(new CustomEvent('faaw7-change', {
      detail: { files: target.files },
      bubbles: true,
      composed: true
    }));
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: inline-block;
    }
    
    label {
      align-items: center;
      display: inline-flex;
      background: var(--faaw7-gradient-bg);
      border: 1px solid var(--faaw7-color-border);
      border-radius: var(--faaw7-border-radius);
      box-shadow: var(--faaw7-shadow-inset);
      box-sizing: border-box;
      color: var(--faaw7-color-text);
      font: var(--faaw7-font-family);
      min-height: 23px;
      min-width: 75px;
      padding: 0 12px;
      position: relative;
      text-align: center;
      z-index: 0;
      cursor: default;
    }

    label::before {
      background: var(--faaw7-gradient-bg-hover);
      border-radius: var(--faaw7-border-radius);
      box-shadow: var(--faaw7-shadow-inset);
    }

    label::after,
    label::before {
      content: "";
      height: 100%;
      left: 0;
      margin: 0;
      opacity: 0;
      padding: 0;
      position: absolute;
      top: 0;
      transition: opacity .3s;
      width: 100%;
      z-index: -1;
    }

    label::after {
      background: var(--faaw7-gradient-bg-active);
      border-radius: 2px;
      box-shadow: var(--faaw7-shadow-inset-active);
    }

    :host([disabled]) label {
      background: var(--faaw7-gradient-bg-disabled);
      border-color: var(--faaw7-color-border-disabled);
      color: var(--faaw7-color-text-disabled);
      cursor: not-allowed;
    }

    :host(:not([disabled])) label:hover {
      border-color: var(--faaw7-color-border-hover);
      transition: border-color .3s;
    }
    :host(:not([disabled])) label:hover::before {
      opacity: 1;
      transition: opacity .3s;
    }

    :host(:not([disabled])) label:active {
      border-color: var(--faaw7-color-border-active);
      transition: border-color .3s;
    }
    :host(:not([disabled])) label:active::after {
      opacity: 1;
      transition: opacity .3s;
    }

    label:focus-within {
      outline: 1px dotted #000;
      outline-offset: -4px;
    }

    label.faaw7-btn-default {
      animation: faaw7-pulse-anim 1s ease infinite alternate;
      background-image: var(--faaw7-gradient-bg-hover);
      border-color: #5586a3;
    }

    @keyframes faaw7-pulse-anim {
      0% {
        box-shadow: inset 0 0 3px 1px #34deffdd;
      }
      to {
        box-shadow: inset 0 0 1px 1px #34deffdd;
      }
    }
    
    input[type=file] {
      display: none;
    }
  `];

  render() {
    const classes = {
      'faaw7-btn-default': this.default
    };

    return html`
      <label for=${this._id} class=${classMap(classes)} role="button" part="button">
        <slot></slot>
        <input 
          id=${this._id}
          type="file"
          accept=${this.accept}
          ?multiple=${this.multiple}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        >
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-file-button': Faaw7FileButton;
  }
}