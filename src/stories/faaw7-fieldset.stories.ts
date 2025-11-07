import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-fieldset.ts';
import '../../src/components/faaw7-checkbox.ts';
import '../../src/components/faaw7-radio-group.ts';
import '../../src/components/faaw7-radio.ts';

const meta: Meta = {
  title: 'FAAW7/Fieldset',
  component: 'faaw7-fieldset',
  tags: ['autodocs'],
  render: () => html`
    <faaw7-fieldset>
      <fieldset>
        <legend>Grupo de Opciones</legend>
        
        <faaw7-checkbox checked>Opción 1 (marcada)</faaw7-checkbox>
        <faaw7-checkbox>Opción 2</faaw7-checkbox>
        
        <faaw7-radio-group value="a" style="margin-top: 10px;">
          <faaw7-radio value="a">Radio A</faaw7-radio>
          <faaw7-radio value="b">Radio B</faaw7-radio>
        </faaw7-radio-group>
        
      </fieldset>
    </faaw7-fieldset>
  `,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  render: () => html`
    <style>
      .themed-fieldset {
        --faaw7-font-family: 9pt "Arial", sans-serif;
        --faaw7-color-text: #333;
      }
      .themed-fieldset > fieldset {
        border-color: #999;
      }
      .themed-fieldset > fieldset > legend {
        font-weight: bold;
        color: #000;
      }
    </style>
    <faaw7-fieldset class="themed-fieldset">
      <fieldset>
        <legend>Grupo Personalizado</legend>
        <faaw7-checkbox>Opción 1</faaw7-checkbox>
        <faaw7-checkbox>Opción 2</faaw7-checkbox>
      </fieldset>
    </faaw7-fieldset>
  `,
};