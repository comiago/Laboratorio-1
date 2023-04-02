/*
Si scriva una funzione JavaScript evenout(n) che, ricevuto come argomento un intero n≥0, restituisca un altro intero m così definito:

sia b la rappresentazione binaria di n
se b contiene un numero pari di 1, allora viene aggiunto uno 0 a destra di b
se b contiene un numero dispari di 1, allora viene aggiunto un 1 a destra di b
m è il valore decimale corrispondente a b modificato come indicato sopra
Si noti che alla fine, il numero di bit a 1 in m sarà sempre pari.
*/

function countOnes(a){
    let n = 0;
    for(let i of a) if(i == 1) n++;
    return n;
}

function evenout(n){
    let m = 0;
    let bin = [];
    while(n != 0){
        bin.push(n % 2);
        n = Math.floor(n / 2);
    }
    bin.reverse();
    if(countOnes(bin) % 2 == 0) bin.push(0);
    else bin.push(1);
    for(let i = 0; i < bin.length; i++) m += Math.pow(2, bin.length - (i + 1)) * bin[i];
    return m;
}

console.log(evenout(11)) // 23