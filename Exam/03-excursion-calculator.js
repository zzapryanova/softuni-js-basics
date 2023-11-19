function excursionCalculator(input) {
    let groupCount = Number(input[0]);
    let season = input[1];

    let amount = 0;

    switch (season) {
        case "spring":
            if (groupCount <= 5) {
                amount = groupCount * 50.00;
            } else {
                amount= groupCount * 48.00;
            }
            break;
        case "summer":
            if (groupCount <= 5) {
                amount = groupCount * 48.50;
            } else {
                amount= groupCount * 45.00;
            }
            amount *= 0.85;
            break;
        case "autumn":
            if (groupCount <= 5) {
                amount = groupCount * 60.00;
            } else {
                amount= groupCount * 49.50;
            }
            break;
        case "winter":
            if (groupCount <= 5) {
                amount = groupCount * 86.00;
            } else {
                amount= groupCount * 85.00;
            }
            amount *= 1.08;
            break;
    }
    console.log(`${amount.toFixed(2)} leva.`);
    
}

// excursionCalculator(["5", "spring"]);
// excursionCalculator(["10", "summer"]);
// excursionCalculator(["15", "autumn"]);
excursionCalculator(["20", "winter"]);
