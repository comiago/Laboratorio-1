function rimuovi_dispari(t) {
    if (!t.figli) return;
    for (let i = 0; i < t.figli.length; i++) {
        if (t.figli[i].val % 2 != 0) {
            t.figli.splice(i, 1);
            i--;
        } else
            rimuovi_dispari(t.figli[i]);
    }
    return t;
}

function visita_albero(t) {
    console.log(t.val);
    for (let i in t.figli) {
        visita_albero(t.figli[i]);
    }
}

let t = {val:12, figli:[{val: 8, figli: [{val: 4}, {val: 14}, {val: 2, figli:[{val:6}]}]},{val: 3, figli: [{val: 10, figli: [{val: 6, figli: [{val: 1}, {val: 5}, {val: 9, figli: [{val:1}]}] },{val: 13},{val: 6, figli: [{val: 7, figli: [{val: 1},{val: 16}]}]},]}]},{val: 14},{val: 2, figli:[{val:6}]},{val: 8},{val: 1, figli: [{val: 1}]}]}; 

rimuovi_dispari(t);
visita_albero(t) // [12, 8, 4, 14, 2, 6, 3, 10, 6, 6, 7, 16, 14, 2, 6, 8 ]);