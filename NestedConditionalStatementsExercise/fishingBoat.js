function fishingBoat(arg1, arg2, arg3) {
    let budged = Number(arg1);
    let season = arg2;
    let fishermanCount = Number(arg3);

    let springBoat = 3000;
    let summerAutumnBoat = 4200;
    let winterBoat = 2600;

    let price = 0;

    switch(season) {
        case "Spring":
            price = price + springBoat;
        break;
        case "Summer":
        case "Autumn":    
            price = price + summerAutumnBoat;
        break;
        case "Winter":
            price = price + winterBoat;
        break;        
    }

    if(fishermanCount <= 6) {
        price *= 0.90;
    } else if (fishermanCount > 7 && fishermanCount <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if(season !== "Autumn" && fishermanCount % 2 === 0) {
        price *= 0.95;
    }

    let diff = Math.abs(budged - price);

    if(budged >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

fishingBoat(
    '2000',
    'Winter',
    '13', 
)