import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';

// This element is connected to the Redux store.
import { store } from './store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState,
  updateLayout
} from './actions/app.js';

// These are the elements needed by this element.
import { menuIcon } from './my-icons.js';
import { TopAppBar } from '@material/mwc-top-app-bar/mwc-top-app-bar.js';
import { Drawer } from '@material/mwc-drawer/mwc-drawer.js';
import { IconButton } from '@material/mwc-icon-button/mwc-icon-button.js';
import { List } from '@material/mwc-list/mwc-list.js';
import { ListItem } from '@material/mwc-list/mwc-list-item.js';
import { Icon } from '@material/mwc-icon';

export class DinamicoWeb extends connect(store)(LitElement) {
  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        /* min-height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center; */
        --app-primary-color: #E91E63;
        --app-secondary-color: #293237;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;
        --app-header-background-color: white;
        --app-header-text-color: var(--app-dark-text-color);
        --app-header-selected-color: var(--app-primary-color);
        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #78909C;
      }

      .page {
        display: none;
      }
      .page[active] {
        display: block;
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }

      /* img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline-block;
        padding: 8px;
        background: none;
        border: none;
        fill: var(--app-header-text-color);
      } */

      /* img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      td {
        vertical-align: middle;
      } */

    `;
  }

  render() {
    return html`
    <mwc-drawer id="mainDrawer" type="modal" .open="${this._drawerOpened}"
      @MDCDrawer:opened="${this._drawerOpenedChanged}"
      @MDCDrawer:closed="${this._drawerOpenedChanged}">
      <div>
        <nav hidden>
          <a id="item1" href="/empleados">View One</a>
          <a id="item2" href="/emp2">View Two</a>
          <a id="item3" href="/emp3">View Three</a>
          <a id="item4" href="/novedades">View Four</a>
          <a id="item5" href="/nov">View Five</a>
          <a id="item6" href="/movimientos">View Six</a>
          <a id="item7" href="/reportes">View Seven</a>
          <a id="item8" href="/configuracion">View Eight</a>
          <a id="item9" href="/prestaciones">View Nine</a>
          <a id="item10" href="/utilidades">View Ten</a>
          <a id="item11" href="/pila">View Eleven</a>
        </nav>
        <mwc-list activatable @action="${this._listItemSelected}">
          <mwc-list-item ?selected="${this._page === 'empleados'}" ?activated="${this._page === 'empleados'}" graphic="icon">
            <span>Empleados</span><mwc-icon slot="graphic">group</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'emp2'}" ?activated="${this._page === 'emp2'}" graphic="icon">
            <span>Emp2</span><mwc-icon slot="graphic">table_chart</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'emp3'}" ?activated="${this._page === 'emp3'}" graphic="icon">
            <span>Emp3</span><mwc-icon slot="graphic">table_chart</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'novedades'}" ?activated="${this._page === 'novedades'}" graphic="icon">
            <span>Novedades</span><mwc-icon slot="graphic">table_chart</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'nov'}" ?activated="${this._page === 'nov'}" graphic="icon">
            <span>Nov</span><mwc-icon slot="graphic">table_chart</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'movimientos'}" ?activated="${this._page === 'movimientos'}" graphic="icon">
            <span>Movimientos</span><mwc-icon slot="graphic">autorenew</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'reportes'}" ?activated="${this._page === 'reportes'}" graphic="icon">
            <span>Reportes</span><mwc-icon slot="graphic">description</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'configuracion'}" ?activated="${this._page === 'configuracion'}" graphic="icon">
            <span>Configuracion</span><mwc-icon slot="graphic">settings</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'prestaciones'}" ?activated="${this._page === 'prestaciones'}" graphic="icon">
            <span>Prestaciones</span><mwc-icon slot="graphic">autorenew</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'utilidades'}" ?activated="${this._page === 'utilidades'}" graphic="icon">
            <span>Utilidades</span><mwc-icon slot="graphic">settings_backup_restore</mwc-icon>
          </mwc-list-item>
          <mwc-list-item ?selected="${this._page === 'pila'}" ?activated="${this._page === 'pila'}" graphic="icon">
            <span>Pila</span><mwc-icon slot="graphic">settings_backup_restore</mwc-icon>
          </mwc-list-item>
        </mwc-list>
      </div>
      <div slot="appContent">
        <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu"
            @click="${(e) => this._menuButtonClicked(e)}"
            ></mwc-icon-button>
            ${((this._page === 'empleados')||(this._page === 'nov')) && this._currentEmployee && this._currentEmployee.imageUrl ? html`<span slot="title"><table><tr><td style="vertical-align:middle">${this._currentEmployee.Nombre}</td><td style="vertical-align:middle"><img class="signin-btn" src="${this._currentEmployee.imageUrl}"></td></tr></table></span>` : html`<div slot="title">Dinamico Web</div>`}
        </mwc-top-app-bar>
        <div>
          <!-- content -->
          <main>
            <dinamico-empleados class="page" ?active="${this._page === 'empleados'}" @assign-current-employee="${(e) => this._asignarEmpleadoActual(e)}"></dinamico-empleados>
            <dinamico-emp2 class="page" ?active="${this._page === 'emp2'}"></dinamico-emp2>
            <dinamico-emp3 class="page" ?active="${this._page === 'emp3'}"></dinamico-emp3>
            <dinamico-novedades class="page" ?active="${this._page === 'novedades'}"></dinamico-novedades>
            <dinamico-nov class="page" ?active="${this._page === 'nov'}" @assign-current-employee="${(e) => this._asignarEmpleadoActual(e)}"></dinamico-nov>
            <dinamico-movimientos class="page" ?active="${this._page === 'movimientos'}"></dinamico-movimientos>
            <dinamico-reportes class="page" ?active="${this._page === 'reportes'}"></dinamico-reportes>
            <dinamico-configuracion class="page" ?active="${this._page === 'configuracion'}"></dinamico-configuracion>
            <dinamico-prestaciones class="page" ?active="${this._page === 'prestaciones'}"></dinamico-prestaciones>
            <dinamico-utilidades class="page" ?active="${this._page === 'utilidades'}"></dinamico-utilidades>
            <dinamico-pila class="page" ?active="${this._page === 'pila'}"></dinamico-pila>
            <my-view404 class="page" ?active="${this._page === 'view404'}"></my-view404>
          </main>
          <p class="app-footer">
            Made by Megactivo
          </p>
        </div>
      </div>
    </mwc-drawer>
    `;
  }

  firstUpdated() {
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
  }

  _menuButtonClicked() {
    store.dispatch(updateDrawerState(true));
  }

  _drawerOpenedChanged(e) {
    store.dispatch(updateDrawerState(e.target.open));
  }

  stateChanged(state) {
    this._page = state.app.page;
    this._drawerOpened = state.app.drawerOpened;
  }

  _listItemSelected(e) {
    this.shadowRoot.querySelector('#item'+(e.detail.index+1)).click();
  }

  _asignarEmpleadoActual(e) {
    // console.log('attention',e.detail.message);
    this._currentEmployee=e.detail.message;
    this.requestUpdate();
  }

}
