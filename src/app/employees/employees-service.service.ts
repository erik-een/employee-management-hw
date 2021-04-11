import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { EMPLOYEES } from "../shared/mock-employees";
import { Employee } from "../shared/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {
  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }
  constructor() { }
}
