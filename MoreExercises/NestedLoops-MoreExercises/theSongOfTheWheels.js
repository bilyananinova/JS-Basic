function theSongOfTheWheels(arg) {
    let m = Number(arg[0]);
    let pass = '';
    let counter = 0;
    let printPass = '';
    let isFound = true;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if ((a * b + c * d) === m) {
                        if (a < b) {
                            if (c > d) {
                                pass += `${(a + '' + b + c + d)} `;
                                counter++;
                                if (counter === 4) {
                                    printPass = `${(a + '' + b + c + d)}`;
                                } else {
                                    isFound = false;
                                }
                            } else {
                                isFound = false;
                            }
                        } else {
                            isFound = true;
                        }
                    }
                }
            }
        }
    }
    if (isFound) {
        console.log(`${pass}`)
        console.log(`Password: ${printPass}`);
    } else {
        console.log('No!')
    }
}
theSongOfTheWheels(['139'])