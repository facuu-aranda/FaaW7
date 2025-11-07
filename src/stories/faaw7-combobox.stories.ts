import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-combobox.ts';
import '../../src/components/faaw7-menu.ts';
import '../../src/components/faaw7-menu-item.ts';

interface ComboboxArgs {
  value: string;
  placeholder: string;
  disabled: boolean;
  onFaaw7Change: (e: Event) => void;
  onFaaw7Input: (e: Event) => void;
}

const meta: Meta<ComboboxArgs> = {
  title: 'FAAW7/Combobox',
  component: 'faaw7-combobox',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    onFaaw7Change: { action: 'faaw7-change' },
    onFaaw7Input: { action: 'faaw7-input' },
  },
  render: ({ value, placeholder, disabled, onFaaw7Change, onFaaw7Input }) => html`
    <faaw7-combobox
      .value=${value}
      placeholder=${ifDefined(placeholder)}
      ?disabled=${disabled}
      @faaw7-change=${onFaaw7Change}
      @faaw7-input=${onFaaw7Input}
    >
      <faaw7-menu>
        <faaw7-menu-item>Opción 1</faaw7-menu-item>
        <faaw7-menu-item>Opción 2</faaw7-menu-item>
        <faaw7-menu-item>Opción 3</faaw7-menu-item>
      </faaw7-menu>
    </faaw7-combobox>
  `,
};

export default meta;

type Story = StoryObj<ComboboxArgs>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Seleccione uno...',
    disabled: false,
  },
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: 'Opción 2',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    value: 'Deshabilitado',
    disabled: true,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Default.args,
  },
  render: (args) => html`
    <style>
      .themed-combo {
        --faaw7-color-textfield-bg: #eee;
        --faaw7-color-textfield-border-top: #999;
        --faaw7-color-textfield-border-right: #999;
        --faaw7-color-textfield-border-bottom: #999;
        --faaw7-color-textfield-border-left: #999;
        --faaw7-color-border: #999;
        --faaw7-gradient-bg: #eee;
        --faaw7-gradient-bg-hover: #f5f5f5;
      }
      .themed-combo::part(menu) {
        --faaw7-color-surface: #eee;
        --faaw7-color-highlight-bg-light: linear-gradient(#fff, #f5f5f5);
        --faaw7-color-highlight-border: #999;
      }
    </style>
    <faaw7-combobox
      class="themed-combo"
      .value=${args.value}
      placeholder=${ifDefined(args.placeholder)}
      ?disabled=${args.disabled}
      @faaw7-change=${args.onFaaw7Change}
      @faaw7-input=${args.onFaaw7Input}
    >
      <faaw7-menu>
        <faaw7-menu-item>Opción 1</faaw7-menu-item>
        <faaw7-menu-item>Opción 2</faaw7-menu-item>
        <faaw7-menu-item>Opción 3</faaw7-menu-item>
      </faaw7-menu>
    </faaw7-combobox>
  `,
};