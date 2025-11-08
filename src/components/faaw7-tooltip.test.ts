import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { describe, it } from 'vitest';

import './faaw7-tooltip.ts';
import type { Faaw7Tooltip } from './faaw7-tooltip';

describe('faaw7-tooltip', () => {

  it('should render default slot content', async () => {
    const el = await fixture<Faaw7Tooltip>(html`
      <faaw7-tooltip>
        <button>Hover me</button>
      </faaw7-tooltip>
    `);
    expect(el.textContent).to.include('Hover me');
  });

  it('should render tooltip content in the tooltip part', async () => {
    const el = await fixture<Faaw7Tooltip>(html`
      <faaw7-tooltip content="This is a test"></faaw7-tooltip>
    `);
    
    const tooltipPart = el.shadowRoot!.querySelector('[part="tooltip"]');
    expect(tooltipPart).to.exist;
    expect(tooltipPart!.textContent).to.include('This is a test');
  });

  it('should have default position "top"', async () => {
    const el = await fixture<Faaw7Tooltip>(html`
      <faaw7-tooltip content="Test"></faaw7-tooltip>
    `);
    
    expect(el.position).to.equal('top');
  });

  it('should reflect position attribute', async () => {
    const el = await fixture<Faaw7Tooltip>(html`
      <faaw7-tooltip content="Test" position="bottom"></faaw7-tooltip>
    `);
    
    expect(el.position).to.equal('bottom');
    expect(el.getAttribute('position')).to.equal('bottom');
  });

});