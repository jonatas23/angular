import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit {

  listClientes: any;

  constructor() {
  }

  ngOnInit() {
    this.listClientes = JSON.parse(localStorage.getItem('cadastro'));
    console.log(this.listClientes);
  }

}
