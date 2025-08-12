# Employee Management System - Fullstack Developer Interview

As a system user, I want to register new employees so that I can maintain employee data. This is a proof of concept that will serve as the foundation for a more comprehensive feature.

## Setup Instructions

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Tasks (90 minutes total)

### Phase 1: Backend (20 minutes)

Complete the POST /employees endpoint in `src/routes/employees.ts`:

- Employee registration with name and email
- Proper data handling and responses

### Phase 2: MobX Store (20 minutes)

Implement the EmployeeStore methods in `src/stores/EmployeeStore.ts`:

- Complete fetchEmployees & createEmployee methods
- Handle different scenarios appropriately

### Phase 3: React Components (35 minutes)

Build the EmployeeForm component in `src/components/EmployeeForm.tsx`:

- Controlled inputs with TypeScript (name, email)
- Form submission with store integration
- Manage application states
- Proper validation and UX

### Phase 4: Enhancement (15 minutes)

After reviewing the POC, stakeholders identified that the current scope is insufficient for real-world usage. Enhance the solution to better meet actual business needs.

- Consider what's missing for a complete employee management workflow
- Review typical patterns users expect when managing records in a system
- Identify gaps that would prevent real-world usage

**Prioritize showing your thought process - partial implementations with clear direction are preferred**
