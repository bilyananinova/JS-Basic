function area(x1, y1, x2, y2) {

    let height = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let area = height * width;
    let perimeter = (height + width) * 2;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));

}

area(
    '600.25',
    '500.75',
    '100.50',
    '-200.5'
);