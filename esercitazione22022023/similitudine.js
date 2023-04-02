function similitudine(a, b) {
    let obj = {};
    for(let i = 0; i < a.length; i++){
        if(a[i] == b[i]) obj[a[i]] = i;
    }
    return obj;
}

console.log(similitudine("pippo", "pappa"));