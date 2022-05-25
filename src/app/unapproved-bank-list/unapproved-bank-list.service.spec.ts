import { TestBed } from '@angular/core/testing';

import { UnapprovedBankListService } from './unapproved-bank-list.service';

describe('UnapprovedBankListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnapprovedBankListService = TestBed.get(UnapprovedBankListService);
    expect(service).toBeTruthy();
  });
});
