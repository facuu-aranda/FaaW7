import { html } from 'lit';
import { fixture } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';

import './faaw7-progress-bar.ts';
import type { Faaw7ProgressBar } from './faaw7-progress-bar';

describe('faaw7-progress-bar', () => {
  
  it('should render with correct ARIA role', async () => {
    const el = await fixture<Faaw7ProgressBar>(html`<faaw7-progress-bar></faaw7-progress-bar>`);
    const container = el.shadowRoot!.querySelector('[role="progressbar"]');
    expect(container).to.exist;
  });

  it('should set the inner bar width based on value', async () => {
    const el = await fixture<Faaw7ProgressBar>(html`
      <faaw7-progress-bar value="45"></faaw7-progress-bar>
    `);
    
    const innerBar = el.shadowRoot!.querySelector('.progress-bar-inner') as HTMLElement;
    expect(innerBar.style.width).to.equal('45%');
  });

  it('should apply paused state class', async () => {
    const el = await fixture<Faaw7ProgressBar>(html`
      <faaw7-progress-bar value="50" state="paused"></faaw7-progress-bar>
    `);
    
    const container = el.shadowRoot!.querySelector('[role="progressbar"]');
    expect(container!.classList.contains('faaw7-progress-paused')).to.be.true;
  });

  it('should apply error state class', async () => {
    const el = await fixture<Faaw7ProgressBar>(html`
      <faaw7-progress-bar value="50" state="error"></faaw7-progress-bar>
    `);
    
    const container = el.shadowRoot!.querySelector('[role="progressbar"]');
    expect(container!.classList.contains('faaw7-progress-error')).to.be.true;
  });

  it('should apply animate mode class', async () => {
    const el = await fixture<Faaw7ProgressBar>(html`
      <faaw7-progress-bar value="50" mode="animate"></faaw7-progress-bar>
    `);
    
    const container = el.shadowRoot!.querySelector('[role="progressbar"]');
    expect(container!.classList.contains('faaw7-progress-animate')).to.be.true;
  });

  it('should apply marquee mode class and 100% width', async () => {
    const el = await fixture<Faaw7ProgressBar>(html`
      <faaw7-progress-bar value="30" mode="marquee"></faaw7-progress-bar>
    `);
    
    const container = el.shadowRoot!.querySelector('[role="progressbar"]');
    const innerBar = el.shadowRoot!.querySelector('.progress-bar-inner') as HTMLElement;
    
    expect(container!.classList.contains('faaw7-progress-marquee')).to.be.true;
    expect(innerBar.style.width).to.equal('100%');
  });

});