function housePainting(houseHeight, wallLenght, triangleRoofHeight) {
    let x = Number(houseHeight);
    let y = Number(wallLenght);
    let h = Number(triangleRoofHeight);

    let wallArea = (x * y) * 2;
    let windowArea = (1.5 * 1.5) * 2;
    let paintAreas = wallArea - windowArea;
    let backWall = x * x;
    let frontWall = (x * x) - (1.2 * 2);
    let greenArea = paintAreas + backWall + frontWall;
    let greenPaint = greenArea / 3.4;

    let roofRectangular = x * y;
    let roofTriangle = (x * h) / 2;
    let redArea = (roofRectangular + roofTriangle) * 2;
    let redPaint = redArea / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting("10.25", "15.45", "8.88")