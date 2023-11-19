function vacation(input) {
    let needSum = Number(input[0]);
    let availableSum = Number(input[1]);
    let index = 2;
    let currAction = input[index];
    let currSum = Number(input[index+1]);
    let spendDaysCounter = 0;
    let daysCounter = 0;

    while (availableSum<needSum) {
        daysCounter++;
        switch (currAction) {
            case "spend":
                availableSum -= currSum;
                if (availableSum < 0) {
                    availableSum = 0;
                }
                spendDaysCounter++;
                break;
            case "save":
                availableSum += currSum;
                spendDaysCounter = 0;
                break;
        }
        if (spendDaysCounter>=5) {
            console.log("You can't save the money.");
            console.log(daysCounter);
            break;
        }
        index+=2;
        currAction = input[index];
        currSum = Number(input[index+1]);
    }
    if (availableSum>=needSum) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
    
}

// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
// vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
// vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);

vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "50", "spend", "50", "spend", "50", "spend", "50", "save", "200"]);
