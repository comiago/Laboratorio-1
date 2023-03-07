function sommaArray(arr) {
    if(arr.length == 0) return 0
    return arr[0] + sommaArray(arr.slice(1))
}


console.log(
    sommaArray([1, 2, 3, 1])
)
