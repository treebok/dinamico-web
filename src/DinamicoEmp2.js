import { LitElement, html, css } from 'lit-element';

export class DinamicoEmp2 extends LitElement {
  static get properties() {
    return {
      _collection: Array
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-block;
        padding: 8px;
        background: none;
        border: none;
        fill: var(--app-header-text-color);
      }

    `;
  }

  render() {
    return html`
    <main>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>

      <button type="button" class="btn btn-link">Link</button>

      <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
        <table class="table my-0" id="dataTable">
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody id="tableEmployees">
              ${this._collection && this._collection.map((item) => html`
                <tr>
                  <td style="vertical-align:middle"><img src="${item.imageUrl}"></td>
                  <td style="vertical-align:middle">${item.Nombre}</td>
                  <td style="vertical-align:middle">${item.Correo}</td>
                  <td style="vertical-align:middle">${item.Edad}</td>
                </tr>
              `)}
            </tbody>
        </table>
      </div>
    </main>
    `;
  }

  constructor() {
    super();
    this._collection = [];
    const that = this;
    var citiesRef = firebase.firestore().collection('empleado');
    var query = citiesRef.where("Activo", "==", true);
    query.get().then( function(querySnapshot){
      querySnapshot.forEach(function(doc){
        that._collection.push(doc.data());
      });
      that.requestUpdate();
    });
  }

}
