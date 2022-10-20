import { TestBed } from '@angular/core/testing';

import { GlobalStatesServiceService } from './global-states-service.service';

describe('GlobalStatesServiceService', () => {
  let service: GlobalStatesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalStatesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
