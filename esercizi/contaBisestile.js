function contaBisestile(y1, y2){
    let count = 0;
    for(let i = y1; i <= y2; i++) if(i % 400 == 0 || (i % 4 == 0 && i % 100 != 0)) count++;
    return count;
}

console.log(contaBisestile(0,2020));