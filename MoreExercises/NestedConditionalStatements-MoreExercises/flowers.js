function flowers(chrysanthemumsCount, rosesCount, tulipsCount, season, holiday) {
    chrysanthemumsCount = Number(chrysanthemumsCount)
    rosesCount = Number(rosesCount);
    tulipsCount = Number(tulipsCount);

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    if (season === 'Spring' || season === 'Summer') {
        chrysanthemumsPrice = 2.0;
        rosesPrice = 4.10;
        tulipsPrice = 2.50;

        if (holiday === 'Y') {
            chrysanthemumsPrice *= 1.15;
            rosesPrice *= 1.15;
            tulipsPrice *= 1.15;
        }
    } else if (season === 'Autumn' || season === 'Winter') {
        chrysanthemumsPrice = 3.75;
        rosesPrice = 4.50;
        tulipsPrice = 4.15;

        if (holiday === 'Y') {
            chrysanthemumsPrice *= 1.15;
            rosesPrice *= 1.15;
            tulipsPrice *= 1.15;
        }
    }

    let price = (chrysanthemumsPrice * chrysanthemumsCount) + (rosesPrice * rosesCount) + (tulipsPrice * tulipsCount);

    if (rosesCount >= 10 && season === 'Winter') {
        price = price * 0.90;
    } else if (tulipsCount >= 7 && season === 'Spring') {
        price = price * 0.95;
    }

    let allFlowers = chrysanthemumsCount + rosesCount + tulipsCount;

    if (allFlowers > 20) {
        price = price * 0.80;
    }

    price = price + 2;

    console.log(price.toFixed(2));
}

flowers('10', '10', '10', 'Autumn', 'N')