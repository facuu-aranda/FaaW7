import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { describe, it } from 'vitest';

import './faaw7-status-bar-field.ts';
import type { Faaw7StatusBarField } from './faaw7-status-bar-field';

describe('faaw7-status-bar-field', () => {

  it('should render slot content', async () => {
    const el = await fixture<Faaw7StatusBarField>(html`
      <faaw7-status-bar-field>Listo</faaw7-status-bar-field>
    `);
    expect(el.textContent).to.include('Listo');
  });

  it('should reflect fixed attribute', async () => {
    const el = await fixture<Faaw7StatusBarField>(html`
      <faaw7-status-bar-field fixed>CPU: 5%</faaw7-status-bar-field>
    `);
    
    expect(el.hasAttribute('fixed')).to.be.true;
  });

  it('should not be fixed by default', async () => {
    const el = await fixture<Faaw7StatusBarField>(html`
      <faaw7-status-bar-field>Test</faaw7-status-bar-field>
    `);
    
    expect(el.hasAttribute('fixed')).to.be.false;
  });

});