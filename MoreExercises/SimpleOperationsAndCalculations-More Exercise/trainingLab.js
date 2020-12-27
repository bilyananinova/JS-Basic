function trainingLab(height, width) {
    let widthCm = width * 100;
    let heightCm = height * 100;

    let needDeskHeight = Math.floor(heightCm / 120);


    let widthWithoutCorridor = widthCm - 100;
    let needDeskWidht = Math.floor(widthWithoutCorridor / 70);

    let totalPlaces = needDeskHeight * needDeskWidht;
    let result = totalPlaces - 1 - 2;

    // 1 - for door
    // 2 - for teachers desk

    console.log(result);

}

trainingLab (8.4, 5.2)