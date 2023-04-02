let ROK = 'protestante'

class Persona{
    nome : string;
    genere : string;
    nascita : Date;
    morte ?: Date;
    religione : String;
    figli : Array<Persona>;

    constructor(nome : string, genere : string, religione : string, nascita : Date, figli : Array<Persona> = [], morte ?: Date){
        this.nome = nome;
        this.genere = genere;
        this.religione = religione;
        this.nascita = nascita;
        this.morte = morte;
        this.figli = figli;
    }

    eredi() : Array<Persona>{
        let arr : Array<Persona> = [...this.figli];
        let date = new Date(2011,10,28);
        this.figli.sort((a : Persona, b : Persona) : number => {
            if(a.genere == 'M' && b.genere == 'F' && b.nascita < date) return -1;
            if(a.genere == 'F' && a.nascita < date && b.genere == 'M') return 1;
            return a.nascita.valueOf()-b.nascita.valueOf();
        });
        for(let i = arr.length - 1; i >= 0; i--) if(arr[i].religione != ROK || arr[i].morte) arr.splice(i, 1);
        return arr;
    }
}

function y(anno:number):Date { return new Date(anno,1,1) }

let George=new Persona("George","M",ROK,y(2013)),
    Charlotte=new Persona("Charlotte","F",ROK,y(2015)),
    Louis=new Persona("Luis","M",ROK,y(2018)),
    William=new Persona("William","M",ROK,y(1982),[George,Charlotte,Louis])

let Archie=new Persona("Archie","M",ROK,y(2019)),
    Lilibet=new Persona("Lilibet","F",ROK,y(2021)),
    Harry=new Persona("Harry","M",ROK,y(1984),[Archie,Lilibet])

let Charles=new Persona("Charles","M",ROK,y(1948),[William,Harry])

let Savannah=new Persona("Savannah","F",ROK,y(2010)),
    Isla=new Persona("Isla","F",ROK,y(2012)),
    Peter=new Persona("Peter","M",ROK,y(1977),[Savannah,Isla])

let Mia=new Persona("Mia","F",ROK,y(2014)),
    Lena=new Persona("Lena","F",ROK,y(2018)),
    Lucas=new Persona("Lucas","M",ROK,y(2021)),
    Zara=new Persona("Zara","F",ROK,y(1981),[Mia,Lena,Lucas])

let Anne=new Persona("Anne","F",ROK,y(1950),[Peter,Zara])

let Sienna=new Persona("Sienna","F",ROK,y(2021)),
    Beatrice=new Persona("Beatrice","F",ROK,y(1988),[Sienna])

let August=new Persona("August","M",ROK,y(2021)),
    Eugenie=new Persona("Eugenie","F",ROK,y(1990),[August])

let Andrew=new Persona("Andrew","M",ROK,y(1960),[Beatrice, Eugenie])

let Louise=new Persona("Louise","F",ROK,y(2003)),
    James=new Persona("James","M",ROK,y(2007)),
    Edward=new Persona("Edward","M",ROK,y(1964),[Louise,James])

let Elizabeth2=new Persona("Elizabeth","F",ROK,y(1926),[Charles,Anne,Andrew,Edward])


// console.log(Elizabeth2.eredi()[0],Charles)
// console.log(Elizabeth2.eredi()[17],Peter)
console.log(Elizabeth2.eredi())