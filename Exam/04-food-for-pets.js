function foodForPet(input) {
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let dogFood = 0;
    let catFood = 0;
    let day = 0;
    let biscuits = 0;
    for (let i = 2; i < input.length; i++){
        day++;
        currDogFood = Number(input[i]);
        currCatFood = Number(input[++i]);
        dogFood += currDogFood;
        catFood += currCatFood;
        if (day === 3) {
            biscuits = 0.1 * (currDogFood + currCatFood);
        }
    }
    let percEatenFood = (dogFood + catFood) / totalFood * 100;
    let dogPerc = dogFood / totalFood * 100;
    let catPerc = catFood / totalFood * 100;

    console.log(`Total eaten biscuits: ${biscuits}gr.`);
    console.log(`${percEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPerc.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPerc.toFixed(2)}% eaten from the cat.`);
}

foodForPet(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])
