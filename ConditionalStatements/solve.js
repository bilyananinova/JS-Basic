function solve(priceHoliday, puzel , dols, bears, minions, trucks) {
 
  let sum = (puzel * 2.60) + (dols * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
  let countToys = puzel + dols + bears + minions + trucks;
 
  if (countToys >= 50){
    sum -= sum * 0.25;
  }
    sum -= sum * 0.10;    
 
  if (sum >= priceHoliday){
    console.log(`Yes! ${(sum - priceHoliday).toFixed(2)} lv left.`)
  } else {
    console.log(`Not enough money! ${Math.abs(sum - priceHoliday).toFixed(2)} lv needed.`);
  }
}
solve(320, 8, 2, 5, 5, 1);