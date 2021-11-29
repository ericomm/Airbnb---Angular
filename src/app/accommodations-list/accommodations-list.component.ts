import { Component, OnInit } from '@angular/core';

import { Accommodation } from '../shared/accommodation/accommodation.interface';
import { AccommodationService } from '../shared/accommodation/accommodation.service';

@Component({
  selector: 'airbnb-accommodations-list',
  templateUrl: './accommodations-list.component.html',
  styleUrls: ['./accommodations-list.component.scss'],
})
export class AccommodationsListComponent implements OnInit {
  public accommodationsList: Array<Accommodation> = [];

  public constructor(private accommodationService: AccommodationService) {}

  public ngOnInit() {
    this.accommodationService
    .getAccommodations()
    .subscribe((accommodationsList: Accommodation[]) => {
      this.accommodationsList = accommodationsList
    });
  }

  public hasInterest(id: number): boolean {
    return !JSON.parse(localStorage.getItem('interestList')).includes(id);
  }

  public getInterestList(): Array<string> {
    return JSON.parse(localStorage.getItem('interestList'));
  }
}
