import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

let uniqueId = 0;

@customElement('faaw7-tab')
export class Faaw7Tab extends LitElement {

  private _id = `faaw7-tab-${uniqueId++}`;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  panel = '';

  @property({ type: String, attribute: 'aria-controls' })
  ariaControls = '';

  @property({ type: Number, attribute: 'tabindex' })
  customTabindex = -1;
  
  firstUpdated() {
    this.setAttribute('id', this.id || this._id);
  }

  focus() {
    this.shadowRoot?.querySelector('button')?.focus();
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
      --faaw7-tab-bg: var(--faaw7-color-surface);
    }
    :host([active]) {
      --faaw7-tab-bg: #fff;
    }

    button {
      background: var(--faaw7-gradient-bg);
      border: 1px solid var(--faaw7-color-border);
      border-radius: 0;
      box-shadow: var(--faaw7-shadow-inset);
      box-sizing: border-box;
      color: var(--faaw7-color-text);
      font: var(--faaw7-font-family);
      min-height: 23px;
      min-width: unset;
      padding: 2px 6px;
      position: relative;
      text-align: center;
      z-index: 1;
      cursor: default;
      width: 100%;
    }

    button:before {
      background: var(--faaw7-gradient-bg-hover);
      border-radius: 0;
      box-shadow: var(--faaw7-shadow-inset);
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
    
    button:after {
      content: none;
    }

    :host(:not([active])) button:not(:disabled):hover {
      border-color: var(--faaw7-color-border-hover);
      transition: border-color .3s;
    }

    :host(:not([active])) button:not(:disabled):hover:before {
      opacity: 1;
      transition: opacity .3s;
    }

    :host([active]) button {
      background: var(--faaw7-tab-bg);
      border-bottom: 0;
      box-shadow: none;
      margin: -2px 0 1px -3px;
      padding-bottom: 4px;
      position: relative;
      z-index: 8;
    }

    :host([active]) button:after,
    :host([active]) button:before {
      content: none;
    }

    :host([active]) button:hover {
      border-color: var(--faaw7-color-border);
    }
    
    button:focus-visible {
      outline: 1px dotted #222;
      outline-offset: -4px;
    }

    :host([disabled]) button {
      opacity: .6;
      background: var(--faaw7-gradient-bg);
      color: var(--faaw7-color-text-disabled);
      cursor: not-allowed;
    }
  `];

  render() {
    return html`
      <button
        id=${this.id || this._id}
        role="tab"
        tabindex=${this.customTabindex}
        ?disabled=${this.disabled}
        aria-selected=${this.active}
        aria-controls=${this.ariaControls}
        part="button"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-tab': Faaw7Tab;
  }
}