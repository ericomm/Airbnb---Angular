import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'airbnb-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  consultar() {
    console.log('Consulta solicitada');
  }

  constructor() {}

  ngOnInit() {}
}
