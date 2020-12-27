function walking (arg) {
    let target = 10000;
    let index = 0;
    let command = arg[index];
    index++;
    let stepsSum = 0;

    while (command !== "Going home"){
        let stepsCount = Number(command);
    
        stepsSum += stepsCount;

        if(stepsSum >= target) {
            break;
        }
        
        command = arg[index];
        index++;
    }

    let stepsToHome = Number(arg[index]);
    let diffSteps = target - stepsSum - stepsToHome;

    if(stepsSum >= target) {
        console.log('Goal reached! Good job!');
    } else if (diffSteps <= 0) {
        console.log('Goal reached! Good job!');
    } else if (command === 'Going home') {
        console.log(`${Math.abs(diffSteps)} more steps to reach goal.`)
    }
}

walking ([
    '1500',
    '3000',
    '250',
    '1548',
    '2000',
    'Going home',
    '2000'

])