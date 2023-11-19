function magicCombination(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let flag = false;
    for (let x = start; x < end; x++) {
        for (let y = x+1; y <= end; y++) {
            let sum = x+y;
            counter++;
            if (sum === magicNum) {
                flag = true;
                console.log(`Combination N:${counter} (${x} + ${y} = ${x+y})`);
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        console.log(`Magic number not found`);
    }
}
magicCombination(["1","10","5"]);