import { TestBed } from '@angular/core/testing';

import { GetRankingsService } from './get-rankings.service';

describe('GetRankingsService', () => {
  let service: GetRankingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRankingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
