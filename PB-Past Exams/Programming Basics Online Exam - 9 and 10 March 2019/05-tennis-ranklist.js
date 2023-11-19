function tennisRanklist(input) {
    let tournamentNum = Number(input[0]);
    let startPoints = Number(input[1]);

    let winCounter = 0;
    let tournamentPoints = 0;
    
    for (let i = 2; i < input.length; i++) {
        let currTournament = input[i];

        switch (currTournament) {
            case "W":
                tournamentPoints += 2000;
                winCounter += 1;
                break;
            case "F":
                tournamentPoints += 1200;
                break;
            case "SF":
                tournamentPoints += 720;
                break;
        }
    }

    let finalPoints = startPoints + tournamentPoints;
    let avgPoints = Math.floor(tournamentPoints / tournamentNum);
    let percentWons = (winCounter / tournamentNum) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${percentWons.toFixed(2)}%`);
}

// tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);


