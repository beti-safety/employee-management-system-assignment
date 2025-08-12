import React from "react";
import { observer } from "mobx-react-lite";
import { employeeStore } from "../stores/EmployeeStore";

export const EmployeeForm = observer(() => {
  // TODO: Implement form with:
  // - Controlled inputs for name and email
  // - Form submission handling

  return (
    <div>
      <h2>Add New Employee</h2>
      <div style={{ marginBottom: "20px" }}>
        <p style={{ color: "#666", fontStyle: "italic" }}>
          Employee Form implementation needed - see TODO comments in code
        </p>
        <p style={{ color: "#666", fontSize: "0.9em" }}>
          Fields required: Name, Email
        </p>
      </div>
    </div>
  );
});
