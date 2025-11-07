import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-audio-player.ts';

interface AudioPlayerArgs {
  src: string;
}

const meta: Meta<AudioPlayerArgs> = {
  title: 'FAAW7/AudioPlayer',
  component: 'faaw7-audio-player',
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
  },
  render: ({ src }) => html`
    <faaw7-audio-player
      .src=${ifDefined(src)}
    ></faaw7-audio-player>
  `,
};

export default meta;

type Story = StoryObj<AudioPlayerArgs>;

export const Default: Story = {
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Default.args,
  },
  render: (args) => html`
    <style>
      .themed-player {
        --faaw7-color-surface-dark: #333;
        --faaw7-color-border-disabled: #555;
        --faaw7-color-text: #eee;
        --faaw7-color-progress-bar: #008000;
      }
      .themed-player::part(play-button) {
        --faaw7-gradient-bg: #444;
        --faaw7-color-border: #666;
        --faaw7-gradient-bg-hover: #555;
        --faaw7-color-border-hover: #777;
      }
    </style>
    <faaw7-audio-player
      class="themed-player"
      .src=${ifDefined(args.src)}
    ></faaw7-audio-player>
  `,
};