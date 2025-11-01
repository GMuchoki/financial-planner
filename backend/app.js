import express from "express";
import transactionRoutes from "./src/routes/transactionRoutes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/transactions", transactionRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Financial Planner API is running " });
});

export default app;