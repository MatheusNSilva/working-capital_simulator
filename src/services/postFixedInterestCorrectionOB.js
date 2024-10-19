const postFixedInterestCorrectionOB = (loanAmount, interest, numberInstallments, correctionRate) => {
    const betweenEventsExponent = 30/30;
    const amortization = loanAmount / numberInstallments;
    const installments = [];

    for (let installmentIndex = 0; installmentIndex < numberInstallments; installmentIndex++) {
        const balanceDue = loanAmount - (amortization * installmentIndex + 1);
        const installmentInterest = balanceDue * (Math.pow(1 + (interest / 100), betweenEventsExponent) - 1);
        const installmentCorrection = (balanceDue + installmentInterest) * (Math.pow(1 + (correctionRate / 100), betweenEventsExponent) - 1);
        const totalInstallment = amortization + installmentInterest + installmentCorrection;

        const roundedAmount = Math.ceil(totalInstallment);

        installments.push(roundedAmount); 
    }

    return installments;
};

export default postFixedInterestCorrectionOB;