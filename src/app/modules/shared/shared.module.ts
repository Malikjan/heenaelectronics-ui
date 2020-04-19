import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './template/menu/menu.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { RoleComponent } from './template/role/role.component';
import { LoginComponent } from './template/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,

    // Material
    MatNativeDateModule
  ],
  declarations: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RoleComponent,
    GridListComponent,

  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RoleComponent,
    GridListComponent,

    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


    //Prime NG
    TooltipModule,
    CalendarModule,
    ConfirmDialogModule,
    //Material
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }
