import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-accordion.ts';

const meta: Meta = {
  title: 'FAAW7/Accordion',
  component: 'faaw7-accordion',
  tags: ['autodocs'],
  render: () => html`
    <faaw7-accordion>
      <details open>
        <summary>Sección 1</summary>
        <div>
          <p>Contenido de la primera sección.</p>
          <p>Puede contener cualquier HTML.</p>
        </div>
      </details>
      <details>
        <summary>Sección 2</summary>
        <div>
          <p>Contenido de la segunda sección.</p>
        </div>
      </details>
      <details>
        <summary>Sección 3</summary>
        <div>
          <p>Contenido de la tercera sección.</p>
        </div>
      </details>
    </faaw7-accordion>
  `,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  render: () => html`
    <style>
      .themed-accordion {
        --faaw7-font-family: 9pt "Arial", sans-serif;
        --faaw7-color-text: #333;
        --faaw7-color-border-disabled: #aaa;
      }
    </style>
    <faaw7-accordion class="themed-accordion">
      <details open>
        <summary>Sección 1</summary>
        <div>
          <p>Contenido de la primera sección.</p>
        </div>
      </details>
      <details>
        <summary>Sección 2</summary>
        <div>
          <p>Contenido de la segunda sección.</p>
        </div>
      </details>
    </faaw7-accordion>
  `,
};