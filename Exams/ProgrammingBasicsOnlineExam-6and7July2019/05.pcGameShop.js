function pcGameShop(arg) {
    let index = 0;
    let gameCount = Number(arg[index]);
    index++;
    let gameName = arg[index];
    index++;

    let hearthstoneSum = 0;
    let forniteSum = 0;
    let overwatchSum = 0;
    let othersSum = 0;

    let hearthstonePercentage = 0;
    let fornitePercentage = 0;
    let overwatchPercentage = 0;
    let othersPercentage = 0;

    for (let i = 1; i <= gameCount; i++) {

        if (gameName === 'Hearthstone') {
            hearthstoneSum++;
        } else if (gameName === 'Fornite') {
            forniteSum++;
        } else if (gameName === 'Overwatch') {
            overwatchSum++;
        } else {
            othersSum++;
        }

        gameName = arg[index];
        index++;

    }

    hearthstonePercentage = (hearthstoneSum / gameCount) * 100;
    fornitePercentage = (forniteSum / gameCount) * 100;
    overwatchPercentage = (overwatchSum / gameCount) * 100;
    othersPercentage = (othersSum / gameCount) * 100;


    console.log(`Hearthstone - ${hearthstonePercentage.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercentage.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercentage.toFixed(2)}%`);
    console.log(`Others - ${othersPercentage.toFixed(2)}%`);

}

pcGameShop(
    [ '3', 'Hearthstone', 'Diablo 2', 'Star Craft 2' ]
)