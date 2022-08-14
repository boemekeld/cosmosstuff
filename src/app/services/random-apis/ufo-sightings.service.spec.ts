import { TestBed } from '@angular/core/testing';

import { UfoSightingsService } from './ufo-sightings.service';

describe('UfoSightingsService', () => {
  let service: UfoSightingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfoSightingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
