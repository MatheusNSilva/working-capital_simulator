import { calculate } from "../services/index.js";

const calculateInstallments = (req, res) => {
  const {
    loanAmount,
    interestRate,
    installments,
    concessionDate,
    calculationOption,
    correctionRate,
  } = req.body;

  try {
    const calculatedInstallments = calculate(
      loanAmount,
      interestRate,
      installments,
      concessionDate,
      calculationOption,
      correctionRate,
    );
    res.status(200).json({ calculatedInstallments });
  } catch (error) {
    res.status(500).json({ message: "Erro ao calcular as parcelas" });
  }
};

export default calculateInstallments
