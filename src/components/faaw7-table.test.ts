import { html } from 'lit';
import { fixture, elementUpdated } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';
import { waitUntil } from '@open-wc/testing-helpers';
import './faaw7-table.ts';
import type { Faaw7Table } from './faaw7-table';

describe('faaw7-table', () => {

  it('should render slot content (table)', async () => {
    const el = await fixture<Faaw7Table>(html`
      <faaw7-table>
        <table><thead><tr><th>Test</th></tr></thead></table>
      </faaw7-table>
    `);
    
    const table = el.querySelector('table');
    expect(table).to.exist;
    expect(table!.textContent).to.include('Test');
  });

  it('should toggle scrollable class and style based on property', async () => {
    const el = await fixture<Faaw7Table>(html`<faaw7-table height="200px"></faaw7-table>`);
    
    expect(el.classList.contains('scrollable')).to.be.false;
    expect(el.style.height).to.equal('auto');

    el.scrollable = true;
    await elementUpdated(el);
    await waitUntil(() => el.style.height === '200px')
    
    expect(el.classList.contains('scrollable')).to.be.true;
    expect(el.style.height).to.equal('200px');
  });

  it('should toggle has-shadow class based on property', async () => {
    const el = await fixture<Faaw7Table>(html`<faaw7-table></faaw7-table>`);
    
    expect(el.classList.contains('faaw7-has-shadow')).to.be.false;
    
    el.hasShadow = true;
    await elementUpdated(el);
    expect(el.classList.contains('faaw7-has-shadow')).to.be.true;
  });

});