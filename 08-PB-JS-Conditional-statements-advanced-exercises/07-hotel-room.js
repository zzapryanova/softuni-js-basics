function hotelRoom(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50 * numberOfNights;
            apartmentPrice = 65 * numberOfNights;
            if (numberOfNights > 14) {
                studioPrice *= 0.7;
                apartmentPrice *= 0.9;
            } else if (numberOfNights > 7) {
                studioPrice *= 0.95;
            };
            break;
        case "June":
        case "September":
            studioPrice = 75.2 * numberOfNights;
            apartmentPrice = 68.7 * numberOfNights;
            if (numberOfNights > 14) {
                studioPrice *= 0.8;
                apartmentPrice *= 0.9;
            };
            break;
        case "July":
        case "August":
            studioPrice = 76 * numberOfNights;
            apartmentPrice = 77 * numberOfNights;
            if (numberOfNights > 14) {
                apartmentPrice *= 0.9;
            };
            break;
        default:
            break;
    };

    console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);

}

// hotelRoom(["May", "15"]);

hotelRoom(["June", "14"]);
