function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let moneyWon = puzzlesCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;
    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toysCount >=50) {
        moneyWon *= 0.75;
    };

    moneyWon *= 0.9;
    let difference = Math.abs(moneyWon - tripPrice);

    if (moneyWon >= tripPrice) {
        console.log(`Yes! ${(difference).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(difference).toFixed(2)} lv needed.`);
    };
};

toyShop(["320", "8", "2", "5", "5", "1"]);