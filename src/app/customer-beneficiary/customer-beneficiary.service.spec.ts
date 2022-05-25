import { TestBed } from '@angular/core/testing';

import { CustomerBeneficiaryService } from './customer-beneficiary.service';

describe('CustomerBeneficiaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerBeneficiaryService = TestBed.get(CustomerBeneficiaryService);
    expect(service).toBeTruthy();
  });
});
