function gameNumberWars(input) {
    let firstPlayer = input[0];
    let secondPlayer = input[1];
    let command = input[2];
    let index = 3;
    let player1Score = 0;
    let player2Score = 0;
    let numWars = false;

    while (command !== "End of game") {
        let player1Card = Number(command);
        let player2Card = Number(input[index]);
        index++;

        if (player1Card > player2Card) {
            player1Score += (player1Card - player2Card)
        } else if (player1Card < player2Card) {
            player2Score += player2Card - player1Card
        } else {
            console.log("Number wars!");
            numWars = true;
            player1Card = Number(input[index]);
            index++;
            player2Card = Number(input[index]);
            if (player1Card > player2Card) {
                console.log(`${firstPlayer} is winner with ${player1Score} points`);
                break;
            } else {
                console.log(`${secondPlayer} is winner with ${player2Score} points`);
                break;
            }
        }
        command = input[index];
        index++;
    }

    if (!numWars) {
        console.log(`${firstPlayer} has ${player1Score} points`);
        console.log(`${secondPlayer} has ${player2Score} points`);
    }
}

// gameNumberWars(["Desi", "Niki", 
// "7", "5", 
// "3", "4", 
// "3", "3",
// "5", "3"]);

// gameNumberWars(["Elena", "Simeon",
// "6", "3",
// "2", "5",
// "8", "9",
// "End of game"]);

gameNumberWars(["Aleks", "Georgi",
"4", "5",
"3", "2",
"4", "3",
"4", "4",
"5", "2"]);
