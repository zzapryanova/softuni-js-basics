function tennisRanklist(input) {
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);
    let points = 0;
    let winner = 0;
    

    for (let index = 2; index < input.length; index++) {
        let currStage = input[index];
        switch (currStage) {
            case "W":
                points += 2000;
                winner += 1;
                break;
            case "F":
                points += 1200;
                break;
            case "SF":
                points += 720;
                break;
        }
    }

    let finalPoints = points + initialPoints;
    let averagePoints = Math.floor(points / tournamentCount);
    let winPercent = winner / tournamentCount * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercent.toFixed(2)}%`);

}

// tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);


