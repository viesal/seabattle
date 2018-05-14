import {Map, humanMap, computerMap} from './Map/Map'
import {BattleField} from "./BattleField/BattleField";

window.onload = () => {
    let username = 'unknown';
    const result = prompt('Введите ваше имя', 'Вася');
    if (result) {
        username = result;
    }
    let battleField = new BattleField(document.body, username)
};