import { css } from 'lit';
import { defaultTheme } from '../theme/default.css.js';

export const treeViewStyles = css`
  ${defaultTheme}

  faaw7-treeview {
    display: block;
    font: var(--faaw7-font-family);
    margin: 0;
    padding: 6px 6px 6px 20px;
    --faaw7-tvb-size: 8px;
    --faaw7-tv-left: 20px;
  }

  faaw7-treeview ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-top: 4px;
    padding-left: var(--faaw7-tv-left);
  }

  faaw7-treeview li {
    list-style-type: none;
    margin-top: 4px;
    position: relative;
  }

  faaw7-treeview a {
    color: var(--faaw7-color-text);
    text-decoration: none;
  }
  
  faaw7-treeview a:focus,
  faaw7-treeview a:hover {
    text-decoration: underline;
  }

  faaw7-treeview.container {
    background: #fff;
    border: 1px solid var(--faaw7-color-border);
  }

  faaw7-treeview.collapsible details {
    margin: 0;
  }
  
  faaw7-treeview.collapsible summary {
    cursor: pointer;
    display: inline-block;
    margin: 0;
    position: relative;
    user-select: none;
    color: var(--faaw7-color-text);
  }

  faaw7-treeview.collapsible details > summary::-webkit-details-marker,
  faaw7-treeview.collapsible details > summary::marker {
    display: none;
  }

  faaw7-treeview.collapsible details > summary:before {
    background: var(--faaw7-gradient-bg);
    border: 1px solid #919191;
    border-radius: 1px;
    color: #4b63a7;
    content: "\\002b";
    font-size: 8pt;
    font-weight: 700;
    height: var(--faaw7-tvb-size);
    left: calc(var(--faaw7-tvb-size) * 2 * -1);
    line-height: calc(var(--faaw7-tvb-size) - 50% + var(--faaw7-tvb-size)/2);
    margin: 0;
    position: absolute;
    right: unset;
    text-align: center;
    top: calc(50% - var(--faaw7-tvb-size) / 2);
    width: var(--faaw7-tvb-size);
  }

  faaw7-treeview.collapsible details[open] > summary:before {
    content: "\\2013";
    transform: none;
  }

  faaw7-treeview.connector ul {
    position: relative;
  }

  faaw7-treeview.connector ul:before {
    border-left: 1px dotted var(--faaw7-color-text);
    content: "";
    height: calc(100% - var(--faaw7-tvb-size));
    left: var(--faaw7-tvb-size);
    position: absolute;
    top: 0;
  }

  faaw7-treeview.connector ul li:before {
    border-bottom: 1px dotted var(--faaw7-color-text);
    content: "";
    position: absolute;
    right: calc(100% + var(--faaw7-tvb-size) / 4);
    top: var(--faaw7-tvb-size);
    width: calc(var(--faaw7-tv-left) / 2);
  }
`;