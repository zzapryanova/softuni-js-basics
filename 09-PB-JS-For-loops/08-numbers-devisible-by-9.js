function devisibleBy9 (input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    sum = 0;

    for (let i = n; i <= m; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);
    for (let i = n; i <= m; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }

}

devisibleBy9 (["100", "200"]);