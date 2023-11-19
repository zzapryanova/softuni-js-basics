function minNumber(input) {
    let minNum = Number(input[0]);
    let currNum = Number(input[0]);
    let index = 0;

    while (input[index] !== "Stop") {
        if (currNum < minNum) {
            minNum = currNum;
        }
        index++;
        currNum = Number(input[index]);
    }

    console.log(minNum);
}

minNumber(["100","99","-10","-20","-30","Stop"]);
