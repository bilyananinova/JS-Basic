function newHouse(arg1, arg2, arg3) {
    let typeFlower = arg1;
    let flowerCount = Number (arg2);
    let budged = Number (arg3);

    let rosesPrice = 5.00;
    let dahliasPrice = 3.80;
    let tulipPrice = 2.80;
    let daffodilPrice = 3.00;
    let gladiolusPrice = 2.50;

    let flowerPrice = 0;

    switch(typeFlower) {
        case 'Roses':
            flowerPrice = flowerCount * rosesPrice;
            if(flowerCount > 80) {
                flowerPrice = flowerPrice * 0.90;
            }
        break;
        case 'Dahlias':
            flowerPrice = flowerCount * dahliasPrice;
            if(flowerCount > 90) {
                flowerPrice = flowerPrice * 0.85;
            }
        break;
        case 'Tulips':
            flowerPrice = flowerCount * tulipPrice;
            if(flowerCount > 80) {
                flowerPrice = flowerPrice * 0.85;
            }   
        break;
        case 'Narcissus':
            flowerPrice = flowerCount * daffodilPrice;
            if(flowerCount < 120) {
                flowerPrice = flowerPrice * 1.15;
            }
        break;
        case 'Gladiolus':
            flowerPrice = flowerCount * gladiolusPrice;
            if(flowerCount < 80) {
                flowerPrice = flowerPrice * 1.20;
            }
        break;
    }

    let diff = Math.abs(budged - flowerPrice);
    
    if(budged >= flowerPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${typeFlower} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}

newHouse(
    'Narcissus',
    '119',
    '360'

)