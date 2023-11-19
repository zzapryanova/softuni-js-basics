function equalSumEvenOddPositions(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let str = '';

    for (let x = firstNum; x <= lastNum; x++) {
        let strX = String(x);
        let evenSum = 0;
        let oddSum = 0;
        for (let y = 0; y < strX.length; y++) {
            let position = y+1;
            if (position%2 == 0) {
                evenSum += Number(strX[y])
            } else {
                oddSum += Number(strX[y]);
            }
        }
    
        if (evenSum === oddSum) {
            str += x + ' ';
        }
    }
    console.log(str);
    
}

// equalSumEvenOddPositions(["100115", "100120"]);
// equalSumEvenOddPositions(["299900", "300000"]);
equalSumEvenOddPositions(["123456", "124000"]);
// equalSumEvenOddPositions(["100000", "100050"]);


function equalSumEvenOddPositions2(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let str = '';

    for (let x = firstNum; x <= lastNum; x++) {
        let strX = x.toString();
        let evenSum = Number(strX[0]) + Number(strX[2]) + Number(strX[4]);
        let oddSum = Number(strX[1]) + Number(strX[3]) + Number(strX[5]);
        if (evenSum === oddSum) {
            str += x + ' ';
        }
    }
    console.log(str);
    
}

// equalSumEvenOddPositions(["100115", "100120"]);
