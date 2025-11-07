import { css } from 'lit';
import { defaultTheme } from '../theme/default.css.js';

export const listboxStyles = css`
  ${defaultTheme}

  faaw7-listbox {
    display: block;
    background: #fff;
    border: 1px solid var(--faaw7-color-border-light);
    font: var(--faaw7-font-family);
    overflow-y: scroll;
    min-height: 50px;
    resize: vertical;
  }

  faaw7-listbox.faaw7-has-shadow {
    box-shadow: 4px 4px 3px -2px #999;
  }

  faaw7-listbox:focus {
    outline: none;
  }

  faaw7-listbox > [role="option"] {
    padding: 2px;
    cursor: default;
    user-select: none;
    color: var(--faaw7-color-text);
  }

  faaw7-listbox.faaw7-has-hover > [role="option"]:hover {
    background-color: var(--faaw7-color-highlight-bg);
    color: var(--faaw7-color-highlight-text);
  }

  faaw7-listbox > [role="option"]:focus,
  faaw7-listbox > [role="option"][aria-selected="true"] {
    background-color: var(--faaw7-color-highlight-bg);
    color: var(--faaw7-color-highlight-text);
  }
`;