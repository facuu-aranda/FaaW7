import { LitElement, html, css } from 'lit';
import type { PropertyValues } from 'lit';
import type { Faaw7Tab } from './faaw7-tab';
import type { Faaw7TabPanel } from './faaw7-tab-panel';
import { customElement, property, state } from 'lit/decorators.js';
import { defaultTheme } from '../theme/default.css.js';

@customElement('faaw7-tab-group')
export class Faaw7TabGroup extends LitElement {
  
  @property({ type: String })
  activeTab = '';

  @property({ type: String })
  label = 'Grupo de pestañas';

  @state()
  private _tabs: Faaw7Tab[] = [];
  
  @state()
  private _panels: Faaw7TabPanel[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._handleTabClick);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleTabClick);
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  private _handleSlotChange() {
    const tabSlot = this.shadowRoot?.querySelector('slot[name="tabs"]') as HTMLSlotElement;
    this._tabs = tabSlot.assignedElements({ flatten: true }) as Faaw7Tab[];
    
    const panelSlot = this.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
    this._panels = panelSlot.assignedElements({ flatten: true }) as Faaw7TabPanel[];

    if (!this.activeTab && this._tabs.length > 0) {
      const firstEnabledTab = this._tabs.find(tab => !tab.disabled);
      this.activeTab = firstEnabledTab?.panel || '';
    }
    
    this._linkPanels();
    this._updateActive();
  }
  
  private _linkPanels() {
    this._tabs.forEach(tab => {
      const panel = this._panels.find(p => p.name === tab.panel);
      if (panel) {
        tab.ariaControls = panel.id || panel.shadowRoot?.host.id || '';
        panel.ariaLabelledby = tab.id || tab.shadowRoot?.host.id || '';
      }
    });
  }

  private _handleTabClick(e: Event) {
    const clickedTab = (e.target as Element).closest('faaw7-tab');
    if (clickedTab && !clickedTab.disabled && clickedTab.panel !== this.activeTab) {
      this.activeTab = clickedTab.panel;
    }
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
      return;
    }

    const tabs = this._tabs.filter(tab => !tab.disabled);
    const activeIndex = tabs.findIndex(tab => tab.active);
    
    let newIndex = activeIndex;

    switch (e.key) {
      case 'ArrowLeft':
        newIndex = activeIndex > 0 ? activeIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        newIndex = activeIndex < tabs.length - 1 ? activeIndex + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
    }

    if (newIndex !== activeIndex) {
      e.preventDefault();
      this.activeTab = tabs[newIndex].panel;
      tabs[newIndex].focus();
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('activeTab')) {
      this._updateActive();
    }
  }

  private _updateActive() {
    this._tabs.forEach(tab => {
      const isActive = (tab.panel === this.activeTab);
      tab.active = isActive;
      tab.customTabindex = isActive ? 0 : -1;
    });
    this._panels.forEach(panel => {
      panel.active = (panel.name === this.activeTab);
    });
  }

  static styles = [
    defaultTheme,
    css`
    :host {
      display: block;
    }
    .tab-list {
      display: flex;
      list-style-type: none;
      margin: 0 0 -2px;
      padding-left: 3px;
      position: relative;
      text-indent: 0;
    }
  `];

  render() {
    return html`
      <div 
        class="tab-list" 
        role="tablist"
        aria-label=${this.label}
      >
        <slot name="tabs" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <slot @slotchange=${this._handleSlotChange}></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'faaw7-tab-group': Faaw7TabGroup;
  }
}