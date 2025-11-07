import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-spinner.ts';

interface SpinnerArgs {
  size: string;
}

const meta: Meta<SpinnerArgs> = {
  title: 'FAAW7/Spinner',
  component: 'faaw7-spinner',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
  },
  render: ({ size }) => html`
    <faaw7-spinner
      size=${ifDefined(size)}
    ></faaw7-spinner>
  `,
};

export default meta;

type Story = StoryObj<SpinnerArgs>;

export const Default: Story = {
  args: {
    size: '20px',
  },
};

export const Large: Story = {
  args: {
    size: '40px',
  },
};