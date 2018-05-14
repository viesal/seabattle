import {Ship} from "../Ship/Ship";

export class Map {
    constructor() {
        this.ships = [];
        const arr = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
        for (const item of arr) {
            this.createShip(item);
        }
    }

    createShip(lenght) {
        let map = this.getMapShip();
        let {x, y, direction} = this.arrangeAShip(map, lenght);
        this.ships.push(new Ship(x, y, direction, lenght))
    }

    getMapShip() {
        let map = [...new Array(10)].map(() => {
            return [...new Array(10)].map(() => {
                return 0;
            })
        });
        this.ships.forEach((ship) => {
            for (let i = 0; i < ship.length_ship.length; i++) {
                if (ship.isHorisontal) {
                    map[ship.y][ship.x + i] = 1;
                } else {
                    map[ship.y + i][ship.x] = 1;
                }
            }
        });
        return map;
    }

    findShip(x, y) {
        let targetShip;
        this.ships.map((ship) => {
            ship.getShipPoints().forEach((coord, index) => {
                if (coord.x === x && coord.y === y) {
                    ship.length_ship[index] = 1;
                    targetShip = ship;
                }
            })

        });
        return targetShip;
    }

    allShipKilled() {
        let kill_list = 0;
        this.ships.forEach((ship) => {
            if (ship.isKill){
                kill_list++;
            }

        });
        if (kill_list === 10){
            return true;
        }
        else {
            return false;
        }
    }

    arrangeAShip(map, shipSize) {
        let bust = true;
        let x, y, direction;
        while (bust) {
            let size = shipSize - 1;
            x = Math.round(-0.5 + Math.random() * (11 - shipSize) + 1) - 1;
            y = Math.round(-0.5 + Math.random() * (11 - shipSize) + 1) - 1;
            direction = Math.round(Math.random());
            while (size >= 0) {
                if (direction) {
                    if (map[y][x + size] === 1 || (y > 0 && map[y - 1][x + size] === 1) || (y < 9 && map[y + 1][x + size] === 1) || (x + size > 0 && map[y][x + size - 1] === 1) || (x + size < 9 && map[y][x + size + 1] === 1)) {
                        bust = true;
                        break;
                    } else {
                        bust = false;
                    }
                } else {
                    if (map[y + size][x] === 1 || (y + size > 0 && map[y + size - 1][x] === 1) || (x < 9 && map[y + size][x + 1] === 1) || (x > 0 && map[y + size][x - 1] === 1) || (y + size < 9 && map[y + size + 1][x] === 1)) {
                        bust = true;
                        break;
                    } else {
                        bust = false;
                    }
                }
                size--;
            }
        }
        return {x, y, direction}
    }
}

