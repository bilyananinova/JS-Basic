function building(arg) {
    let index = 0;
    let floors = Number(arg[index]);
    index++;
    let rooms = Number(arg[index]);
    index++;

    for (let floor = floors; floor >= 1; floor--) {
        let roomNumber = floor * 10;
        let currentFloor = "";
        for (let room = 1; room <= rooms; room++) {
            if (floor === floors) {
                currentFloor += (`L${roomNumber} `);
            } else if (floor % 2 === 0) {
                currentFloor += (`O${roomNumber} `);
            } else {
                currentFloor += (`A${roomNumber} `);
            }
            roomNumber++;
        }
        console.log(currentFloor)
    }

}

building(
    ['6', '4']
)