type arr<T> = Array<T | arr<T>>

function unpack<T>(a : arr<T>) : Array<T>{
    let array : Array<T> = [];
    for(let el of a) {
        if(Array.isArray(el)) array = array.concat(unpack<T>(el));
        else array.push(el)
    }
    return array;
}

console.log(unpack<number>([1,2,[3,4,[5,6],7],8,[9,10]]));