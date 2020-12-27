function weddingSeats(arg) {
    let lastSector = arg[0];
    let stringToNumber = lastSector.charCodeAt(lastSector);
    let rollsInFirstSector = Number(arg[1]);
    let placesInOddRoll = Number(arg[2]);
    let placesInEvenRoll = 0
    let rollsInNextSector = rollsInFirstSector;

    for (let a = 65; a <= 90; a++) {
        if(a === stringToNumber) {
            break;
        }

        for (let b = 1; b <= rollsInFirstSector; b++) {
            if(a => 65 && a <= stringToNumber) {
                
            }
            rollsInNextSector++;
            if (rollsInNextSector % 2 === 0) {
                placesInEvenRoll = placesInOddRoll * 2;
            }

            for (let c = 97; c <= 122; c++) {


                console.log(String.fromCharCode(a) + '--' + b + '--' + String.fromCharCode(c))

            }
        }
    }
}

weddingSeats(['B', '3', '2'])