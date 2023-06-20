let alphabet = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ' ','\t', '\n', '\r', '\x0b', '\x0c'
];

function generateSequence(a, b, keyword){
    if(b == 0) return;
    else {
        for(let i of alphabet){
            a[b - 1] = i;
            generateSequence(a, b - 1, keyword);
            if(a.length == keyword.length && a.join("") == keyword) return a;
        }
    }
    return a;
}

let begin = Date.now();
let keyword = "giacom";
console.log(alphabet.length);
// console.log(generateSequence([], keyword.length, keyword));
console.log(Date.now() - begin);