import { html } from 'lit';
import { fixture } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';

import './faaw7-fieldset.ts';
import type { Faaw7Fieldset } from './faaw7-fieldset';

describe('faaw7-fieldset', () => {

  it('should render slot content', async () => {
    const el = await fixture<Faaw7Fieldset>(html`
      <faaw7-fieldset>
        <fieldset>
          <legend>Test</legend>
        </fieldset>
      </faaw7-fieldset>
    `);
    
    const fieldset = el.querySelector('fieldset');
    const legend = el.querySelector('legend');

    expect(fieldset).to.exist;
    expect(legend).to.exist;
    expect(legend!.textContent).to.include('Test');
  });

});