function maxNumber (arg) {
    let index = 0;
    let number = Number(arg[index]); 
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let count = 0; //broqch na iteraciite
    
    while(count <= number) {
        let currentNumber = Number(arg[index]);
        index++;

        if(currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
        count++;
    }
    console.log(maxNumber);
}

maxNumber ([
    '3',
    '-10',
    '20',
    '-30',
])