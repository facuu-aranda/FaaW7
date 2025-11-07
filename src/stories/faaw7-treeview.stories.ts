import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../src/components/faaw7-treeview.ts';

interface TreeViewArgs {
  container: boolean;
  collapsible: boolean;
  connector: boolean;
}

const meta: Meta<TreeViewArgs> = {
  title: 'FAAW7/TreeView',
  component: 'faaw7-treeview',
  tags: ['autodocs'],
  argTypes: {
    container: { control: 'boolean' },
    collapsible: { control: 'boolean' },
    connector: { control: 'boolean' },
  },
  render: ({ container, collapsible, connector }) => html`
    <faaw7-treeview
      ?container=${container}
      ?collapsible=${collapsible}
      ?connector=${connector}
    >
      <ul>
        <li>
          <details open>
            <summary>Disco Local (C:)</summary>
            <ul>
              <li>
                <details>
                  <summary>Archivos de Programa</summary>
                  <ul>
                    <li><span>App1</span></li>
                    <li><span>App2</span></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Usuarios</summary>
                  <ul>
                    <li><a href="#">Usuario1</a></li>
                    <li><a href="#">Usuario2</a></li>
                  </ul>
                </details>
              </li>
              <li><span>Windows</span></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Disco de Datos (D:)</summary>
            <ul>
              <li><span>Juegos</span></li>
              <li><span>Documentos</span></li>
            </ul>
          </details>
        </li>
      </ul>
    </faaw7-treeview>
  `,
};

export default meta;

type Story = StoryObj<TreeViewArgs>;

export const Default: Story = {
  args: {
    container: false,
    collapsible: false,
    connector: false,
  },
};

export const Collapsible: Story = {
  args: {
    container: false,
    collapsible: true,
    connector: false,
  },
};

export const Connector: Story = {
  args: {
    container: false,
    collapsible: false,
    connector: true,
  },
};

export const Full: Story = {
  args: {
    container: true,
    collapsible: true,
    connector: true,
  },
};

export const Themed: Story = {
  name: 'Personalizado (Themed)',
  args: {
    ...Full.args,
  },
  render: (args) => html`
    <style>
      .themed-tree {
        --faaw7-font-family: 9pt "Arial", sans-serif;
        --faaw7-color-text: #333;
        --faaw7-color-border: #999;
      }
    </style>
    <faaw7-treeview
      class="themed-tree"
      ?container=${args.container}
      ?collapsible=${args.collapsible}
      ?connector=${args.connector}
    >
      <ul>
        <li>
          <details open>
            <summary>Disco Local (C:)</summary>
            <ul>
              <li>
                <details>
                  <summary>Archivos de Programa</summary>
                  <ul>
                    <li><span>App1</span></li>
                  </ul>
                </details>
              </li>
              <li><span>Windows</span></li>
            </ul>
          </details>
        </li>
      </ul>
    </faaw7-treeview>
  `,
};