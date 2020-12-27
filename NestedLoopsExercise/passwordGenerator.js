function passwordGenerator(arg) {
    let nNumber = Number(arg[0]);
    let lNumber = Number(arg[1]);
    let printLine = '';

    for (let a = 1; a <= nNumber; a++) {
        for (let b = 1; b <= nNumber; b++) {
            for (let c = 97; c < 97 + lNumber; c++) {
                for (let d = 97; d < 97 + lNumber; d++) {
                    for (let e = 1; e <= nNumber; e++) {
                        if(e > a && e > b) {
                            printLine += a + '' + b + String.fromCharCode(c) + String.fromCharCode(d) + e + ' ';
                        }
                    }
                }
            }
        }
    }

    console.log(printLine)
}

passwordGenerator(['3', '1'])