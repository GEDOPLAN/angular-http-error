import { TestBed, inject } from '@angular/core/testing';

import { JSONPlaceHolderService } from './jsonplace-holder.service';

describe('JSONPlaceHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JSONPlaceHolderService]
    });
  });

  it('should ...', inject([JSONPlaceHolderService], (service: JSONPlaceHolderService) => {
    expect(service).toBeTruthy();
  }));
});
