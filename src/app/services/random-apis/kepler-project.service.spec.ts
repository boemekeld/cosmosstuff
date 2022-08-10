import { TestBed } from '@angular/core/testing';

import { KeplerProjectService } from './kepler-project.service';

describe('KeplerProjectService', () => {
  let service: KeplerProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeplerProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
