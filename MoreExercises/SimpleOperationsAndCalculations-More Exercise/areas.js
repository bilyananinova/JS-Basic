function areas(input) {
    let type = input.shift(); 

    if (type == "square") {
        let sideA = Number(input.shift());
        let area = sideA * sideA;
        console.log(area.toFixed(3)); 
    }   else if (type == "rectangle") {
        let sideA = Number(input.shift());
        let sideB = Number(input.shift());
        let area = sideA * sideB;
        console.log(area.toFixed(3));  
    }   else if ( type == "circle") {
        let r = Number(input.shift());
        let area = Math.pow (r,2) * Math.PI;
        console.log(area.toFixed(3)); 
    }   else {
        let l = Number(input.shift());
        let h = Number(input.shift());
        let area = l / 2 * h;
        console.log(area.toFixed(3)); 
    }
}

areas ([
    "triangle",
    "4.5",
    "20"
])