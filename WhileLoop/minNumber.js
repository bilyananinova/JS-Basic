function minNumber(arg) {
    let index = 0;
    let numberCount = Number(arg[index]);
    index++;
    
    let minNumber = Number.MAX_SAFE_INTEGER;
    let counter = 1;

    while(counter <= numberCount) {
        let curentNumber = Number(arg[index]);
        index++;

        if(curentNumber < minNumber) {
            minNumber = curentNumber;
        }

        counter++;
    }
    console.log(minNumber);
}

minNumber([
    '3',
    '-10',
    '20',
    '-30'    
])