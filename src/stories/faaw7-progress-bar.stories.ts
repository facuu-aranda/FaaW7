import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-progress-bar.ts';

interface ProgressBarArgs {
  value: number;
  state: 'normal' | 'paused' | 'error';
  mode: 'determinate' | 'animate' | 'marquee';
}

const meta: Meta<ProgressBarArgs> = {
  title: 'FAAW7/ProgressBar',
  component: 'faaw7-progress-bar',
  tags: ['autodocs'],
  argTypes: {
    value: { 
      control: { type: 'range', min: 0, max: 100, step: 1 },
      if: { arg: 'mode', neq: 'marquee' } 
    },
    state: {
      control: 'select',
      options: ['normal', 'paused', 'error'],
    },
    mode: {
      control: 'select',
      options: ['determinate', 'animate', 'marquee'],
    },
  },
  render: ({ value, state, mode }) => html`
    <faaw7-progress-bar
      .value=${value}
      .state=${state}
      .mode=${mode}
    ></faaw7-progress-bar>
  `,
};

export default meta;

type Story = StoryObj<ProgressBarArgs>;

export const Determinate: Story = {
  args: {
    value: 45,
    state: 'normal',
    mode: 'determinate',
  },
};

export const Animate: Story = {
  args: {
    value: 75,
    state: 'normal',
    mode: 'animate',
  },
};

export const Paused: Story = {
  args: {
    value: 60,
    state: 'paused',
    mode: 'determinate',
  },
};

export const ErrorState: Story = {
  args: {
    value: 80,
    state: 'error',
    mode: 'determinate',
  },
};

export const Marquee: Story = {
  args: {
    value: 100,
    state: 'normal',
    mode: 'marquee',
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Animate.args,
  },
  render: (args) => html`
    <style>
      .themed-progress {
        --faaw7-color-progress-bar: #00529b;
        --faaw7-border-radius: 0px;
        --faaw7-color-border: #00529b;
      }
      .themed-progress::part(container) {
        border-radius: 0px;
      }
    </style>
    <faaw7-progress-bar
      class="themed-progress"
      .value=${args.value}
      .state=${args.state}
      .mode=${args.mode}
    ></faaw7-progress-bar>
  `,
};