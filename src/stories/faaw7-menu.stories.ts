import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-menu-bar.ts';
import '../../src/components/faaw7-menu.ts';
import '../../src/components/faaw7-menu-item.ts';

const meta: Meta = {
  title: 'FAAW7/Menu',
  component: 'faaw7-menu-bar',
  tags: ['autodocs'],
  render: () => html`
    <faaw7-menu-bar>
      
      <faaw7-menu-item has-submenu>
        Archivo
        <faaw7-menu slot="submenu">
          <faaw7-menu-item>Nuevo</faaw7-menu-item>
          <faaw7-menu-item>Abrir...</faaw7-menu-item>
          <faaw7-menu-item divider></faaw7-menu-item>
          <faaw7-menu-item disabled>Guardar</faaw7-menu-item>
          <faaw7-menu-item>Guardar como...</faaw7-menu-item>
          <faaw7-menu-item divider></faaw7-menu-item>
          <faaw7-menu-item>Salir</faaw7-menu-item>
        </faaw7-menu>
      </faaw7-menu-item>
      
      <faaw7-menu-item has-submenu>
        Editar
        <faaw7-menu slot="submenu">
          <faaw7-menu-item>Deshacer</faaw7-menu-item>
          <faaw7-menu-item divider></faaw7-menu-item>
          <faaw7-menu-item>Cortar</faaw7-menu-item>
          <faaw7-menu-item>Copiar</faaw7-menu-item>
          <faaw7-menu-item>Pegar</faaw7-menu-item>
          <faaw7-menu-item has-submenu>
            Opciones
            <faaw7-menu slot="submenu">
              <faaw7-menu-item>Opción 1</faaw7-menu-item>
              <faaw7-menu-item>Opción 2</faaw7-menu-item>
            </faaw7-menu>
          </faaw7-menu-item>
        </faaw7-menu>
      </faaw7-menu-item>
      
      <faaw7-menu-item>
        Ayuda
      </faaw7-menu-item>

    </faaw7-menu-bar>
  `,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  render: () => html`
    <style>
      .themed-menu {
        --faaw7-color-highlight-bg: #444;
        --faaw7-color-highlight-text: #fff;
        --faaw7-color-surface: #333;
        --faaw7-color-text: #eee;
        --faaw7-color-highlight-border: #555;
      }
      .themed-menu::part(menubar) {
        background: #222;
        color: #eee;
      }
    </style>
    <faaw7-menu-bar class="themed-menu">
      <faaw7-menu-item has-submenu>
        Archivo
        <faaw7-menu slot="submenu">
          <faaw7-menu-item>Nuevo</faaw7-menu-item>
          <faaw7-menu-item>Abrir...</faaw7-menu-item>
          <faaw7-menu-item divider></faaw7-menu-item>
          <faaw7-menu-item disabled>Guardar</faw7-menu-item>
        </faaw7-menu>
      </faaw7-menu-item>
      <faaw7-menu-item has-submenu>
        Editar
        <faaw7-menu slot="submenu">
          <faaw7-menu-item>Cortar</faaw7-menu-item>
          <faaw7-menu-item>Copiar</faaw7-menu-item>
          <faaw7-menu-item>Pegar</faaw7-menu-item>
        </faaw7-menu>
      </faaw7-menu-item>
    </faaw7-menu-bar>
  `,
};