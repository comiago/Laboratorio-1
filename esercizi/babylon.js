function* babylon(n){
    while(true){
        let x = n/2 + 1/n
        yield x;
        n = x;
    }
}