import { html } from 'lit';
import { fixture, oneEvent, elementUpdated } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';
import sinon from 'sinon';

import './faaw7-checkbox.ts';
import type { Faaw7Checkbox } from './faaw7-checkbox';
describe('faaw7-checkbox (Form Integration)', () => {

  it('should render an unchecked checkbox by default', async () => {
    const el = await fixture<Faaw7Checkbox>(html`
      <faaw7-checkbox>Test</faaw7-checkbox>
    `);
    
    expect(el.checked).to.be.false;
    await expect(el).to.be.accessible();
  });

  it('should render a checked checkbox when checked prop is set', async () => {
    const el = await fixture<Faaw7Checkbox>(html`
      <faaw7-checkbox checked>Test</faaw7-checkbox>
    `);
    
    expect(el.checked).to.be.true;
    await expect(el).to.be.accessible();
  });

  it('should toggle checked property on label click', async () => {
    const el = await fixture<Faaw7Checkbox>(html`
      <faaw7-checkbox>Test</faaw7-checkbox>
    `);
    
    const label = el.shadowRoot!.querySelector('label')!;
    
    expect(el.checked).to.be.false;
    
    label.click();
    await elementUpdated(el);
    
    expect(el.checked).to.be.true;
    
    label.click();
    await elementUpdated(el);
    
    expect(el.checked).to.be.false;
  });

  it('should dispatch faaw7-change event on click', async () => {
    const el = await fixture<Faaw7Checkbox>(html`
      <faaw7-checkbox>Test</faaw7-checkbox>
    `);
    
    const label = el.shadowRoot!.querySelector('label')!;
    const listener = oneEvent(el, 'faaw7-change');
    
    label.click();
    
    const event = await listener as CustomEvent;
    
    expect(event).to.exist;
    expect(event.detail.checked).to.be.true;
  });

  it('should not toggle or dispatch event when disabled', async () => {
    const changeSpy = sinon.spy();
    const el = await fixture<Faaw7Checkbox>(html`
      <faaw7-checkbox disabled @faaw7-change=${changeSpy}>Test</faaw7-checkbox>
    `);
    
    const label = el.shadowRoot!.querySelector('label')!;
    
    expect(el.checked).to.be.false;
    
    label.click();
    await elementUpdated(el);
    
    expect(el.checked).to.be.false;
    expect(changeSpy.called).to.be.false;
  });

  it('should associate with a form and set its value when checked', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-checkbox name="test" value="my-value"></faaw7-checkbox>
      </form>
    `);
    
    const el = form.querySelector<Faaw7Checkbox>('faaw7-checkbox')!;
    const label = el.shadowRoot!.querySelector('label')!;

    let formData = new FormData(form);
    expect(formData.get('test')).to.be.null;

    label.click();
    await elementUpdated(el);

    formData = new FormData(form);
    expect(formData.get('test')).to.equal('my-value');

    label.click();
    await elementUpdated(el);

    formData = new FormData(form);
    expect(formData.get('test')).to.be.null;
  });

  it('should use "on" as default form value if value prop is not set', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-checkbox name="test" checked></faaw7-checkbox>
      </form>
    `);

    const formData = new FormData(form);
    expect(formData.get('test')).to.equal('on');
  });

});