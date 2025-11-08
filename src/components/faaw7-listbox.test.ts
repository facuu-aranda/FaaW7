import { html } from 'lit';
import { fixture, expect, elementUpdated, waitUntil } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import sinon from 'sinon';

import './faaw7-listbox.ts';
import type { Faaw7Listbox } from './faaw7-listbox';

describe('faaw7-listbox', () => {
  const user = userEvent.setup();

  async function setupListbox<T extends Faaw7Listbox>(template: any) {
    const el = await fixture<T>(template);
    await elementUpdated(el);
    await waitUntil(() => el.querySelector('[role="option"][tabindex="0"]'), 'Opciones no inicializadas');
    return el;
  }

  it('should render options and pass accessibility checks', async () => {
    const el = await setupListbox(html`
      <faaw7-listbox aria-label="Test List">
        <div role="option">Opt 1</div>
        <div role="option" aria-selected="true">Opt 2</div>
      </faaw7-listbox>
    `);
    
    expect(el.querySelectorAll('[role="option"]').length).to.equal(2);
    await expect(el).to.be.accessible();
  });

 it('should navigate with ArrowDown and ArrowUp', async () => {
    const el = await setupListbox(html`
      <faaw7-listbox aria-label="Test List">
        <div role="option">Opt 1</div>
        <div role="option">Opt 2</div>
        <div role="option">Opt 3</div>
      </faaw7-listbox>
    `);
    
    const options = el.querySelectorAll<HTMLElement>('[role="option"]');
    el.focus();
    
    await waitUntil(() => document.activeElement === el, 'Listbox no enfocado');
    expect(options[0].getAttribute('tabindex')).to.equal('0');

    await user.keyboard('{ArrowDown}');
    await waitUntil(() => document.activeElement === options[1], 'Foco no se movió a Opt 2');
    expect(options[0].getAttribute('tabindex')).to.equal('-1');
    expect(options[1].getAttribute('tabindex')).to.equal('0');

    await user.keyboard('{ArrowDown}');
    await waitUntil(() => document.activeElement === options[2], 'Foco no se movió a Opt 3');

    await user.keyboard('{ArrowUp}');
    await waitUntil(() => document.activeElement === options[1], 'Foco no volvió a Opt 2');
  });

  it('should wrap navigation with ArrowDown and ArrowUp', async () => {
    const el = await setupListbox(html`
      <faaw7-listbox aria-label="Test List">
        <div role="option">Opt 1</div>
        <div role="option">Opt 2</div>
      </faaw7-listbox>
    `);
    
    const options = el.querySelectorAll<HTMLElement>('[role="option"]');
    el.focus();

    await user.keyboard('{ArrowUp}');
    await waitUntil(() => document.activeElement === options[1], 'Foco no se movió a Opt 2');

    await user.keyboard('{ArrowDown}');
    await waitUntil(() => document.activeElement === options[0], 'Foco no volvió a Opt 1');
  });

  it('should navigate with Home and End', async () => {
    const el = await setupListbox(html`
      <faaw7-listbox aria-label="Test List">
        <div role="option">Opt 1</div>
        <div role="option">Opt 2</div>
        <div role="option">Opt 3</div>
      </faaw7-listbox>
    `);
    
    const options = el.querySelectorAll<HTMLElement>('[role="option"]');
    el.focus();

    await user.keyboard('{End}');
    await waitUntil(() => document.activeElement === options[2], 'Foco no se movió a Opt 3 (End)');

    await user.keyboard('{Home}');
    await waitUntil(() => document.activeElement === options[0], 'Foco no se movió a Opt 1 (Home)');
  });

  it('should select single option with Enter and fire event', async () => {
    const changeSpy = sinon.spy();
    const el = await setupListbox(html`
      <faaw7-listbox aria-label="Test List" @faaw7-change=${changeSpy}>
        <div role="option">Opt 1</div>
        <div role="option">Opt 2</div>
      </faaw7-listbox>
    `);
    
    const options = el.querySelectorAll<HTMLElement>('[role="option"]');
    el.focus();

    await user.keyboard('{ArrowDown}');
    await waitUntil(() => document.activeElement === options[1]);
    await user.keyboard('{Enter}');

    expect(changeSpy.calledOnce).to.be.true;
    expect(options[0].getAttribute('aria-selected')).to.equal('false');
    expect(options[1].getAttribute('aria-selected')).to.equal('true');
  });

  it('should select multiple options with Space', async () => {
    const el = await setupListbox(html`
      <faaw7-listbox multiple aria-label="Test List">
        <div role="option" aria-selected="true">Opt 1</div>
        <div role="option">Opt 2</div>
      </faaw7-listbox>
    `);
    
    const options = el.querySelectorAll<HTMLElement>('[role="option"]');
    el.focus();

    await user.keyboard('{ }'); 
    expect(options[0].getAttribute('aria-selected')).to.equal('false');
    
    await user.keyboard('{ArrowDown}');
    await waitUntil(() => document.activeElement === options[1]);
    await user.keyboard('{ }'); 
    
    expect(options[0].getAttribute('aria-selected')).to.equal('false');
    expect(options[1].getAttribute('aria-selected')).to.equal('true');
  });

});