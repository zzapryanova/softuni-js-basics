function cinemaTickets(input) {
    let command = input[0];
    let index = 1;

    let studentCnt = 0;
    let standardCnt = 0;
    let kidCnt = 0;

    let totalTickets = 0;

    while (command != "Finish") {
        let seatsNum = Number(input[index]);
        let seatsTaken = 0;
        index++;
        let ticketType = input[index];
        while (ticketType != "End" && seatsTaken < seatsNum) {
            seatsTaken++;
            switch (ticketType) {
                case "student":
                    studentCnt++;
                    break;
                case "standard":
                    standardCnt++;
                    break;
                case "kid":
                    kidCnt++;
                    break;
            }
            if (seatsTaken < seatsNum) {
                index++;
                ticketType = input[index];
            }
            
        }
        let percentFilled = seatsTaken / seatsNum * 100;
        totalTickets += seatsTaken;
        console.log(`${command} - ${percentFilled.toFixed(2)}% full.`);

        index++;
        command = input[index];
        index++;
    }

    let studentPercent = studentCnt / totalTickets * 100;
    let standardPercent = standardCnt / totalTickets * 100;
    let skidPercent = kidCnt / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${skidPercent.toFixed(2)}% kids tickets.`);
    
}

// cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End",
// "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);

// cinemaTickets(["The Matrix", "20","End", 
// "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End",
// "Amadeus", "3", "standard", "standard", "standard", "Finish"]);

cinemaTickets(["The Matrix", "20", "standard", "standard", "student", "student", "student", "student", "kid", "kid","End", 
"The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End",
"Amadeus", "3", "standard", "standard", "standard", "Finish"]);

