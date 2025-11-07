import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-button')
export class Faaw7Button extends LitElement {

  @property({ type: Boolean })
  default = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  static styles = [
    defaultTheme,
    css`
      :host {
        display: inline-block;
      }

      button {
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

      button::before {
        background: var(--faaw7-gradient-bg-hover);
        border-radius: var(--faaw7-border-radius);
        box-shadow: var(--faaw7-shadow-inset);
      }

      button::after,
      button::before {
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

      button::after {
        background: var(--faaw7-gradient-bg-active);
        border-radius: 2px;
        box-shadow: var(--faaw7-shadow-inset-active);
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
      button:not(:disabled):hover::before {
        opacity: 1;
        transition: opacity .3s;
      }
      button:not(:disabled):not(:hover) {
        border-color: var(--faaw7-color-border);
        transition: border-color 1s linear;
      }
      button:not(:disabled):not(:hover)::before {
        opacity: 0;
        transition: opacity 1s linear;
      }

      button:not(:disabled):active {
        border-color: var(--faaw7-color-border-active);
        transition: border-color .3s;
      }
      button:not(:disabled):active::after {
        opacity: 1;
        transition: opacity .3s;
      }

      button:focus-visible {
        outline: 1px dotted #000;
        outline-offset: -4px;
      }

      button.faaw7-btn-default {
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
    `
  ];

  render() {
    const classes = {
      'faaw7-btn-default': this.default
    };

    return html`
      <button 
        class=${classMap(classes)} 
        ?disabled=${this.disabled}
        role="button"
        part="button"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-button': Faaw7Button;
  }
}