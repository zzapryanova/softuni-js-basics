// Млад програмист разполага с определен бюджет и свободно време в даден сезон. Напишете функция, която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
// Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел. Ако е в Европа, независимо от сезона ще почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета: 
// •	При 100лв. или по-малко – някъде в България
// o	Лято – 30% от бюджета
// o	Зима – 70% от бюджета
// •	При 1000лв. или по малко – някъде на Балканите
// o	Лято – 40% от бюджета
// o	Зима – 80% от бюджета
// •	При повече от 1000лв. – някъде из Европа
// o	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.


function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let vacationType = "";
    let spentMoney = 0;

    if (budget > 1000) {
        destination = "Europe";
        spentMoney = budget * 0.9;
    } else if (budget > 100) {
        destination = "Balkans";
        if (season === "summer") {
            spentMoney = budget * 0.4;
        } else {
            spentMoney = budget * 0.8;
        }
    } else {
        destination = "Bulgaria";
        if (season === "summer") {
            spentMoney = budget * 0.3;
        } else {
            spentMoney = budget * 0.7;
        }
    };

    if (destination === "Europe" || season === "winter") {
        vacationType = "Hotel";
    } else {
        vacationType = "Camp"
    };

    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${(spentMoney).toFixed(2)}`);
}

// journey(["50", "summer"]);
// journey(["75", "winter"]);
// journey(["312", "summer"]);
// journey(["678.53", "winter"]);
journey(["1500", "summer"]);

