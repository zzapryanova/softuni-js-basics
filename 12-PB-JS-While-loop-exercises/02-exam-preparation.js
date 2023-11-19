function examPrepare (input) {
    let unsatisfiedNum = input[0];
    let unsatisfiedCounter = 0;
    let index = 1;
    let currTask = input[index];
    let currGrade = Number(input[index+1]);

    let gradeSum = 0;
    let taskCounts = 0;
    let lastTask = input[index+1];

    while (currTask !== "Enough") {
        if (currGrade <= 4) {
            unsatisfiedCounter++;
            if (unsatisfiedCounter>=unsatisfiedNum) {
                console.log(`You need a break, ${unsatisfiedCounter} poor grades.`);
                break;
            }
        }
        gradeSum+=currGrade;
        taskCounts++;
        lastTask = input[index];

        index+=2;
        currTask = input[index];
        currGrade = Number(input[index+1]);
        
    }

    if (unsatisfiedCounter<unsatisfiedNum) {
        let averageScore = gradeSum / taskCounts;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${taskCounts}`);
        console.log(`Last problem: ${lastTask}`);
    }

}

// examPrepare(["3",
// "Money",
// "6",
// "Story",
// "4",
// "Spring Time",
// "5",
// "Bus",
// "6",
// "Enough"]);

examPrepare(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);













// function examPreparation(input) {
//     let maxNum = Number(input[0]);
//     let currTaskName = input[1];
//     let index = 2;
//     let failedTasksCounter = 0;
//     let totalScore = 0;
//     let numberOfTasks = 0;

//     while (currTaskName!== "Enough") {
//         let currScore = Number(input[index]);
//         currTask = input[index-1];
//         if (currScore <= 4) {
//             failedTasksCounter++;
//             if (failedTasksCounter >= maxNum) {
//                 console.log(`You need a break, ${failedTasksCounter} poor grades.`);
//                 break;
//             }
//         }
//         totalScore+=currScore;
//         numberOfTasks++;
//         index+=2;
        
//     }
//     let averageScore = totalScore/numberOfTasks;

//     if (failedTasksCounter <= maxNum) {
//         console.log(`Average score: ${averageScore}`);
//         console.log(`Number of problems: ${numberOfTasks}`);
//         console.log(`Last problem: ${currScore}`);
//     };    
// }

// examPreparation(["3","Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
// examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
