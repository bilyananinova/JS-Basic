function luckyNumbers(arg) {
    let num = Number(arg[0]);
    let luckyNumber = 0;
    let print = ''

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    let abSum = 0;
                    let cdSum = 0;

                    abSum = a + b;
                    cdSum = c + d;

                    if (num % abSum === 0) {
                        if (abSum === cdSum) {
                            print += a + '' + b + c + d + ' ';
                        }
                    }

                }
            }
        }
    }

    console.log(print)
}

luckyNumbers('7')