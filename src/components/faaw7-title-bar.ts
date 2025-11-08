import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-title-bar')
export class Faaw7TitleBar extends LitElement {
  
  @property({ type: String })
  title = 'Ventana sin título';

  @property({ type: Boolean, reflect: true })
  active = false;

  private _startX = 0;
  private _startY = 0;

  private _dispatch(name: string) {
    this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true }));
  }

  private _handleDragStart(e: MouseEvent) {
    if (e.button !== 0) return;

    this._startX = e.clientX;
    this._startY = e.clientY;

    document.addEventListener('mousemove', this._handleDragging);
    document.addEventListener('mouseup', this._handleDragEnd);
  }

  private _handleDragging = (e: MouseEvent) => {
    e.preventDefault();
    
    const dx = e.clientX - this._startX;
    const dy = e.clientY - this._startY;

    this._startX = e.clientX;
    this._startY = e.clientY;

    this.dispatchEvent(new CustomEvent('faaw7-drag', {
      detail: { dx, dy },
      bubbles: true,
      composed: true
    }));
  };

  private _handleDragEnd = () => {
    document.removeEventListener('mousemove', this._handleDragging);
    document.removeEventListener('mouseup', this._handleDragEnd);
  };

  static styles = [
    defaultTheme,
    css`
    :host {
      --faaw7-w-space: 6px;
      --faaw7-wct-bd: #0000004d;
      --faaw7-wct-bdr: 5px;
      --faaw7-wct-sd: inset 0 0 0 1px #fffa;
      --faaw7-wct-bg: linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);
      --faaw7-wct-bg-h: radial-gradient(circle at bottom, #2aceda, transparent 65%), linear-gradient(#b6d9ee 50%, #1a6ca1 0);
      --faaw7-wct-bg-a: radial-gradient(circle at bottom, #0bfdfa, transparent 65%), linear-gradient(#86a7bc 50%, #092747 0);
      --faaw7-wct_close-bg: radial-gradient(circle at -60% 50%, #0007 5% 10%, #0000 50%), radial-gradient(circle at 160% 50%, #0007 5% 10%, #0000 50%), linear-gradient(#e0a197e5, #cf796a 25% 50%, #d54f36 50%);
    }

    .faaw7-title-bar {
      align-items: start;
      
      background: var(--faaw7-gradient-window-bar, var(--faaw7-w-grad));
      border-radius: var(--faaw7-border-radius) var(--faaw7-border-radius) 0 0;
      box-shadow: inset 0 1px 0 #fffd, inset 1px 0 0 #fffd, inset -1px 0 0 #fffd; 
      display: flex;
      font: var(--faaw7-font-family);
      justify-content: space-between;
      padding-inline: var(--faaw7-w-space);
      padding-top: 0;
      cursor: move;
    }
    
    .faaw7-title-bar-text {
      color: #000;
      letter-spacing: 0;
      line-height: 15px;
      padding-block: var(--faaw7-w-space);
      padding-left: var(--faaw7-w-space);
      padding-right: calc(var(--faaw7-w-space) + 10px);
      text-overflow: ellipsis;
      text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff;
      user-select: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      pointer-events: none;
    }
    
    .faaw7-title-bar-controls {
      background: #fff3;
      border: 1px solid var(--faaw7-wct-bd);
      border-radius: 0 0 var(--faaw7-wct-bdr) var(--faaw7-wct-bdr);
      border-top: 0;
      box-shadow: 0 1px 0 #fffa, 1px 0 0 #fffa, -1px 0 0 #fffa;
      display: flex;
      flex-shrink: 0;
    }

    .faaw7-title-bar-controls button {
      background: none;
      border: 0;
      border-radius: 0;
      border-right: 1px solid var(--faaw7-wct-bd);
      box-shadow: none;
      box-sizing: border-box;
      min-height: 19px;
      min-width: 29px;
      padding: 0;
      position: relative;
      cursor: pointer;
    }
    
    .faaw7-title-bar-controls button:after {
      content: none;
    }

    .faaw7-title-bar-controls button:active,
    .faaw7-title-bar-controls button:hover {
      background: none;
    }

    .faaw7-title-bar-controls button:disabled:before {
      opacity: .4;
    }

    .faaw7-title-bar-controls button:before {
      border-radius: 0;
      bottom: 0;
      box-shadow: inset 0 0 0 1px #fff5;
      content: "";
      left: 0;
      opacity: 1;
      position: absolute;
      right: 0;
      top: 0;
    }

    .faaw7-title-bar-controls button:not(:hover):before {
      opacity: 1;
      transition: none;
    }

    .is-minimize:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAFCAYAAABxeg0vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgBlY+xDQAgDMNaiQ9B8AHcxAlI/NYtKwj6QOohUzxYc+1HAqQ3e03qXNpwwcyE5QsAaEGjDRf8ZAza6Bz6VQAAAABJRU5ErkJggg==") no-repeat center 10px;
    }

    .is-maximize:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBlZHBCYAwDEVT6YaKbqArOILgBLqBosP1VkhAaQ6S1lKad+ihPy8kxLT9+IACG57r2KqKu2GCBpTYtEMOOQELzrnv4z53I4vDjjJnwXsPJWTOAiJGHVNB5pGwLjPk+AlEBLUY7eFebCosBHOR7vYAAAAASUVORK5CYII=") no-repeat 50%;
    }

    .is-close {
      min-width: 48px;
    }

    .is-close:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBlZFNCoQwDIVbmRvOMHOAAd0K/uDGlYKiCG4VPICi9yu0oCSQoFUXFtKEl6+voZXvr7sKay1TL690FOexY+Hz87i2decOuDKQsNGVe8AGYTRJIh0Y+orBvxszCPllOymlxN06jNE26Qnwg4zdHQLrMhFaawwAqAadDPE1ijwUxhiMKCmxCZk06OMYTz5lAx3xWDeXkLNAAAAAAElFTkSuQmCC") no-repeat 50%;
    }

    .faaw7-title-bar-controls button:first-child,
    .faaw7-title-bar-controls button:first-child:before {
      border-bottom-left-radius: var(--faaw7-wct-bdr);
    }

    .faaw7-title-bar-controls button:last-child,
    .faaw7-title-bar-controls button:last-child:before {
      border: 0;
      border-bottom-right-radius: var(--faaw7-wct-bdr);
    }

    .faaw7-title-bar-controls button:focus {
      animation: none;
      outline: none;
    }

    :host([active]) .faaw7-title-bar-controls {
      border-color: var(--faaw7-color-window-border, var(--faaw7-w-bd));
    }

    :host([active]) .faaw7-title-bar-controls button {
      border-color: var(--faaw7-color-window-border, var(--faaw7-w-bd));
      box-shadow: var(--faaw7-wct-sd);
    }

    :host([active]) .is-minimize {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAFCAYAAABxeg0vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgBlY+xDQAgDMNaiQ9B8AHcxAlI/NYtKwj6QOohUzxYc+1HAqQ3e03qXNpwwcyE5QsAaEGjDRf8ZAza6Bz6VQAAAABJRU5ErkJggg==") no-repeat center 10px, var(--faaw7-wct-bg);
    }

    :host([active]) .is-minimize:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAFCAYAAABxeg0vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgBlY+xDQAgDMNaiQ9B8AHcxAlI/NYtKwj6QOohUzxYc+1HAqQ3e03qXNpwwcyE5QsAaEGjDRf8ZAza6Bz6VQAAAABJRU5ErkJggg==") no-repeat center 10px, var(--faaw7-wct-bg-h);
      border-bottom-left-radius: var(--faaw7-wct-bdr);
      box-shadow: 0 0 7px 3px #5dc4f0, var(--faaw7-wct-sd);
      content: "";
      opacity: 0;
      transition: opacity .3s linear;
    }
    
    :host([active]) .is-minimize:focus-visible:before,
    :host([active]) .is-minimize:hover:before {
      opacity: 1;
      transition: opacity .1s linear;
    }

    :host([active]) .is-minimize:active:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAFCAYAAABxeg0vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgBlY+xDQAgDMNaiQ9B8AHcxAlI/NYtKwj6QOohUzxYc+1HAqQ3e03qXNpwwcyE5QsAaEGjDRf8ZAza6Bz6VQAAAABJRU5ErkJggg==") no-repeat center 10px, var(--faaw7-wct-bg-a);
    }

    :host([active]) .is-maximize {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBlZHBCYAwDEVT6YaKbqArOILgBLqBosP1VkhAaQ6S1lKad+ihPy8kxLT9+IACG57r2KqKu2GCBpTYtEMOOQELzrnv4z53I4vDjjJnwXsPJWTOAiJGHVNB5pGwLjPk+AlEBLUY7eFebCosBHOR7vYAAAAASUVORK5CYII=") no-repeat 50%, var(--faaw7-wct-bg);
    }

    :host([active]) .is-maximize:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBlZHBCYAwDEVT6YaKbqArOILgBLqBosP1VkhAaQ6S1lKad+ihPy8kxLT9+IACG57r2KqKu2GCBpTYtEMOOQELzrnv4z53I4vDjjJnwXsPJWTOAiJGHVNB5pGwLjPk+AlEBLUY7eFebCosBHOR7vYAAAAASUVORK5CYII=") no-repeat 50%, var(--faaw7-wct-bg-h);
      box-shadow: 0 0 7px 3px #5dc4f0, var(--faaw7-wct-sd);
      content: "";
      opacity: 0;
      transition: opacity .3s linear;
    }
    
    :host([active]) .is-maximize:focus-visible:before,
    :host([active]) .is-maximize:hover:before {
      opacity: 1;
      transition: opacity .1s linear;
    }
    
    :host([active]) .is-maximize:active:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBlZHBCYAwDEVT6YaKbqArOILgBLqBosP1VkhAaQ6S1lKad+ihPy8kxLT9+IACG57r2KqKu2GCBpTYtEMOOQELzrnv4z53I4vDjjJnwXsPJWTOAiJGHVNB5pGwLjPk+AlEBLUY7eFebCosBHOR7vYAAAAASUVORK5CYII=") no-repeat 50%, var(--faaw7-wct-bg-a);
    }

    :host([active]) .is-close {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBlZFNCoQwDIVbmRvOMHOAAd0K/uDGlYKiCG4VPICi9yu0oCSQoFUXFtKEl6+voZXvr7sKay1TL690FOexY+Hz87i2decOuDKQsNGVe8AGYTRJIh0Y+orBvxszCPllOymlxN06jNE26Qnwg4zdHQLrMhFaawwAqAadDPE1ijwUxhiMKCmxCZk06OMYTz5lAx3xWDeXkLNAAAAAAElFTkSuQmCC") no-repeat 50%, var(--faaw7-wct-bg), var(--faaw7-wct_close-bg);
      box-shadow: var(--faaw7-wct-sd);
    }
    
    :host([active]) .is-close:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBlZFNCoQwDIVbmRvOMHOAAd0K/uDGlYKiCG4VPICi9yu0oCSQoFUXFtKEl6+voZXvr7sKay1TL690FOexY+Hz87i2decOuDKQsNGVe8AGYTRJIh0Y+orBvxszCPllOymlxN06jNE26Qnwg4zdHQLrMhFaawwAqAadDPE1ijwUxhiMKCmxCZk06OMYTz5lAx3xWDeXkLNAAAAAAElFTkSuQmCC") no-repeat 50%, var(--faaw7-wct-bg), radial-gradient(circle at 50% 170%, #f4e676 10% 20%, #0000 60%), radial-gradient(circle at -60% 50%, #000a 5% 10%, #0000 50%), radial-gradient(circle at 160% 50%, #000a 5% 10%, #0000 50%), linear-gradient(#fb9d8b, #ee6d56 25% 50%, #d42809 50%);
      border-bottom-right-radius: var(--faaw7-wct-bdr);
      box-shadow: 0 0 7px 3px #e68e75, var(--faaw7-wct-sd);
      content: "";
      opacity: 0;
      transition: opacity .3s linear;
    }
    
    :host([active]) .is-close:focus-visible:before,
    :host([active]) .is-close:hover:before {
      opacity: 1;
      transition: opacity .1s linear;
    }
    
    :host([active]) .is-close:active:before {
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBlZFNCoQwDIVbmRvOMHOAAd0K/uDGlYKiCG4VPICi9yu0oCSQoFUXFtKEl6+voZXvr7sKay1TL690FOexY+Hz87i2decOuDKQsNGVe8AGYTRJIh0Y+orBvxszCPllOymlxN06jNE26Qnwg4zdHQLrMhFaawwAqAadDPE1ijwUxhiMKCmxCZk06OMYTz5lAx3xWDeXkLNAAAAAAElFTkSuQmCC") no-repeat 50%, var(--faaw7-wct-bg), radial-gradient(circle at 50% 170%, #dcc03f 10% 20%, #0000 60%), radial-gradient(circle at -60% 50%, #000 5% 10%, #0000 50%), radial-gradient(circle at 160% 50%, #000 5% 10%, #0000 50%), linear-gradient(#d1a894, #b67562 25% 50%, #7d0d01 50%);
    }
  `];

  render() {
    return html`
      <div 
        class="faaw7-title-bar"
        @mousedown=${this._handleDragStart}
        part="title-bar"
      >
        <div class="faaw7-title-bar-text" part="title-text">${this.title}</div>
        <div class="faaw7-title-bar-controls" part="controls">
          <button class="is-minimize" aria-label="Minimize" @click=${() => this._dispatch('minimize')} part="button minimize-button"></button>
          <button class="is-maximize" aria-label="Maximize" @click=${() => this._dispatch('maximize')} part="button maximize-button"></button>
          <button class="is-close" aria-label="Close" @click=${() => this._dispatch('close')} part="button close-button"></button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-title-bar': Faaw7TitleBar;
  }
}