function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0;
    let moneyCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyCount += (i/2) * 10;
        } else {
            toyCount += 1;
        };        
    };

    moneyCount += (toyCount * toyPrice) - Math.floor(age/2);
    let diff = moneyCount - washingMachinePrice;

    if (diff >= 0) {
        console.log(`Yes! ${(diff).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(diff).toFixed(2)}`);
    };
}

function cleverLily2(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneyCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyCount += (i/2) * 10 - 1;
        } else {
            moneyCount += toyPrice;
        };        
    };

    let diff = Math.abs(moneyCount - washingMachinePrice);

    if (moneyCount >= washingMachinePrice) {
        console.log(`Yes! ${(diff).toFixed(2)}`);
    } else {
        console.log(`No! ${(diff).toFixed(2)}`);
    };
}

// cleverLily(["10", "170.00", "6"]);
cleverLily2(["21", "1570.98", "3"]);

