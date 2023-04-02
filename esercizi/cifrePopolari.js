function mySort(a, b){
    if(a.occ > b.occ) return 1;
    if(a.occ < b.occ) return -1;
}

function cifrepopolari(n){
    let arr = [{n: 0, occ: 0}, {n: 1, occ: 0}, {n: 2, occ: 0}, {n: 3, occ: 0}, {n: 4, occ: 0}, {n: 5, occ: 0}, {n: 6, occ: 0}, {n: 7, occ: 0}, {n: 8, occ: 0}, {n: 9, occ: 0}];
    let sn = n.toString();
    for(let i of sn) if(i != '.') arr[i].occ++;
    arr.sort(mySort);
    let obj = {}
    obj[arr[0].n] = arr[0].occ;
    obj[arr[arr.length - 1].n] = arr[arr.length - 1].occ;
    return obj;
}

console.log(cifrepopolari(3.1415926535));

// {5: 3, 0: 0}