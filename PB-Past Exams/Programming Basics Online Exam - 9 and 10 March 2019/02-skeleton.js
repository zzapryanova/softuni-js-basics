function skeleton(input) {
    let quotaMins = Number(input[0]);
    let quotaSecs = Number(input[1]);
    let tubeLength = Number(input[2]);
    let secsPer100m = Number(input[3]);

    let quotaTotalTime = quotaMins * 60 + quotaSecs;
    let slowDown = (tubeLength / 120) * 2.5;
    let marinsTotalTime = (tubeLength / 100) * secsPer100m - slowDown;

    if (marinsTotalTime <= quotaTotalTime) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${(marinsTotalTime).toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(marinsTotalTime - quotaTotalTime).toFixed(3)} second slower.`);
    }
}

// skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);