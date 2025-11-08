import { html } from 'lit';
import { fixture, expect, elementUpdated } from '@open-wc/testing';
import { describe, it } from 'vitest';

import './faaw7-slider.ts';
import type { Faaw7Slider } from './faaw7-slider';

describe('faaw7-slider (Form Integration)', () => {

  it('should render and pass accessibility checks', async () => {
    const el = await fixture<Faaw7Slider>(html`
      <faaw7-slider aria-label="Volume"></faaw7-slider>
    `);
    await expect(el).to.be.accessible();
  });

  it('should associate with a form and set its initial value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-slider name="volume" value="75"></faaw7-slider>
      </form>
    `);
    
    const formData = new FormData(form);
    expect(formData.get('volume')).to.equal('75');
  });

  it('should update form value on input change', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-slider name="volume" value="75"></faaw7-slider>
      </form>
    `);
    
    const el = form.querySelector<Faaw7Slider>('faaw7-slider')!;
    const input = el.shadowRoot!.querySelector('input')!;

    input.value = '30';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await elementUpdated(el);

    expect(el.value).to.equal(30);
    
    const formData = new FormData(form);
    expect(formData.get('volume')).to.equal('30');
  });

  it('should reflect disabled state', async () => {
    const el = await fixture<Faaw7Slider>(html`<faaw7-slider disabled></faaw7-slider>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.disabled).to.be.true;
  });

  it('should reflect vertical state', async () => {
    const el = await fixture<Faaw7Slider>(html`<faaw7-slider vertical></faaw7-slider>`);
    expect(el.hasAttribute('vertical')).to.be.true;
  });

});