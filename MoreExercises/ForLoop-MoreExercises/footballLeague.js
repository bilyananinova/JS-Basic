function footballLeague(arg) {
    let capacity = Number(arg[0]);
    let fens = Number(arg[1]);
    let allFens = 0;
    let sectorLetter = '';
    let inSectorA = 0;
    let inSectorB = 0;
    let inSectorV = 0;
    let inSectorG = 0;

    for (let i = 2; i <= arg.length; i++) {
        sectorLetter = arg[i];
        switch (sectorLetter) {
            case 'A':
                inSectorA++;
                break;
            case 'B':
                inSectorB++;
                break;
            case 'V':
                inSectorV++;
                break;
            case 'G':
                inSectorG++;
                break;
        }
    }

    inSectorA = (inSectorA / fens) * 100;
    inSectorB = (inSectorB / fens) * 100;
    inSectorV = (inSectorV / fens) * 100;
    inSectorG = (inSectorG / fens) * 100;
    allFens = (fens / capacity) * 100;

    console.log(`${inSectorA.toFixed(2)}%`);
    console.log(`${inSectorB.toFixed(2)}%`);
    console.log(`${inSectorV.toFixed(2)}%`);
    console.log(`${inSectorG.toFixed(2)}%`);
    console.log(`${allFens.toFixed(2)}%`);
}

footballLeague([
    '76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B'
])