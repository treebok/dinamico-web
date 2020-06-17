import { LitElement, html, css } from 'lit-element';

export class EmployeeComponent extends LitElement {

	// static get styles() {
  //   return css`
  //     img {
  //       width: 60px;
  //       height: 60px;
  //       border-radius: 50%;
  //       display: inline-block;
  //       padding: 8px;
  //       background: none;
  //       border: none;
  //       fill: var(--app-header-text-color);
  //     }
  //     td {
  //       vertical-align: top;
  //     }
  //   `;
  // }

	static get properties(){
		return {
	      _employees: Array,
	    };
	}

	constructor(){
		super();

		this._employees=[];

		const that = this;
	    var empleadosRef = firebase.firestore().collection('empleado');
	    var query = empleadosRef.where("Activo", "==", true);
	    query.get().then( function(querySnapshot){
	        querySnapshot.forEach(function(doc){
	            that._employees.push(doc.data());
	        });
	        that.requestUpdate();
	    });
	}

	createRenderRoot () {
	  return this;
	}

	render(){
		return html`
			<div class="container-fluid"><h3 class="text mb-4">EMPLEADOS</h3>
                <div class="card shadow">
                    <div class="card-header py-3">
                        <p class="text-primary m-0 font-weight-bold">Employee Info</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 text-nowrap">
                                <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select class="form-control form-control-sm custom-select custom-select-sm"><option value="10" selected="">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>&nbsp;</label></div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"></label></div>
                            </div>
                        </div>
                        <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                            <table class="table my-0" id="dataTable">
                                <thead>
                                    <tr>
																				<th></th>
                                        <th>Nombre</th>
                                        <th>Documento</th>
                                        <th>Email</th>
                                        <th>Edad</th>
                                    </tr>
                                </thead>
                                <tbody id="tableEmployees">
									${this._employees && this._employees.map((item) => html`
										<tr>
											<td><img src="${item.imageUrl}"></td>
											<td>${item.Nombre}</td>
											<td>${item.Documento}</td>
											<td>${item.Correo}</td>
											<td>${item.Edad}</td>
										</tr>
									`)}
                                </tbody>
                                <tfoot>
                                    <tr>
																			<th></th>
																			<th>Nombre</th>
																			<th>Documento</th>
																			<th>Email</th>
																			<th>Edad</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-md-6 align-self-center">
                                <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                            </div>
                            <div class="col-md-6">
                                <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		`;
	}

}

customElements.define("employees-component", EmployeeComponent);
