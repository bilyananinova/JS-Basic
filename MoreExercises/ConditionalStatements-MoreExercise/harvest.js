function harvest(sqrM, grapesOneSqrM, wineLitters, workerCount) {
    let x = Number(sqrM);
    let y = Number(grapesOneSqrM);
    let z = Number(wineLitters);
    let workers = Number(workerCount);

    let allGrapes = x * y;
    let grapesForWine = (allGrapes * 0.40) / 2.5;

    let result = Math.abs(grapesForWine - z);

    if (grapesForWine > z) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(grapesForWine)} liters.`);
        console.log(`${Math.ceil(result)} liters left -> ${Math.ceil(result / workers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(result)} liters wine needed.`);
    }
}

harvest("1020", "1.5", "425", "4");