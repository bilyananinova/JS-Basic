function Sequence(arg) {
    let index = 0;
    let endNumber = Number(arg[index]);
    index++;

    let number = 1;

    while(number <= endNumber) {
        console.log(number);
        number = number * 2 + 1;
    }
}

Sequence([8])