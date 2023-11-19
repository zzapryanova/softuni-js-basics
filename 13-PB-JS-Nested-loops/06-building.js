function roomNumbers(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let floorCntr = floors; floorCntr >= 1; floorCntr--) {
        let printLine = ""
        for (let roomCntr = 0; roomCntr < rooms; roomCntr++) {
            if (floorCntr === floors) {
                printLine += `L${floorCntr}${roomCntr} `;
            } else if (floorCntr % 2 == 0) {
                printLine += `O${floorCntr}${roomCntr} `;
            } else {
                printLine += `A${floorCntr}${roomCntr} `;
            }
        }
        console.log(printLine);
    }
}

roomNumbers(["6","4"]);