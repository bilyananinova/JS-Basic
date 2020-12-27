function numberOnThirdPower(arg) {
    let number = Number(arg);

    let start = 0;

    if (number % 2 === 0) {
        start = 2;
    } else if (number % 2 === 1) {
        start = 1;
    }

    for(let i = start; i <= number; i += 2) {
        console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`)
    }
}


numberOnThirdPower('6')