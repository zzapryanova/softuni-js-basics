function studentGrade(input) {
    let name = input[0];
    let index = 1;
    let grade = 1;
    let score = 0;
    let excluded = 0;

    while (index < input.length) {
        currGrade = Number(input[index]);
        if (currGrade < 4) {
            excluded++;
            index++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            } else {
                 continue;
            }
        }
        score+=currGrade;
        grade++;
        index++;
    }
    
    if (excluded <= 1) {
        let averageGrade = score / (grade-1);
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
}

// studentGrade(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);
studentGrade(["Mimi","5","6","5","6","5","6","6","2","5"]);

function studentGrade2(input) {
    let name = input[0];
    let index = 1;
    let grade = 1;
    let score = 0;
    let excluded = 0;

    while (index < input.length) {
        currGrade = Number(input[index]);
        if (currGrade >= 4) {
            score+=currGrade;
            grade++;
            index++;
        } else {
            excluded++;
            index++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            } 
        }
        // if (currGrade < 4) {
        //     excluded++;
        //     index++;
        //     if (excluded > 1) {
        //         console.log(`${name} has been excluded at grade ${grade}`);
        //         break;
        //     } else {
        //          continue;
        //     }
        // }
        // score+=currGrade;
        // grade++;
        // index++;
    }
    
    if (excluded <= 1) {
        let averageGrade = score / (grade-1);
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
}
