class ErroreTarga extends Error{}
class ErroreCilindrata extends Error{}

class Veicolo{
    constructor(modello, targa){
        this.modello = modello;
        this.targa = targa;
    }
}

class Automobile extends Veicolo{
    constructor(modello, targa){
        if(targa.length != 7) throw new ErroreTarga();
        super(modello, targa);
    }
}

class Motoveicolo extends Veicolo{
    constructor(modello, targa, cilindrata){
        if(targa.length != 4) throw new ErroreTarga();
        super(modello, targa);
        this.cilindrata = cilindrata;
    }
}

class Motociclo extends Motoveicolo{
    constructor(modello, targa, cilindrata){
        if(cilindrata < 50) throw new ErroreCilindrata();
        super(modello, targa, cilindrata);
    }
}

class Ciclomotore extends Motoveicolo{
    constructor(modello, targa, cilindrata){
        if(cilindrata <= 0 || cilindrata > 50) throw new ErroreCilindrata();
        super(modello, targa, cilindrata);
    }
}

function massimoCilindrata(veicoli){
    if(veicoli.length <= 1) return veicoli[0].cilindrata;
    return Math.max(veicoli[0].cilindrata, massimoCilindrata(veicoli.slice(0,1)));
}

let c = new Ciclomotore("ciao", "r2d2", 40)
let m = new Motociclo("Desmosedici", "c3po", 1000)
let f = new Automobile("Ferrari Testarossa", "AA123BB")

console.log(massimoCilindrata([m,f,c])) //, 1000)