import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-listbox.ts';

interface ListboxArgs {
  hasShadow: boolean;
  hasHover: boolean;
  multiple: boolean;
  onFaaw7Change: (e: Event) => void;
}

const meta: Meta<ListboxArgs> = {
  title: 'FAAW7/Listbox',
  component: 'faaw7-listbox',
  tags: ['autodocs'],
  argTypes: {
    hasShadow: { control: 'boolean' },
    hasHover: { control: 'boolean' },
    multiple: { control: 'boolean' },
    onFaaw7Change: { action: 'faaw7-change' },
  },
  render: ({ hasShadow, hasHover, multiple, onFaaw7Change }) => html`
    <faaw7-listbox
      ?has-shadow=${hasShadow}
      ?has-hover=${hasHover}
      ?multiple=${multiple}
      @faaw7-change=${onFaaw7Change}
      style="width: 200px; height: 120px;"
    >
      <div role="option" data-value="1">Opción 1</div>
      <div role="option" data-value="2" aria-selected="true">Opción 2</div>
      <div role="option" data-value="3">Opción 3</div>
      <div role="option" data-value="4">Opción 4</div>
      <div role="option" data-value="5">Opción 5</div>
    </faaw7-listbox>
  `,
};

export default meta;

type Story = StoryObj<ListboxArgs>;

export const SingleSelect: Story = {
  args: {
    hasShadow: false,
    hasHover: true,
    multiple: false,
  },
};

export const MultipleSelect: Story = {
  args: {
    hasShadow: true,
    hasHover: true,
    multiple: true,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...SingleSelect.args,
  },
  render: (args) => html`
    <style>
      .themed-listbox {
        --faaw7-color-highlight-bg: #8B0000;
        --faaw7-color-highlight-text: #fff;
        --faaw7-color-border-light: #8B0000;
      }
    </style>
    <faaw7-listbox
      class="themed-listbox"
      ?has-shadow=${args.hasShadow}
      ?has-hover=${args.hasHover}
      ?multiple=${args.multiple}
      @faaw7-change=${args.onFaaw7Change}
      style="width: 200px; height: 120px;"
    >
      <div role="option" data-value="1">Opción 1</div>
      <div role="option" data-value="2" aria-selected="true">Opción 2</div>
      <div role="option" data-value="3">Opción 3</div>
      <div role="option" data-value="4">Opción 4</div>
    </faaw7-listbox>
  `,
};