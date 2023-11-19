function countDown(input) {
    let num = Number(input[0]);

    for (let n = num; n >= 1; n--) {
        console.log(n);
    }
};

countDown(["5"]);