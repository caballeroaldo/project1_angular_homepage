import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PendingReimbursementComponent } from './pending-reimbursement/pending-reimbursement.component';
import { AwardedReimbursementComponent } from './awarded-reimbursement/awarded-reimbursement.component';
import { ReimbursementBalanceComponent } from './reimbursement-balance/reimbursement-balance.component';
import { ActionRequiredComponent } from './action-required/action-required.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PendingReimbursementComponent,
    AwardedReimbursementComponent,
    ReimbursementBalanceComponent,
    ActionRequiredComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
