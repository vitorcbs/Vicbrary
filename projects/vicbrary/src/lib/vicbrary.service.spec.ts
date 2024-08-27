import { TestBed } from '@angular/core/testing';

import { VicbraryService } from './vicbrary.service';

describe('VicbraryService', () => {
  let service: VicbraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VicbraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
