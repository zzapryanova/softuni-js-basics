function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volume = width * length * height;

    let command = input[3];
    let index = 4;
    
    let spaceLeft = volume;

    while (command != "Done") {
        let boxCount = Number(command);
        spaceLeft -= boxCount;
        if (spaceLeft <= 0) {
            console.log(`No more free space! You need ${Math.abs(spaceLeft)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    
    if (command === "Done") {
        console.log(`${spaceLeft} Cubic meters left.`);
    }
    
}

// moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);


