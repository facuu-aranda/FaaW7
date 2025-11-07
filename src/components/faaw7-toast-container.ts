import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './faaw7-toast.ts';

@customElement('faaw7-toast-container')
export class Faaw7ToastContainer extends LitElement {

  public showToast(message: string, duration = 3000) {
    const toast = document.createElement('faaw7-toast');
    toast.innerHTML = message;
    toast.duration = duration;
    this.appendChild(toast);
  }

  static styles = css`
    :host {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1001;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-toast-container': Faaw7ToastContainer;
  }
}