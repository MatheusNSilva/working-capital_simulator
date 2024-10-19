import express from "express";
import calculateInstallments from "../controllers/loanController.js";
import normalizeLoanRequest from "../middlewares/normalizeLoanRequest.js";

const router = express.Router();

// Rota para calcular as parcelas
router.post("/calculate-installments", normalizeLoanRequest, calculateInstallments);

export default router;
