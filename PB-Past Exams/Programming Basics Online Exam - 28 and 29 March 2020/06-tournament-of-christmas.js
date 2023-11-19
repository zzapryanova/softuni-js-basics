function tournamentOfChristmas(input) {
    let daysNum = Number(input[0]);
    let command = input[1];
    let index = 2;
    let totalMoneyWon = 0;
    let totalDaysWins = 0;
    let totalDaysLosses = 0;
    for (let i = 1; i <= daysNum; i++) {
        let dayGameWins = 0;
        let dayGameLosses = 0;
        let daylyMoneyWon = 0;
        while (command != "Finish") {
            let currGame = command;
            let currResult = input[index];
            index++;
            if (currResult === "win") {
                dayGameWins++;
                daylyMoneyWon += 20;
            } else {
                dayGameLosses++;
            }
            command = input[index];
            index++;
        }
        if (dayGameWins > dayGameLosses) {
            totalDaysWins++;
            totalMoneyWon += (1.1 * daylyMoneyWon);
        } else {
            totalDaysLosses++;
            totalMoneyWon += daylyMoneyWon;
        }
        command = input[index];
        index++;
    }
    if (totalDaysWins > totalDaysLosses) {
        totalMoneyWon *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoneyWon.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoneyWon.toFixed(2)}`);
    }
}

// tournamentOfChristmas(["2",
// "volleyball", "win",
// "football", "lose",
// "basketball", "win",
// "Finish",
// "golf", "win",
// "tennis", "win",
// "badminton", "win",
// "Finish"])
tournamentOfChristmas(["3",
"darts", "lose",
"handball", "lose",
"judo", "win",
"Finish",
"snooker", "lose",
"swimming", "lose",
"squash", "lose",
"table tennis", "win",
"Finish",
"volleyball", "win",
"basketball", "win",
"Finish"]);
