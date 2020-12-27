function happyCat(arg) {
    let daysCount = Number(arg[0]);
    let hoursPerDay = Number(arg[1]);
    let result = 0;
    let totalMoney = 0;
    for (let days = 1; days <= daysCount; days++) {
        let evenDaysTotal = 0;
        let otherPerEvenDays = 0;
        let oddDaysTotal = 0;
        let otherPerOddDays = 0;
        let evenResult = 0;
        let oddResult = 0;
        for (let hours = 1; hours <= hoursPerDay; hours++) {
            if (days % 2 === 0) {
                if (hours % 2 === 1) {
                    evenResult += 2.50;
                } else {
                    otherPerEvenDays += 1;
                }
                evenDaysTotal = evenResult + otherPerEvenDays;
            } else if (days % 2 === 1) {
                if (hours % 2 === 0) {
                    oddResult += 1.25;
                } else {
                    otherPerOddDays += 1;
                }
                oddDaysTotal = oddResult + otherPerOddDays;
            }
            result = evenDaysTotal + oddDaysTotal;
        }

        totalMoney += result

        if (days % 2 === 1) {
            console.log(`Day: ${days} - ${oddDaysTotal.toFixed(2)} leva`);
        }
        else {
            console.log(`Day: ${days} - ${evenDaysTotal.toFixed(2)} leva`);
        }
    }
    console.log(`Total: ${totalMoney.toFixed(2)} leva`)
}

happyCat(['2', '5'])