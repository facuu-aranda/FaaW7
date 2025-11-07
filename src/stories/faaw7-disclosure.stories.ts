import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-disclosure.ts';

const meta: Meta = {
  title: 'FAAW7/Disclosure',
  component: 'faaw7-disclosure',
  tags: ['autodocs'],
  render: () => html`
    <faaw7-disclosure>
      <details>
        <summary>Ver más detalles</summary>
        <div>
          <p>Este es el contenido que estaba oculto.</p>
          <p>Puede ser cualquier elemento HTML.</p>
        </div>
      </details>
    </faaw7-disclosure>
  `,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <faaw7-disclosure>
      <details>
        <summary>Ver más detalles</summary>
        <div>
          <p>Este es el contenido que estaba oculto.</p>
        </div>
      </details>
    </faaw7-disclosure>
    
    <faaw7-disclosure>
      <details open>
        <summary>Abierto por defecto</summary>
        <div>
          <p>Este contenido es visible desde el principio.</p>
        </div>
      </details>
    </faaw7-disclosure>
  `
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  render: () => html`
    <style>
      .themed-disclosure {
        --faaw7-font-family: 9pt "Arial", sans-serif;
        --faaw7-color-text: #8B0000;
      }
    </style>
    <faaw7-disclosure class="themed-disclosure">
      <details>
        <summary>Ver detalles (Rojo)</summary>
        <div>
          <p>Este contenido está en rojo.</p>
        </div>
      </details>
    </faaw7-disclosure>
  `
};