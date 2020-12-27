function fishland(mackerelPriceKg, tsatsaPriceKg, chamoisKg, horseMackerelKg, musselsKg) {
    let chamoisPriceKg = Number(mackerelPriceKg) + (mackerelPriceKg * 0.60);
    let horseMackerelPriceKg = Number(tsatsaPriceKg) + (tsatsaPriceKg * 0.80);

    let chamoisTotalMoney = Number(chamoisKg) * chamoisPriceKg;
    let horseMackerelTotalMoney = Number(horseMackerelKg) * horseMackerelPriceKg;
    let musselsTotalMoney = Number(musselsKg) * 7.50;

    let total = chamoisTotalMoney + horseMackerelTotalMoney + musselsTotalMoney;

    console.log(total.toFixed(2));
}

fishland(5.55, 3.57, 4.3, 3.6, 7)