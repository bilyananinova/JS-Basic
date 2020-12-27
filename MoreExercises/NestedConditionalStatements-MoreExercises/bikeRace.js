function bikeRace(juniorsCount, seniorsCount, route) {
    juniorsCount = Number(juniorsCount);
    seniorsCount = Number(seniorsCount);

    let allMoney = 0;
    let allPeople = juniorsCount + seniorsCount;

    if (route === 'trail') {
        allMoney = (5.50 * juniorsCount) + (7 * seniorsCount);

    } else if (route === 'cross-country') {
        allMoney = (8 * juniorsCount) + (9.50 * seniorsCount);
        if(allPeople >= 50) {
            allMoney = allMoney * 0.75;
        }

    } else if (route === 'downhill') {
        allMoney = (12.25 * juniorsCount) + (13.75 * seniorsCount);
    } else if (route === 'road') {
        allMoney = (20 * juniorsCount) + (21.5 * seniorsCount);
    }

    let cost = allMoney * 0.05;

    console.log((allMoney - cost).toFixed(2))
}

bikeRace('3', '40', 'road')