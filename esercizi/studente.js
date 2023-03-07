class Studente{
    constructor(matr, name){
        this.matr = matr;
        this.name = name;
        this.carriera = [];
    }

    passato(esame){
        this.carriera.push(esame);
    }

    media(){
        
    }
}