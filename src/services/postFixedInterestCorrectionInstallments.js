const postFixedInterestCorrectionInstallments = (loanAmount, interest, numberInstallments, correctionRate) => {
    // calculo está com problema
    const betweenEvents = 30;
    const amortization = loanAmount / numberInstallments;
    const installments = [];

    for (let installmentIndex = 0; installmentIndex < numberInstallments; installmentIndex++) {
        const elapsedPeriod = (installmentIndex + 1) * betweenEvents;
        const installmentInterest = amortization * (Math.pow(1 + (interest / 100), betweenEvents / betweenEvents) - 1);//
        const installmentCorrection = (amortization + installmentInterest) * (Math.pow(1 + (correctionRate / 100), elapsedPeriod / betweenEvents) - 1);
        const totalInstallment = amortization + installmentInterest + installmentCorrection;

        const roundedAmount = Math.ceil(totalInstallment * 100) / 100;

        installments.push(roundedAmount); 
    }

    return installments;
};

export default postFixedInterestCorrectionInstallments;