function lotaryStatistics(n) {
    n = Number(n);

    let oddPercentage = 0;
    let evenPercentage = 0;
    let oddPercentageEndingInSeven = 0;
    let percentageDivisionIn100 = 0;

    for (let i = 1; i <= n; i++) {

        if (i % 2 === 0) {

            evenPercentage++;

        } else if (i % 2 === 1) {

            if (i % 10 === 7) {
                oddPercentageEndingInSeven++;
            }

            if (i <= 10) {
                oddPercentage++;
            }

        }

        if (100 % i === 0) {
            percentageDivisionIn100++;
        }
    }

    oddPercentage = (oddPercentage / n) * 100;
    evenPercentage = (evenPercentage / n) * 100;
    oddPercentageEndingInSeven = (oddPercentageEndingInSeven / n) * 100;
    percentageDivisionIn100 = (percentageDivisionIn100 / n) * 100;

    console.log(`${oddPercentage.toFixed(2)}%`)
    console.log(`${evenPercentage.toFixed(2)}%`)
    console.log(`${oddPercentageEndingInSeven.toFixed(2)}%`)
    console.log(`${percentageDivisionIn100.toFixed(2)}%`)
}

lotaryStatistics('49')