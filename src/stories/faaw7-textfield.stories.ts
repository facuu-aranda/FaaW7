import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-textfield.ts';

interface TextfieldArgs {
  type: 'text' | 'password' | 'email' | 'number' | 'url' | 'textarea';
  value: string;
  placeholder: string;
  disabled: boolean;
  onFaaw7Change: (e: Event) => void;
}

const meta: Meta<TextfieldArgs> = {
  title: 'FAAW7/Textfield',
  component: 'faaw7-textfield',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'url', 'textarea'],
    },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    onFaaw7Change: { action: 'faaw7-change' },
  },
  render: ({ type, value, placeholder, disabled, onFaaw7Change }) => html`
    <faaw7-textfield
      .type=${type}
      .value=${value}
      placeholder=${ifDefined(placeholder)}
      ?disabled=${disabled}
      @faaw7-change=${onFaaw7Change}
      style="width: 250px;"
    ></faaw7-textfield>
  `,
};

export default meta;

type Story = StoryObj<TextfieldArgs>;

export const Text: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'Escriba aquí...',
    disabled: false,
  },
};

export const Password: Story = {
  args: {
    ...Text.args,
    type: 'password',
    value: 'password',
    placeholder: '',
  },
};

export const Textarea: Story = {
  args: {
    ...Text.args,
    type: 'textarea',
    value: 'Este es un texto\nde varias líneas.',
    placeholder: 'Escriba un texto largo...',
  },
};

export const Disabled: Story = {
  args: {
    ...Text.args,
    type: 'text',
    value: 'No se puede editar',
    disabled: true,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Text.args,
    placeholder: 'Estilo simple',
  },
  render: (args) => html`
    <style>
      .themed-field {
        --faaw7-color-textfield-bg: #eee;
        --faaw7-color-textfield-border-top: #999;
        --faaw7-color-textfield-border-right: #999;
        --faaw7-color-textfield-border-bottom: #999;
        --faaw7-color-textfield-border-left: #999;
        --faaw7-color-textfield-border-hover-top: #000;
        --faaw7-color-textfield-border-hover-right: #000;
        --faaw7-color-textfield-border-hover-bottom: #000;
        --faaw7-color-textfield-border-hover-left: #000;
      }
    </style>
    <faaw7-textfield
      class="themed-field"
      .type=${args.type}
      .value=${args.value}
      placeholder=${ifDefined(args.placeholder)}
      ?disabled=${args.disabled}
      @faaw7-change=${args.onFaaw7Change}
      style="width: 250px;"
    ></faaw7-textfield>
  `,
};