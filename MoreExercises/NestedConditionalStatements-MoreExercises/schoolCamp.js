function schoolCamp(season, groupType, studentsCount, nightsCount) {
    studentsCount = Number(studentsCount);
    nightsCount = Number(nightsCount);

    let sportType = '';
    let pricePerNight = 0;
    let allMoney = 0;

    switch (season) {

        case 'Winter':
            if (groupType === 'girls' || groupType === 'boys') {
                pricePerNight = 9.60;
            } else {
                pricePerNight = 10;
            }

            if (groupType === 'girls') {
                sportType = 'Gymnastics';
            } else if (groupType === 'boys') {
                sportType = 'Judo'
            } else {
                sportType = 'Ski'
            }
            break;
        case 'Spring':
            if (groupType === 'girls' || groupType === 'boys') {
                pricePerNight = 7.20;
            } else {
                pricePerNight = 9.50;
            }

            if (groupType === 'girls') {
                sportType = 'Athletics';
            } else if (groupType === 'boys') {
                sportType = 'Tennis'
            } else {
                sportType = 'Cycling'
            }
            break;
        case 'Summer':
            if (groupType === 'girls' || groupType === 'boys') {
                pricePerNight = 15;
            } else {
                pricePerNight = 20;
            }

            if (groupType === 'girls') {
                sportType = 'Volleyball';
            } else if (groupType === 'boys') {
                sportType = 'Football'
            } else {
                sportType = 'Swimming'
            }
            break;
    }

    allMoney = pricePerNight * nightsCount * studentsCount;

    if (studentsCount >= 50) {
        allMoney = allMoney * 0.50;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        allMoney = allMoney * 0.85;
    } else if (studentsCount >= 10 && studentsCount < 20) {
        allMoney = allMoney * 0.95;
    }

    console.log(`${sportType} ${allMoney.toFixed(2)} lv.`);
}

schoolCamp(
    'Spring', 
    'mixed', 
    '17', 
    '14', 

)