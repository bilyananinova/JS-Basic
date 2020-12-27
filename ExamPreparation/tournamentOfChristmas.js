function tournamentOfChristmas(arg) {
    let index = 0;
    let daysCount = Number(arg[index]);
    index++;
    let sport = (arg[index]);
    let winDays = 0;
    let loseDays = 0;
    let winMoney = 0;
    for (let days = 1; days <= daysCount; days++) {
        let winCount = 0;
        let loseCount = 0
        let winMoneyForDay = 0;
        sport = (arg[index]);
        index++;
        while (sport !== "Finish" && sport !== undefined) {
            if (sport === "Finish") {
                break;
            }

            result = (arg[index]);
            index++;

            if (result === 'win') {
                winDays++;
                winCount++;
                winMoneyForDay += 20;
            } else if (result === 'lose') {
                loseDays++;
                loseCount++;
            }

            sport = (arg[index]);
            index++;

        }

        if (winCount > loseCount) {
            winMoneyForDay *= 1.10
            winCount++;
        } else {
            loseCount++;
        }

        winMoney += winMoneyForDay;
    }
    if (winDays > loseDays) {
        winMoney *= 1.20
        console.log(`You won the tournament! Total raised money: ${winMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${winMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas(
    [
        '3',            'darts',
        'lose',         'handball',
        'lose',         'judo',
        'win',          'Finish',
        'snooker',      'lose',
        'swimming',     'lose',
        'squash',       'lose',
        'table tennis', 'win',
        'Finish',       'volleyball',
        'win',          'basketball',
        'win',          'Finish'
      
]
)