function changeBureau(arg) {
    let bitcoinCount = Number(arg[0]);
    let chaineesYuan = Number(arg[1]);
    let comisionPercentage = Number(arg[2]);

    let bitcoinCountLeva = bitcoinCount * 1168;
    let chaineesYuanUsd = chaineesYuan * 0.15;
    let chaineesYuanLeva = chaineesYuanUsd * 1.76;

    let allLeva = bitcoinCountLeva + chaineesYuanLeva;
    let euro = allLeva / 1.95;
    let comision = euro * (comisionPercentage / 100);
    let totalEuro = euro - comision;

    console.log(totalEuro.toFixed(2))
}

changeBureau([ '7', '50200.12', '3' ])