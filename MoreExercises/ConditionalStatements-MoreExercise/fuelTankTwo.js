function fuelTankTwo(arg1, arg2, arg3) {
    let fuelType = arg1;
    let quantity = Number(arg2);
    let clubCard = arg3;

    let price = 0;

    if (fuelType === "Gas" && clubCard === "Yes") {
        price = 0.93 - 0.08;
    } else if (fuelType === "Gas" && clubCard === "No") {
        price = 0.93;
    }

    if (fuelType === "Gasoline" & clubCard === "Yes") {
        price = 2.22 - 0.18;
    } else if (fuelType === "Gasoline" & clubCard === "No") {
        price = 2.22;
    }

    if (fuelType === "Diesel" & clubCard === "Yes") {
        price = 2.33 - 0.12;
    } else if (fuelType === "Diesel" & clubCard === "No") {
            price = 2.33;
    }

    if (quantity > 20 & quantity <= 25) {
        price = price - (price * 0.08);
    } else if (quantity > 25) {
        price = price - (price * 0.10);
    }

    console.log(`${(price * quantity).toFixed(2)} lv.`);
}

fuelTankTwo("Gas", "30", "Yes");