function averageNumber(arg) {
    let index = 0;
    let devider = Number(arg[index]);
    index++;
    let divide = 0;
    let sumDevide = 0;
    let average = 0;

    for (let i = 0; i < devider; i++) {
        divide = Number(arg[index]);
        index++;
        sumDevide += divide
    }

    average = sumDevide / devider;

    console.log(average.toFixed(2))
}

averageNumber([
    '4',
    '95',
    '23',
    '76',
    '23',
])