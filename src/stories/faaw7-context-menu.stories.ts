import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-context-menu.ts';
import '../../src/components/faaw7-menu-item.ts';

const meta: Meta = {
  title: 'FAAW7/ContextMenu',
  component: 'faaw7-context-menu',
  tags: ['autodocs'],
  render: () => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      const menu = document.getElementById('story-context-menu') as any;
      if (menu) {
        menu.show(e.clientX, e.clientY);
      }
    };

    return html`
      <div 
        @contextmenu=${handleContextMenu}
        style="
          border: 2px dashed #8e8f8f; 
          padding: 40px; 
          text-align: center; 
          background: #fff; 
          user-select: none;
          font-family: 'Segoe UI', sans-serif;
        "
      >
        Haz clic derecho aquí
      </div>

      <faaw7-context-menu id="story-context-menu">
        <faaw7-menu-item>Copiar</faaw7-menu-item>
        <faaw7-menu-item>Pegar</faaw7-menu-item>
        <faaw7-menu-item divider></faaw7-menu-item>
        <faaw7-menu-item disabled>Actualizar</faaw7-menu-item>
        <faaw7-menu-item>Propiedades</faaw7-menu-item>
      </faaw7-context-menu>
    `;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  render: () => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      const menu = document.getElementById('story-context-menu-themed') as any;
      if (menu) {
        menu.show(e.clientX, e.clientY);
      }
    };

    return html`
      <style>
        .context-area-themed {
          border: 2px dashed #990000;
          padding: 40px;
          text-align: center;
          background: #333;
          color: #eee;
          user-select: none;
          font-family: 'Segoe UI', sans-serif;
        }
        .themed-context-menu {
          --faaw7-color-surface: #333;
          --faaw7-color-text: #eee;
          --faaw7-color-highlight-bg: #8B0000;
          --faaw7-color-highlight-text: #fff;
          --faaw7-color-highlight-border: #990000;
        }
      </style>
    
      <div 
        class="context-area-themed"
        @contextmenu=${handleContextMenu}
      >
        Haz clic derecho aquí (Oscuro)
      </div>

      <faaw7-context-menu id="story-context-menu-themed" class="themed-context-menu">
        <faaw7-menu-item>Copiar</faaw7-menu-item>
        <faaw7-menu-item>Pegar</faaw7-menu-item>
        <faaw7-menu-item divider></faaw7-menu-item>
        <faaw7-menu-item>Propiedades</faaw7-menu-item>
      </faaw7-context-menu>
    `;
  },
};