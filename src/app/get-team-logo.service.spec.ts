import { TestBed } from '@angular/core/testing';

import { GetTeamLogoService } from './get-team-logo.service';

describe('GetTeamLogoService', () => {
  let service: GetTeamLogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTeamLogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
