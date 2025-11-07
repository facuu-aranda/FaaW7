import { html } from 'lit';
import { fixture, elementUpdated } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';

import './faaw7-treeview.ts';
import type { Faaw7TreeView } from './faaw7-treeview';

describe('faaw7-treeview', () => {

  it('should render slot content', async () => {
    const el = await fixture<Faaw7TreeView>(html`
      <faaw7-treeview>
        <ul><li>Test</li></ul>
      </faaw7-treeview>
    `);
    expect(el.textContent).to.include('Test');
  });

  it('should toggle container class based on property', async () => {
    const el = await fixture<Faaw7TreeView>(html`<faaw7-treeview></faaw7-treeview>`);
    
    expect(el.classList.contains('container')).to.be.false;
    
    el.container = true;
    await elementUpdated(el);
    expect(el.classList.contains('container')).to.be.true;
  });

  it('should toggle collapsible class based on property', async () => {
    const el = await fixture<Faaw7TreeView>(html`<faaw7-treeview></faaw7-treeview>`);
    
    expect(el.classList.contains('collapsible')).to.be.false;
    
    el.collapsible = true;
    await elementUpdated(el);
    expect(el.classList.contains('collapsible')).to.be.true;
  });

  it('should toggle connector class based on property', async () => {
    const el = await fixture<Faaw7TreeView>(html`<faaw7-treeview></faaw7-treeview>`);
    
    expect(el.classList.contains('connector')).to.be.false;
    
    el.connector = true;
    await elementUpdated(el);
    expect(el.classList.contains('connector')).to.be.true;
  });

});