function honeycombs (arg1, arg2) {
    let beesCount = Number(arg1);
    let flowersCount = Number(arg2);

    let honeyTotal = beesCount * flowersCount * 0.21;
    let honeycombsFull = Math.floor(honeyTotal / 100);
    let honeyLeft = honeyTotal - (honeycombsFull * 100)

    console.log(`${honeycombsFull} honeycombs filled.`);
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`);

}

honeycombs('25', '6400')