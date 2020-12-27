function evenPowersOf2(arg1) {
    let num = Number(arg1);

    for(let i = 0; i <= num; i += 2) {
        
        console.log(Math.pow(2,i))
    }
}

evenPowersOf2(4)