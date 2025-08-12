import axios from "axios";
import { Employee, CreateEmployeeRequest } from "../types/Employee";

const API_BASE = "http://localhost:3001/api";

export const api = {
  async getEmployees(): Promise<Employee[]> {
    const response = await axios.get(`${API_BASE}/employees`);
    return response.data.data;
  },

  async createEmployee(employeeData: CreateEmployeeRequest): Promise<Employee> {
    const response = await axios.post(`${API_BASE}/employees`, employeeData);
    return response.data.data;
  },
};
