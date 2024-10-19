import { 
  preFixedInterestOB,
  preFixedInterestInstallments,
  postFixedInterestCorrectionOB,
  postFixedInterestCorrectionInstallments,
  postFixedInterestOBCorrectionInstallments
} from './index.js';
import { formatDate, formatCurrency } from '../helpers/index.js';

export const calculate = (
    loanAmount,
    interestRate,
    installments,
    concessionDate,
    calculationOption,
    correctionRate,
) => {
  
  const installmentsData = [];
  let calculatedInstallments = [];

  switch (calculationOption) {
    case 'preFixedInterestOB':
        calculatedInstallments = preFixedInterestOB(loanAmount, interestRate, installments);
        break;
    case 'preFixedInterestInstallments':
        calculatedInstallments = preFixedInterestInstallments(loanAmount, interestRate, installments);
        break;
    case 'postFixedInterestCorrectionOB':
        calculatedInstallments = postFixedInterestCorrectionOB(loanAmount, interestRate, installments, correctionRate);
        break;
    case 'postFixedInterestCorrectionInstallments':
        calculatedInstallments = postFixedInterestCorrectionInstallments(loanAmount, interestRate, installments, correctionRate);
        break;
    case 'postFixedInterestOBCorrectionInstallments':
        calculatedInstallments = postFixedInterestOBCorrectionInstallments(loanAmount, interestRate, installments, correctionRate);
        break;
  }

  calculatedInstallments.forEach((calculatedInstallment, installmentIndex) => {
    const amount = calculatedInstallment;
    const paymentDate = new Date(concessionDate);
    paymentDate.setMonth(paymentDate.getMonth() + (installmentIndex + 1));

    const installmentData = {
      installment: installmentIndex + 1,
      paymentDate: formatDate(paymentDate), // Formato YYYY-MM-DD
      amount: formatCurrency(amount),
    };

    installmentsData.push(installmentData);
  });
  
  return installmentsData;
};
