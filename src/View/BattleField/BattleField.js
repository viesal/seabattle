import {createElement} from "../../utils/createElement";
import {humanMap} from "../../Model/Map";
import './BattleField.css';

export class BattleField {
    constructor(container) {
        this.container = container;
        const app = createElement(this.container, 'div', 'app');
        let humanBattleField = this.createTable(app);
        let computerBattleField = this.createTable(app);
        this.fillTable()
    }

    createTable(container) {
        const abc = ['a', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и']
        const field = createElement(container, 'div', 'battleField');
        const table = createElement(field, 'table', 'battleField__table');
        const thead = createElement(table, 'thead');
        const tbody = createElement(table, 'tbody');
        const thead__title = createElement(thead, 'tr');
        for (let rowNumber = 0; rowNumber < 10; rowNumber++) {
            const row = createElement(tbody, 'tr', 'battleRow');
            for (let columnNumber = 0; columnNumber < 11; columnNumber++) {
                if (rowNumber === 0) {
                    const th = createElement(thead__title, 'th', 'battleEllement');
                    th.innerText = abc[columnNumber - 1];
                    if (columnNumber === 0) {
                        th.innerText = '#';
                    }
                }
                if (columnNumber === 0) {
                    const th = createElement(row, 'th', 'battleEllement');
                    th.innerText = rowNumber + 1;
                }
                else {
                    let column = createElement(row, 'td', 'battleEllement');
                    column.dataset.x = columnNumber;
                    column.dataset.y = rowNumber + 1;
                }
            }
        }
    }

    fillTable() {
        humanMap.forEach((itemRow, indexRow)=>{
            itemRow.forEach((itemColumn,indexColumn)=>{
                console.log(indexColumn, indexRow, itemColumn)
            })
        })

        // for (let [index, item] of humanMap){
        //     console.log(index, item)
        // }
    }
}