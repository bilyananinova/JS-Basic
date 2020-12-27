function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let town = arg2;
    let qty = Number(arg3);
    let price = 0;

    if (town == "Sofia") {
        if (product == "coffee") {
            price = qty * 0.50;
        } else if (product == "water") {
            price = qty * 0.80;
        } else if (product == "beer") {
            price = qty * 1.20;
        } else if (product == "sweets") {
            price = qty * 1.45;
        } else if (product == "peanuts") {
            price = qty * 1.60;
        }
    } else if (town == "Plovdiv") {
        if (product == "coffee") {
            price = qty * 0.40;
        } else if (product == "water") {
            price = qty * 0.70;
        } else if (product == "beer") {
            price = qty * 1.15;
        } else if (product == "sweets") {
            price = qty * 1.30;
        } else if (product == "peanuts") {
            price = qty * 1.50;
        }
    } else if (town == "Varna") {
        if (product == "coffee") {
            price = qty * 0.45;
        } else if (product == "water") {
            price = qty * 0.70;
        } else if (product == "beer") {
            price = qty * 1.10;
        } else if (product == "sweets") {
            price = qty * 1.35;
        } else if (product == "peanuts") {
            price = qty * 1.55;
        }
    }
    console.log(price.toFixed(2));
}

smallShop("beer", "Sofia", 6)