function aquarium(length, width, height, arg) {
    let l = Number(length);
    let w = Number(width);
    let h = Number(height);
    let percent = Number(arg);

    let waterSize = l * w * h;
    let waterL = waterSize * 0.001;
    let percentage = percent / 100;
    let total = waterL - (waterL * percentage);

    console.log (total.toFixed(3));
}

aquarium ('85', '75', '47', '17');