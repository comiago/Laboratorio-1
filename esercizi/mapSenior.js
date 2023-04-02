function map_senior(db){
    for(let i of db) i['maggiorenne'] = (i.eta >= 18);
    return db;
}