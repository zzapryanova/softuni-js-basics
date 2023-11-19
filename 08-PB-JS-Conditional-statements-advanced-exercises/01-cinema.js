function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let numberOfSeats = rows * cols;
    let income = 0;

    switch (projectionType) {
        case "Premiere":
            income = numberOfSeats * 12;
            break;
        case "Normal":
            income = numberOfSeats * 7.5;
            break;
        case "Discount":
            income = numberOfSeats * 5;
            break;
        default:
            break;
    };

    console.log(`${income.toFixed(2)} leva`);
};

cinema(["Discount", "12", "30"]);