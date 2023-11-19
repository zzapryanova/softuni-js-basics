function trainTheTrainers(input) {
    let juryNum = Number(input[0]);
    let command = input[1];
    let index = 2;
    let finalScoreSum = 0;

    let taskCntr = 0

    while(command !== "Finish") {
        let scoreSum = 0;
        taskCntr += 1;
        for (let i = index; i < index + juryNum; i++) {
            let currScore = Number(input[i]);
            scoreSum += currScore;
        }
        let currAvgScore = scoreSum / juryNum;
        console.log(`${command} - ${currAvgScore.toFixed(2)}.`);

        finalScoreSum += currAvgScore;

        command = input[index+juryNum];
        index += juryNum + 1;
    }

    let finalAvgScore = finalScoreSum / taskCntr;
    console.log(`Student's final assessment is ${finalAvgScore.toFixed(2)}.`);    
}

// trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
// trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);



