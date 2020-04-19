import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { RoleComponent } from './modules/shared/template/role/role.component';
import { LoginComponent } from './modules/shared/template/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AnalystModule } from './modules/analyst/analyst.module';
import { AdminModule } from './modules/admin/admin.module';
import { CustomerModule } from './modules/customer/customer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeenaElectronicsInterceptorService } from './services/interceptor/heena-electronics-interceptor.service';
import { HomeComponent } from './modules/shared/template/home/home.component';

const appRouting: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: '', component: RoleComponent,
    children: [
      { path: 'analyst', loadChildren: () => AnalystModule },
      { path: 'admin', loadChildren: () => AdminModule },
      { path: 'customer', loadChildren: () => CustomerModule }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouting, {
      useHash: true
    }),
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeenaElectronicsInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
