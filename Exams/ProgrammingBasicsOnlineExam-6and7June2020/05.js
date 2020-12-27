function beehiveDefense(arg, arg1, arg2) {
    let beesCount = Number(arg);
    let health = Number(arg1);
    let atac = Number(arg2);

    let beesLeft = 0;
    let bearHelth = 0;
    let isBearWin = false;
    let isBeesWin = false;

    while (beesCount > 0) {
        beesLeft = beesCount - atac;
        bearHelth = health - (beesLeft * 5);
        health = bearHelth
        beesCount = beesLeft

        if (bearHelth <= 0) {
            isBeesWin = true;
            break;
        }
        if (beesLeft < 0) {
            isBeesWin = true;
            beesLeft = 0;
        }
        
        if(beesLeft < 100) {
            isBearWin = true;
            break;
        } 
        
    }

    if(isBearWin) {
        console.log(`The bear stole the honey! Bees left ${beesLeft}.`);
    } else if (isBeesWin) {
        console.log(`Beehive won! Bees left ${beesLeft}.`)
    } else if (beesLeft < 0){
        console.log(`Beehive won! Bees left ${beesLeft}.`)
    }
}

beehiveDefense('200', '10000', '300')