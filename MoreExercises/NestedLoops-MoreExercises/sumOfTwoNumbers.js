function sumOfTwoNumbers(arg) {
    let startNum = Number(arg[0]);
    let endNum = Number(arg[1]);
    let magicNum = Number(arg[2]);

    let combinationCount = 0;
    let isFound = false;

    for (let a = startNum; a <= endNum; a++) {
        for (let b = startNum; b <= endNum; b++) {
            combinationCount++;

            if ((a + b === magicNum)) {
                console.log(`Combination N:${combinationCount} (${a} + ${b} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        
        if (isFound) {
            break;
        }
    }

    if (isFound === false) {
        console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(['1', '10', '5'])