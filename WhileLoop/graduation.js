function graduation(arg) {
    let index = 0;
    let name = arg[index];
    index++;

    let sum = 0;
    let averegaGrade = 0;

    let count = 1;

    while (count <= 12) {
        let grades = Number(arg[index]);
        index++;
        if (grades < 4.00) {
            continue;
        }

        sum += grades;
        count++;

    }

    averegaGrade = sum / 12;

    console.log(`${name} graduated. Average grade: ${averegaGrade.toFixed(2)}`);
}

graduation([
    'Ani',
    '5',
    '5.32',
    '6',
    '5.43',
    '5',
    '6',
    '5.5',
    '4.55',
    '5',
    '6',
    '5.56',
    '6'
])