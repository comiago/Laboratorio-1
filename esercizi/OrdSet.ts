class OrdSet<T>{
    cmp : (a : T, b : T) => number;
    set : Array<T>;

    constructor(cmp : (a : T, b : T) => number){
        this.cmp = cmp;
        this.set = [];
    }

    add(e : T) : void{
        let flag : boolean = true;
        for(let i of this.set) if(this.cmp(e, i) == 0) flag = false;
        if(flag) this.set.push(e);
    }

    remove(e : T) : void{
        for(let i = 0; i < this.set.length; i++) 
            if(this.cmp(e,this.set[i]) == 0){
                this.set.splice(i, 1);
                return;
            }
    }

    list() : Array<T>{
        this.set.sort(this.cmp);
        return this.set;
    }
}