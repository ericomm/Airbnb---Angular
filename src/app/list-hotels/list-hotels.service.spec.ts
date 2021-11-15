import { TestBed } from '@angular/core/testing';

import { ListHotelsService } from './list-hotels.service';

describe('ListService', () => {
  let service: ListHotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListHotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
