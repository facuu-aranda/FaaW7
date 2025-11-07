import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { accordionStyles } from './faaw7-accordion.css.js';

const styleId = 'faaw7-accordion-styles';

@customElement('faaw7-accordion')
export class Faaw7Accordion extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.textContent = accordionStyles.cssText;
      document.head.appendChild(styleTag);
    }
  }

  protected createRenderRoot() {
    return this;
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-accordion': Faaw7Accordion;
  }
}