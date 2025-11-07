import { css } from 'lit';
import { defaultTheme } from '../theme/default.css.js';

export const disclosureStyles = css`
  ${defaultTheme}

  faaw7-disclosure {
    display: block;
    --faaw7-clc-size: 5px;
  }
  
  faaw7-disclosure > details {
    margin-top: 0;
    font: var(--faaw7-font-family);
  }

  faaw7-disclosure > details > summary {
    cursor: pointer;
    display: inline;
    margin-bottom: 0;
    position: relative;
    user-select: none;
    color: var(--faaw7-color-text);
  }

  faaw7-disclosure > details > summary:before {
    border: var(--faaw7-clc-size) solid transparent;
    border-left-color: var(--faaw7-color-text);
    border-radius: 3px;
    content: "";
    position: absolute;
    right: 100%;
    top: calc(50% - var(--faaw7-clc-size));
    transform: rotate(90deg);
  }

  faaw7-disclosure > details > summary::-webkit-details-marker,
  faaw7-disclosure > details > summary::marker {
    display: none;
  }

  faaw7-disclosure > details[open] > summary:before {
    top: calc(50% - var(--faaw7-clc-size)/2);
    transform: rotate(0deg);
  }
  
  faaw7-disclosure > details > div {
    padding: 5px 0 5px 15px;
    color: var(--faaw7-color-text);
  }
`;