function specialSumOfNumbers(start, end, divider) {

    start = Number(start);
    end = Number(end);
    divider = Number(divider);

    let specialSum = 0;

    for(let i = start; i <= end; i++) {
        if(i % divider === 0) {
            specialSum += i;
        }
    }

    console.log(specialSum)
}

specialSumOfNumbers('61', '125', '25')