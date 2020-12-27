function trekkingMania(arg) {
    let index = 0;
    let groupCounts = Number(arg[index])
    index++;
    let peopleCountInGroup = Number(arg[index])
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < groupCounts; i++) {
        peopleCountInGroup = Number(arg[index]);
        index++;

        if (peopleCountInGroup <= 5) {
            musala += peopleCountInGroup;
        } else if (peopleCountInGroup >= 6 && peopleCountInGroup <= 12) {
            montblanc += peopleCountInGroup
        } else if (peopleCountInGroup >= 13 && peopleCountInGroup <= 25) {
            kilimanjaro += peopleCountInGroup
        } else if (peopleCountInGroup >= 26 && peopleCountInGroup <= 40) {
            k2 += peopleCountInGroup
        } else if (peopleCountInGroup >= 41) {
            everest += peopleCountInGroup
        }

    }

    let allPeople = musala + montblanc + kilimanjaro + k2 + everest;

    console.log(`${((musala / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((montblanc / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((kilimanjaro / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((k2 / allPeople) * 100).toFixed(2)}%`)
    console.log(`${((everest / allPeople) * 100).toFixed(2)}%`)
}

trekkingMania(['5', '25', '41', '31', '250', '6'])