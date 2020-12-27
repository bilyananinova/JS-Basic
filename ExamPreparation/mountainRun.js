function mountainRun(arg) {
    let recordInSeconds = Number(arg[0]);
    let meters = Number(arg[1]);
    let timeInSecondsPerMeter = Number(arg[2]);

    let timeForAllMeters = meters * timeInSecondsPerMeter;
    let slowing = (Math.floor(meters / 50)) * 30;
    let totaltimes = timeForAllMeters + slowing;

    if(totaltimes < recordInSeconds) {
        console.log(`Yes! The new record is ${totaltimes.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${Math.abs(recordInSeconds - totaltimes).toFixed(2)} seconds slower.`);
    }

}

mountainRun ([ '1377', '389', '3' ])