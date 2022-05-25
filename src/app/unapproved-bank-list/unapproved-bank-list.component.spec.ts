import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedBankListComponent } from './unapproved-bank-list.component';

describe('UnapprovedBankListComponent', () => {
  let component: UnapprovedBankListComponent;
  let fixture: ComponentFixture<UnapprovedBankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovedBankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
