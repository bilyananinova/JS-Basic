function pipesInPool(poolV, debitPipeOne, debitPipeTwo, hours) {
    let v = Number(poolV);
    let p1 = Number(debitPipeOne);
    let p2 = Number(debitPipeTwo);
    let h = Number(hours);

    let pipeOneFullForAllTime = p1 * h;
    let pipeTwoFullForAllTime = p2 * h;
    let totalDebit = pipeOneFullForAllTime + pipeTwoFullForAllTime;
    
    let percentFirstPipe = (pipeOneFullForAllTime / totalDebit) * 100;
    let percentSecondPipe = (pipeTwoFullForAllTime / totalDebit) * 100;
    let percent = (totalDebit / v) * 100;

    if (v >= totalDebit) {
        console.log(`The pool is ${percent.toFixed(2)}% full. Pipe 1: ${percentFirstPipe.toFixed(2)}%. Pipe 2: ${percentSecondPipe.toFixed(2)}%.`)
    }   else {
        console.log(`For ${h} hours the pool overflows with ${totalDebit - v} liters.`)
    }
}

pipesInPool("100", "100", "100", "2.5")