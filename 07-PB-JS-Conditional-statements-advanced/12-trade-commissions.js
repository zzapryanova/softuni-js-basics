function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    switch (town) {
        case "Sofia":
            if (sales > 10000) {
                commission = sales * 0.12;
            } else if (sales > 1000) {
                commission = sales * 0.08;
            } else if (sales > 500) {
                commission = sales * 0.07;
            } else if (sales >= 0) {
                commission = sales * 0.05;
            } else {
                commission = "error";
            };
            break;
        case "Varna":
            if (sales > 10000) {
                commission = sales * 0.13;
            } else if (sales > 1000) {
                commission = sales * 0.1;
            } else if (sales > 500) {
                commission = sales * 0.075;
            } else if (sales >= 0) {
                commission = sales * 0.045;
            } else {
                commission = "error";
            };
            break;
        case "Plovdiv":
            if (sales > 10000) {
                commission = sales * 0.145;
            } else if (sales > 1000) {
                commission = sales * 0.12;
            } else if (sales > 500) {
                commission = sales * 0.08;
            } else if (sales >= 0) {
                commission = sales * 0.055;
            } else {
                commission = "error";
            };
            break;
        default:
            commission = "error";
            break;
    };
    if (commission!== "error") {
        console.log(commission.toFixed(2));
    } else {
        console.log(commission);
    };
};

tradeCommissions(["Kaspichan", "-50"]);