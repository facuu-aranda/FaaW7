import { LitElement, html } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { treeViewStyles } from './faaw7-treeview.css.js';

const styleId = 'faaw7-treeview-styles';

@customElement('faaw7-treeview')
export class Faaw7TreeView extends LitElement {

  @property({ type: Boolean, reflect: true, attribute: 'container' })
  container = false;

  @property({ type: Boolean, reflect: true, attribute: 'collapsible' })
  collapsible = false;

  @property({ type: Boolean, reflect: true, attribute: 'connector' })
  connector = false;

  connectedCallback() {
    super.connectedCallback();
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.textContent = treeViewStyles.cssText;
      document.head.appendChild(styleTag);
    }
  }

  protected createRenderRoot() {
    return this;
  }
  
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('container')) {
      this.classList.toggle('container', this.container);
    }
    if (changedProperties.has('collapsible')) {
      this.classList.toggle('collapsible', this.collapsible);
    }
    if (changedProperties.has('connector')) {
      this.classList.toggle('connector', this.connector);
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-treeview': Faaw7TreeView;
  }
}