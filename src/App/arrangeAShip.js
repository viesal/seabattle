export function arrangeAShip(map, shipSize) {
    let bust = true;
    let xCoords, yCoords, position;
    while (bust) {
        let size = shipSize - 1;
        xCoords = Math.round(-0.5 + Math.random() * (11 - shipSize) + 1) - 1;
        yCoords = Math.round(-0.5 + Math.random() * (11 - shipSize) + 1) - 1;
        position = Math.round(Math.random());
        if (position) {
            while (size >= 0) {
                // console.log('проверка', map[yCoords][xCoords + size], xCoords + size, yCoords)
                if (map[yCoords][xCoords + size] === 1 || (yCoords > 0 && map[yCoords - 1][xCoords + size] === 1) || (yCoords < 9 && map[yCoords + 1][xCoords + size] === 1) || (xCoords + size > 0 && map[yCoords][xCoords + size - 1] === 1)) {
                    bust = true;
                    break;
                } else {
                    bust = false;
                }
                size--;
            }
        } else {
            while (size >= 0) {
                // console.log('проверка', map[yCoords + size][xCoords], xCoords, yCoords + size)
                if (map[yCoords + size][xCoords] === 1 || (yCoords + size > 0 && map[yCoords + size - 1][xCoords] === 1) || (xCoords < 9 && map[yCoords + size][xCoords + 1] === 1) || (xCoords > 0 && map[yCoords + size][xCoords - 1] === 1)) {
                    bust = true;
                    break;
                } else {
                    bust = false;
                }
                size--;
            }
        }

    }
    for (let i = 0; i < shipSize; i++) {
        // если position = true, то корабль горизонтальный
        if (position) {
            map[yCoords][xCoords + i] = 1;
            // console.log('заполнение', xCoords + i, yCoords)
        }
        // иначе если position = false, то корабль вертикальный
        else {
            map[yCoords + i][xCoords] = 1;
            // console.log('заполнение', xCoords, yCoords + i)
        }
    }
    return map
}