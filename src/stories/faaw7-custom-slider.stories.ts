import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-custom-slider.ts';

interface CustomSliderArgs {
  min: number;
  max: number;
  step: number;
  value: number;
  onFaaw7Change: (e: Event) => void;
}

const meta: Meta<CustomSliderArgs> = {
  title: 'FAAW7/CustomSlider',
  component: 'faaw7-custom-slider',
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number' },
    onFaaw7Change: { action: 'faaw7-change' },
  },
  render: ({ min, max, step, value, onFaaw7Change }) => html`
    <faaw7-custom-slider
      .min=${min}
      .max=${max}
      .step=${step}
      .value=${value}
      @faaw7-change=${onFaaw7Change}
      style="width: 300px; margin-top: 30px;"
    ></faaw7-custom-slider>
  `,
};

export default meta;

type Story = StoryObj<CustomSliderArgs>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
  },
};

export const Stepped: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    value: 30,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Default.args,
  },
  render: (args) => html`
    <style>
      .themed-slider {
        --faaw7-color-surface: #ccc;
        --faaw7-color-border: #999;
        --faaw7-color-border-hover: #000;
        --faaw7-gradient-bg: linear-gradient(#fff, #eee);
      }
      .themed-slider::part(tooltip) {
        background: #000;
      }
    </style>
    <faaw7-custom-slider
      class="themed-slider"
      .min=${args.min}
      .max=${args.max}
      .step=${args.step}
      .value=${args.value}
      @faaw7-change=${args.onFaaw7Change}
      style="width: 300px; margin-top: 30px;"
    ></faaw7-custom-slider>
  `,
};