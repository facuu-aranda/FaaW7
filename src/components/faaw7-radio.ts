import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

let uniqueId = 0;

@customElement('faaw7-radio')
export class Faaw7Radio extends LitElement {

  private _id = `faaw7-radio-${uniqueId++}`;

  @property({ type: String })
  value = '';
  
  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;
  
  @property({ type: String })
  name = '';

  static styles = [
    defaultTheme,
    css`
    :host {
      display: inline-block;
      --faaw7-rd-size: 14px;
      --faaw7-rdl-space: 6px;
      --faaw7-rd-left: calc(var(--faaw7-rd-size) + var(--faaw7-rdl-space));
      --faaw7-rdd-size: 8px;
    }
    
    input[type=radio] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: 0;
      border: none;
      margin: 0;
      opacity: 0;
      position: absolute;
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
      border: 1px solid;
      border-color: var(--faaw7-color-border);
      border-radius: 50%;
      box-shadow: inset 0 0 0 1.5px var(--faaw7-gradient-bg-disabled), inset 1px 1px 0 1.5px var(--faaw7-color-surface-inset), inset -1px 0 0 1.5px #ddd, inset 3px 3px 6px #ccc;
      box-sizing: border-box;
      content: "";
      display: inline-block;
      height: var(--faaw7-rd-size);
      margin-right: var(--faaw7-rdl-space);
      position: relative;
      transition: .4s;
      width: var(--faaw7-rd-size);
    }
    
    :host(:not([disabled])) label:hover:before {
      border-color: var(--faaw7-color-border-hover);
      box-shadow: inset 0 0 0 1.5px #def9fa, inset 1px 1px 0 1.5px #79c6f9, inset -1px -1px 0 1.5px #c6e9fc, inset 3px 3px 6px #b1dffd;
    }

    input[type=radio]:checked + label:after {
      background: var(--faaw7-color-radio-dot-bg);
      border: 1.5px solid var(--faaw7-color-radio-dot-border);
      border-radius: 50%;
      box-shadow: var(--faaw7-color-radio-dot-shadow);
      box-sizing: border-box;
      content: "";
      display: block;
      height: var(--faaw7-rdd-size);
      left: calc( (var(--faaw7-rd-size) - var(--faaw7-rdd-size)) / 2 );
      position: absolute;
      top: calc( (var(--faaw7-rd-size) - var(--faaw7-rdd-size)) / 2 );
      width: var(--faaw7-rdd-size);
    }

    input[type=radio]:focus-visible + label {
      outline: 1px dotted #000;
    }

    :host([disabled]) label {
      filter: grayscale(1);
      opacity: .6;
    }

    :host([disabled]:not([checked])) label:before {
      opacity: .5;
    }
  `];

  render() {
    return html`
      <input 
        type="radio" 
        id=${this._id}
        name=${this.name}
        .value=${this.value}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this._handleChange}
      >
      <label for=${this._id}>
        <slot></slot>
      </label>
    `;
  }

  private _handleChange() {
    this.checked = true;
    this.dispatchEvent(new CustomEvent('faaw7-change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-radio': Faaw7Radio;
  }
}