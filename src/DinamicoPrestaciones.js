import { LitElement, html, css } from 'lit-element';

// import '@vaadin/vaadin';
import '@vaadin/vaadin-grid';
import { RedTitulo, RedOpinion } from './red-elementos.js';
import { Button } from '@material/mwc-button/mwc-button.js';
import { Dialog } from '@material/mwc-dialog/mwc-dialog.js';
import '@material/mwc-textarea';
import '@material/mwc-formfield/mwc-formfield';
import '@material/mwc-textfield';
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-date-picker';

export class DinamicoPrestaciones extends LitElement {
  render() {
    return html`
      <section>
        <red-opinion opinion='Vaadin sabemos que es muy bueno confiable, completo, bonito, y todo muy normal para usar.'></red-opinion>
        <red-titulo titulo='vaadin-grid'></red-titulo>
        <vaadin-grid id="vaadingrid">
          <vaadin-grid-column path="name.first" header="First name"></vaadin-grid-column>
          <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
          <vaadin-grid-column path="location.city"></vaadin-grid-column>
          <vaadin-grid-column path="visitCount" text-align="end" width="120px" flex-grow="0"></vaadin-grid-column>
        </vaadin-grid><br>
      </section>



      <section>
      <red-titulo titulo='vaadin-form-layout vaadin-text-field vaadin-date-picker vaadin-text-area'></red-titulo>
      <vaadin-form-layout>
        <vaadin-text-field label="First Name" value="Jane"></vaadin-text-field>
        <vaadin-text-field label="Last Name" value="Doe"></vaadin-text-field>
        <vaadin-text-field label="Email" value="jane.doe@example.com"></vaadin-text-field>
        <vaadin-date-picker label="Birthday" value="1993-06-23"></vaadin-date-picker>
        <vaadin-text-area label="Bio" colspan="2" value="My name is Jane."></vaadin-text-area>
      </vaadin-form-layout>


      <red-titulo titulo='mwc-button mwc-dialog vaadin-form-layout '></red-titulo>

      <mwc-button label="standard fetch" icon="code" @click="${(e) => this._button3Clicked(e)}"></mwc-button>
      <red-titulo titulo='mwc-button mwc-dialog vaadin-form-layout vaadin-text-field vaadin-date-picker vaadin-text-area'></red-titulo>
      <mwc-button label="standard" icon="code" @click="${(e) => this._button3bClicked(e)}"></mwc-button>

      <mwc-button label="standard fetch 2" icon="code" @click="${(e) => this._button3cClicked(e)}"></mwc-button>

      <red-titulo titulo='vaadin-form-layout vaadin-form-item'></red-titulo>
      <vaadin-form-layout>

        <vaadin-form-item>
          <label slot="label">First Name</label>
          <input class="full-width" value="Jane">
        </vaadin-form-item>

        <vaadin-form-item>
          <label slot="label">Last Name</label>
          <input class="full-width" value="Doe">
        </vaadin-form-item>

        <vaadin-form-item>
          <label slot="label">Email</label>
          <input class="full-width" value="jane.doe@example.com">
        </vaadin-form-item>

      </vaadin-form-layout>



      <red-titulo titulo='vaadin-form-layout vaadin-form-item Spanning Items on Multiple Columns'></red-titulo>
      <vaadin-form-layout>

        <vaadin-form-item colspan="2">
          <label slot="label">Address</label>
          <input class="full-width">
        </vaadin-form-item>

        <vaadin-form-item>
          <label slot="label">First Name</label>
          <input class="full-width" value="Jane">
        </vaadin-form-item>

        <vaadin-form-item>
          <label slot="label">Last Name</label>
          <input class="full-width" value="Doe">
        </vaadin-form-item>

      </vaadin-form-layout>

      <red-titulo titulo='vaadin-form-layout vaadin-form-item Explicit New Row'></red-titulo>
      <vaadin-form-layout>

        <vaadin-form-item>
          <label slot="label">Email</label>
          <input class="full-width">
        </vaadin-form-item>

        <br>

        <vaadin-form-item>
          <label slot="label">Confirm Email</label>
          <input class="full-width">
        </vaadin-form-item>

      </vaadin-form-layout>






      <div>
        <form id="ensayo3-form" method="post" enctype="multipart/form-data">
            <input type="radio" id="male3" name="gender3" value="male">
            <label for="male">Male</label><br>
            <input type="radio" id="female3" name="gender3" value="female">
            <label for="female">Female</label><br>
            <input type="radio" id="other3" name="gender3" value="other">
            <label for="other">Other</label>
        </form>
        <mwc-button
            slot="primaryAction"
            dialogAction="accept"
            @click="${(e) => this._onClickAceptarForma33(e)}">
          Accept
        </mwc-button>
        <mwc-button
            slot="secondaryAction"
            dialogAction="decline"
            disabled>
          Decline
        </mwc-button>
      </div>
      </section>







      <mwc-dialog heading="Privacy Policy" id="dialogNumero3">
        <div>
          <form id="ensayo-form">
            <vaadin-form-layout>
              <mwc-textfield label="First name" value="Jane" name="first" id="first"></mwc-textfield>
              <mwc-textfield label="Last name" value="Doe" name="last" id="last"></mwc-textfield>
              <mwc-textfield label="Email" value="jane.doe@example.com" name="email" id="email"></mwc-textfield>
              <mwc-textfield label="Birthday" value="1993-06-23" name="birthday" id="birthday"></mwc-textfield>
              <mwc-textarea label="Bio" colspan="2" value="My name is Jane." name="bio" id="bio"></mwc-textarea>
            </vaadin-form-layout>
          </form>
        </div>
        <mwc-button
            slot="primaryAction"
            dialogAction="accept"
            @click="${(e) => this._onClickAceptarForma(e)}">
          Accept
        </mwc-button>
        <mwc-button
            slot="secondaryAction"
            dialogAction="decline"
            disabled>
          Decline
        </mwc-button>
      </mwc-dialog>








      <mwc-dialog heading="Privacy Policy" id="dialogNumero3c">
        <div>
          <form id="ensayo2-form">
              <input type="radio" id="male2" name="gender2" value="male">
              <label for="male">Male</label><br>
              <input type="radio" id="female2" name="gender2" value="female">
              <label for="female">Female</label><br>
              <input type="radio" id="other2" name="gender2" value="other">
              <label for="other">Other</label>
          </form>
        </div>
        <mwc-button
            slot="primaryAction"
            dialogAction="accept"
            @click="${(e) => this._onClickAceptarForma2(e)}">
          Accept
        </mwc-button>
        <mwc-button
            slot="secondaryAction"
            dialogAction="decline"
            disabled>
          Decline
        </mwc-button>
      </mwc-dialog>













      <mwc-dialog heading="Privacy Policy" id="dialogNumero3b">
        <div>
          <vaadin-form-layout>
            <vaadin-text-field label="First Name" value="Jane"></vaadin-text-field>
            <vaadin-text-field label="Last Name" value="Doe"></vaadin-text-field>
            <vaadin-text-field label="Email" value="jane.doe@example.com"></vaadin-text-field>
            <vaadin-date-picker label="Birthday" value="1993-06-23"></vaadin-date-picker>
            <vaadin-text-area label="Bio" colspan="2" value="My name is Jane."></vaadin-text-area>
          </vaadin-form-layout>
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

  constructor() {
    super();
  }

  static get properties() {
    return {
      _arr: Array
    };
  }

  firstUpdated() {
    this._arr = [
      {
       "name": {
         "first": "Juan",
         "last": "Henao",
       },
       "location": {
         "city": "Medellin"
       }
      },
      {
        "name": {
          "first": "Monica",
          "last": "Duque",
        },
        "location": {
          "city": "Medellin"
        }
      },
      {
        "name": {
          "first": "Elvira",
          "last": "Pina",
        },
        "location": {
          "city": "Valledupar"
        }
      }
    ];
    // this.shadowRoot.querySelector('#vaadingrid').items = Vaadin.GridDemo.users;
    this.shadowRoot.querySelector('#vaadingrid').items = this._arr;
    this.shadowRoot.querySelector('#vaadingridpro').items = this._arr;
  }

  _onClickAceptarForma33(e) {
    var ensayoForm = this.shadowRoot.querySelector('#ensayo3-form');
    var form = new FormData(ensayoForm);
    console.log('form3',form);
    // fetch('someurl/ensayo', {
    //   method: 'POST',
    //   body: form
    // });
  }

  _onClickAceptarForma(e) {
    var ensayoForm = this.shadowRoot.querySelector('#ensayo-form');
    var form = new FormData(ensayoForm);
    console.log('form',form);
    // fetch('someurl/ensayo', {
    //   method: 'POST',
    //   body: form
    // });
  }

  _onClickAceptarForma2(e) {
    // var ensayoForm = this.shadowRoot.querySelector('#ensayo2-form');
    // var form = new FormData(ensayoForm);
    let data = new FormData();
    if (this.shadowRoot.querySelector('#male2').checked)
      data.append('sex', 'male');
    else
    if (this.shadowRoot.querySelector('#female2').checked)
      data.append('sex', 'female');
    else
      data.append('sex', 'other');
    console.log('formaaaaa',data);
    // fetch('someurl/ensayo2', {
    //   method: 'POST',
    //   body: form
    // });
  }

  _button3Clicked(e) {
    this.shadowRoot.querySelector('#dialogNumero3').open=true;
  }

  _button3bClicked(e) {
    this.shadowRoot.querySelector('#dialogNumero3b').open=true;
  }

  _button3cClicked(e) {
    this.shadowRoot.querySelector('#dialogNumero3c').open=true;
  }

}
