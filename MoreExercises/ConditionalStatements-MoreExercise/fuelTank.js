function fuelTank(kindFuel, quantity) {

    let fuel = kindFuel.toLowerCase();;
    let litters = Number(quantity);

    if (fuel == "diesel" || fuel == "gasoline" || fuel == "gas") {
        if (litters >= 25) {
            console.log(`You have enough ${fuel}.`);
        } else {
            console.log(`Fill your tank with ${fuel}!`);
        }
    } else {
        console.log(`Invalid fuel!`);
    }
}

fuelTank("Diesel", 10);