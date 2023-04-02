function intdef(f, n){
    function fun(a, b) {
        let int = 0;
        let base = (b - a) / n;
        for(let i = a; i < b - base / 2; i += base) int += f(i + base / 2) * base;
        return int;
    }
    return fun;
}

console.log(Math.abs(intdef(x=>x,100)(0,5)))