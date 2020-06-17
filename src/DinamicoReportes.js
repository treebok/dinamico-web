import { LitElement, html, css } from 'lit-element';

import { List } from '@material/mwc-list/mwc-list.js';
import { ListItem } from '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-icon';
import '@vaadin/vaadin-ordered-layout';

export class DinamicoReportes extends LitElement {

  static get styles(){
    return [
      css`
        div.mostrar{
          display:block
        }

        div.no-mostrar{
          display:none
        }

        section.employees{
          margin: 2%;
          background:#ffffff;
          padding:10px;
        }

        section.employees div{
          width:50%;
        }

        .block{
            display:inline-block;
            padding: 5px;
            width:50%;
            font-size:15px;
            box-shadow: 0px 0px 8px -5px rgba(0,0,0,0.75);
        }

        .table-info tr td:first-child{
            font-weight:bold;
            float:left;
        }

        .block-item>img{
            width:150px;
            height:150px;
        }
      `
    ]
  }

  _listItemSelected(e) {
    this._currentEmpleado = e.detail.index;
    this._verLista=false;
    this._pydFijosCollection=[];

    const that = this;
    var pydfijosRef = firebase.firestore().collection('pyd_fijos');
    var query = pydfijosRef.where("Empleado", "==", this._empleadosCollection[this._currentEmpleado].Documento);
    query.get().then( function(querySnapshot){
        querySnapshot.forEach(function(doc){
            that._pydFijosCollection.push(doc.data());
        });
        that.requestUpdate();
    });
  }

  render() {
    return html`
      <section class="employees">
        <h1>Empleados</h1>
        <vaadin-horizontal-layout>
          <div>
            <mwc-list activatable @action="${this._listItemSelected}">
            ${this._empleadosCollection && this._empleadosCollection.map((item) => html`
              <li divider role="separator"></li>
              <mwc-list-item graphic="avatar" twoline>
                <span><b>${item.Documento} - ${item.Nombre}</b></span>
                <span slot="secondary">${item.Correo}</span>
                <img slot="graphic" src="${item.Imagen}">
              </mwc-list-item>
            `)}
            </mwc-list>
          </div>
          <div class="${!this._verLista?'mostrar':'no-mostrar'} block">
            ${this._empleadosCollection.length>0 ?
              html`
              <vaadin-horizontal-layout>
                <div class='block-item'>
                  <img src='${this._empleadosCollection[this._currentEmpleado].Imagen}' alt='user avatar'/>
                </div>
                <div class='block-item'>
                  <table class='table-info'>
                    <tr>
                      <td>Nombre: </td>
                      <td >${this._empleadosCollection[this._currentEmpleado].Nombre}</td>
                    </tr>
                    <tr>
                      <td>Documento: </td>
                      <td>C.C. ${this._empleadosCollection[this._currentEmpleado].Documento}</td>
                    </tr>
                    <tr>
                      <td>Telefono: </td>
                      <td>${this._empleadosCollection[this._currentEmpleado].Telefono}</td>
                    </tr>
                    <tr>
                      <td>Edad: </td>
                      <td>${this._empleadosCollection[this._currentEmpleado].Edad}</td>
                    </tr>
                    <tr>
                      <td>Correo: </td>
                      <td>${this._empleadosCollection[this._currentEmpleado].Correo}</td>
                    </tr>
                  </table>
                </div>
              </vaadin-horizontal-layout>
              `
              :
              html`<p></p>`
            }
            ${this._empleadosCollection.length>0 ?
              html`
                <p><b>P y D Fijos</b></p>

                ${this._pydFijosCollection && this._pydFijosCollection.map((item) => html`
                  <table class='table-info'>
                    <tr>
                      <td>${item.Concepto} :</td>
                      <td>${item.Valor_total}</td>
                    </tr>
                  </table>
                `)}
              `
              :
              html`<p></p>`
            }
          </div>
        </vaadin-horizontal-layout>
      </section>
    `;
  }

  static get properties() {
    return {
      _empleadosCollection:Array,
      _verLista:Boolean,
      _currentEmpleado:Number,
      _pydFijosCollection:Array,
    };
  }

  constructor() {
    super();
    this._empleadosCollection = [];
    this._currentEmpleado=0;
    this._verLista=true;
    this._pydFijosCollection=[];

    const that = this;
    var empleadosRef = firebase.firestore().collection('empleado');
    var query = empleadosRef.where("Activo", "==", true);
    query.get().then( function(querySnapshot){
        querySnapshot.forEach(function(doc){
            that._empleadosCollection.push(doc.data());
        });
        that.requestUpdate();
    });
  }

}
