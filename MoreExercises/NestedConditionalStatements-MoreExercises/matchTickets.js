function matchTickets(budged, category, peopleCount) {

    budged = Number(budged);
    category = category;
    peopleCount = Number(peopleCount);

    let vipPrice = 499.99
    let normalPrice = 249.99

    let transportCost = 0;
    let leftMoney = 0;
    let ticketMoney = 0;

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportCost = budged * 0.75;

    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportCost = budged * 0.60;

    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportCost = budged * 0.50;

    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportCost = budged * 0.40;
    } else {
        transportCost = budged * 0.25;
    }

    leftMoney = budged - transportCost;

    switch (category) {
        case 'Normal':
            ticketMoney = normalPrice * peopleCount;
            break;
        case 'VIP':
            ticketMoney = vipPrice * peopleCount;
            break;
    }

    if (leftMoney >= ticketMoney) {
        console.log(`Yes! You have ${Math.abs(leftMoney - ticketMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(leftMoney - ticketMoney).toFixed(2)} leva.`)
    }
}

matchTickets('1000', 'Normal', '1')