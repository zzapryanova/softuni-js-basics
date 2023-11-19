function greaterNum(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let isGrater = num1 > num2;

    if (isGrater) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

greaterNum([6,6.1]);