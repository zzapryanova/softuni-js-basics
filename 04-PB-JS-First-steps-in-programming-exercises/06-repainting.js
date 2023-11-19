function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonSum = (nylon + 2) * 1.5;
    let paintSum = (paint + 0.1 * paint) * 14.50;
    let paintThinnerSum = paintThinner * 5;

    let totalSupplySum = nylonSum + paintSum + paintThinnerSum + 0.4;
    let craftmanPayment = hours * totalSupplySum * 0.3;

    let finalSum = totalSupplySum + craftmanPayment;

    console.log(finalSum);

};

repainting(["5", "10", "10", "1"]);