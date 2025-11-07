import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Faaw7Window } from './faaw7-window';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-desktop')
export class Faaw7Desktop extends LitElement {
  
  private _windows: Faaw7Window[] = [];
  private _highestZIndex = 10;

  private _handleActivate(e: Event) {
    const clickedWindow = e.target as Faaw7Window;
    if (clickedWindow.active) return;

    this._highestZIndex++;
    
    this._windows.forEach(win => {
      if (win === clickedWindow) {
        win.active = true;
        win.style.zIndex = `${this._highestZIndex}`;
      } else {
        win.active = false;
      }
    });
  }

  private _registerWindow(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this._windows = slot.assignedElements({ flatten: true }) as Faaw7Window[];
    
    this._windows.forEach((win, index) => {
      if (!win.style.zIndex) {
        win.style.zIndex = `${index + 1}`;
      }
      if (index + 1 > this._highestZIndex) {
        this._highestZIndex = index + 1;
      }
      
      win.addEventListener('mousedown', this._handleActivate);
      win.addEventListener('faaw7-close', () => win.style.display = 'none');
    });
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: var(--faaw7-color-desktop-bg);
    }
  `];

  render() {
    return html`
      <slot @slotchange=${this._registerWindow}></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-desktop': Faaw7Desktop;
  }
}