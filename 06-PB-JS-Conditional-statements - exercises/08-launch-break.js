function launchBreak(input) {
    let seriesName = input[0];
    let epizodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let launchBreak = (1/8) * breakDuration;
    let leisureBreak = (1/4) * breakDuration;

    let timeSpent = launchBreak + leisureBreak + epizodeDuration;

    if (timeSpent <= breakDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(breakDuration - timeSpent)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeSpent - breakDuration)} more minutes.`);
    };
};

launchBreak(["Teen Wolf", "48", "60"]);