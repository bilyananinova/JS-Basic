function repainting (arg) {
    let index = 0;
    let nylon = Number(arg[index]);
    index++;
    let paintL = Number(arg[index]);
    index++;
    let thinner = Number(arg[index]);
    index++;
    let hours = Number(arg[index]);
    index++;

    let nylonExpenses = (nylon + 2) * 1.50;
    let paintExpenses = (paintL * 1.1) * 14.50;
    let thinnerExpenses = (thinner * 5);
    let expensesForPiantPerHour = (nylonExpenses + paintExpenses + thinnerExpenses + 0.40) * 0.30;
    let expensesForPainter = expensesForPiantPerHour * hours;

    let allExpenses = nylonExpenses + paintExpenses + thinnerExpenses + expensesForPainter + 0.40;

    console.log(`Total expenses: ${allExpenses.toFixed(2)} lv.`)
}

repainting(
    [ '90', '99', '28', '9' ]
)