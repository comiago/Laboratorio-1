Math.rational = function (x) {
    let number = x;
    let exp = 0;
    while ((number * 10) % 10 != 0){
        number *= 10;
        exp++;
    }
    return [number, 10**exp];
}