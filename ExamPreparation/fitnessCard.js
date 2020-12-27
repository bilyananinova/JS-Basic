function fitnessCard(arg) {
    let amount = Number(arg[0]);
    let gender = arg[1];
    let years = Number(arg[2]);
    let sport = arg[3];

    let priceCard = 0;
    let result = 0;

    switch (sport) {
        case 'Gym':
            if (gender === 'm') {
                priceCard = 42;
            } else {
                priceCard = 35;
            }
            break;
        case 'Boxing':
            if (gender === 'm') {
                priceCard = 41;
            } else {
                priceCard = 37;
            }
            break;
        case 'Yoga':
            if (gender === 'm') {
                priceCard = 45;
            } else {
                priceCard = 42;
            }
            break;
        case 'Zumba':
            if (gender === 'm') {
                priceCard = 34;
            } else {
                priceCard = 31;
            }
            break;
        case 'Dances':
            if (gender === 'm') {
                priceCard = 51;
            } else {
                priceCard = 53;
            }
            break;
        case 'Pilates':
            if (gender === 'm') {
                priceCard = 39;
            } else {
                priceCard = 37;
            }
            break;
    }

    if(years <= 19) {
        priceCard = priceCard * 0.80;
    }

    if(priceCard < amount) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        console.log(`You don't have enough money! You need $${(priceCard - amount).toFixed(2)} more.`)
    }
}

fitnessCard([ '10', 'm', '50', 'Pilates' ])