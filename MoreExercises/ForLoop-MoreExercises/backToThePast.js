function backToThePast([heritageMoney, year]) {
    heritageMoney = Number(heritageMoney);
    year = Number(year);

    let yearsIvan = 18;
    let neededMoney = 0;

    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            neededMoney += 12000;
        } else {
            neededMoney += 12000 + 50 * yearsIvan;
        }
        yearsIvan++;
    }

    let difference = Math.abs(heritageMoney - neededMoney);

    if (heritageMoney >= neededMoney) {
        console.log(`Yes! He will live a carefree life and will have ${difference.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${difference.toFixed(2)} dollars to survive.`);
    }
}

backToThePast(['100000.15', '1808']) 