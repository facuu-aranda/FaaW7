import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { describe, it } from 'vitest';

import './faaw7-icon-button.ts';
import type { Faaw7IconButton } from './faaw7-icon-button';

describe('faaw7-icon-button', () => {

  it('should render successfully and pass accessibility checks', async () => {
    const el = await fixture<Faaw7IconButton>(html`
      <faaw7-icon-button aria-label="Test"></faaw7-icon-button>
    `);
    await expect(el).to.be.accessible();
  });

  it('should apply the disabled attribute', async () => {
    const el = await fixture<Faaw7IconButton>(html`
      <faaw7-icon-button disabled aria-label="Disabled"></faaw7-icon-button>
    `);
    
    const button = el.shadowRoot!.querySelector('button')!;
    
    expect(el.disabled).to.be.true;
    expect(button.disabled).to.be.true;
  });

  it('should apply iconUrl, iconHoverUrl, and iconActiveUrl', async () => {
    const el = await fixture<Faaw7IconButton>(html`
      <faaw7-icon-button 
        iconUrl="test.svg"
        iconHoverUrl="hover.svg"
        iconActiveUrl="active.svg"
      ></faaw7-icon-button>
    `);
    
    const styleTag = el.shadowRoot!.querySelector('style')!;
    const styleText = styleTag.textContent;

    expect(styleText).to.include('url(test.svg)');
    expect(styleText).to.include('url(hover.svg)');
    expect(styleText).to.include('url(active.svg)');
  });

  it('should use iconUrl as fallback for hover and active', async () => {
    const el = await fixture<Faaw7IconButton>(html`
      <faaw7-icon-button iconUrl="test.svg"></faaw7-icon-button>
    `);
    
    const styleTag = el.shadowRoot!.querySelector('style')!;
    const styleText = styleTag.textContent;

    expect(styleText).to.include('--icon-url: url(test.svg)');
    expect(styleText).to.include('--icon-hover-url: url(test.svg)');
    expect(styleText).to.include('--icon-active-url: url(test.svg)');
  });

});