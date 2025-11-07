import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

let uniqueId = 0;

@customElement('faaw7-tab-panel')
export class Faaw7TabPanel extends LitElement {

  private _id = `faaw7-panel-${uniqueId++}`;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: String })
  name = '';

  @property({ type: String, attribute: 'aria-labelledby' })
  ariaLabelledby = '';

  firstUpdated() {
    this.setAttribute('id', this.id || this._id);
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: none;
      --faaw7-tab-bg: #fff;
      background: var(--faaw7-tab-bg);
      border: 1px solid var(--faaw7-color-border);
      clear: both;
      padding: 14px;
      position: relative;
      z-index: 2;
    }

    :host([active]) {
      display: block;
    }
    
    :host(:focus-visible) {
      outline: 1px dotted #000;
      outline-offset: -4px;
    }
    
    .panel-content {
      font: var(--faaw7-font-family);
      color: var(--faaw7-color-text);
    }
  `];

  render() {
    return html`
      <div
        class="panel-content"
        role="tabpanel"
        tabindex=${this.active ? 0 : -1}
        aria-labelledby=${this.ariaLabelledby}
        part="panel"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-tab-panel': Faaw7TabPanel;
  }
}