function recursiveRodCutting(p, n){
    if(n == 0) return 0;
    let q = -Infinity;
    for(let i = 1; i <= n; i++) {
        q = Math.max(q, p[i - 1] + rodCutting(p, n - i));
    }
    return q;
}

function rodCutting(p, n){
    let r = [0];
    let s = [0];
    for(let j = 1; j <= n; j++){
        let q = -Infinity;
        for(let i = 1; i <= j; i++)
            if(q < p[i - 1] + r[j-i]){
                q = p[i - 1] + r[j-i];
                s[j] = i;
            }
        r.push(q);
    }
    return [r, s];
}

function printCut(p, n){
    let r, s;
    [r, s] = rodCutting(p, n);
    while(n > 0){
        console.log(s[n]);
        n -= s[n];
    }
}

p = [1,7,8,11];
printCut(p, 4);
console.log(rodCutting(p,4));