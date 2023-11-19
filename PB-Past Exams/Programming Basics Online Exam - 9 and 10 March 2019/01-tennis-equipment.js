function tennisEquipment(input) {
    let racketPrice = Number(input[0]);
    let racketNum = Number(input[1]);
    let sneakersNum = Number(input[2]);

    let price = (racketNum * racketPrice) + (sneakersNum * (racketPrice / 6));
    price += 0.2*price;

    let djoko = Math.floor(price / 8);
    let sponsors = Math.ceil(price * 7 / 8);

    console.log(`Price to be paid by Djokovic ${djoko}`);
	console.log(`Price to be paid by sponsors ${sponsors}`);
    
}

tennisEquipment(["850","4","2"]);