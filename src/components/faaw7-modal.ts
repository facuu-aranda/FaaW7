import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { defaultTheme } from '../theme/default.css.js';

import './faaw7-window.ts';

@customElement('faaw7-modal')
export class Faaw7Modal extends LitElement {

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  title = 'Modal';
  
  @property({ type: Boolean, attribute: 'hide-backdrop' })
  hideBackdrop = false;

  @property({ type: String })
  width = '400px';

  @property({ type: String })
           height = 'auto';

  private _handleClose() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('faaw7-close', {
      bubbles: true, composed: true
    }));
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: none;
    }

    :host([open]) {
      display: block;
    }
  
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 998;
    }
    
    .modal-window {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    }
  `];

  render() {
    const backdropClasses = {
      'backdrop': true,
      'hidden': this.hideBackdrop,
    };

    return html`
      <div 
        class=${classMap(backdropClasses)}
        @click=${this._handleClose}
        part="backdrop"
      ></div>
      
      <faaw7-window
        class="modal-window"
        .title=${this.title}
        .width=${this.width}
        .height=${this.height}
        top="0"
        left="0"
        active
        @close=${this._handleClose}
        part="window"
        exportparts="title-bar, title-text, controls, button, minimize-button, maximize-button, close-button, body"
      >
        <slot></slot>
        <slot name="footer" slot="footer"></slot>
      </faaw7-window>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-modal': Faaw7Modal;
  }
}