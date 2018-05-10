export function arrangeAShip(map, shipSize) {
    let bust = true;
    let x, y, direction;
    while (bust) {
        let size = shipSize - 1;
        x = Math.round(-0.5 + Math.random() * (11 - shipSize) + 1) - 1;
        y = Math.round(-0.5 + Math.random() * (11 - shipSize) + 1) - 1;
        direction = Math.round(Math.random());
        if (direction) {
            while (size >= 0) {
                if (map[y][x + size] === 1 || (y > 0 && map[y - 1][x + size] === 1) || (y < 9 && map[y + 1][x + size] === 1) || (x + size > 0 && map[y][x + size - 1] === 1)) {
                    bust = true;
                    break;
                } else {
                    bust = false;
                }
                size--;
            }
        } else {
            while (size >= 0) {
                if (map[y + size][x] === 1 || (y + size > 0 && map[y + size - 1][x] === 1) || (x < 9 && map[y + size][x + 1] === 1) || (x > 0 && map[y + size][x - 1] === 1)) {
                    bust = true;
                    break;
                } else {
                    bust = false;
                }
                size--;
            }
        }
    }

    return {x, y, direction}
}