import { TestBed } from '@angular/core/testing';

import { RocketsService } from './rockets.service';

describe('RocketsService', () => {
  let service: RocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
