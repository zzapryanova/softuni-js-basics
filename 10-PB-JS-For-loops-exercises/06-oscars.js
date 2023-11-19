function oscars(input) {
    let actorsName = input[0];
    let actorScore = Number(input[1]);
    let evaluatorsCount = Number(input[2]);

    for (let index = 3; index < input.length-1; index+=2) {
        let currEvaluatorName = input[index];
        let currEvaluatorScore = input[index+1];
        actorScore += currEvaluatorName.length * currEvaluatorScore / 2;
        if (actorScore > 1250.5) {
            break;
        }
    }

    if (actorScore > 1250.5) {
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${actorScore.toFixed(1)}!`);
    } else {
        let neededPoints = 1250.5 - actorScore;
        console.log(`Sorry, ${actorsName} you need ${neededPoints.toFixed(1)} more!`);
    }

}

oscars (["Zahari Baharov", "205", "4",
"Johnny Depp", "45",
"Will Smith", "29",
"Jet Lee", "10",
"Matthew Mcconaughey", "39"]);

oscars(["Sandra Bullock", "340", "5",
"Robert De Niro", "50",
"Julia Roberts", "40.5",
"Daniel Day-Lewis", "39.4",
"Nicolas Cage", "29.9",
"Stoyanka Mutafova", "33"]);