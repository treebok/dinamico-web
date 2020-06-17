import { LitElement, html, css } from 'lit-element';
import { List } from '@material/mwc-list/mwc-list.js';
import { ListItem } from '@material/mwc-list/mwc-list-item.js';
import { Tab } from '@material/mwc-tab/mwc-tab.js';
import { TabBar } from '@material/mwc-tab-bar/mwc-tab-bar.js';
import { IconButton } from '@material/mwc-icon-button/mwc-icon-button.js';
import { Dialog } from '@material/mwc-dialog/mwc-dialog.js';
import { Button } from '@material/mwc-button/mwc-button.js';
import '@material/mwc-textfield';
// import '@vaadin/vaadin-ordered-layout';

export class DinamicoEmpleados extends LitElement {
  render() {
    return html`
    <div class="${this._verLista?'mostrar':'no-mostrar'}">
      <mwc-list activatable @action="${this._listItemSelected}" id="listaEmpleados">
      ${this._empleadosCollection && this._empleadosCollection.map((item) => html`
        <mwc-list-item graphic="avatar" hasMeta>
          <span>${item.Nombre}</span>
          <img slot="graphic" src="${item.imageUrl}" alt="e">
          <mwc-icon slot="meta">person</mwc-icon>
        </mwc-list-item>
      `)}
      </mwc-list>
    </div>
    <div class="${!this._verLista?'mostrar':'no-mostrar'}">
      <mwc-icon-button icon="close" class="dere" @click="${(e) => this._onClickClose()}" title="Salir"></mwc-icon-button>
      ${this._empleadosCollection.length>0 ?
        html`
          <br>
          <table class="center">
            <caption hidden>${this._empleadosCollection[this._currentEmpleadoIndex].Nombre}</caption>
            <tr>
              <td>
                <mwc-icon-button icon="navigate_before" @click="${(e) => this._onClickPriorEmployee()}" title="Anterior Empleado"></mwc-icon-button>
              </td>
              <td width="90%">
                <p><img src="${this._empleadosCollection[this._currentEmpleadoIndex].imageUrl}" alt="user avatar"></p>
                <p>${this._empleadosCollection[this._currentEmpleadoIndex].Nombre}</p>
              </td>
              <td>
                <mwc-icon-button icon="navigate_next" @click="${(e) => this._onClickNextEmployee()}" title="Siguiente Empleado"></mwc-icon-button>
              </td>
            </tr>
          </table>
          <mwc-tab-bar @MDCTabBar:activated="${this._tabBarActivated}">
            <mwc-tab label="Hoja de vida"></mwc-tab>
            <mwc-tab label="P y D fijos"></mwc-tab>
            <mwc-tab label="Novedades"></mwc-tab>
          </mwc-tab-bar>
          <div class="${this._visibleTab==0?'mostrar':'no-mostrar'}">
            <br>
            <table class='table-info center'>
              <tr>
                <td align="left">Nombre: </td>
                <td align="left">${this._empleadosCollection[this._currentEmpleadoIndex].Nombre}</td>
              </tr>
              <tr>
                <td align="left">Documento: </td>
                <td align="left">C.C. ${this._empleadosCollection[this._currentEmpleadoIndex].Documento}</td>
              </tr>
              <tr>
                <td align="left">Edad: </td>
                <td align="left">${this._empleadosCollection[this._currentEmpleadoIndex].Edad}</td>
              </tr>
              <tr>
                <td align="left">Correo: </td>
                <td align="left">${this._empleadosCollection[this._currentEmpleadoIndex].Correo}</td>
              </tr>
            </table>
          </div>
          <div class="${this._visibleTab==1?'mostrar':'no-mostrar'}">
            <br>
            ${this._empleadosCollection.length>0 ?
              html`
                <table class='table-info center'>
                  ${this._pydFijosCollection && this._pydFijosCollection.filter(thispydfijo => thispydfijo.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento).map((item) => html`
                    <tr>
                      <td align="left">${item.Concepto}: </td>
                      <td align="left">$${Number(item.Valor_total).toLocaleString('es')}</td>
                    </tr>
                  `)}
                </table>
              `
              :
              html`<p></p>`
            }
          </div>
          <div class="${this._visibleTab==2?'mostrar':'no-mostrar'}">
            <br>
            ${this._empleadosCollection.length>0 ?
              html`
                <mwc-list id="listaNovedades" @action="${this._listItemNovedadesSelected}" wrapFocus>

                  ${this._novedadesCollection && (this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'constitutivo')).length > 0) ? html`
                    <mwc-list-item noninteractive>
                      <span>Ingresos constitutivos de salario</span>
                    </mwc-list-item>

                    ${this._novedadesCollection && this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'constitutivo')).map((item) => html`
                      <mwc-list-item twoline graphic="icon" valortotal="${item.Valor_total}" concepto="${item.Concepto}">
                        <span>$${Number(item.Valor_total).toLocaleString('es')}</span>
                        <span slot="secondary">${item.Concepto}</span>
                        <mwc-icon slot="graphic">add</mwc-icon>
                      </mwc-list-item>
                    `)}
                  ` : html`<li divider inset padded role="separator"></li>`}

                  ${this._novedadesCollection && (this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'no_constitutivo')).length > 0) ? html`
                    <mwc-list-item noninteractive>
                      <span>Ingresos NO constitutivos de salario</span>
                    </mwc-list-item>

