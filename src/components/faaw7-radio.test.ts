import { html } from 'lit';
import { fixture, expect, oneEvent, elementUpdated } from '@open-wc/testing';
import { describe, it } from 'vitest';
import sinon from 'sinon';

import './faaw7-radio.ts';
import type { Faaw7Radio } from './faaw7-radio';

describe('faaw7-radio', () => {

  it('should render an unchecked radio by default', async () => {
    const el = await fixture<Faaw7Radio>(html`<faaw7-radio>Test</faaw7-radio>`);
    expect(el.checked).to.be.false;
    await expect(el).to.be.accessible();
  });

  it('should render a checked radio when checked prop is set', async () => {
    const el = await fixture<Faaw7Radio>(html`
      <faaw7-radio checked>Test</faaw7-radio>
    `);
    expect(el.checked).to.be.true;
  });

  it('should check radio on label click', async () => {
    const el = await fixture<Faaw7Radio>(html`<faaw7-radio>Test</faaw7-radio>`);
    const label = el.shadowRoot!.querySelector('label')!;
    
    expect(el.checked).to.be.false;
    
    label.click();
    await elementUpdated(el);
    
    expect(el.checked).to.be.true;
  });

  it('should dispatch faaw7-change event on click', async () => {
    const el = await fixture<Faaw7Radio>(html`
      <faaw7-radio value="a">Test</faaw7-radio>
    `);
    
    const label = el.shadowRoot!.querySelector('label')!;
    const listener = oneEvent(el, 'faaw7-change');
    
    label.click();
    
    const event = await listener as CustomEvent;
    
    expect(event).to.exist;
    expect(event.detail.value).to.equal('a');
  });

  it('should not check or dispatch event when disabled', async () => {
    const changeSpy = sinon.spy();
    const el = await fixture<Faaw7Radio>(html`
      <faaw7-radio disabled @faaw7-change=${changeSpy}>Test</faaw7-radio>
    `);
    
    const label = el.shadowRoot!.querySelector('label')!;
    
    label.click();
    await elementUpdated(el);
    
    expect(el.checked).to.be.false;
    expect(changeSpy.called).to.be.false;
  });

});