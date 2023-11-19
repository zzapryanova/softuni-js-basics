function fitnessCenter (input) {
    let visitorsCount = Number(input[0]);
    let backCnt = 0;
    let chestCnt = 0;
    let legsCnt = 0;
    let absCnt = 0;
    let shakesCnt = 0;
    let barsCnt = 0;

    for (let i = 1; i < input.length; i++) {
        let currVisitor = input[i];
        switch (currVisitor) {
            case "Back":
                backCnt++;
                break;
            case "Chest":
                chestCnt++;
                break;
            case "Legs":
                legsCnt++;
                break;
            case "Abs":
                absCnt++;
                break;
            case "Protein shake":
                shakesCnt++;
                break;
            case "Protein bar":
                barsCnt++;
                break;
        }
    }

let percentTraining = (backCnt + chestCnt + legsCnt + absCnt) / visitorsCount * 100;
let percentBuyers = (shakesCnt + barsCnt) /visitorsCount * 100;

console.log(`${backCnt} - back`);
console.log(`${chestCnt} - chest`);
console.log(`${legsCnt} - legs`);
console.log(`${absCnt} - abs`);
console.log(`${shakesCnt} - protein shake`);
console.log(`${barsCnt} - protein bar`);
console.log(`${percentTraining.toFixed(2)}% - work out`);
console.log(`${percentBuyers.toFixed(2)}% - protein`);

}

// fitnessCenter(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);
fitnessCenter(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);


