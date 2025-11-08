import { LitElement, html, css } from 'lit';
import type { PropertyValues } from 'lit';
import type { Faaw7Radio } from './faaw7-radio';
import { customElement, property, state } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

let uniqueId = 0;

@customElement('faaw7-radio-group')
export class Faaw7RadioGroup extends LitElement {
  
  static formAssociated = true;
  private internals: ElementInternals;
  
  private _name = `faaw7-radio-group-${uniqueId++}`;

  @property({ type: String })
  value = '';
  
  @property({ type: String })
  name: string | undefined = undefined;

  @state()
  private _radios: Faaw7Radio[] = [];

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('faaw7-change', this._handleChange);
    this.internals.setFormValue(this.value);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('faaw7-change', this._handleChange);
  }

  private _handleChange(e: Event) {
    e.stopPropagation();

    const target = e.target as Faaw7Radio;

    if (this.value === target.value) {
      return;
    }
    
    this.value = target.value;
    this.internals.setFormValue(this.value);
    
    this.dispatchEvent(new CustomEvent('faaw7-change', {
      detail: { value: this.value }, 
      bubbles: true, 
      composed: true
    }));
  }
  
  private _handleSlotChange() {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    if (slot) {
      this._radios = slot.assignedElements({ flatten: true }) as Faaw7Radio[];
      this._radios.forEach(radio => {
        radio.name = this._name;
      });
      this._updateRadios();
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('value')) {
      this.internals.setFormValue(this.value);
      this._updateRadios(); 
    }
    if (changedProperties.has('name') && this.name) {
      this.internals.setFormValue(this.value);
    }
  }
  
  private _updateRadios() {
    this._radios.forEach(radio => {
      radio.checked = (radio.value === this.value);
    });
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: inline-flex;
      flex-direction: column;
      gap: 6px;
      font: var(--faaw7-font-family);
    }
  `];

  render() {
    return html`
      <slot @slotchange=${this._handleSlotChange}></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-radio-group': Faaw7RadioGroup;
  }
}