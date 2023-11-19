function careOfPuppy(input) {
    let foodBought = Number(input[0]);
    let command = input[1];
    let index = 2;
    let totalFood = foodBought * 1000;
    let foodEaten = 0;

    while (command !== "Adopted") {
        let currFeed = Number(command);
        foodEaten += currFeed;
        command = input[index];
        index++;
    }
    if (foodEaten <= totalFood) {
        console.log(`Food is enough! Leftovers: ${(totalFood - foodEaten)} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodEaten - totalFood} grams more.`);
    }
}

// careOfPuppy(["4",
// "130",
// "345",
// "400",
// "180",
// "230",
// "120",
// "Adopted"])
// careOfPuppy(["3",
// "1000",
// "1000",
// "1000",
// "Adopted"])
careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
