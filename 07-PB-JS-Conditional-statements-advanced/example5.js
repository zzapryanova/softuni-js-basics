function localStore(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    let pricePerProduct = [[0.5, 0.8, 1.2, 1.45, 1.6],[0.4, 0.7, 1.15, 1.30, 1.50],[0.45, 0.7, 1.10, 1.35, 1.55]];
    let products = ['coffee', 'water', 'beer', 'sweets', 'peanuts'];
    console.log(products.indexOf(product));
    switch (city) {
        case "Sofia":
            price += quantity * pricePerProduct[0][products.indexOf(product)];
        break;
        case "Plovdiv":
            price += quantity * pricePerProduct[1][products.indexOf(product)];
        break;
        case "Varna":
            price += quantity * pricePerProduct[2][products.indexOf(product)];
        break;
    };
    console.log(price.toFixed(2));
};

localStore(["coffee", "Plovdiv", "3"]);