import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { EmployeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[] = [];
  constructor(private employeesServiceService: EmployeesServiceService) { }

  ngOnInit(): void {
    this.loadEmployees();
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
