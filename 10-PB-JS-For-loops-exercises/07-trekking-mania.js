function trekkingMania (input) {
    let groupsCount = Number(input[0]);
    let musala = 0;
    let montBlank = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalCount = 0

    for (let count = 1; count < input.length; count++) {
        let currGroupCount = Number(input[count]);
        totalCount += currGroupCount;
        if (currGroupCount <= 5) {
            musala += currGroupCount;
        } else if (currGroupCount <= 12) {
            montBlank += currGroupCount;
        } else if (currGroupCount <= 25) {
            kilimanjaro += currGroupCount;
        } else if (currGroupCount <= 40) {
            k2 += currGroupCount;
        } else {
            everest += currGroupCount;
        }
    };

    musala = musala / totalCount * 100;
    montBlank = montBlank / totalCount * 100;
    kilimanjaro = kilimanjaro / totalCount * 100;
    k2 = k2 / totalCount * 100;
    everest = everest / totalCount * 100;

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${montBlank.toFixed(2)}%`);
    console.log(`${kilimanjaro.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);

}

// trekkingMania (["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania (["5", "25", "41", "31", "250", "6"]);
