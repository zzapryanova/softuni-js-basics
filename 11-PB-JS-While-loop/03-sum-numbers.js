function higherSum(input) {
    let goal = Number(input[0]);
    let sum = Number(input[1]);
    let index = 2;
    while (sum<goal) {
        let currNum = Number(input[index])
        sum+=currNum;
        index++;
    }
    console.log(sum);
       
}

higherSum(["20", "1", "2", "3", "4", "5", "6"]);


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

sumCheck(["100","10","20","30","40","50"]);