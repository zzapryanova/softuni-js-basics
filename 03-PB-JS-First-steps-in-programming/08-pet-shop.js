function petShop(input) {
    let dogPackages = Number(input[0]);
    let catPackages = Number(input[1]);
    let finalSum = (dogPackages * 2.5) + (catPackages * 4);
    console.log(`${finalSum} lv.`)
}
petShop([5,4]);

