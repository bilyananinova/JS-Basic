function еxamPreparation(arg) {
    let index = 0;
    let maxUnsatisfactoryGradeCount = Number(arg[index]);
    index++;
    let command = (arg[index]);
    index++;

    let unsatisfactoryGradeCount = 0;
    let testCount = 0;
    let averageGrade = 0;
    let sumOfScores = 0;
    let nameOfLastTest = 0;

    while ((command !== 'Enough') && (unsatisfactoryGradeCount < maxUnsatisfactoryGradeCount)) {
        testName = command;
        let gradeOfCurrentTest = Number(arg[index]);
        index++;

        if (gradeOfCurrentTest <= 4) {
            unsatisfactoryGradeCount++;
        }

        sumOfScores += gradeOfCurrentTest;
        testCount++;

        command = arg[index];
        index++;

    }

    if (command === 'Enough') {
        averageGrade = sumOfScores / testCount;
        nameOfLastTest = testName;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${testCount}`)
        console.log(`Last problem: ${nameOfLastTest}`)
    } else if (unsatisfactoryGradeCount === maxUnsatisfactoryGradeCount) {
        console.log(`You need a break, ${unsatisfactoryGradeCount} poor grades.`)
    }
}

еxamPreparation([
    '2',
    'Income',
    '3',
    'Game Info',
    '6',
    'Best Player',
    '4' 
])