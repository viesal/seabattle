import {createElement} from "../utils/createElement";
import '../View/View.css';
import miss from "../img/miss.svg";
import cross from "../img/cross.svg";


export class View {
    constructor(container, username) {
        this.container = container;
        this.username = username;
        const abc = ['a', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к'];

        this.field = createElement(this.container, 'div', 'battleField');

        this.fieldTitle = createElement(this.field, 'div', 'battleField__title');

        this.blockUserName = createElement(this.fieldTitle, 'div');
        this.pName = createElement(this.blockUserName, 'p');
        this.pName.innerText = this.username;

        this.stepStatus = createElement(this.fieldTitle, 'div');
        this.pStatus = createElement(this.stepStatus, 'p');
        this.pStatus.innerText = 'Ваш ход';
        this.pStatus.style.backgroundColor = '#00CC00';


        this.table = createElement(this.field, 'table', 'battleField__table');
        this.thead = createElement(this.table, 'thead');
        this.tbody = createElement(this.table, 'tbody');
        this.thead__title = createElement(this.thead, 'tr');
        this.tableMap = [];

        this.cross = document.createElement('div');
        this.cross.classList.add('shotResult');
        this.cross.style.backgroundImage = 'url(static/' + cross + ')';

        this.miss = document.createElement('div');
        this.miss.classList.add('shotResult');
        this.miss.style.backgroundImage = 'url(static/' + miss + ')';

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

    fillShip(ship) {
        const shipPoint = ship.getShipPoints();

        const result = ship.length_ship.reduce((sum, current) => {
            return sum + current;
        }, 0);

        for (const index in shipPoint) {
            const elem = this.tableMap[shipPoint[index].y][shipPoint[index].x];
            if (result === ship.length_ship.length) {
                elem.style.backgroundColor = '#A8AAAD';
                elem.innerText = '';
                elem.appendChild(this.cross.cloneNode());
                ship.isKill = 1;
            } else {
                if (ship.length_ship[index]) {
                    elem.innerText = '';
                    elem.appendChild(this.cross.cloneNode());
                }
            }

        }


    }

    fillMiss(x, y) {
        this.tableMap[y][x].appendChild(this.miss.cloneNode());
    }

    fillField(x, y) {
        this.tableMap[y][x].style.backgroundColor = '#dee2e6';
    }

    stepStatusHide(status){
        if (status){
            this.stepStatus.style.visibility = 'hidden';
        } else {
            this.stepStatus.style.visibility = 'visible';
        }
    }
}