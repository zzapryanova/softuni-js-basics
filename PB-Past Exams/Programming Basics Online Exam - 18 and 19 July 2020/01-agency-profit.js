function agencyProfit(input) {
    let companyName = input[0];
    let adultsTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultNetPrice = Number(input[3]);
    let serviceFee = Number(input[4]);

    let ticketPrice = (adultsTickets * (adultNetPrice + serviceFee)) + (kidsTickets * (0.3 * adultNetPrice + serviceFee));
    let agencyFinalProfit = 0.2 * ticketPrice;

    console.log(`The profit of your agency from ${companyName} tickets is ${agencyFinalProfit.toFixed(2)} lv.`);
}

// agencyProfit(["WizzAir", "15", "5", "120", "40"]);
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);
