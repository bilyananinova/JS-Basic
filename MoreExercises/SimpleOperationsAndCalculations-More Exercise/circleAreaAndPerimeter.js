function circleAreaAndPerimeter(radius) {
    let r = Number(radius);

    let circleArea = Math.pow(r, 2) * Math.PI;
    let circlePerimeter = 2 * Math.PI * r;

    console.log(circleArea.toFixed(2));
    console.log(circlePerimeter.toFixed(2));
}

circleAreaAndPerimeter(4.5)