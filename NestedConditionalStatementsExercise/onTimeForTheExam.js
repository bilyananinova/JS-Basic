function onTimeForTheExam(hourExam, minutesExam, hourArrive, minutesArrive) {
    hourExam = Number(hourExam);
    minutesExam = Number(minutesExam);
    hourArrive = Number(hourArrive);
    minutesArrive = Number(minutesArrive);

    let hours = 0;
    let minutes = 0;

    let examHoursInMinutes = hourExam * 60 + minutesExam;   //prevrushtane na xhasovete i minutite za izpita v minuti
    let arrivalHoursInMinutes = hourArrive * 60 + minutesArrive; // prevrushtane na chasovete i minutite na pristigane v minuti

    let differences = examHoursInMinutes - arrivalHoursInMinutes;   //razlikata mevdu minutite na izpita i minutite na pristigane

    if (differences >= 0 && differences <= 30) {    // ako razlikata e pod 30min da se otpechata Ontime
        console.log(`On time`);

        if (differences !== 0) {        // tui kato minutite sa do 30 mogat da se vmuknat direktno w izrechenieto
            console.log(`${differences} minutes before the start`);
        }
    } else if (differences > 30) {      // ako minutite sa poveche ot 30 otpechatwame Early
        console.log("Early");

        hours = Math.floor(differences / 60);   //preobrazuvane na razlikite v chasove 
        minutes = differences % 60;             // preobrazuvane na razlikite v minuti

        if (differences > 30 && differences < 60) {     //ako razlikite sa poveche ot 30 i po malko ot 60 se otpechatvat samo minutite
            console.log(`${minutes} minutes before the start`);
        } else if (differences >= 60 && minutes > 9) {  //ako razlikite sa po golemi ot 60minuti i po malko ot 9 se otpechatvat chasovete i minutite
            console.log(`${hours}:${minutes} hours before the start`);
        } else {                                        //ako razlikite sa po golemi ot 60minuti i po malko ot 9 se otpechatvat chasovete i minutite s 0
            console.log(`${hours}:0${minutes} hours before the start`);
        }
    } else if (differences < 0) {
        console.log(`Late`);

        differences = Math.abs(differences) // absolutna stojnost na razlikite
        minutes = Math.floor(differences % 60); //zakruglqne kum po malkoto pri obrazuvane na minutite
        hours = Math.floor(differences / 60); // zakruglqne kum po malkoto pri obrazuwane na chasovete

        if (differences < 60) {
            console.log(`${minutes} minutes after the start`);
        } else if (differences >= 60 && minutes > 9) {
            console.log(`${hours}:${minutes} hours after the start`);
        } else if (differences >= 60 && minutes <= 9) {
            console.log(`${hours}:0${minutes} hours after the start`);
        }
    }
}

onTimeForTheExam("11", "30", "12", "29")