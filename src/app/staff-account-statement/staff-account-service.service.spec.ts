import { TestBed } from '@angular/core/testing';

import { StaffAccountServiceService } from './staff-account-service.service';

describe('StaffAccountServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffAccountServiceService = TestBed.get(StaffAccountServiceService);
    expect(service).toBeTruthy();
  });
});
