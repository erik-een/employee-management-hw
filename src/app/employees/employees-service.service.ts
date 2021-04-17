import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { EMPLOYEES } from "../shared/mock-employees";
import { Employee } from "../shared/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {
  addEmployee(employee: Employee): Observable<number> {
    const listOfEmployees: Array<Employee> = EMPLOYEES;
    const id: number =
      listOfEmployees
        .map((employee: Employee) => employee.id)
        .sort()
        .reverse()[0] + 1;

    return of(
      EMPLOYEES.push({

        ...employee,
        id
      })
    );
  }
  deleteEmployee(employeeId: number): Observable<Employee[]> {
    const employeeIndex = EMPLOYEES.findIndex(employee => employee.id === employeeId);
    return of(EMPLOYEES.splice(employeeIndex, 1))
  }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }
  constructor() { }
}
