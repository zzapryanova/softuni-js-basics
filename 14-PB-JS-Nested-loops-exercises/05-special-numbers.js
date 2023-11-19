function specialNumbers(input) {
    let num = Number(input[0]);
    let allSpecialNums = ''
    
    for (let currNum = 1111; currNum < 9999; currNum++) {
        let currStr = currNum.toString();
        let cntr = 0;
        for (let i = 0; i < currStr.length; i++) {
            if (num % currStr[i] === 0) {
                cntr += 1;
            }
        }
        if (cntr === currStr.length) {
            allSpecialNums += `${currNum} `;
        }
    }
    console.log(allSpecialNums);
}

// specialNumbers(["3"]);
// specialNumbers(["11"]);
specialNumbers(["16"]);