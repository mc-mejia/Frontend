import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerBeneficiaryComponent } from './create-customer-beneficiary.component';

describe('CreateCustomerBeneficiaryComponent', () => {
  let component: CreateCustomerBeneficiaryComponent;
  let fixture: ComponentFixture<CreateCustomerBeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerBeneficiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
