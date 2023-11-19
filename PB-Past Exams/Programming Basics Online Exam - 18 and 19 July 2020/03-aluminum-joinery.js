function aluminumJoinery(input) {
    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let price = 0;

    if (count < 10) {
        console.log("Invalid order");
    } else {
        switch (type) {
            case "90X130":
                price = count * 110;
                if (count > 60) {
                    price *= 0.92;
                } else if (count > 30) {
                    price *= 0.95;
                }
                break;
            case "100X150":
                price = count * 140;
                if (count > 80) {
                    price *= 0.9;
                } else if (count > 40) {
                    price *= 0.94;
                }
                break;
            case "130X180":
                price = count * 190;
                if (count > 50) {
                    price *= 0.88;
                } else if (count > 20) {
                    price *= 0.93;
                }
                break;
            case "200X300":
                price = count * 250;
                if (count > 50) {
                    price *= 0.86;
                } else if (count > 25) {
                    price *= 0.91;
                }
                break;
        }
        if (delivery === "With delivery") {
            price += 60;
        }

        if (count > 99) {
            price *= 0.96;
        }
        console.log(`${price.toFixed(2)} BGN`);
    }
    
}

// aluminumJoinery(["40", "90X130", "Without delivery"]);
// aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);

