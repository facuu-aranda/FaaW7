import { html } from 'lit';
import { fixture } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';

import './faaw7-accordion.ts';
import type { Faaw7Accordion } from './faaw7-accordion';

describe('faaw7-accordion', () => {

  it('should render slot content', async () => {
    const el = await fixture<Faaw7Accordion>(html`
      <faaw7-accordion>
        <details>
          <summary>Test</summary>
          <div>Content</div>
        </details>
      </faaw7-accordion>
    `);
    
    const details = el.querySelector('details');
    expect(details).to.exist;
    expect(details!.textContent).to.include('Test');
    expect(details!.textContent).to.include('Content');
  });

});