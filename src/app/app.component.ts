import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'airbnb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    !localStorage.getItem('interestList') && localStorage.setItem('interestList', JSON.stringify([]));
  }
}
