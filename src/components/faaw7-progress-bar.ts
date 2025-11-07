import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { defaultTheme } from '../theme/default.css.js';

type ProgressState = 'normal' | 'paused' | 'error';
type ProgressMode = 'determinate' | 'animate' | 'marquee';

@customElement('faaw7-progress-bar')
export class Faaw7ProgressBar extends LitElement {

  @property({ type: Number })
  value = 0;

  @property({ type: String })
  state: ProgressState = 'normal';
  
  @property({ type: String })
  mode: ProgressMode = 'determinate';

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
    }

    [role=progressbar] {
      background: radial-gradient(circle at 0 50%, #0000001f 10px, transparent 30px), radial-gradient(circle at 100% 50%, #0000001f 10px, transparent 30px), linear-gradient(180deg, #f3f3f3af, #fcfcfcaf 3px, #dbdbdbaf 6px, #cacacaaf 0, #d5d5d5af), #ddd;
      border: 1px solid var(--faaw7-color-border);
      border-radius: var(--faaw7-border-radius);
      box-shadow: inset 0 0 0 1px #f3f3f388, 0 0 0 1px #eaeaea88;
      height: 15px;
      margin: 2px 0;
      overflow: hidden;
    }

    .progress-bar-inner {
      background-color: var(--faaw7-color-progress-bar);
      background-image: linear-gradient(180deg, #f3f3f3af, #fcfcfcaf 3px, #dbdbdbaf 6px, transparent 0), radial-gradient(circle at 0 50%, #0000002f 10px, transparent 30px), radial-gradient(circle at 100% 50%, #0000002f 10px, transparent 30px), linear-gradient(180deg, transparent 65%, #ffffff55), linear-gradient(180deg, transparent 6px, #cacaca33 0, #d5d5d533);
      box-shadow: inset 0 0 0 1px #ffffff1f;
      height: 100%;
      overflow: hidden;
      width: 0%;
      transition: width 0.1s linear;
    }

    .faaw7-progress-paused .progress-bar-inner {
      background-color: var(--faaw7-color-progress-bar-paused);
    }

    .faaw7-progress-error .progress-bar-inner {
      background-color: var(--faaw7-color-progress-bar-error);
    }

    .faaw7-progress-animate .progress-bar-inner::before,
    .faaw7-progress-marquee .progress-bar-inner::before {
      animation: faaw7-progressbar-anim 3s linear infinite;
      background: linear-gradient(90deg, transparent, #ffffff80, transparent 40%);
      content: "";
      display: block;
      height: 100%;
    }

    .faaw7-progress-marquee .progress-bar-inner {
      width: 100% !important;
    }
    
    .faaw7-progress-marquee .progress-bar-inner::before {
      background: linear-gradient(to right, transparent, var(--faaw7-color-progress-bar), transparent 35%);
      opacity: .5;
    }

    @keyframes faaw7-progressbar-anim {
      0% {
        transform: translateX(-40%);
      }
      60% {
        transform: translateX(100%);
      }
      to {
        transform: translateX(100%);
      }
    }
  `];

  render() {
    const progressClasses = {
      'faaw7-progress-paused': this.state === 'paused',
      'faaw7-progress-error': this.state === 'error',
      'faaw7-progress-animate': this.mode === 'animate',
      'faaw7-progress-marquee': this.mode === 'marquee',
    };

    const innerStyles = {
      width: `${this.mode === 'marquee' ? 100 : this.value}%`
    };

    return html`
      <div role="progressbar" class=${classMap(progressClasses)} part="container">
        <div class="progress-bar-inner" style=${styleMap(innerStyles)} part="bar"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-progress-bar': Faaw7ProgressBar;
  }
}