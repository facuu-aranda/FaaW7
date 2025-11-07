import { LitElement, html, css } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-select')
export class Faaw7Select extends LitElement {
  static formAssociated = true;
  private internals: ElementInternals;

  @property({ type: String }) value = '';
  @property({ type: String }) name: string | undefined = undefined;
  @property({ type: Boolean, reflect: true }) disabled = false;

  constructor() {
    super();
    this.internals = this.attachInternals();
    // 1. Soluciona el error de accesibilidad (A11y)
    this.internals.role = 'listbox';
  }

  private get _select(): HTMLSelectElement | null {
    return this.shadowRoot?.querySelector('select') ?? null;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.internals.setFormValue(this.value);

    // 2. Soluciona el crash del polyfill (duplicate attribute)
    // Pasamos el aria-label al host (manejado por ElementInternals)
    // en lugar de al <select> interno (manejado por Lit).
    const label = this.getAttribute('aria-label');
    if (label) {
      this.internals.ariaLabel = label;
    }
  }

  protected firstUpdated(): void {
    this._onSlotChange();
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('value')) {
      this.internals.setFormValue(this.value);
      if (this._select && this._select.value !== this.value) {
        this._select.value = this.value;
      }
    }
  }

  private _onSlotChange() {
    if (this._select && this._select.value !== this.value) {
      this._select.value = this.value;
    }
  }

  private _handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.internals.setFormValue(this.value);
    this.dispatchEvent(
      new CustomEvent('faaw7-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true
      })
    );
  }

  static styles = [
    defaultTheme,
    css`
      :host {
        display: inline-block;
        position: relative;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGF0GgZD0iTTExIDZINHYxaDF2MWgxdjFoMXYxaDFWOWgxVjhoMVY3aDFWNloiIGZpbGw9IiMwMDAiLz48L3N2Zz4=") no-repeat 100% 50%, var(--faaw7-gradient-bg);
        background-size: 16px 17px, auto;
        border: 1px solid var(--faaw7-color-border);
        padding: 4px 28px 4px 6px;
        font: inherit;
        color: var(--faaw7-color-text);
        border-radius: var(--faaw7-border-radius);
        min-height: 22px;
        box-shadow: var(--faaw7-shadow-inset);
        cursor: pointer;
      }

      select:not(:disabled):hover {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGF0GgZD0iTTExIDZINHYxaDF2MWgxdjFoMXYxaDFWOWgxVjhoMVY3aDFWNloiIGZpbGw9IiMwMDAiLz48L3N2Zz4="), var(--faaw7-gradient-bg-hover);
        border-color: var(--faaw7-color-border-hover);
      }

      select:not(:disabled):active {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGF0GgZD0iTTExIDZINHYxaDF2MWgxdjFoMXYxaDFWOWgxVjhoMVY3aDFWNloiIGZpbGw9IiMwMDAiLz48L3N2Zz4="), var(--faaw7-gradient-bg-active);
        border-color: var(--faaw7-color-border-active);
        box-shadow: var(--faaw7-shadow-inset-active);
        outline: none;
      }

      select:not(:disabled):focus {
        box-shadow: inset 0 0 0 2px #98d1ef, var(--faaw7-shadow-inset);
        outline: 1px dotted #000;
        outline-offset: -4px;
      }

      select:disabled {
        background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGF0GgZD0iTTExIDZINHYxaDF2MWgxdjFoMXYxaDFWOWgxVjhoMVY3aDFWNloiIGZpbGw9IiNhZmFmYWYiLz48L3N2Zz4=") no-repeat 100% 50%, var(--faaw7-gradient-bg-disabled);
        border-color: var(--faaw7-color-border-disabled);
        color: var(--faaw7-color-text-disabled);
        opacity: 1;
        cursor: not-allowed;
      }
    `
  ];

  render() {
    return html`
      <select
        part="select"
        name=${ifDefined(this.name)}
        .value=${this.value}
        ?disabled=${this.disabled}
        @change=${this._handleChange}
      >
        <slot @slotchange=${this._onSlotChange}></slot>
      </select>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-select': Faaw7Select;
  }
}