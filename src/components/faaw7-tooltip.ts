import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

@customElement('faaw7-tooltip')
export class Faaw7Tooltip extends LitElement {

  @property({ type: String })
  content = '';

  @property({ type: String })
  position: TooltipPosition = 'top';

  static styles = [
    defaultTheme,
    css`
    :host {
      display: inline-block;
      position: relative;
    }

    .tooltip-content {
      --faaw7-blt-size: 18px;
      --faaw7-blt-offset: 1em;

      background: var(--faaw7-gradient-tooltip);
      border: 1px solid var(--faaw7-color-border-tooltip);
      border-radius: var(--faaw7-border-radius);
      box-shadow: 5px 5px 3px -3px var(--faaw7-color-border-tooltip);
      padding: 1em;
      position: absolute;
      z-index: 1000;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.2s, visibility 0.2s;
      white-space: nowrap;
      font: var(--faaw7-font-family);
      color: var(--faaw7-color-text);
    }
    
    :host(:hover) .tooltip-content {
      visibility: visible;
      opacity: 1;
    }
    
    :host([position="top"]) .tooltip-content {
      bottom: 110%;
      left: 50%;
      transform: translateX(-50%);
    }
    
    :host([position="bottom"]) .tooltip-content {
      top: 110%;
      left: 50%;
      transform: translateX(-50%);
    }
    
    :host([position="left"]) .tooltip-content {
      top: 50%;
      right: 110%;
      transform: translateY(-50%);
    }
    
    :host([position="right"]) .tooltip-content {
      top: 50%;
      left: 110%;
      transform: translateY(-50%);
    }
  `];

  render() {
    return html`
      <slot></slot>
      <div class="tooltip-content" role="tooltip" part="tooltip">
        ${this.content}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-tooltip': Faaw7Tooltip;
  }
}