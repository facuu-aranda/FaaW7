import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-toast')
export class Faaw7Toast extends LitElement {

  @property({ type: Number })
  duration = 3000;

  connectedCallback() {
    super.connectedCallback();
    if (this.duration > 0) {
      setTimeout(() => this.remove(), this.duration);
    }
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
    }

    .faaw7-toast {
      background: var(--faaw7-color-surface);
      border: 1px solid var(--faaw7-color-border);
      padding: 10px 15px;
      border-radius: var(--faaw7-border-radius);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      animation: faaw7-toast-fadein 0.3s;
      margin-top: 10px;
      font: var(--faaw7-font-family);
      color: var(--faaw7-color-text);
    }

    @keyframes faaw7-toast-fadein {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `];

  render() {
    return html`
      <div class="faaw7-toast" role="status" aria-live="polite" part="toast">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-toast': Faaw7Toast;
  }
}