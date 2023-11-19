function touristShop(input) {
    let budget = Number(input[0]);
    let command = input[1];
    let index = 2;
    let hasEnoughMoney = true;
    let itemCounter = 0;
    let moneySpent = 0;

    while (command != "Stop") {
        itemCounter++
        let currPrice = Number(input[index]);
        index++;
        if (itemCounter % 3 === 0) {
            currPrice /= 2;
        }
        budget -= currPrice;
        moneySpent += currPrice;
        
            
        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            break;
        }
        command = input[index];
        index++;    
    }
    if (command === 'Stop') {
        console.log(`You bought ${itemCounter} products for ${moneySpent.toFixed(2)} leva.`);
    }
}

touristShop(["153.20", 
    "Backpack", "25.20", 
    "Shoes", "54", 
    "Sunglasses", "30", 
    "Stop"]);

touristShop(["54", 
    "Thermal underwear", "24", 
    "Sunscreen", "45"]);