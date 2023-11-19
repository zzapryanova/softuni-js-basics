function nums2kPlus1(input) {
    let num = Number(input[0]);
    let index = 1;

    while (index <= num) {
        let currNum = (index * 2) + 1;
        console.log(index);
        index = currNum;
    }
}

// nums2kPlus1(["100"]);

function nums2kPlus1V2(input) {
    let num = Number(input[0]);
    let index = 1;
    
    while (index <= num) {
        console.log(index);
        index = index * 2 + 1
    }
}

nums2kPlus1V2(["40"]);