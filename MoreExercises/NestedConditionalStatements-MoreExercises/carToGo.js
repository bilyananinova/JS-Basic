function carToGo(arg1, arg2) {
    let budged = Number(arg1);
    let season = arg2;

    let carClass = '';
    let carType = '';
    let carPrice = 0;

    if (budged <= 100) {
        carClass = "Economy class";

        if (season === 'Summer') {
            carType = 'Cabrio';
            carPrice = budged * 0.35;
        } else if (season === 'Winter') {
            carType = 'Jeep';
            carPrice = budged * 0.65;
        }

    } else if (budged > 100 && budged <= 500) {
        carClass = "Compact class";

        if (season === 'Summer') {
            carType = 'Cabrio';
            carPrice = budged * 0.45;
        } else if (season === 'Winter') {
            carType = 'Jeep';
            carPrice = budged * 0.80;
        }

    } else {
        carClass = "Luxury class";
        carType = 'Jeep';
        carPrice = budged * 0.90;
    }
    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

carToGo('1010', 'Winter')