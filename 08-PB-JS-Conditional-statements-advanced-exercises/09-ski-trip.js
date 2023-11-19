// вид помещение	    по-малко от 10 дни	    между 10 и 15 дни	    повече от 15 дни
// room for one person	не ползва намаление	    не ползва намаление	    не ползва намаление
// apartment	        30% от крайната цена	35% от крайната цена	50% от крайната цена
// president apartment	10% от крайната цена	15% от крайната цена	20% от крайната цена

// 	"room for one person" – 18.00 лв за нощувка
// 	"apartment" – 25.00 лв за нощувка 
// 	"president apartment" – 35.00 лв за нощувка



function skiTrip(input) {
    let daysToStay = Number(input[0]);
    let accomodationType = input[1];
    let rating = input[2];

    let price = 0;
    let nights = daysToStay - 1;

    switch (accomodationType) {
        case "room for one person":
            price = nights * 18;
            break;
        case "apartment":
            price = nights * 25;
            if (daysToStay < 10) {
                price *= 0.7;
            } else if (daysToStay >= 10 && daysToStay <= 15) {
                price *= 0.65;
            } else {
                price *= 0.5;
            };
            break;
        case "president apartment":
            price = nights * 35;
            if (daysToStay < 10) {
                price *= 0.9;
            } else if (daysToStay >= 10 && daysToStay <= 15) {
                price *= 0.85;
            } else {
                price *= 0.8;
            };
            break;
        default:
            break;
    };

    if (rating === "positive") {
        price *=1.25;
    } else {
        price *= 0.9;
    };

    console.log(price.toFixed(2));

}

// skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
// skiTrip(["12", "room for one person", "positive"]);
