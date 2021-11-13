import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'airbnb-be-host',
  templateUrl: './be-host.component.html',
  styleUrls: ['./be-host.component.scss']
})
export class BeHostComponent implements OnInit {

  regiao!: string;
  telefone!: number;

  cadastrar(){
    console.log('Cadastro solicitado');
    console.log('Região: ', this.regiao);
    console.log('Telefone: ', this.telefone);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
