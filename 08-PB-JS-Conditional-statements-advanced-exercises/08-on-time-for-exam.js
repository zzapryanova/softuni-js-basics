function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    let diffTime = arrivalTime - examTime;

    let diffHour = Math.floor(Math.abs(diffTime) / 60);
    let diffMinute = Math.abs(diffTime) % 60;
    let isDiffMinLessThan10 = diffMinute < 10;

    if (diffTime < -30) {
        console.log("Early");
    } else if (diffTime >= -30 && diffTime <= 0) {
        console.log("On time");
    } else {
        console.log("Late");
    };

    if (diffTime > -60 && diffTime < 0) {
        console.log(`${diffMinute} minutes before the start`);
    } else if (diffTime <= -60) {
        console.log(`${diffHour}:${isDiffMinLessThan10?0:""}${diffMinute} hours before the start`);
    } else if (diffTime > 0 && diffTime < 60) {
        console.log(`${diffMinute} minutes after the start`);
    } else if (diffTime >= 60) {
        console.log(`${diffHour}:${isDiffMinLessThan10?0:""}${diffMinute} hours after the start`);
    };
    
}

// onTimeForExam(["9", "30", "9", "50"]);
// onTimeForExam(["9", "00", "8", "30"]);
// onTimeForExam(["16", "00", "15", "00"]);
// onTimeForExam(["9", "00", "10", "30"]);
// onTimeForExam(["14", "00", "13", "55"]);
// onTimeForExam(["11", "30", "8", "12"]);
// onTimeForExam(["10", "00", "10", "00"]);
// onTimeForExam(["11", "30", "10", "55"]);
onTimeForExam(["11", "30", "11", "39"]);


