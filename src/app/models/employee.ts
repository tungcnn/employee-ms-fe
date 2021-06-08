import {JobTitle} from './job-title';

export interface Employee {
  id?: number;
  name?: string;
  email?: string;
  task?: string;
  jobTitle?: JobTitle;
  department?: Employee;
  createdDate?: string;
}
