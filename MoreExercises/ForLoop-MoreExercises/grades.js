function grades(arg) {
    let studentsCount = Number(arg[0]);

    let aStudents = 0;
    let bStudents = 0;
    let cStudents = 0;
    let failStudents = 0;
    let averageGrade = 0;

    for (let grades = 1; grades <= studentsCount; grades++) {
        let examGrades = Number(arg[grades])

        if (examGrades >= 5) {
            aStudents++;
        } else if (examGrades >= 4 && examGrades <= 4.99) {
            bStudents++;
        } else if (examGrades >= 3 && examGrades <= 3.99) {
            cStudents++
        } else {
            failStudents++;
        }

        averageGrade += examGrades / studentsCount;
    }

    aStudents = (aStudents / studentsCount) * 100;
    bStudents = (bStudents / studentsCount) * 100;
    cStudents = (cStudents / studentsCount) * 100;
    failStudents = (failStudents / studentsCount) * 100;

    console.log(`Top students: ${aStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${bStudents.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${cStudents.toFixed(2)}%`);
    console.log(`Fail: ${failStudents.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades([
    '6',
    '2',
    '3',
    '4',
    '5',
    '6',
    '2.2',

])