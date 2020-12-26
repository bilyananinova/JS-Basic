function toyShop(arg, arg1, arg2, arg3, arg4, arg5) {
    let jurneyPrice = Number(arg);
    let puzzels = Number(arg1);
    let dolls = Number(arg2);
    let teddyBears = Number(arg3);
    let minions = Number(arg4);
    let trucks = Number(arg5);

    let price = puzzels * 2.6 + dolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2;
    let toys = puzzels + dolls + teddyBears + minions + trucks;

    if(toys >= 50) {
        price = price * 0.75;
    }

    price = price * 0.90;

    if (price >= jurneyPrice) {
        console.log(`Yes! ${(price - jurneyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(price - jurneyPrice).toFixed(2)} lv needed.`);
    }
}

toyShop("320", "8", "2", "5", "5", "1");