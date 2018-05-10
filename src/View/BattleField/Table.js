import {createElement} from "../../utils/createElement";

export class Table {
    constructor(container) {
        this.container = container;
        const abc = ['a', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и'];
        this.field = createElement(this.container, 'div', 'battleField');
        this.table = createElement(this.field, 'table', 'battleField__table');
        this.thead = createElement(this.table, 'thead');
        this.tbody = createElement(this.table, 'tbody');
        this.thead__title = createElement(this.thead, 'tr');
        this.tableMap = [];
        for (let rowNumber = 0; rowNumber < 10; rowNumber++) {
            const row = createElement(this.tbody, 'tr', 'battleRow');
            this.tableMap.push([])
            for (let columnNumber = 0; columnNumber < 11; columnNumber++) {
                if (rowNumber === 0) {
                    const th = createElement(this.thead__title, 'th', 'battleEllement');
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
                    this.tableMap[rowNumber].push(column);
                    column.dataset.x = columnNumber;
                    column.dataset.y = rowNumber + 1;

                }
            }
        }
    }
    fillField(x, y, data){
        this.tableMap[x][y].innerText = data;
    }
}