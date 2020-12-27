function cinema(type, rows, columns) {
    rows = Number(rows);
    columns = Number(columns);

    let premierePrice = 12.00;
    let normalPrice = 7.50;
    let discountPrice = 5.00;

    let income = 0;

    switch(type) {
        case 'Premiere': 
            income = (rows * columns) * premierePrice;
        break;
        case 'Normal': 
            income = (rows * columns) * normalPrice;
        break;
        case 'Discount': 
            income = (rows * columns) * discountPrice;
        break;
    }
    console.log(income.toFixed(2));
}

cinema(
    'Discount',
    '12',
    '30',   
)