function worldSwimmingRecord(arg, arg1, arg2) {
    let worldRecordTime = Number(arg);
    let meters = Number(arg1);
    let timePerMeter = Number(arg2);

    let time = meters * timePerMeter;
    let delayTime = (Math.floor(meters / 15) * 12.5);
    let totalTime = time + delayTime;

    if (worldRecordTime > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - worldRecordTime).toFixed(2)} seconds slower.`)
    }

}

worldSwimmingRecord("55555.67", "3017", "5.03")