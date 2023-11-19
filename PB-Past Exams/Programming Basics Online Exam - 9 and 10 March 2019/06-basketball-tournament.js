function basketballTournament(input) {
    let command = input[0];
    let index = 1;
    let wins = 0;
    let totalGames = 0;

    while (command !== "End of tournaments") {
        let tourName = command;
        let numGames = Number(input[index]);
        index++;
        let gameNum = 0;

        for (let i = 1; i <= numGames; i++) {
            gameNum++;
            totalGames++;
            let hostScore = Number(input[index]);
            index++;
            let guestScore = Number(input[index]);
            index++;
            let diff = Math.abs(hostScore - guestScore);
            if (hostScore > guestScore) {
                wins++;
                console.log(`Game ${gameNum} of tournament ${tourName}: win with ${diff} points.`);
            }
            else {
                console.log(`Game ${gameNum} of tournament ${tourName}: lost with ${diff} points.`);
            }
        }
        command = input[index];
        index++;
    }

    let percWins = (wins / totalGames) * 100;
    let percLost = 100 - percWins;
    console.log(`${percWins.toFixed(2)}% matches win`);
    console.log(`${percLost.toFixed(2)}% matches lost`);
}

// basketballTournament(["Dunkers", "2",
// "75", "65",
// "56", "73",
// "Fire Girls", "3",
// "67", "34",
// "83", "98",
// "66", "45",
// "End of tournaments"]);

basketballTournament(["Ballers", "3",
"87", "63",
"56", "65",
"75", "64",
"Sharks", "4", 
"64", "76", 
"65", "86", 
"68", "99", 
"45", "78",
"End of tournaments"]);
