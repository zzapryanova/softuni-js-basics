function schoolSupplies(input) {
    let penNum = Number(input[0]);
    let markerNum = Number(input[1]);
    let detergenLitres = Number(input[2]);
    let discountPercent = Number(input[3]);

    let totalSum = (penNum * 5.8 + markerNum * 7.2 + detergenLitres * 1.2);
    let sumWithDiscount = totalSum - totalSum*discountPercent/100;

    console.log(sumWithDiscount);
}

schoolSupplies(["4", "2", "5", "13"]);