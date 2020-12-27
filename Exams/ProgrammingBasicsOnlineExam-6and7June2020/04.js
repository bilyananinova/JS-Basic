function beehivePopulation(arg1, arg2) {
    let startPopulation = Number(arg1);
    let years = Number(arg2);

    let newBees = 0
    let allBees = 0
    let dieBees = 0
    let endPopulation = 0;

    for (let year = 1; year <= years; year++) {

        newBees = (Math.floor(startPopulation / 10)) * 2;
        if (year % 10 === 5 || year % 10 === 0) {
            let migrationBees = (Math.floor((startPopulation + newBees) / 50 )* 5);
            startPopulation = startPopulation - migrationBees
        }

        dieBees = (Math.floor((startPopulation + newBees) / 20)) * 2;

        endPopulation = Math.ceil(startPopulation + newBees - dieBees);

        startPopulation = endPopulation;
    }

    console.log(`Beehive population: ${startPopulation}`)
}

beehivePopulation('1000', '23')