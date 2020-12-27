function logistics(arg) {
    let cargoCount = Number(arg[0]);

    let withMicrobus = 0;
    let withTruck = 0;
    let withTrain = 0;

    let allCargoTones = 0;
    let sumCargo = 0;
    let averigeCargoPriceForTone = 0;

    for (let cargoTones = 1; cargoTones <= cargoCount; cargoTones++) {
        let tonesForTheDay = Number(arg[cargoTones]);
        allCargoTones += tonesForTheDay;

        if (tonesForTheDay <= 3) {
            withMicrobus += tonesForTheDay
            sumCargo += 200 * tonesForTheDay;
        } else if (tonesForTheDay >= 4 && tonesForTheDay <= 11) {
            withTruck += tonesForTheDay;
            sumCargo += 175 * tonesForTheDay;
        } else {
            withTrain += tonesForTheDay;
            sumCargo += 120 * tonesForTheDay;
        }
    }

    withMicrobus = (withMicrobus / allCargoTones)*100;
    withTruck = (withTruck / allCargoTones)*100;
    withTrain = (withTrain / allCargoTones)*100;

    averigeCargoPriceForTone = sumCargo / allCargoTones;

    console.log(averigeCargoPriceForTone.toFixed(2));
    console.log(`${withMicrobus.toFixed(2)}%`);
    console.log(`${withTruck.toFixed(2)}%`);
    console.log(`${withTrain.toFixed(2)}%`);

}

logistics([
    '5',
    '2',
    '10',
    '20',
    '1',
    '7',
    ])