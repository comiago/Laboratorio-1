function copyTree(t){
    if(!t) return null; //undefined
    return {val: t.val, sx: copyTree(t.sx), dx: copyTree(t.dx)};
}

let tree = {
    'val': 5,
    'sx': {
        'val': 8,
        'sx': {
            'val': 2,
            'sx': null,
            'dx': null
        },
        'dx': {
            'val': 4,
            'sx': null,
            'dx': null
        }
    },
    'dx': {
        'val': 10,
        'sx': null,
        'dx': {
            'val': 7,
            'sx': null,
            'dx': null
        }
    }
}