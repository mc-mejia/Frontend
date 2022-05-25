import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBeneficiaryListComponent } from './customer-beneficiary-list.component';

describe('CustomerBeneficiaryListComponent', () => {
  let component: CustomerBeneficiaryListComponent;
  let fixture: ComponentFixture<CustomerBeneficiaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBeneficiaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBeneficiaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
