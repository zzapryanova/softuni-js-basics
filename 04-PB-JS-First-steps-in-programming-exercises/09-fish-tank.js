function fishTank(input) {
    let tankLength = Number(input[0]);
    let tankWidth = Number(input[1]);
    let tankHeight = Number(input[2]);
    let tankPercentage = Number(input[3]);

    let tankVolumeCm = tankLength * tankWidth * tankHeight;
    let tankVolumeL = tankVolumeCm / 1000;
    let finalVolume = tankVolumeL - tankVolumeL * tankPercentage / 100;
    console.log(finalVolume);

};

fishTank(["105", "77", "89", "18.5"]);