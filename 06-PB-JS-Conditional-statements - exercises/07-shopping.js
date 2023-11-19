function shopping(input) {
    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramMemoriesCount = Number(input[3]);

    let videoCardsPrice = videoCardsCount * 250;
    let finalPrice = videoCardsPrice + (processorsCount * 0.35 * videoCardsPrice) + (ramMemoriesCount * 0.1 * videoCardsPrice);

    if (videoCardsCount > processorsCount) {
        finalPrice *= 0.85;
    }

    if (finalPrice <= budget) {
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`);
    };

};

shopping(["920.45", "3", "1", "1"]);