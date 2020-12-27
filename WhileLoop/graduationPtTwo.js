function graduationPtTwo(arg) {
    let index = 0;
    let name = arg[index];
    index++;

    let sum = 0;
    let averegaGrade = 0;

    let count = 1;
    let isExcluded = false;
    
    while (count <= 12) {
        let grades = Number(arg[index]);
        index++;

        if (grades >= 4) {
            sum += grades;
        } 
        
        if (grades <= 3) {
            isExcluded = true;
            break;
        }
        
        averegaGrade = sum / 12;
        count++;
    }
    
    if(isExcluded) {
        console.log(`${name} has been excluded at ${count} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averegaGrade.toFixed(2)}`);
    }
    
}

graduationPtTwo([
    'Gosho',
    '5',
    '5.5',
    '6',
    '5.43',
    '5.5',
    '6',
    '5.55',
    '5',
    '6',
    '6',
    '5.43',
    '5'    
])