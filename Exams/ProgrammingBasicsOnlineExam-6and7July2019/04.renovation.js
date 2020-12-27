function renovation(arg) {
    let index = 0;
    let height = Number(arg[index]);
    index++;
    let width = Number(arg[index]);
    index++;
    let noPaintPercentage = Number(arg[index]);
    index++;
    let command = arg[index];
    index++;

    let quadraticM = height * width * 4;
    let quadraticMForPaint = quadraticM - (quadraticM * (noPaintPercentage / 100));
    let litersLeft = 0;

    while (command !== 'Tired!') {
        liters = Number(command);

        litersLeft = quadraticMForPaint - liters;
        quadraticMForPaint = litersLeft;

        if(quadraticMForPaint < 0) {
            break;
        } else if (quadraticMForPaint === 0 && litersLeft === 0) {
            break;
        }

        command = arg[index];
        index++;
    }

    if(command === 'Tired!') {
        console.log(`${litersLeft} quadratic m left.`);
    } else if (quadraticMForPaint < 0) {
        console.log (`All walls are painted and you have ${Math.abs(litersLeft)} l paint left!`);
    } else if (quadraticMForPaint === 0 && litersLeft === 0) {
        console.log("All walls are painted! Great job, Pesho!");
    }

}

renovation([ '2', '3', '25', '6', '7', '5' ])