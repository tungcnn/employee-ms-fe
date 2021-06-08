export interface Department {
  id?: number;
  name?: string;
  objective?: string;
  task?: string;
  hasChild?: boolean;
  parentDepartment?: Department;
  createdDate?: string;
}
