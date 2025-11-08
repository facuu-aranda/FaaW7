import { html } from 'lit';
import { fixture, elementUpdated, expect } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';

import './faaw7-combobox.ts';
import './faaw7-menu.ts';
import './faaw7-menu-item.ts';
import type { Faaw7Combobox } from './faaw7-combobox';
import type { Faaw7Textfield } from './faaw7-textfield';

describe('faaw7-combobox (Form Integration)', () => {

  it('should render and pass accessibility checks', async () => {
    const el = await fixture<Faaw7Combobox>(html`
      <faaw7-combobox aria-label="Test"></faaw7-combobox>
    `);
    await expect(el).to.be.accessible();
  });

  
  it('should associate with a form and set initial value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-combobox name="combo" value="initial"></faaw7-combobox>
       </form>
    `);
    
    const formData = new FormData(form);
    expect(formData.get('combo')).to.equal('initial');
  });

  it('should update form value on text input', async () => {
    const user = userEvent.setup();
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-combobox name="combo"></faaw7-combobox>
      </form>
    `);
    
    const el = form.querySelector<Faaw7Combobox>('faaw7-combobox')!;
    const textfield = el.shadowRoot!.querySelector<Faaw7Textfield>('faaw7-textfield')!;
    const input = textfield.shadowRoot!.querySelector('input')!;

    await user.type(input, 'typing');
    await elementUpdated(el);

    expect(el.value).to.equal('typing');
    
    const formData = new FormData(form);
    expect(formData.get('combo')).to.equal('typing');
  });

  it('should update form value on menu item click', async () => {
    const user = userEvent.setup();
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-combobox name="combo">
           <faaw7-menu>
            <faaw7-menu-item>Opt 1</faaw7-menu-item>
            <faaw7-menu-item>Opt 2</faaw7-menu-item>
           </faaw7-menu>
        </faaw7-combobox>
      </form>
    `);
    
    const el = form.querySelector<Faaw7Combobox>('faaw7-combobox')!;
    const item2 = el.querySelector<HTMLElement>('faaw7-menu-item:nth-child(2)');
    
    await user.click(item2!);
    await elementUpdated(el);

    expect(el.value).to.equal('Opt 2');
    
    const formData = new FormData(form);
    expect(formData.get('combo')).to.equal('Opt 2');
   });

});