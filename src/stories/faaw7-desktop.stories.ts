import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-desktop.ts';
import '../../src/components/faaw7-window.ts';
import '../../src/components/faaw7-button.ts';

const meta: Meta = {
  title: 'FAAW7/Desktop',
  component: 'faaw7-desktop',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    <faaw7-desktop style="height: 100vh;">
    
      <faaw7-window
        title="Panel de Control"
        width="450px"
        .top=${150}
        .left=${200}
        ?active=${false}
      >
        <p>Haz clic en mí para activarme.</p>
        <div slot="footer" style="display: flex; justify-content: flex-end; gap: 6px;">
          <faaw7-button default>OK</faaw7-button>
          <faaw7-button>Cancelar</faaw7-button>
        </div>
      </faaw7-window>
      
      <faaw7-window
        title="Acerca de"
        width="300px"
        .top=${50}
        .left=${50}
        ?active=${true}
      >
        <p>Soy la ventana activa por defecto.</p>
      </faaw7-window>
      
      <faaw7-window
        title="Documentos"
        width="400px"
        .top=${100}
        .left=${400}
      >
        <p>Tengo contenido diferente.</p>
      </faaw7-window>
      
    </faaw7-desktop>
  `,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  render: () => html`
    <style>
      .themed-desktop {
        --faaw7-color-desktop-bg: #222;
      }
    </style>
    <faaw7-desktop class="themed-desktop" style="height: 100vh;">
      <faaw7-window
        title="Ventana en escritorio oscuro"
        width="300px"
        .top=${50}
        .left=${50}
        ?active=${true}
      >
        <p>El fondo se puede personalizar.</p>
      </faaw7-window>
    </faaw7-desktop>
  `,
};