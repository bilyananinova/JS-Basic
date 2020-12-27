function sumOfTwoNumbers(arg) {
    let index = 0;
    let startNumber = Number(arg[index]);
    index++;
    let endNumber = Number(arg[index]);
    index++;
    let magicNumber = Number(arg[index]);
    index++;

    let combinations = 0;
    let isFoundCombination = false;

    for (let firstNumber = startNumber; firstNumber <= endNumber; firstNumber++) {

        for (let secondNumber = startNumber; secondNumber <= endNumber; secondNumber++) {
            combinations++;

            if ((firstNumber + secondNumber) === magicNumber) {
                console.log(`Combination N:${combinations} (${firstNumber} + ${secondNumber} = ${magicNumber})`);
                isFoundCombination = true;
                break;
            }

        }

        if (isFoundCombination) {
            break;
        }
    }

    if (isFoundCombination === false) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers([
    '23',
    '24',
    '20',
])