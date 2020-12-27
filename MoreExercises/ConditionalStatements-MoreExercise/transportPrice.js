function transportPrice(kilometers, tarrif) {

    if (kilometers < 20) {
        if (tarrif == "day"){
            console.log((0.70 + kilometers * 0.79).toFixed(2));
        } else {
            console.log((0.70 + kilometers * 0.90).toFixed(2));
        }
    } else if (kilometers < 100){
        console.log((kilometers * 0.09).toFixed(2))
    } else if(kilometers >= 100) {
        console.log((kilometers * 0.06).toFixed(2));
    } 
}

transportPrice(7, "night");