function moving(arg) {
    let index = 0;
    let widthFreeSpace = Number(arg[index]);
    index++;
    let lengthFreeSpace = Number(arg[index]);
    index++;
    let heightFreeSpace = Number(arg[index]);
    index++;

    let freeSpaceCubic = widthFreeSpace * lengthFreeSpace * heightFreeSpace;
    let isFreeSpace = true;

    let command = arg[index];
    index++;

    while (command !== 'Done') {
        let boxCount = Number(command);
        freeSpaceCubic = freeSpaceCubic - boxCount;

        if (freeSpaceCubic < 0) {
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(freeSpaceCubic)} Cubic meters more.`);
            break;
        }

        command = arg[index];
        index++;
    }

    if (isFreeSpace) {
        console.log(`${freeSpaceCubic} Cubic meters left.`);
    }

}

moving([
    '10',
    '1',
    '2',
    '4',
    '6',
    'Done'
])