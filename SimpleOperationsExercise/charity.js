function charity(days, bakers, cakes, waffles, pancakes) {

    let cakesMoney = Number(cakes) * 45;
    let wafflesMoney = Number(waffles) * 5.80;
    let pancakesMoney = Number(pancakes) * 3.20;
    let moneyPerDay = cakesMoney + wafflesMoney + pancakesMoney;
    let moneyAllDay = moneyPerDay * Number(days);
    let allMoney = moneyAllDay * Number(bakers);
    let charityMoney = allMoney - (1 / 8 * allMoney);

    console.log(charityMoney.toFixed(2));

}

charity(
    '20',
    '8',
    '14',
    '30',
    '16'
);