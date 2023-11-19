function foodDelivery(input) {
    let chickenMenueNum = Number(input[0]);
    let fishMenueNum = Number(input[1]);
    let veggieMenueNum = Number(input[2]);

    let mainMenueSum = chickenMenueNum  * 10.35 + fishMenueNum * 12.4 + veggieMenueNum * 8.15;
    let totalSum = mainMenueSum + mainMenueSum * 0.2 + 2.5;

    console.log(totalSum);
};

foodDelivery(["9", "2", "6"]);