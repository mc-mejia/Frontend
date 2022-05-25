import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAccountStatementComponent } from './staff-account-statement.component';

describe('StaffAccountStatementComponent', () => {
  let component: StaffAccountStatementComponent;
  let fixture: ComponentFixture<StaffAccountStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffAccountStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAccountStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
