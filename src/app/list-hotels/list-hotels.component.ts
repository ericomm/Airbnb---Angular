import { Component, OnInit } from '@angular/core';
import { Accommodation } from './accommodation.interface';
import { ListHotelsService } from './list-hotels.service';

@Component({
  selector: 'airbnb-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.scss'],
})
export class ListHotelsComponent implements OnInit {
  public accommodationsList: Array<Accommodation> = [];

  public constructor(private accommodationService: ListHotelsService) {}

  public ngOnInit() {
    this.accommodationService
    .getAccommodations()
    .subscribe((accommodationsList: Accommodation[]) => {
      this.accommodationsList = accommodationsList
    });
  }
}
