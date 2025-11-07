import { html } from 'lit';
import { fixture } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';

import './faaw7-disclosure.ts';
import type { Faaw7Disclosure } from './faaw7-disclosure';

describe('faaw7-disclosure', () => {

  it('should render slot content', async () => {
    const el = await fixture<Faaw7Disclosure>(html`
      <faaw7-disclosure>
        <details>
          <summary>Test</summary>
          <div>Content</div>
        </details>
      </faaw7-disclosure>
    `);
    
    const details = el.querySelector('details');
    expect(details).to.exist;
    expect(details!.textContent).to.include('Test');
    expect(details!.textContent).to.include('Content');
  });

});