function worldSnookerChampionship(input) {
    let stage = input[0];
    let ticketType = input[1];
    let numberOfTickets = Number(input[2]);
    let tropheyPhoto = input[3];
    
    let ticketPrice = 0;

    switch (stage) {
        case "Quarter final":
            if (ticketType === "Standard") {
                ticketPrice += numberOfTickets * 55.50;
            } else if (ticketType === "Premium") {
                ticketPrice += numberOfTickets * 105.20;
            } else {
                ticketPrice += numberOfTickets * 118.90;
            };
            break;
        case "Semi final":
            if (ticketType === "Standard") {
                ticketPrice += numberOfTickets * 75.88;
            } else if (ticketType === "Premium") {
                ticketPrice += numberOfTickets * 125.22;
            } else {
                ticketPrice += numberOfTickets * 300.40;
            };
            break;
        case "Final":
            if (ticketType === "Standard") {
                ticketPrice += numberOfTickets * 110.10;
            } else if (ticketType === "Premium") {
                ticketPrice += numberOfTickets * 160.66;
            } else {
                ticketPrice += numberOfTickets * 400;
            };
            break;
    }


    if (ticketPrice > 4000) {
        ticketPrice *= 0.75;
    } else if (ticketPrice > 2500) {
        ticketPrice *= 0.9;
        if (tropheyPhoto === "Y") {
            ticketPrice += (40 * numberOfTickets); 
        }
    } else {
        if (tropheyPhoto === "Y") {
            ticketPrice += (40 * numberOfTickets); 
        }
    }


    

    console.log(ticketPrice.toFixed(2));    
}

// worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
// worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);