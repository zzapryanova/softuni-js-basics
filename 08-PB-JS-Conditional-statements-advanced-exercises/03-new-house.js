function newHouse(input) {
    let flowers = input[0];
    let num = Number(input[1]);
    let budget = Number(input[2]);

    let neededMoney = 0;

    switch (flowers) {
        case "Roses":
            neededMoney = (num * 5);
            if (num > 80) {
                neededMoney *= 0.9;
            }
            break;
        case "Dahlias":
            neededMoney = (num * 3.8);
            if (num > 90) {
                neededMoney *= 0.85;
            }
            break;
        case "Tulips":
            neededMoney = (num * 2.8);
            if (num > 80) {
                neededMoney *= 0.85;
            }
            break;
        case "Narcissus":
            neededMoney = (num * 3);
            if (num < 120) {
                neededMoney *= 1.15;
            }
            break;
        case "Gladiolus":
            neededMoney = (num * 2.5);
            if (num < 80) {
                neededMoney *= 1.2;
            }
            break;
    
        default:
            break;
    };

    if (neededMoney <= budget) {
        console.log(`Hey, you have a great garden with ${num} ${flowers} and ${(budget - neededMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`);
    };
}

newHouse(["Tulips", "88", "260"]);