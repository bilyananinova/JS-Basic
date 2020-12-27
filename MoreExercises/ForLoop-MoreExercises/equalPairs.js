function equalPairs(arg) {
    let index = 0;
    let pairsCount = Number(arg[index]);
    index++;
    let pairSum = 0;
    let numA = Number(arg[index]);
    let numB = Number(arg[index]);
    let lastPairSum = 0;
    let diff = 0;

    for (let i = 1; i <= pairsCount; i++) {

        numA = Number(arg[index]);
        index++;
        numB = Number(arg[index]);
        index++;

        currentPairSum = (numA + numB);        

        if (i > 0) {
            diff = Math.abs(currentPairSum - lastPairSum);
        }

        lastPairSum = currentPairSum

    }

    if(diff === 0) {
        console.log(`Yes, value=${lastPairSum}`)
    } else {
        console.log(`No, maxdiff=${diff}`)
    }
}

equalPairs([
    '1',
    '5',
    '5',
])