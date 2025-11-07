import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { disclosureStyles } from './faaw7-disclosure.css.js';

const styleId = 'faaw7-disclosure-styles';

@customElement('faaw7-disclosure')
export class Faaw7Disclosure extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.textContent = disclosureStyles.cssText;
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
    'faaw7-disclosure': Faaw7Disclosure;
  }
}