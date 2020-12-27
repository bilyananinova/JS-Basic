function truckDriver(season, kmPerMonth) {
    kmPerMonth = Number(kmPerMonth);

    let moneyPerMonth = 0;

    switch (season) {
        case 'Spring':
        case 'Autumn':
            if (kmPerMonth <= 5000) {
                moneyPerMonth = kmPerMonth * 0.75;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                moneyPerMonth = kmPerMonth * 0.95;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                moneyPerMonth = kmPerMonth * 1.45;
            }
            break;
        case 'Summer':
            if (kmPerMonth <= 5000) {
                moneyPerMonth = kmPerMonth * 0.90;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                moneyPerMonth = kmPerMonth * 1.10;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                moneyPerMonth = kmPerMonth * 1.45;
            }
            break;
        case 'Winter':
            if (kmPerMonth <= 5000) {
                moneyPerMonth = kmPerMonth * 1.05;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                moneyPerMonth = kmPerMonth * 1.25;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                moneyPerMonth = kmPerMonth * 1.45;
            }
            break;
    }

    let moneyForSeason = moneyPerMonth * 4;
    let moneyAfterTaxes = moneyForSeason* 0.90;

    console.log(moneyAfterTaxes.toFixed(2))
}

truckDriver("Spring",
    "16942"
    )