function gardens(sqmeter) {
    let area = Number(sqmeter);
    let price = 7.61;
    let discount = 0.18;

    let totalPrice = area * price;
    let totalDiscount = totalPrice * discount;
    let totalDiscountPrice = totalPrice - totalDiscount;

    console.log (`The final price is: ${totalDiscountPrice.toFixed(2)} lv.`);
    console.log (`The discount is: ${totalDiscount.toFixed(2)} lv.`);
}

gardens ('135')