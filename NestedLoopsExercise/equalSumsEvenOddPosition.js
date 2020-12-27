function equalSumsEvenOddPosition(arg) {
    let firstNumber = Number(arg[0]);
    let secondNumber = Number(arg[1]);
    let printLine = '';

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = '' + i;
        let oddSum = 0;
        let evenSum = 0;
        

        for (let num = 0; num < currentNumber.length; num++) {

            let currentNumForSum = Number(currentNumber[num]);

            if (num % 2 === 0) {
                evenSum += currentNumForSum;
            } else {
                oddSum += currentNumForSum;
            }

        }

        if (evenSum === oddSum) {
            printLine += i + ' ';
        }

    }
    
    console.log(printLine)
}

equalSumsEvenOddPosition(['100000', '100050'])