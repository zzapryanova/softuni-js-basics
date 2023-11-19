function trekkingMania(input) {
    let groupCount = Number(input[0]);
    let totalClimbers = 0;
    let musala = 0;
    let montblanc = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0

    for (let i = 1; i <= groupCount; i++) {
        let currGroupCount = Number(input[i]);
        totalClimbers += currGroupCount;
        if (currGroupCount <= 5) {
            musala+=currGroupCount;
        } else if (currGroupCount <= 12) {
            montblanc+=currGroupCount;
        } else if (currGroupCount <= 25) {
            kilimandjaro+=currGroupCount;
        } else if (currGroupCount <= 40) {
            k2+=currGroupCount;
        } else {
            everest+=currGroupCount;
        }
    }
    let musalaPerc = musala / totalClimbers * 100;
    let montblancPerc = montblanc / totalClimbers * 100;
    let kilimandjaroPerc = kilimandjaro / totalClimbers * 100;
    let k2Perc = k2 / totalClimbers * 100;
    let everestPerc = everest / totalClimbers * 100;

    console.log(`${musalaPerc.toFixed(2)}%`);
    console.log(`${montblancPerc.toFixed(2)}%`);
    console.log(`${kilimandjaroPerc.toFixed(2)}%`);
    console.log(`${k2Perc.toFixed(2)}%`);
    console.log(`${everestPerc.toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
