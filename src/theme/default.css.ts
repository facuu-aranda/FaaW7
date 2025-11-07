import { css } from 'lit';

export const defaultTheme = css`
  :host, :root {
    --faaw7-font-family: 9pt "Segoe UI", "SegoeUI", "Noto Sans", sans-serif;
    --faaw7-border-radius: 3px;
    
    --faaw7-color-surface: #f0f0f0;
    --faaw7-color-surface-light: #f6f6f6;
    --faaw7-color-surface-dark: #ebebeb;
    --faaw7-color-surface-inset: #aeaeae;
    --faaw7-color-surface-hover: #e9f7fe;
    --faaw7-color-desktop-bg: #356598;

    --faaw7-color-text: #222;
    --faaw7-color-text-disabled: #838383;
    
    --faaw7-color-border: #8e8f8f;
    --faaw7-color-border-light: #c0c1cd;
    --faaw7-color-border-disabled: #adb2b5;

    --faaw7-color-border-hover: #3c7fb1;
    --faaw7-color-border-active: #6d91ab;
    --faaw7-color-border-tooltip: #0006;
    
    --faaw7-shadow-inset: inset 0 0 0 1px #fffc;
    --faaw7-shadow-inset-active: inset 1px 1px 0 #0003, inset -1px 1px 0 #0001;

    --faaw7-gradient-bg: linear-gradient(#f2f2f2 45%, #ebebeb 45%, #cfcfcf);
    --faaw7-gradient-bg-hover: linear-gradient(#eaf6fd 45%, #bee6fd 0, #a7d9f5);
    --faaw7-gradient-bg-active: linear-gradient(#e5f4fc, #c4e5f6 30% 50%, #98d1ef 50%, #68b3db);
    --faaw7-gradient-bg-disabled: #f4f4f4;
    --faaw7-gradient-tooltip: linear-gradient(to bottom, #fff, var(--faaw7-color-surface-dark));
    
    --faaw7-gradient-scrollbar: linear-gradient(to right, #e5e5e5, var(--faaw7-color-surface) 20%);
    --faaw7-gradient-scrollbar-h: linear-gradient(to bottom, #e5e5e5, var(--faaw7-color-surface) 20%);
    
    --faaw7-color-highlight-bg: #2a90ff;
    --faaw7-color-highlight-text: #fff;
    --faaw7-color-highlight-bg-light: linear-gradient(#fff9, #e6ecf5cc 90%, #fffc);
    --faaw7-color-highlight-border: #aaddfa;
    
    --faaw7-color-progress-bar: #0bd82c;
    --faaw7-color-progress-bar-paused: #e6df1b;
    --faaw7-color-progress-bar-error: #ef0000;
    
    --faaw7-color-checkbox-checkmark: #4a5f97;
    --faaw7-color-checkbox-checkmark-disabled: #bfbfbf;
    
    --faaw7-color-radio-dot-bg: #7cd3eb;
    --faaw7-color-radio-dot-border: #27506d;
    --faaw7-color-radio-dot-shadow: inset -1px -1px 0 .5px #16638f, inset -1px -1px 0 1px #1985c0;

    --faaw7-color-textfield-bg: #fff;
    --faaw7-color-textfield-border-top: #abadb3;
    --faaw7-color-textfield-border-right: #dbdfe6;
    --faaw7-color-textfield-border-bottom: #e3e9ef;
    --faaw7-color-textfield-border-left: #e2e3ea;
    --faaw7-color-textfield-border-hover-top: #5794bf;
    --faaw7-color-textfield-border-hover-right: #b7d5ea;
    --faaw7-color-textfield-border-hover-bottom: #c7e2f1;
    --faaw7-color-textfield-border-hover-left: #c5daed;
    --faaw7-color-textfield-border-focus-top: #3d7bad;
    --faaw7-color-textfield-border-focus-right: #a4c9e3;
    --faaw7-color-textfield-border-focus-bottom: #b7d9ed;
    --faaw7-color-textfield-border-focus-left: #b5cfe7;
  }
`;