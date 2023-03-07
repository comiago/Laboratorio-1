function copyTree(t){
    if(!t) return null;
    return {val: t.val, sx: copyTree(t.sx), dx: copyTree(t.dx)};
}

function map_tree(tree, sx_fun, dx_fun) {
    let tc = copyTree(tree);
    if(!sx_fun) sx_fun = (x) => x;
    if(!dx_fun) dx_fun = (x) => x;
    tc.val = dx_fun(tc.val);
    function fun(t){
        if(!t) return;
        if(t.sx) t.sx.val = sx_fun(t.sx.val);
        if(t.dx) t.dx.val = dx_fun(t.dx.val);
        fun(t.sx);
        fun(t.dx);
    }
    fun(tc);
    return tc;
}