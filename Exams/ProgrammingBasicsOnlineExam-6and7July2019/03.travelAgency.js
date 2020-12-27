function travelAgency(arg) {
    let index = 0;
    let town = arg[index];
    index++;
    let type = arg[index];
    index++;
    let vipDiscount = arg[index];
    index++;
    let days = Number(arg[index]);

    let pricePerNight = 0;
    let totalAmount = 0;
    let discount = 0;
    let negativDays = false;
    let townError = false;
    let typeError = false;

    if (days > 7) {
        days -= 1
    } else if (days < 1) {
        negativDays = true;
    }

    switch (town) {
        case 'Bansko':
            if (type === 'noEquipment') {
                pricePerNight = 80;
                discount = 0.05;
            } else if (type === 'withEquipment') {
                pricePerNight = 100;
                discount = 0.10;
            }
            break;
        case 'Borovets':
            if (type === 'noEquipment') {
                pricePerNight = 80;
                discount = 0.05;
            } else if (type === 'withEquipment') {
                pricePerNight = 100;
                discount = 0.10;
            }
            break;
        case 'Varna':
            if (type === 'noBreakfast') {
                pricePerNight = 100;
                discount = 0.07;
            } else if (type === 'withBreakfast') {
                pricePerNight = 130;
                discount = 0.12;
            }
            break;
        case 'Burgas':
            if (type === 'noBreakfast') {
                pricePerNight = 100;
                discount = 0.07;
            } else if (type === 'withBreakfast') {
                pricePerNight = 100;
                discount = 0.07;
            }
            break;
        default:
            townError = true;
            typeError = true;
            break;
    }

    totalAmount = days * pricePerNight;

    if (vipDiscount === 'yes') {
        totalAmount = days * (pricePerNight - pricePerNight * discount);
    }
    
    if (townError && typeError) {
        console.log('Invalid input!');
    } else if (negativDays) {
        console.log("Days must be positive number!");
    } else if (totalAmount) {
        console.log(`The price is ${totalAmount.toFixed(2)}lv! Have a nice time!`);
    }

}

travelAgency([
    'Bansko',
    'noEquipment',
    'yes',
    '5'
])