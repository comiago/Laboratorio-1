function moveToEnd(a, k){
    let index = a.indexOf(k);
    if(index != -1){
        a.push(k);
        a.splice(index, 1);
    }
    return index;
}

function moveToFront(a, k){
    let index = a.indexOf(k);
    if(index != -1 && index != 0){
        a.unshift(k);
        a.splice(index + 1, 1);
    }
    return index;
}