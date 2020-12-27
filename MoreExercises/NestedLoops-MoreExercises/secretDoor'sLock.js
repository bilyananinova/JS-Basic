function secretDoorsLock(arg) {
    let thirdNumber = Number(arg[0]);
    let secondNumber = Number(arg[1]);
    let firstNumber = Number(arg[2]);

    for (let a = 1; a <= thirdNumber; a++) {
        if (a % 2 === 1) {
            continue;
        }
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

            if (!isPrime) {
                continue;
            }

            for (let c = 1; c <= firstNumber; c++) {
                if (c % 2 === 1) {
                    continue;
                }
                console.log(a + ' ' + b + ' ' + c)
            }
        }
    }
}

secretDoorsLock(['3', '5', '5'])