function traveling (input) {
    let destination = input[0];
    let neededBudget = Number(input[1]);
    let command = input[2];
    let index = 3;
    let savedMoney = 0;

    while (destination !== "End") {
        while (!Number.isNaN(Number(command))) {
            let currAmount = Number(command);
            savedMoney+=currAmount;
            if (savedMoney >= neededBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
            command = input[index];
            index++;
        }
        savedMoney = 0;
        destination = input[index];
        index++;
        neededBudget = Number(input[index]);
        index++;
        command = input[index];
        index++;
    }
}

// traveling(["France", "2000", "300", "299", "200", "400", "190", "258", "360", 
// "Portugal", "1450", "400", "400", "200", "300", "300", 
// "Egypt", "1900", "1000", "280", "300", "500", "End"])

// traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);



function traveling2 (input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let destination = command;
        let neededMoney = Number(input[index]);
        index++;
        let savedMoney = 0;
        while (savedMoney < neededMoney) {
            let currAmount = Number(input[index]);
            savedMoney += currAmount;
            index++;
        }
        
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;            
    }
}

// traveling2(["France", "2000", "300", "299", "200", "400", "190", "258", "360", 
// "Portugal", "1450", "400", "400", "200", "300", "300", 
// "Egypt", "1900", "1000", "280", "300", "500", "End"]);

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])