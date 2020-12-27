function club(arg) {
    let index = 0;
    let profit = Number(arg[index])
    index++;
    let cocktailName = arg[index];
    index++;
    let cocktailCount = Number(arg[index]);
    index++;

    let amount = 0;
    let currentProfit = 0;
    let cocktailPrice = 0;

    while (cocktailName !== 'Party!' && cocktailName !== undefined) {
        cocktailPrice = cocktailName.length;
        amount = cocktailPrice * cocktailCount;

        if (amount % 2 === 1) {
            amount *= 0.75;
        }

        currentProfit += amount;

        cocktailName = arg[index];
        index++;
        cocktailCount = Number(arg[index]);
        index++;
    }

    if(cocktailName === 'Party!') {
        console.log(`We need ${Math.abs(currentProfit - profit).toFixed(2)} leva more.`);
        console.log(`Club income - ${currentProfit.toFixed(2)} leva.`);
    } else if (currentProfit >= profit) {
        console.log("Target acquired.");
        console.log(`Club income - ${currentProfit.toFixed(2)} leva.`);
    }
}

club(
    [ '100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10' ]
)