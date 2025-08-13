export interface Employee {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface CreateEmployeeRequest {
  name: string;
  email: string;
}
