function sumSeconds (input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    let sum = num1 + num2 + num3;
    let mins = Math.floor(sum / 60);
    let secs = sum % 60;

    if (secs < 10) {
        console.log(`${mins}:0${secs}`);
    } else {
        console.log(`${mins}:${secs}`);
    }

};

sumSeconds (["50", "50", "49"]);