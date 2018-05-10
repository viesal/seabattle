import {createElement} from "../../utils/createElement";
import {humanMap} from "../../Model/Map";
import './BattleField.css';
import {Table} from "./Table";
import {Map} from "../../Model/Map";

export class BattleField {
    constructor(container) {
        this.container = container;
        const app = createElement(this.container, 'div', 'app');
        this.humanBattleField = new Table(app);
        this.computerBattleField = new Table(app);
        let map = new Map();
        this.fillTable(map, this.humanBattleField)
        console.log(this.humanBattleField)
        console.log(map)
    }


    fillTable(map, field) {
        map.ships.forEach((item)=>{
            for (let i=0; i<item.lenght.length; i++){
                if (item.isHorisontal){
                    field.fillField(item.xCoord+i, item.yCoord, 1)
                } else {
                    field.fillField(item.xCoord, item.yCoord+i, 1)
                }
            }

        })

        // humanMap.forEach((itemRow, indexRow)=>{
        //     itemRow.forEach((itemColumn,indexColumn)=>{
        //         if (itemColumn === 1){
        //             console.log(indexColumn, indexRow)
        //         }
        //     })
        // })

        // for (let [index, item] of humanMap){
        //     console.log(index, item)
        // }
    }
}