import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'airbnb-register-interest',
  templateUrl: './register-interest.component.html',
  styleUrls: ['./register-interest.component.scss']
})
export class RegisterInterestComponent implements OnInit {

  nome!: string;
  email!: string;

  registrar(){
    console.log('Resgistro solicitado');
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
