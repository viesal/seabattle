import {Map, humanMap, computerMap} from './Model/Map'
import {BattleField} from "./View/BattleField/BattleField";

window.onload = () => {
    let username = 'unknown';
    const result = prompt('Введите ваше имя', 'Вася');
    if (result) {
        username = result;
    }
    let battleField = new BattleField(document.body, username)
};