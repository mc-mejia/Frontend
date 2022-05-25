import { TestBed } from '@angular/core/testing';

import { CustomerBankListService } from './customer-bank-list.service';

describe('CustomerBankListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerBankListService = TestBed.get(CustomerBankListService);
    expect(service).toBeTruthy();
  });
});
