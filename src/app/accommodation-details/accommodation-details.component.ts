import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Accommodation } from '../shared/accommodation/accommodation.interface';
import { AccommodationService } from '../shared/accommodation/accommodation.service';

@Component({
  selector: 'airbnb-accommodation-details',
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.scss'],
})
export class AccommodationDetailsComponent implements OnInit {
  public accommodation: Accommodation;
  
  public constructor(
    private accommodationService: AccommodationService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.accommodationService
      .getAccommodation(this.route.snapshot.params['id'])
      .subscribe((accommodationId: Accommodation) => {
        this.accommodation = accommodationId
      });
  }

  public hasInterest(id: number): boolean {
    return JSON.parse(localStorage.getItem('interestList')).includes(id);
  }
}
