import { LitElement, html, css } from 'lit-element';
import { EmployeeComponent } from './employees-component';
// import { TemplateHeader } from './templates/template-header';
// import { TemplateNavbar } from './templates/template-navbar';

export class DinamicoEmp3 extends LitElement {

  static get styles() {
    return css`
      /* img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: inline-block;
        padding: 8px;
        background: none;
        border: none;
        fill: var(--app-header-text-color);
      } */
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      td {
        vertical-align: top;
      }
    `;
  }


  render() {
    return html`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">


    <!-- santi: -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">



    <div id="wrapper">
      <!-- <template-header></template-header> -->

      <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <!-- <template-navbar></template-navbar> -->
          <employees-component></employees-component>
        </div>
      </div>
    </div>
    `;
  }

}
