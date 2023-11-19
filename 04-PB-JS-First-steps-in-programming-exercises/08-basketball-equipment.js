function basketballEquipment(input) {
    let yearlyFee = Number(input[0]);

    let trainersPrice = 0.6 * yearlyFee;
    let outfitPrice = 0.8 * trainersPrice;
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalPrice = yearlyFee + trainersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalPrice);

};

basketballEquipment(["550"]);