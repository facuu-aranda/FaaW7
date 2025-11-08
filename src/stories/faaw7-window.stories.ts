import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-window.ts';
import '../../src/components/faaw7-button.ts';

interface WindowArgs {
  title: string;
  active: boolean;
  width: string;
  top: number;
  left: number;
  bodyContent: string;
  showFooter: boolean;
  showStatusBar: boolean;
}

const meta: Meta<WindowArgs> = {
  title: 'FAAW7/Window',
  component: 'faaw7-window',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    active: { control: 'boolean' },
    width: { control: 'text' },
    top: { control: 'number' },
    left: { control: 'number' },
    bodyContent: { control: 'text' },
    showFooter: { control: 'boolean' },
    showStatusBar: { control: 'boolean' },
  },
  render: ({ title, active, width, top, left, bodyContent, showFooter, showStatusBar }) => html`
    <faaw7-window
      .title=${title}
      ?active=${active}
      .width=${width}
      .top=${top}
      .left=${left}
    >
      <p>${bodyContent}</p>

      ${showFooter ? html`
        <div slot="footer" style="display: flex; justify-content: flex-end; gap: 6px;">
          <faaw7-button default>OK</faaw7-button>
          <faaw7-button>Cancelar</faaw7-button>
        </div>
      ` : ''}
      
      ${showStatusBar ? html`
        <div slot="status-bar" style="font: 9pt 'Segoe UI'; user-select: none;">
          <p style="margin: 0; padding: 2px 3px; border-right: 1px solid #cfcfcf; flex-grow: 1;">Listo</p>
          <p style="margin: 0; padding: 2px 3px;">CPU: 5%</p>
        </div>
      ` : ''}
    </faaw7-window>
  `,
};

export default meta;

type Story = StoryObj<WindowArgs>;

export const Standard: Story = {
  args: {
    title: 'Mi Ventana (Arrastrable)',
    active: true,
    width: '450px',
    top: 50,
    left: 50,
    bodyContent: 'Este es el contenido principal de la ventana.',
    showFooter: false,
    showStatusBar: false,
  },
};

export const Completa: Story = {
  args: {
    ...Standard.args,
    title: 'Panel de Control (Arrastrable)',
    bodyContent: 'Una ventana con todos los elementos.',
    showFooter: true,
    showStatusBar: true,
    active: false,
    top: 150,
    left: 200,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Standard.args,
    title: 'Ventana con Borde Rojo (Themed)',
    bodyContent: 'Esta ventana usa variables CSS personalizadas para los bordes.',
    active: true,
  },
  render: (args) => html`
    <style>
      .themed-window {
        /* --- Personalización de Bordes --- */
        /* Borde principal de la ventana y barra de título */
        --faaw7-w-bd: #8B0000; /* Borde rojo oscuro */
        
        /* Borde del cuerpo y pie de página */
        --faaw7-color-window-border: #8B0000;
        
        /* Borde de los controles (minimizar, etc.) */
        --faaw7-wct-bd: #A93226;

        /* --- Otros colores para que combine --- */
        --faaw7-w-bg: #444; /* Fondo de la barra de título */
        --faaw7-w-grad: linear-gradient(to right, #ffffff33, #0000001a, #ffffff11), var(--faaw7-w-bg);
        
        --faaw7-color-surface: #333; /* Fondo del cuerpo */
        --faaw7-color-text: #eee;
      }
      .themed-window::part(title-text) {
          color: #fff;
          text-shadow: 0 0 2px #000;
      }
    </style>
    <faaw7-window
      class="themed-window"
      .title=${args.title}
      ?active=${args.active}
      .width=${args.width}
      .top=${args.top}
      .left=${args.left}
    >
      <p>${args.bodyContent}</p>
    </faaw7-window>
  `,
};