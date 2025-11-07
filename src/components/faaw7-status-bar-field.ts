import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-status-bar-field')
export class Faaw7StatusBarField extends LitElement {
  
  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
      border-right: 1px solid #cfcfcf;
      flex-grow: 1;
      margin: 0;
      padding: 2px 3px;
      font: var(--faaw7-font-family);
      color: var(--faaw7-color-text);
      user-select: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    :host(:last-child) {
      border-right: 0;
    }
    
    :host([fixed]) {
      flex-grow: 0;
    }
  `];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-status-bar-field': Faaw7StatusBarField;
  }
}