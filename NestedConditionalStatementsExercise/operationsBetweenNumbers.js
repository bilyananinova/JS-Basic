function operationsBetweenNumbers(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operators = arg3;

    let result = 0;
    let evenOrOdd = ''


    if (operators === '+' || operators === '-' || operators === '*') {
        switch (operators) {
            case '+': result = n1 + n2; break;
            case '-': result = n1 - n2; break;
            case '*': result = n1 * n2; break;
        }

        if (result % 2 === 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }

        console.log(`${n1} ${operators} ${n2} = ${result} - ${evenOrOdd}`);
    } else if (n2 == '0') {

        console.log(`Cannot divide ${n1} by zero`);
    } else if (operators === '/') {
        result = n1 / n2;

        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else if (operators === '%') {
        result = n1 % n2;

        console.log(`${n1} % ${n2} = ${result}`);
    }
}

operationsBetweenNumbers('7', '3', '*')