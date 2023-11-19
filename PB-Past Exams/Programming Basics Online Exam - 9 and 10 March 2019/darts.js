function darts(input) {
    let playerName = input[0];
    let command = input[1];
    let index = 2;

    let score = 301;
    let shotsCount = 0;
    let badShotsCount = 0;

    while(command !== "Retire") {
        let field = command;
        let points = Number(input[index]);
        index++;
        let currPoints = 0;

        switch (field) {
            case "Single":
                currPoints += points;
                break;
            case "Double":
                currPoints += (2 * points);
                break;
            case "Triple":
                currPoints += (3 * points);
                break;
        }
        if (currPoints < score) {
            shotsCount++;
            score -= currPoints;  
        } else if (currPoints === score) {
            shotsCount++;
            console.log(`${playerName} won the leg with ${shotsCount} shots.`);
            break;
        } else {
            command = input[index];
            index++;
            badShotsCount++;
            continue;
        }

        command = input[index];
            index++;
    }

    if (command === "Retire") {
        console.log(`${playerName} retired after ${badShotsCount} unsuccessful shots.`);
    }
    
}

// darts(["Michael van Gerwen",
// "Triple", "20",
// "Triple", "19",
// "Double", "10",
// "Single", "3",
// "Single", "1",
// "Triple", "20",
// "Triple", "20",
// "Double", "20"]);

// darts(["Stephen Bunting",
// "Triple", "20",
// "Triple", "20",
// "Triple", "20",
// "Triple", "20",
// "Triple", "20",
// "Triple", "20",
// "Double", "7",
// "Single", "12",
// "Double", "1",
// "Single", "1"]);

darts(["Rob Cross",
"Triple", "20",
"Triple", "20",
"Triple", "20",
"Triple", "20",
"Double", "20",
"Triple", "20",
"Double", "5",
"Triple", "10",
"Double", "6",
"Retire"]);


