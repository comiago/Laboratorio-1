function deep(t){
    if(!t) return -1;
    return 1 + Math.max(deep(t.sx), deep(t.dx));
}

var T=
{   val: 5,
    sx: {   val: 7,
            sx: {   val: 'c' },
            dx: {   val: 5,
                    sx: {val: 10}
                }
        },
    dx: {   val: 'a',
            sx: {   val: 'b',
                    dx: {val: 7}
                },
            dx: {   val: 1}
        }
}

assert.equal(deep(T),10)