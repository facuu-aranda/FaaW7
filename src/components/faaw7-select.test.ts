import { html } from 'lit';
import { fixture, oneEvent, elementUpdated } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';
import { waitUntil } from '@open-wc/testing-helpers';

import './faaw7-select.ts';
import type { Faaw7Select } from './faaw7-select.ts';

describe('faaw7-select (Form Integration)', () => {

  it('should render options and pass accessibility checks', async () => {
    const wrapper = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-select aria-label="Test">
          <option value="1">Opt 1</option>
          <option value="2">Opt 2</option>
        </faaw7-select>
      </form>
    `);
    const el = wrapper.querySelector('faaw7-select')!;
    expect(el.querySelectorAll('option').length).to.equal(2);
    await expect(el).to.be.accessible();
  });

  it('should set default value', async () => {
    const wrapper = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-select value="2">
          <option value="1">Opt 1</option>
          <option value="2">Opt 2</option>
        </faaw7-select>
      </form>
    `);
    const el = wrapper.querySelector('faaw7-select')!;
    
    await elementUpdated(el); 
  
    const select = el.shadowRoot!.querySelector('select')!;
    await waitUntil(() => select.value === '2');
    
    expect(select.value).to.equal('2');
  });

  it('should dispatch faaw7-change on change', async () => {
    const wrapper = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-select>
          <option value="1">Opt 1</option>
          <option value="2">Opt 2</option>
        </faaw7-select>
      </form>
    `);
    const el = wrapper.querySelector('faaw7-select')!;
    
    const select = el.shadowRoot!.querySelector('select')!;
    const listener = oneEvent(el, 'faaw7-change');
    
    select.value = '2';
    select.dispatchEvent(new Event('change', { bubbles: true }));
    
    const event = await listener as CustomEvent;
    
    expect(el.value).to.equal('2'); 
    expect(event.detail.value).to.equal('2');
  });

  it('should associate with a form and set its value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-select name="test-select" value="b">
          <option value="a">A</option>
          <option value="b">B</option>
        </faaw7-select>
      </form>
    `);
    
    const formData = new FormData(form);
    expect(formData.get('test-select')).to.equal('b');
  });

  it('should update form value on change', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-select name="test-select" value="a">
          <option value="a">A</option>
          <option value="b">B</option>
        </faaw7-select>
      </form>
    `);
    
    const el = form.querySelector<Faaw7Select>('faaw7-select')!;
    await elementUpdated(el);
    
    const select = el.shadowRoot!.querySelector('select')!;

    await waitUntil(() => select.value === 'a');
    
    select.value = 'b';
    select.dispatchEvent(new Event('change', { bubbles: true }));
    await elementUpdated(el);

    const formData = new FormData(form);
    expect(formData.get('test-select')).to.equal('b'); 
  });
});