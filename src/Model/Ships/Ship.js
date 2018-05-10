export class Ship{
    constructor(xCoord, yCoord, isHorisontal, lenght){
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.isHorisontal = isHorisontal;
        this.lenght = [...new Array(lenght)].map(()=>{
            return 0;
        });
    }
    
    getShipPoints(){
        let shipPoint = [];
        for (let i=0; i<length.lenght; i++) {
            if (this.isHorisontal) {
                shipPoint.push([this.xCoord + i, this.yCoord])
            } else {
                shipPoint.push([this.xCoord, this.yCoord + i])
            }
        }
        return shipPoint;
    }

}