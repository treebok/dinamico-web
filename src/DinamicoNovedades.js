import { LitElement, html, css } from 'lit-element';
// import '@vaadin/vaadin-ordered-layout';
import { List } from '@material/mwc-list/mwc-list.js';
import { ListItem } from '@material/mwc-list/mwc-list-item.js';
// import { Icon } from '@material/mwc-icon';
import '@material/mwc-icon';
import { IconButton } from '@material/mwc-icon-button/mwc-icon-button.js';
import { Dialog } from '@material/mwc-dialog/mwc-dialog.js';
import '@material/mwc-textfield';
import { Button } from '@material/mwc-button/mwc-button.js';

export class DinamicoNovedades extends LitElement {

  static get styles(){
    return css`
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }
    `;
  }

  render() {
    return html`
      <h3>Novedades</h3>
      <section>
        <table>
          <tr>
            <th style="text-align:center">
              Empleado
            </th>
            <th style="text-align:center">
              Ingresos Constitutivos de Salario
            </th>
            <th style="text-align:center">
              Ingresos NO Constitutivos de Salario
            </th>
            <th style="text-align:center">
              Deducciones
            </th>
          </tr>
          ${this._empleadosCollection && this._empleadosCollection.map((item) => html`
            <tr>
            <td>
              <p>${item.Nombre}</p>
            </td>

            <td>
            <mwc-list id="listaConstitutivos" @action="${this._listItemSelected}">
            ${this._novedadesCollection && this._novedadesCollection.filter( function (el){
              return (el.Empleado == item.Documento)&&(el.tipo == "constitutivo");
            }).map((i) => html`
                <mwc-list-item twoline graphic="icon">
                  <span>$${Number(i.Valor_total).toLocaleString('es')}</span>
                  <span slot="secondary">${i.Concepto}</span>
                  <mwc-icon slot="graphic">add</mwc-icon>
                </mwc-list-item>
            `)}
            </mwc-list>
            </td>

            <td>
            <mwc-list id="listaNoConstitutivos" @action="${this._listItemSelected}">
            ${this._novedadesCollection && this._novedadesCollection.filter( function (el){
              return (el.Empleado == item.Documento)&&(el.tipo == "no_constitutivo");
            }).map((i) => html`
                <mwc-list-item twoline graphic="icon">
                  <span>$${Number(i.Valor_total).toLocaleString('es')}</span>
                  <span slot="secondary">${i.Concepto}</span>
                  <mwc-icon slot="graphic">add</mwc-icon>
                </mwc-list-item>
            `)}
            </mwc-list>
            </td>

            <td>
            <mwc-list id="listaDeducciones" @action="${this._listItemSelected}">
            ${this._novedadesCollection && this._novedadesCollection.filter( function (el){
              return (el.Empleado == item.Documento)&&(el.tipo == "deduccion");
            }).map((i) => html`
                <mwc-list-item twoline graphic="icon">
                  <span>$${Number(i.Valor_total).toLocaleString('es')}</span>
                  <span slot="secondary">${i.Concepto}</span>
                  <mwc-icon slot="graphic">remove</mwc-icon>
                </mwc-list-item>
            `)}
            </mwc-list>
            </td>

            </tr>
          `)}
        </table>
      </section>
      <mwc-dialog heading="${this._currentTipo}" id="dialogConceptosNovedades">
        <div>
          <mwc-textfield label="Concepto" id="conceptoTextField"></mwc-textfield>
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
      _empleadosCollection:Array,
      _verLista:Boolean,
      _currentEmpleado:Number,
      _novedadesCollection:Array,
      _currentTipo: String
    };
  }

  constructor() {
    super();
    this._empleadosCollection = [];
    this._currentEmpleado=0;
    this._verLista=true;
    this._novedadesCollection=[];
    this._currentTipo="";

    const that = this;
    var empleadosRef = firebase.firestore().collection('empleado');
    var query = empleadosRef.where("Activo", "==", true);
    query.get().then( function(querySnapshot){
        querySnapshot.forEach(function(doc){
            that._empleadosCollection.push(doc.data());
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
    // this.shadowRoot.querySelector('#item'+(e.detail.index+1)).click();
    console.log('hola');
    console.log(e.target.id=="listaNoConstitutivos");
    console.log(e.detail);
    console.log(e.detail.index);
    if (e.target.id=="listaNoConstitutivos")
      this._currentTipo="Ingresos no constitutivos de salario";
    if (e.target.id=="listaConstitutivos")
      this._currentTipo="Ingresos constitutivos de salario";
    if (e.target.id=="listaDeducciones")
      this._currentTipo="Deducciones";
    this.shadowRoot.querySelector('#conceptoTextField').value= "666";
    this.shadowRoot.querySelector('#dialogConceptosNovedades').open=true;
  }

}
