function bankAccount(input) {
    let total = 0;
    let index = 0;

    while (input[index]!== "NoMoreMoney") {
        let increase = Number(input[index])
        if (increase < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += increase;
        console.log(`Increase: ${increase.toFixed(2)}`);
        index++;

    }
    console.log(`Total: ${total.toFixed(2)}`);
    
}

// bankAccount(["100","350","200","NoMoreMoney"]);
bankAccount(["100","350","200","-100","130","NoMoreMoney"]);


function accountBalance (input) {
    let index = 0;
    let currIncrease = input[index];
    let balance = 0
    
    while (currIncrease != "NoMoreMoney" && currIncrease >= 0) {
        balance += Number(currIncrease);
        console.log(`Increase: ${currIncrease.toFixed(2)}`);
        index++;
        currIncrease = input[index];
    }

    if (currIncrease < 0){
        console.log("Invalid operation!");
        console.log(balance.toFixed(2));
    } else {
        console.log(balance.toFixed(2));
    }

}


accountBalance(["5.51","69.42","100","-100"]);