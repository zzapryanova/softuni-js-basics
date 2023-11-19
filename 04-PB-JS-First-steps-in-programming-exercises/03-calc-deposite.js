function depositCalc(input) {
    let depositAmount = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearlyInterestRate = Number(input[2]);

    let finalAmout = depositAmount + depositPeriod * ((depositAmount * yearlyInterestRate/100) / 12);

    console.log(finalAmout);
}

depositCalc(["200", "3", "5.7"]);