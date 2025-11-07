import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-icon-button')
export class Faaw7IconButton extends LitElement {

  @property({ type: Boolean, reflect: true })
  disabled = false;
  @property({ type: String })
  iconUrl = '';
  
  @property({ type: String })
  iconHoverUrl = '';
  @property({ type: String })
  iconActiveUrl = '';

  // --- CORRECCIÓN AQUÍ ---
  // Cambiado de 'string | undefined = undefined' a 'string | null = null'
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string | null = null;

  static styles = [
    defaultTheme,
    css`
    button {
      background: var(--faaw7-gradient-bg);
      border: 1px solid var(--faaw7-color-border);
      border-radius: var(--faaw7-border-radius);
      box-shadow: var(--faaw7-shadow-inset);
      box-sizing: border-box;
      font: var(--faaw7-font-family);
      min-height: 23px;
      min-width: 23px;
      padding: 0;
      position: relative;
      z-index: 0;
      cursor: default;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 14px;
    }
    
    button:before {
      background: var(--faaw7-gradient-bg-hover);
      border-radius: var(--faaw7-border-radius);
      box-shadow: var(--faaw7-shadow-inset);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 14px;
    }

    button:after,
    button:before {
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
      background: var(--faaw7-gradient-bg-active);
      border-radius: 2px;
      box-shadow: var(--faaw7-shadow-inset-active);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 14px;
    }

    button:disabled {
      background: var(--faaw7-gradient-bg-disabled);
      border-color: var(--faaw7-color-border-disabled);
      color: var(--faaw7-color-text-disabled);
      cursor: not-allowed;
    }

    button:not(:disabled):hover {
      border-color: var(--faaw7-color-border-hover);
      transition: border-color .3s;
    }
    button:not(:disabled):hover:before {
      opacity: 1;
      transition: opacity .3s;
    }
    button:not(:disabled):not(:hover) {
      border-color: var(--faaw7-color-border);
      transition: border-color 1s linear;
    }
    button:not(:disabled):not(:hover):before {
      opacity: 0;
      transition: opacity 1s linear;
    }

    button:not(:disabled):active {
      border-color: var(--faaw7-color-border-active);
      transition: border-color .3s;
    }
    button:not(:disabled):active:after {
      opacity: 1;
      transition: opacity .3s;
    }

    button:focus-visible {
      outline: 1px dotted #000;
      outline-offset: -4px;
    }
  `];

  render() {
    const iconUrl = this.iconUrl || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggc3Ryb2tlPSIjMjA3MGI5IiBkPSJNMTAuNSAxQzguMDIgMSA2IDMuMDIgNiA1LjVhNC40NSA0LjQ1IDAgMCAwIDEgMi43OTNMMi4wMjMgMTMuMjdsLjcwNC43MUw3LjcwNyA5Yy43Ny42MTcgMS43MzQgMSAyLjc5MyAxIDIuNDggMCA0LjUtMi4wMiA0LjUtNC41UzEyLjk4IDEgMTAuNSAxWm0wIDFDMTIuNDM4IDIgMTQgMy41NjMgMTQgNS41IDE0IDcuNDM4IDEyLjQzNyA5IDEwLjUgOUEzLjQ5NCAzLjQ5NCAwIDAgMSA3IDUuNUM3IDMuNTYyIDguNTYzIDIgMTAuNSAyWiIvPjwvc3ZnPg==';
    const iconHoverUrl = this.iconHoverUrl || iconUrl;
    const iconActiveUrl = this.iconActiveUrl || iconUrl;

    return html`
      <button 
        ?disabled=${this.disabled}
        role="button"
        aria-label=${ifDefined(this.ariaLabel)}
        style="background-image: var(--icon-url), var(--faaw7-gradient-bg);"
        part="button"
      >
      </button>
      <style>
        button { --icon-url: url(${iconUrl}); }
        button:before { background-image: var(--icon-hover-url), var(--faaw7-gradient-bg-hover); --icon-hover-url: url(${iconHoverUrl}); }
        button:after { background-image: var(--icon-active-url), var(--faaw7-gradient-bg-active); --icon-active-url: url(${iconActiveUrl}); }
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-icon-button': Faaw7IconButton;
  }
}