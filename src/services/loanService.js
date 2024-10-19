import preFixedInterestOB from './preFixedInterestOB.js';

const calculate = (
    loanAmount,
    interestRate,
    installments,
    concessionDate,
    calculationOption,
    correctionRate,
) => {
  // Exemplo de lógica de cálculo básico (substitua por sua lógica)
  let calculatedInstallments = [];
  //  pre-fixado no saldo devedor ou na parcela  
  console.log("chegou no service")
  switch (calculationOption) {
    case 'preFixedInterestOB':
        calculatedInstallments = preFixedInterestOB(loanAmount, interestRate, installments);
        break;
    case 'preFixedInterestInstallments':
        console.log();
        break;
    case 'postFixedInterestCorrectionOB':
        console.log();
        break;
    case 'postFixedInterestCorrectionInstallments':
        console.log();
        break;
    case 'postFixedInterestOBCorrectionInstallments':
        console.log();  
        break;
  }

  calculatedInstallments.forEach((calculatedInstallment, installmentIndex) => {
      const amount = calculatedInstallment;
      const paymentDate = new Date(concessionDate);
      paymentDate.setMonth(paymentDate.getMonth() + (installmentIndex + 1));
  
      calculatedInstallment = {
        installment: installmentIndex + 1,
        paymentDate: paymentDate.toISOString().split("T")[0], // Formato YYYY-MM-DD
        amount: amount.toFixed(2),
      };

  });
  
  return calculatedInstallments;
};

export default calculate;