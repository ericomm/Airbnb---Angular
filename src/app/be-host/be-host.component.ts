import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'airbnb-be-host',
  templateUrl: './be-host.component.html',
  styleUrls: ['./be-host.component.scss']
})
export class BeHostComponent implements OnInit {

  nome!: string;
  email!: string;

  cadastrar(){
    console.log('Cadastro solicitado');
    console.log('nome: ', this.nome);
    console.log('email: ', this.email);

    this.limparCampos();

  }

  limparCampos(){
    this.nome ='';
    this.email = '';

  }

  constructor() { }

  ngOnInit(): void {
  }

}
