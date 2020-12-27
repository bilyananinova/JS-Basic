function uniquePINCodes(arg) {
    let firstNumber = Number(arg[0]);
    let secondNumber = Number(arg[1]);
    let thirdNumber = Number(arg[2]);
    
    for (let a = 1; a <= firstNumber; a++) {
        for (let b = 2; b <= secondNumber; b++) {
            let isPrime = true;
            let maxDivider = Math.sqrt(b);

            for (let i = 2; i <= maxDivider; i++) {

                if (b < 0) {
                    continue;
                }

                if (b % i === 0) {
                    isPrime = false;
            
                }
            }

            if(!isPrime) {
                continue;
            }

            for (let c = 1; c <= thirdNumber; c++) {
                if (a % 2 === 0 && c % 2 === 0) {
                    console.log(a + ' ' + b + ' ' + c);
                }
            }

        }
    }
}

uniquePINCodes([
    '3',
    '5',
    '5'
])