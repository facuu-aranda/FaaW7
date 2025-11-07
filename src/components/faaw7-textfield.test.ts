import { html } from 'lit';
import { fixture, elementUpdated } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import './faaw7-textfield.ts';
import type { Faaw7Textfield } from './faaw7-textfield';

describe('faaw7-textfield (Form Integration)', () => {
  const user = userEvent.setup();

 it('should render and pass accessibility checks', async () => {
    const el = await fixture<Faaw7Textfield>(html`
      <faaw7-textfield aria-label="Test"></faaw7-textfield>
    `);
    await expect(el).to.be.accessible();
  });

  it('should associate with a form and set its value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-textfield name="test-field" value="initial"></faaw7-textfield>
      </form>
    `);
    
    const formData = new FormData(form);
    expect(formData.get('test-field')).to.equal('initial');
  });

  it('should update form value on user input', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-textfield name="test-field" value="initial"></faaw7-textfield>
      </form>
    `);
    
    const el = form.querySelector<Faaw7Textfield>('faaw7-textfield')!;
    const input = el.shadowRoot!.querySelector('input')!;

    await user.type(input, 'abc');
    await elementUpdated(el);
    
    expect(el.value).to.equal('initialabc');
    
    const formData = new FormData(form);
    expect(formData.get('test-field')).to.equal('initialabc');
  });

  it('should work with textarea type', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-textfield 
          type="textarea" 
          name="bio" 
          value="Test"
        ></faaw7-textfield>
      </form>
    `);
    
    const el = form.querySelector<Faaw7Textfield>('faaw7-textfield')!;
    const textarea = el.shadowRoot!.querySelector('textarea')!;

    await user.type(textarea, 'ing text');
    await elementUpdated(el);
    
    expect(el.value).to.equal('Testing text');
    
    const formData = new FormData(form);
    expect(formData.get('bio')).to.equal('Testing text');
  });

  it('should be disabled when host is disabled', async () => {
    const el = await fixture<Faaw7Textfield>(html`
      <faaw7-textfield disabled></faaw7-textfield>
    `);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.disabled).to.be.true;
  });

});