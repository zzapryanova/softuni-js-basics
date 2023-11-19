function sumOf2Nums(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationNum = 0;
    let flag = false;

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            combinationNum ++;
            if (i + j === magicNum) {
                console.log(`Combination N:${combinationNum} (${i} + ${j} = ${magicNum})`);
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    }

    if (!flag) {
        console.log(`${combinationNum} combinations - neither equals ${magicNum}`);
    } 
}

sumOf2Nums(["88", "888", "2000"]);