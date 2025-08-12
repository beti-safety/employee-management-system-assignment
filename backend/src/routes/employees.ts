import { Router } from "express";
import { employees } from "../data/employees";
import { Employee, ApiResponse } from "../types/Employee";

const router = Router();

router.get("/employees", (req, res) => {
  const response: ApiResponse<Employee[]> = {
    data: employees,
    success: true,
  };
  res.json(response);
});

router.post("/employees", (req, res) => {});

export default router;
