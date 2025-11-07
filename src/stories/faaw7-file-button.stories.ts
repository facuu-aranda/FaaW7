import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-file-button.ts';

interface FileButtonArgs {
  label: string;
  default: boolean;
  disabled: boolean;
  accept: string;
  multiple: boolean;
  onFaaw7Change: (e: CustomEvent) => void;
}

const meta: Meta<FileButtonArgs> = {
  title: 'FAAW7/FileButton',
  component: 'faaw7-file-button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    default: { control: 'boolean' },
    disabled: { control: 'boolean' },
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    onFaaw7Change: { action: 'faaw7-change' },
  },
  render: ({ label, default: isDefault, disabled, accept, multiple, onFaaw7Change }) => html`
    <faaw7-file-button
      ?default=${isDefault}
      ?disabled=${disabled}
      accept=${ifDefined(accept)}
      ?multiple=${multiple}
      @faaw7-change=${onFaaw7Change}
    >
      ${label}
    </faaw7-file-button>
  `,
};

export default meta;

type Story = StoryObj<FileButtonArgs>;

export const Default: Story = {
  args: {
    label: 'Seleccionar archivo...',
    default: false,
    disabled: false,
    multiple: false,
  },
};

export const MultipleImages: Story = {
  args: {
    label: 'Cargar Imágenes...',
    default: true,
    disabled: false,
    accept: 'image/*',
    multiple: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Deshabilitado',
    default: false,
    disabled: true,
    multiple: false,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Default.args,
    label: 'Botón Rojo',
  },
  render: (args) => html`
    <style>
      .themed-file-button {
        --faaw7-border-radius: 20px;
        --faaw7-color-border: #990000;
        --faaw7-color-border-hover: #ff0000;
        --faaw7-gradient-bg: linear-gradient(#cc0000, #990000);
        --faaw7-gradient-bg-hover: linear-gradient(#ff0000, #cc0000);
        --faaw7-color-text: #fff;
      }
    </style>
    <faaw7-file-button
      class="themed-file-button"
      ?default=${args.default}
      ?disabled=${args.disabled}
      accept=${ifDefined(args.accept)}
      ?multiple=${args.multiple}
      @faaw7-change=${args.onFaaw7Change}
    >
      ${args.label}
    </faaw7-file-button>
  `,
};