// •	a се мени от 1 до 9
// •	b се мени от 9 до а
// •	c се мени от 0 до 9
// •	d се мени от 9 до c

function sumAndProduct(input) {
    let n = Number(input[0]);

    let doesNEndin5 = (n % 10 === 5);
    console.log("n % 10: " + n % 10);
    console.log("doesNEndin5: " + doesNEndin5);

    let doesNdevidesBy3NoRemainder = (n % 3 === 0);
    console.log("n % 3: " + n % 3);
    console.log("doesNdevidesBy3NoRemainder: " + doesNdevidesBy3NoRemainder);

    // for (let a = 1; a <= 9; a++){
    //     for (let b = 9; b >= a; b--) {
    //         for (let c = 0; c <= 9; c++) {
    //             for (let d = 9; d >= c; d--) {
    //                 let suma = a + b + c + d;
    //                 let prod = a * b * c * d;
    //                 // if (suma === prod && doesNEndin5) {
    //                 //     console.log(`a+b+c+d=${suma}; a*b*c*d=${prod}; doesNEndin5: ${doesNEndin5}`);
    //                 // }
    //                 console.log(`a: ${a}; b: ${b}; c: ${c}; d: ${d}; suma: ${suma}; prod: ${prod}; prod % suma: ${prod % suma}`);
    //                 if (prod % suma === 3 && doesNdevidesBy3NoRemainder) {
    //                     console.log(`a*b*c*d=${prod}; a+b+c+d=${suma}; doesNdevidesBy3NoRemainder: ${doesNdevidesBy3NoRemainder}`);
    //                 }
    //             }
    //         }
    //     }
    // }

    console.log(Math.floor(72 / 19));
}

sumAndProduct(["123"]);

