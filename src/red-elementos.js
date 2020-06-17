import { LitElement, html, css } from 'lit-element';

export class RedTitulo extends LitElement {

  static get styles() {
    return [
      css`
        p {
          text-align: center;
          background-color: violet;
          color: #FFFFFF;
        }
      `
    ];
  }


  render() {
    return html`
        <p>${this.titulo}</p>
    `;
  }

  static get properties() {
    return {
      titulo: String
    };
  }

  constructor() {
    super();
  }
}

export class RedOpinion extends LitElement {

  static get styles() {
    return [
      css`
        small {
          text-align: center;
        }
        p {
          text-align: center;
          background-color: pink;
          color: #000000;
        }
      `
    ];
  }

  render() {
    return html`
        <p>
        <small><i>Mi impresión hasta ahora:</i></small>
          ${this.opinion}
        </p>
    `;
  }

  static get properties() {
    return {
      opinion: String
    };
  }

  constructor() {
    super();
  }
}

export class RedImagen extends LitElement {

  static get styles() {
    return [
      css`
        p {
          text-align: center;
          background-color: violet;
          color: #FFFFFF;
        }
      `
    ];
  }

  render() {
    return html`
        <div>
          <p>${this.titulo}</p>
          <img src="${this.imagen}" />
        </div>
    `;
  }

  static get properties() {
    return {
      titulo: String,
      imagen: String
    };
  }

  constructor() {
    super();
    this.titulo="";
  }
}

customElements.define('red-opinion', RedOpinion);
customElements.define('red-titulo', RedTitulo);
customElements.define('red-imagen', RedImagen);