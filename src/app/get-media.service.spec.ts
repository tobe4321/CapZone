import { TestBed } from '@angular/core/testing';

import { GetMediaService } from './get-media.service';

describe('GetMediaService', () => {
  let service: GetMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
