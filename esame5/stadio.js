class SectorError extends Error {}

class Stadio{
    constructor(n, m){
        this.n = n;
        this.m = m;
        this.ospiti = [];
        this.casa = [];
    }

    prenota_posto(s, i){
        if(s == "casa" && !this.casa.includes(i) && this.casa.length <= this.m && this.m != 0){
            this.casa.push(i);
            return true;
        } else if(s == "ospiti" && !this.ospiti.includes(i) && this.ospiti.length <= this.n && this.n != 0){
            this.ospiti.push(i);
            return true;
        } else if(s != "casa" && s != "ospiti") throw new SectorError();
        return false;
    }

    posti_occupati(s){
        if(s == "casa") return this.casa.length;
        else if(s == "ospiti") return this.ospiti.length;
        else if(s != "casa" && s != "ospiti") throw new SectorError();
    }

    is_empty(){
        if(this.casa.length == 0 && this.ospiti.length == 0) return true;
        return false;
    }

    svuota_stadio(){
        this.casa = [];
        this.ospiti = [];
    }
}

s1 = new Stadio()
console.log(s1.prenota_posto("casa", 3));