import { LitElement, html, css } from 'lit-element';

import '@vaadin/vaadin-ordered-layout';
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-date-picker';
import '@vaadin/vaadin-custom-field';
import '@vaadin/vaadin-button';

import '@material/mwc-textfield';
import '@material/mwc-icon';
// import '@material/mwc-button';

export class DinamicoUtilidades extends LitElement {


  render(){
    return html`
      <div>
        <vaadin-horizontal-layout>
          <div class='block'>
            <form id="formEmployee">
              <vaadin-custom-field >
                <vaadin-text-field name="name" id="name" label="Nombre Completo" prevent-invalid-input pattern="[aA-zZ]*" style="width: 100%;"></vaadin-text-field>
                <vaadin-text-field name="document" id="document"  label="Documento" prevent-invalid-input pattern="[0-9]*" style="width: 100%;"></vaadin-text-field>
                <vaadin-text-field name="email" id="email" label="Correo" style="width: 100%;"></vaadin-text-field>
                <vaadin-date-picker name="date" id="date" label="Fecha de Nacimiento" style="width: 45%;"></vaadin-date-picker>
                <vaadin-text-field name="phone" id="phone" label="Telefono" prevent-invalid-input pattern="[0-9]*" style="width: 54%;"></vaadin-text-field> 
              </vaadin-custom-field>
              <vaadin-button @click=${this.handleClick}>
                Guardar
              </vaadin-button>
            </form>
          </div>
          <div class='block'>
            <table>
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Telefono</th>
                </tr>
              </thead>
              <tbody>
              ${this._collection && this._collection.map((item)=>html`
                <tr>
                  <td>${item.Documento}</td>
                  <td>${item.Nombre}</td>
                  <td>${item.Correo}</td>
                  <td>${item.Telefono}</td>
                </tr>
              `)} 
              </tbody>  
            </table>
          </div>
        </vaadin-horizontal-layout>
      </div>
    `;
  }

  static get properties() {
    return {
      _name: String
    };
  }

  static get styles(){

    return css`

      .block{
        border-radius:5px;
        padding: 30px;
        margin:2% 0 0 2%;
        background: #fff;
        width:40%;
        font-size:15px;
      }

      mwc-textfield {
        --mdc-theme-primary: blue;
        margin-top:20px;
      }

      mwc-button {
        --mdc-theme-primary: blue;
        --mdc-theme-on-primary: white;
        float:right;
        margin-top:20px;
      }

    `;
  }

  constructor() {
    super();
    this._name = '7';
    this._collection = [];
      const that = this;
      var empleadosRef = firebase.firestore().collection('empleados');
      var query = empleadosRef.where("Activo", "==", true);
      query.get().then( function(querySnapshot){
        querySnapshot.forEach(function(doc){
          that._collection.push(doc.data());
        });
        that.requestUpdate();
      });
  }

}
