function shopping(arg) {
    let index = 0;
    let budged = Number(arg[index]);
    index++;
    let videoCardCount = Number(arg[index]);
    index++;
    let procesorsCount = Number(arg[index]);
    index++;
    let ramMemoryCount = Number(arg[index]);
    index++;

    let videoCardPrice = 250;
    let procesorPrice = (videoCardCount * videoCardPrice) * 0.35;
    let ramMemoryPrice = (videoCardCount * videoCardPrice) * 0.10;

    let videoCardMoney = videoCardCount * videoCardPrice;
    let procesorMoney = procesorsCount * procesorPrice;
    let ramMemoryMoney = ramMemoryCount * ramMemoryPrice;

    let allMoney = videoCardMoney + procesorMoney + ramMemoryMoney;

    if(videoCardCount > procesorsCount){
        allMoney = allMoney * 0.85
    }

    if(budged >= allMoney) {
        console.log(`You have ${(budged - allMoney).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(allMoney - budged).toFixed(2)} leva more!`);
    }
}

shopping([
    '920.45', '3', '1', '1'
])