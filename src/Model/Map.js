import {arrangeAShip} from '../App/arrangeAShip.js'
import {Ship} from "./Ships/Ship";

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
        let {x, y, direction} = arrangeAShip(map, lenght);
        this.ships.push(new Ship(x, y, direction, lenght))
    }

    getMapShip() {
        let map = [...new Array(10)].map(() => {
            return new Array(10)
        });
        for (const ship of this.ships) {
            const shipPoint = ship.getShipPoints();
            shipPoint.forEach((item) => {
                map[item[1]][item[0]] = 1;
            });
        }
        return map;

    }
}

