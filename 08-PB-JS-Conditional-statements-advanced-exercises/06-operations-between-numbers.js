function operationBetweenNums(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let result = 0;

    switch (operator) {
        case "+":
        case "-":
        case "*":
            if (operator === "+") {
                result = num1 + num2;
            } else if (operator === "-") {
                result = num1 - num2;
            } else {
                result = num1 * num2;
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${result%2 == 0 ? "even" : "odd"}`);
            break;
        case "/":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 % num2;
                console.log(`${num1} % ${num2} = ${result}`);
            }
            break;
        default:
            break;
    }
    
}

// operationBetweenNums(["10", "12", "+"]);
// operationBetweenNums(["123", "12", "/"]);
// operationBetweenNums(["112", "0", "/"]);
// operationBetweenNums(["10", "1", "-"]);
// operationBetweenNums(["10", "3", "%"]);
// operationBetweenNums(["10", "0", "%"]);
operationBetweenNums(["7", "3", "*"]);
