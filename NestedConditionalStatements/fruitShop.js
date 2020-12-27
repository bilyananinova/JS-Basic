function fruitShop (arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2;
    let qty = Number(arg3);
    let price = 0;
    let error = false;

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": price = qty * 2.50; break;
            case "apple": price = qty * 1.20; break;
            case "orange": price = qty * 0.85; break;
            case "grapefruit": price = qty * 1.45; break;
            case "kiwi": price = qty * 2.70; break;
            case "pineapple": price = qty * 5.50; break;
            case "grapes": price = qty * 3.85; break;
            default: error = true; break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch(fruit) {
            case "banana": price = qty * 2.70; break;
            case "apple": price = qty * 1.25; break;
            case "orange": price = qty * 0.90; break;
            case "grapefruit": price = qty * 1.60; break;
            case "kiwi": price = qty * 3.00; break;
            case "pineapple": price = qty * 5.60; break;
            case "grapes": price = qty * 4.20; break;
            default: error = true; break;
        }
    } else {
        error = true;
    }

    if(!error) {
        console.log(price.toFixed(2))
    } else {
        console.log("error")
    }
}

fruitShop("apple", "Tuesday", "2")
fruitShop("orange", "Sunday", "3")
fruitShop("kiwi", "Monday", "2.5")
fruitShop("grapes", "Saturday", "0.5")
fruitShop("tomato", "Monday", "0.5")