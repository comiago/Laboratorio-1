function check(a, b){
    for(let i = 1; i < a.length; i++) if(a[i - 1] / b[i - 1] != a[i] / b[i]) return false;
    return true;
}

function lindip(a) {
    for(let i = 0; i < a.length; i++) for(let j = i + 1; j < a.length; j++) if(check(a[i], a[j])) return true;
    return false;
}