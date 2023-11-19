function numberPyramid(input) {
    let num = Number(input[0]);
    let cntr = 1;
    let flag = false;

    for (let rows = 1; rows <= num; rows++) {
        let str = ``;
        for (let cols = 1; cols <= rows; cols++) {
            if (cntr > num) {
                flag = true;
                break;
            }
            str += `${cntr} `;
            cntr++;  
        };
        console.log(str);
        if (flag) {
            break;
        }        
    }    
}

numberPyramid(['200']);
