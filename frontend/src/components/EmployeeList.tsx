import React from "react";
import { observer } from "mobx-react-lite";
import { employeeStore } from "../stores/EmployeeStore";

export const EmployeeList = observer(() => {
  React.useEffect(() => {
    employeeStore.fetchEmployees();
  }, []);

  if (employeeStore.isLoading) return <div>Loading employees...</div>;

  return (
    <div>
      <h2>Employees ({employeeStore.employees.length})</h2>
      {employeeStore.error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          Error: {employeeStore.error}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {employeeStore.employees.map((employee) => (
          <div
            key={employee.id}
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <strong>{employee.name}</strong> - {employee.email}
            <div style={{ fontSize: "0.8em", color: "#666" }}>
              Created: {new Date(employee.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
