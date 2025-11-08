import { html } from 'lit';
import { fixture, expect, elementUpdated } from '@open-wc/testing';
import { describe, it } from 'vitest';

import './faaw7-radio-group.ts';
import './faaw7-radio.ts';
import type { Faaw7RadioGroup } from './faaw7-radio-group';
import type { Faaw7Radio } from './faaw7-radio';

describe('faaw7-radio-group (Form Integration)', () => {

  it('should render children and pass accessibility checks', async () => {
    const el = await fixture<Faaw7RadioGroup>(html`
      <faaw7-radio-group>
        <faaw7-radio value="a">A</faaw7-radio>
        <faaw7-radio value="b">B</faaw7-radio>
      </faaw7-radio-group>
    `);
    expect(el.querySelectorAll('faaw7-radio').length).to.equal(2);
    await expect(el).to.be.accessible();
  });

  it('should set initial value and check the correct radio', async () => {
    const el = await fixture<Faaw7RadioGroup>(html`
      <faaw7-radio-group value="b">
        <faaw7-radio value="a">A</faaw7-radio>
        <faaw7-radio value="b">B</faaw7-radio>
      </faaw7-radio-group>
    `);
    
    await elementUpdated(el); 
    
    const radioA = el.querySelector<Faaw7Radio>('[value="a"]')!;
    const radioB = el.querySelector<Faaw7Radio>('[value="b"]')!;
    
    expect(el.value).to.equal('b');
    expect(radioA.checked).to.be.false;
    expect(radioB.checked).to.be.true;
  });

  it('should update group value when a radio is clicked', async () => {
    const el = await fixture<Faaw7RadioGroup>(html`
      <faaw7-radio-group value="a">
        <faaw7-radio value="a">A</faaw7-radio>
        <faaw7-radio value="b">B</faw7-radio>
      </faaw7-radio-group>
    `);
    
    await elementUpdated(el);
    
    const radioA = el.querySelector<Faaw7Radio>('[value="a"]')!;
    const radioB = el.querySelector<Faaw7Radio>('[value="b"]')!;
    const radioBLabel = radioB.shadowRoot!.querySelector('label')!;

    expect(el.value).to.equal('a');
    expect(radioA.checked).to.be.true;
    expect(radioB.checked).to.be.false;

    radioBLabel.click();
    await elementUpdated(el);

    expect(el.value).to.equal('b');
    expect(radioA.checked).to.be.false;
    expect(radioB.checked).to.be.true;
  });

  it('should associate with a form and set its value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-radio-group name="test-group" value="a">
          <faaw7-radio value="a">A</faaw7-radio>
          <faaw7-radio value="b">B</faaw7-radio>
        </faaw7-radio-group>
      </form>
    `);
    
    const formData = new FormData(form);
    expect(formData.get('test-group')).to.equal('a');
  });

  it('should update form value when radio is changed', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <faaw7-radio-group name="test-group" value="a">
          <faaw7-radio value="a">A</faaw7-radio>
          <faaw7-radio value="b">B</faaw7-radio>
        </faaw7-radio-group>
      </form>
    `);
    
    const group = form.querySelector<Faaw7RadioGroup>('faaw7-radio-group')!;
    const radioB = group.querySelector<Faaw7Radio>('[value="b"]')!;
    const radioBLabel = radioB.shadowRoot!.querySelector('label')!;
    
    radioBLabel.click();
    await elementUpdated(group);

    const formData = new FormData(form);
    expect(formData.get('test-group')).to.equal('b');
  });

});