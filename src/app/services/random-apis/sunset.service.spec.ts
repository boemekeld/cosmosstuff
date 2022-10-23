import { TestBed } from '@angular/core/testing';

import { SunsetService } from './sunset.service';

describe('SunsetService', () => {
  let service: SunsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
