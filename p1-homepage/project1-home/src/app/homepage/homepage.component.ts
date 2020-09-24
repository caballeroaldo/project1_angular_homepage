import { Component, OnInit } from '@angular/core';
import { PendingReimbursementComponent } from './pending-reimbursement/pending-reimbursement.component';
import { AwardedReimbursementComponent } from './awarded-reimbursement/awarded-reimbursement.component';
import { ReimbursementBalanceComponent } from './reimbursement-balance/reimbursement-balance.component';
import { ActionRequiredComponent } from './action-required/action-required.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
