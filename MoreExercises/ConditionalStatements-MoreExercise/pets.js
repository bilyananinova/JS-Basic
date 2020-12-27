function pets(days, foodKg, dogsFoodPerDayKgs, catsFoodPerDayKgs, turrtleFoodPerDayGrs) {
    let dogsFood = days * dogsFoodPerDayKgs;
    let catsFood = days * catsFoodPerDayKgs;
    let turtleFood = (days * turrtleFoodPerDayGrs) / 1000;

    let foodTotal = dogsFood + catsFood + turtleFood;

    if (foodKg > foodTotal) {
        console.log(`${Math.floor(foodKg - foodTotal)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodTotal - foodKg)} more kilos of food are needed.`);
    }
}

pets("5", "10", "2.1", "0.8", "321");