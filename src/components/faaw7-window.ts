import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { defaultTheme } from '../theme/default.css.js';

import './faaw7-title-bar.ts';

@customElement('faaw7-window')
export class Faaw7Window extends LitElement {

  @property({ type: String })
  title = 'Ventana';

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: String })
  width = '500px';

  @property({ type: String })
  height = 'auto';
  
  @property({ type: Number })
  top = 100;

  @property({ type: Number })
  left = 100;

  private _handleDrag(e: CustomEvent) {
    this.left += e.detail.dx;
    this.top += e.detail.dy;
  }

  private _handleClose(e: CustomEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('faaw7-close', {
      bubbles: true,
      composed: true
    }));
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      --faaw7-w-space: 6px;
      display: block;
      position: absolute;
    }

    .faaw7-window {
      border: 1px solid var(--faaw7-color-window-border, var(--faaw7-w-bd));
      box-shadow: 2px 2px 10px 1px var(--faaw7-color-window-border, var(--faaw7-w-bd)), inset 0 0 0 1px #fffa;
      font: var(--faaw7-font-family);
      position: relative;
      min-width: 250px;
      display: flex;
      flex-direction: column;
    }

    :host([active]) .faaw7-window {
      box-shadow: 2px 2px 16px 2px var(--faaw7-color-window-border, var(--faaw7-w-bd)), inset 0 0 0 1px #fffa;
    }

    .faaw7-window,
    .faaw7-window:before {
      border-radius: var(--faaw7-border-radius);
    }

    .faaw7-window:before {
      background: linear-gradient(transparent 20%, #ffffffb3 40%, transparent 41%), var(--faaw7-gradient-window-bar, var(--faaw7-w-grad));
      box-shadow: inset 0 0 0 1px #fffd;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    .faaw7-window-body {
      background: var(--faaw7-color-surface);
      border: 1px solid var(--faaw7-color-window-border, var(--faaw7-w-bd));
      box-shadow: 0 0 0 1px #fff9;
      margin: var(--faaw7-w-space);
      margin-top: 0;
    }

    .has-space {
      padding: var(--faaw7-w-space);
    }
    
    ::slotted([slot="footer"]) {
      background: var(--faaw7-color-surface);
      border: 1px solid var(--faaw7-color-window-border, var(--faaw7-w-bd));
      border-top: 0;
      box-shadow: 0 .5px 1px .5px #fff;
      margin: var(--faaw7-w-space);
      margin-top: calc(var(--faaw7-w-space)*-1 - 1px);
      padding: 10px;
      position: relative;
    }

    ::slotted([slot="status-bar"]) {
      background: var(--faaw7-color-surface);
      border: 1px solid var(--faaw7-color-window-border, var(--faaw7-w-bd));
      border-top: 0;
      box-shadow: 0 1px 0 #fff9, 1px 0 0 #fff9, -1px 0 0 #fff9;
      display: flex;
      margin: var(--faaw7-w-space);
      margin-top: calc(var(--faaw7-w-space)*-1);
    }
  `];

  render() {
    const styles = {
      width: this.width,
      height: this.height,
      top: `${this.top}px`,
      left: `${this.left}px`,
    };

    return html`
      <div class="faaw7-window" style=${styleMap(styles)} part="window">
        <faaw7-title-bar 
          .title=${this.title} 
          ?active=${this.active}
          @faaw7-drag=${this._handleDrag}
          @close=${this._handleClose}
          part="title-bar"
          exportparts="title-text, controls, button, minimize-button, maximize-button, close-button"
        ></faaw7-title-bar>
        
        <div class="faaw7-window-body has-space" part="body">
          <slot></slot>
        </div>
        
        <slot name="footer"></slot>
        <slot name="status-bar"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-window': Faaw7Window;
  }
}