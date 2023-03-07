function* decadimento(n, k){
    let exp = 0;
    while(true){
        yield n / (Math.pow(k, exp));
        exp++;
    }
}