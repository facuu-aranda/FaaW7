import { LitElement, html, css } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultTheme } from '../theme/default.css.js';

type TextFieldType = 'text' | 'password' | 'email' | 'number' | 'url' | 'textarea';

@customElement('faaw7-textfield')
export class Faaw7Textfield extends LitElement {

  static formAssociated = true;
  private internals: ElementInternals;

  @property({ type: String })
  type: TextFieldType = 'text';
  @property({ type: String })
  value = '';
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string | null = null;
  @property({ type: String })
  placeholder = '';
  @property({ type: Boolean, reflect: true })
  disabled = false;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.internals.setFormValue(this.value);
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('value')) {
      this.internals.setFormValue(this.value);
    }
  }

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.internals.setFormValue(this.value);
    
    this.dispatchEvent(new CustomEvent('faaw7-change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: inline-block;
      width: 200px;
    }

    input, textarea {
      background-color: var(--faaw7-color-textfield-bg);
      border-color: 
        var(--faaw7-color-textfield-border-top) 
        var(--faaw7-color-textfield-border-right) 
        var(--faaw7-color-textfield-border-bottom) 
        var(--faaw7-color-textfield-border-left);
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      font: var(--faaw7-font-family);
      padding: 3px 4px 5px;
      transition: border-color .5s;
      width: 100%;
    }
    
    input {
      height: 23px;
    }
    
    textarea {
      resize: vertical;
      min-height: 46px;
    }

    :host(:not([disabled])) input:hover,
    :host(:not([disabled])) textarea:hover {
      border-color:
        var(--faaw7-color-textfield-border-hover-top)
        var(--faaw7-color-textfield-border-hover-right)
        var(--faaw7-color-textfield-border-hover-bottom)
        var(--faaw7-color-textfield-border-hover-left);
      transition: border-color .3s;
    }

    :host(:not([disabled])) input:focus,
    :host(:not([disabled])) textarea:focus {
      border-color:
        var(--faaw7-color-textfield-border-focus-top)
        var(--faaw7-color-textfield-border-focus-right)
        var(--faaw7-color-textfield-border-focus-bottom)
        var(--faaw7-color-textfield-border-focus-left);
      outline: none;
    }

    :host([disabled]) input,
    :host([disabled]) textarea {
      background: var(--faaw7-color-surface);
      border-color: var(--faaw7-color-border-disabled);
      box-shadow: inset 0 0 0 1px #fff;
      cursor: not-allowed;
    }
  `];

  render() {
    if (this.type === 'textarea') {
      return html`
        <textarea
          .value=${this.value}
          placeholder=${ifDefined(this.placeholder)}
          ?disabled=${this.disabled}
          @input=${this._handleChange}
          aria-label=${ifDefined(this.ariaLabel)}
          part="input"
        ></textarea>
      `;
    }

    return html`
      <input
        type=${this.type}
        .value=${this.value}
        placeholder=${ifDefined(this.placeholder)}
        ?disabled=${this.disabled}
        @input=${this._handleChange}
        aria-label=${ifDefined(this.ariaLabel)}
        part="input"
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-textfield': Faaw7Textfield;
  }
}