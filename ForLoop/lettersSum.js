function lettersSum(arg, arg1, arg2) {
    let product = arg;
    let controlNumber = Number(arg1);
    let budget = Number(arg2);
    let result = 0;

    for(let i = 0; i < product.length; i++) {
        if(product[i] === 'a' || product[i] === 'e' || product[i] === 'i' ||product[i] === 'o' || product[i] === 'u' || product[i] === 'y') {
            result += 3;
        } else {
            result += 1;
        }
    }

    result *= controlNumber;

    if (result > budget) {
        console.log(`Cannot buy ${product}. Product value: ${result.toFixed(2)}`);
    } else {
        console.log(`${product} bought. Money left: ${Math.abs(result - budget).toFixed(2)}`);
    }
}

lettersSum(
    'milk',
    '1.4',
    '8'
    )