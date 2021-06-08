import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {JobTitle} from '../models/job-title';

const apiServiceUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<JobTitle[]> {
    return this.http.get<JobTitle[]>(`${apiServiceUrl}/job-titles`);
  }
  public findById(id: number): Observable<JobTitle> {
    return this.http.get<JobTitle>(`${apiServiceUrl}/job-titles/${id}`);
  }
  public update(id: number, jobTitle: JobTitle): void {
    this.http.put<void>(`${apiServiceUrl}/job-titles/${id}`, jobTitle);
  }
  public deleteById(id: number): void {
    this.http.delete<void>(`${apiServiceUrl}/job-titles/${id}`);
  }
  public getPaginated(pageNo: number): Observable<Employee[]> {
    return this.http.get<JobTitle[]>(`${apiServiceUrl}/job-titles/page/${pageNo}`);
  }
}
