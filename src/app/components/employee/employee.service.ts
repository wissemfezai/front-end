import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_EMPLOYEE } from 'app/app.constants';

import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

  constructor(private _httpClient: HttpClient) {
  }

  // NOT ARCHIVE

  getEmployeeNotArchive(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(SERVER_API_EMPLOYEE + '/not-archive');
  }

  getEmployeeNotArchiveById(id: number): Observable<Employee> {
    return this._httpClient.get<Employee>(SERVER_API_EMPLOYEE + '/not-archive/' + id);
  }

  // ARCHIVE

  getEmployeeArchive(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(SERVER_API_EMPLOYEE + '/archive');
  }

  getEmployeeArchiveById(id: number): Observable<Employee> {
    return this._httpClient.get<Employee>(SERVER_API_EMPLOYEE + '/archive/' + id);
  }

  // ALL

  getEmployee(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(SERVER_API_EMPLOYEE + '/all');
  }

  getEmployeeAllById(id: number): Observable<Employee> {
    return this._httpClient.get<Employee>(SERVER_API_EMPLOYEE + '/all/' + id);
  }
  // CREATE

  addEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>(SERVER_API_EMPLOYEE, employee);
  }

  //UPDATE

  updateEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.put<Employee>(SERVER_API_EMPLOYEE, employee);
  }

  //DELETE

  archiveEmployee(id: number): Observable<Employee> {
    return this._httpClient.delete<Employee>(SERVER_API_EMPLOYEE + '/archive/' + id);
  }

  recoveryEmployee(id: number): Observable<Employee> {
    return this._httpClient.delete<Employee>(SERVER_API_EMPLOYEE + '/recovery/' + id);
  }

}
