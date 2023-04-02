function edit_distance(x, y) {
    let M = []
    let first_row = []
    for(let k = 0; k < x.length + 1; k++)
        first_row.push(k)
    M.push(first_row)
    
    // inizializzo tutti a 0 tranne la prima colonna che segue l'ordine della y
    for(let i = 1; i < y.length + 1; i++) {
        let arr = [i]
        for(let j = 1; j < x.length + 1; j++) arr.push(0)
        M.push(arr)
    }
    
    for(let i = 1; i < y.length + 1; ++i) {
        for(let j = 1; j < x.length + 1; ++j) {
            M[i][j] = Math.min(
                M[i - 1][j] + 1,
                M[i][j - 1] + 1,
                M[i - 1][j - 1] + ((y[i - 1] === x[j - 1] ? 0 : 1))
            )
        }
    }

    return M 
}

function rebuild(M, x, y) {
    let stringX = ''
    let stringY = ''
    let i = y.length
    let j = x.length
    
    while(i != 0 || j != 0) {
        switch(M[i][j]) {
            case (M[i - 1][j - 1] + ((y[i - 1] === x[j - 1] ? 0 : 1))):
                stringX = x[j - 1] + stringX
                stringY = y[i - 1] + stringY
                --i
                --j
                break
            case (M[i - 1][j] + 1):
                stringX = '_' + stringX
                stringY = y[i - 1] + stringY
                --i
                break
            case (M[i][j - 1] + 1):
                stringY = '_' + stringY
                stringX = x[j - 1] + stringX
                --j
                break
        }
    }
    return [stringX, stringY]
}

function print_matrix(m, x, y) {
    let str = '   / ';
    for(let k = 0; k < x.length; k++) str += x[k] + ' ';
    console.log(str)

    for(let i = 0; i < m.length; ++i) {
        let str = (y[i - 1] == undefined ? '/' : y[i - 1]) + '  ';
        for(let j = 0; j < m[i].length; ++j) {
            str += m[i][j].toString() + ' ';
        }
        console.log(str);
    }
}
let x = 'baccaba'
let y = 'abacab'
let m = edit_distance(x, y)
print_matrix(m, x, y)
console.log(rebuild(m, x, y))