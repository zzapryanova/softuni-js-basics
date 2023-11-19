function movieRating(input) {
    let movieNum = Number(input[0]);
    let highestRateMovie = '';
    let highestRate = 0;
    let lowestRateMovie = '';
    let lowestRate = 10;
    let totalRate = 0;

    for (let i = 1; i < input.length; i++) {
        let currMovie = input[i];
        let currRating = Number(input[++i]);
        if (currRating >= highestRate) {
            highestRateMovie = currMovie;
            highestRate = currRating;
        } else if (currRating <= lowestRate) {
            lowestRateMovie = currMovie;
            lowestRate = currRating;
        }
        totalRate += currRating;
    }

    let avgRating = totalRate / movieNum;
    console.log(`${highestRateMovie} is with highest rating: ${highestRate.toFixed(1)}`);
    console.log(`${lowestRateMovie} is with lowest rating: ${lowestRate.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);
    
}

// movieRating(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
movieRating(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);