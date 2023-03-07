function sum(n){
    let s = 0;
    let sn = String(n);
    for(let i of sn) s += Number(i);
    return s;
}

function pesoAdd(n){
    let count = 0;
    function f(n){
        let s = sum(n);
        if(String(s).length > 1){
            count++;
            f(s);
        }
        else if(String(s).length == 1 && s != n) count++;
        else return s;
    }
    f(n);
    return count;
}

console.log(pesoAdd(1));