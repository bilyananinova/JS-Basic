function cinemaTickets(arg) {
    let index = 0;
    let filmName = arg[index];
    index++;
    let freePlaces = Number(arg[index]);
    index++;
    let typeTicket = arg[index];
    let student = 0;
    let standard = 0;
    let kid = 0;
    let allTickets = 0;
    let allStudents = 0;
    let allStandards = 0;
    let allKids = 0;

    while (filmName !== 'Finish') {
        typeTicket = arg[index];
        index++;
        let fullPercentage = 0;
        student = 0;
        standard = 0;
        kid = 0;

        while (typeTicket !== 'End') {

            if (typeTicket === 'student') {
                student++;
            } else if (typeTicket === 'standard') {
                standard++;
            } else if (typeTicket === 'kid') {
                kid++;
            }

            if ((kid + standard + student) >= freePlaces) {
                break;
            }

            typeTicket = arg[index];
            index++;
        }
        allStudents += student;
        allStandards += standard;
        allKids += kid;
        allTickets += kid + student + standard;

        fullPercentage = ((kid + standard + student) / freePlaces) * 100;

        console.log(`${filmName} - ${fullPercentage.toFixed(2)}% full.`);

        filmName = arg[index];
        index++;
        freePlaces = Number(arg[index]);
        index++;
    }

    if (filmName === 'Finish') {
        console.log(`Total tickets: ${allTickets}`);
        console.log(`${((allStudents / allTickets) * 100).toFixed(2)}% student tickets.`);
        console.log(`${((allStandards / allTickets) * 100).toFixed(2)}% standard tickets.`);
        console.log(`${((allKids / allTickets) * 100).toFixed(2)}% kids tickets.`);
    }
}

cinemaTickets([
    'The Matrix', '20',
    'student',    'standard',
    'kid',        'kid',
    'student',    'student',
    'standard',   'student',
    'End',        'The Green Mile',
    '17',         'student',
    'standard',   'standard',
    'student',    'standard',
    'student',    'End',
    'Amadeus',    '3',
    'standard',   'standard',
    'standard',   'Finish'
  ]
)