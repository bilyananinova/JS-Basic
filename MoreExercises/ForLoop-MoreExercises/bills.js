function bills(arg) {
    let months = Number(arg[0]);

    let electricityBill = 0;
    let waterBill = 0;
    let internetBill = 0;
    let otherBill = 0;
    let average = 0;

    for (let electricity = 1; electricity <= months; electricity++) {
        let bill = Number(arg[electricity])
        electricityBill += bill;
    }

    waterBill = months * 20;
    internetBill = months * 15;
    otherBill = (electricityBill + waterBill + internetBill) * 1.20;

    average = (electricityBill + waterBill + internetBill + otherBill) / months;

    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internetBill.toFixed(2)} lv`);
    console.log(`Other: ${otherBill.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

bills([
    '5',
    '68.63',
    '89.25',
    '132.53',
    '93.53',
    '63.22',

])