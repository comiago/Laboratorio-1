function cifre(n : number) : Array<number>{
    if(n == 0) return [];
    return cifre(Math.floor(n / 10)).concat([n % 10]);
}

function cifreInv(n : number) : Array<number>{
    if(n == 0) return [];
    return [n % 10].concat(cifreInv(Math.floor(n / 10)));
}