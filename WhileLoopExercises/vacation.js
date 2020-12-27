function vacation(arg) {
    let index = 0;
    let vacationMoney = Number(arg[index]);
    index++;
    let availableMoney = Number(arg[index]);
    index++;

    let action = arg[index];
    index++;
    let amount = Number(arg[index]);
    index++;

    let days = 0;
    let spendDays = 0;

    while ((action !== undefined) && (spendDays <= 5)) {

        
        if (action === 'spend') {
            availableMoney = Math.max((availableMoney - amount), 0);
            spendDays++;
        } else if (action === 'save') {
            availableMoney += amount;
            spendDays = 0;
        }

        days++;

        action = arg[index];
        index++;
        amount = Number(arg[index]);
        index++;

    }

    if (availableMoney >= vacationMoney) {
        console.log(`You saved the money for ${days} days.`)
    } else if (spendDays === 5) {
        console.log("You can't save the money.");
        console.log(`${days}`);
    }
}

vacation([
    '250',
    '150',
    'spend',
    '50',
    'spend',
    '50',
    'save',
    '100',
    'save',
    '100',

])