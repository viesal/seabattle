import {createElement} from "../utils/createElement";
import {View} from "../View/View";
import {Map} from "../Map/Map";
import "./BattleField.css";

export class BattleField {
    constructor(container, username) {
        this.container = container;
        this.username = username;
        this.app = createElement(this.container, 'div', 'app');

        this.block = createElement(this.container, 'div', 'block');

        this.humanBattleField = new View(this.app, this.username);
        this.humanBattleField.stepStatusHide(false);

        this.computerBattleField = new View(this.app, 'Компьютер');
        this.computerBattleField.stepStatusHide(true);

        this.humanMap = new Map();
        this.computerMap = new Map();

        this.fillTable(this.humanMap, this.humanBattleField);
        // this.fillTable(this.computerMap, this.computerBattleField);

        this.addClickEvent(this.computerBattleField);

        this.shotComputer = this.createTarget();
    }

    fillTable(map, field) {
        map.ships.forEach((item) => {
            for (let i = 0; i < item.length_ship.length; i++) {
                if (item.isHorisontal) {
                    field.fillField(item.x + i, item.y, 1)
                } else {
                    field.fillField(item.x, item.y + i, 1)
                }
            }
        })
    }

    addClickEvent(obj) {
        for (const [indexRow, row] of obj.tableMap.entries()) {
            for (const [indexColumn, column] of row.entries()) {
                column.addEventListener('click', () => {
                    this.moves(indexColumn, indexRow)
                }, {once: true})
            }
        }
    }

    createTarget() {
        let arr = [];
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                arr.push({x: x, y: y})
            }
        }
        return arr;
    }

    randomShot() {
        // console.log(this.shotComputer);
        const rand = Math.round(0.5 + Math.random() * (this.shotComputer.length)) - 1;
        const shot = this.shotComputer[rand];
        this.shotComputer.splice(rand, 1);
        return shot
    }

    shot(x, y, ship, battleField) {
        if (ship === undefined) {
            battleField.fillMiss(x, y);
            return false;
        } else {
            battleField.fillShip(ship);
            return true;
        }
    }

    moves(x, y) {
        if (!this.shot(x, y, this.computerMap.findShip(x, y), this.computerBattleField)) {
            this.computerBattleField.stepStatusHide(false);
            this.humanBattleField.stepStatusHide(true);
            this.block.style.display = 'block';
            let hit = true;
            setTimeout(() => {
                while (hit) {
                    const target = this.randomShot();
                    hit = this.shot(target.x, target.y, this.humanMap.findShip(target.x, target.y), this.humanBattleField);
                }
                this.computerBattleField.stepStatusHide(true);
                this.humanBattleField.stepStatusHide(false);
                this.block.style.display = 'none';
            }, 1000)

        }

        if (this.humanMap.allShipKilled()) {
            alert('Выиграл компьютер')
        } else if (this.computerMap.allShipKilled()) {
            alert('Выиграл ' + this.username)
        }
    }
}