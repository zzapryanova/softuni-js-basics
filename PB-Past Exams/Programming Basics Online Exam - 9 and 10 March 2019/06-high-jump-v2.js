function highJump(input) {
    let finalGoal = Number(input[0]);
    let currJumpHeight = Number(input[1]);
    let index = 2;
    let currGoal = finalGoal - 30;
    let jumpCounter = 0;
    let unsuccessfulJumpCounter = 0

    while (index < input.length) {
        unsuccessfulJumpCounter = 0;
        if (currJumpHeight <= currGoal) {
            for (let i = 1; i <= 3; i++) {
                jumpCounter++;
                unsuccessfulJumpCounter++; 
                console.log(`Unsuccessfull jump. Height: ${currJumpHeight}; Goal: ${currGoal}; Jump num: ${jumpCounter}; Unseccfull jump count: ${unsuccessfulJumpCounter}`);
                if (unsuccessfulJumpCounter >= 3) {
                    console.log(`failed ${}`);
                }
            }
        }
        if (currJumpHeight > currGoal) {
            currGoal += 5;
            currJumpHeight = Number(input[index]);
            index++;
            jumpCounter++;
            console.log(`Successfull jump. Height: ${currJumpHeight}; Goal: ${currGoal}; Jump num: ${jumpCounter}`);
        } else {
            for (let i = 1; i <= 3; i++) {
                
            }


        }
    }

}

highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])
