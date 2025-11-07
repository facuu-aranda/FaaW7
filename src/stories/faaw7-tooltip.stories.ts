import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-tooltip.ts';
import '../../src/components/faaw7-button.ts';

interface TooltipArgs {
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const meta: Meta<TooltipArgs> = {
  title: 'FAAW7/Tooltip',
  component: 'faaw7-tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  render: ({ content, position }) => html`
    <div style="padding: 50px; display: flex; justify-content: center;">
      <faaw7-tooltip
        .content=${content}
        position=${ifDefined(position)}
      >
        <faaw7-button>Pasa el mouse sobre mí</faaw7-button>
      </faaw7-tooltip>
    </div>
  `,
};

export default meta;

type Story = StoryObj<TooltipArgs>;

export const Top: Story = {
  args: {
    content: 'Este es un tooltip',
    position: 'top',
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip en la parte inferior',
    position: 'bottom',
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip a la izquierda',
    position: 'left',
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip a la derecha',
    position: 'right',
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Top.args,
    content: 'Tooltip oscuro',
  },
  render: (args) => html`
    <style>
      .themed-tooltip {
        --faaw7-gradient-tooltip: linear-gradient(#444, #222);
        --faaw7-color-border-tooltip: #555;
        --faaw7-color-text: #eee;
      }
    </style>
    <div style="padding: 50px; display: flex; justify-content: center;">
      <faaw7-tooltip
        class="themed-tooltip"
        .content=${args.content}
        position=${ifDefined(args.position)}
      >
        <faaw7-button>Pasa el mouse sobre mí</faaw7-button>
      </faaw7-tooltip>
    </div>
  `,
};