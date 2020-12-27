function verySpecialNumbers(arg, arg1, arg2) {
    let start = Number(arg);
    let end = Number(arg1);
    let n = Number(arg2);

    for (i = start; i <= end; i++) {

        if (i % Math.pow(n, 2) === 0) {
            console.log(`Very special number: ${i} `);
        } else if (i % n === 0) {
            console.log(`Special number: ${i}`);
        } else {
            console.log(i);
        }
    }
}

verySpecialNumbers('1', '10', '4') 