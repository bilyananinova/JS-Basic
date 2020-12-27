function familyTrip(arg) {
    let index = 0;
    let budget = Number(arg[index]);
    index++;
    let nightsCount = Number(arg[index]);
    index++;
    let nightsPrice = Number(arg[index]);
    index++;
    let extraCostPercentage = Number(arg[index]);
    index++;
    
    if(nightsCount > 7) {
        nightsPrice = nightsPrice * 0.95;
    }
    
    let nightsCost = nightsPrice * nightsCount;
    let extraCost = (budget * extraCostPercentage) / 100;
    let allCost = nightsCost + extraCost;

    if(budget >= allCost) {
        console.log(`Ivanovi will be left with ${(budget - allCost).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(allCost - budget).toFixed(2)} leva needed.`);
    }
}

familyTrip (
    [ '800.50', '8', '100', '2' ]
)