const normalizeLoanRequest =  (req, res, next) => {
    // Normalização dos dados
    req.body.loanAmount = parseFloat(req.body.loanAmount);
    req.body.interestRate = parseFloat(req.body.interestRate);
    req.body.installments = parseInt(req.body.installments, 10);
    req.body.concessionDate = new Date(req.body.concessionDate);
    req.body.correctionRate = req.body.correctionRate ? parseFloat(req.body.correctionRate) : null;

    next(); // Chama o próximo middleware
}

export default normalizeLoanRequest;