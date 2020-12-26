function godzillaVsKong(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let people = Number(arg2);
    let pricePerCostum = Number(arg3);

    let decorAmount = budget * 0.10;
    let costumAmount = people * pricePerCostum;

    if (people > 150) {
        costumAmount = costumAmount * 0.90;
    }

    let totalMoney = decorAmount + costumAmount;

    if (totalMoney > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMoney-budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalMoney).toFixed(2)} leva left.`);
    }
    
}

godzillaVsKong(
    "9587.88",
    "222",
    "55.68"

)