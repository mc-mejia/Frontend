import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBeneficiaryComponent } from './customer-beneficiary.component';

describe('CustomerBeneficiaryComponent', () => {
  let component: CustomerBeneficiaryComponent;
  let fixture: ComponentFixture<CustomerBeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBeneficiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
