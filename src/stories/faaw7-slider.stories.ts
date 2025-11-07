import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import '../../src/components/faaw7-slider.ts';

interface SliderArgs {
  min: number;
  max: number;
  step: number;
  value: number;
  disabled: boolean;
  vertical: boolean;
  boxIndicator: boolean;
  onFaaw7Change: (e: Event) => void;
}

const meta: Meta<SliderArgs> = {
  title: 'FAAW7/Slider',
  component: 'faaw7-slider',
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number' },
    disabled: { control: 'boolean' },
    vertical: { control: 'boolean' },
    boxIndicator: { control: 'boolean' },
    onFaaw7Change: { action: 'faaw7-change' }
  },
  render: ({ min, max, step, value, disabled, vertical, boxIndicator, onFaaw7Change }) => {
    const containerStyles = {
      width: vertical ? '30px' : '200px',
      height: vertical ? '200px' : 'auto',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    };
    
    return html`
      <div style=${styleMap(containerStyles)}>
        <faaw7-slider
          .min=${min}
          .max=${max}
          .step=${step}
          .value=${value}
          ?disabled=${disabled}
          ?vertical=${vertical}
          ?box-indicator=${boxIndicator}
          @faaw7-change=${onFaaw7Change}
        ></faaw7-slider>
      </div>
    `;
  },
};

export default meta;

type Story = StoryObj<SliderArgs>;

export const Horizontal: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    disabled: false,
    vertical: false,
    boxIndicator: false,
  },
};

export const BoxIndicator: Story = {
  args: {
    ...Horizontal.args,
    value: 25,
    boxIndicator: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Horizontal.args,
    value: 75,
    disabled: true,
  },
};

export const Vertical: Story = {
  args: {
    ...Horizontal.args,
    value: 60,
    vertical: true,
  },
};