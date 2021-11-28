import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    if (confirm("Confirmar Interesse")) {
      this.router.navigate(['/']);
    } 
  }

 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
