class Prodotto{
    constructor(barcode, prezzo){
        this.barcode = barcode;
        this.prezzo = prezzo;
    }

    codice(){
        return this.barcode;
    }

    netto(){
        return this.prezzo;
    }

    lordo(){
        return this.prezzo * 1.22;
    }
}

class ProdottoAlimentare extends Prodotto{
    constructor(barcode, prezzo){
        super(barcode, prezzo);
    }

    lordo(){
        return this.prezzo * 1.1;
    }
}

function conto(a){
    let obj = {totale: 0, iva10: 0, iva22: 0};
    for(let e of a){
        obj.totale += e.lordo();
        if(e instanceof Prodotto && !(e instanceof ProdottoAlimentare)) obj.iva22 += e.lordo() - e.netto();
        else if(e instanceof ProdottoAlimentare) obj.iva10 += e.lordo() - e.netto();
    }
    return obj;
}