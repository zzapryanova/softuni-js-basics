function sumPrimeNonPrime(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;
    let command = input[0];
    index = 1;
    while (command !== 'stop') {
        let currNum = Number(command);
        let isNonPrime = false;
        if (currNum < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
        }
        if (currNum >=2 ){
            for (let i = 2; i < currNum; i++){
                if (currNum % i == 0) {
                    isNonPrime = true;
                    break;
                }
            }
        }
        if (isNonPrime) {
            sumNonPrime+=currNum;
        } else {
            sumPrime+=currNum;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
// sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
