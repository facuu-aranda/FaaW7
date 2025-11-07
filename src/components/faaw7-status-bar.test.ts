import { html } from 'lit';
import { fixture } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';

import './faaw7-status-bar.ts';
import type { Faaw7StatusBar } from './faaw7-status-bar';
import './faaw7-status-bar-field.ts';

describe('faaw7-status-bar', () => {

  it('should render with ARIA role="toolbar"', async () => {
    const el = await fixture<Faaw7StatusBar>(html`<faaw7-status-bar></faaw7-status-bar>`);
    const container = el.shadowRoot!.querySelector('.status-bar-container');
    
    expect(container).to.exist;
    expect(container!.getAttribute('role')).to.equal('toolbar');
  });

  it('should render slot content', async () => {
    const el = await fixture<Faaw7StatusBar>(html`
      <faaw7-status-bar>
        <faaw7-status-bar-field>Test</faaw7-status-bar-field>
      </faaw7-status-bar>
    `);
    
    const field = el.querySelector('faaw7-status-bar-field');
    expect(field).to.exist;
    expect(field!.textContent).to.include('Test');
  });

});