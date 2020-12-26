function dancehall(l, w, a) {

    let hallArea = (Number(l) * 100) * (Number(w) * 100);
    let aArea = (Number(a) * 100) * (Number(a) * 100);
    let bench = hallArea / 10;
    let freeSpace = hallArea - aArea - bench;
    let dancers = freeSpace / (40 + 7000);

    console.log (Math.floor(dancers));
}

dancehall('50', '25', '2');