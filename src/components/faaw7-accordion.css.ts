import { css } from 'lit';
import { defaultTheme } from '../theme/default.css.js';

export const accordionStyles = css`
  ${defaultTheme}

  faaw7-accordion {
    display: block;
    --faaw7-clc-size: 5px;
  }
  
  faaw7-accordion details {
    border-bottom: 1px solid var(--faaw7-color-border-disabled);
    margin-top: 0;
    font: var(--faaw7-font-family);
  }

  faaw7-accordion summary {
    cursor: pointer;
    display: inline-block;
    margin-bottom: 0;
    position: relative;
    padding: 8px 0;
    user-select: none;
    color: var(--faaw7-color-text);
  }

  faaw7-accordion details > summary::-webkit-details-marker,
  faaw7-accordion details > summary::marker {
    display: none;
  }
  
  faaw7-accordion summary::before {
    border: var(--faaw7-clc-size) solid transparent;
    border-left-color: var(--faaw7-color-text);
    border-radius: 3px;
    content: "";
    position: absolute;
    right: 100%;
    top: calc(50% - var(--faaw7-clc-size));
    transform: rotate(90deg);
  }

  faaw7-accordion details[open] > summary::before {
    transform: rotate(0deg);
  }

  faaw7-accordion details > div {
    padding: 10px;
    font: var(--faaw7-font-family);
    color: var(--faaw7-color-text);
  }
`;