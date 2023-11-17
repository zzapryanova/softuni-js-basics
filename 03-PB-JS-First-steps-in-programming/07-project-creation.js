function projectCreation(input) {
    let name = input[0];
    let projectNum = Number(input[1]);
    let hours = projectNum * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projectNum} project/s.`);
}

projectCreation(["Sanya", 9]);