import { LitElement, html, css } from 'lit-element';

import '@kor-ui/card/index.js'; 
import '@vaadin/vaadin-ordered-layout';
import '@vaadin/vaadin-accordion';
import '@vaadin/vaadin-list-box';

import '@material/mwc-icon';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

export class DinamicoMovimientos extends LitElement {

  static get styles(){
    return css`
      
      #sectionMovimiento{
        margin:2% 5% 2% 5%;
        background: #fff;
      }

      .itemMovimiento{
        width: 100%;
        margin: 2% 5% 2% 5%;
      }

      .itemMovimiento>p{
        padding:20px;
        background:#2980b9;
        color:#fff;
      }

      .subitem{
        width: 25%;
        margin:2%;
        border-radius:5px;
        padding:10px;
        font-size:20px;
        background:#80b3ff;
        transition:all 0.3s;
        color:#fff;
      }

      .subitem>mwc-icon{
        --mdc-icon-size: 60px;
      }

      .subitem:hover{
        background:#2980b9;
        cursor: pointer;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
      }

      .subItemGerencia{
        background: #ff3333;
        border-left-radius:5px;
        padding:0px;
        width:30%;
      }

      .gerenciaList{
        width:30%;
        background: #ebebe0;

      }

      .subItemGerencia>img{
        width: 200px;
      }

    `;
  }

  render() {
    return html`
      <section id="sectionMovimiento">
        <vaadin-horizontal-layout>
          <div class="itemMovimiento">
            <p>Novedades</p>
            <vaadin-horizontal-layout>
              <div class="subitem">
                <mwc-icon icon="graphic">post_add</mwc-icon>
                <p>Registrar Novedades</p>
              </div>
              <div class="subitem">
                <mwc-icon icon="graphic">monetization_on</mwc-icon>
                <p>Liquidar</p>
              </div>
              <div class="subitem">
                <mwc-icon icon="graphic">search</mwc-icon>
                <p>Consultar Novedades</p>
              </div>
              <div class="subitem">
                <mwc-icon icon="graphic">how_to_reg</mwc-icon>
                <p>Complementar Novedades</p>
              </div>
            </vaadin-horizontal-layout>
          </div>
        </vaadin-horizontal-layout>

        <vaadin-horizontal-layout>
          <div class="itemMovimiento">
            <p>Gerencia Electronica</p>
            <vaadin-horizontal-layout>
              <div class="subItemGerencia">
                <img src="images/movimientos/atm-machine.png" />
              </div>
              <div class="gerenciaList">
                <mwc-list activatable>
                  <mwc-list-item graphic="avatar">
                    <span>Davivienda</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Santander</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Colmena 2003</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Las Villas</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>
                  </mwc-list-item>
                  
                </mwc-list>
              </div>
              <div class="gerenciaList">
                <mwc-list activatable>
                  <mwc-list-item graphic="avatar">
                    <span>Megabanco</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Bancafé</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Banco de Bogotá</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Banco Colpatria</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>
                  </mwc-list-item>
                  
                </mwc-list>
              </div>
              <div class="gerenciaList">
                <mwc-list activatable>
                  <mwc-list-item graphic="avatar">
                    <span>Banco Ganadero</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>  
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Bancolombia</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>  
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Citi</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>  
                  </mwc-list-item>
                  <mwc-list-item graphic="avatar">
                    <span>Confiar</span>
                    <mwc-icon slot="graphic">payment</mwc-icon>  
                  </mwc-list-item>
                </mwc-list>
              </div>
            </vaadin-horizontal-layout>
          </div>
        </vaadin-horizontal-layout>
      </section>
    `;
  }

  static get properties() {
    return {
      _name: String
    };
  }

  constructor() {
    super();
    this._name = '3';
  }

}
