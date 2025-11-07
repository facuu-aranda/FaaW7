import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-radio-group.ts';
import '../../src/components/faaw7-radio.ts';

interface RadioGroupArgs {
  value: string;
  onFaaw7Change: (e: CustomEvent) => void;
}

const meta: Meta<RadioGroupArgs> = {
  title: 'FAAW7/Radio',
  component: 'faaw7-radio-group',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'radio',
      options: ['a', 'b', 'c'],
    },
    onFaaw7Change: { action: 'faaw7-change' }
  },
  render: ({ value, onFaaw7Change }) => html`
    <faaw7-radio-group .value=${ifDefined(value)} @faaw7-change=${onFaaw7Change}>
      <faaw7-radio value="a">Elección A</faaw7-radio>
      <faaw7-radio value="b">Elección B</faaw7-radio>
      <faaw7-radio value="c" disabled>Elección C (deshabilitada)</faaw7-radio>
    </faaw7-radio-group>
  `,
};

export default meta;

type Story = StoryObj<RadioGroupArgs>;

export const Default: Story = {
  args: {
    value: 'a',
  },
};

export const SecondSelected: Story = {
  args: {
    value: 'b',
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Default.args,
  },
  render: (args) => html`
    <style>
      .themed-radio-group {
        --faaw7-color-radio-dot-bg: #ff0000;
        --faaw7-color-radio-dot-border: #990000;
        --faaw7-color-radio-dot-shadow: none;
        --faaw7-color-border-hover: #ff0000;
      }
    </style>
    <faaw7-radio-group
      class="themed-radio-group"
      .value=${ifDefined(args.value)} 
      @faaw7-change=${args.onFaaw7Change}
    >
      <faaw7-radio value="a">Elección Roja A</faaw7-radio>
      <faaw7-radio value="b">Elección Roja B</faaw7-radio>
    </faaw7-radio-group>
  `,
};