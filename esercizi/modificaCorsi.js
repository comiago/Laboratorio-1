function modificaCorsi(a){
    if(a.length == 0) return undefined;
    for(let i of a){
        if(i.numStudenti >= 150) i.semestre = 2;
        else if(i.numStudenti < 150) i.semestre = 1;
    }
    return a;
}