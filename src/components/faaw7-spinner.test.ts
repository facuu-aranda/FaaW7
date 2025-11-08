import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { describe, it } from 'vitest';

import './faaw7-spinner.ts';
import type { Faaw7Spinner } from './faaw7-spinner';

describe('faaw7-spinner', () => {

  it('should render with ARIA role="status"', async () => {
    const el = await fixture<Faaw7Spinner>(html`<faaw7-spinner></faaw7-spinner>`);
    const spinnerDiv = el.shadowRoot!.querySelector('.spinner');
    
    expect(spinnerDiv).to.exist;
    expect(spinnerDiv!.getAttribute('role')).to.equal('status');
  });

  it('should have a default size of 20px', async () => {
    const el = await fixture<Faaw7Spinner>(html`<faaw7-spinner></faaw7-spinner>`);
    expect(el.size).to.equal('20px');
  });

  it('should apply custom size', async () => {
    const el = await fixture<Faaw7Spinner>(html`
      <faaw7-spinner size="50px"></faaw7-spinner>
    `);
    
    expect(el.size).to.equal('50px');
  });

});