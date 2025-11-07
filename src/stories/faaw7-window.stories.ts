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