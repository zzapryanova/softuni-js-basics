function highJump(input) {
    let goal = Number(input[0]);
    let currGoal = goal - 30;
    let jumpCounter = 0;
    let failCounter = 0;
    let failFlag = false;

    for (let i = 1; i < input.length; i++) {
        let currJumpHeight = Number(input[i]);
        jumpCounter++;
        if (currJumpHeight > currGoal) {
            currGoal += 5;
        } else {
            failCounter++;
            if (failCounter >= 3) {
                failFlag = true;
                console.log(`Tihomir failed at ${currGoal}cm after ${jumpCounter} jumps."`);
                break;
            }
        }
    }

    if (!failFlag) {
        console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumpCounter} jumps.`);
    }
}

// highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);

// function highJump(input) {
//     let goal = Number(input[0]);
//     let currGoal = goal - 30;
//     let failCounter = 0;
//     let jumpCounter = 0

//     let currJumpHeight = Number(input[1]);
//     let index = 2;

//     while (currJumpHeight < goal) {
//         failCounter = 0;
//         for (let i = 1; i <= 3; i++) {
//             if (currJumpHeight > currGoal) {
//                 jumpCounter++;
//                 currGoal += 5;
//                 currJumpHeight = Number(input[index]);
//                 index++;
//                 break;
//             } else {
//                 jumpCounter++;
//                 currJumpHeight = Number(input[index]);
//                 index++;
//                 failCounter++;
//             }
//         }
//         if (failCounter >=3) {
//             console.log(`Tihomir failed at ${currGoal}cm after ${jumpCounter} jumps.`);
//             break;
//         }
//     }

//     if (failCounter < 3) {
//         console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumpCounter+1} jumps.`);

//     }
// }
