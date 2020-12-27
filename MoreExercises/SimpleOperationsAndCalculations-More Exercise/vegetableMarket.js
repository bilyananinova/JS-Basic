function vegetableMarket(pricePerKgVegetables, pricePerKgFruit, vegetablesKgs, fruitKgs) {
    
    let vegetablesProfit = Number(pricePerKgVegetables) * Number(vegetablesKgs);
    let fruitProfit = Number(pricePerKgFruit) * Number(fruitKgs);
    let totalProfit = vegetablesProfit + fruitProfit;
    let profitInEuro = totalProfit / 1.94;

    console.log(profitInEuro.toFixed(2));
}

vegetableMarket("0.194", "19.4", "10", "10")