function digitSum(input) {
    let digitString = input[0];
    let sum = 0;

    for (let i=0; i<digitString.length; i++) {
        sum += Number(digitString[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
}

digitSum(["564891"]);
