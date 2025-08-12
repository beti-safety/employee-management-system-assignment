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

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
