import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';
import './faaw7-status-bar-field.ts';

@customElement('faaw7-status-bar')
export class Faaw7StatusBar extends LitElement {

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
      --faaw7-w-space: 6px;
    }
    
    .status-bar-container {
      background: var(--faaw7-color-surface);
      border: 1px solid var(--faaw7-color-border-disabled);
      border-top: 0;
      box-shadow: 0 1px 0 #fff9, 1px 0 0 #fff9, -1px 0 0 #fff9;
      display: flex;
      margin: var(--faaw7-w-space);
      margin-top: calc(var(--faaw7-w-space) * -1);
    }
  `];

  render() {
    return html`
      <div class="status-bar-container" role="toolbar" part="container">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-status-bar': Faaw7StatusBar;
  }
}