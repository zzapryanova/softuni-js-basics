// Ако поръчаните артикули са 25 или повече магазинът прави отстъпка 35% от общата цена. От спечелените пари Михаела трябва да предвиди и 10% разход за хостинг. Да се пресметне дали парите ще й стигнат да си плати моминското парти.
// От конзолата се четат 6 реда:
// 1.	Цена на моминското парти - реално число в интервала [1.00 … 10000.00]
// 2.	Брой любовни послания - цяло число в интервала [0… 1000]
// 3.	Брой восъчни рози - цяло число в интервала [0 … 1000]
// 4.	Брой ключодържатели - цяло число в интервала [0 … 1000]
// 5.	Брой карикатури - цяло число в интервала [0 … 1000]
// 6.	Брой късмети изненада - цяло число в интервала [0 … 1000]

function maidenParty(input) {
    let maidenPartyAmount = Number(input[0]);
    let loveLetters = Number(input[1]);
    let waxRoses = Number(input[2]);
    let keyHolders = Number(input[3]);
    let caricatures = Number(input[4]);
    let luckySurprises = Number(input[5]);

    let totalArticules = loveLetters + waxRoses + keyHolders + caricatures + luckySurprises;
    let articulesPrice = (loveLetters * 0.60) + (waxRoses * 7.20) + (keyHolders * 3.60) + (caricatures * 18.20) + (luckySurprises * 22);

    if (totalArticules >= 25) {
        articulesPrice *= 0.65;
    }

    articulesPrice *= 0.9;

    let diff = Math.abs(maidenPartyAmount - articulesPrice);

    if (articulesPrice >= maidenPartyAmount) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}

// maidenParty(["40.8", "20", "25", "30", "50", "10"]);
maidenParty(["320", "8", "2", "5", "5", "1"]);


