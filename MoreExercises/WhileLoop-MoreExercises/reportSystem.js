function reportSystem(arg) {
    let index = 0
    let amount = Number(arg[index]);
    index++;
    let count = 1;
    let cashCount = 0;
    let cardCount = 0;
    let command = arg[index];
    index++;
    let cashPeymant = 0;
    let cardPeymant = 0;
    let allPayment = 0;

    while (command !== undefined && command !== 'End') {
        let transaction = Number(command);
        let isCashError = false;
        let isCardError = false;

        if (count % 2 === 1) {
            if (transaction > 100) {
                isCashError = true;
            } else if (transaction <= 100) {
                cashCount++;
                cashPeymant += transaction;
            }
        } else if (count % 2 === 0) {
            if (transaction < 10) {
                isCardError = true;
            } else if (transaction >= 10) {
                cardPeymant += transaction;
                cardCount++;
            }
        }

        command = arg[index];
        index++;
        count++;

        allPayment = cashPeymant + cardPeymant;

        if (isCardError || isCashError) {
            console.log('Error in transaction!')
            continue;
        }

        if (isCardError === false || isCashError === false) {
            console.log('Product sold!')
            continue;
        }

        if (allPayment >= amount) {
            break;
        }

    }

    if (allPayment >= amount) {
        console.log(`Average CS: ${(cashPeymant / cashCount).toFixed(2)}`);
        console.log(`Average CC: ${(cardPeymant / cardCount).toFixed(2)}`);
    } else if (command === 'End') {
        console.log("Failed to collect required money for charity.")
    }
}

reportSystem([
    '600',
    '86',
    '150',
    '98',
    '227',
    'End',
])