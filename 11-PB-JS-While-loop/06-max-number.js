function maxNumber(input) {
    let index = 0;
    let maxNum = Number(input[0]);
    let currNum = Number(input[0]);

    while (input[index] !== "Stop") {
        
        if (currNum > maxNum) {
            maxNum = currNum;
        }
        index++;
        currNum = Number(input[index]);
           
    }
    console.log(maxNum);
}

maxNumber(["60","20","30","15","45","Stop"]);