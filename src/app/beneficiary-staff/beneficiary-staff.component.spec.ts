import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryStaffComponent } from './beneficiary-staff.component';

describe('BeneficiaryStaffComponent', () => {
  let component: BeneficiaryStaffComponent;
  let fixture: ComponentFixture<BeneficiaryStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
