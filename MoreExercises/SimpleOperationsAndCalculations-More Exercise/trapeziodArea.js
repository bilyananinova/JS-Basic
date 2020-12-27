function trapeziodArea(sideA, sideB, height) {
    let b1 = Number(sideA);
    let b2 = Number(sideB);
    let h = Number(height);

    let trapeziodArea = (b1 + b2) * h / 2;

    console.log(trapeziodArea.toFixed(2))

}

trapeziodArea("8", "13", "7")