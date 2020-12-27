function coffeeMachine(arg) {
    let index = 0;
    let typeOfDrink = arg[index];
    index++;
    let sugarQty = arg[index];
    index++;
    let countDrinks = Number(arg[index]);
    index++;

    let price = 0;
    let amount = 0;

    if (typeOfDrink === 'Espresso') {
        if (sugarQty === 'Without') {
            price = 0.90;
        } else if (sugarQty === 'Normal') {
            price = 1;
        } else if (sugarQty === 'Extra') {
            price = 1.20;
        }
    } else if (typeOfDrink === 'Cappuccino') {
        if (sugarQty === 'Without') {
            price = 1;
        } else if (sugarQty === 'Normal') {
            price = 1.20;
        } else if (sugarQty === 'Extra') {
            price = 1.60;
        }
    } else if (typeOfDrink === 'Tea') {
        if (sugarQty === 'Without') {
            price = 0.50;
        } else if (sugarQty === 'Normal') {
            price = 0.60;
        } else if (sugarQty === 'Extra') {
            price = 0.70;
        }
    }

    amount = price * countDrinks;

    if (sugarQty === 'Without') {
        amount = amount * 0.65;
    }

    if (typeOfDrink === 'Espresso' && countDrinks >= 5) {
        amount = amount * 0.75;
    }

    if ((price * countDrinks) >= 15 && amount >= 15) {
        amount = (price * countDrinks) * 0.80;
    }

    console.log(`You bought ${countDrinks} cups of ${typeOfDrink} for ${amount.toFixed(2)} lv.`);
}

coffeeMachine([
    'Tea',
    'Extra',
    '3',
])