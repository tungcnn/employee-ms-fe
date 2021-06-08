import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../models/department';

const apiServiceUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(`${apiServiceUrl}/departments`);
  }
  public findById(id: number): Observable<Department> {
    return this.http.get<Department>(`${apiServiceUrl}/departments/${id}`);
  }
  public update(id: number, department: Department): void {
    this.http.put<void>(`${apiServiceUrl}/departments/${id}`, department);
  }
  public deleteById(id: number): void {
    this.http.delete<void>(`${apiServiceUrl}/departments/${id}`);
  }
  public getPaginated(pageNo: number): Observable<Department[]> {
    return this.http.get<Department[]>(`${apiServiceUrl}/departments/page/${pageNo}`);
  }
}
