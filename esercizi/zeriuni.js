class OutOfRangeError extends Error {}
class NonIntegerError extends Error {}

function zeriuni(n){
    if(n < 0 || n > 255) throw new OutOfRangeError();
    if(!Number.isInteger(n)) throw new NonIntegerError();
    let bin = [];
    while(n != 0){
        bin.push(n % 2);
        n = Math.floor(n / 2);
    }
    while(bin.length != 8)bin.unshift(0);
    return bin;
}

console.log(zeriuni(5));