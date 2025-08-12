import { makeAutoObservable } from "mobx";
import { Employee } from "../types/Employee";
import { api } from "../services/api";

export class EmployeeStore {
  employees: Employee[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEmployees() {}

  async createEmployee() {}
}

export const employeeStore = new EmployeeStore();
