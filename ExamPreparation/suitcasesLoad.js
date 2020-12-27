function suitcasesLoad(arg) {
    let index = 0;
    let capacity = Number(arg[index]);
    index++;
    let volumeSuitCase = arg[index];
    index++;
    let counter = 0;

    while (volumeSuitCase !== 'End') {
        volumeSuitCase = Number(volumeSuitCase);

        if (counter === 3) {
            volumeSuitCase *= 1.10;
        }

        capacity -= volumeSuitCase;

        if (capacity <= 0) {
            break;
        }

        counter++;
        volumeSuitCase = arg[index];
        index++;
    }

    if (volumeSuitCase === 'End') {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    } else if (capacity <= 0) {
        console.log("No more space!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    }
}

suitcasesLoad([
    '1200.2', '260',
    '380.5', '125.6',
    '305', 'End',
    ''
])