function cake(arg) {
    let cakeWidth = Number(arg[0]);
    let cakeLength = Number(arg[1]);
    let index = 2;
    let command = arg[index];
    index++;

    let cakeCount = cakeWidth * cakeLength;

    let cakePieces = 0;

    while (command !== "STOP") {
        cakePieces = Number(command);
        cakeCount -= cakePieces;

        if (cakeCount < 0) {
            break;
        }

        command = arg[index];
        index++;
    }

    if (command === "STOP") {
        console.log(`${cakeCount} pieces are left.`);
    } else if (cakeCount <= 0) {
        console.log(`No more cake left! You need ${Math.abs(cakeCount)} pieces more.`);
    }
}

cake([
    '10',
    '2',
    '2',
    '4',
    '6',
    'STOP',
])