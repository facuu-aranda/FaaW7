import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-tab-group.ts';
import '../../src/components/faaw7-tab.ts';
import '../../src/components/faaw7-tab-panel.ts';
import '../../src/components/faaw7-button.ts';

const meta: Meta = {
  title: 'FAAW7/Tabs',
  component: 'faaw7-tab-group',
  tags: ['autodocs'],
  render: () => html`
    <faaw7-tab-group>
      
      <faaw7-tab slot="tabs" panel="panel-1">Entradas y Botones</faaw7-tab>
      <faaw7-tab slot="tabs" panel="panel-2">Visualización</faaw7-tab>
      <faaw7-tab slot="tabs" panel="panel-3" disabled>Otros (Deshabilitado)</faaw7-tab>

      <faaw7-tab-panel name="panel-1">
        <h3>Contenido del Panel 1</h3>
        <p>Aquí irían los botones y campos de texto.</p>
        <faaw7-button default>Aceptar</faaw7-button>
        <faaw7-button>Cancelar</faaw7-button>
      </faaw7-tab-panel>

      <faaw7-tab-panel name="panel-2">
        <h3>Contenido del Panel 2</h3>
        <p>Aquí irían las barras de progreso y tablas.</p>
      </faaw7-tab-panel>

      <faaw7-tab-panel name="panel-3">
        <h3>Contenido del Panel 3</h3>
        <p>Este contenido no debería ser visible.</p>
      </faaw7-tab-panel>
      
    </faaw7-tab-group>
  `,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  render: () => html`
    <style>
      .themed-tabs {
        --faaw7-font-family: 9pt "Arial", sans-serif;
        --faaw7-color-border: #999;
        --faaw7-color-border-hover: #000;
        --faaw7-gradient-bg: linear-gradient(#eee, #ccc);
        --faaw7-gradient-bg-hover: linear-gradient(#fff, #ddd);
      }
      .themed-tabs faaw7-tab-panel {
        --faaw7-tab-bg: #eee;
        --faaw7-color-text: #333;
      }
    </style>
    <faaw7-tab-group class="themed-tabs">
      <faaw7-tab slot="tabs" panel="panel-1">Pestaña A</faaw7-tab>
      <faaw7-tab slot="tabs" panel="panel-2">Pestaña B</faaw7-tab>

      <faaw7-tab-panel name="panel-1">
        <h3>Panel A</h3>
      </faaw7-tab-panel>

      <faaw7-tab-panel name="panel-2">
        <h3>Panel B</h3>
      </faaw7-tab-panel>
    </faaw7-tab-group>
  `,
};