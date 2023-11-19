// Четен ден и нечетен час - 2.50 лева. 
// Нечетен ден и четен час - 1.25 лева.
// всички останали случаи  - 1 лев. 
// Day: {индексът на деня} – {общата сума за деня} leva
// Total: {общата сума за всички дни} leva

function vetParking(input) {
    let daysNum = Number(input[0]);
    let hoursNum = Number(input[1]);
    let totalTax = 0;

    for (let days = 1; days <= daysNum; days++) {
        let dayTax = 0;
    
        for (let hours = 1; hours <= hoursNum; hours++) {
            let hourlyTax = 1;
            if (days % 2 === 0 && hours % 2 !== 0) {
                hourlyTax = 2.5;
            } else if (days % 2 !== 0 && hours % 2 === 0) {
                hourlyTax = 1.25;
            }
            dayTax += hourlyTax;
        }
        totalTax += dayTax;
        console.log(`Day: ${days} - ${dayTax.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalTax.toFixed(2)} leva`);
    
}
// vetParking(["2","5"]);
vetParking(["5","2"]);