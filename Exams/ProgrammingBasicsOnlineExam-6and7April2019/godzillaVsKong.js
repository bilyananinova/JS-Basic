function godzillaVsKong(arg) {
    let budget = Number(arg[0]);
    let peopleCount = Number(arg[1]);
    let clothesPrice = Number(arg[2]);

    let decorMoney = budget * 0.10; 

    if(peopleCount > 150) {
        clothesPrice = clothesPrice * 0.90;
    }

    let clothesMoney = peopleCount * clothesPrice;
    let allCosts = decorMoney + clothesMoney;
    let diff= Math.abs(budget - allCosts)

    if(budget >= allCosts) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}

godzillaVsKong([ '20000', '120', '55.5' ])