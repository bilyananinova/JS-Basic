function firm(neededHours, workDays, workers) {
    let hours = Number(neededHours);
    let days = Number(workDays);

    let allWorkHours = (days * 8);
    let worksHours = allWorkHours * 0.9;
    let overtime = days * 2 * Number(workers);

    let hoursTotal = Math.floor(worksHours + overtime);

    if (hours < hoursTotal) {
        console.log(`Yes!${hoursTotal - hours} hours left.`);
    } else {
        console.log(`Not enough time!${Math.abs(hoursTotal - hours)} hours needed.`);
    }

}

firm("50", "5", "2");