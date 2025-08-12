import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employees";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", employeeRoutes);

app.listen(PORT, () => {
  console.log(`HR System API running on port ${PORT}`);
});
