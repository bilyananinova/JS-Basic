function areaOfFigures(shape, arg1, arg2) {
    let area = 0;
    
    if (shape == "square") {
        let side = Number(arg1);
        area = side * side;
    } else if (shape == "rectangle") {
        let sideA = Number(arg1);
        let sideB = Number(arg2);
        area = sideA * sideB;
    } else if (shape == "circle") {
        let r = Number(arg1);
        area = Math.pow (r,2) * Math.PI;
    } else if (shape == "triangle"){
        let l = Number(arg1);
        let h = Number(arg2);
        area = l / 2 * h;
    }

    console.log(area.toFixed(3)); 
}

areaOfFigures("triangle", "4.5", "20")