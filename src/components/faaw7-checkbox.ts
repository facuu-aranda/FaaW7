import { LitElement, html, css } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultTheme } from '../theme/default.css.js';

let uniqueId = 0;

@customElement('faaw7-checkbox')
export class Faaw7Checkbox extends LitElement {

  static formAssociated = true;
  private internals: ElementInternals;

  private _id = `faaw7-checkbox-${uniqueId++}`;

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  value: string | undefined = 'on';

  @property({ type: String })
  name: string | undefined = undefined;

  @property({ type: String })
label = '';

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.internals.setFormValue(this.checked ? (this.value ?? 'on') : null);
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('checked') || changedProperties.has('value')) {
      this.internals.setFormValue(this.checked ? (this.value ?? 'on') : null);
    }
  }

  private _handleChange(e: Event) {
    if (this.disabled) return;
    
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;

    this.internals.setFormValue(this.checked ? (this.value ?? 'on') : null); 

    this.dispatchEvent(new CustomEvent('faaw7-change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    })); 
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: inline-block;
      --faaw7-cb-size: 14px;
    }

    input[type=checkbox] {
      display: none;
    }

    label {
      align-items: center;
      display: inline-flex;
      font: var(--faaw7-font-family);
      position: relative;
      cursor: default;
      user-select: none;
    }

    label:before {
      background: var(--faaw7-color-surface-light);
      border: 1px solid var(--faaw7-color-border);
      box-shadow: inset 0 0 0 1px var(--faaw7-gradient-bg-disabled), inset 1px 1px 0 1px var(--faaw7-color-border-inset), inset -1px -1px 0 1px #ddd, inset 3px 3px 6px #ccc;
      box-sizing: border-box;
      content: "";
      display: inline-block;
      height: var(--faaw7-cb-size);
      margin-right: 6px;
      transition: .4s;
      width: var(--faaw7-cb-size);
    }

    :host(:not([disabled])) label:hover:before {
      background: var(--faaw7-color-surface-hover);
      border-color: var(--faaw7-color-border-hover);
      box-shadow: inset 0 0 0 1px #def9fa, inset 1px 1px 0 1px #79c6f9, inset -1px -1px 0 1px #c6e9fc, inset 3px 3px 6px #b1dffd;
    }

    input[type=checkbox]:focus-visible + label,
    :host([disabled=false]):focus-visible label {
      outline: 1px dotted #000;
    }

    input[type=checkbox]:checked + label:after,
    :host([checked]) label:after {
      color: var(--faaw7-color-checkbox-checkmark);
      content: "\\2714";
      display: block;
      font-weight: 700;
      left: 2px;
      position: absolute;
      top: 0;
    }

    :host([disabled]) label {
      color: var(--faaw7-color-text-disabled);
    }

    :host([disabled]) label:before {
      background: linear-gradient(to bottom right, #f0f0f0, #fbfbfb);
      border: 1px solid var(--faaw7-color-border-disabled);
      box-shadow: none;
    }

    :host([disabled]) input[type=checkbox]:checked + label:after,
    :host([disabled][checked]) label:after {
      color: var(--faaw7-color-checkbox-checkmark-disabled);
    }
  `];

  render() {
    return html`
      <input 
        type="checkbox" 
        id=${this._id}
        name=${ifDefined(this.name)}
        .value=${ifDefined(this.value)}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this._handleChange}
      >
      <label for=${this._id}>
        <slot>${this.label}</slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-checkbox': Faaw7Checkbox;
  }
}