function vacationBookList(input) {
    let pageNum = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursPerBook = pageNum / pagesPerHour;
    let hoursPerDay = hoursPerBook / days;
    console.log(hoursPerDay);

}

vacationBookList(["212", "20", "2"]);