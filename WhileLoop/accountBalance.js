function accountBalance(arg) {
    let index = 0;
    let transactionCount = Number(arg[index]);
    index++;

    let balance = 0;
    let currentTransaction = 0;

    while (currentTransaction < transactionCount) {
        currentTransaction++;
        let transaction = Number(arg[index]);
        index++;

        if (transaction < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${transaction.toFixed(2)}`);
        balance += transaction;
    }

    console.log(`Total: ${balance.toFixed(2)}`)
}

accountBalance([
    '5',
    '120',
    '45.55',
    '-150',
])