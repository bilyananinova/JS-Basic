function flowerShop(magnolias, hyacinths, roses, cacti, giftPrice) {
    let sum = (Number(magnolias) * 3.25) + (Number(hyacinths) * 4) + (Number(roses) * 3.50) + (Number(cacti) * 8);
    let profit = sum * 0.95;

    if (profit > giftPrice) {
        console.log(`She is left with ${Math.floor(profit - giftPrice)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - profit)} leva.`)
    }
}

flowerShop(15, 7, 5, 10, 100);