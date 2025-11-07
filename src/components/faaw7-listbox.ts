import { LitElement, html } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { listboxStyles } from './faaw7-listbox.css.js';

const styleId = 'faaw7-listbox-styles';

@customElement('faaw7-listbox')
export class Faaw7Listbox extends LitElement {

  @property({ type: Boolean, attribute: 'has-shadow' })
  hasShadow = false;
  @property({ type: Boolean, attribute: 'has-hover' })
  hasHover = true;

  @property({ type: Boolean })
  multiple = false;

  private _options: HTMLElement[] = [];
  private _activeIndex = 0;

  connectedCallback() {
    super.connectedCallback();
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.textContent = listboxStyles.cssText;
      document.head.appendChild(styleTag);
    }
    
    this.setAttribute('role', 'listbox');
    this.setAttribute('tabindex', '0');
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  protected createRenderRoot() {
    return this;
  }

  protected firstUpdated(): void {
    this._handleSlotChange();
  }

  private _handleSlotChange() {
    this._options = Array.from(this.querySelectorAll('[role="option"]'));
    this._options.forEach((opt, index) => {
      opt.setAttribute('id', `${this.id || 'opt'}-${index}`);
      opt.setAttribute('tabindex', '-1');
    });

    const selectedIndex = this._options.findIndex(
      opt => opt.getAttribute('aria-selected') === 'true'
    );
    this._activeIndex = selectedIndex > -1 ? selectedIndex : 0;
    
    if (!this.multiple && selectedIndex === -1) {
      this._options[this._activeIndex]?.setAttribute('aria-selected', 'true');
    }

    this._options[this._activeIndex]?.setAttribute('tabindex', '0');
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (this._options.length === 0) return;

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        this._setActiveOption(this._activeIndex - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        this._setActiveOption(this._activeIndex + 1);
        break;
      case 'Home':
        e.preventDefault();
        this._setActiveOption(0);
        break;
      case 'End':
        e.preventDefault();
        this._setActiveOption(this._options.length - 1);
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        this._toggleSelection(this._activeIndex);
        break;
    }
  }

  private _handleClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const optionIndex = this._options.indexOf(target);

    if (optionIndex > -1) {
      this._setActiveOption(optionIndex);
      this._toggleSelection(optionIndex);
    }
  }

  private _setActiveOption(index: number) {
    if (index < 0) {
      index = this._options.length - 1;
    }
    if (index >= this._options.length) {
      index = 0;
    }

    const currentActive = this._options[this._activeIndex];
    const newActive = this._options[index];

    if (currentActive) {
      currentActive.setAttribute('tabindex', '-1');
    }
    
    if (newActive) {
      newActive.setAttribute('tabindex', '0');
      newActive.focus();
      this.setAttribute('aria-activedescendant', newActive.id);
    }

    this._activeIndex = index;
  }

  private _toggleSelection(index: number) {
    const target = this._options[index];
    if (!target) return;

    if (this.multiple) {
      const selected = target.getAttribute('aria-selected') === 'true';
      target.setAttribute('aria-selected', selected ? 'false' : 'true');
    } else {
      this._options.forEach(opt => opt.setAttribute('aria-selected', 'false'));
      target.setAttribute('aria-selected', 'true');
    }
    this.dispatchEvent(new CustomEvent('faaw7-change'));
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('hasShadow')) {
      this.classList.toggle('faaw7-has-shadow', this.hasShadow);
    }
    if (changedProperties.has('hasHover')) {
      this.classList.toggle('faaw7-has-hover', this.hasHover);
    }
    if (changedProperties.has('multiple')) {
      this.setAttribute('aria-multiselectable', this.multiple ? 'true' : 'false');
    }
  }

  render() {
    return html`
      <slot @slotchange=${this._handleSlotChange} @click=${this._handleClick}></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-listbox': Faaw7Listbox;
  }
}