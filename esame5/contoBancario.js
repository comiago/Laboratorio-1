class InvalidMoney extends Error{}
class ExcessiveMoney extends Error{}
class InsufficientMoney extends Error{}

class ContoBancario{
    constructor(saldoiniziale, massimale){
        if(saldoiniziale < 0 || massimale < 0) throw new InvalidMoney();
        this.saldo = saldoiniziale;
        this.massimale = massimale;
    }

    deposito(valore){
        if(valore < 0) throw new InvalidMoney();
        else if(valore > this.massimale) throw new ExcessiveMoney();
        this.saldo += valore;
        return this.saldo;
    }

    prelievo(valore){
        if(valore < 0) throw new InvalidMoney();
        if(valore > this.saldo) throw new InsufficientMoney();
        this.saldo -= valore;
        return this.saldo;
    }
}

function applica(conto, depositi, prelievi){
    for(let i = 0; i < depositi.length; i++){
        try{
            conto.deposito(depositi[i]);
            conto.prelievo(prelievi[i]);
        } catch(e){
            if(e instanceof InvalidMoney) throw new InvalidMoney();
            else return false;
        }
    }
    return true;
}