function norma(v){
    v['norma'] = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
    return v;
}

console.log(norma({'x': 1, 'y': 0}), {'x': 1, 'y': 0, 'norma': 1})