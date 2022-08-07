import { TestBed } from '@angular/core/testing';

import { MarsRoversService } from './mars-rovers.service';

describe('MarsRoversService', () => {
  let service: MarsRoversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsRoversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
