class IllegalOptionsError extends Error{};

class Fabbrica{
    static #counter = 0;
    get nFabbriche(){
        return Fabbrica.#counter;
    }
    constructor(prodotto){
        this.prodotto = prodotto;
        this.nProdotti = 0;
        Fabbrica.#counter++;
    }

    produci(opzioni){
        this.nProdotti++;
        for(let i in opzioni) if(i in this.prodotto) throw new IllegalOptionsError();
        return {...this.prodotto, ...opzioni};
    }
}