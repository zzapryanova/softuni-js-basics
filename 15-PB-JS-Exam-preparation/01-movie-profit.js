function movieProfit(input) {
    let movieTitle = input[0];
    let daysNum = Number(input[1]);
    let ticketNum = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let totalTicketPrice = ticketNum * ticketPrice * daysNum;
    let cinemaProfit = totalTicketPrice * (cinemaPercent / 100);
    let profit = totalTicketPrice - cinemaProfit;

    console.log(`The profit from the movie ${movieTitle} is ${profit.toFixed(2)} lv.`);
}

movieProfit(["Python Basics","40","34785", "10.45", "14"]);
// movieProfit(["The Programmer","20","500", "7.50", "7"]);

