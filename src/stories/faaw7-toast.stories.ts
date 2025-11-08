import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-toast-container.ts';
import '../../src/components/faaw7-button.ts';

const meta: Meta = {
  title: 'FAAW7/Toast',
  component: 'faaw7-toast-container',
  tags: ['autodocs'],
  render: () => {
    const showToast = () => {
      const container = document.getElementById('story-toast-container') as any;
      if (container) {
        container.showToast(`¡Nueva notificación! ${new Date().toLocaleTimeString()}`);
      }
    };

    return html`
      <faaw7-button @click=${showToast}>Mostrar Notificación</faaw7-button>
      
      <faaw7-toast-container id="story-toast-container"></faaw7-toast-container>
    `;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  render: () => {
    const showToast = () => {
      const container = document.getElementById('story-toast-container-themed') as any;
      if (container) {
        container.showToast(`¡Notificación oscura! ${new Date().toLocaleTimeString()}`);
      }
    };
    
    return html`
      <style>
        .themed-toast faaw7-toast::part(toast) {
          --faaw7-color-surface: #333;
          --faaw7-color-text: #eee;
          --faaw7-color-border: #555;
        }
      </style>
      
      <faaw7-button @click=${showToast}>Mostrar Notificación Oscura</faaw7-button>
      
      <faaw7-toast-container id="story-toast-container-themed" class="themed-toast">
      </faaw7-toast-container>
    `;
  }
};