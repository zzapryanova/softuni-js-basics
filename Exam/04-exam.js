function exam(input) {
    let studentsCount = Number(input[0]);
    let count5Plus = 0;
    let count4Plus = 0;
    let count3Plus = 0;
    let count2Plus = 0;
    let gradesSum = 0

    for (let i = 1; i < input.length; i++) {
        let currGrade = Number(input[i]);
        if (currGrade >= 5) {
            count5Plus++;
        } else if (currGrade >= 4) {
            count4Plus++
        } else if (currGrade >= 3) {
            count3Plus++;
        } else {
            count2Plus++;
        }
        gradesSum += currGrade;
    }

    let avgGrade = gradesSum / studentsCount;
    let perc5Plus = count5Plus / studentsCount * 100;
    let perc4Plus = count4Plus / studentsCount * 100;
    let perc3Plus = count3Plus / studentsCount * 100;
    let perc2Plus = count2Plus / studentsCount * 100;

    console.log(`Top students: ${perc5Plus.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${perc4Plus.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${perc3Plus.toFixed(2)}%`);
    console.log(`Fail: ${perc2Plus.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}

// exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
exam(["6", "2", "3", "4", "5", "6", "2.2"]);

