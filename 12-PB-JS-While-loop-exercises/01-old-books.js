function oldBooks(input) {
    let searchedItem = input[0];
    let index = 1;
    let currBook = input[index];
    let found = false;
    
    while(currBook !== "No More Books") {
        if (currBook === searchedItem) {
            console.log(`You checked ${index-1} books and found it.`);
            found = true;
            break;
        }
        index++;
        currBook = input[index];
    }

    if (!found) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index-1} books.`);
    }
    
}

// oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
// oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
