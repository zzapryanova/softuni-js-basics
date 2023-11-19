function numberInRange(input) {
    let num = Number(input[0]);
    let isInRange = num >= -100 && num <= 100 && num != 0;
    if (isInRange) {
        console.log("Yes");
    } else {
        console.log("No");
    };
};
numberInRange(["0"]);