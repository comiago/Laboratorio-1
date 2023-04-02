function raggruppa_nascita(persone){
    let obj = {};
    for(let i of persone){
        if(i.annonascita in obj) obj[i.annonascita].push(i);
        else obj[i.annonascita] = [i]
    }
    return obj;
}