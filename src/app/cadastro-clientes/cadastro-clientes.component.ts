import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.scss']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro;
  list: Array<any> = new Array();

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [],
      email: [],
      telefone: [],
      endereco: []
    });
  }


  cadastro() {
    const obj = this.formCadastro.value;

    if (localStorage.getItem('cadastro') != null) {
      this.list = JSON.parse(localStorage.getItem('cadastro'));
    }

    this.list.push(obj);
    localStorage.setItem('cadastro', JSON.stringify(this.list));
    this.router.navigate(['list-clientes']);

  }
}
