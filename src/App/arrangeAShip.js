export function arrangeAShip(map, shipSize) {
    let bust = true;
    let xCoords, yCoords, position;
    while (bust) {
        let size = shipSize;
        xCoords = Math.round(0.5 + Math.random() * 10) - 1;
        yCoords = Math.round(0.5 + Math.random() * 10) - 1;
        position = Math.round(Math.random());

        if (position) {
            if (xCoords + size < 10) {
                while (size > 0) {
                    console.log(map[xCoords + size][yCoords], xCoords + size, yCoords)
                    if (map[xCoords + size][yCoords] === 1 || map[xCoords + size - 1][yCoords] === 1 || map[xCoords + size][yCoords + 1] === 1 || map[xCoords + size][yCoords - 1] === 1) {
                        bust = true;
                    } else {
                        bust = false;
                    }
                    size--;
                }
            } else {
                while (size > 0) {
                    console.log(map[xCoords - size][yCoords], xCoords - size, yCoords)
                    if (map[xCoords - size][yCoords] === 1 || map[xCoords - size + 1][yCoords] === 1 || map[xCoords - size][yCoords + 1] === 1 || map[xCoords - size][yCoords - 1] === 1) {
                        bust = true;
                    } else {
                        bust = false;
                    }
                    size--;
                }
            }
        } else {
            if (yCoords + size < 10) {
                while (size > 0) {
                    console.log(map[xCoords][yCoords + size], xCoords, yCoords + size)
                    if (map[xCoords][yCoords + size] === 1 || map[xCoords][yCoords + size - 1] === 1 || map[xCoords + 1][yCoords + size] === 1 || map[xCoords - 1][yCoords + size] === 1) {
                        bust = true;
                    } else {
                        bust = false;
                    }
                    size--;
                }
            } else {
                while (size > 0) {
                    console.log(map[xCoords][yCoords - size], xCoords, yCoords - size)
                    if (map[xCoords][yCoords - size] === 1 || map[xCoords][yCoords - size + 1] === 1 || map[xCoords + 1][yCoords - size] === 1 || map[xCoords - 1][yCoords - size] === 1) {
                        bust = true;
                    } else {
                        bust = false;
                    }
                    size--;
                }
            }
        }

    }

    for (let i = 0; i < shipSize; i++) {
        // если position = true, то корабль горизонтальный
        if (position) {
            if (xCoords + shipSize > 10) {
                map[xCoords - i][yCoords] = 1;
            }
            else {
                map[xCoords + i][yCoords] = 1;
            }
        }
        // иначе если position = false, то корабль вертикальный
        else {
            if (yCoords + shipSize > 10) {
                map[xCoords][yCoords - i] = 1;
            }
            else {
                map[xCoords][yCoords + i] = 1;
            }
        }
    }
    return map
}