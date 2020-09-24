import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reimbursement-balance',
  templateUrl: './reimbursement-balance.component.html',
  styleUrls: ['./reimbursement-balance.component.css']
})
export class ReimbursementBalanceComponent implements OnInit {

  balance = 600;

  constructor() { }

  ngOnInit(): void {
  }

}
