function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let cakeSquare = width * length;

    let pieces = input[2];
    let index = 3;

    let piecesLeft = cakeSquare;

    while (pieces !== "STOP") {
        let piecesEaten = Number(pieces);
        piecesLeft -= piecesEaten;
        if (piecesLeft <= 0) {
            console.log(`No more cake left! You need ${Math.abs(piecesLeft)} pieces more.`);
            break;
        }

        pieces = input[index];
        index++;
    }

    if (pieces==="STOP") {
        console.log(`${piecesLeft} pieces are left.`);
    }
    
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
// cake(["10", "2", "2", "4", "6", "STOP"]);
// cake(["10", "2", "2", "4", "6", "9", "STOP"]);
