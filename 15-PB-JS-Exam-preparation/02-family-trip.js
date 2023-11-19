function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percAdditionalExpends = Number(input[3]);

    let allNightPrice = nights * pricePerNight;
    if (nights > 7) {
        allNightPrice *= 0.95;
    }
    let additionalExpends = percAdditionalExpends / 100 * budget;

    let moneyNeeded = allNightPrice + additionalExpends;
    if (moneyNeeded > budget) {
        console.log(`${(moneyNeeded - budget).toFixed(2)} leva needed.`);
    } else {
        console.log(`Ivanovi will be left with ${(budget - moneyNeeded).toFixed(2)} leva after vacation.`);
    }
}

// familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);