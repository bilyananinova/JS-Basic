function trainTheTrainers(arg) {
    let index = 0;
    let JuryCount = Number(arg[index]);
    index++;
    let presentationName = arg[index];
    index++;
    let allGrades = 0;
    let gradesCount = 0;

    while (presentationName !== 'Finish') {
        let avarageGrade = 0;
        for (let i = 0; i < JuryCount; i++) {
            let presentationGrade = Number(arg[index]);
            index++;
            avarageGrade += presentationGrade;
            allGrades += presentationGrade;
            gradesCount++;
        }

        console.log(`${presentationName} - ${(avarageGrade/JuryCount).toFixed(2)}.`)
        presentationName = arg[index];
        index++;

        if(presentationName === 'Finish') {
            break;
        }

    }

    if(presentationName === 'Finish') {
        console.log(`Student's final assessment is ${(allGrades / gradesCount).toFixed(2)}.`)
    }
}

trainTheTrainers([
    '2',
    'Objects and Classes',
    '5.77',
    '4.23',
    'Dictionaries',
    '4.62',
    '5.02',
    'RegEx',
    '2.88',
    '3.42',
    'Finish'
  ])