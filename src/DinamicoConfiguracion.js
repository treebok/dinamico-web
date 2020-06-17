import { LitElement, html, css } from 'lit-element';

import '@vaadin/vaadin-ordered-layout';
import '@vaadin/vaadin-icons';

export class DinamicoConfiguracion extends LitElement {

  static get properties() {
    return {
      _name: String
    };
  }

  static get properties(){
        return {
            _opcionVisible:Number
        }
  }

  static get styles(){
    return css`
        .block{
            display:inline-block;
            padding: 5px;
            border-radius:5px;
            width:40%;
            min-width:45%;
            margin:2% 0 0 2%;
            background:#fff;
            box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
        }

        .block-item{
            padding:5px 0;
            margin:0 2%;
        }

        .table-info tr td:first-child{
            font-weight:bold;
        }

        .block-item>img{
            width:150px;
            height:100px;
        }

        div.mostrar{
            display:block;
        }

        div.no-mostrar{
            display:none;
        }

        header{
        width:100%;
        margin:auto;
      }

      #navMenu{
        background:#1a75ff;
        position:relative;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
      }
  
      #navMenu ul{
        list-style:none;
        padding:0;
        margin:0;
        overflow:hidden;
      }

      #navMenu > ul > li{
        float:left;
      }

      #navMenu ul li a{
        text-decoration:none;
        display:block;
        color:#fff;
        padding: 20px 30px;
        transition: background 0.3s;
      }

      #navMenu ul li a:hover{
        background: #1a75aa;
      }

      .subMenu > ul{
        display: block;
        position:absolute;
        background:#1a75ff;
        transition: opacity 0.2s ease-in;
          opacity: 0; 
          height: 0;
          overflow: hidden;
      }
      .subMenu:hover > ul{
        display: block;
        height: auto;
          opacity: 1;
      }
    `;
    }

  constructor() {
        super();
        this.count = 0;
        this._opcionVisible=0;

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

    render(){

        return html `
        <div>
        <header>
          <nav id='navMenu'>
            <ul>
              <li>
                <a href='/'>
                  <iron-icon icon="vaadin:home-o"></iron-icon>
                  Inicio
                </a>
              </li>
              <li class='subMenu'>
                <a href='/'>
                  <iron-icon icon="vaadin:users"></iron-icon>
                  Empleados
                </a>
                <ul>
                  <li><a href='/'>Sub Menu</a></li>
                  <li><a href='/'>Sub Menu</a></li>
                  <li><a href='/'>Sub Menu</a></li>
                  <li><a href='/'>Sub Menu</a></li>
                </ul>
              </li>
              <li class='subMenu'>
                <a href='/'>
                  <iron-icon icon="vaadin:chart"></iron-icon>
                  Movimientos
                </a>
                <ul>
                  <li><a href='/'>Sub Menu</a></li>
                  <li><a href='/'>Sub Menu</a></li>
                  <li><a href='/'>Sub Menu</a></li>
                </ul>
              </li>
              <li><a href='/'>Prestaciones</a></li>
            </ul>
          </nav>
        </header>
      </div>
            <div>
                ${this._collection && this._collection.map((item) => html`
                <div class="block">
                    <vaadin-horizontal-layout>
                        <div class='block-item'>
                            <img src='${item.Imagen}' alt='user avatar'/>
                        </div>
                        <div class='block-item'>
                            <table class='table-info'>
                                <tr>
                                    <td>Documento: </td>
                                    <td>C.C. ${item.Documento}</td>
                                </tr>
                                <tr>
                                    <td>Nombre: </td>
                                    <td>${item.Nombre}</td>
                                </tr>
                                <tr>
                                    <td>Telefono: </td>
                                    <td>${item.Telefono}</td>
                                </tr>
                                <tr>
                                    <td>Edad: </td>
                                    <td>${item.Edad}</td>
                                </tr>
                                <tr>
                                    <td>Correo: </td>
                                    <td>${item.Correo}</td>
                                </tr>
                            </table>
                        </div>
                    </vaadin-horizontal-layout>
                </div>
                `)}
                
            </div>

        `;
    }

}
