function honeyHarvest(arg1, arg2, arg3) {
    let flowerType = arg1;
    let floweCount = Number(arg2);
    let season = arg3;

    let honeyQty = 0;
    let honeyTotal = 0;

    if (season === 'Spring') {
        if (flowerType === 'Sunflower') {
            honeyQty = 10
        } else if (flowerType === 'Daisy') {
            honeyQty = 12
        } else if (flowerType === 'Lavender') {
            honeyQty = 12
        } else if (flowerType === 'Mint') {
            honeyQty = 10
        }

    } else if (season === 'Summer') {
        if (flowerType === 'Sunflower') {
            honeyQty = 8
        } else if (flowerType === 'Daisy') {
            honeyQty = 8
        } else if (flowerType === 'Lavender') {
            honeyQty = 8
        } else if (flowerType === 'Mint') {
            honeyQty = 12
        }

    } else if (season === 'Autumn') {
        if (flowerType === 'Sunflower') {
            honeyQty = 12
        } else if (flowerType === 'Daisy') {
            honeyQty = 6
        } else if (flowerType === 'Lavender') {
            honeyQty = 6
        } else if (flowerType === 'Mint') {
            honeyQty = 6
        }
    }



    if (season === 'Summer') {
        honeyQty = honeyQty * 1.10
    } else if (season === 'Autumn') {
        honeyQty = honeyQty * 0.95
    } else if (season === 'Spring') {
        if (flowerType === 'Daisy' || flowerType === 'Mint') {
            honeyQty = honeyQty * 1.10;
        }
    }

    honeyTotal = floweCount * honeyQty;

    console.log(`Total honey harvested: ${honeyTotal.toFixed(2)}`)
}
honeyHarvest('Daisy', '15', 'Spring')