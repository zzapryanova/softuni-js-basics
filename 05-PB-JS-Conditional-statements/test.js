function power (input) {
    let x = input[0];
    let y = input[1];

    let result = Math.pow(x,y);
    let result2 = 1;
    for (let index = 0; index < y; index++) {
        result2 = result2 * x;
        
    }

    console.log(result);
    console.log(`Result2: ${result2}`);
}

power([3,3]);

