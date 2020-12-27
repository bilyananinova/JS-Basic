function vacation(budged, season) {
    budged = Number(budged);

    let location = ''
    let accommodation = ''
    let price = 0;

    if (budged <= 1000) {
        accommodation = 'Camp';

        if (season === 'Summer') {
            location = 'Alaska';
            price = budged * 0.65;
        } else if (season === 'Winter') {
            location = 'Morocco';
            price = budged * 0.45;
        }

    } else if (budged > 1000 && budged <= 3000) {
        accommodation = 'Hut';

        if (season === 'Summer') {
            location = 'Alaska';
            price = budged * 0.80;
        } else if (season === 'Winter') {
            location = 'Morocco';
            price = budged * 0.60;
        }

    } else {
        accommodation = 'Hotel';

        switch (season) {
            case 'Summer':
                location = 'Alaska';
                break;
            case 'Winter':
                location = 'Morocco';
                break;
        }

        price = budged * 0.90;
    }
    console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);
}

vacation('2543.99', 'Winter')