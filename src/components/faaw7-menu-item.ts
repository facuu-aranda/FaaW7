import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';
import { Faaw7Menu } from './faaw7-menu.js';

@customElement('faaw7-menu-item')
export class Faaw7MenuItem extends LitElement {

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  divider = false;
  
  @property({ type: Boolean, reflect: true, attribute: 'has-submenu' })
  hasSubmenu = false;
  
  @property({ type: String })
  icon = '';
  
  @property({ type: Boolean, reflect: true })
  open = false;

  private _submenu: Faaw7Menu | null = null;

  firstUpdated() {
    this.setAttribute('role', this.divider ? 'separator' : 'menuitem');
    if (!this.divider) {
      this.tabIndex = -1;
    }
    const slot = this.shadowRoot?.querySelector('slot[name="submenu"]') as HTMLSlotElement;
    this._submenu = slot.assignedElements({ flatten: true })[0] as Faaw7Menu;
    this.hasSubmenu = !!this._submenu;
  }

  focus() {
    (this.shadowRoot?.querySelector('.menu-item-content') as HTMLElement)?.focus();
  }

  focusSubMenu() {
    if (this._submenu) {
      this._submenu.focusFirstItem();
    }
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
      position: relative;
      --faaw7-mn-left: 28px;
    }
    
    .menu-item-content {
      all: unset;
      border: 1px solid transparent;
      border-radius: 3px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 4px 10px 4px var(--faaw7-mn-left);
      position: relative;
      white-space: nowrap;
      width: 100%;
      cursor: default;
      color: var(--faaw7-color-text);
      font: var(--faaw7-font-family);
    }
    
    :host(:not([disabled]):focus) .menu-item-content,
    :host(:not([disabled])) .menu-item-content:hover {
      background: var(--faaw7-color-highlight-bg-light);
      border-color: var(--faaw7-color-highlight-border);
    }

    :host([has-submenu]) .menu-item-content::after {
      border: 4px solid transparent;
      border-left-color: currentcolor;
      content: "";
      position: absolute;
      right: 2px;
      top: 50%;
      transform: translateY(-50%);
    }

    :host([disabled]) {
      opacity: .5;
      pointer-events: none;
    }

    :host([divider])::after {
      box-shadow: inset 0 1px #00000026, inset 0 -1px #fff;
      content: "";
      display: block;
      height: 2px;
      margin: 3px 0 2px;
      margin-left: var(--faaw7-mn-left);
      pointer-events: none;
    }

    .icon {
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }

    ::slotted(faaw7-menu) {
      display: none;
      left: 100%;
      top: -4px;
      position: absolute;
    }

    :host([open]) > ::slotted(faaw7-menu) {
      display: block;
    }
  `];

  render() {
    if (this.divider) {
      return html``;
    }

    return html`
      <div 
        class="menu-item-content" 
        tabindex="-1"
        ?aria-haspopup=${this.hasSubmenu}
        aria-expanded=${this.open}
        part="menu-item"
      >
        ${this.icon ? html`<img src=${this.icon} class="icon" alt="" part="icon" />` : ''}
        <slot></slot>
      </div>
      <slot name="submenu"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-menu-item': Faaw7MenuItem;
  }
}