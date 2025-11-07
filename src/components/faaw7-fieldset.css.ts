import { css } from 'lit';
import { defaultTheme } from '../theme/default.css.js';

export const fieldsetStyles = css`
  ${defaultTheme}

  faaw7-fieldset {
    display: block;
  }

  faaw7-fieldset > fieldset {
    border: 1px solid #cdd7db;
    border-radius: var(--faaw7-border-radius);
    box-shadow: inset 0 0 0 1px #fff;
    margin: 0;
    padding: 8px 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font: var(--faaw7-font-family);
    color: var(--faaw7-color-text);
  }

  faaw7-fieldset > fieldset > legend {
    font: var(--faaw7-font-family);
    color: var(--faaw7-color-text);
    padding: 0 4px;
  }
`;