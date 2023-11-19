function sumCheck(input){
    let initialSum = Number(input[0]);
    let index = 1;
    let currNum = Number(input[index]);
    let currSum = 0;

    while (currSum < initialSum) {
        currSum += currNum;
        index++;
        currNum = Number(input[index]);
    }

    console.log(currSum);
}

// sumCheck(["100","10","20","30","40","50"]);

function accountBalance (input) {
    let index = 0;
    let currIncrease = input[index];
    let balance = 0
    
    while (currIncrease != "NoMoreMoney" && currIncrease >= 0) {
        balance += Number(currIncrease);
        console.log(`Increase: ${currIncrease}`);
        index++;
        currIncrease = input[index];
    }

    if (currIncrease < 0){
        console.log("Invalid number");
        console.log(balance);
    } else {
        console.log(balance);
    }

}


// accountBalance(["5.51","69.42","100","-100"]);   

function minNumber(input) {
    input.pop();
    let numArr = input.map(Number);
    console.log(Math.min(...numArr));
}

minNumber(["50","-20","30","Stop"]);
