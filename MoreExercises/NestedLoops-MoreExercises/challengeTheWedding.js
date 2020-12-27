function challengeTheWedding(arg) {
    let men = Number(arg[0]);
    let women = Number(arg[1]);
    let tables = Number(arg[2]);
    let print = '';
    let counter = 0;

    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            if(counter >= tables) {
                break;
            }
            print += `(${i} <-> ${j}) `;
            counter++;
        }
    }
    console.log(print)
}

challengeTheWedding(['2', '2', '3'])