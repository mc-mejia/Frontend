import { TestBed } from '@angular/core/testing';

import { BeneficiaryStaffService } from './beneficiary-staff.service';

describe('BeneficiaryStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeneficiaryStaffService = TestBed.get(BeneficiaryStaffService);
    expect(service).toBeTruthy();
  });
});
