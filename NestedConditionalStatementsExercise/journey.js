function journey(arg1, arg2) {
    let budged = Number(arg1);
    let season = arg2;

    let destination = '';
    let type = '';
    let price = 0;

    if (budged <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budged * 0.30;
            type = "Camp";
        } else if (season === "winter") {
            price = budged * 0.70;
            type = "Hotel";
        }
    } else if (budged <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budged * 0.40;
            type = "Camp";
        } else if (season === "winter") {
            price = budged * 0.80;
            type = "Hotel";
        }
    } else {
        destination = "Europe"
        price = budged * 0.90;
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);

}

journey("678.53", 'winter')