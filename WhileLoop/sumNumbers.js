function sumNumbers(arg) {
    let index = 0;
    let input = arg[index];
    index++;

    let result = 0;

    while(input != 'Stop') {
        result += Number(input);

        input = arg[index];
        index++;
    }

    console.log(result);
}

sumNumbers([
    '10',
    '20',
    '30',
    '45',
    'Stop',
])