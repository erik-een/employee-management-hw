import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Employee } from 'src/app/shared/employee';
import { EmployeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[] = [];
  employeeForm: FormGroup = this.createEmployeeForm();

  constructor(private employeesServiceService: EmployeesServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  addEmployee(): void {
    this.employeesServiceService
      .addEmployee(this.employeeForm.value)
      .subscribe(() => {
        this.loadEmployees();
        this.employeeForm.reset()
      })
  }

  private createEmployeeForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      position: ["", Validators.required],
      salary: ["", Validators.required]
    });
  }

  private loadEmployees(): void {
    this.employeesServiceService
      .getEmployees()
      .subscribe((employees: Employee[]) => this.employees = employees);
  }
  workerClass(worker: string): string {
    if (worker.toLowerCase() == 'Production worker'.toLowerCase()) {
      return 'production-worker'
    } else if (worker.toLowerCase() == 'Manager'.toLowerCase()) {
      return 'manager-position'
    }
    return '';
  }
}
