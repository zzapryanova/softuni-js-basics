function barcodeGenerator(input) {
    let startString = input[0];
    let endString = input[1];
    let start = Number(input[0]);
    let end = Number(input[1]);
    let allBarcodes = '';
    
    for (let i = start; i <= end; i++) {
        let currNumStr = String(i);
        let hasInvalidDigit = false;
        for (let j = 0; j < currNumStr.length; j++) {
            if (currNumStr[j] % 2 === 0 || currNumStr[j] < startString[j] || currNumStr[j] > endString[j]) {
                hasInvalidDigit = true;
                break;
            }
        }
        if (!hasInvalidDigit) {
            allBarcodes += `${currNumStr} `;
        }
    }
    console.log(allBarcodes);
    
}

barcodeGenerator(["2345", "6789"]);


// function barcodeGenerator(input) {
//     let start = Number(input[0]);
//     let end = Number(input[1]);
//     let allBarcodes = '';
    
//     for (let i = start; i <= end; i++) {
//         let currNumStr = String(i);
//         let hasInvalidDigit = false;
//         for (let j = 0; j < currNumStr.length; j++) {
//             if (currNumStr[j] % 2 === 0) {
//                 hasInvalidDigit = true;
//                 break;
//             }
//         }
//         if (!hasInvalidDigit) {
//             allBarcodes += `${currNumStr} `;
//         }
//     }
//     console.log(allBarcodes);
    
// }