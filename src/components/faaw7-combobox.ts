import { LitElement, html, css } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultTheme } from '../theme/default.css.js';
import './faaw7-textfield.ts';
import './faaw7-icon-button.ts';
import './faaw7-menu.ts';

const downArrowIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+';

@customElement('faaw7-combobox')
export class Faaw7Combobox extends LitElement {

  static formAssociated = true;
  private internals: ElementInternals;

  @property({ type: String })
  value = '';
  @property({ type: String })
  name: string | undefined = undefined;

  @property({ type: String })
  placeholder = '';

  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string | null = null;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  open = false;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this._handleClickAway);
    this.internals.setFormValue(this.value);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleClickAway);
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('value')) {
      this.internals.setFormValue(this.value);
    }
  }

  private _handleClickAway = (e: MouseEvent) => {
    if (this.open && !e.composedPath().includes(this)) {
      this.open = false;
    }
  };
  
  private _handleInput(e: CustomEvent) {
    this.value = e.detail.value;
    this.internals.setFormValue(this.value);
    
    this.dispatchEvent(new CustomEvent('faaw7-input', {
      detail: { value: this.value },
      bubbles: true, composed: true
    }));
  }

  private _toggleOpen() {
    if (!this.disabled) {
      this.open = !this.open;
    }
  }

  private _handleSelect(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const value = target.textContent?.trim() || '';
    this.value = value;
    this.internals.setFormValue(this.value);
    this.open = false;
    
    this.dispatchEvent(new CustomEvent('faaw7-change', {
      detail: { value: this.value },
      bubbles: true, composed: true
    }));
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: inline-block;
      position: relative;
      width: 200px;
    }

    faaw7-textfield {
      width: 100%;
    }
    
    faaw7-textfield::part(input) {
      padding-right: 18px;
    }

    faaw7-icon-button {
      position: absolute;
      right: 1px;
      top: 1px;
    }
    
    faaw7-icon-button::part(button) {
      min-height: 21px;
      min-width: 16px;
      border-radius: 0 var(--faaw7-border-radius) var(--faaw7-border-radius) 0;
      border-left: none;
    }
    
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 10;
      margin-top: 1px;
    }
    
    :host([open]) .dropdown-menu {
      display: block;
    }
  `];

render() {
    return html`
      <faaw7-textfield
        type="text"
        .value=${this.value}
        placeholder=${ifDefined(this.placeholder)}
        ?disabled=${this.disabled}
        @faaw7-change=${this._handleInput}
        aria-label=${ifDefined(this.ariaLabel)}
        exportparts="input"
      ></faaw7-textfield>
      
      <faaw7-icon-button
        aria-label="Toggle dropdown"
        .iconUrl=${downArrowIcon}
        ?disabled=${this.disabled}
        @click=${this._toggleOpen}
        exportparts="button"
      ></faaw7-icon-button>
      
      <div class="dropdown-menu" @click=${this._handleSelect} part="menu">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-combobox': Faaw7Combobox;
  }
}