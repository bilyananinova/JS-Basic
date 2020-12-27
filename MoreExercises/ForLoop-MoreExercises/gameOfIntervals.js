function gameOfIntervals(arg) {
    let moveCount = Number(arg[0]);
    let result = 0;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let p6 = 0;

    for(let number = 1; number <= moveCount; number++) {
        let numPlay = Number(arg[number]);

        if(numPlay >= 0 && numPlay <= 9) {
            p1++;
            result += numPlay * 0.20;
            
        } else if (numPlay >= 10 && numPlay <= 19) {
            p2++;
            
            result += numPlay * 0.30;
        } else if (numPlay >= 20 && numPlay <= 29) {
            p3++;
            
            result += numPlay * 0.40
        } else if ( numPlay >= 30 && numPlay <= 39) {
            p4++;
            
            result += 50;
        } else if (numPlay >= 40 && numPlay <= 50) {
            p5++;
            
            result += 100;
        } else {
            p6++;
            
            result = result / 2;
        }
    }

    p1 = p1 / moveCount * 100;
    p2 = p2 / moveCount * 100;
    p3 = p3 / moveCount * 100;
    p4 = p4 / moveCount * 100;
    p5 = p5 / moveCount * 100;
    p6 = p6 / moveCount * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${p1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${p2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${p3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${p4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${p5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${p6.toFixed(2)}%`);
}

gameOfIntervals([
    '10',
    '43',
    '57',
    '-12',
    '23',
    '12',
    '0',
    '50',
    '40',
    '30',
    '20',
])