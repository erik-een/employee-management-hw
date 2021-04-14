import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesServiceService } from './employees-service.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeesListComponent
  ],
  providers: [
    EmployeesServiceService
  ],
  imports: [
    CommonModule, SharedModule, ReactiveFormsModule
  ]
})
export class EmployeesModule { }
