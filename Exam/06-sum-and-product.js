function sumAndProduct(input) {
    let n = Number(input[0]);
    let doesNEndIn5 = n % 10 === 5;
    let isNDevisibleBy3NoRemainder = (n % 3 === 0);
    let isCond1Met = false;
    let isCond2Met = false;
    let numToString = '';

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let product = a * b * c * d;
                    if (sum == product && doesNEndIn5) {
                        numToString = `${a}${b}${c}${d}`;
                        isCond1Met = true;
                        console.log(numToString);
                        return;
                    }
                    if (Math.floor(product / sum) === 3 && isNDevisibleBy3NoRemainder) {
                        numToString = `${d}${c}${b}${a}`;
                        isCond2Met = true;
                        console.log(numToString);
                        return;
                    }
                }
            }
        }
    }

    if (!isCond1Met && !isCond2Met) {
        console.log('Nothing found');
    }
    
}

// sumAndProduct(["123"]);
// sumAndProduct(["145"]);  
sumAndProduct(["214"]);