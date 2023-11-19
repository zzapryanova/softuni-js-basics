// •	Опаковъчна хартия - 5.80 лв. за ролка
// •	Плат - 7.20 лв. за ролка
// •	Лепило - 1.20 лв. за литър
// Вход:
// От конзолата се четат 4 числа:
// •	Първи ред – брой ролки опаковъчна хартия - цяло число в интервала [0...100]
// •	Втори ред – брой ролки плат - цяло число в интервала [0...100]
// •	Трети ред –  литри лепило - реално число в интервала [0.00…50.00]
// •	Четвърти ред – процент намаление - цяло число в интервала [0...100]


function christmasPreparation(input) {
    let rollCount = Number(input[0]);
    let fabricCount = Number(input[1]);
    let glueLiters = Number(input[2]);
    let percentageDiscount = Number(input[3]);

    let amountWithoutDiscount = (rollCount * 5.80) + (fabricCount * 7.20) + (glueLiters * 1.20);
    let totalAmount = amountWithoutDiscount - (amountWithoutDiscount * percentageDiscount / 100);

    console.log(totalAmount.toFixed(3));
    
}

// christmasPreparation(["2", "3", "2.5", "25"]);
christmasPreparation(["4", "2", "5", "13"]);

