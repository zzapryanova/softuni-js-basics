function excellentResult(input) {
    let result = Number(input[0]);
    let isExcellent = result >= 5.5;

    if (isExcellent) {
        console.log('Excellent!');
    }
    
};

excellentResult([5.5]);