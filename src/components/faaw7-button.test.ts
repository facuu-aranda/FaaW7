import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { describe, it } from 'vitest';

import './faaw7-button.ts';
import type { Faaw7Button } from './faaw7-button';

describe('faaw7-button', () => {

  it('should render successfully and pass accessibility checks', async () => {
    const el = await fixture<Faaw7Button>(html`<faaw7-button>Test</faaw7-button>`);
    await expect(el).to.be.accessible();
  });

  it('should render default slot content', async () => {
    const el = await fixture<Faaw7Button>(html`
      <faaw7-button>Aceptar</faaw7-button>
    `);
    expect(el.textContent).to.include('Aceptar');
  });

  it('should apply the disabled attribute', async () => {
    const el = await fixture<Faaw7Button>(html`
      <faaw7-button disabled>Cancelar</faaw7-button>
    `);
    
    const button = el.shadowRoot!.querySelector('button')!;
    
    expect(el.disabled).to.be.true;
    expect(button.disabled).to.be.true;
    await expect(el).to.be.accessible();
  });

  it('should apply the default class when default prop is true', async () => {
    const el = await fixture<Faaw7Button>(html`
      <faaw7-button default>Aplicar</faaw7-button>
    `);
    
    const button = el.shadowRoot!.querySelector('button')!;
    
    expect(el.default).to.be.true;
    expect(button.classList.contains('faaw7-btn-default')).to.be.true;
  });

  it('should not be disabled by default', async () => {
    const el = await fixture<Faaw7Button>(html`
      <faaw7-button>OK</faaw7-button>
    `);
    
    const button = el.shadowRoot!.querySelector('button')!;
    
    expect(el.disabled).to.be.false;
    expect(button.disabled).to.be.false;
  });

});