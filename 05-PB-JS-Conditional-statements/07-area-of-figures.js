function areaCalc(input) {
    let figureType = String(input[0]);
    let area = 0;

    if (figureType === "square") {
        let side = Number(input[1]);

        area = side * side;
    } else if (figureType === "rectangle") {
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);

        area = side1 * side2;
    } else if (figureType === "circle") {
        let radius = Number(input[1]);
        
        area = Math.PI * radius * radius;
    } else {
        let side = Number(input[1]);
        let height = Number(input[2]);

        area = side * height / 2;
    }

    console.log(area.toFixed(3));
}

areaCalc(["circle", 5.5432]);