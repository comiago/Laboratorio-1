function verifica(t){
    if(!(t.sx && t.dx)) return true;
    return ((t.sx && t.val > t.sx.val) && (t.dx && t.val > t.dx.val)) && verifica(t.sx) && verifica(t.dx);
}