function suitcasesLoad(input) {
    let capacity = Number(input[0]);
    let command = input[1];
    let index = 2;
    let caseNum = 0;
    let isOverloaded = false;
    while (command != "End") {
        let currCase = Number(command);
        if ((caseNum+1) % 3 == 0) {
            currCase *= 1.1;
        }
        if (currCase < capacity) {
            capacity -= currCase;
            caseNum++;
        } else {
            console.log("No more space!");
            isOverloaded = true;
            break;
        }
        command = input[index];
        index++
    }

    if (!isOverloaded) {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${caseNum} suitcases loaded.`);
    
}

// suitcasesLoad(["550", "100", "252", "72", "End"]);
// suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
