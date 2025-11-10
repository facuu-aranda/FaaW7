import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-modal.ts';
import '../../src/components/faaw7-button.ts';

interface ModalArgs {
  title: string;
  open: boolean;
  width: string;
  height: string;
  onFaaw7Close: () => void;
}

const meta: Meta<ModalArgs> = {
  title: 'FAAW7/Modal',
  component: 'faaw7-modal',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    open: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
    onFaaw7Close: { action: 'faaw7-close' },
  },
  render: ({ title, open, width, height, onFaaw7Close }) => html`
    <faaw7-button @click=${() => {
      const modal = document.getElementById('story-modal') as any;
      if (modal) modal.open = true;
    }}>Abrir Modal</faaw7-button>
    
    <faaw7-modal
      id="story-modal"
      .title=${title}
      ?open=${open}
      .width=${ifDefined(width)}
                 .height=${ifDefined(height)}
      @faaw7-close=${(e: Event) => {
      (e.target as any).open = false;
      onFaaw7Close();
    }}
    >
      <p>Este es el contenido del modal. Puedes cerrarlo con el botón de cerrar de la ventana, o haciendo clic en el fondo.</p>
      
      <div slot="footer" style="display: flex; justify-content: flex-end; gap: 6px;">
        <faaw7-button default @click=${() => {
      const modal = document.getElementById('story-modal') as any;
      if (modal) modal.open = false;
    }}>Aceptar</faaw7-button>
      </div>
    </faaw7-modal>
  `,
};

export default meta;

type Story = StoryObj<ModalArgs>;

export const Default: Story = {
  args: {
    title: 'Ventana Modal',
    open: false,
    width: '400px',
    height: 'auto',
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Default.args,
    title: 'Modal Oscuro',
  },
  render: (args) => html`
    <style>
      .themed-modal::part(window) {
        --faaw7-font-family: 9pt "Arial", sans-serif;
        --faaw7-color-surface: #333;
        --faaw7-color-text: #eee;
        --faaw7-color-window-border: #555;
        --faaw7-gradient-window-bar: linear-gradient(#444, #222);
      }
      .themed-modal::part(title-text) {
         color: #fff;
          text-shadow: none;
      }
      .themed-modal::part(backdrop) {
        background: rgba(0, 0, 0, 0.7);
      }
    </style>
    
    <faaw7-button @click=${() => {
      const modal = document.getElementById('story-modal-themed') as any;
      if (modal) modal.open = true;
    }}>Abrir Modal Oscuro</faaw7-button>
    
    <faaw7-modal
      id="story-modal-themed"
      class="themed-modal"
      .title=${args.title}
      ?open=${args.open}
      .width=${ifDefined(args.width)}
                 .height=${ifDefined(args.height)}
      @faaw7-close=${(e: Event) => {
      (e.target as any).open = false;
      args.onFaaw7Close();
    }}
    >
      <p>Este es un modal personalizado.</p>
      
      <div slot="footer" style="display: flex; justify-content: flex-end; gap: 6px;">
        <faaw7-button default @click=${() => {
      const modal = document.getElementById('story-modal-themed') as any;
      if (modal) modal.open = false;
    }}>Aceptar</faaw7-button>
      </div>
    </faaw7-modal>
  `
};