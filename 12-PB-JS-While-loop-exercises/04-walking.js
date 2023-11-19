function walking(input) {
    let stepCounter = 0;
    let index = 0;
    let currSteps = input[index];
    let currStepsNum = 0;

    while (stepCounter < 10000) {
        if (currSteps === "Going home") {
            currStepsNum = Number(input[index+1]);
            stepCounter += currStepsNum;
            break;
        }
        currStepsNum = Number(currSteps);
        stepCounter += currStepsNum;
        index++;
        currSteps = input[index];
    };

    let diff = Math.abs(stepCounter-10000);

    if (stepCounter >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    }
    else {
        console.log(`${diff} more steps to reach goal.`);
    };    
}

// walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["125",  "250", "4000", "30", "2678", "4682"]);

 


