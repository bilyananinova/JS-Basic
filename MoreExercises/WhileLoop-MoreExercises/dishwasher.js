function dishwasher(arg) {
    let index = 0;
    let detergent = Number(arg[index]);
    index++;

    let count = 1;
    let command = arg[index];
    index++;
    let dishesSum = 0;
    let potsSum = 0;
    let detergentMl = detergent * 750;
    let neededDetergentForDishes = 0;
    let neededDetergentForPots = 0;
    let neededDetergentSum = 0;

    while (command !== 'End') {

        if (count % 3 === 0) {
            let pots = Number(command);
            potsSum += pots;
            neededDetergentForPots = potsSum * 15;
        } else {
            let dishes = Number(command)
            dishesSum += dishes;
            neededDetergentForDishes = dishesSum * 5;
        }

        neededDetergentSum = neededDetergentForDishes + neededDetergentForPots;

        if (neededDetergentSum > detergentMl) {
            break;
        }

        count++;
        command = arg[index];
        index++;
    }

    let diff = detergentMl - neededDetergentSum

    if (command === 'End') {
        console.log("Detergent was enough!");
        console.log(`${dishesSum} dishes and ${potsSum} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(diff)} ml. more necessary!`);
    }

}

dishwasher([
    '2',
    '53',
    '65',
    '55',
    'End',
    


])