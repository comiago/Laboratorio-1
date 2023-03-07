class NonCantaError extends Error{}

class Eurovision{
    constructor(){
        this.cantanti = [];
        this.sf1 = [];
        this.sf2 = [];
    }

    iscrivi(c){
        try{
            c.canta();
        } catch(e){
            throw new NonCantaError();
        }
        this.cantanti.push(c);
    }

    semifinale(n){
        this.sf1 = [];
        let copy = [...this.cantanti];
        while(copy.length > 0){
            let x = Math.floor(Math.random() * copy.length)
            if(n == 1){
                this.sf1.push(copy[x]);
            } else if(n == 2 && !()){

            copy.splice(x, 1);
            console.log(arr);
        }
        return arr;
    }
}

class Cantante {
    constructor(name){
        this.name = name;
    }

    canta(){
        console.log("viva il bro");
    }
}
class NonCantante { }
let c1 = new Cantante('maneskin')
let c2 = new Cantante('fedez')
let c3 = new Cantante('ariana')
let c4= new Cantante('hitler')
let c5 = new Cantante('mussolini')
let e =new Eurovision()
e.iscrivi(c1);
e.iscrivi(c2)
e.iscrivi(c3)
e.iscrivi(c5)
e.iscrivi(c4)
e.semifinale()