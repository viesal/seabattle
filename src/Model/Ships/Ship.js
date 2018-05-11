export class Ship {
    constructor(x, y, isHorisontal, lenght) {
        this.x = x;
        this.y = y;
        this.isHorisontal = isHorisontal;
        this.length = [...new Array(lenght)].map(() => {
            return 0;
        });
    }

    getShipPoints() {
        let shipPoint = [];
        for (let i = 0; i < this.length.length; i++) {
            if (this.isHorisontal) {
                shipPoint.push({x: this.x + i, y: this.y})
            } else {
                shipPoint.push({x: this.x, y: this.y + i})
            }
        }

        return shipPoint;
    }

}