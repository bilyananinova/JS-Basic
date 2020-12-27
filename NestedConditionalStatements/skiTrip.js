function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1);
    let typeRoom = arg2;
    let rate = arg3;

    let nights = days - 1;
    let price = 0;

    if (days < 10) {
        switch (typeRoom) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = (nights * 25) * 0.70; break;
            case "president apartment": price = (nights * 35) * 0.90; break;
        }
    } else if (days >= 10 && days <= 15) {
        switch (typeRoom) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = (nights * 25) * 0.65; break;
            case "president apartment": price = (nights * 35) * 0.85; break;
        }
    } else {
        switch (typeRoom) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = (nights * 25) * 0.50; break;
            case "president apartment": price = (nights * 35) * 0.80; break;
        }
    }

    switch (rate) {
        case "positive": price = price + (price * 0.25); break;
        case "negative": price = price - (price * 0.10); break;
    }

    console.log(price.toFixed(2));
}

skiTrip("2",
    "apartment",
    "positive")