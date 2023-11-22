import { TestBed } from '@angular/core/testing';

import { FstoreserviceService } from './fstoreservice.service';

describe('FstoreserviceService', () => {
  let service: FstoreserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FstoreserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
