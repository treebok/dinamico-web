import { LitElement, html, css } from 'lit-element';

import { Button } from '@material/mwc-button/mwc-button.js';
import { Dialog } from '@material/mwc-dialog/mwc-dialog.js';
//import '@material/mwc-icon/mwc-icon';
import '@material/mwc-radio/mwc-radio';
import '@material/mwc-formfield/mwc-formfield';
import '@material/mwc-fab/mwc-fab';
import { RedTitulo, RedOpinion } from './red-elementos.js';
import '@material/mwc-switch';
import '@material/mwc-checkbox';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import '@material/mwc-tab-bar';
import '@material/mwc-tab';

export class DinamicoPila extends LitElement {
  render() {
    return html`
      <red-opinion opinion='Material. bonitos. son hechos por google. funcionan derecho normal y facil.'></red-opinion>
      <red-titulo titulo='mwc-button'></red-titulo>
      <p>
        <mwc-button label="standard" @click="${(e) => this._button1Clicked(e)}"></mwc-button>
        <mwc-button label="standard" icon="code" @click="${(e) => this._button1Clicked(e)}"></mwc-button>
      </p>
      <p>
        <mwc-button outlined label="outlined" @click="${(e) => this._button2Clicked(e)}"></mwc-button>
        <mwc-button outlined label="outlined" icon="code" @click="${(e) => this._button2Clicked(e)}"></mwc-button>
      </p>
      <p>
        <mwc-button raised label="raised" @click="${(e) => this._button3Clicked(e)}"></mwc-button>
        <mwc-button raised label="raised" icon="code" @click="${(e) => this._button3Clicked(e)}"></mwc-button>
      </p>
      <p>
        <mwc-button dense unelevated label="dense" @click="${(e) => this._button3Clicked(e)}"></mwc-button>
        <mwc-button dense unelevated label="dense" icon="code" @click="${(e) => this._button3Clicked(e)}"></mwc-button>
      </p>
      <p>
        <mwc-button dense unelevated label="dense" @click="${(e) => this._button3Clicked(e)}" class="red-color"></mwc-button>
        <mwc-button dense unelevated label="dense" icon="code" @click="${(e) => this._button3Clicked(e)}" class="red-color"></mwc-button>
      </p>
      <red-titulo titulo='mwc-fav'></red-titulo>
      <p>
        <mwc-fab icon="edit"></mwc-fab>
      </p>
      <p>
        <mwc-fab mini icon="add"></mwc-fab>
      </p>
      <p>
        <mwc-fab extended icon="shopping_cart" label="Add to cart"></mwc-fab>
      </p>
      <red-titulo titulo='mwc-formfield With checkbox'></red-titulo>
      <mwc-formfield label="Tomato">
        <mwc-checkbox checked></mwc-checkbox>
      </mwc-formfield>
      <red-titulo titulo='mwc-formfield With Radio'></red-titulo>
      <mwc-formfield label="Home">
        <mwc-radio name="location" checked></mwc-radio>
      </mwc-formfield>

      <mwc-formfield label="Work">
        <mwc-radio name="location"></mwc-radio>
      </mwc-formfield>
      <red-titulo titulo='mwc-formfield With Switch'></red-titulo>
      <mwc-formfield label="Airplane mode">
        <mwc-switch checked></mwc-switch>
      </mwc-formfield>

      <red-titulo titulo='mwc-formfield With input type date'></red-titulo>
      <mwc-formfield label="Enter a date">
        <input type="date">
      </mwc-formfield>

      <red-titulo titulo='mwc-textfield Standard / Filled'></red-titulo>
      <mwc-textfield label="My Textfield"></mwc-textfield>
      <red-titulo titulo='mwc-textfield Icon - Leading'></red-titulo>
      <mwc-textfield label="My Textfield" icon="event"></mwc-textfield>
      <red-titulo titulo='mwc-textfield Icon - Trailing'></red-titulo>
      <mwc-textfield label="My Textfield" iconTrailing="delete"></mwc-textfield>
      <red-titulo titulo='mwc-textfield Helper Text'></red-titulo>
      <mwc-textfield label="My Textfield" helper="Helper Text"></mwc-textfield>
      <red-titulo titulo='mwc-textfield Primary Color'></red-titulo>
      <mwc-textfield
          label="My Textfield"
          iconTrailing="delete"
          required>
      </mwc-textfield>
      <red-titulo titulo='mwc-textfield Variants Outlined'></red-titulo>
      <mwc-textfield
          outlined
          label="My Textfield"
          iconTrailing="delete">
      </mwc-textfield>
      <red-titulo titulo='mwc-textfield Variants Shaping Outlined'></red-titulo>
      <mwc-textfield
          class="left";
          label="My Textfield"
          iconTrailing="delete"
          outlined>
      </mwc-textfield>

      <mwc-textfield
          class="right";
          label="My Textfield"
          iconTrailing="delete"
          outlined>
      </mwc-textfield>

      <mwc-textfield
          class="left right";
          label="My Textfield"
          iconTrailing="delete"
          outlined>
      </mwc-textfield>

      <red-titulo titulo='mwc-textfield Variants Fullwidth'></red-titulo>
      <mwc-textfield fullwidth placeholder="Standard" helper="Helper Text"></mwc-textfield>

      <red-titulo titulo='mwc-textarea Standard'></red-titulo>
      <mwc-textarea label="My Textarea"></mwc-textarea>

      <red-titulo titulo='mwc-textarea Helper Text'></red-titulo>
      <mwc-textarea label="My Textarea" helper="Helper Text"></mwc-textarea>

      <red-titulo titulo='mwc-textarea Primary Color'></red-titulo>
      <style>
        mwc-textarea {
          --mdc-theme-primary: green;
        }
      </style>

      <mwc-textarea
          label="My Textarea"
          required>
      </mwc-textarea>

      <red-titulo titulo='mwc-textarea Variants Outlined'></red-titulo>
      <mwc-textarea
          outlined
          label="My Textarea">
      </mwc-textarea>

      <red-titulo titulo='mwc-textarea Variants Shaping Outlined'></red-titulo>
      <style>
        mwc-textarea.left {
          --mdc-notched-outline-leading-width: 28px;
          --mdc-notched-outline-leading-border-radius: 28px 0 0 28px;
        }

        mwc-textarea.right {
          --mdc-notched-outline-trailing-border-radius: 0 28px 28px 0;
        }
      </style>

      <mwc-textarea
          class="left";
          label="My Textarea"
          outlined>
      </mwc-textarea>

      <mwc-textarea
          class="right";
          label="My Textarea"
          outlined>
      </mwc-textarea>

      <mwc-textarea
          class="left right"
          label="My Textarea"
          outlined>
      </mwc-textarea>

      <red-titulo titulo='mwc-textarea Variants Fullwidth'></red-titulo>
      <mwc-textarea outlined fullwidth placeholder="My Textarea"></mwc-textarea>

      <red-titulo titulo='mwc-tab-bar Basic'></red-titulo>
      <mwc-tab-bar>
        <mwc-tab label="Tab one"></mwc-tab>
        <mwc-tab label="Tab two"></mwc-tab>
        <mwc-tab label="Tab three"></mwc-tab>
      </mwc-tab-bar>

      <red-titulo titulo='mwc-tab-bar Preselected'></red-titulo>
      <mwc-tab-bar activeIndex="1">
        <mwc-tab label="Tab one"></mwc-tab>
        <mwc-tab label="Tab two"></mwc-tab>
        <mwc-tab label="Tab three"></mwc-tab>
      </mwc-tab-bar>

      <red-titulo titulo='mwc-tab-bar Icons'></red-titulo>
      <mwc-tab-bar>
        <mwc-tab label="Tab one" icon="accessibility"></mwc-tab>
        <mwc-tab label="Tab two" icon="exit_to_app"></mwc-tab>
        <mwc-tab label="Tab three" icon="camera"></mwc-tab>
      </mwc-tab-bar>

      <red-titulo titulo='mwc-tab-bar Image / Slotted Icons'></red-titulo>
      <mwc-tab-bar>
        <mwc-tab label="Tab one" hasImageIcon>
          <!-- margin bottom is (24px - height) / 2 -->
          <svg
              slot="icon"
              width="10px"
              height="10px"
              style="margin-bottom:7px;">
            <circle
                r="5px"
                cx="5px"
                cy="5px"
                color="red">
            </circle>
          </svg>
        </mwc-tab>
        <mwc-tab label="Tab two" hasImageIcon>
          <svg
              slot="icon"
              width="10px"
              height="10px"
              style="margin-bottom:7px;">
            <rect
                width="10px"
                height="10px"
                color="green">
            </rect>
          </svg>
        </mwc-tab>
        <mwc-tab label="Tab three" hasImageIcon>
          <svg
              slot="icon"
              width="14.143px"
              height="14.143px"
              style="margin-bottom:4.928px;">
            <rect
                width="10px"
                height="10px"
                color="blue"
                y="2.071px"
                x="2.071px"
                style="transform:rotate(45deg);transform-origin:center;">
            </rect>
          </svg>
        </mwc-tab>
      </mwc-tab-bar>

      <red-titulo titulo='mwc-tab-bar Stacked Icons'></red-titulo>
      <mwc-tab-bar>
        <mwc-tab label="tab one" icon="accessibility" stacked></mwc-tab>
        <mwc-tab label="tab two" icon="exit_to_app" stacked></mwc-tab>
        <mwc-tab label="tab three" icon="camera" stacked></mwc-tab>
      </mwc-tab-bar>

      <red-titulo titulo='mwc-tab-bar Min-width Indicator (w/ stacked icon)'></red-titulo>
      <mwc-tab-bar>
        <mwc-tab
            label="tab one"
            icon="accessibility"
            stacked
            isMinWidthIndicator>
        </mwc-tab>
        <mwc-tab
            label="tab two"
            icon="exit_to_app"
            stacked
            isMinWidthIndicator>
        </mwc-tab>
        <mwc-tab
            label="tab three"
            icon="camera"
            stacked
            isMinWidthIndicator>
        </mwc-tab>
      </mwc-tab-bar>

      <red-titulo titulo='mwc-tab-bar Icon Indicator (w/ stacked icon)'></red-titulo>
      <mwc-tab-bar>
        <mwc-tab
            icon="camera"
            indicatorIcon="donut_large">
        </mwc-tab>
        <mwc-tab
            icon="accessibility"
            indicatorIcon="donut_large">
        </mwc-tab>
        <mwc-tab
            icon="exit_to_app"
            indicatorIcon="donut_large">
        </mwc-tab>
      </mwc-tab-bar>

      <red-titulo titulo='mwc-tab-bar Scrollable'></red-titulo>
      <style>
        mwc-tab-bar {
          border: solid black 1px;
        }
      </style>
      <mwc-tab-bar>
        <mwc-tab label="Tab one"></mwc-tab>
        <mwc-tab label="Tab two"></mwc-tab>
        <mwc-tab label="Tab three"></mwc-tab>
        <mwc-tab label="Tab four"></mwc-tab>
        <mwc-tab label="Tab five"></mwc-tab>
        <mwc-tab label="Tab six"></mwc-tab>
        <mwc-tab label="Tab seven"></mwc-tab>
        <mwc-tab label="Tab eight"></mwc-tab>
        <mwc-tab label="Tab nine"></mwc-tab>
        <mwc-tab label="Tab ten"></mwc-tab>
        <mwc-tab label="Tab eleven"></mwc-tab>
        <mwc-tab label="Tab twelve"></mwc-tab>
      </mwc-tab-bar>

      <red-titulo titulo='mwc-tab-bar Styled'></red-titulo>
      <style>
        mwc-tab-bar.verde {
          --mdc-theme-primary: red;
          --mdc-text-transform: none;
          --mdc-tab-border-radius: 20px 20px 0px 0px;
          --mdc-tab-color-default: green;
          --mdc-tab-text-label-color-default: green;
          --mdc-tab-stacked-height: 100px;
        }
      </style>
      <mwc-tab-bar class="verde">
        <mwc-tab
            label="tab one"
            icon="accessibility"
            stacked
            isMinWidthIndicator>
        </mwc-tab>
        <mwc-tab
            label="tab two"
            icon="exit_to_app"
            stacked
            isMinWidthIndicator>
        </mwc-tab>
        <mwc-tab
            label="tab three"
            icon="camera"
            stacked
            isMinWidthIndicator>
        </mwc-tab>
      </mwc-tab-bar>

      <mwc-dialog id="dialogNumero1">
        <div>Discard draft?</div>
        <mwc-button
            slot="primaryAction"
            dialogAction="discard">
          Discard
        </mwc-button>
        <mwc-button
            slot="secondaryAction"
            dialogAction="cancel">
          Cancel
        </mwc-button>
      </mwc-dialog>
      <mwc-dialog heading="Phone Ringtone" id="dialogNumero2">
        <div>
          <mwc-formfield label="Never Gonna Give You Up">
            <mwc-radio id="a1" name="a" checked></mwc-radio>
          </mwc-formfield>
          <mwc-formfield label="Hot Cross Buns">
            <mwc-radio name="a"></mwc-radio>
          </mwc-formfield>
          <mwc-formfield label="None">
            <mwc-radio name="a"></mwc-radio>
          </mwc-formfield>
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
      <mwc-dialog heading="Privacy Policy" id="dialogNumero3">
        <div>
          Central to a lot of scientific research into aging are tiny caps on the ends of our chromosomes called telomeres. These protective sequences of DNA grow a little shorter each time a cell divides, but by intervening in this process, researchers hope to one day regulate the process of aging and the ill health effects it can bring. A Harvard team is now offering an exciting pathway forward, discovering a set of small molecules capable of restoring telomere length in mice.
          Telomeres can be thought of like the plastic tips on the end of our shoelaces, preventing the fraying of the DNA code of the genome and playing an important part in a healthy aging process. But each time a cell divides, they grow a little shorter. This sequence repeats over and over until the cell can no longer divide and dies.
          This process is linked to aging and disease, including a rare genetic disease called dyskeratosis congenita (DC). This is caused by the premature aging of cells and is where the team focused its attention, hoping to offer alternatives to the current treatment that involves high-risk bone marrow transplants and which offers limited benefits.
          One of the ways dyskeratosis congenita comes about is through genetic mutations that disrupt an enzyme called telomerase, which is key to maintaining the structural integrity of the telomere caps. For this reason, researchers have been working to target telomerase for decades, in hopes of finding ways to slow or even reverse the effects of aging and diseases like dyskeratosis congenita.
        </div>
        <mwc-button
            slot="primaryAction"
            dialogAction="accept">
          Accept
        </mwc-button>
        <mwc-button
            slot="secondaryAction"
            dialogAction="decline"
            disabled>
          Decline
        </mwc-button>
      </mwc-dialog>
    `;
  }

  static get styles() {
    return css`
      .red-color {
        --mdc-theme-primary: #e9437a;
        --mdc-theme-on-primary: white;
      }
      mwc-formfield[nowrap] {
        width: 150px;
      }
      /* mwc-formfield {
        display: block;
      } */
      mwc-textfield.verde {
        --mdc-theme-primary: green;
      }
      mwc-textfield.left {
        --mdc-notched-outline-leading-width: 28px;
        --mdc-notched-outline-leading-border-radius: 28px 0 0 28px;
      }

      mwc-textfield.right {
        --mdc-notched-outline-trailing-border-radius: 0 28px 28px 0;
      }
    `;
  }

  _button3Clicked(e) {
    this.shadowRoot.querySelector('#dialogNumero3').open=true;
  }

  _button2Clicked(e) {
    this.shadowRoot.querySelector('#dialogNumero2').open=true;
  }

  _button1Clicked(e) {
    this.shadowRoot.querySelector('#dialogNumero1').open=true;
  }

}
