function conta(a, b){
    let count = 0;
    for(let i of a) if(b.includes(i)) count++;
    return count;
}

function tombola(a, b){
    let c = conta(a, b);
    switch (c) {
        case 0:
            return "ritenta";
        case 1:
            return "quasi";
        case 2:
            return "ambo";
        case 3:
            return "terno";
        case 4:
            return "quaterna";
        default:
            return "tombola"
    }
}