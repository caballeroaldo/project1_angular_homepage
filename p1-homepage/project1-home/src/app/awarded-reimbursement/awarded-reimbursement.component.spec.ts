import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardedReimbursementComponent } from './awarded-reimbursement.component';

describe('AwardedReimbursementComponent', () => {
  let component: AwardedReimbursementComponent;
  let fixture: ComponentFixture<AwardedReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardedReimbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardedReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
