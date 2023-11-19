function stringStop (input) {
    let index = 0;

    while (input[index]!=="Stop") {
        console.log(input[index]);
        index++;
    }
}

// stringStop(["Nakov","SoftUni","Sofia","Bulgaria","Stop","AfterStop"]);

function stringStopV2 (input) {
    let index = 0;

    while (true) {
        let str = input[index];
        index ++;
        if (str === "Stop") {
            break;
        }
        console.log(str);
    }
}
stringStopV2(["Nakov","SoftUni","Sofia","Bulgaria","Stop","AfterStop"]);