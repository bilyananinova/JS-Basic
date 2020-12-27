function cleverLily(age, washingMaschinePrice, toySinglePrice) {

    age = Number(age);
    washingMaschinePrice = Number(washingMaschinePrice);
    toySinglePrice = Number(toySinglePrice)

    let toys = 0;
    let toysMoney = 0;
    let giftMoney = 0;
    let savedMoney = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 1) {
            toys++;
        } else {
            savedMoney += (giftMoney + 10) - 1
            giftMoney += 10;
        }

    }

    toysMoney = toys * toySinglePrice;
    savedMoney +=  toysMoney;

    if (savedMoney >= washingMaschinePrice) {
        console.log(`Yes! ${(savedMoney - washingMaschinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMaschinePrice - savedMoney).toFixed(2)}`);
    }

}

cleverLily('10', '170.00', '6')