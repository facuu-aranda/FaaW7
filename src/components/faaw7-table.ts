import { LitElement, html } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tableStyles } from './faaw7-table.css.js';

const styleId = 'faaw7-table-styles';

@customElement('faaw7-table')
export class Faaw7Table extends LitElement {

  @property({ type: Boolean, attribute: 'has-shadow' })
  hasShadow = false;
  
  @property({ type: Boolean, reflect: true, attribute: 'scrollable' })
  scrollable = false;

  @property({ type: String })
  height = 'auto';

  connectedCallback() {
    super.connectedCallback();
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.textContent = tableStyles.cssText;
      document.head.appendChild(styleTag);
    }
  }

  protected createRenderRoot() {
    return this;
  }
  
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('scrollable')) {
      this.classList.toggle('scrollable', this.scrollable);
    }
    if (changedProperties.has('hasShadow')) {
      this.classList.toggle('faaw7-has-shadow', this.hasShadow);
    }
   if (changedProperties.has('height') || changedProperties.has('scrollable')) {
    this.style.height = this.scrollable ? this.height : 'auto';
  }
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-table': Faaw7Table;
  }
}