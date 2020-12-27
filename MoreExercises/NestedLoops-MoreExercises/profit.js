function profit(arg) {
    let oneLvCount = Number(arg[0]);
    let twoLvCount = Number(arg[1]);
    let fiveLv = Number(arg[2]);
    let sum = Number(arg[3]);
    let print = '';
    let counterA = 0;
    let counterB = 0;
    let counterC = 0;


    for (let a = 0; a <= oneLvCount; a++) {
        counterA++;

        for (let b = 0; b <= twoLvCount; b++) {
            counterB++;

            for (let c = 0; c <= fiveLv; c++) {
                counterC++;
            }
        }
    }
    if (((counterA * 1) + (counterB * 2) + (counterC * 5) === sum)) {
        print = `${counterA} * 1 lv. + ${counterB} * 2 lv. + ${counterC} * 5 lv. = ${sum} lv.  ---`

    }

    console.log(print)
}




profit(['5', '3', '1', '7'])