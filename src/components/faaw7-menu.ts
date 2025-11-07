import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';
import { Faaw7MenuItem } from './faaw7-menu-item.js';

@customElement('faaw7-menu')
export class Faaw7Menu extends LitElement {

  @property({ type: Boolean, reflect: true })
  menubar = false;
  
  @state()
  private _items: Faaw7MenuItem[] = [];

  private _activeIndex = 0;
  private _openItem: Faaw7MenuItem | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._handleKeyDown);
    this.addEventListener('click', this._handleClick);
    this.addEventListener('focusin', this._handleFocusIn);
    this.addEventListener('mouseover', this._handleMouseOver);
  }

  private _handleSlotChange() {
    this._items = (this.shadowRoot?.querySelector('slot') as HTMLSlotElement)
      .assignedElements({ flatten: true }) as Faaw7MenuItem[];
    
    this._items.forEach((item) => {
      item.tabIndex = -1;
    });
    
    this.focusFirstItem();
  }
  
  private _handleFocusIn(e: FocusEvent) {
    const target = e.target as Faaw7MenuItem;
    if (this._items.includes(target)) {
      this._activeIndex = this._items.indexOf(target);
    }
  }

  private _handleMouseOver(e: MouseEvent) {
    const target = (e.target as Element).closest('faaw7-menu-item');
    if (target && this._items.includes(target) && !target.disabled) {
      this._setFocus(this._items.indexOf(target));
      if (this._openItem && this._openItem !== target) {
        this._openItem.open = false;
      }
      if (target.hasSubmenu) {
        this._openItem = target;
        target.open = true;
      }
    }
  }

  private _handleClick(e: MouseEvent) {
    const target = (e.target as Element).closest('faaw7-menu-item');
    if (target && this._items.includes(target) && !target.disabled) {
      if (target.hasSubmenu) {
        if (target.open) {
          target.open = false;
          this._openItem = null;
        } else {
          this._openItem = target;
          target.open = true;
          target.focusSubMenu();
        }
      } else {
        this._dispatchCloseAll();
      }
    }
  }

  private _handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        this._setFocus(this._activeIndex - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        this._setFocus(this._activeIndex + 1);
        break;
      case 'Home':
        e.preventDefault();
        this._setFocus(0);
        break;
      case 'End':
        e.preventDefault();
        this._setFocus(this._items.length - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        const currentItem = this._items[this._activeIndex];
        if (currentItem.hasSubmenu) {
          this._openItem = currentItem;
          currentItem.open = true;
          currentItem.focusSubMenu();
        }
        break;
      case 'ArrowLeft':
      case 'Escape':
        e.preventDefault();
        this.dispatchEvent(new CustomEvent('faaw7-close-submenu', { bubbles: true, composed: true }));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        this._items[this._activeIndex].click();
        break;
    }
  }
  
  focusFirstItem() {
    this._setFocus(0);
  }
  
  private _setFocus(index: number) {
    if (index < 0) index = this._items.length - 1;
    if (index >= this._items.length) index = 0;

    if (this._items[this._activeIndex]) {
      this._items[this._activeIndex].tabIndex = -1;
    }
    this._activeIndex = index;
    if (this._items[this._activeIndex]) {
      this._items[this._activeIndex].tabIndex = 0;
      this._items[this._activeIndex].focus();
    }
  }

  private _dispatchCloseAll() {
    this.dispatchEvent(new CustomEvent('faaw7-close-all', { bubbles: true, composed: true }));
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
      list-style: none;
      margin: 0;
      padding: 0;
      --faaw7-mn-left: 28px;
    }

    .menu-container {
      cursor: default;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    :host(:not([menubar])) .menu-container {
      background: var(--faaw7-color-surface);
      border: 1px solid #0006;
      box-shadow: 4px 4px 3px -2px #00000080;
      color: var(--faaw7-color-text);
      min-width: 150px;
      padding: 2px;
      position: relative;
    }

    :host(:not([menubar])) .menu-container::before {
      box-shadow: inset 1px 0 #00000026, inset -1px 0 #fff;
      content: "";
      height: calc(100% - 4px);
      left: var(--faaw7-mn-left);
      pointer-events: none;
      position: absolute;
      width: 2px;
    }
    
    :host([menubar]) .menu-container {
      background: linear-gradient(#fff 20%, #f1f4fa 25%, #f1f4fa 43%, #d4dbee 48%, #e6eaf6);
      display: flex;
    }
    
    :host([menubar]) ::slotted(faaw7-menu-item) {
      padding: 6px 10px;
      position: relative;
    }
    
    :host([menubar]) ::slotted(faaw7-menu-item[open]),
    :host([menubar]) ::slotted(faaw7-menu-item:focus),
    :host([menubar]) ::slotted(faaw7-menu-item:focus-within),
    :host([menubar]) ::slotted(faaw7-menu-item:hover) {
      background: var(--faaw7-color-highlight-bg);
      color: var(--faaw7-color-highlight-text);
      outline: none;
    }
    
    :host([menubar]) ::slotted(faaw7-menu-item[open]) > ::slotted(faaw7-menu) {
      display: block;
      left: 0;
      top: 100%;
      position: absolute;
      z-index: 99;
    }
  `];

  render() {
    return html`
      <ul 
        class="menu-container" 
        role=${this.menubar ? 'menubar' : 'menu'} 
        part="menu-container"
        @faaw7-close-submenu=${(e: Event) => (e.target as Faaw7MenuItem).open = false}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-menu': Faaw7Menu;
  }
}