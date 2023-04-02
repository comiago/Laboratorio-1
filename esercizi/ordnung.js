function mySort(a, b){
    let i
    for(i = 0; i < Math.min(a.length, b.length); i++){
        if(a[i] < b[i]) return -1;
        else if(a[i] > b[i]) return 1;
    }
    if(a.length < b.length) return -1;
    return 1;
}

function ordnung(a){
    for(let i of a){
        i.sort();
    }
    a.sort(mySort);
}