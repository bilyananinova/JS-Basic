function oscarsWeekInCinema(arg) {
    let filmName = arg[0];
    let typeRoom = arg[1];
    let countOfTickets = Number(arg[2]);
    let priceTicket = 0;
    switch (typeRoom) {
        case 'normal':
            if (filmName === 'A Star Is Born') {
                priceTicket = 7.50;
            } else if (filmName === 'Bohemian Rhapsody') {
                priceTicket = 7.35;
            } else if (filmName === 'Green Book') {
                priceTicket = 8.15;
            } else if (filmName === 'The Favourite') {
                priceTicket = 8.75;
            }
            break;
        case 'luxury':
            if (filmName === 'A Star Is Born') {
                priceTicket = 10.50;
            } else if (filmName === 'Bohemian Rhapsody') {
                priceTicket = 9.45;
            } else if (filmName === 'Green Book') {
                priceTicket = 10.25;
            } else if (filmName === 'The Favourite') {
                priceTicket = 11.55;
            }
            break;
        case 'ultra luxury':
            if (filmName === 'A Star Is Born') {
                priceTicket = 13.50;
            } else if (filmName === 'Bohemian Rhapsody') {
                priceTicket = 12.75;
            } else if (filmName === 'Green Book') {
                priceTicket = 13.25;
            } else if (filmName === 'The Favourite') {
                priceTicket = 13.95;
            }
            break;
    }
    let income = countOfTickets * priceTicket; 

    console.log(`${filmName} -> ${income.toFixed(2)} lv.`);
}

oscarsWeekInCinema([ 'The Favourite', 'ultra luxury', '34' ])