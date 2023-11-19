function excursionSale(input) {
    let seaAvailableCount = Number(input[0]);
    let mountainAvailableCount = Number(input[1]);
    let command = input[2];
    let index = 3;
    let amount = 0;

    while(command != "Stop") {
        if (command === "sea") {
            seaAvailableCount--;
            command = input[index];
            index++;
            if (seaAvailableCount >= 0) {
                amount += 680;
            } else {
                continue;
            }
        } else if (command === "mountain") {
            mountainAvailableCount--;
            command = input[index];
            index++;
            if (mountainAvailableCount >= 0) {
                amount += 499;
            } else {
                continue;
            }
        } else {
            break;
        }
    }

    if (seaAvailableCount <= 0 && mountainAvailableCount <= 0) {
        console.log("Good job! Everything is sold.");
    }
    console.log(`Profit: ${amount} leva.`);
    
}

// excursionSale(["2",
// "2",
// "sea",
// "mountain",
// "sea",
// "sea",
// "mountain"])
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])
