import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementsListComponent } from './agreements/agreements-list/agreements-list.component';
import { EmployeesListComponent } from "./employees/employees-list/employees-list.component";

const routes: Routes = [
  { path: "employees-list", component: EmployeesListComponent },
  { path: "agreements-list", component: AgreementsListComponent },
  { path: "**", redirectTo: "employees-list" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
