function carNumber(arg) {
    let startNum = Number(arg[0]);
    let endNum = Number(arg[1]);
    let print = '';

    for (let a = startNum; a <= endNum; a++) {
        for (let b = startNum; b <= endNum; b++) {
            for (let c = startNum; c <= endNum; c++) {
                for (let d = startNum; d <= endNum; d++) {
                    if ((a % 2 === 1 && d % 2 === 0) || (a % 2 === 0 && d % 2 === 1)) {
                        if (a > d) {
                            if ((b + c) % 2 === 0) {
                                print += a + '' + b + c + d + ' ';
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(print)
}

carNumber(['3', '5'])