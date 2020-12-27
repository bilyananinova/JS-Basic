function footballTournament(arg) {
    let index = 0;
    let name = arg[index];
    index++;
    let gamesCount = Number(arg[index]);
    index++;
    let counterW = 0;
    let counterD = 0;
    let counterL = 0;

    for (let i = 1; i <= gamesCount; i++) {
        let resultLetter = arg[index];
        index++;

        if (resultLetter === 'W') {
            counterW++;
        } else if (resultLetter === "D") {
            counterD++;
        } else if (resultLetter === "L") {
            counterL++;
        }
    }

    if (gamesCount >= 1) {
        console.log(`${name} has won ${counterW * 3 + counterD * 1 + counterL * 0} points during this season.`);
        console.log('Total stats:');
        console.log(`## W: ${counterW}`);
        console.log(`## D: ${counterD}`);
        console.log(`## L: ${counterL}`);
        console.log(`Win rate: ${((counterW / gamesCount) * 100).toFixed(2)}%`);
    } else if (gamesCount < 1) {
        console.log(`${name} hasn't played any games during this season.`);
    }
} 

footballTournament(
    [ 'Chelsea', '0' ]
)