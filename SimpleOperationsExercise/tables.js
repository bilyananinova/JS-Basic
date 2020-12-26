function price(tableCount, tableLenght, tableWidth) {

    let coverArea = Number(tableCount) * (Number(tableLenght) + 2 * 0.30) * (Number(tableWidth) + 2 * 0.30);
    let sqrArea = (Number(tableCount) * (Number(tableLenght) / 2) * (Number(tableLenght) / 2));

    let priceUsd = (coverArea * 7) + (sqrArea * 9);
    let priceBgn = priceUsd * 1.85;

    console.log(priceUsd.toFixed(2) + " USD");
    console.log(priceBgn.toFixed(2) + " BGN");
}

price(
    '5',
    '1.00',
    '0.50'
);