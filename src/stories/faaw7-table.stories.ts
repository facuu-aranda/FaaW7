import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../../src/components/faaw7-table.ts';

interface TableArgs {
  hasShadow: boolean;
  scrollable: boolean;
  height: string;
}

const meta: Meta<TableArgs> = {
  title: 'FAAW7/Table',
  component: 'faaw7-table',
  tags: ['autodocs'],
  argTypes: {
    hasShadow: { control: 'boolean' },
    scrollable: { control: 'boolean' },
    height: { control: 'text', if: { arg: 'scrollable' } },
  },
  render: ({ hasShadow, scrollable, height }) => html`
    <faaw7-table 
      ?has-shadow=${hasShadow}
      ?scrollable=${scrollable}
      .height=${ifDefined(scrollable ? height : undefined)}
    >
      <table>
        <thead>
          <tr>
            <th style="width: 50%;">Nombre de Archivo</th>
            <th style="width: 25%;">Tamaño</th>
            <th style="width: 25%;">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>documento1.txt</td>
            <td>15 KB</td>
            <td>01/10/2025</td>
          </tr>
          <tr>
            <td>imagen_01.jpg</td>
            <td>2.3 MB</td>
            <td>02/10/2025</td>
          </tr>
          <tr class="faaw7-highlighted">
            <td>presentacion.ppt</td>
            <td>5.1 MB</td>
            <td>03/10/2025</td>
          </tr>
          <tr>
            <td>calculos.xls</td>
            <td>450 KB</td>
            <td>04/10/2025</td>
          </tr>
          <tr>
            <td>video_final.mp4</td>
            <td>128 MB</td>
            <td>05/10/2025</td>
          </tr>
          <tr>
            <td>otro_doc.txt</td>
            <td>18 KB</td>
            <td>06/10/2025</td>
          </tr>
          <tr>
            <td>logo.png</td>
            <td>98 KB</td>
            <td>07/10/2025</td>
          </tr>
        </tbody>
      </table>
    </faaw7-table>
  `,
};

export default meta;

type Story = StoryObj<TableArgs>;

export const Default: Story = {
  args: {
    hasShadow: false,
    scrollable: false,
  },
};

export const Scrollable: Story = {
  args: {
    hasShadow: false,
    scrollable: true,
    height: '150px',
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Default.args,
  },
  render: (args) => html`
    <style>
      .themed-table {
        --faaw7-font-family: 9pt "Arial", sans-serif;
        --faaw7-color-border-light: #aaa;
        --faaw7-color-highlight-bg-light: linear-gradient(#f0f0f0, #e0e0e0);
        --faaw7-color-highlight-border: #999;
      }
    </style>
    <faaw7-table 
      class="themed-table"
      ?has-shadow=${args.hasShadow}
      ?scrollable=${args.scrollable}
      .height=${ifDefined(args.scrollable ? args.height : undefined)}
    >
      <table>
        <thead>
          <tr>
            <th style="width: 50%;">Nombre de Archivo</th>
            <th style="width: 25%;">Tamaño</th>
            <th style="width: 25%;">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>documento1.txt</td>
            <td>15 KB</td>
            <td>01/10/2025</td>
          </tr>
          <tr class="faaw7-highlighted">
            <td>presentacion.ppt</td>
            <td>5.1 MB</td>
            <td>03/10/2025</td>
          </tr>
          <tr>
            <td>calculos.xls</td>
            <td>450 KB</td>
            <td>04/10/2025</td>
          </tr>
        </tbody>
      </table>
    </faaw7-table>
  `,
};