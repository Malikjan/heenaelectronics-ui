import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule, Routes } from '@angular/router';

const analystRouting: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'feedback', component: FeedbackComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(analystRouting)
  ],
  declarations: [DashboardComponent, FeedbackComponent]
})
export class CustomerModule { }
