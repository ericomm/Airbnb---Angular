import { Component, OnInit } from '@angular/core';

import { Accommodation } from '../shared/accommodation/accommodation.interface';
import { AccommodationService } from '../shared/accommodation/accommodation.service';

@Component({
  selector: 'airbnb-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.scss'],
})
export class MyInterestsComponent implements OnInit {
  public myInterests: Array<Accommodation> = [];

  public constructor(private accommodationService: AccommodationService) {}

  public ngOnInit(): void {
    this.setInterestList();
  }

  public setInterestList(): void {
    JSON.parse(localStorage.getItem('interestList')).forEach(
      (accommodationId: number) => {
        this.accommodationService
          .getAccommodation(accommodationId)
          .subscribe((accommodation: Accommodation) =>
            this.myInterests.push(accommodation)
          );
      }
    );
  }

  public deleteInterest(interestId: number): void {
    const currentList: Array<number> = JSON.parse(localStorage.getItem('interestList'));
    const idIndex: number = currentList.findIndex((id: number) => id === interestId);
    currentList.splice(idIndex, 1);
    this.myInterests.splice(idIndex, 1);
    window.confirm('Tem certeza de que deseja remover o interesse nessa hospedagem?') && localStorage.setItem('interestList', JSON.stringify(currentList));
  }
}
