function gymnastics(input) {
    let country = input[0];
    let apparatus = input[1];

    let finalScore = 0;

    switch (country) {
        case "Russia":
            switch (apparatus) {
                case "ribbon":
                    finalScore = 9.1 + 9.4;
                    break;
                case "hoop":
                    finalScore = 9.3 + 9.8;
                    break;
                case "rope":
                    finalScore = 9.6 + 9.0;
                    break;
            }
            break;
        case "Bulgaria":
            switch (apparatus) {
                case "ribbon":
                    finalScore = 9.6 + 9.4;
                    break;
                case "hoop":
                    finalScore = 9.55 + 9.75;
                    break;
                case "rope":
                    finalScore = 9.5 + 9.4;
                    break;
            }
            break;
        case "Italy":
            switch (apparatus) {
                case "ribbon":
                    finalScore = 9.2 + 9.5;
                    break;
                case "hoop":
                    finalScore = 9.45 + 9.35;
                    break;
                case "rope":
                    finalScore = 9.7 + 9.15;
                    break;
            }
            break;
    }

    let percentNeeded = (20 - finalScore) / 20 * 100;
    console.log(`The team of ${country} get ${finalScore.toFixed(3)} on ${apparatus}.`);
    console.log(`${percentNeeded.toFixed(2)}%`);
    
}

// gymnastics(["Bulgaria", "ribbon"]);
// gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"]);
