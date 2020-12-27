function poolDay(arg) {
    let index = 0;
    peopleCount = Number(arg[index]);
    index++;
    entireTax = Number(arg[index]);
    index++;
    sunbedPrice = Number(arg[index]);
    index++;
    umbrellaprice = Number(arg[index]);
    index++;

    let totalEntireTax = peopleCount * entireTax;
    let sunbedPeopleCount = Math.ceil(peopleCount * 0.75);
    let totalSunbedMoney = sunbedPeopleCount * sunbedPrice;
    let totalUmbrellaMoney = (Math.ceil(peopleCount * 0.50)) * umbrellaprice;

    let allMoney = totalEntireTax + totalSunbedMoney + totalUmbrellaMoney;

    console.log(`${allMoney.toFixed(2)} lv.`);
}

poolDay(
    [ '21', '5.50', '4.40', '6.20' ]
)