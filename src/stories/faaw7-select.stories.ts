import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-select.ts';

interface SelectArgs {
  value: string;
  disabled: boolean;
  onFaaw7Change: (e: Event) => void;
}

const meta: Meta<SelectArgs> = {
  title: 'FAAW7/Select',
  component: 'faaw7-select',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['opt1', 'opt2', 'opt3'],
    },
    disabled: { control: 'boolean' },
    onFaaw7Change: { action: 'faaw7-change' },
  },
  render: ({ value, disabled, onFaaw7Change }) => html`
    <faaw7-select 
      .value=${ifDefined(value)}
      ?disabled=${disabled}
      @faaw7-change=${onFaaw7Change}
      style="width: 200px;"
    >
      <option value="opt1">Opción 1</option>
      <option value="opt2">Opción 2</option>
      <option value="opt3">Opción 3</option>
    </faaw7-select>
  `,
};

export default meta;

type Story = StoryObj<SelectArgs>;

export const Default: Story = {
  args: {
    value: 'opt1',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: 'opt1',
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
      .themed-select::part(select) {
        --faaw7-border-radius: 0px;
        --faaw7-color-border: #000;
        --faaw7-color-border-hover: #000;
        --faaw7-gradient-bg: linear-gradient(#eee, #ccc);
        --faaw7-gradient-bg-hover: linear-gradient(#fff, #ddd);
      }
    </style>
    <faaw7-select
      class="themed-select"
      .value=${ifDefined(args.value)}
      ?disabled=${args.disabled}
      @faaw7-change=${args.onFaaw7Change}
      style="width: 200px;"
    >
      <option value="opt1">Opción 1</option>
      <option value="opt2">Opción 2</option>
      <option value="opt3">Opción 3</option>
    </faaw7-select>
  `,
};