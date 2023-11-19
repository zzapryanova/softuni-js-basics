function basketballEquipment(input) {
    let annualFee = Number(input[0]);

    let sneakers = 0.6 * annualFee;
    let outfit = 0.8 * sneakers;
    let ball = 0.25 * outfit;
    let accessories = 0.2 * ball;
    
    let expences = annualFee + sneakers + outfit + ball + accessories;
    console.log(expences.toFixed(2));
    
}

basketballEquipment(["320"]);