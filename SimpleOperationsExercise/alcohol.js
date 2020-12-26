function alcohol(whiskeyPrice, beerL, wineL, rakiaL, whiskeyL) {

    let rakiaPrice = Number(whiskeyPrice) / 2;
    let winePrice = rakiaPrice - (0.4 * rakiaPrice);
    let beerPrice = rakiaPrice - (0.8 * rakiaPrice);

    let whiskeyMoney = Number(whiskeyPrice) * Number(whiskeyL);
    let beerMoney = beerPrice * Number(beerL);
    let wineMoney = winePrice * Number(wineL);
    let rakiaMoney = rakiaPrice * Number(rakiaL);

    let totalMoney = whiskeyMoney + beerMoney + wineMoney + rakiaMoney;

    console.log (totalMoney.toFixed(2));
}

alcohol(
    '50', 
    '10', 
    '3.5', 
    '6.5', 
    '1'
);