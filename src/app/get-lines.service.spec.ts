import { TestBed } from '@angular/core/testing';

import { GetLinesService } from './get-lines.service';

describe('GetLinesService', () => {
  let service: GetLinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
