function addBags(input) {
    let bagPriceOver20kg = Number(input[0]);
    let bagWeight = Number(input[1]);
    let daysLeft = Number(input[2]);
    let bagsNum = Number(input[3]);
    let totalPrice = 0;
    let bagPrice = 0;

    if (bagWeight > 20) {
        bagPrice = bagPriceOver20kg;
    } else if (bagWeight >= 10) {
        bagPrice = 0.5 * bagPriceOver20kg;
    } else {
        bagPrice = 0.2 * bagPriceOver20kg
    }
    totalPrice = bagsNum * bagPrice;

    if (daysLeft > 30) {
        totalPrice *= 1.1;
    } else if (daysLeft >= 7) {
        totalPrice *= 1.15;
    } else {
        totalPrice *= 1.4;
    }

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
    
}

// addBags(["30", "18", "15", "2"]);
// addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);
