function hospital(arg) {
    let period = Number(arg[0]);
    let untreatedPatients = 0;
    let treatedPatients = 0;
    let doctorsCount = 7;

    for (let day = 1; day <= period; day++) {
        let patientsForTheDay = Number(arg[day]);

        if (day % 3 === 0 && untreatedPatients > treatedPatients) {
            doctorsCount++
        }

        if (patientsForTheDay > doctorsCount) {
            treatedPatients += doctorsCount;
            untreatedPatients += patientsForTheDay - doctorsCount;
        } else {
            treatedPatients += patientsForTheDay;
        }
    }

    console.log(`Treated patients: ${(treatedPatients)}.`)
    console.log(`Untreated patients: ${(untreatedPatients)}.`)
}

hospital(['4', '7', '27', '9', '1'])