import {Map, humanMap, computerMap} from './Model/Map'
import {BattleField} from "./View/BattleField/BattleField";

window.onload = () => {
    let map = new Map(humanMap)
    console.log(map)

    let battleField = new BattleField(document.body)
}