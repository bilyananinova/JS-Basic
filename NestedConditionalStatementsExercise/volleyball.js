function volleyball(arg1, arg2, arg3) {
    let typeYear = arg1;
    let holidayCount = Number(arg2);
    let homeTownWeekends = Number(arg3);
    let totalWeekends = 48;

    let weekendsSofia = totalWeekends - homeTownWeekends;

    let saturdayGames = weekendsSofia * 3.0/4;
    let holidayGames = holidayCount * 2.0/3;

    let totalGames = saturdayGames + homeTownWeekends + holidayGames;

    if (typeYear === "leap") {
        totalGames = totalGames * 1.15;
    }

    console.log(Math.floor(totalGames))

}

volleyball("leap", "40", "10")