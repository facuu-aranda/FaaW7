import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-checkbox.ts';

interface CheckboxArgs {
  label: string;
  checked: boolean;
  disabled: boolean;
  value: string;
  onFaaw7Change: (e: Event) => void;
}

const meta: Meta<CheckboxArgs> = {
  title: 'FAAW7/Checkbox',
  component: 'faaw7-checkbox',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    onFaaw7Change: { action: 'faaw7-change' }
  },
  render: ({ label, checked, disabled, value, onFaaw7Change }) => html`
    <faaw7-checkbox
      ?checked=${checked}
      ?disabled=${disabled}
      .value=${ifDefined(value)}
      @faaw7-change=${onFaaw7Change}
    >
      ${label}
    </faaw7-checkbox>
  `,
};

export default meta;

type Story = StoryObj<CheckboxArgs>;

export const Unchecked: Story = {
  args: {
    label: 'Opción 1',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Opción 2 (marcada)',
    checked: true,
    disabled: false,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Opción 3 (deshabilitada)',
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Opción 4 (marcada y deshabilitada)',
    checked: true,
    disabled: true,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Checked.args,
    label: 'Checkbox verde',
  },
  render: (args) => html`
    <style>
      .themed-check {
        --faaw7-color-border-hover: #008000;
        --faaw7-color-checkbox-checkmark: #008000;
        --faaw7-font-family: 9pt "Arial", sans-serif;
      }
    </style>
    <faaw7-checkbox
      class="themed-check"
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      @faaw7-change=${args.onFaaw7Change}
    >
      ${args.label}
    </faaw7-checkbox>
  `,
};