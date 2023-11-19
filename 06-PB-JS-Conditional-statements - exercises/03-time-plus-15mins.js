function timePlus15Mins (input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timePlus15m = hours * 60 + minutes + 15;
    let finalHours = Math.floor(timePlus15m / 60);
    let finalMinutes = timePlus15m % 60;

    if (finalHours == 24) {
        finalHours = 0
    };

    if (finalMinutes < 10) {
        console.log(`${finalHours}:0${finalMinutes}`);
    } else {
        console.log(`${finalHours}:${finalMinutes}`);
    };
};

timePlus15Mins(["12", "49"]);