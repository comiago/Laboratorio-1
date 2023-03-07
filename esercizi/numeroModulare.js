class BadOpError extends Error{}

class NumeroModulare{
    constructor(v, m){
        this.v = v;
        this.m = m;
        this.nm = this.v % this.m;
    }

    add(n){
        if(this.m != n.m) throw new BadOpError();
        return new NumeroModulare(this.v + n.v, this.m);
    }

    equal(n){
        return this.nm == n.nm;
    }

    toString(){
        return `[${this.nm} % ${this.m}]`
    }
}