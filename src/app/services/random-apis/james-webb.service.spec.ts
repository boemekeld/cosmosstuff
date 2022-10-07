import { TestBed } from '@angular/core/testing';

import { JamesWebbService } from './james-webb.service';

describe('JamesWebbService', () => {
  let service: JamesWebbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JamesWebbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
