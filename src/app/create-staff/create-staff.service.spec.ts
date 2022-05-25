import { TestBed } from '@angular/core/testing';

import { CreateStaffService } from './create-staff.service';

describe('CreateStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateStaffService = TestBed.get(CreateStaffService);
    expect(service).toBeTruthy();
  });
});
