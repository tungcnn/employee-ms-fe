import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';

const apiServiceUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${apiServiceUrl}/employees`);
  }
  public findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${apiServiceUrl}/employees/${id}`);
  }
  public update(id: number, employee: Employee): void {
    this.http.put<void>(`${apiServiceUrl}/employees/${id}`, employee);
  }
  public deleteById(id: number): void {
    this.http.delete<void>(`${apiServiceUrl}/employees/${id}`);
  }
  public getPaginated(pageNo: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${apiServiceUrl}/employees/page/${pageNo}`);
  }
}
