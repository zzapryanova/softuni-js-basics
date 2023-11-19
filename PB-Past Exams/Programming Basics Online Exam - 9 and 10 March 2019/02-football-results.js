function footballResults(input) {
    let wons = 0;
    let loss = 0;
    let drawn = 0;

    for (let x = 0; x < input.length; x++) {
        let currResult = input[x];
        if (Number(currResult[0]) > Number(currResult[2])) {
            wons++;
        } else if (Number(currResult[0]) < Number(currResult[2])) {
            loss++;
        } else {
            drawn++;
        }
    }

    console.log(`Team won ${wons} games.`);
    console.log(`Team lost ${loss} games.`);
    console.log(`Drawn games: ${drawn}`);
    
}

footballResults(["3:1","0:2","0:0"]);