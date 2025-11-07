import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';
import { Faaw7MenuItem } from './faaw7-menu-item.js';

import './faaw7-menu.ts';
import './faaw7-menu-item.ts';

@customElement('faaw7-menu-bar')
export class Faaw7MenuBar extends LitElement {
  
  @state()
  private _items: Faaw7MenuItem[] = [];

  private _activeIndex = -1;
  private _openMenuProperty: Faaw7MenuItem | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._handleKeyDown);
    this.addEventListener('click', this._handleClick);
    this.addEventListener('focusin', this._handleFocusIn);
    document.addEventListener('click', this._handleDocumentClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleDocumentClick);
  }

  private _handleDocumentClick = (e: MouseEvent) => {
    if (this._openMenuProperty && !e.composedPath().includes(this)) {
      this._closeMenu();
    }
  };
  
  private _handleSlotChange() {
    this._items = (this.shadowRoot?.querySelector('slot') as HTMLSlotElement)
      .assignedElements({ flatten: true }) as Faaw7MenuItem[];
    
    this._items.forEach((item, index) => {
      item.tabIndex = (index === 0) ? 0 : -1;
    });
    this._activeIndex = 0;
  }

  private _handleFocusIn(e: FocusEvent) {
    const target = e.target as Faaw7MenuItem;
    if (this._items.includes(target)) {
      this._activeIndex = this._items.indexOf(target);
    }
  }

  private _handleClick(e: MouseEvent) {
    const target = (e.target as Element).closest('faaw7-menu-item');
    if (target && this._items.includes(target)) {
      if (this._openMenuProperty === target) {
        this._closeMenu();
      } else {
        this._setOpenMenu(target);
      }
    }
  }

  private _handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        this._setFocus(this._activeIndex + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        this._setFocus(this._activeIndex - 1);
        break;
      case 'Home':
        e.preventDefault();
        this._setFocus(0);
        break;
      case 'End':
        e.preventDefault();
        this._setFocus(this._items.length - 1);
        break;
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        e.preventDefault();
        if (this._openMenuProperty) {
          this._openMenuProperty.focusSubMenu();
        } else {
          this._setOpenMenu(this._items[this._activeIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        this._closeMenu();
        break;
    }
  }
  
  private _setFocus(index: number) {
    if (index < 0) index = this._items.length - 1;
    if (index >= this._items.length) index = 0;

    this._items[this._activeIndex].tabIndex = -1;
    this._activeIndex = index;
    this._items[this._activeIndex].tabIndex = 0;
    this._items[this._activeIndex].focus();

    if (this._openMenuProperty) {
      this._setOpenMenu(this._items[this._activeIndex]);
    }
  }

  private _closeMenu() {
    if (this._openMenuProperty) {
      this._openMenuProperty.open = false;
      this._openMenuProperty.focus();
      this._openMenuProperty = null;
    }
  }
  
  private _setOpenMenu(item: Faaw7MenuItem) {
    if (this._openMenuProperty) {
      this._openMenuProperty.open = false;
    }
    this._openMenuProperty = item;
    if (this._openMenuProperty) {
      this._openMenuProperty.open = true;
      this._openMenuProperty.focusSubMenu();
    }
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
    }
  `];

  render() {
    return html`
      <faaw7-menu menubar part="menubar" @faaw7-close-all=${this._closeMenu}>
        <slot @slotchange=${this._handleSlotChange}></slot>
      </faaw7-menu>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-menu-bar': Faaw7MenuBar;
  }
}