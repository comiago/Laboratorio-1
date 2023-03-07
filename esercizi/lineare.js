function lineare(arr){
    let na = [];
    function f(a){
        if(a.push == undefined){
            na.push(a);
            return;
        }
        for(let i = 0; i < a.length; i++){
            f(a[i]);
        }
    }
    f(arr);
    return na;
}