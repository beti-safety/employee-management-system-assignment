import React from "react";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeForm } from "./components/EmployeeForm";

function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>HR Employee Management System</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Manage employee records, departments, and organizational information
      </p>
      <EmployeeForm />
      <hr style={{ margin: "30px 0", border: "1px solid #e0e0e0" }} />
      <EmployeeList />
    </div>
  );
}

export default App;
