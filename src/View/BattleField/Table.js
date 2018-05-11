import {createElement} from "../../utils/createElement";

export class Table {
    constructor(container, username) {
        this.container = container;
        this.username = username;
        const abc = ['a', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и'];
        this.field = createElement(this.container, 'div', 'battleField');
        this.p = createElement(this.field, 'p')
        this.p.innerText = this.username;
        this.table = createElement(this.field, 'table', 'battleField__table');
        this.thead = createElement(this.table, 'thead');
        this.tbody = createElement(this.table, 'tbody');
        this.thead__title = createElement(this.thead, 'tr');
        this.tableMap = [];



        for (let rowNumber = 0; rowNumber < 10; rowNumber++) {
            const tr = createElement(this.tbody, 'tr', 'battleRow');
            this.tableMap.push([]);
            for (let columnNumber = 0; columnNumber < 11; columnNumber++) {
                if (rowNumber === 0) {
                    const th = createElement(this.thead__title, 'th', 'battleEllement');
                    th.innerText = abc[columnNumber - 1];
                    if (columnNumber === 0) {
                        th.innerText = '#';
                    }
                }
                if (columnNumber === 0) {
                    const th = createElement(tr, 'th', 'battleEllement');
                    th.innerText = rowNumber + 1;
                }
                else {
                    let td = createElement(tr, 'td', 'battleEllement');
                    this.tableMap[rowNumber].push(td);
                }
            }
        }
    }

    fillShip(ship){
        const shipPoint = ship.getShipPoints()
        for (const index in shipPoint){
            if (ship.length[index]){
                this.tableMap[shipPoint[index].y][shipPoint[index].x].innerText = 'k';
            }
        }
    }

    fillMiss(x,y){
        this.tableMap[y][x].innerText = 'm';
    }

    fillField(x, y, data) {
        this.tableMap[y][x].innerText = data;
    }
}