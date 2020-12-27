function honeyWinterReserves(arg) {
    let index = 0;
    let honeyQty = Number(arg[index]);
    index++;
    let beeName = arg[index];
    index++;
    let beeIncomMonthly = arg[index];

    let allBeeIncom = 0;

    while (beeName !== 'Winter has come') {
        for (let month = 1; month <= 6; month++) {
            beeIncomMonthly = Number(arg[index]);
            index++;
            allBeeIncom += beeIncomMonthly;
        }

        if (allBeeIncom < 0) {
            console.log(`${beeName} was banished for gluttony`);
            beeName = arg[index];
            index++;
            continue;
        } else if (allBeeIncom >= honeyQty) {
            break;
        }

        beeName = arg[index];
        index++;
    }

    if (beeName === 'Winter has come') {
        console.log(`Hard Winter! Honey needed ${(honeyQty - allBeeIncom).toFixed(2)}.`)
    } else if (allBeeIncom >= honeyQty) {
        console.log(`Well done! Honey surplus ${(allBeeIncom - honeyQty).toFixed(2)}.`)
    }
}

honeyWinterReserves(
    [
        '1000', 'Maya',
        '-50', '-10',
        '-20.70', '20.40',
        '10.30', '40',
        'Yama', '50',
        '10', '20',
        '30', '100',
        '100', 'Winter has come'
    ])