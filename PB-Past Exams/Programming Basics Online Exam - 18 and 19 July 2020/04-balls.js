function balls(input) {
    let points = 0;
    let numBalls = Number(input[0]);
    let redCntr = 0;
    let orangeCntr = 0;
    let yellowCntr = 0;
    let whiteCntr = 0;
    let blackCntr = 0;
    let otherCntr = 0

    for (let i = 1; i <= numBalls; i++) {
        let currColor = input[i];
        switch (currColor) {
            case "red":
                points += 5;
                redCntr++;
                break;
            case "orange":
                points += 10;
                orangeCntr++;
                break;
            case "yellow":
                points += 15;
                yellowCntr++;
                break;
            case "white":
                points += 20;
                whiteCntr++;
                break;
            case "black":
                points = Math.floor(points / 2);
                blackCntr++
                break;
            default:
                otherCntr++;
                break;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redCntr}`);
    console.log(`Orange balls: ${orangeCntr}`);
    console.log(`Yellow balls: ${yellowCntr}`);
    console.log(`White balls: ${whiteCntr}`);
    console.log(`Other colors picked: ${otherCntr}`);
    console.log(`Divides from black balls: ${blackCntr}`);
}

// balls(["3",
// "white",
// "black",
// "pink"]);
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
