import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../src/components/faaw7-button.ts';

interface Faaw7ButtonArgs {
  default: boolean;
  disabled: boolean;
  slotContent: string;
}

const meta: Meta<Faaw7ButtonArgs> = {
  title: 'FAAW7/Button',
  component: 'faaw7-button',
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'boolean',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      table: { category: 'State' },
    },
    slotContent: {
      control: 'text',
      table: { category: 'Content' },
    }
  },
  render: ({ default: isDefault, disabled, slotContent }) => html`
    <faaw7-button ?default=${isDefault} ?disabled=${disabled}>
      ${slotContent}
    </faaw7-button>
  `,
};

export default meta;

type Story = StoryObj<Faaw7ButtonArgs>;

export const Standard: Story = {
  args: {
    slotContent: 'Aceptar',
    default: false,
    disabled: false,
  },
};

export const Default: Story = {
  args: {
    slotContent: 'Aplicar',
    default: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    slotContent: 'Cancelar',
    default: false,
    disabled: true,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Standard.args,
    slotContent: 'Botón Rojo',
  },
  render: ({ default: isDefault, disabled, slotContent }) => html`
    <style>
      .themed-button {
        --faaw7-font-family: 9pt "Arial", sans-serif;
        --faaw7-border-radius: 20px;
        --faaw7-color-border: #990000;
        --faaw7-color-border-hover: #ff0000;
        --faaw7-color-border-active: #ff0000;
        --faaw7-gradient-bg: linear-gradient(#cc0000, #990000);
        --faaw7-gradient-bg-hover: linear-gradient(#ff0000, #cc0000);
        --faaw7-gradient-bg-active: linear-gradient(#990000, #cc0000);
        --faaw7-color-text: #fff;
      }
    </style>
    <faaw7-button
      class="themed-button"
      ?default=${isDefault}
      ?disabled=${disabled}
    >
      ${slotContent}
    </faaw7-button>
  `,
};