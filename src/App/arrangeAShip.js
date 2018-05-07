export function arrangeAShip(shipSize) {
    const xCoords = Math.round(0.5 + Math.random() * 10);
    const yCoords = Math.round(0.5 + Math.random() * 10);
    const position = Math.round(Math.random());
    let ship = [];
    for (let i = 0; i < shipSize; i++) {
        if (position) {
            if (xCoords+shipSize<=10) {
                ship.push([xCoords + i, yCoords])
            }
            else {
                ship.push([xCoords - i, yCoords])
            }
        }
        else {
            if (yCoords+shipSize<=10) {
                ship.push([xCoords, yCoords+i])
            }
            else {
                ship.push([xCoords, yCoords+i])
            }
        }
    }
    console.log(ship)
    return ship
}