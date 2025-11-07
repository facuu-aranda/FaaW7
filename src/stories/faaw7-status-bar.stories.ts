import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-status-bar.ts';
import '../../src/components/faaw7-status-bar-field.ts';
import '../../src/components/faaw7-window.ts';

const meta: Meta = {
  title: 'FAAW7/StatusBar',
  component: 'faaw7-status-bar',
  tags: ['autodocs'],
  render: () => html`
    <faaw7-status-bar>
      <faaw7-status-bar-field>Listo</faaw7-status-bar-field>
      <faaw7-status-bar-field fixed>CPU: 5%</faaw7-status-bar-field>
      <faaw7-status-bar-field fixed>RAM: 45%</faaw7-status-bar-field>
    </faaw7-status-bar>
  `,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const InWindow: StoryObj = {
  name: 'Dentro de una Ventana',
  render: () => html`
    <faaw7-window title="Ventana con Status Bar" active width="500px">
      <div style="padding: 10px;">
        Contenido de la ventana.
      </div>
      <faaw7-status-bar slot="status-bar">
        <faaw7-status-bar-field>Panel 1 (flexible)</faaw7-status-bar-field>
        <faaw7-status-bar-field fixed>Panel 2 (fijo)</faaw7-status-bar-field>
      </faaw7-status-bar>
    </faaw7-window>
  `,
};

export const Themed: StoryObj = {
  name: 'Personalizado (Themed)',
  render: () => html`
    <style>
      .themed-status-bar {
        --faaw7-color-surface: #333;
        --faaw7-color-text: #eee;
        --faaw7-color-border-disabled: #555;
      }
    </style>
    <faaw7-status-bar class="themed-status-bar">
      <faaw7-status-bar-field>Listo</faaw7-status-bar-field>
      <faaw7-status-bar-field fixed>CPU: 10%</faaw7-status-bar-field>
    </faaw7-status-bar>
  `,
};