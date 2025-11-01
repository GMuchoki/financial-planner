import express from "express";
import { addTransaction, getTransactions } from "../controllers/transactionController.js";

const router = express.Router();

// POST: Add a transaction (income or expense)
router.post("/", addTransaction);

// GET: Get transactions (optionally filter by user/date/type)
router.get("/", getTransactions);

export default router;