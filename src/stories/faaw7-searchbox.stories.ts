import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-searchbox.ts';

interface SearchboxArgs {
  value: string;
  placeholder: string;
  disabled: boolean;
  onFaaw7Input: (e: Event) => void;
  onFaaw7Search: (e: Event) => void;
}

const meta: Meta<SearchboxArgs> = {
  title: 'FAAW7/Searchbox',
  component: 'faaw7-searchbox',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    onFaaw7Input: { action: 'faaw7-input' },
    onFaaw7Search: { action: 'faaw7-search' },
  },
  render: ({ value, placeholder, disabled, onFaaw7Input, onFaaw7Search }) => html`
    <faaw7-searchbox
      .value=${value}
      placeholder=${ifDefined(placeholder)}
      ?disabled=${disabled}
      @faaw7-input=${onFaaw7Input}
      @faaw7-search=${onFaaw7Search}
    ></faaw7-searchbox>
  `,
};

export default meta;

type Story = StoryObj<SearchboxArgs>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Buscar...',
    disabled: false,
  },
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: 'Componentes',
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
      .themed-search {
        --faaw7-color-textfield-bg: #eee;
        --faaw7-color-textfield-border-top: #999;
        --faaw7-color-textfield-border-right: #999;
        --faaw7-color-textfield-border-bottom: #999;
        --faaw7-color-textfield-border-left: #999;
        --faaw7-color-border: #999;
        --faaw7-gradient-bg: #eee;
        --faaw7-gradient-bg-hover: #f5f5f5;
      }
    </style>
    <faaw7-searchbox
      class="themed-search"
      .value=${args.value}
      placeholder=${ifDefined(args.placeholder)}
      ?disabled=${args.disabled}
      @faaw7-input=${args.onFaaw7Input}
      @faaw7-search=${args.onFaaw7Search}
    ></faaw7-searchbox>
  `,
};