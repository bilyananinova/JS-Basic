function zooshop (dogs, otherAnimals) {
    let dogsFoodPrice = Number(dogs) * 2.5;
    let otherAnimalsFoodPrice = Number(otherAnimals) * 4.00;

    let foodPrice = dogsFoodPrice + otherAnimalsFoodPrice;

    console.log (foodPrice.toFixed(2) + " lv.");

}

zooshop ('13', '9')