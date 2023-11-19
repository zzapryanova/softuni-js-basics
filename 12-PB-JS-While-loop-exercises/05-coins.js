function coins(input) {
    let change = Number(input[0]);
    let coins = 0
    let stotinki = Math.round(change*100);

    while (stotinki > 0) {
        if (stotinki>=200) {
            coins++;
            stotinki-=200;
        } else if (stotinki>=100) {
            coins++;
            stotinki-=100;
        } else if (stotinki>=50) {
            coins++;
            stotinki-=50;
        } else if (stotinki>=20) {
            coins++;
            stotinki-=20;
        } else if (stotinki>=10) {
            coins++;
            stotinki-=10;
        } else if (stotinki>=5) {
            coins++;
            stotinki-=5;
        } else if (stotinki>=2) {
            coins++;
            stotinki-=2;
        } else if (stotinki>=1) {
            coins++;
            stotinki-=1;
        }
    }
    console.log(coins);
    
}

// coins(["1.23"]);
// coins(["2"]);
// coins(["0.56"]);
coins(["2.73"]);


// function coins2(input) {
//     let change = Number(input[0]);
//     let changeConverted = change*100;
//     let coinArr = [200,100,50,20,10,5,2,1];
//     let cntr = 0;
//     let currCoin=coinArr[0];
//     let index = 1;
//     let command = changeConverted % currCoin;

    
//     while ((changeConverted / currCoin)%10 === 0 ) {
//         if (changeConverted / currCoin < 1) {
//             cntr += (changeConverted / currCoin);
//         }
//         currCoin = coinArr[index];
//         index++;
//     }
//     console.log(cntr);
//     console.log((changeConverted / currCoin));
// }
