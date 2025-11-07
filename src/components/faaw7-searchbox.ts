import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defaultTheme } from '../theme/default.css.js';

import './faaw7-textfield.ts';
import './faaw7-icon-button.ts';

@customElement('faaw7-searchbox')
export class Faaw7Searchbox extends LitElement {

  @property({ type: String })
  value = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean, reflect: true })
  disabled = false;
  
  private _handleInput(e: CustomEvent) {
    this.value = e.detail.value;
    this.dispatchEvent(new CustomEvent('faaw7-input', {
      detail: { value: this.value },
      bubbles: true, composed: true
    }));
  }

  private _handleSearch() {
    this.dispatchEvent(new CustomEvent('faaw7-search', {
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
      width: 250px;
    }

    faaw7-textfield {
      width: 100%;
    }
    
    faaw7-textfield::part(input) {
      padding-right: 26px;
    }

    faaw7-icon-button {
      position: absolute;
      right: 1px;
      top: 1px;
    }
    
    faaw7-icon-button::part(button) {
      min-height: 21px;
      min-width: 26px;
      border-radius: 0 var(--faaw7-border-radius) var(--faaw7-border-radius) 0;
      border-left: none;
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
        exportparts="input"
      ></faaw7-textfield>
      
      <faaw7-icon-button
        aria-label="Search"
        ?disabled=${this.disabled}
        @click=${this._handleSearch}
        exportparts="button"
      ></faaw7-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-searchbox': Faaw7Searchbox;
  }
}