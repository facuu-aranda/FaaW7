import { css } from 'lit';
import { defaultTheme } from '../theme/default.css.js';

export const tableStyles = css`
  ${defaultTheme}

  faaw7-table {
    display: block;
    --faaw7-lvc-size: 5px;
  }

  faaw7-table.scrollable {
    overflow: auto;
    border: 1px solid var(--faaw7-color-border-light);
  }
  
  faaw7-table.faaw7-has-shadow {
    box-shadow: 4px 4px 3px -2px #999;
  }

  faaw7-table table {
    background-color: #fff;
    border-collapse: collapse;
    font: var(--faaw7-font-family);
    position: relative;
    table-layout: fixed;
    text-align: left;
    white-space: nowrap;
    width: 100%;
  }

  faaw7-table.scrollable table {
    border: none;
  }

  faaw7-table:not(.scrollable) table {
    border: 1px solid var(--faaw7-color-border-light);
  }

  faaw7-table thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  faaw7-table th {
    background: linear-gradient(180deg, #fff 45%, #fafafa 0, #f0f0f0);
    border: 1px solid #d7d7d7;
    box-sizing: border-box;
    cursor: default;
    font-weight: 400;
    height: 22px;
    padding: 0 8px;
  }

  faaw7-table td,
  faaw7-table th {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--faaw7-color-text);
  }

  faaw7-table tr.faaw7-highlighted {
    background: var(--faaw7-color-highlight-bg-light);
    border: 1px solid var(--faaw7-color-highlight-border);
    border-radius: var(--faaw7-border-radius);
  }

  faaw7-table tr.faaw7-highlighted > td:not(:last-child) {
    border-right: none;
  }

  faaw7-table td {
    height: 14px;
    padding: 2px 8px;
  }

  faaw7-table tbody > tr > td:not(:last-child) {
    border-right: 1px solid #eee;
  }

  faaw7-table.scrollable::-webkit-scrollbar { width: 16px; }
  faaw7-table.scrollable::-webkit-scrollbar:horizontal { height: 17px; }
  faaw7-table.scrollable::-webkit-scrollbar-corner { background: var(--faaw7-color-surface-dark); }
  faaw7-table.scrollable::-webkit-scrollbar-track:vertical { background: var(--faaw7-gradient-scrollbar); }
  faaw7-table.scrollable::-webkit-scrollbar-track:horizontal { background: var(--faaw7-gradient-scrollbar-h); }
  faaw7-table.scrollable::-webkit-scrollbar-thumb {
    background-color: var(--faaw7-color-surface-dark);
    border: 1px solid var(--faaw7-color-border);
    border-radius: var(--faaw7-border-radius);
    box-shadow: var(--faaw7-shadow-inset);
  }
  faaw7-table.scrollable::-webkit-scrollbar-thumb:vertical {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTSuQmCC") no-repeat 50%, var(--faaw7-gradient-bg);
  }
  faaw7-table.scrollable::-webkit-scrollbar-thumb:horizontal {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTSuQmCC") no-repeat 50%, var(--faaw7-gradient-bg);
  }
  faaw7-table.scrollable::-webkit-scrollbar-thumb:hover { border-color: var(--faaw7-color-border-hover); }
  faaw7-table.scrollable::-webkit-scrollbar-thumb:hover:vertical {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTSuQmCC") no-repeat 50%, var(--faaw7-gradient-bg-hover);
  }
  faaw7-table.scrollable::-webkit-scrollbar-thumb:hover:horizontal {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1KCabPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTSuQmCC") no-repeat 50%, var(--faaw7-gradient-bg-hover);
  }
  faaw7-table.scrollable::-webkit-scrollbar-thumb:active { border-color: var(--faaw7-color-border-active); }
  faaw7-table.scrollable::-webkit-scrollbar-thumb:active:vertical {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTSuQmCC") no-repeat 50%, var(--faaw7-gradient-bg-active);
  }
  faaw7-table.scrollable::-webkit-scrollbar-thumb:active:horizontal {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTSuQmCC") no-repeat 50%, var(--faaw7-gradient-bg-active);
  }

  faaw7-table.scrollable::-webkit-scrollbar-button {
    border: 1px solid transparent;
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:horizontal:end:decrement,
  faaw7-table.scrollable::-webkit-scrollbar-button:horizontal:start:increment,
  faaw7-table.scrollable::-webkit-scrollbar-button:vertical:end:decrement,
  faaw7-table.scrollable::-webkit-scrollbar-button:vertical:start:increment {
    display: none;
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:vertical { height: 17px; }
  faaw7-table.scrollable::-webkit-scrollbar-button:vertical:start {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-scrollbar);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:vertical:end {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-scrollbar);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:horizontal { width: 16px; }
  faaw7-table.scrollable::-webkit-scrollbar-button:horizontal:start {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="), var(--faaw7-gradient-scrollbar-h);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:horizontal:end {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-scrollbar-h);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:hover {
    background-color: var(--faaw7-color-surface-dark);
    border-color: var(--faaw7-color-border);
    border-radius: var(--faaw7-border-radius);
    box-shadow: var(--faaw7-shadow-inset);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:hover:vertical { height: 17px; }
  faaw7-table.scrollable::-webkit-scrollbar-button:hover:vertical:start {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-bg-hover);
    border-color: var(--faaw7-color-border-hover);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:hover:vertical:end {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-bg-hover);
    border-color: var(--faaw7-color-border-hover);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:hover:horizontal { width: 16px; }
  faaw7-table.scrollable::-webkit-scrollbar-button:hover:horizontal:start {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="), var(--faaw7-gradient-bg-hover);
    border-color: var(--faaw7-color-border-hover);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:hover:horizontal:end {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-bg-hover);
    border-color: var(--faaw7-color-border-hover);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:active {
    background-color: var(--faaw7-color-surface-dark);
    border-color: var(--faaw7-color-border);
    border-radius: var(--faaw7-border-radius);
    box-shadow: var(--faaw7-shadow-inset);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:active:vertical { height: 17px; }
  faaw7-table.scrollable::-webkit-scrollbar-button:active:vertical:start {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-bg-active);
    border-color: var(--faaw7-color-border-active);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:active:vertical:end {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-bg-active);
    border-color: var(--faaw7-color-border-active);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:active:horizontal { width: 16px; }
  faaw7-table.scrollable::-webkit-scrollbar-button:active:horizontal:start {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="), var(--faaw7-gradient-bg-active);
    border-color: var(--faaw7-color-border-active);
  }
  faaw7-table.scrollable::-webkit-scrollbar-button:active:horizontal:end {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"), var(--faaw7-gradient-bg-active);
    border-color: var(--faaw7-color-border-active);
  }
`;