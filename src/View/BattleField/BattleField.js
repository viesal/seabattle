import {createElement} from "../../utils/createElement";
import {humanMap} from "../../Model/Map";
import './BattleField.css';
import {Table} from "./Table";
import {Map} from "../../Model/Map";

export class BattleField {
    constructor(container, username) {
        this.container = container;
        this.username = username;
        this.app = createElement(this.container, 'div', 'app');
        this.humanBattleField = new Table(this.app, this.username);
        this.computerBattleField = new Table(this.app, 'Компьютер');

        this.humanMap = new Map();
        this.computerMap = new Map();

        this.fillTable(this.humanMap, this.humanBattleField);
        this.fillTable(this.computerMap, this.computerBattleField);

        this.addClickEvent(this.computerBattleField)

        this.shotComputer = this.createTarget();
    }

    fillTable(map, field) {
        map.ships.forEach((item) => {
            for (let i = 0; i < item.length.length; i++) {
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

                    //TODO: перенести в shot()
                    const ship_comp = this.computerMap.findShip(indexColumn, indexRow)
                    if (ship_comp === undefined) {
                        this.computerBattleField.fillMiss(indexColumn, indexRow)
                    } else {
                        this.computerBattleField.fillShip(ship_comp);
                    }
                    const target = this.randomShot()
                    const ship_human = this.humanMap.findShip(target.x, target.y)
                    if (ship_human === undefined) {
                        this.humanBattleField.fillMiss(target.x, target.y)
                    } else {
                        this.humanBattleField.fillShip(ship_human);
                    }
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
        console.log(this.shotComputer);
        const rand = Math.round(0.5 + Math.random() * (this.shotComputer.length)) - 1;
        const shot = this.shotComputer[rand];
        this.shotComputer.splice(rand, 1);
        return shot
    }

    shot(x, y, ship) {
        ///
    }
}