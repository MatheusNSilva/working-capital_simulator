export const postFixedInterestOBCorrectionInstallments = (loanAmount, interest, numberInstallments, correctionRate) => {
    const betweenEvents = 30;
    const amortization = loanAmount / numberInstallments;
    const installments = [];

    for (let installmentIndex = 0; installmentIndex < numberInstallments; installmentIndex++) {
        // calcula o juros da parcela
        const interestExpoent = betweenEvents / betweenEvents;
        const balanceDue = loanAmount - (amortization * installmentIndex);
        const installmentInterest = balanceDue * (Math.pow(1 + (interest / 100), interestExpoent) - 1);

        // calcula a correção da parcela
        const elapsedPeriod = (installmentIndex + 1) * betweenEvents;
        const correctionExpoent = elapsedPeriod / betweenEvents;
        const installmentCorrection = (amortization + installmentInterest) * (Math.pow(1 + (correctionRate / 100), correctionExpoent) - 1);

        // calcula o valor da parcela
        const installmentInterestFixed = Math.ceil(installmentInterest);
        const totalInstallment = amortization + installmentInterestFixed + installmentCorrection;

        installments.push(totalInstallment); 
    }

    return installments;
};
