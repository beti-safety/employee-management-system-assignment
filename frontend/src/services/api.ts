import axios from "axios";
import { Employee } from "../types/Employee";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const api = {
  async getEmployees(): Promise<Employee[]> {
    const response = await axios.get(`${API_BASE}/employees`);
    return response.data.data;
  },

  async createEmployee(employeeData): Promise<Employee> {
    const response = await axios.post(`${API_BASE}/employees`, employeeData);
    return response.data.data;
  },
};
