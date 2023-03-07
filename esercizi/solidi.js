class Solido{}

class Parallelepipedo extends Solido{
    constructor(larghezza, altezza, profondità){
        super();
        this.l = larghezza;
        this.h = altezza;
        this.p = profondità;
    }

    superficie(){
        return 2 * (this.l + this.p) * this.h + 2 * this.l * this.p;
    }

    volume(){
        return this.l * this.p * this.h;
    }
}

class Cubo extends Parallelepipedo{
    constructor(lato){
        super();
        this.l = lato;
        this.h = lato;
        this.p = lato;
    }
}

class Sfera extends Solido{
    constructor(raggio){
        super();
        this.r = raggio;
    }

    superficie(){
        return 12.56 * this.r * this.r;
    }

    volume(){
        return 4.19 * this.r * this.r * this.r;
    }
}

function sommaVolumiParallelepipedi(a){
    let sum = 0;
    for(let i of a){
        if(i instanceof Parallelepipedo){
            sum += i.volume();
        }
    }
    return sum.toFixed(2);
}