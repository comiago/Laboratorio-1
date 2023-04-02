interface Node{
    val : number;
    grande : number;
    sx ?: Node;
    dx ?: Node;
}

function contaMax(t : Node) : number{
    if(!t.sx && !t.dx) return t.grande = t.val;
    return t.grande = Math.max(t.val, (t.sx) ? contaMax(t.sx) : -Infinity, (t.dx) ? contaMax(t.dx) : -Infinity);
}