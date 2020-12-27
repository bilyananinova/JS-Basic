function tradeCommissions(arg1, arg2) {
    let town = arg1;
    let sales = Number(arg2);

    let commisions = 0;
    let error = false;

    if (sales > 0 && sales <= 500) {
        switch (town) {
            case "Sofia": commisions = sales * 0.05; break;
            case "Varna": commisions = sales * 0.045; break;
            case "Plovdiv": commisions = sales * 0.055; break;
            default: error = true;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case "Sofia": commisions = sales * 0.07; break;
            case "Varna": commisions = sales * 0.075; break;
            case "Plovdiv": commisions = sales * 0.08; break;
            default: error = true;
        }
    } else if (sales > 1000 && sales <= 10000) {
        switch (town) {
            case "Sofia": commisions = sales * 0.08; break;
            case "Varna": commisions = sales * 0.10; break;
            case "Plovdiv": commisions = sales * 0.12; break;
            default: error = true;
        }
    } else if (sales >= 10000) {
        switch (town) {
            case "Sofia": commisions = sales * 0.12; break;
            case "Varna": commisions = sales * 0.13; break;
            case "Plovdiv": commisions = sales * 0.145; break;
            default: error = true;
        }
    } else {
        error = true;
    }

    if(!error) {
        console.log(commisions.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommissions("Bourgas", "1500")