import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

import './faaw7-menu.ts';
import './faaw7-menu-item.ts';

@customElement('faaw7-context-menu')
export class Faaw7ContextMenu extends LitElement {

  @property({ type: Boolean, reflect: true })
  open = false;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleClickAway);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleClickAway);
  }

  private _handleClickAway = (e: MouseEvent) => {
    if (this.open && !e.composedPath().includes(this)) {
      this.hide();
    }
  };

  public show(x: number, y: number) {
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
    this.open = true;
  }

  public hide() {
    this.open = false;
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: none;
      position: fixed;
      z-index: 1000;
    }

    :host([open]) {
      display: block;
    }
  `];

  render() {
    return html`
      <faaw7-menu @click=${this.hide} part="menu-container">
        <slot></slot>
      </faaw7-menu>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-context-menu': Faaw7ContextMenu;
  }
}