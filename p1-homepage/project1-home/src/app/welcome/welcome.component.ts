import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  firstName = "Revature";
  lastName = "Associate";
  City = "Some City";
  Address = "Number Address St";
  State = "ST";
  Zip = "00000";

  constructor() { }

  ngOnInit(): void {
  }

}
