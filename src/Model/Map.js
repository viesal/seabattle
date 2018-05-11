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
            return [...new Array(10)].map(() => {
                return 0;
            })
        });
        this.ships.forEach((ship) => {
            for (let i = 0; i < ship.length.length; i++) {
                if (ship.isHorisontal) {
                    map[ship.y][ship.x + i] = 1;
                } else {
                    map[ship.y + i][ship.x] = 1;
                }
            }
        });
        return map;
    }

    findShip(x, y){
        let targetShip
        const shipPoints = this.ships.map((ship)=>{
            ship.getShipPoints().forEach((coord, index)=>{
                if (coord.x === x && coord.y===y){
                    ship.length[index] = 1;
                    targetShip = ship;
                }
            })

        });
        return targetShip;
    }

    allShipKilled(){
        this.ships.forEach((ship)=>{

        })
    }
}

