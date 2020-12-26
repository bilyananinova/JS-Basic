function TimePlusFifteenMinutes(arg1, arg2) {
    let hours = Number(arg1);
    let minutes = Number(arg2) + 15;

    if(minutes > 59) {
        hours = hours + 1;
        minutes = minutes - 60;
    }

    if(hours > 23) {
        hours = hours - 24;
    }

    if(minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}

TimePlusFifteenMinutes("0", "45")