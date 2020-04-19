import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ReportComponent } from './report/report.component';
import { CustomerService } from 'src/app/services/customer/customer.service';

const analystRouting: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'report', component: ReportComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(analystRouting)
  ],
  declarations: [
    DashboardComponent,
    CustomerComponent,
    ReportComponent
  ],
  providers: [
    CustomerService
  ]
})
export class AnalystModule { }
