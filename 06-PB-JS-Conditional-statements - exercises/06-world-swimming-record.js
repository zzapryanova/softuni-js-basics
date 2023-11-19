function worldSwimmingRecord(input) {
    let worldRecordSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timePerMeterInSecs = Number(input[2]);

    let slowDown = Math.floor(distanceInMeters / 15) * 12.5;
    let ivansResult = distanceInMeters * timePerMeterInSecs + slowDown;
 
    if (ivansResult < worldRecordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(ivansResult).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivansResult - worldRecordSeconds).toFixed(2)} seconds slower.`);
    };
};

worldSwimmingRecord(["55555.67", "3017", "5.03"]);