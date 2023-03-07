class PuntoCartesiano{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    dist(q){
        return Math.abs(Math.sqrt(Math.pow(this.x - q.x) + Math.pow(this.y - q.y)));
    }

    translate(q){
        // non so cosa è q
    }

    zero(){
        this.x = 0;
        this.y = 0;
    }
}