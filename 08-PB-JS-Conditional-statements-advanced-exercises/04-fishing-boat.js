function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let boatRentalPrice = 0;

    switch (season) {
        case "Spring":
            boatRentalPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatRentalPrice = 4200;
            break;
        case "Winter":
            boatRentalPrice = 2600;
            break;
        default:
            break;
    };

    if (fisherman <= 6) {
        boatRentalPrice *= 0.9;
    } else if (fisherman > 6 && fisherman <= 11) {
        boatRentalPrice *= 0.85;
    } else if (fisherman > 11) {
        boatRentalPrice *= 0.75;
    };

    if (fisherman % 2 == 0 && season != "Autumn") {
        boatRentalPrice *= 0.95;
    };

    if (budget >= boatRentalPrice) {
        console.log(`Yes! You have ${(budget - boatRentalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatRentalPrice - budget).toFixed(2)} leva.`);
    };
}

fishingBoat (["2000", "Winter", "13"]);