import { css } from 'lit';

export const defaultTheme = css`
  :host, :root {
    --faaw7-font-family: 9pt "Segoe UI", "SegoeUI", "Noto Sans", sans-serif;
    --faaw7-border-radius: 3px;

    --faaw7-w-space: 6px;
    --faaw7-w-bd: #000000b3;
    --faaw7-w-bdr: 6px;
    --faaw7-w-bg: #4580c4;
    --faaw7-w-glass: linear-gradient(135deg, #fff5 70px, transparent 100px), linear-gradient(225deg, #fff5 70px, transparent 100px), linear-gradient(54deg, #0002 0 4%, #6661 6% 6%, #0002 8% 10%, #0002 15% 16%, #aaa1 17% 18%, #0002 23% 24%, #bbb2 25% 26%, #0002 31% 33%, #0002 34% 34.5%, #bbb2 36% 40%, #0002 41% 41.5%, #bbb2 44% 45%, #bbb2 46% 47%, #0002 48% 49%, #0002 50% 50.5%, #0002 56% 56.5%, #bbb2 57% 63%, #0002 67% 69%, #bbb2 69.5% 70%, #0002 73.5% 74%, #bbb2 74.5% 79%, #0002 80% 84%, #aaa2 85% 86%, #0002 87%, #bbb1 90%) left center/100vw 100vh no-repeat fixed;
    --faaw7-w-grad: linear-gradient(to right, #ffffff66, #0000001a, #ffffff33), var(--faaw7-w-bg);
    --faaw7-wct-bd: #0000004d;
    --faaw7-wct-bdr: 5px;
    --faaw7-wct-sd: inset 0 0 0 1px #fffa;
    --faaw7-wct-bg: linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);
    --faaw7-wct-bg-h: radial-gradient(circle at bottom, #2aceda, transparent 65%), linear-gradient(#b6d9ee 50%, #1a6ca1 0);
    --faaw7-wct-bg-a: radial-gradient(circle at bottom, #0bfdfa, transparent 65%), linear-gradient(#86a7bc 50%, #092747 0);
    --faaw7-wct_close-bg: radial-gradient(circle at -60% 50%, #0007 5% 10%, #0000 50%), radial-gradient(circle at 160% 50%, #0007 5% 10%, #0000 50%), linear-gradient(#e0a197e5, #cf796a 25% 50%, #d54f36 50%);
    
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
    
    --faaw7-color-highlight-bg: #005a9e;
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