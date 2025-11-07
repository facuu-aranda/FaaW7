import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { fieldsetStyles } from './faaw7-fieldset.css.js';

const styleId = 'faaw7-fieldset-styles';

@customElement('faaw7-fieldset')
export class Faaw7Fieldset extends LitElement {

  connectedCallback() {
    super.connectedCallback();
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.textContent = fieldsetStyles.cssText;
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
    'faaw7-fieldset': Faaw7Fieldset;
  }
}