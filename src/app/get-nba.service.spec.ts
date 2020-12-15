import { TestBed } from '@angular/core/testing';

import { GetNbaService } from './get-nba.service';

describe('GetNbaService', () => {
  let service: GetNbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
