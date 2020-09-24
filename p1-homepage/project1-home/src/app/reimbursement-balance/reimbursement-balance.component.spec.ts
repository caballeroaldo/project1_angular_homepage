import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementBalanceComponent } from './reimbursement-balance.component';

describe('ReimbursementBalanceComponent', () => {
  let component: ReimbursementBalanceComponent;
  let fixture: ComponentFixture<ReimbursementBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
