class RangeError extends Error{}

function* chain_diff(f, k){
    if(k <= 0) throw new RangeError();
    let x = (f(0) == 0) ? 0 : -f(0)
    yield x;
    let i = 1;
    while(true){
        let y = f(i * k)
        yield x - y;
        x = y;
        i++;
    }
}

let f = (x) => {return x*x}
let expected_results = [0, -4, -12, -20]

let iterator = chain_diff(f, 2)
for (let result of expected_results) {
    console.log(iterator.next().value, result);
}