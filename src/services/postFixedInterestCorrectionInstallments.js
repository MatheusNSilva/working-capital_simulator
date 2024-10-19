export const postFixedInterestCorrectionInstallments = (loanAmount, interest, numberInstallments, correctionRate) => {
    const betweenEvents = 30;
    const amortization = loanAmount / numberInstallments;
    const installments = [];

    for (let installmentIndex = 0; installmentIndex < numberInstallments; installmentIndex++) {
        const elapsedPeriod = (installmentIndex + 1) * betweenEvents;
        const expoent = elapsedPeriod / betweenEvents;
        // calcula o juros da parcela
        const installmentInterest = amortization * (Math.pow(1 + (interest / 100), expoent) - 1);//
        // calcula a correção da parcela
        const installmentCorrection = (amortization + installmentInterest) * (Math.pow(1 + (correctionRate / 100), expoent) - 1);
        // calcula o valor da parcela
        const totalInstallment = amortization + installmentInterest + installmentCorrection;

        const roundedAmount = Math.ceil(totalInstallment * 100) / 100;

        installments.push(roundedAmount); 
    }

    return installments;
};
