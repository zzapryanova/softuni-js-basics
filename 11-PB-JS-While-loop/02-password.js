function passwordCheck(input) {
    let username = input[0];
    let password = input[1];
    let entryPass = input[2];
    let index = 3;

    while (entryPass!==password) {
        entryPass = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
    
}

passwordCheck(["Nakov","nakovPass","train","test","Nakovpass","nakovPass","afterPass"]);
