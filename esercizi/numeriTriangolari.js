function triangleNumbers(n){
    console.log(n);
    if(n == 0) return 0;
    return n + triangleNumbers(n - 1);
}

console.log(triangleNumbers(6));