export const preFixedInterestOB = (loanAmount, interest, numberInstallments) => {
    const betweenEventsExponent = 30/30;
    const amortization = loanAmount / numberInstallments;
    const installments = [];

    for (let installmentIndex = 0; installmentIndex < numberInstallments; installmentIndex++) {
        const balanceDue = loanAmount - (amortization * installmentIndex + 1);
        const installmentInterest = balanceDue * (Math.pow(1 + (interest / 100), betweenEventsExponent) - 1);
        const totalInstallment = amortization + installmentInterest; // Calcula o total da parcela
        installments.push(Math.ceil(totalInstallment)); // Adiciona a parcela ao array
    }

    return installments;
};
