function beehiveRole(arg1, arg2, arg3) {
    let intelect = Number(arg1);
    let power = Number(arg2);
    let gender = arg3;

    let role = '';

    if (intelect >= 80 && power >= 80 && gender === 'female') {
        role = 'Queen Bee';
    } else if (intelect >= 80) {
        role = 'Repairing Bee';
    } else if (intelect >= 60) {
        role = 'Cleaning Bee';
    } else if (intelect < 60 && power >= 80 && gender === 'male') {
        role = 'Drone Bee';
    } else if (intelect < 60 && power >= 60) {
        role = 'Guard Bee';
    } else {
        role = 'Worker Bee';
    }
    
    console.log(role)
}

beehiveRole('70', '56', 'male')