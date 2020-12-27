function sleepyTomCat(countDays) {
    let freeDays = Number(countDays);

    let playTimeNorm = 30000;

    let workDays = 365 - freeDays;
    let freeDaysTime = freeDays * 127;
    let workDaysTime = workDays * 63;
    let totalTime = freeDaysTime + workDaysTime;
    let resultHours = Math.abs(playTimeNorm - totalTime) / 60;
    let resultMinutes = Math.abs(playTimeNorm - totalTime) % 60;

    if (totalTime > playTimeNorm) {
        console.log("Tom will run away");
        console.log(`${Math.floor(resultHours)} hours and ${resultMinutes} minutes more for play`)
    } else {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(resultHours)} hours and ${resultMinutes} minutes less for play`)
    }
}

sleepyTomCat("113")