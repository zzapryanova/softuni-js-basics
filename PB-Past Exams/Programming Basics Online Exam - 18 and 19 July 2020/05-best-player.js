function bestPlayer(input) {
    let command = input[0];
    let index = 1;
    let bestPlayer = ''
    let bestPlayerScore = 0;
    let headTrick = false;
    let head10 = false
    
    while(command != "END") {
        let currPlayer = command;
        let currGoals = Number(input[index]);
        index++
        if (currGoals > bestPlayerScore) {
            bestPlayer = currPlayer;
            bestPlayerScore = currGoals;
            if (currGoals >= 10) {
                head10 = true;
                headTrick = true;
            } else if (currGoals >= 3) {
                headTrick = true;
            }
        }
        if (head10) {
            break;
        }
        command = input[index];
        index++;
    }
    console.log(`${bestPlayer} is the best player!`);
    if (headTrick) {
        console.log(`He has scored ${bestPlayerScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestPlayerScore} goals.`);
    }
}

// bestPlayer(["Neymar", "2",
// "Ronaldo", "1",
// "Messi", "3",
// "END"]);
// bestPlayer(["Silva", "5",
// "Harry Kane", "10"]);
// bestPlayer(["Rooney", "1",
// "Junior", "2",
// "Paolinio", "2",
// "END"]);
// bestPlayer(["Petrov", "2",
// "Drogba", "11"]);
bestPlayer(["Zidane", "1",
"Felipe", "2",
"Johnson", "4",
"END"]);




