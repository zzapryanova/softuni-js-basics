function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let costPerCostum = Number(input[2]);

    let decor = 0.1 * budget;
    let costumeCost = extrasCount * costPerCostum;
    
    if (extrasCount > 150) {
        costumeCost *= 0.9;
    }

    let budgetNeeded = costumeCost + decor;

    if (budgetNeeded <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - budgetNeeded).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(budgetNeeded - budget).toFixed(2)} leva more.`);
    }

};

godzillaVsKong(["15437.62", "186", "57.99"]);