                    ${this._novedadesCollection && this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'no_constitutivo')).map((item) => html`
                      <mwc-list-item twoline graphic="icon" valortotal="${item.Valor_total}" concepto="${item.Concepto}">
                        <span>$${Number(item.Valor_total).toLocaleString('es')}</span>
                        <span slot="secondary">${item.Concepto}</span>
                        <mwc-icon slot="graphic">add</mwc-icon>
                      </mwc-list-item>
                    `)}
                  ` : html`<li divider inset padded role="separator"></li>`}

                  ${this._novedadesCollection && (this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'deduccion')).length > 0) ? html`
                    <mwc-list-item noninteractive>
                      <span>Deducciones</span>
                    </mwc-list-item>

                    ${this._novedadesCollection && this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'deduccion')).map((item) => html`
                      <mwc-list-item twoline graphic="icon" valortotal="${item.Valor_total}" concepto="${item.Concepto}">
                        <span>$${Number(item.Valor_total).toLocaleString('es')}</span>
                        <span slot="secondary">${item.Concepto}</span>
                        <mwc-icon slot="graphic">remove</mwc-icon>
                      </mwc-list-item>
                    `)}

                  ` : html`<li divider inset padded role="separator"></li>`}

                </mwc-list>

                <br>
                <table class='center'>

                  <tr>
                    <td colspan="2" style="text-align:center"><b>Ingresos Constitutivos de Salario</b></td>
                  </tr>
                  ${this._novedadesCollection && this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'constitutivo')).map((item) => html`
                    <tr>
                      <td align="left">${item.Concepto}: </td>
                      <td align="right">$${Number(item.Valor_total).toLocaleString('es')}</td>
                    </tr>
                  `)}

                  <tr>
                    <td colspan="2" style="text-align:center"><p></p></td>
                  </tr>
                  <tr>
                    <td colspan="2" style="text-align:center"><b>Ingresos NO Constitutivos de Salario</b></td>
                  </tr>
                  ${this._novedadesCollection && this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'no-constitutivo')).map((item) => html`
                    <tr>
                      <td align="left">${item.Concepto}: </td>
                      <td align="right">$${Number(item.Valor_total).toLocaleString('es')}</td>
                    </tr>
                  `)}

                  <tr>
                    <td colspan="2" style="text-align:center"><p></p></td>
                  </tr>
                  <tr>
                    <td colspan="2" style="text-align:center"><b>Deducciones</b></td>
                  </tr>
                  ${this._novedadesCollection && this._novedadesCollection.filter(thisnovedad => (thisnovedad.Empleado == this._empleadosCollection[this._currentEmpleadoIndex].Documento) && (thisnovedad.tipo == 'deduccion')).map((item) => html`
                    <tr>
                      <td align="left">${item.Concepto}: </td>
                      <td align="right">$${Number(item.Valor_total).toLocaleString('es')}</td>
                    </tr>
                  `)}

                </table>
              `
              :
              html`<p></p>`
            }
          </div>
        `
        :
        html`<p></p>`
      }

    </div>

    <mwc-dialog heading="${this._editedConcepto}" id="dialogoEditarValor">
      <div>
        <mwc-textfield label="Valor" value="${this._editedValor}">

        </mwc-textfield>
      </div>
      <mwc-button
          dialogAction="ok"
          slot="primaryAction">
        ok
      </mwc-button>
      <mwc-button
          dialogAction="cancel"
          slot="secondaryAction">
        cancel
      </mwc-button>
    </mwc-dialog>

    `;
  }

  static get properties() {
    return {
      _empleadosCollection: Array,
      _verLista: Boolean,
      _currentEmpleadoIndex: Number,
      _visibleTab: Number,
      _pydFijosCollection: Array,
      _novedadesCollection: Array
    };
  }

  static get styles(){
    return [
      css`
        div.mostrar{
          display:block
        }

        div.no-mostrar{
          display:none
        }

        mwc-icon-button.dere {
          float: right;
        }

        table.center {
          margin-left: auto;
          margin-right: auto;
        }

        .table-info tr td:first-child{
            font-weight:bold;
            float:left;
        }

    `
    ]
  }

  constructor() {
    super();
    this._empleadosCollection = [];
    this._pydFijosCollection = [];
    this._novedadesCollection = [];
    this._currentEmpleadoIndex=0;
    this._verLista=true;
    this._visibleTab=0;
    this._editedConcepto="";
    this._editedValor="";

    const that = this;
    var empleadosRef = firebase.firestore().collection('empleado');
    var query = empleadosRef.where("Activo", "==", true);
    query.get().then( function(querySnapshot){
        querySnapshot.forEach(function(doc){
            that._empleadosCollection.push(doc.data());
        });
        that.requestUpdate();
    });

    var pydfijosRef = firebase.firestore().collection('pyd_fijos');
    var query = pydfijosRef.where("Periodo", "==", 9);
    query.get().then( function(querySnapshot){
        querySnapshot.forEach(function(doc){
            that._pydFijosCollection.push(doc.data());
        });
        that.requestUpdate();
    });

    var novedadesRef = firebase.firestore().collection('novedades');
    var query = novedadesRef.where("Periodo", "==", 9);
    query.get().then( function(querySnapshot){
        querySnapshot.forEach(function(doc){
            that._novedadesCollection.push(doc.data());
        });
        that.requestUpdate();
    });

  }

  _listItemSelected(e) {
    console.log('se metio');
    this._currentEmpleadoIndex = e.detail.index;
    this._verLista=false;
    this._despacharAsignarEmpleadoActual();
  }

  _despacharAsignarEmpleadoActual() {
    // disparar evento de asignar _currentEmployee del papa el this._empleadosCollection[this._currentEmpleadoIndex]
    let event = new CustomEvent('assign-current-employee', {
      detail: {
        message: this._empleadosCollection[this._currentEmpleadoIndex]
      }
    });
    this.dispatchEvent(event);
  }

  _tabBarActivated(e) {
    this._visibleTab = e.detail.index;
  }

  _onClickClose() {
    this._verLista = true;
    this.shadowRoot.querySelector('#listaEmpleados').items[this._currentEmpleadoIndex].selected=true;
  }

  _onClickPriorEmployee(){
    if (this._currentEmpleadoIndex == 0)
      this._currentEmpleadoIndex = this._empleadosCollection.length-1;
    else
      this._currentEmpleadoIndex = this._currentEmpleadoIndex-1;
    this._despacharAsignarEmpleadoActual();
  }

  _onClickNextEmployee(){
    if (this._currentEmpleadoIndex == this._empleadosCollection.length-1)
      this._currentEmpleadoIndex = 0;
    else
      this._currentEmpleadoIndex = this._currentEmpleadoIndex+1;
    this._despacharAsignarEmpleadoActual();
  }

  _listItemNovedadesSelected(e) {
    // console.log('e.detail=',e.detail);
    // console.log('e.target=',e.target);
    console.log('e.target.selected=',e.target.selected);
    // console.log('e.target.selected=',e.target.items[e.detail]);
    // console.log('valor total is ',);
    this._editedConcepto = e.target.selected.getAttribute('concepto');
    this._editedValor = e.target.selected.getAttribute('valortotal');
    this.requestUpdate();
    this.shadowRoot.querySelector('#dialogoEditarValor').open=true;
  }

}
