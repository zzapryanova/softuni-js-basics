// Диапазон     Числа в диапазона                                   Брой числа      Процент
// < 200        53, 7, 56, 180, 12, 7, 150, 2, 199, 46, 128, 65     12              p1 = 12 / 20 * 100 = 60.00%
// 200 … 399    250, 200                                            2               p2 = 2 / 20 * 100 = 10.00%
// 400 … 599    450                                                 1               p3 = 1 / 20 * 100 = 5.00%
// 600 … 799    680, 600, 799                                       3               p4 = 3 / 20 * 100 = 15.00%
// ≥ 800        920, 800                                            2               p5 = 2 / 20 * 100 = 10.00%

function histogram(input) {
    let num = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i=1; i<input.length; i++) {
        let currNum = Number(input[i]);
        if (currNum < 200) {
             p1 += 1;
        } else if (currNum <= 399) {
            p2 += 1;
        } else if (currNum <= 599) {
            p3 += 1;
        } else if (currNum <= 799) {
            p4 += 1;
        } else {
            p5 += 1;
        }
    }

    p1 = p1/num * 100;
    p2 = p2/num * 100;
    p3 = p3/num * 100;
    p4 = p4/num * 100;
    p5 = p5/num * 100;

    console.log(`${(p1).toFixed(2)}%`);
    console.log(`${(p2).toFixed(2)}%`);
    console.log(`${(p3).toFixed(2)}%`);
    console.log(`${(p4).toFixed(2)}%`);
    console.log(`${(p5).toFixed(2)}%`);

}

// histogram(["3", "1", "2", "999"]);
// histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
// histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);